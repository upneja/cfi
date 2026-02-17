import React, { useState, useMemo } from 'react';
import { executiveOrders } from './data/executiveOrders';

const CFIDashboard = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [selectedEO, setSelectedEO] = useState(null);
  const [filterAdmin, setFilterAdmin] = useState('all');
  const [filterFloor, setFilterFloor] = useState('all');
  const [filterScoreRange, setFilterScoreRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState('date');
  const [expandedLens, setExpandedLens] = useState({});

  const DIMENSIONS = { R: 'Rights', E: 'Equal', D: 'Democratic', SP: 'Separation', DP: 'Due Process', W: 'Welfare', N: 'Sovereignty' };
  const DIMENSION_ORDER = ['R', 'E', 'D', 'SP', 'DP', 'W', 'N'];
  const LENSES = { TX: { name: 'Textualist', color: '#4338ca' }, OR: { name: 'Originalist', color: '#0369a1' }, DC: { name: 'Doctrinalist', color: '#b45309' }, LC: { name: 'Living Constitutionalist', color: '#047857' }, PR: { name: 'Pragmatist', color: '#7e22ce' }, SM: { name: 'Steelman', color: '#be185d' } };
  const LENS_ORDER = ['TX', 'OR', 'DC', 'LC', 'PR', 'SM'];
  const EVALUATIVE_LENSES = ['TX', 'OR', 'DC', 'LC', 'PR'];
  const DIMENSION_WEIGHTS = { R: 1.0, E: 1.0, D: 1.0, SP: 1.0, DP: 1.0, W: 1.0, N: 1.0 };

  const N = LENS_ORDER.length, N_E = EVALUATIVE_LENSES.length;
  const computeRelevanceFiltering = (scores) => { const meanRelevance = {}, relevantDims = new Set(); DIMENSION_ORDER.forEach(dim => { const relevances = LENS_ORDER.map(lens => scores[lens][dim].r); meanRelevance[dim] = relevances.reduce((a, b) => a + b, 0) / N; if (meanRelevance[dim] >= 0.2) relevantDims.add(dim); }); return { meanRelevance, relevantDims }; };
  const computeConstitutionalFloor = (scores) => { let hasViolation = false, hasCaution = false; DIMENSION_ORDER.forEach(dim => { const negTwoCount = EVALUATIVE_LENSES.filter(l => scores[l][dim].s === -2).length; const negOneCount = EVALUATIVE_LENSES.filter(l => scores[l][dim].s === -1).length; if (negTwoCount >= 3) hasViolation = true; if (negOneCount >= 3) hasCaution = true; }); return hasViolation ? 'VIOLATION' : hasCaution ? 'CAUTION' : 'CLEAR'; };
  const computeAlignmentScore = (scores, relevantDims) => { let numerator = 0, denominator = 0; Array.from(relevantDims).forEach(dim => { const meanScore = EVALUATIVE_LENSES.reduce((sum, lens) => sum + scores[lens][dim].s, 0) / N_E; const meanRelevance = LENS_ORDER.reduce((sum, lens) => sum + scores[lens][dim].r, 0) / N; const weight = DIMENSION_WEIGHTS[dim]; numerator += weight * meanRelevance * meanScore; denominator += weight * meanRelevance; }); const A = denominator > 0 ? numerator / denominator : 0; const CFI = ((A + 2) / 4) * 100; return Math.max(0, Math.min(100, CFI)); };
  const computeDimensionalVariance = (scores, dim) => { const meanScore = EVALUATIVE_LENSES.reduce((sum, lens) => sum + scores[lens][dim].s, 0) / N_E; return EVALUATIVE_LENSES.reduce((sum, lens) => sum + Math.pow(scores[lens][dim].s - meanScore, 2), 0) / N_E; };
  const computeSteelmanDelta = (scores, relevantDims) => { let steelmanNum = 0, evaluativeNum = 0, denominator = 0; Array.from(relevantDims).forEach(dim => { const meanRelevance = LENS_ORDER.reduce((sum, lens) => sum + scores[lens][dim].r, 0) / N; const steelmanScore = scores['SM'][dim].s; const evaluativeScore = EVALUATIVE_LENSES.reduce((sum, lens) => sum + scores[lens][dim].s, 0) / N_E; steelmanNum += meanRelevance * steelmanScore; evaluativeNum += meanRelevance * evaluativeScore; denominator += meanRelevance; }); if (denominator === 0) return 0; const deltaS = (steelmanNum / denominator) - (evaluativeNum / denominator); return (deltaS / 4) * 100; };
  const aggregateEO = (eo) => { const { meanRelevance, relevantDims } = computeRelevanceFiltering(eo.scores); const floor = computeConstitutionalFloor(eo.scores); const cfi = computeAlignmentScore(eo.scores, relevantDims); const steelmanDelta = computeSteelmanDelta(eo.scores, relevantDims); const contestedDims = DIMENSION_ORDER.filter(dim => relevantDims.has(dim) && computeDimensionalVariance(eo.scores, dim) > 1.0); return { floor, cfi, steelmanDelta, contestedDims, relevantDims, meanRelevance }; };


  const computedEOs = useMemo(() => executiveOrders.map(eo => ({ ...eo, ...aggregateEO(eo) })), []);

  const [compareLenses, setCompareLenses] = useState(['TX', 'LC']);
  const [showRawData, setShowRawData] = useState(false);
  const currentPage = activePage === 'dashboard' ? 'home' : activePage;

  const filteredEOs = useMemo(() => {
    let result = [...computedEOs];
    if (filterAdmin !== 'all') result = result.filter(eo => eo.admin === filterAdmin);
    if (filterFloor !== 'all') result = result.filter(eo => eo.floor === filterFloor);
    if (sortBy === 'score') result.sort((a, b) => b.cfi - a.cfi);
    else result.sort((a, b) => new Date(b.date) - new Date(a.date));
    return result;
  }, [computedEOs, filterAdmin, filterFloor, sortBy]);

  const sc = (s) => s > 80 ? '#047857' : s > 60 ? '#059669' : s > 40 ? '#a16207' : s > 20 ? '#dc2626' : '#991b1b';
  const fd = (d) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const scoreLabel = (s) => s <= 20 ? 'Severe Constitutional Tension' : s <= 40 ? 'Significant Constitutional Tension' : s <= 60 ? 'Mixed Constitutional Alignment' : s <= 80 ? 'Moderate Constitutional Alignment' : 'Strong Constitutional Alignment';
  const consensus = (eo) => {
    const maxVar = Math.max(...DIMENSION_ORDER.map(d => {
      if (!eo.relevantDims || !eo.relevantDims.has(d)) return 0;
      const ms = EVALUATIVE_LENSES.reduce((s, l) => s + eo.scores[l][d].s, 0) / N_E;
      return EVALUATIVE_LENSES.reduce((s, l) => s + Math.pow(eo.scores[l][d].s - ms, 2), 0) / N_E;
    }));
    if (maxVar < 0.5) return { l: 'Broad Consensus', c: '#047857', b: '#ecfdf5' };
    if (maxVar <= 1.0) return { l: 'Moderate Agreement', c: '#a16207', b: '#fffbeb' };
    return { l: 'Significant Disagreement', c: '#b91c1c', b: '#fef2f2' };
  };
  const aS = { Obama: { bg: '#eff6ff', text: '#1e40af', border: '#bfdbfe' }, 'Trump I': { bg: '#fef2f2', text: '#991b1b', border: '#fecaca' }, Biden: { bg: '#eff6ff', text: '#1e40af', border: '#bfdbfe' }, 'Trump II': { bg: '#fef2f2', text: '#991b1b', border: '#fecaca' } };
  const fI = { VIOLATION: { bg: '#fef2f2', text: '#991b1b', border: '#fecaca', l: 'Violation' }, CAUTION: { bg: '#fffbeb', text: '#92400e', border: '#fde68a', l: 'Caution' }, CLEAR: { bg: '#ecfdf5', text: '#065f46', border: '#a7f3d0', l: 'Clear' } };
  const cC = { '-2': { bg: '#fef2f2', text: '#991b1b' }, '-1': { bg: '#fff7ed', text: '#9a3412' }, '0': { bg: '#f9fafb', text: '#9ca3af' }, '1': { bg: '#ecfdf5', text: '#065f46' }, '2': { bg: '#d1fae5', text: '#064e3b' } };

  const Tag = ({ children, s }) => <span style={{ display: 'inline-flex', alignItems: 'center', padding: '2px 10px', borderRadius: 99, fontSize: '0.75rem', fontWeight: 500, backgroundColor: s.bg, color: s.text, border: `1px solid ${s.border}`, whiteSpace: 'nowrap' }}>{children}</span>;

  const RadarChart = ({ scores, w = 260, h = 260 }) => {
    const cx = w / 2, cy = h / 2, R = Math.min(cx, cy) - 32, n = 7;
    const pt = (i, pct) => { const a = (i * 2 * Math.PI / n) - Math.PI / 2; return [cx + R * pct * Math.cos(a), cy + R * pct * Math.sin(a)]; };
    const poly = (vals) => vals.map((v, i) => pt(i, v).join(',')).join(' ');
    const evalL = EVALUATIVE_LENSES;
    const meanV = DIMENSION_ORDER.map(d => { const m = evalL.reduce((s, l) => s + scores[l][d].s, 0) / N_E; return (m + 2) / 4; });
    const minV = DIMENSION_ORDER.map(d => { const vals = evalL.map(l => scores[l][d].s); return (Math.min(...vals) + 2) / 4; });
    const maxV = DIMENSION_ORDER.map(d => { const vals = evalL.map(l => scores[l][d].s); return (Math.max(...vals) + 2) / 4; });
    const labelData = DIMENSION_ORDER.map((d, i) => {
      const a = (i * 2 * Math.PI / n) - Math.PI / 2, lr = R + 20;
      return { d, x: cx + lr * Math.cos(a), y: cy + lr * Math.sin(a), anchor: Math.abs(Math.cos(a)) < 0.15 ? 'middle' : Math.cos(a) > 0 ? 'start' : 'end' };
    });
    return (
      <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: w }}>
        {[0.25, 0.5, 0.75, 1].map(p => <polygon key={p} points={poly(Array(n).fill(p))} fill="none" stroke={p === 0.5 ? '#d1d5db' : '#f3f4f6'} strokeWidth={p === 0.5 ? 0.75 : 0.5} strokeDasharray={p === 0.5 ? '3,3' : 'none'} />)}
        {DIMENSION_ORDER.map((_, i) => { const [x, y] = pt(i, 1); return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#f3f4f6" strokeWidth="0.5" />; })}
        <polygon points={poly(maxV)} fill="rgba(79,70,229,0.04)" stroke="none" />
        <polygon points={poly(minV)} fill="rgba(250,250,249,1)" stroke="none" />
        <polygon points={poly(meanV)} fill="rgba(79,70,229,0.10)" stroke="#4f46e5" strokeWidth="2" />
        {meanV.map((v, i) => { const [x, y] = pt(i, v); return <circle key={i} cx={x} cy={y} r="3.5" fill="#4f46e5" />; })}
        {labelData.map(({ d, x, y, anchor }) => <text key={d} x={x} y={y} textAnchor={anchor} dominantBaseline="middle" style={{ fontSize: 10, fontWeight: 600, fill: '#6b7280' }}>{d}</text>)}
        <text x={cx + 4} y={cy - R * 0.5 - 8} style={{ fontSize: 8, fill: '#c7c7c7' }}>neutral</text>
      </svg>
    );
  };

  const ScoreBar = ({ score, size = 'sm' }) => {
    const color = sc(score);
    if (size === 'lg') return (<div><div style={{ fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.03em', color }}>{Math.round(score)}</div><div style={{ fontSize: '0.7rem', color: '#9ca3af', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 2 }}>CFI Score</div><div style={{ fontSize: '0.75rem', color, fontWeight: 500, marginTop: 4 }}>{scoreLabel(score)}</div><div style={{ width: '100%', height: 5, backgroundColor: '#f3f4f6', borderRadius: 3, marginTop: 10, overflow: 'hidden' }}><div style={{ height: '100%', borderRadius: 3, width: `${score}%`, backgroundColor: color, transition: 'width 0.5s' }} /></div></div>);
    return (<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', flexShrink: 0 }}><span style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', color }}>{Math.round(score)}</span><div style={{ width: 56, height: 3, backgroundColor: '#f3f4f6', borderRadius: 2, marginTop: 4, overflow: 'hidden' }}><div style={{ height: '100%', borderRadius: 2, width: `${score}%`, backgroundColor: color }} /></div></div>);
  };

  const HomePage = () => {
    const recent = [...computedEOs].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
    return (<div>
      <div style={{ backgroundColor: '#1e1b4b', margin: '-48px -24px 0', padding: '56px 24px 64px' }}>
        <h1 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, margin: 0 }}>Constitutional<br/>Fidelity Index</h1>
        <p style={{ color: '#a5b4fc', fontSize: '1.05rem', marginTop: 16, lineHeight: 1.6, maxWidth: 540 }}>Real-time constitutional evaluations of government actions, powered by transparent AI and grounded in six distinct interpretive lenses.</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
          <button onClick={() => setActivePage('explore')} style={{ backgroundColor: '#fff', color: '#1e1b4b', padding: '10px 22px', borderRadius: 8, fontWeight: 600, fontSize: '0.875rem', border: 'none', cursor: 'pointer' }}>Explore Evaluations &rarr;</button>
          <button onClick={() => setActivePage('howItWorks')} style={{ backgroundColor: 'transparent', color: '#c7d2fe', padding: '10px 22px', borderRadius: 8, fontWeight: 500, fontSize: '0.875rem', border: '1px solid #4338ca', cursor: 'pointer' }}>How It Works</button>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, margin: '40px 0 36px' }}>
        {['Obama', 'Trump I', 'Biden', 'Trump II'].map(admin => { const eos = computedEOs.filter(e => e.admin === admin); const avg = eos.reduce((s, e) => s + e.cfi, 0) / eos.length; const v = eos.filter(e => e.floor === 'VIOLATION').length; return (
          <div key={admin} style={{ backgroundColor: '#fff', borderRadius: 12, padding: 20, border: '1px solid #f3f4f6' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{admin}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 6 }}><span style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em', color: sc(avg) }}>{avg.toFixed(1)}</span><span style={{ fontSize: '0.7rem', color: '#d1d5db' }}>avg</span></div>
            <div style={{ width: '100%', height: 3, backgroundColor: '#f3f4f6', borderRadius: 2, marginTop: 10, overflow: 'hidden' }}><div style={{ height: '100%', borderRadius: 2, width: `${avg}%`, backgroundColor: sc(avg) }} /></div>
            {v > 0 && <div style={{ fontSize: '0.7rem', color: '#b91c1c', marginTop: 8, fontWeight: 500 }}>{v} violation{v !== 1 ? 's' : ''}</div>}
          </div>); })}
      </div>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', margin: '0 0 16px', letterSpacing: '-0.01em' }}>Latest Evaluations</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {recent.map(eo => (<div key={eo.id} onClick={() => setSelectedEO(eo)} style={{ backgroundColor: '#fff', borderRadius: 12, border: '1px solid #f3f4f6', padding: 20, cursor: 'pointer', transition: 'box-shadow 0.15s' }} onMouseEnter={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'} onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}><Tag s={fI[eo.floor]}>{fI[eo.floor].l}</Tag><span style={{ fontSize: '1.25rem', fontWeight: 700, color: sc(eo.cfi) }}>{Math.round(eo.cfi)}</span></div>
          <div style={{ fontWeight: 600, color: '#111827', fontSize: '0.9rem', lineHeight: 1.3 }}>{eo.title}</div>
          <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: 6 }}>{eo.admin} &middot; {fd(eo.date)}</div>
        </div>))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 32 }}><button onClick={() => setActivePage('explore')} style={{ color: '#4f46e5', fontWeight: 500, fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer' }}>View all {computedEOs.length} evaluations &rarr;</button></div>
    </div>);
  };

  const ExplorePage = () => (<div>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', letterSpacing: '-0.02em', margin: '0 0 8px' }}>All Evaluations</h2>
    <p style={{ color: '#9ca3af', margin: '0 0 24px' }}>100 executive orders across four administrations, scored against seven constitutional dimensions.</p>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
      {[[filterAdmin, setFilterAdmin, [['all','All Administrations'],['Obama','Obama'],['Trump I','Trump I'],['Biden','Biden'],['Trump II','Trump II']]], [filterFloor, setFilterFloor, [['all','All Statuses'],['VIOLATION','Violations'],['CAUTION','Caution'],['CLEAR','Clear']]], [sortBy, setSortBy, [['date','By Date'],['score','By Score']]]].map(([val, set, opts], i) => (
        <select key={i} value={val} onChange={e => set(e.target.value)} style={{ fontSize: '0.85rem', backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, padding: '7px 12px', color: '#4b5563', cursor: 'pointer', outline: 'none' }}>{opts.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select>
      ))}
      <span style={{ fontSize: '0.75rem', color: '#9ca3af', marginLeft: 'auto' }}>{filteredEOs.length} of {computedEOs.length}</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {filteredEOs.map(eo => (<div key={eo.id} onClick={() => setSelectedEO(eo)} style={{ backgroundColor: '#fff', borderRadius: 12, border: '1px solid #f3f4f6', padding: '18px 20px', cursor: 'pointer', transition: 'box-shadow 0.15s, border-color 0.15s' }} onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'; e.currentTarget.style.borderColor = '#e5e7eb'; }} onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#f3f4f6'; }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 600, color: '#111827' }}>{eo.title}</span>
              <Tag s={aS[eo.admin]}>{eo.admin}</Tag>
              <Tag s={fI[eo.floor]}>{fI[eo.floor].l}</Tag>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: 5 }}>{fd(eo.date)} &middot; {eo.type}</div>
            <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: 6, lineHeight: 1.5, margin: '6px 0 0' }}>{eo.desc}</p>
          </div>
          <ScoreBar score={eo.cfi} />
        </div>
      </div>))}
    </div>
  </div>);

  const DetailView = () => {
    const cn = consensus(selectedEO);
    const evalLenses = EVALUATIVE_LENSES;
    return (<div>
      <button onClick={() => setSelectedEO(null)} style={{ fontSize: '0.85rem', color: '#4f46e5', fontWeight: 500, marginBottom: 28, display: 'inline-flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>&#8592; Back</button>
      {/* Summary Card */}
      <div style={{ backgroundColor: '#fff', borderRadius: 16, border: '1px solid #f3f4f6', padding: 32, marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', letterSpacing: '-0.02em', margin: 0 }}>{selectedEO.title}</h2>
            <div style={{ fontSize: '0.85rem', color: '#9ca3af', marginTop: 6 }}>{fd(selectedEO.date)} &middot; {selectedEO.type}</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}><Tag s={aS[selectedEO.admin]}>{selectedEO.admin}</Tag><Tag s={fI[selectedEO.floor]}>{fI[selectedEO.floor].l}</Tag><Tag s={{ bg: cn.b, text: cn.c, border: cn.b }}>{cn.l}</Tag></div>
            <p style={{ color: '#4b5563', marginTop: 20, lineHeight: 1.7, fontSize: '0.875rem' }}>{selectedEO.brief}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, flexShrink: 0 }}>
            <div style={{ width: 140 }}><ScoreBar score={selectedEO.cfi} size="lg" /></div>
            <RadarChart scores={selectedEO.scores} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 28 }}>
          <div style={{ backgroundColor: '#fafaf9', borderRadius: 10, padding: 14 }}><div style={{ fontSize: '0.65rem', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Steelman Delta</div><div style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: 3, color: selectedEO.steelmanDelta >= 0 ? '#047857' : '#b91c1c' }}>{selectedEO.steelmanDelta >= 0 ? '+' : ''}{selectedEO.steelmanDelta.toFixed(1)}</div></div>
          <div style={{ backgroundColor: '#fafaf9', borderRadius: 10, padding: 14 }}><div style={{ fontSize: '0.65rem', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contested Dimensions</div><div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginTop: 3 }}>{selectedEO.contestedDims.length > 0 ? selectedEO.contestedDims.join(', ') : 'None'}</div></div>
          <div style={{ backgroundColor: '#fafaf9', borderRadius: 10, padding: 14 }}><div style={{ fontSize: '0.65rem', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Floor Status</div><div style={{ fontSize: '0.85rem', fontWeight: 600, marginTop: 3, color: fI[selectedEO.floor].text }}>{fI[selectedEO.floor].l}</div></div>
        </div>
      </div>
      {/* Heatmap */}
      <div style={{ backgroundColor: '#fff', borderRadius: 16, border: '1px solid #f3f4f6', padding: 32, marginBottom: 24 }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', margin: '0 0 16px' }}>Dimensional Scoring Matrix</h3>
        <table style={{ width: '100%', fontSize: '0.85rem', borderCollapse: 'collapse' }}>
          <thead><tr>
            <th style={{ textAlign: 'left', padding: '8px 10px', fontSize: '0.65rem', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.04em', borderBottom: '1px solid #f3f4f6' }}>Dimension</th>
            {LENS_ORDER.map(l => <th key={l} style={{ padding: '8px 10px', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', textAlign: 'center', borderBottom: '1px solid #f3f4f6', color: LENSES[l].color }}>{l}</th>)}
          </tr></thead>
          <tbody>{DIMENSION_ORDER.map((d, i) => <tr key={d}>
            <td style={{ padding: '8px 10px', fontWeight: 500, color: '#374151', borderBottom: i < 6 ? '1px solid #fafafa' : 'none' }}>{DIMENSIONS[d]}</td>
            {LENS_ORDER.map(l => { const cell = selectedEO.scores[l][d]; const cc = cC[String(cell.s)] || cC['0']; return <td key={`${d}-${l}`} style={{ padding: '8px 10px', textAlign: 'center', fontWeight: 600, backgroundColor: cc.bg, color: cc.text, borderBottom: i < 6 ? '1px solid #fafafa' : 'none' }}>{cell.s > 0 ? '+' : ''}{cell.s}</td>; })}
          </tr>)}</tbody>
        </table>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 14, paddingTop: 10, borderTop: '1px solid #fafafa' }}>
          {[{s:'-2',l:'Strong tension'},{s:'-1',l:'Tension'},{s:'0',l:'Neutral'},{s:'1',l:'Aligned'},{s:'2',l:'Strongly aligned'}].map(({s,l}) => <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.65rem', color: '#9ca3af' }}><div style={{ width: 10, height: 10, borderRadius: 2, backgroundColor: cC[s].bg, border: `1px solid ${cC[s].text}20` }} /><span>{l}</span></div>)}
        </div>
      </div>
      {/* Side-by-Side Lens Comparison */}
      <div style={{ backgroundColor: '#fff', borderRadius: 16, border: '1px solid #f3f4f6', padding: 32, marginBottom: 24 }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>Lens Comparison</h3>
        <p style={{ fontSize: '0.8rem', color: '#9ca3af', margin: '0 0 16px' }}>Select lenses to compare their reasoning side by side.</p>
        <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
          {evalLenses.map(l => {
            const active = compareLenses.includes(l);
            return <button key={l} onClick={() => setCompareLenses(active ? compareLenses.filter(x => x !== l) : [...compareLenses, l].slice(-3))} style={{ padding: '6px 14px', borderRadius: 99, fontSize: '0.8rem', fontWeight: 500, cursor: 'pointer', border: `1.5px solid ${active ? LENSES[l].color : '#e5e7eb'}`, backgroundColor: active ? LENSES[l].color + '10' : '#fff', color: active ? LENSES[l].color : '#9ca3af', transition: 'all 0.15s' }}>{LENSES[l].name}</button>;
          })}
        </div>
        {compareLenses.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${compareLenses.length}, 1fr)`, gap: 20 }}>
            {compareLenses.map(l => (
              <div key={l}>
                <div style={{ fontWeight: 600, fontSize: '0.85rem', color: LENSES[l].color, marginBottom: 12, paddingBottom: 8, borderBottom: `2px solid ${LENSES[l].color}` }}>{LENSES[l].name}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 16 }}>
                  {DIMENSION_ORDER.map(d => { const cell = selectedEO.scores[l][d]; const cc = cC[String(cell.s)] || cC['0']; return (
                    <div key={d} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 8px', borderRadius: 4, backgroundColor: cc.bg }}>
                      <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{DIMENSIONS[d]}</span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: cc.text }}>{cell.s > 0 ? '+' : ''}{cell.s}</span>
                    </div>); })}
                </div>
                <p style={{ fontSize: '0.8rem', color: '#4b5563', lineHeight: 1.6, margin: 0 }}>{selectedEO.narratives[l]}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Steelman Defense */}
      <div style={{ backgroundColor: '#fdf8f6', borderRadius: 16, border: '1px solid #f3e8e2', padding: 32, marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#be185d' }} />
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#be185d', margin: 0 }}>Constitutional Defense (Steelman)</h3>
        </div>
        <p style={{ fontSize: '0.8rem', color: '#92400e', margin: '0 0 16px', fontStyle: 'italic' }}>The strongest possible constitutional argument in favor of this action, regardless of overall evaluation.</p>
        <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>{selectedEO.narratives.SM}</p>
        <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid #f3e8e2', display: 'flex', gap: 20 }}>
          <div><span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Steelman Delta</span><div style={{ fontWeight: 700, color: selectedEO.steelmanDelta >= 0 ? '#047857' : '#b91c1c', marginTop: 2 }}>{selectedEO.steelmanDelta >= 0 ? '+' : ''}{selectedEO.steelmanDelta.toFixed(1)}</div></div>
          <div><span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Interpretation</span><div style={{ fontSize: '0.85rem', color: '#374151', marginTop: 2, fontWeight: 500 }}>{selectedEO.steelmanDelta > 15 ? 'Strong defense available' : selectedEO.steelmanDelta > 5 ? 'Moderate defense available' : selectedEO.steelmanDelta >= 0 ? 'Marginal defense' : 'Defense weaker than consensus'}</div></div>
        </div>
      </div>
      {/* Fork This Logic */}
      <div style={{ backgroundColor: '#fff', borderRadius: 16, border: '1px solid #f3f4f6', padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div><h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', margin: '0 0 4px' }}>Fork This Logic</h3><p style={{ fontSize: '0.8rem', color: '#9ca3af', margin: 0 }}>Access the raw evaluation data for this executive order.</p></div>
          <button onClick={() => setShowRawData(!showRawData)} style={{ padding: '8px 16px', borderRadius: 8, fontSize: '0.8rem', fontWeight: 500, cursor: 'pointer', border: '1px solid #e5e7eb', backgroundColor: showRawData ? '#1e1b4b' : '#fff', color: showRawData ? '#fff' : '#4b5563' }}>{showRawData ? 'Hide Data' : 'View JSON'}</button>
        </div>
        {showRawData && <pre style={{ backgroundColor: '#1e1b4b', color: '#a5b4fc', padding: 20, borderRadius: 10, fontSize: '0.7rem', overflow: 'auto', maxHeight: 360, marginTop: 16, lineHeight: 1.5 }}>{JSON.stringify({ id: selectedEO.id, title: selectedEO.title, date: selectedEO.date, admin: selectedEO.admin, computed: { cfi: Math.round(selectedEO.cfi * 10) / 10, floor: selectedEO.floor, steelmanDelta: Math.round(selectedEO.steelmanDelta * 10) / 10, contestedDims: selectedEO.contestedDims }, scores: selectedEO.scores }, null, 2)}</pre>}
      </div>
    </div>);
  };

  const HowItWorksPage = () => (<div>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', letterSpacing: '-0.02em', margin: '0 0 8px' }}>How It Works</h2>
    <p style={{ color: '#9ca3af', margin: '0 0 32px' }}>The Constitutional Fidelity Index evaluates executive actions through a structured, multi-lens framework.</p>
    <div style={{ backgroundColor: '#fff', borderRadius: 16, border: '1px solid #f3f4f6', padding: 32, marginBottom: 24 }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', margin: '0 0 20px' }}>The Seven Dimensions</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {DIMENSION_ORDER.map(d => (<div key={d} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9ca3af', backgroundColor: '#fafaf9', borderRadius: 6, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{d}</span>
          <div><div style={{ fontWeight: 600, color: '#111827', fontSize: '0.9rem' }}>{DIMENSIONS[d]}</div><p style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.5, margin: '4px 0 0' }}>
            {d === 'R' && 'Individual rights and liberties under the Bill of Rights: speech, assembly, privacy, arms, and other fundamental freedoms.'}
            {d === 'E' && "Equal protection and non-discrimination under the Fourteenth Amendment. No person shall be denied equal protection of the laws."}
            {d === 'D' && 'Democratic legitimacy, representation, voting rights, and popular sovereignty. Executive actions must respect democratic institutions.'}
            {d === 'SP' && 'Separation of powers and checks and balances. The central question: does the action respect the constitutional allocation of authority?'}
            {d === 'DP' && 'Due process and rule of law. Both procedural fairness (notice, hearing) and substantive due process (fundamental rights).'}
            {d === 'W' && 'General welfare and the common good. Does the action serve broad public interests or narrow constituencies?'}
            {d === 'N' && 'National sovereignty, security, and territorial integrity. The constitutional balance between security powers and civil liberties.'}
          </p></div>
        </div>))}
      </div>
    </div>
    <div style={{ backgroundColor: '#fff', borderRadius: 16, border: '1px solid #f3f4f6', padding: 32, marginBottom: 24 }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', margin: '0 0 20px' }}>The Six Lenses</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {LENS_ORDER.map(l => (<div key={l} style={{ paddingLeft: 14, borderLeft: `3px solid ${LENSES[l].color}` }}>
          <div style={{ fontWeight: 600, color: LENSES[l].color, fontSize: '0.9rem' }}>{LENSES[l].name}</div>
          <p style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.5, margin: '4px 0 0' }}>
            {l === 'TX' && 'Evaluates actions against the plain text of the Constitution. Treats constitutional language as the primary source of meaning.'}
            {l === 'OR' && 'Examines original intent based on founding-era documents, debates, and historical context.'}
            {l === 'DC' && 'Evaluates adherence to established judicial doctrine and stare decisis. Favors settled law and precedent over novel interpretations.'}
            {l === 'LC' && 'Recognizes that constitutional meaning evolves as society develops new understandings of liberty and equality.'}
            {l === 'PR' && 'Evaluates real-world consequences through empirical data and comparative analysis of peer democracies.'}
            {l === 'SM' && 'Constructs the strongest constitutional defense. A methodological check against bias in evaluation.'}
          </p>
        </div>))}
      </div>
    </div>
    <div style={{ backgroundColor: '#fff', borderRadius: 16, border: '1px solid #f3f4f6', padding: 32 }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', margin: '0 0 24px' }}>The Six-Step Pipeline</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {[
          { n: 1, t: 'Relevance Filtering', d: 'Calculate mean relevance per dimension. Exclude dimensions below threshold (\u03C4 = 0.2) to prevent noise.' },
          { n: 2, t: 'Constitutional Floor', d: 'Flag VIOLATION if \u22653 evaluative lenses score \u22122 on any dimension. Flag CAUTION if \u22653 score \u22121.' },
          { n: 3, t: 'Alignment Score', d: 'Weighted mean of relevant dimensions, normalized to 0\u2013100. Formula: CFI = ((A + 2) / 4) \u00D7 100.' },
          { n: 4, t: 'Dimensional Variance', d: 'Flag dimensions as "contested" where variance across lenses exceeds 1.0.' },
          { n: 5, t: 'Steelman Delta', d: 'Compare steelman defense to evaluative consensus. Positive delta = strong defense available.' },
          { n: 6, t: 'Precedent Anchoring', d: 'Cross-reference against analogous actions for partisan symmetry and consistency.' }
        ].map(s => (<div key={s.n} style={{ display: 'flex', gap: 14 }}>
          <span style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: '#eef2ff', color: '#4f46e5', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>{s.n}</span>
          <div><div style={{ fontWeight: 600, color: '#111827', fontSize: '0.9rem' }}>{s.t}</div><p style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.5, margin: '3px 0 0' }}>{s.d}</p></div>
        </div>))}
      </div>
    </div>
  </div>);

  const ScholarsPage = () => (<div>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', letterSpacing: '-0.02em', margin: '0 0 8px' }}>For Developers &amp; Scholars</h2>
    <p style={{ color: '#9ca3af', margin: '0 0 32px' }}>The CFI is open infrastructure. Audit the methodology, fork the evaluation logic, or build on the data.</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
      {[['System Prompts', '7 specialized prompts for the classifier and six interpretive lenses. Each defines the lens persona, constitutional framework, and scoring criteria.', '6 prompts'],
        ['Scoring Schema', 'JSON Schema defining the evaluation output format: per-lens, per-dimension scores with relevance weights and confidence levels.', 'JSON Schema'],
        ['Integrity Tests', '25 partisan symmetry pairs and 15 framing invariance tests to detect and prevent evaluative bias.', '40 tests']
      ].map(([title, desc, stat]) => (<div key={title} style={{ backgroundColor: '#fff', borderRadius: 12, border: '1px solid #f3f4f6', padding: 24 }}>
        <div style={{ fontWeight: 600, color: '#111827', marginBottom: 8 }}>{title}</div>
        <p style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.5, margin: '0 0 12px' }}>{desc}</p>
        <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{stat}</div>
      </div>))}
    </div>
    <div style={{ backgroundColor: '#fff', borderRadius: 16, border: '1px solid #f3f4f6', padding: 32, marginBottom: 24 }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', margin: '0 0 16px' }}>Governance Model</h3>
      <div style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.7 }}>
        <p style={{ margin: '0 0 12px' }}>The CFI operates as a public, debatable artifact. Every scoring decision, system prompt, and aggregation parameter is open for review and challenge through a structured proposal process modeled on Python Enhancement Proposals (PEPs).</p>
        <p style={{ margin: '0 0 12px' }}>Prompt versions are tracked with semantic versioning. Changes to scoring methodology require public comment periods and advisory board review before implementation. The integrity testing framework ensures that changes do not introduce partisan bias.</p>
        <p style={{ margin: 0 }}>This is not a black box. If you disagree with how a lens evaluates a particular dimension, you can submit a proposal to modify the system prompt, fork the entire evaluation pipeline, or run parallel evaluations with alternative parameters.</p>
      </div>
    </div>
    <div style={{ backgroundColor: '#1e1b4b', borderRadius: 16, padding: 32, color: '#fff' }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 8px' }}>Architecture Overview</h3>
      <p style={{ fontSize: '0.85rem', color: '#a5b4fc', lineHeight: 1.6, margin: '0 0 20px' }}>100 executive orders &times; 6 lenses &times; 7 dimensions = 4,200 individual scoring cells, each with score, relevance, and confidence values.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {[['1,092', 'Scoring Cells'], ['26', 'Executive Orders'], ['42', 'Cells per EO'], ['6', 'Pipeline Steps']].map(([v, l]) => (<div key={l}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{v}</div>
          <div style={{ fontSize: '0.7rem', color: '#a5b4fc', marginTop: 2 }}>{l}</div>
        </div>))}
      </div>
    </div>
  </div>);

  const DocumentsPage = () => (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.03em', margin: '0 0 8px' }}>Documents</h1>
      <p style={{ color: '#6b7280', margin: '0 0 32px', lineHeight: 1.6 }}>The source documents that define the CFI methodology. The whitepaper is the authoritative specification; the policy brief is a non-technical overview.</p>
      <div style={{ display: 'grid', gap: 20 }}>
        {[
          { title: 'CFI Whitepaper v4', file: '/docs/CFI_Whitepaper_v4.pdf', desc: 'The complete technical specification: 6 interpretive lenses (Bobbitt\'s modalities), 7 constitutional dimensions, 5-tier source corpus, 6-step aggregation procedure, governance model, and integrity testing framework.', pages: '14 pages' },
          { title: 'CFI Policy Brief #1', file: '/docs/CFI_Policy_Brief_1.pdf', desc: 'A non-technical overview of the Constitutional Fidelity Index for policymakers, journalists, and the general public. Covers the four key outputs, fairness guarantees, and how to interpret results.', pages: '5 pages' }
        ].map(doc => (
          <a key={doc.file} href={doc.file} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ backgroundColor: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: 32, transition: 'border-color 0.15s, box-shadow 0.15s', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#4f46e5'; e.currentTarget.style.boxShadow = '0 0 0 1px #4f46e5'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: 8 }}>{doc.title}</div>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{doc.desc}</p>
                </div>
                <div style={{ flexShrink: 0, marginLeft: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#9ca3af', fontWeight: 500 }}>{doc.pages}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );

  const navLinks = [['home','Home'],['explore','Evaluations'],['howItWorks','How It Works'],['scholars','For Scholars'],['docs','Documents']];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafaf9', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <nav style={{ backgroundColor: '#1e1b4b', padding: '0 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 52 }}>
          <span onClick={() => { setActivePage('home'); setSelectedEO(null); }} style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', letterSpacing: '-0.01em' }}>CFI</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {navLinks.map(([id, label]) => <button key={id} onClick={() => { setActivePage(id); setSelectedEO(null); }} style={{ color: currentPage === id ? '#fff' : '#818cf8', fontSize: '0.8rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0' }}>{label}</button>)}
          </div>
        </div>
      </nav>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '48px 24px' }}>
        {selectedEO ? <DetailView /> :
         currentPage === 'home' ? <HomePage /> :
         currentPage === 'explore' ? <ExplorePage /> :
         currentPage === 'howItWorks' ? <HowItWorksPage /> :
         currentPage === 'docs' ? <DocumentsPage /> :
         <ScholarsPage />}
      </div>
    </div>
  );
};

export default CFIDashboard;
