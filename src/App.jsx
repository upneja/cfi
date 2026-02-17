import React, { useState, useMemo } from 'react';

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

  const executiveOrders = [
    // ===== OBAMA ERA =====
    {
      id: 'daca', title: 'DACA (Deferred Action for Childhood Arrivals)', date: '2012-06-15', type: 'Executive Memorandum', admin: 'Obama',
      desc: 'Granted temporary protection from deportation to childhood arrivals of undocumented immigrants.',
      brief: 'In June 2012, President Obama issued an executive memorandum directing DHS to defer deportation for certain undocumented immigrants brought to the US as children. The policy created a presumption against deportation for individuals who arrived before age 16, had lived in the US for at least 5 years, and had no serious criminal record. Approximately 800,000 people benefited. The action raised significant separation-of-powers concerns—the Constitution grants Congress exclusive authority over immigration. Critics argued the Executive exceeded prosecutorial discretion by creating a blanket non-enforcement category rather than case-by-case decisions.',
      scores: {
        TX: { R:{s:0,r:0.4,c:"M"}, E:{s:-1,r:0.7,c:"H"}, D:{s:-1,r:0.8,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:0,r:0.3,c:"M"}, W:{s:1,r:0.5,c:"M"}, N:{s:-1,r:0.6,c:"M"} },
        OR: { R:{s:0,r:0.3,c:"M"}, E:{s:-1,r:0.6,c:"H"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:0,r:0.2,c:"M"}, W:{s:1,r:0.4,c:"M"}, N:{s:-1,r:0.5,c:"M"} },
        DC: { R:{s:0,r:0.3,c:"M"}, E:{s:-1,r:0.6,c:"M"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-1,r:0.8,c:"H"}, DP:{s:0,r:0.3,c:"M"}, W:{s:1,r:0.5,c:"M"}, N:{s:-1,r:0.5,c:"M"} },
        LC: { R:{s:1,r:0.9,c:"H"}, E:{s:2,r:0.8,c:"H"}, D:{s:0,r:0.5,c:"M"}, SP:{s:0,r:0.4,c:"M"}, DP:{s:1,r:0.7,c:"H"}, W:{s:2,r:0.8,c:"H"}, N:{s:1,r:0.3,c:"L"} },
        PR: { R:{s:1,r:0.8,c:"H"}, E:{s:1,r:0.7,c:"H"}, D:{s:0,r:0.6,c:"M"}, SP:{s:-1,r:0.7,c:"M"}, DP:{s:1,r:0.6,c:"M"}, W:{s:2,r:0.9,c:"H"}, N:{s:0,r:0.4,c:"M"} },
        SM: { R:{s:1,r:0.8,c:"H"}, E:{s:1,r:0.7,c:"H"}, D:{s:0,r:0.5,c:"M"}, SP:{s:0,r:0.5,c:"M"}, DP:{s:1,r:0.6,c:"M"}, W:{s:2,r:0.9,c:"H"}, N:{s:0,r:0.4,c:"M"} }
      },
      narratives: { TX: 'The INA does not explicitly authorize deferred action programs of this scope. Article I, Section 8 commits immigration regulation to Congress. Creating a categorical non-enforcement policy for 800,000 people exceeds prosecutorial discretion—this is de facto legislation by the Executive.', OR: 'The Founders placed naturalization power in Congress. Prosecutorial discretion existed at the Founding but its scope was narrow—individual cases, not categorical classes. This program\'s magnitude exceeds historical executive practice.', DC: 'Prosecutorial discretion is a recognized doctrine (Heckler v. Chaney), but categorical deferred action for 800,000 people lacks precedent. Courts have recognized case-by-case enforcement discretion, not blanket non-enforcement categories of this magnitude.', LC: 'The Constitution\'s arc toward equality supports protecting children who had no agency in their arrival. Equal protection rejects penalizing persons for circumstances beyond their control. Congressional inaction justifies executive action to implement constitutional values.', PR: 'DACA recipients contribute economically ($300B+ GDP), have lower crime rates, and peer democracies grant similar protections. Deporting 800,000 economically productive people would be counterproductive.', SM: 'Prosecutorial discretion includes category-based enforcement policies. Congress\'s 30-year failure to reform immigration effectively delegates the problem to the Executive. The Take Care Clause permits systematic enforcement approaches.' }
    },
    {
      id: 'clean-power', title: 'Clean Power Plan', date: '2015-08-03', type: 'Executive/EPA Rule', admin: 'Obama',
      desc: 'First national carbon emission limits on power plants via EPA regulatory authority under Clean Air Act.',
      brief: 'The Clean Power Plan used EPA authority under the Clean Air Act to impose the first national limits on carbon emissions from existing power plants, requiring states to reduce emissions 32% below 2005 levels by 2030. The constitutional issues centered on federalism and agency authority. In West Virginia v. EPA (2022), the Supreme Court struck it down 6-3, holding the EPA exceeded its authority under the "major questions doctrine."',
      scores: {
        TX: { R:{s:0,r:0.2,c:"L"}, E:{s:0,r:0.1,c:"L"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:0,r:0.3,c:"M"}, W:{s:0,r:0.4,c:"M"}, N:{s:-1,r:0.8,c:"H"} },
        OR: { R:{s:0,r:0.3,c:"M"}, E:{s:0,r:0.2,c:"L"}, D:{s:-1,r:0.6,c:"H"}, SP:{s:-2,r:0.8,c:"H"}, DP:{s:0,r:0.2,c:"L"}, W:{s:0,r:0.4,c:"M"}, N:{s:-2,r:0.8,c:"H"} },
        DC: { R:{s:0,r:0.2,c:"L"}, E:{s:0,r:0.2,c:"L"}, D:{s:-1,r:0.6,c:"H"}, SP:{s:-2,r:0.8,c:"H"}, DP:{s:0,r:0.2,c:"L"}, W:{s:0,r:0.4,c:"M"}, N:{s:-1,r:0.7,c:"H"} },
        LC: { R:{s:1,r:0.8,c:"H"}, E:{s:1,r:0.7,c:"H"}, D:{s:0,r:0.5,c:"M"}, SP:{s:0,r:0.4,c:"M"}, DP:{s:0,r:0.3,c:"L"}, W:{s:2,r:0.9,c:"H"}, N:{s:1,r:0.6,c:"M"} },
        PR: { R:{s:2,r:0.9,c:"H"}, E:{s:1,r:0.8,c:"H"}, D:{s:1,r:0.7,c:"H"}, SP:{s:0,r:0.5,c:"M"}, DP:{s:1,r:0.6,c:"M"}, W:{s:2,r:0.9,c:"H"}, N:{s:0,r:0.4,c:"M"} },
        SM: { R:{s:1,r:0.7,c:"H"}, E:{s:1,r:0.6,c:"H"}, D:{s:0,r:0.5,c:"M"}, SP:{s:0,r:0.4,c:"M"}, DP:{s:0,r:0.3,c:"M"}, W:{s:2,r:0.9,c:"H"}, N:{s:0,r:0.4,c:"M"} }
      },
      narratives: { TX: 'Congress delegated authority to the EPA for air pollutants under the Clean Air Act. The text does not explicitly include carbon. Regulating the entire energy economy exceeds reasonable statutory construction.', OR: 'The Founders did not contemplate an agency regulating energy systems nationwide. The major questions doctrine applies. EPA authority was designed for localized pollutants, not global climate.', DC: 'The major questions doctrine, formalized in West Virginia v. EPA, requires clear congressional authorization for rules of vast economic significance. EPA authority under the Clean Air Act has precedent for localized pollutants, but economy-wide energy regulation departs from established regulatory scope.', LC: 'Climate change is an existential threat with profound rights and equality implications. The Constitution\'s protective arc justifies expansive regulatory authority to preserve habitability for future generations.', PR: 'Clean energy transition generates jobs and reduces healthcare costs. Global competitors are moving faster. The US faces competitive disadvantage without regulatory ambition.', SM: 'The Clean Air Act grants broad authority to regulate air pollutants. Carbon is chemically a pollutant. Congress provided a flexible framework to permit adaptive implementation as science progressed.' }
    },
    {
      id: 'nsa-surveillance', title: 'NSA Surveillance Expansion', date: '2009-01-01', type: 'Executive/Classified Programs', admin: 'Obama',
      desc: 'Expanded surveillance authority under EO 12333 and classified programs later revealed by Edward Snowden.',
      brief: 'The NSA expanded surveillance programs under EO 12333 and classified statutory authority. The Snowden revelations disclosed bulk metadata collection on tens of millions of Americans, surveillance of foreign leaders, and PRISM collection from internet companies. The Fourth Amendment protects against unreasonable searches; bulk collection appeared to violate it. The First Amendment protects association; surveillance chilled speech.',
      scores: {
        TX: { R:{s:-2,r:0.9,c:"H"}, E:{s:-1,r:0.6,c:"H"}, D:{s:-2,r:0.8,c:"H"}, SP:{s:-1,r:0.7,c:"H"}, DP:{s:-2,r:0.9,c:"H"}, W:{s:0,r:0.2,c:"L"}, N:{s:-1,r:0.5,c:"M"} },
        OR: { R:{s:-2,r:0.9,c:"H"}, E:{s:-1,r:0.5,c:"H"}, D:{s:-2,r:0.8,c:"H"}, SP:{s:-1,r:0.6,c:"H"}, DP:{s:-2,r:0.9,c:"H"}, W:{s:0,r:0.2,c:"L"}, N:{s:-1,r:0.4,c:"M"} },
        DC: { R:{s:-2,r:0.9,c:"H"}, E:{s:-1,r:0.5,c:"M"}, D:{s:-2,r:0.7,c:"H"}, SP:{s:-1,r:0.6,c:"H"}, DP:{s:-2,r:0.8,c:"H"}, W:{s:0,r:0.2,c:"L"}, N:{s:0,r:0.4,c:"M"} },
        LC: { R:{s:-2,r:0.9,c:"H"}, E:{s:-2,r:0.7,c:"H"}, D:{s:-2,r:0.8,c:"H"}, SP:{s:-1,r:0.6,c:"H"}, DP:{s:-2,r:0.9,c:"H"}, W:{s:0,r:0.3,c:"L"}, N:{s:-1,r:0.5,c:"M"} },
        PR: { R:{s:-2,r:0.9,c:"H"}, E:{s:-1,r:0.7,c:"H"}, D:{s:-2,r:0.8,c:"H"}, SP:{s:-1,r:0.7,c:"H"}, DP:{s:-2,r:0.9,c:"H"}, W:{s:1,r:0.6,c:"M"}, N:{s:0,r:0.5,c:"M"} },
        SM: { R:{s:-1,r:0.8,c:"H"}, E:{s:-1,r:0.6,c:"H"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:0,r:0.5,c:"M"}, DP:{s:-1,r:0.8,c:"H"}, W:{s:1,r:0.6,c:"M"}, N:{s:1,r:0.6,c:"M"} }
      },
      narratives: { TX: 'The Fourth Amendment protects against unreasonable searches. Bulk metadata collection is intrinsically unreasonable—no individualized suspicion, no warrant. "The right of the people to be secure...against unreasonable searches...shall not be violated."', OR: 'The Framers feared government surveillance most. They experienced British writs of assistance and general warrants. The Fourth Amendment\'s particularity requirement reflects founding-era abhorrence of dragnet searches.', DC: 'Smith v. Maryland\'s third-party doctrine provides limited foundation, but bulk metadata collection on millions of Americans vastly exceeds its scope. Katz v. United States established reasonable expectation of privacy. The scale of surveillance departs dramatically from doctrinal precedent.', LC: 'Modern technology demands evolved interpretation. Bulk metadata violates privacy even more than physical searches. Dragnet digital surveillance poses greater threats to equality and association than 18th-century intrusions.', PR: 'Bulk metadata programs caught very few terrorists compared to targeted investigation. Privacy violations impose measurable social costs—chilling speech, political organizing. Democracies without mass surveillance achieve comparable security.', SM: 'The programs had legitimate national security rationales post-9/11, but the bulk nature and lack of judicial oversight exceeded reasonable bounds. Executive authority over foreign intelligence was broader, but domestic surveillance required stronger statutory authorization.' }
    },
    {
      id: 'gun-control', title: 'Gun Control Executive Actions', date: '2016-01-05', type: 'Executive Memorandum', admin: 'Obama',
      desc: 'Required gun sellers to be licensed and expanded background check requirements.',
      brief: 'President Obama issued a memorandum directing DOJ to clarify which gun sellers must be licensed and expanding background check requirements. The Second Amendment issue was contested. The memorandum did not ban guns but reinterpreted existing law. Critics argued the Executive cannot redefine statutory definitions, violating separation of powers.',
      scores: {
        TX: { R:{s:-1,r:0.8,c:"H"}, E:{s:0,r:0.3,c:"L"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-1,r:0.8,c:"H"}, DP:{s:0,r:0.3,c:"L"}, W:{s:1,r:0.6,c:"M"}, N:{s:0,r:0.2,c:"L"} },
        OR: { R:{s:-2,r:0.9,c:"H"}, E:{s:0,r:0.2,c:"L"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-1,r:0.8,c:"H"}, DP:{s:0,r:0.3,c:"L"}, W:{s:1,r:0.6,c:"M"}, N:{s:0,r:0.2,c:"L"} },
        DC: { R:{s:0,r:0.6,c:"M"}, E:{s:0,r:0.3,c:"L"}, D:{s:0,r:0.5,c:"M"}, SP:{s:-1,r:0.7,c:"H"}, DP:{s:0,r:0.4,c:"M"}, W:{s:1,r:0.6,c:"M"}, N:{s:0,r:0.3,c:"L"} },
        LC: { R:{s:0,r:0.7,c:"H"}, E:{s:1,r:0.6,c:"H"}, D:{s:0,r:0.5,c:"M"}, SP:{s:0,r:0.6,c:"M"}, DP:{s:1,r:0.5,c:"M"}, W:{s:2,r:0.8,c:"H"}, N:{s:0,r:0.3,c:"L"} },
        PR: { R:{s:1,r:0.7,c:"H"}, E:{s:1,r:0.7,c:"H"}, D:{s:0,r:0.5,c:"M"}, SP:{s:0,r:0.6,c:"M"}, DP:{s:1,r:0.6,c:"M"}, W:{s:2,r:0.8,c:"H"}, N:{s:0,r:0.3,c:"L"} },
        SM: { R:{s:0,r:0.7,c:"H"}, E:{s:1,r:0.6,c:"H"}, D:{s:0,r:0.5,c:"M"}, SP:{s:0,r:0.6,c:"M"}, DP:{s:1,r:0.5,c:"M"}, W:{s:2,r:0.8,c:"H"}, N:{s:0,r:0.3,c:"L"} }
      },
      narratives: { TX: 'The Second Amendment protects the right to bear arms; regulation through background checks is permissible. However, the Executive cannot redefine statutory terms—"gun seller" and "license" have meanings fixed by statute.', OR: 'The Second Amendment protects an individual right for self-defense and militia service. The Founders understood regulation, but Congress, not the Executive, must define licensing requirements.', DC: 'District of Columbia v. Heller and McDonald v. Chicago established an individual right to bear arms that constrains regulatory scope. The executive actions largely operate within existing statutory authority, giving them modest doctrinal support where they stay within established frameworks.', LC: 'The Constitution recognizes both individual arms rights and compelling government interest in regulating dangerous weapons. Closing the private seller loophole serves public safety and equal protection.', PR: 'Countries with universal background checks have lower gun homicide rates. The US is an outlier in gun violence. Closing a regulatory gap is practical governance aligned with evidence.', SM: 'Executive authority to enforce statutes includes clarifying ambiguous language. Whether an unlicensed person is a "dealer" is a reasonable interpretive question within bounds of permissible statutory construction.' }
    },
    {
      id: 'dapa', title: 'DAPA (Deferred Action for Parents)', date: '2014-11-20', type: 'Executive Memorandum', admin: 'Obama',
      desc: 'Extended deferred action to parents of US citizens and legal permanent residents. Blocked by courts.',
      brief: 'DAPA would have extended temporary protection to approximately 4 million undocumented immigrants who were parents of US citizens or legal residents. The Fifth Circuit found it likely exceeded prosecutorial discretion, and the Supreme Court deadlocked 4-4 in 2016. Unlike DACA, DAPA was never implemented. The scale (4M vs 800K) made separation-of-powers concerns more acute.',
      scores: {
        TX: { R:{s:-1,r:0.5,c:"M"}, E:{s:-1,r:0.6,c:"H"}, D:{s:-2,r:0.8,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:0,r:0.3,c:"M"}, W:{s:1,r:0.5,c:"M"}, N:{s:-1,r:0.6,c:"M"} },
        OR: { R:{s:-1,r:0.4,c:"M"}, E:{s:-1,r:0.5,c:"H"}, D:{s:-2,r:0.8,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:0,r:0.2,c:"M"}, W:{s:1,r:0.4,c:"M"}, N:{s:-1,r:0.5,c:"M"} },
        DC: { R:{s:0,r:0.3,c:"M"}, E:{s:-1,r:0.6,c:"M"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-2,r:0.8,c:"H"}, DP:{s:0,r:0.3,c:"M"}, W:{s:1,r:0.5,c:"M"}, N:{s:-1,r:0.5,c:"M"} },
        LC: { R:{s:1,r:0.8,c:"H"}, E:{s:2,r:0.8,c:"H"}, D:{s:-1,r:0.5,c:"M"}, SP:{s:0,r:0.3,c:"M"}, DP:{s:1,r:0.6,c:"H"}, W:{s:2,r:0.8,c:"H"}, N:{s:1,r:0.3,c:"L"} },
        PR: { R:{s:1,r:0.8,c:"H"}, E:{s:1,r:0.7,c:"H"}, D:{s:-1,r:0.5,c:"M"}, SP:{s:-1,r:0.6,c:"M"}, DP:{s:1,r:0.6,c:"M"}, W:{s:2,r:0.9,c:"H"}, N:{s:0,r:0.4,c:"M"} },
        SM: { R:{s:1,r:0.7,c:"H"}, E:{s:1,r:0.7,c:"H"}, D:{s:-1,r:0.5,c:"M"}, SP:{s:-1,r:0.5,c:"M"}, DP:{s:1,r:0.5,c:"M"}, W:{s:2,r:0.8,c:"H"}, N:{s:0,r:0.3,c:"L"} }
      },
      narratives: { TX: 'DAPA extended categorical deferred action to 4 million people—nearly 5x DACA\'s scope. This crosses from prosecutorial discretion to legislating by Executive fiat.', OR: 'The scale makes separation-of-powers violation more severe. Prosecutorial discretion has never extended to categorical policy affecting millions. The Founders would recognize this as executive usurpation.', DC: 'Texas v. United States blocked DAPA, with the Fifth Circuit finding it likely violated the APA. Covering approximately 4 million people exceeds any prior exercise of prosecutorial discretion recognized by courts. Less doctrinal support than DACA due to broader reach.', LC: 'Parents raising families embody family integrity and equal dignity values. But DAPA\'s scope exposed implementation challenges and may have exceeded practical administrative feasibility.', PR: 'Economic benefits would have been substantial—4 million workers in the formal economy, higher tax revenue. But implementation concerns about vetting and Congressional coordination were legitimate.', SM: 'While prosecutorial discretion can encompass categorical policies, DAPA\'s scope without Congressional engagement created democratic legitimacy concerns. Phased implementation with Congressional notice might have been safer.' }
    },
    // ===== TRUMP I ERA =====
    {
      id: 'travel-ban', title: 'Travel Ban (Muslim-Majority Countries)', date: '2017-01-27', type: 'Executive Order 13769', admin: 'Trump I',
      desc: 'Restricted entry from 7 Muslim-majority countries. Upheld by SCOTUS in Trump v. Hawaii (5-4).',
      brief: 'EO 13769 initially barred entry from Iraq, Syria, Iran, Libya, Somalia, Sudan, and Yemen. After legal challenges, a revised version was upheld in Trump v. Hawaii (2018) 5-4. The Establishment Clause challenge argued religious discrimination; due process arguments highlighted lack of individualized review. The majority stressed broad presidential immigration authority and facially neutral language.',
      scores: {
        TX: { R:{s:0,r:0.6,c:"M"}, E:{s:-1,r:0.8,c:"H"}, D:{s:0,r:0.5,c:"M"}, SP:{s:1,r:0.7,c:"H"}, DP:{s:-1,r:0.7,c:"H"}, W:{s:0,r:0.4,c:"M"}, N:{s:2,r:0.9,c:"H"} },
        OR: { R:{s:0,r:0.5,c:"M"}, E:{s:-1,r:0.7,c:"H"}, D:{s:0,r:0.4,c:"M"}, SP:{s:1,r:0.7,c:"H"}, DP:{s:-1,r:0.6,c:"H"}, W:{s:0,r:0.3,c:"M"}, N:{s:2,r:0.8,c:"H"} },
        DC: { R:{s:-1,r:0.7,c:"H"}, E:{s:-1,r:0.7,c:"H"}, D:{s:0,r:0.4,c:"M"}, SP:{s:0,r:0.5,c:"M"}, DP:{s:-1,r:0.6,c:"M"}, W:{s:0,r:0.3,c:"L"}, N:{s:1,r:0.7,c:"H"} },
        LC: { R:{s:-1,r:0.8,c:"H"}, E:{s:-2,r:0.9,c:"H"}, D:{s:-1,r:0.6,c:"H"}, SP:{s:0,r:0.4,c:"M"}, DP:{s:-2,r:0.8,c:"H"}, W:{s:-1,r:0.5,c:"M"}, N:{s:1,r:0.7,c:"H"} },
        PR: { R:{s:-1,r:0.7,c:"H"}, E:{s:-2,r:0.8,c:"H"}, D:{s:-1,r:0.5,c:"M"}, SP:{s:1,r:0.6,c:"H"}, DP:{s:-1,r:0.7,c:"H"}, W:{s:0,r:0.4,c:"M"}, N:{s:1,r:0.8,c:"H"} },
        SM: { R:{s:0,r:0.6,c:"H"}, E:{s:-1,r:0.7,c:"H"}, D:{s:0,r:0.5,c:"M"}, SP:{s:1,r:0.7,c:"H"}, DP:{s:0,r:0.6,c:"H"}, W:{s:0,r:0.4,c:"M"}, N:{s:2,r:0.8,c:"H"} }
      },
      narratives: { TX: 'The INA grants the President broad authority over entry of non-citizens. The facially neutral language does not violate textual constitutional requirements. The text permits nationality-based classifications for security.', OR: 'The Founders granted the President exclusive power over foreign nationals seeking entry. Immigration and foreign relations are quintessentially executive powers.', DC: 'Plenary power doctrine (Kleindienst v. Mandel) supports broad executive immigration authority. Trump v. Hawaii upheld the third iteration. However, initial versions\' apparent religious targeting created tension with Establishment Clause precedent (Larson v. Valente).', LC: 'The Establishment Clause protects against government disfavoring religion. The order targets Muslim-majority nations, and campaign rhetoric explicitly called for a "Muslim ban." Intent matters.', PR: 'Nationals from banned countries committed very few terrorist attacks in the US. The countries are predominantly Muslim, making disparate impact obvious. Peer democracies do not use nationality-based entry bans.', SM: 'The President has extraordinarily broad immigration authority. Courts defer to Executive national security judgments. The facially neutral language supports textual validity.' }
    },
    {
      id: 'border-wall-emergency', title: 'Border Wall National Emergency', date: '2019-02-15', type: 'Executive Order & National Emergency', admin: 'Trump I',
      desc: 'Declared national emergency to divert military funds for border wall construction.',
      brief: 'After Congress refused to appropriate wall funds, Trump declared a national emergency to redirect $3.6 billion in military construction funds to border wall sections. The Appropriations Clause (Article I, Section 9) was the core challenge: can the Executive redirect funds appropriated for one purpose to another via emergency declaration, especially after Congress explicitly denied the funding?',
      scores: {
        TX: { R:{s:-1,r:0.6,c:"H"}, E:{s:0,r:0.2,c:"L"}, D:{s:-2,r:0.9,c:"H"}, SP:{s:-2,r:0.95,c:"H"}, DP:{s:0,r:0.3,c:"L"}, W:{s:0,r:0.5,c:"M"}, N:{s:1,r:0.8,c:"H"} },
        OR: { R:{s:-1,r:0.5,c:"H"}, E:{s:0,r:0.2,c:"L"}, D:{s:-2,r:0.9,c:"H"}, SP:{s:-2,r:0.95,c:"H"}, DP:{s:0,r:0.2,c:"L"}, W:{s:0,r:0.4,c:"M"}, N:{s:1,r:0.7,c:"H"} },
        DC: { R:{s:0,r:0.2,c:"L"}, E:{s:0,r:0.2,c:"L"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:0,r:0.3,c:"M"}, W:{s:0,r:0.3,c:"L"}, N:{s:1,r:0.6,c:"M"} },
        LC: { R:{s:-1,r:0.7,c:"H"}, E:{s:-1,r:0.5,c:"M"}, D:{s:-2,r:0.9,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:-1,r:0.6,c:"H"}, W:{s:-1,r:0.6,c:"M"}, N:{s:1,r:0.7,c:"H"} },
        PR: { R:{s:-1,r:0.6,c:"H"}, E:{s:-1,r:0.4,c:"M"}, D:{s:-2,r:0.8,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:0,r:0.4,c:"M"}, W:{s:0,r:0.6,c:"M"}, N:{s:1,r:0.8,c:"H"} },
        SM: { R:{s:0,r:0.5,c:"H"}, E:{s:0,r:0.3,c:"L"}, D:{s:-1,r:0.8,c:"H"}, SP:{s:-1,r:0.9,c:"H"}, DP:{s:0,r:0.3,c:"L"}, W:{s:0,r:0.5,c:"M"}, N:{s:2,r:0.8,c:"H"} }
      },
      narratives: { TX: 'The Appropriations Clause: "No Money shall be drawn from the Treasury, but in Consequence of Appropriations made by Law." Congress appropriated military funds for military construction, not border walls. Redirecting funds Congress explicitly denied violates the Clause.', OR: 'The Framers designed the Appropriations Clause as the primary check on executive power. Madison wrote extensively about this. Allowing emergency redirects would render the Clause meaningless.', DC: 'The Youngstown framework places this in Category 3—the president acting contrary to Congress\'s expressed will, where executive power is at its lowest ebb. Using emergency declarations to redirect funds Congress specifically denied departs from established separation of powers doctrine.', LC: 'The Constitution\'s development has reinforced Congressional spending power. Emergency powers cannot override the Appropriations Clause\'s core protection of democratic governance.', PR: 'No national emergency existed—border crossings were at 15-year lows. The declaration was politically motivated. Peer democracies do not permit such spending redirects.', SM: 'The National Emergencies Act delegates emergency power to the Executive. Courts have historically deferred to emergency declarations. If Congress does not override, the constitutional check is satisfied.' }
    },
    {
  id: 'sanctuary-cities',
  title: 'Sanctuary Cities Funding Threat',
  date: '2017-01-25',
  type: 'Executive Order 13768',
  admin: 'Trump I',
  desc: 'Threatened to strip federal funding from sanctuary jurisdictions that failed to cooperate with immigration enforcement.',
  brief: 'Executive Order 13768 directed federal agencies to withhold grants and federal funding from municipalities and states that limited cooperation with federal immigration enforcement efforts. The executive sought to use the Spending Clause as leverage to compel compliance with federal immigration priorities.\n\nMultiple federal courts found the order unconstitutional under the anti-commandeering doctrine and Spending Clause limitations. Federal funding conditions must be unambiguous, directly related to the federal program, and not coercive. The order failed to meet these requirements.\n\nThe core constitutional conflict centers on whether the President can unilaterally add conditions to federal spending that Congress did not explicitly authorize, and whether such conditions unconstitutionally commandeer local enforcement resources.',
  scores: {
    TX: { R: {s:0, r:0.5, c:"M"}, E: {s:0, r:0.3, c:"M"}, D: {s:-1, r:0.8, c:"H"}, SP: {s:-2, r:0.9, c:"H"}, DP: {s:0, r:0.4, c:"M"}, W: {s:-1, r:0.7, c:"H"}, N: {s:1, r:0.6, c:"M"} },
    OR: { R: {s:-1, r:0.6, c:"H"}, E: {s:0, r:0.4, c:"M"}, D: {s:-1, r:0.8, c:"H"}, SP: {s:-2, r:0.9, c:"H"}, DP: {s:0, r:0.4, c:"M"}, W: {s:-1, r:0.7, c:"H"}, N: {s:1, r:0.7, c:"H"} },
        DC: { R:{s:0,r:0.3,c:"L"}, E:{s:0,r:0.3,c:"L"}, D:{s:-1,r:0.6,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:-1,r:0.6,c:"M"}, W:{s:0,r:0.3,c:"L"}, N:{s:0,r:0.4,c:"M"} },
    LC: { R: {s:-1, r:0.7, c:"H"}, E: {s:-1, r:0.6, c:"H"}, D: {s:-1, r:0.8, c:"H"}, SP: {s:-2, r:0.9, c:"H"}, DP: {s:-1, r:0.7, c:"H"}, W: {s:0, r:0.5, c:"M"}, N: {s:0, r:0.4, c:"M"} },
    PR: { R: {s:-1, r:0.7, c:"H"}, E: {s:-1, r:0.6, c:"H"}, D: {s:-1, r:0.7, c:"H"}, SP: {s:-2, r:0.9, c:"H"}, DP: {s:-1, r:0.7, c:"H"}, W: {s:0, r:0.5, c:"M"}, N: {s:1, r:0.5, c:"M"} },
    SM: { R: {s:0, r:0.5, c:"M"}, E: {s:0, r:0.3, c:"M"}, D: {s:0, r:0.6, c:"M"}, SP: {s:-1, r:0.7, c:"H"}, DP: {s:0, r:0.4, c:"M"}, W: {s:0, r:0.5, c:"M"}, N: {s:1, r:0.8, c:"H"} }
  },
  narratives: {
    TX: 'The text of the Spending Clause grants Congress authority to spend for the general welfare, but the Framers\' original text does not authorize the President to unilaterally attach new conditions beyond those Congress enacted. Separation of powers principles prevent executive overreach into congressional appropriations power. The order conflicted with the anti-commandeering doctrine because it attempted to compel state action through coercive financial pressure rather than cooperation.',
    OR: 'The Founders understood that federal-state relations require clear constitutional or statutory authorization. Presidents traditionally respected state sovereignty in law enforcement, with federal grants serving defined purposes set by Congress. The order violated the original public meaning of the Spending Clause by imposing conditions that Congress neither approved nor appropriated funds to support.',
    DC: 'Anti-commandeering doctrine (Printz v. United States, New York v. United States) and Spending Clause limitations (NFIB v. Sebelius) create strong doctrinal barriers. The federal government cannot commandeer state officials to enforce federal law, and funding conditions must be non-coercive.',
    LC: 'The evolving constitutional arc supports strong protections for federalism and prevents coercive federal-state relationships. Modern jurisprudence has developed robust limits on conditional federal spending to protect state autonomy and prevent manipulation. The order represents a regression from settled constitutional principles protecting state sovereignty and democratic accountability in local governance.',
    PR: 'Practical experience in federal-state relations shows that unilateral executive funding conditions create instability and undermine cooperation between levels of government. Most peer democracies maintain clear separation between federal incentives and local enforcement decisions. Effective immigration policy requires genuine state participation, which is damaged by threats and coercive funding manipulations.',
    SM: 'The President possesses legitimate executive authority over federal law enforcement and can condition federal grants on compliance with federal law. The order reasonably interpreted existing statutory authority to enforce immigration laws and coordinate with state actors. Federal law enforcement priorities have constitutional weight, and resistance to immigration enforcement from sanctuary jurisdictions represents a serious federalism problem requiring executive response.'
  }
},
    {
  id: 'transgender-military-ban',
  title: 'Transgender Military Service Ban',
  date: '2017-08-25',
  type: 'Executive Order 13764',
  admin: 'Trump I',
  desc: 'Banned transgender individuals from military service and denied access to medical care for gender transition.',
  brief: 'The President announced via Twitter and subsequent policy that transgender individuals would be barred from military service in any capacity. The policy prohibited the Department of Defense from providing medical care related to gender transition and required discharge or denial of enlistment for transgender service members.\n\nMultiple federal courts issued preliminary injunctions halting enforcement of the ban on equal protection grounds under the Fifth Amendment. The courts found the policy likely violated substantive due process and equal protection by distinguishing on the basis of transgender status without adequate justification.\n\nThe constitutional tension involves whether military deference to Commander-in-Chief judgment can override equal protection scrutiny, and whether excluding a group based on identity without medical or operational evidence violates fundamental fairness principles.',
  scores: {
    TX: { R: {s:-1, r:0.7, c:"H"}, E: {s:-2, r:0.9, c:"H"}, D: {s:0, r:0.4, c:"M"}, SP: {s:1, r:0.6, c:"M"}, DP: {s:-2, r:0.9, c:"H"}, W: {s:0, r:0.3, c:"L"}, N: {s:1, r:0.7, c:"H"} },
    OR: { R: {s:-1, r:0.6, c:"H"}, E: {s:-1, r:0.8, c:"H"}, D: {s:0, r:0.4, c:"M"}, SP: {s:1, r:0.7, c:"H"}, DP: {s:-1, r:0.8, c:"H"}, W: {s:0, r:0.3, c:"L"}, N: {s:1, r:0.8, c:"H"} },
        DC: { R:{s:-1,r:0.7,c:"H"}, E:{s:-1,r:0.7,c:"H"}, D:{s:0,r:0.3,c:"M"}, SP:{s:0,r:0.4,c:"M"}, DP:{s:-1,r:0.6,c:"M"}, W:{s:0,r:0.3,c:"L"}, N:{s:0,r:0.4,c:"M"} },
    LC: { R: {s:-2, r:0.9, c:"H"}, E: {s:-2, r:0.95, c:"H"}, D: {s:-1, r:0.7, c:"H"}, SP: {s:0, r:0.5, c:"M"}, DP: {s:-2, r:0.9, c:"H"}, W: {s:-1, r:0.6, c:"H"}, N: {s:0, r:0.3, c:"L"} },
    PR: { R: {s:-2, r:0.8, c:"H"}, E: {s:-2, r:0.9, c:"H"}, D: {s:-1, r:0.7, c:"H"}, SP: {s:0, r:0.6, c:"M"}, DP: {s:-2, r:0.9, c:"H"}, W: {s:-1, r:0.6, c:"H"}, N: {s:0, r:0.3, c:"L"} },
    SM: { R: {s:0, r:0.5, c:"M"}, E: {s:-1, r:0.6, c:"H"}, D: {s:0, r:0.4, c:"M"}, SP: {s:2, r:0.8, c:"H"}, DP: {s:0, r:0.4, c:"M"}, W: {s:0, r:0.3, c:"L"}, N: {s:1, r:0.8, c:"H"} }
  },
  narratives: {
    TX: 'The text of the Fifth Amendment prohibits deprivation of liberty without due process. An exclusion based on transgender status that lacks clear statutory authorization and rational relationship to military objectives conflicts with the plain text of due process protections. The textualist concern centers on whether the policy follows proper procedures and whether the stated rationale genuinely relates to enumerated military functions.',
    OR: 'The original understanding of the Fifth Amendment protected individuals from arbitrary government action and classifications without rational basis. Military tradition has long supported executive deference in force composition, suggesting the Framers understood military judgment as supreme. However, the total exclusion of a class based on identity rather than demonstrated capability lacks originalist support for such categorical discrimination.',
    DC: 'Military deference doctrine (Rostker v. Goldberg) provides some support for personnel decisions. However, Bostock v. Clayton County\'s recognition of sex-based protections and established integration precedent create countervailing doctrinal pressure against categorical exclusion.',
    LC: 'The constitutional arc has progressively protected individuals from discrimination based on immutable or quasi-immutable characteristics. Courts have recognized gender identity as fundamental to personal liberty under the Fourteenth Amendment doctrine as applied through the Fifth. The policy represents a regression from settled protections for equal dignity and inclusion, absent demonstrated harm or operational necessity.',
    PR: 'Empirical evidence from allied democracies demonstrates that transgender military service functions without operational disruption or cohesion problems. The policy lacked evidence-based justification and contradicted military medical professionals\' assessments. Pragmatic governance suggests following the evidence on military effectiveness rather than categorical exclusions based on identity.',
    SM: 'The President as Commander-in-Chief possesses broad authority over military personnel and force composition, reflecting the Framers\' understanding of executive military power. Military deference doctrine traditionally grants executive judgment significant weight on personnel questions. The legitimate government interest in military readiness and unit cohesion may support tailored policies regarding medical readiness and deployment capacity.'
  }
},
    {
  id: 'family-separation-zero-tolerance',
  title: 'Family Separation & Zero Tolerance Policy',
  date: '2018-04-06',
  type: 'Immigration Enforcement Policy',
  admin: 'Trump I',
  desc: 'Criminally prosecuted all border crossers, resulting in systematic separation of migrant children from parents.',
  brief: 'The Attorney General announced a "zero tolerance" policy directing federal prosecutors to criminally prosecute all individuals apprehended crossing the border illegally. Because federal criminal detention facilities cannot house children, this policy necessarily resulted in the systematic separation of dependent children from their parents.\n\nFederal Judge Dana Boarruman later found in Ms. L v. ICE that the separation policy "shocks the conscience." Thousands of children were separated without adequate process to track or reunify them. The government conceded it could not locate hundreds of separated children, and many were subjected to traumatic conditions during separation.\n\nThe policy raised severe constitutional concerns regarding due process, family integrity rights, and whether the government action constituted cruel and unusual punishment. Even supporters acknowledged the policy caused serious human rights violations without demonstrable legislative authorization.',
  scores: {
    TX: { R: {s:-2, r:0.95, c:"H"}, E: {s:-2, r:0.9, c:"H"}, D: {s:-2, r:0.85, c:"H"}, SP: {s:-1, r:0.7, c:"H"}, DP: {s:-2, r:0.95, c:"H"}, W: {s:-2, r:0.9, c:"H"}, N: {s:0, r:0.4, c:"M"} },
    OR: { R: {s:-2, r:0.95, c:"H"}, E: {s:-2, r:0.9, c:"H"}, D: {s:-2, r:0.85, c:"H"}, SP: {s:-1, r:0.7, c:"H"}, DP: {s:-2, r:0.95, c:"H"}, W: {s:-2, r:0.9, c:"H"}, N: {s:0, r:0.4, c:"M"} },
        DC: { R:{s:-2,r:0.9,c:"H"}, E:{s:-2,r:0.8,c:"H"}, D:{s:0,r:0.3,c:"L"}, SP:{s:0,r:0.3,c:"L"}, DP:{s:-2,r:0.9,c:"H"}, W:{s:-1,r:0.6,c:"M"}, N:{s:0,r:0.4,c:"M"} },
    LC: { R: {s:-2, r:0.95, c:"H"}, E: {s:-2, r:0.95, c:"H"}, D: {s:-2, r:0.85, c:"H"}, SP: {s:-1, r:0.7, c:"H"}, DP: {s:-2, r:0.95, c:"H"}, W: {s:-2, r:0.95, c:"H"}, N: {s:-1, r:0.6, c:"H"} },
    PR: { R: {s:-2, r:0.95, c:"H"}, E: {s:-2, r:0.9, c:"H"}, D: {s:-2, r:0.85, c:"H"}, SP: {s:-1, r:0.7, c:"H"}, DP: {s:-2, r:0.95, c:"H"}, W: {s:-2, r:0.9, c:"H"}, N: {s:-1, r:0.6, c:"H"} },
    SM: { R: {s:-2, r:0.85, c:"H"}, E: {s:-2, r:0.8, c:"H"}, D: {s:-2, r:0.75, c:"H"}, SP: {s:-2, r:0.8, c:"H"}, DP: {s:-2, r:0.9, c:"H"}, W: {s:-2, r:0.85, c:"H"}, N: {s:0, r:0.5, c:"M"} }
  },
  narratives: {
    TX: 'The Fifth Amendment explicitly protects fundamental family rights as an aspect of liberty. The systematic separation of children from parents without individualized due process determinations violates the plain text of due process protections. No statutory authorization explicitly authorized family separation, and the policy contradicted Congress\'s implicit protection of family unity in immigration statutes.',
    OR: 'The Framers and ratifiers understood that government action separating families without cause violated fundamental natural rights. Family integrity was recognized as foundational to liberty in common law and original public meaning. The policy\'s systematic nature and lack of individual adjudication violated the Due Process Clause as originally understood to protect family relationships.',
    DC: 'The Flores Settlement Agreement establishes binding precedent on detention conditions for minors. Reno v. Flores and subsequent jurisprudence create clear doctrinal requirements for due process in immigration proceedings involving children. Systematic separation violates established procedural protections.',
    LC: 'Constitutional jurisprudence has consistently recognized family unity as a fundamental interest protected by substantive due process and equal protection. The policy represents a profound regression from settled doctrine protecting parent-child relationships. The arc of constitutional development firmly establishes that government cannot separate families without extraordinary justification and individualized process.',
    PR: 'Empirical evidence demonstrates that family separation causes severe psychological trauma to children and contradicts evidence-based immigration enforcement. Other democracies manage border enforcement without systematic family separation. Practical governance demands that policies serve legitimate ends; family separation served no compelling interest while inflicting documented harm.',
    SM: 'Even from a steelman perspective, executive immigration enforcement authority cannot justify systematic family separation without explicit congressional authorization or demonstrated necessity. The policy lacked procedural safeguards to reunify families and created unrebutted evidence of "shocking the conscience" harm. No principled defense can sustain the policy\'s indifference to family trauma.'
  }
},
    {
  id: 'covid-emergency-powers',
  title: 'COVID-19 Emergency Powers',
  date: '2020-03-13',
  type: 'National Emergency Declaration',
  admin: 'Trump I',
  desc: 'Declared national emergency under the National Emergencies Act, invoking Defense Production Act authority and implementing payroll tax deferral.',
  brief: 'The President declared a national emergency on March 13, 2020, in response to the COVID-19 pandemic. The declaration invoked the National Emergencies Act and authorized use of the Defense Production Act to direct manufacturing of ventilators and protective equipment. The administration also implemented payroll tax deferral authority under the Internal Revenue Code, delaying certain payroll tax obligations.\n\nThe emergency powers largely withstood constitutional challenge, with courts recognizing the genuine crisis nature of the pandemic. However, the payroll tax deferral provision raised questions about whether executive authority extends to substantive tax policy changes without congressional authorization, as that power derives from the Internal Revenue Code.\n\nThe constitutional debate centered on the appropriate scope of emergency powers under the Necessary and Proper Clause and whether extraordinary circumstances justify executive action that would normally require congressional approval, balanced against Appropriations Clause constraints.',
  scores: {
    TX: { R: {s:0, r:0.6, c:"M"}, E: {s:0, r:0.3, c:"L"}, D: {s:-1, r:0.7, c:"H"}, SP: {s:-1, r:0.75, c:"H"}, DP: {s:0, r:0.4, c:"M"}, W: {s:1, r:0.7, c:"H"}, N: {s:1, r:0.6, c:"M"} },
    OR: { R: {s:0, r:0.6, c:"M"}, E: {s:0, r:0.3, c:"L"}, D: {s:-1, r:0.7, c:"H"}, SP: {s:-1, r:0.75, c:"H"}, DP: {s:0, r:0.4, c:"M"}, W: {s:1, r:0.7, c:"H"}, N: {s:1, r:0.6, c:"M"} },
        DC: { R:{s:0,r:0.5,c:"M"}, E:{s:0,r:0.4,c:"M"}, D:{s:1,r:0.6,c:"H"}, SP:{s:1,r:0.7,c:"H"}, DP:{s:0,r:0.5,c:"M"}, W:{s:1,r:0.7,c:"H"}, N:{s:1,r:0.7,c:"H"} },
    LC: { R: {s:1, r:0.7, c:"H"}, E: {s:0, r:0.4, c:"M"}, D: {s:0, r:0.5, c:"M"}, SP: {s:0, r:0.6, c:"M"}, DP: {s:1, r:0.6, c:"M"}, W: {s:2, r:0.8, c:"H"}, N: {s:1, r:0.5, c:"M"} },
    PR: { R: {s:1, r:0.7, c:"H"}, E: {s:0, r:0.4, c:"M"}, D: {s:0, r:0.5, c:"M"}, SP: {s:0, r:0.6, c:"M"}, DP: {s:1, r:0.7, c:"H"}, W: {s:2, r:0.85, c:"H"}, N: {s:1, r:0.6, c:"M"} },
    SM: { R: {s:1, r:0.6, c:"M"}, E: {s:0, r:0.3, c:"L"}, D: {s:0, r:0.5, c:"M"}, SP: {s:1, r:0.7, c:"H"}, DP: {s:1, r:0.5, c:"M"}, W: {s:2, r:0.8, c:"H"}, N: {s:1, r:0.7, c:"H"} }
  },
  narratives: {
    TX: 'Emergency powers inherent in executive authority are not unlimited even during crises. The National Emergencies Act and Defense Production Act provided some textual authorization, but the payroll tax deferral lacked clear statutory basis and effectively altered tax law through executive action. True emergency powers have temporal limits and must relate to the genuine crisis rather than serve as vehicles for policy changes Congress rejected.',
    OR: 'The Framers understood that the executive possessed inherent emergency powers to protect the nation when Congress could not assemble or act. However, even in emergencies, the executive cannot permanently alter the fiscal or tax system without congressional approval. The original understanding respected emergency measures of defined duration while maintaining separated powers over substantive law.',
    DC: 'Jacobson v. Massachusetts (1905) provides strong doctrinal support for emergency public health measures. The National Emergencies Act framework has been repeatedly upheld. Executive emergency powers during genuine public health crises have deep roots in constitutional doctrine.',
    LC: 'The constitutional arc supports broad emergency flexibility when facing genuine crises threatening public health and safety. Modern jurisprudence recognizes that rigid separation of powers can undermine the government\'s ability to protect welfare during catastrophes. Public health emergencies justify executive action that would normally require congressional authorization.',
    PR: 'Pragmatic governance during a pandemic requires executive flexibility to direct industrial production and manage economic consequences. Evidence-based assessment showed both the genuine emergency and the effectiveness of defense production mobilization. The payroll tax deferral raised practical concerns about fiscal impacts but served economic stimulus purposes during crisis unemployment.',
    SM: 'Executive authority encompasses broad emergency powers during genuine national crises, particularly to direct military-industrial capacity and manage public health threats. The defense production authority reflected legitimate wartime powers traditionally available to the President. The payroll tax deferral represented a reasonable exercise of fiscal emergency authority under the CARES Act framework.'
  }
},
    {
  id: 'keystone-xl-revocation',
  title: 'Keystone XL Pipeline Permit Revocation',
  date: '2021-01-20',
  type: 'Executive Order 13990',
  admin: 'Biden',
  desc: 'Revoked the presidential permit for the Keystone XL pipeline on the first day of the Biden administration.',
  brief: 'President Biden signed Executive Order 13990, which revoked the presidential permit for the Keystone XL pipeline project. The permit had been issued under the Trump administration after an extensive regulatory review. The revocation was based on concerns about climate change and environmental impacts.\n\nThe order was largely challenged on grounds of executive overreach and instability in permitting processes rather than fundamental constitutional violations. Property rights and reliance interests were implicated, but courts found the President\'s permitting authority gave sufficient discretion for permit revocation.\n\nThe constitutional issues involved the scope of executive permitting authority over border-crossing projects, the stability of regulatory decisions across administrations, and whether environmental concerns justified overriding energy independence and economic development priorities.',
  scores: {
    TX: { R: {s:-1, r:0.6, c:"M"}, E: {s:0, r:0.3, c:"L"}, D: {s:0, r:0.5, c:"M"}, SP: {s:1, r:0.7, c:"H"}, DP: {s:-1, r:0.6, c:"M"}, W: {s:1, r:0.7, c:"H"}, N: {s:-1, r:0.6, c:"M"} },
    OR: { R: {s:-1, r:0.6, c:"M"}, E: {s:0, r:0.3, c:"L"}, D: {s:0, r:0.5, c:"M"}, SP: {s:1, r:0.7, c:"H"}, DP: {s:-1, r:0.6, c:"M"}, W: {s:1, r:0.6, c:"M"}, N: {s:0, r:0.5, c:"M"} },
        DC: { R:{s:0,r:0.2,c:"L"}, E:{s:0,r:0.2,c:"L"}, D:{s:0,r:0.4,c:"M"}, SP:{s:0,r:0.4,c:"M"}, DP:{s:0,r:0.3,c:"L"}, W:{s:0,r:0.4,c:"M"}, N:{s:0,r:0.3,c:"L"} },
    LC: { R: {s:1, r:0.5, c:"M"}, E: {s:0, r:0.3, c:"L"}, D: {s:1, r:0.6, c:"M"}, SP: {s:1, r:0.7, c:"H"}, DP: {s:0, r:0.4, c:"M"}, W: {s:2, r:0.8, c:"H"}, N: {s:0, r:0.5, c:"M"} },
    PR: { R: {s:0, r:0.5, c:"M"}, E: {s:0, r:0.3, c:"L"}, D: {s:0, r:0.5, c:"M"}, SP: {s:1, r:0.7, c:"H"}, DP: {s:0, r:0.5, c:"M"}, W: {s:2, r:0.85, c:"H"}, N: {s:0, r:0.5, c:"M"} },
    SM: { R: {s:-1, r:0.5, c:"M"}, E: {s:0, r:0.3, c:"L"}, D: {s:0, r:0.5, c:"M"}, SP: {s:2, r:0.8, c:"H"}, DP: {s:0, r:0.4, c:"M"}, W: {s:2, r:0.75, c:"H"}, N: {s:0, r:0.6, c:"M"} }
  },
  narratives: {
    TX: 'The International Bridges and Tunnels Act grants the President authority to issue or revoke permits for border-crossing pipelines. The text does not limit revocation authority to narrow circumstances, suggesting broad executive discretion. However, reliance interests in previously-issued permits may constrain retroactive revocation based on changed policy preferences.',
    OR: 'The original public meaning of executive authority over border commerce includes the power to control infrastructure crossing national boundaries. However, original principles of contractual stability and reliance interests suggest vested property interests deserve protection even when administrations change. The revocation raised original concerns about arbitrary executive action affecting settled reliance.',
    DC: 'Executive authority over international pipeline permits is well-established through the cross-border permit process. Revoking a permit within recognized executive prerogative raises no significant doctrinal concerns under established administrative law.',
    LC: 'Environmental protection and climate change represent evolved constitutional priorities under the Welfare Clause and emerging constitutional consciousness regarding intergenerational environmental justice. The executive authority to protect environmental values has expanded through modern statutory architecture. The revocation reflects constitutional values of environmental stewardship advancing through successive administrations.',
    PR: 'Pragmatic energy policy requires balancing climate benefits against economic disruption and energy security costs. Evidence on climate impacts supports pipeline prevention, but evidence on economic dependence on continued fossil fuel infrastructure suggests costs were significant. Practical governance favors transparent cost-benefit analysis before disrupting settled permitting decisions.',
    SM: 'The President\'s broad authority over border-crossing infrastructure and environmental permitting constitutes core executive power. Permitting decisions reflect policy judgment that properly belongs to the elected executive, not courts. The revocation reflected legitimate constitutional authority over border infrastructure and environmental stewardship.'
  }
},
    {
  id: 'osha-vaccine-mandate',
  title: 'OSHA Workplace Vaccine Mandate',
  date: '2021-09-09',
  type: 'Executive Order 14042',
  admin: 'Biden',
  desc: 'Required vaccination or testing for employees of businesses with 100 or more workers through OSHA authority.',
  brief: 'Executive Order 14042 directed OSHA to develop emergency rules requiring vaccination or regular testing for businesses with 100 or more employees. The mandate applied to private sector employers and was intended to increase vaccination rates during the Delta variant surge.\n\nThe Supreme Court in NFIB v. OSHA stayed the mandate pending review, indicating the petitioners demonstrated serious constitutional questions regarding the OSHA statute\'s scope. The Court found that OSHA\'s authority to regulate "grave dangers" in the workplace did not clearly authorize vaccination mandates affecting millions of workers nationwide.\n\nThe constitutional questions involved non-delegation concerns, whether OSHA\'s statutory authority extended to general public health rather than workplace-specific hazards, and whether the mandate violated individual liberty interests. The case exemplified the "major questions doctrine" debate regarding executive authority.',
  scores: {
    TX: { R: {s:-1, r:0.8, c:"H"}, E: {s:0, r:0.4, c:"M"}, D: {s:-1, r:0.7, c:"H"}, SP: {s:-2, r:0.85, c:"H"}, DP: {s:-1, r:0.8, c:"H"}, W: {s:1, r:0.7, c:"H"}, N: {s:-1, r:0.6, c:"M"} },
    OR: { R: {s:-1, r:0.8, c:"H"}, E: {s:0, r:0.4, c:"M"}, D: {s:-1, r:0.7, c:"H"}, SP: {s:-2, r:0.85, c:"H"}, DP: {s:-1, r:0.8, c:"H"}, W: {s:0, r:0.6, c:"M"}, N: {s:-1, r:0.6, c:"M"} },
        DC: { R:{s:-1,r:0.7,c:"H"}, E:{s:0,r:0.3,c:"M"}, D:{s:-1,r:0.6,c:"H"}, SP:{s:-1,r:0.7,c:"H"}, DP:{s:0,r:0.4,c:"M"}, W:{s:0,r:0.5,c:"M"}, N:{s:0,r:0.3,c:"L"} },
    LC: { R: {s:0, r:0.6, c:"M"}, E: {s:0, r:0.4, c:"M"}, D: {s:0, r:0.5, c:"M"}, SP: {s:-1, r:0.7, c:"H"}, DP: {s:0, r:0.7, c:"H"}, W: {s:2, r:0.8, c:"H"}, N: {s:0, r:0.5, c:"M"} },
    PR: { R: {s:0, r:0.7, c:"H"}, E: {s:0, r:0.4, c:"M"}, D: {s:0, r:0.6, c:"M"}, SP: {s:-1, r:0.7, c:"H"}, DP: {s:0, r:0.7, c:"H"}, W: {s:2, r:0.85, c:"H"}, N: {s:0, r:0.5, c:"M"} },
    SM: { R: {s:0, r:0.6, c:"M"}, E: {s:0, r:0.4, c:"M"}, D: {s:0, r:0.5, c:"M"}, SP: {s:0, r:0.65, c:"M"}, DP: {s:0, r:0.7, c:"H"}, W: {s:2, r:0.8, c:"H"}, N: {s:0, r:0.6, c:"M"} }
  },
  narratives: {
    TX: 'The OSHA statute authorizes regulation of "grave dangers" in the workplace, but the text does not clearly extend authority to require vaccinations for hazards transmitted outside the workplace. The mandate affected workers\' personal health decisions rather than traditional workplace safety measures. Textualist interpretation requires clear statutory authorization for policies affecting individual medical liberty.',
    OR: 'OSHA was created to address workplace-specific hazards, not to serve as a vehicle for general public health mandates. The original understanding of workplace safety did not encompass mandatory medical treatment decisions. The Tenth Amendment reserves police powers to states, including public health authority, which the federal government cannot assume without explicit constitutional grant.',
    DC: 'NFIB v. OSHA struck down the mandate, applying the major questions doctrine. OSHA\'s emergency temporary standards authority has limited judicial support historically. The unprecedented scope—covering 84 million workers—exceeded what courts recognized as ordinary agency authority.',
    LC: 'Public health emergencies justify broader executive authority to protect collective welfare under evolved constitutional doctrine. The pandemic represented a genuine grave danger justifying extraordinary measures. Constitutional values of preserving public health and protecting vulnerable populations support vaccine promotion through workplace requirements.',
    PR: 'Empirical evidence demonstrated vaccine effectiveness in reducing COVID-19 transmission and mortality. Vaccination mandates in comparable democracies increased vaccination rates without significant operational disruption. Pragmatic policy supports evidence-based public health measures during genuine health emergencies affecting millions of workers.',
    SM: 'The President\'s authority to protect workplace safety and direct federal contractors to implement health measures encompasses vaccine policy authority. Executive emergency power during pandemic crisis justified measures beyond normal statutory scope. OSHA\'s broad "grave danger" language provided reasonable statutory basis for emergency workplace health mandates.'
  }
},
    {
  id: 'student-loan-forgiveness',
  title: 'Student Loan Forgiveness Plan',
  date: '2022-08-24',
  type: 'Executive Action',
  admin: 'Biden',
  desc: 'Announced debt forgiveness program providing up to $20,000 per borrower in federal student loan cancellation.',
  brief: 'The Biden administration announced a student loan forgiveness program that would cancel up to $20,000 in federal student loan debt per borrower, targeting individuals with annual income below $125,000. The program would cost an estimated $400+ billion over the following decade.\n\nThe Supreme Court in Biden v. Nebraska (2023) struck down the program 6-3, finding that the administration lacked the statutory authority to implement such a sweeping policy without explicit congressional authorization. The Court applied the major questions doctrine, requiring clear congressional approval for decisions of vast economic consequence.\n\nThe constitutional conflict mirrored the DACA/DAPA debates, centering on whether executive officials could use broad statutory language (the HEROES Act) to justify billion-dollar policy changes. The case raised separation of powers concerns regarding the Appropriations Clause and whether such spending decisions belong exclusively to Congress.',
  scores: {
    TX: { R: {s:0, r:0.5, c:"M"}, E: {s:0, r:0.3, c:"L"}, D: {s:-2, r:0.9, c:"H"}, SP: {s:-2, r:0.95, c:"H"}, DP: {s:0, r:0.3, c:"L"}, W: {s:1, r:0.7, c:"H"}, N: {s:0, r:0.3, c:"L"} },
    OR: { R: {s:0, r:0.5, c:"M"}, E: {s:0, r:0.3, c:"L"}, D: {s:-2, r:0.9, c:"H"}, SP: {s:-2, r:0.95, c:"H"}, DP: {s:0, r:0.3, c:"L"}, W: {s:0, r:0.5, c:"M"}, N: {s:0, r:0.3, c:"L"} },
        DC: { R:{s:0,r:0.2,c:"L"}, E:{s:0,r:0.3,c:"L"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:0,r:0.3,c:"M"}, W:{s:0,r:0.4,c:"M"}, N:{s:0,r:0.2,c:"L"} },
    LC: { R: {s:0, r:0.5, c:"M"}, E: {s:0, r:0.4, c:"M"}, D: {s:-1, r:0.7, c:"H"}, SP: {s:-1, r:0.8, c:"H"}, DP: {s:1, r:0.6, c:"M"}, W: {s:2, r:0.85, c:"H"}, N: {s:0, r:0.3, c:"L"} },
    PR: { R: {s:0, r:0.5, c:"M"}, E: {s:0, r:0.4, c:"M"}, D: {s:-1, r:0.7, c:"H"}, SP: {s:-2, r:0.9, c:"H"}, DP: {s:1, r:0.7, c:"H"}, W: {s:2, r:0.85, c:"H"}, N: {s:0, r:0.3, c:"L"} },
    SM: { R: {s:0, r:0.5, c:"M"}, E: {s:0, r:0.3, c:"L"}, D: {s:-1, r:0.8, c:"H"}, SP: {s:-1, r:0.85, c:"H"}, DP: {s:0, r:0.4, c:"M"}, W: {s:2, r:0.75, c:"H"}, N: {s:0, r:0.3, c:"L"} }
  },
  narratives: {
    TX: 'The HEROES Act authorized the Secretary of Education to waive or modify student loan obligations during national emergencies, but the statute\'s text does not clearly authorize cancellation affecting millions of borrowers and costing hundreds of billions. Major questions doctrine requires explicit authorization when executives claim vast discretion over questions of enormous economic consequence. The forgiveness program exceeded the reasonable textual limits of "waiver" or "modification."',
    OR: 'The Appropriations Clause reserves spending authority exclusively to Congress, reflecting the Framers\' understanding that fiscal decisions belong to elected representatives closest to taxpayers. Unilateral executive spending programs violate the original constitutional design. The program attempted to spend billions without congressional authorization, usurping the power of the purse.',
    DC: 'Biden v. Nebraska applied the major questions doctrine to invalidate the program. The HEROES Act interpretation was novel and lacked support in prior agency practice. Congressional spending authority under the Appropriations Clause creates strong doctrinal barriers to executive debt cancellation.',
    LC: 'The arc of constitutional development increasingly supports government action reducing inequality and expanding access to education. Student debt relief advances constitutional values of human flourishing and equal opportunity. The living Constitution perspective favors executive authority to address modern crises like student debt affecting millions.',
    PR: 'Evidence demonstrates that student debt reduction increases economic mobility and benefits lower-income borrowers significantly. Comparable democracies have implemented debt relief programs during economic crises. Pragmatic policy supports relief for borrowers harmed by rising tuition costs that outpaced wage growth.',
    SM: 'The HEROES Act provided reasonable statutory basis for emergency loan modification authority during the pandemic crisis. The President\'s executive authority over education policy extends to loan administration. The program represented legitimate exercise of executive discretion within broad statutory delegation.'
  }
},
    {
  id: 'title-ix-gender-identity',
  title: 'Title IX Expansion to Gender Identity',
  date: '2024-04-29',
  type: 'Proposed Title IX Regulation',
  admin: 'Biden',
  desc: 'Proposed expansion of Title IX to prohibit discrimination based on gender identity in schools.',
  brief: 'The Department of Education proposed revised Title IX regulations that would expand sex discrimination protections to explicitly cover gender identity discrimination in schools. The regulation interpreted Title IX\'s prohibition on sex discrimination to encompass discrimination based on gender identity and transgender status.\n\nSeveral federal courts enjoined enforcement of aspects of the regulation, finding that Title IX\'s statutory language is ambiguous and the regulatory expansion may violate the First Amendment by imposing speech restrictions on schools regarding pronouns and facilities.\n\nThe constitutional questions centered on statutory interpretation (whether "sex" includes gender identity), administrative law principles (whether agency interpretation went beyond statutory bounds), and First Amendment concerns regarding government-mandated speech and religious liberty implications for schools with religious missions.',
  scores: {
    TX: { R: {s:-1, r:0.8, c:"H"}, E: {s:0, r:0.6, c:"M"}, D: {s:-1, r:0.7, c:"H"}, SP: {s:-1, r:0.75, c:"H"}, DP: {s:0, r:0.5, c:"M"}, W: {s:1, r:0.7, c:"H"}, N: {s:0, r:0.4, c:"M"} },
    OR: { R: {s:-1, r:0.8, c:"H"}, E: {s:0, r:0.5, c:"M"}, D: {s:-1, r:0.7, c:"H"}, SP: {s:-1, r:0.75, c:"H"}, DP: {s:0, r:0.4, c:"M"}, W: {s:1, r:0.6, c:"M"}, N: {s:0, r:0.4, c:"M"} },
        DC: { R:{s:1,r:0.7,c:"H"}, E:{s:1,r:0.7,c:"H"}, D:{s:0,r:0.4,c:"M"}, SP:{s:0,r:0.4,c:"M"}, DP:{s:0,r:0.4,c:"M"}, W:{s:0,r:0.3,c:"L"}, N:{s:0,r:0.2,c:"L"} },
    LC: { R: {s:1, r:0.8, c:"H"}, E: {s:1, r:0.8, c:"H"}, D: {s:0, r:0.6, c:"M"}, SP: {s:0, r:0.7, c:"H"}, DP: {s:1, r:0.7, c:"H"}, W: {s:1, r:0.7, c:"H"}, N: {s:0, r:0.4, c:"M"} },
    PR: { R: {s:1, r:0.8, c:"H"}, E: {s:1, r:0.8, c:"H"}, D: {s:0, r:0.6, c:"M"}, SP: {s:0, r:0.7, c:"H"}, DP: {s:1, r:0.7, c:"H"}, W: {s:1, r:0.75, c:"H"}, N: {s:0, r:0.4, c:"M"} },
    SM: { R: {s:1, r:0.75, c:"H"}, E: {s:1, r:0.7, c:"H"}, D: {s:0, r:0.6, c:"M"}, SP: {s:0, r:0.7, c:"H"}, DP: {s:1, r:0.6, c:"M"}, W: {s:2, r:0.75, c:"H"}, N: {s:0, r:0.4, c:"M"} }
  },
  narratives: {
    TX: 'Title IX\'s statutory text prohibits discrimination "on the basis of sex," language enacted in 1972 with settled meaning concerning biological sex. The text does not mention gender identity or transgender status. Textualist interpretation requires Congress to speak clearly before agencies can expand statutory language beyond original meaning, especially when affecting First Amendment freedoms.',
    OR: 'Congress in 1972 understood "sex" to mean biological sex with settled meaning in law, not gender identity as a social or psychological construct. The original public meaning of Title IX did not encompass gender identity. Originalism requires respecting settled statutory meaning rather than allowing agencies to rewrite statutes through regulatory expansion.',
    DC: 'Bostock v. Clayton County (2020) provides doctrinal support by recognizing sex discrimination encompasses gender identity under Title VII. Extending this reasoning to Title IX has textual parallel, though it represents an incremental extension of the Bostock framework to educational contexts.',
    LC: 'Constitutional principles have evolved to recognize gender identity as integral to equal protection and individual dignity. The arc of civil rights progress extends protections to historically excluded groups, and contemporary understanding embraces gender identity as foundational to equal treatment. Title IX should evolve with constitutional consciousness to protect students from discrimination based on gender identity.',
    PR: 'Empirical evidence demonstrates that discrimination based on gender identity causes documented harm to student wellbeing and academic success. Evidence from schools implementing inclusive policies shows no operational disruption. Pragmatic policy supports Title IX expansion to protect vulnerable students from discrimination.',
    SM: 'Bostock v. Clayton County (2020) held that discrimination based on transgender status constitutes sex discrimination under Title VII because it necessarily involves classification based on sex. The logic extends readily to Title IX as a parallel statute with identical language. Executive authority to enforce civil rights statutes supports expansive interpretation protecting vulnerable students.'
  }
},
    {
  id: 'racial-equity-initiative',
  title: 'Racial Equity Advancement Initiative',
  date: '2021-01-20',
  type: 'Executive Order 13985',
  admin: 'Biden',
  desc: 'Directed federal agencies to advance racial equity in their programs and operations.',
  brief: 'Executive Order 13985 directed federal agencies to assess equity in their programs, set racial equity goals, and develop action plans to address disparities affecting communities of color. The order aimed to embed equity considerations throughout federal administrative operations and resource allocation.\n\nThe executive order did not explicitly mandate race-conscious affirmative action but directed equity-focused policy analysis and priority-setting. Implementation raised constitutional questions about whether race-conscious approaches to federal spending and administration constitute unlawful racial classifications under the Equal Protection Clause.\n\nThe constitutional tension involved whether federal executive action advancing equity goals through race-conscious analysis violates equal protection principles, or whether such action represents legitimate implementation of civil rights obligations and constitutional values of equal protection. The 14th Amendment\'s remedial purpose became central to the debate.',
  scores: {
    TX: { R: {s:0, r:0.6, c:"M"}, E: {s:-1, r:0.75, c:"H"}, D: {s:0, r:0.5, c:"M"}, SP: {s:1, r:0.7, c:"H"}, DP: {s:0, r:0.5, c:"M"}, W: {s:1, r:0.7, c:"H"}, N: {s:0, r:0.5, c:"M"} },
    OR: { R: {s:0, r:0.6, c:"M"}, E: {s:0, r:0.7, c:"H"}, D: {s:0, r:0.5, c:"M"}, SP: {s:1, r:0.7, c:"H"}, DP: {s:0, r:0.5, c:"M"}, W: {s:1, r:0.7, c:"H"}, N: {s:0, r:0.5, c:"M"} },
        DC: { R:{s:0,r:0.4,c:"M"}, E:{s:1,r:0.7,c:"H"}, D:{s:0,r:0.4,c:"M"}, SP:{s:0,r:0.3,c:"L"}, DP:{s:0,r:0.3,c:"L"}, W:{s:1,r:0.6,c:"M"}, N:{s:0,r:0.2,c:"L"} },
    LC: { R: {s:1, r:0.8, c:"H"}, E: {s:1, r:0.85, c:"H"}, D: {s:1, r:0.7, c:"H"}, SP: {s:1, r:0.7, c:"H"}, DP: {s:1, r:0.7, c:"H"}, W: {s:2, r:0.8, c:"H"}, N: {s:1, r:0.6, c:"M"} },
    PR: { R: {s:1, r:0.8, c:"H"}, E: {s:1, r:0.85, c:"H"}, D: {s:1, r:0.7, c:"H"}, SP: {s:1, r:0.7, c:"H"}, DP: {s:1, r:0.7, c:"H"}, W: {s:2, r:0.85, c:"H"}, N: {s:1, r:0.6, c:"M"} },
    SM: { R: {s:1, r:0.75, c:"H"}, E: {s:1, r:0.8, c:"H"}, D: {s:1, r:0.6, c:"M"}, SP: {s:1, r:0.7, c:"H"}, DP: {s:1, r:0.7, c:"H"}, W: {s:2, r:0.8, c:"H"}, N: {s:1, r:0.6, c:"M"} }
  },
  narratives: {
    TX: 'The Fourteenth Amendment protects equal protection under law, requiring government neutrality regarding race in statutory language and governmental action. However, directing agencies to assess and address disparities does not necessarily mandate racial classifications. The executive order\'s text focuses on equity goals rather than explicit race-based allocation, potentially consistent with neutral language principles.',
    OR: 'The Fourteenth Amendment was enacted to remedy slavery and ensure equal citizenship, reflecting remedial purpose toward equality. The original understanding recognized that achieving equal protection required addressing systemic inequality resulting from slavery and discrimination. Executive action to advance equity aligns with the original remedial purpose of the Fourteenth Amendment.',
    DC: 'Executive equity orders build on EO 11246 and affirmative action doctrine (Grutter v. Bollinger). However, Students for Fair Admissions v. Harvard narrowed race-conscious policies. Doctrinal tension exists between historical support for equity measures and recent judicial retrenchment.',
    LC: 'Constitutional jurisprudence recognizes that authentic equality sometimes requires race-conscious remedies addressing documented historical and ongoing discrimination. The arc of equal protection doctrine has evolved to support legitimate equity initiatives as consistent with constitutional values. Agencies implementing equity goals fulfill evolving constitutional commitments to equal dignity.',
    PR: 'Empirical evidence demonstrates persistent racial disparities in federal program outcomes reflecting historical discrimination and systemic inequities. Evidence shows that equity-focused analysis and targeting of resources reduces disparities. Pragmatic governance supports evidence-based equity initiatives that reduce measurable gaps in federal program impacts.',
    SM: 'The President possesses broad executive authority to direct agencies toward equity-focused administration of federal programs. The Fourteenth Amendment empowers federal officials to advance equal protection through active remedial measures. Executive authority to implement constitutional values supports directing agencies to advance equity goals.'
  }
},
    // TRUMP II ERA (10 NEW EOs)
    {
      id: 'birthright-citizenship', title: 'Ending Birthright Citizenship', date: '2025-01-20', type: 'Executive Order', admin: 'Trump II',
      desc: 'Attempted to end birthright citizenship for children of non-citizens by executive order.',
      brief: 'Executive order directing agencies to deny citizenship to children born in the US whose parents are not citizens or lawful permanent residents. Courts immediately blocked it as violating the Fourteenth Amendment. The order attempted to override 150 years of settled interpretation since United States v. Wong Kim Ark (1898).',
      scores: { TX: { R:{s:-2,r:0.9,c:"H"}, E:{s:-2,r:0.95,c:"H"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:-2,r:0.85,c:"H"}, W:{s:-1,r:0.5,c:"M"}, N:{s:0,r:0.4,c:"M"} }, OR: { R:{s:-2,r:0.9,c:"H"}, E:{s:-2,r:0.95,c:"H"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:-2,r:0.85,c:"H"}, W:{s:-1,r:0.5,c:"M"}, N:{s:0,r:0.4,c:"M"} }, DC: { R:{s:-2,r:0.8,c:"H"}, E:{s:-2,r:0.9,c:"H"}, D:{s:-1,r:0.6,c:"H"}, SP:{s:-2,r:0.8,c:"H"}, DP:{s:-2,r:0.8,c:"H"}, W:{s:-1,r:0.5,c:"M"}, N:{s:0,r:0.4,c:"M"} }, LC: { R:{s:-2,r:0.95,c:"H"}, E:{s:-2,r:0.95,c:"H"}, D:{s:-2,r:0.8,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:-2,r:0.9,c:"H"}, W:{s:-1,r:0.6,c:"H"}, N:{s:-1,r:0.5,c:"M"} }, PR: { R:{s:-2,r:0.9,c:"H"}, E:{s:-2,r:0.9,c:"H"}, D:{s:-2,r:0.8,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:-2,r:0.9,c:"H"}, W:{s:-1,r:0.6,c:"H"}, N:{s:0,r:0.4,c:"M"} }, SM: { R:{s:-1,r:0.7,c:"H"}, E:{s:-1,r:0.8,c:"H"}, D:{s:0,r:0.5,c:"M"}, SP:{s:-1,r:0.7,c:"H"}, DP:{s:-1,r:0.7,c:"H"}, W:{s:0,r:0.4,c:"M"}, N:{s:1,r:0.6,c:"M"} } },
      narratives: { TX: 'The Fourteenth Amendment states unambiguously: All persons born in the US are citizens. No executive order can override constitutional text. The attempt contradicts 150 years of settled precedent.', OR: 'The Fourteenth Amendment was ratified to ensure broad citizenship. The Framers of Reconstruction intended to prevent executive exclusion. Subject to the jurisdiction means subject to US law.', DC: 'United States v. Wong Kim Ark (1898) definitively established that the Fourteenth Amendment grants citizenship to all persons born on U.S. soil. This is among the most settled precedents in constitutional law. An executive order contradicting it represents a direct conflict with over a century of stare decisis.', LC: 'Constitutional arc has expanded citizenship. Denying birthright citizenship reverses foundational commitments and creates a permanent underclass undermining equal dignity.', PR: 'No peer democracy has eliminated birthright citizenship by executive action. The policy would create chaos, statelessness, and violate international law. Evidence shows it harms integration.', SM: 'The subject to jurisdiction clause has narrow readings available for diplomats and combatants. But this contradicts 150 years of precedent. Congress, not the executive, should clarify the clause.' }
    },
    {
      id: 'immigration-enforcement', title: 'Immigration Enforcement & Mass Deportation', date: '2025-01-20', type: 'Executive Order', admin: 'Trump II',
      desc: 'Directed mass deportation operations and expanded immigration enforcement to unprecedented scale.',
      brief: 'Suite of orders directing mass deportation of undocumented immigrants, deploying military resources to the border, and expanding expedited removal without individualized hearings. The orders raise severe due process concerns and strain separation between military and civilian law enforcement.',
      scores: { TX: { R:{s:-1,r:0.8,c:"H"}, E:{s:-1,r:0.7,c:"H"}, D:{s:-1,r:0.6,c:"M"}, SP:{s:0,r:0.5,c:"M"}, DP:{s:-2,r:0.9,c:"H"}, W:{s:-1,r:0.7,c:"H"}, N:{s:1,r:0.8,c:"H"} }, OR: { R:{s:-1,r:0.7,c:"H"}, E:{s:-1,r:0.6,c:"H"}, D:{s:-1,r:0.5,c:"M"}, SP:{s:0,r:0.5,c:"M"}, DP:{s:-2,r:0.85,c:"H"}, W:{s:-1,r:0.6,c:"M"}, N:{s:1,r:0.8,c:"H"} }, DC: { R:{s:-1,r:0.7,c:"H"}, E:{s:-1,r:0.7,c:"H"}, D:{s:0,r:0.4,c:"M"}, SP:{s:0,r:0.5,c:"M"}, DP:{s:-2,r:0.8,c:"H"}, W:{s:0,r:0.4,c:"M"}, N:{s:1,r:0.6,c:"M"} }, LC: { R:{s:-2,r:0.9,c:"H"}, E:{s:-2,r:0.85,c:"H"}, D:{s:-1,r:0.6,c:"M"}, SP:{s:-1,r:0.6,c:"M"}, DP:{s:-2,r:0.95,c:"H"}, W:{s:-1,r:0.7,c:"H"}, N:{s:0,r:0.5,c:"M"} }, PR: { R:{s:-2,r:0.85,c:"H"}, E:{s:-2,r:0.8,c:"H"}, D:{s:-1,r:0.6,c:"M"}, SP:{s:-1,r:0.6,c:"M"}, DP:{s:-2,r:0.9,c:"H"}, W:{s:-1,r:0.8,c:"H"}, N:{s:0,r:0.6,c:"M"} }, SM: { R:{s:0,r:0.6,c:"M"}, E:{s:0,r:0.5,c:"M"}, D:{s:0,r:0.4,c:"M"}, SP:{s:1,r:0.7,c:"H"}, DP:{s:-1,r:0.7,c:"H"}, W:{s:0,r:0.5,c:"M"}, N:{s:2,r:0.9,c:"H"} } },
      narratives: { TX: 'Fifth Amendment guarantees due process to all persons. Mass removal without individualized hearings violates constitutional text. Posse Comitatus Act restricts military involvement in civilian law enforcement.', OR: 'Founders divided immigration power between Congress and Executive. Original understanding supported individual adjudication, not mass proceedings. Military deployment for domestic law enforcement contradicts founding concerns.', DC: 'Immigration enforcement authority is established, but mass deportation at this scale lacks modern precedent. Due process requirements for removal proceedings are well-settled (Zadvydas v. Davis, Padilla v. Kentucky). The operational scope raises serious procedural due process concerns under established doctrine.', LC: 'Constitutional protections now recognize rights of long-term residents. Mass deportation without process represents regression from evolved due process standards.', PR: 'Mass deportation of 11+ million would cost hundreds of billions, devastate labor-dependent industries, and separate families. Peer democracies use regularization, not mass removal.', SM: 'President possesses broad enforcement authority over immigration law. Prioritizing resources reflects legitimate discretion. National sovereignty requires ability to enforce immigration laws effectively.' }
    },
    {
      id: 'jan6-pardons', title: 'January 6th Pardons', date: '2025-01-20', type: 'Executive Clemency', admin: 'Trump II',
      desc: 'Pardoned approximately 1,500 individuals convicted of January 6th Capitol breach crimes.',
      brief: 'Blanket pardons issued to virtually all individuals convicted or charged in connection with January 6 Capitol breach, including those convicted of assaulting police and seditious conspiracy. Courts questioned whether pardon power can immunize political violence against democratic institutions.',
      scores: { TX: { R:{s:0,r:0.3,c:"M"}, E:{s:-2,r:0.8,c:"H"}, D:{s:-2,r:0.95,c:"H"}, SP:{s:-1,r:0.6,c:"H"}, DP:{s:-2,r:0.9,c:"H"}, W:{s:-1,r:0.5,c:"M"}, N:{s:0,r:0.3,c:"L"} }, OR: { R:{s:0,r:0.3,c:"M"}, E:{s:-2,r:0.8,c:"H"}, D:{s:-2,r:0.95,c:"H"}, SP:{s:-1,r:0.7,c:"H"}, DP:{s:-2,r:0.9,c:"H"}, W:{s:-1,r:0.5,c:"M"}, N:{s:0,r:0.3,c:"L"} }, DC: { R:{s:0,r:0.3,c:"M"}, E:{s:0,r:0.3,c:"L"}, D:{s:-2,r:0.8,c:"H"}, SP:{s:-1,r:0.6,c:"H"}, DP:{s:-1,r:0.5,c:"M"}, W:{s:0,r:0.2,c:"L"}, N:{s:-1,r:0.5,c:"M"} }, LC: { R:{s:0,r:0.3,c:"M"}, E:{s:-2,r:0.9,c:"H"}, D:{s:-2,r:0.95,c:"H"}, SP:{s:-1,r:0.7,c:"H"}, DP:{s:-2,r:0.9,c:"H"}, W:{s:-1,r:0.6,c:"M"}, N:{s:-1,r:0.4,c:"M"} }, PR: { R:{s:0,r:0.3,c:"M"}, E:{s:-2,r:0.85,c:"H"}, D:{s:-2,r:0.95,c:"H"}, SP:{s:-1,r:0.7,c:"H"}, DP:{s:-2,r:0.9,c:"H"}, W:{s:-1,r:0.6,c:"M"}, N:{s:-1,r:0.4,c:"M"} }, SM: { R:{s:0,r:0.3,c:"M"}, E:{s:-1,r:0.6,c:"H"}, D:{s:-1,r:0.8,c:"H"}, SP:{s:0,r:0.5,c:"M"}, DP:{s:-1,r:0.7,c:"H"}, W:{s:0,r:0.4,c:"M"}, N:{s:0,r:0.3,c:"L"} } },
      narratives: { TX: 'Article II grants pardon power with no textual limitation except impeachment. Text permits blanket pardons but raises implicit concerns about self-dealing and undermining accountability.', OR: 'Founders granted pardon power for mercy and restoring tranquility, not rewarding political allies. Using pardons to immunize political violence inverts the original purpose.', DC: 'The pardon power is broad under Article II (Schick v. Reed, Ex parte Garland). However, no precedent exists for pardoning individuals convicted of acts directed against the constitutional order itself. This novel application to insurrection-related offenses is uncharted doctrinal territory.', LC: 'Democratic norms require accountability for political violence. Pardoning insurrectionists signals violence against institutions carries no consequences, undermining the constitutional order.', PR: 'Blanket pardons for political violence create moral hazard and encourage future overthrow attempts. Peer democracies do not pardon those who attack democratic institutions.', SM: 'Pardon power is textually unlimited and courts refuse to review pardon decisions. President may exercise mercy based on judgment that sentences were excessive or prosecutions were politically motivated.' }
    },
    {
      id: 'liberation-tariffs', title: 'Liberation Day Tariffs', date: '2025-04-02', type: 'Executive Proclamation', admin: 'Trump II',
      desc: 'Imposed sweeping tariffs on virtually all imports using emergency powers, bypassing congressional trade authority.',
      brief: 'Massive unilateral tariff increases on imports from nearly all partners, using IEEPA rather than congressional trade authority. The largest unilateral trade action in modern history, bypassing Congress. Markets experienced severe disruption with multiple legal challenges filed.',
      scores: { TX: { R:{s:0,r:0.3,c:"M"}, E:{s:0,r:0.2,c:"L"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-2,r:0.95,c:"H"}, DP:{s:-1,r:0.6,c:"M"}, W:{s:-2,r:0.9,c:"H"}, N:{s:1,r:0.7,c:"H"} }, OR: { R:{s:0,r:0.3,c:"M"}, E:{s:0,r:0.2,c:"L"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-2,r:0.95,c:"H"}, DP:{s:-1,r:0.6,c:"M"}, W:{s:-2,r:0.85,c:"H"}, N:{s:1,r:0.7,c:"H"} }, DC: { R:{s:0,r:0.2,c:"L"}, E:{s:0,r:0.2,c:"L"}, D:{s:-1,r:0.6,c:"H"}, SP:{s:-1,r:0.7,c:"H"}, DP:{s:0,r:0.3,c:"M"}, W:{s:-1,r:0.6,c:"M"}, N:{s:0,r:0.5,c:"M"} }, LC: { R:{s:-1,r:0.5,c:"M"}, E:{s:0,r:0.2,c:"L"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:-1,r:0.6,c:"M"}, W:{s:-2,r:0.9,c:"H"}, N:{s:0,r:0.5,c:"M"} }, PR: { R:{s:-1,r:0.5,c:"M"}, E:{s:0,r:0.3,c:"L"}, D:{s:-1,r:0.6,c:"M"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:-1,r:0.6,c:"M"}, W:{s:-2,r:0.95,c:"H"}, N:{s:0,r:0.6,c:"M"} }, SM: { R:{s:0,r:0.3,c:"M"}, E:{s:0,r:0.2,c:"L"}, D:{s:0,r:0.5,c:"M"}, SP:{s:-1,r:0.7,c:"H"}, DP:{s:0,r:0.4,c:"M"}, W:{s:-1,r:0.7,c:"H"}, N:{s:2,r:0.8,c:"H"} } },
      narratives: { TX: 'Article I, Section 8 grants Congress authority to lay tariffs. President lacks independent tariff authority. IEEPA was designed for sanctions, not trade policy restructuring.', OR: 'Founders specifically vested tariff power in Congress because tariffs were primary federal revenue. Executive unilateral tariffs contradict original constitutional design.', DC: 'Section 301 and IEEPA provide statutory authority for tariff actions, and Curtiss-Wright deference applies to foreign affairs. However, broad tariffs without specific trade injury findings depart from established trade law doctrine and push against the non-delegation principle.', LC: 'Normalization of emergency declarations for routine policy undermines constitutional balance and democratic deliberation on economic policy.', PR: 'Tariffs function as regressive taxes on consumers with documented inflationary effects. Peer democracies show multilateral agreements produce better outcomes than tariff wars.', SM: 'IEEPA grants broad emergency economic authority. Trade imbalances constitute genuine threats to national economic security requiring executive flexibility.' }
    },
    {
      id: 'schedule-f', title: 'Schedule F Civil Service Reclassification', date: '2025-01-20', type: 'Executive Order', admin: 'Trump II',
      desc: 'Reclassified tens of thousands of career civil servants as at-will political appointees.',
      brief: 'Reinstated and expanded Schedule F, reclassifying approximately 50,000 federal employees in policy-influencing positions as at-will appointees who can be fired without cause. Bypassed Pendleton Act civil service protections and threatened independence of nonpartisan government expertise.',
      scores: { TX: { R:{s:-1,r:0.6,c:"M"}, E:{s:0,r:0.4,c:"M"}, D:{s:-1,r:0.6,c:"M"}, SP:{s:-1,r:0.7,c:"H"}, DP:{s:-2,r:0.85,c:"H"}, W:{s:-1,r:0.6,c:"M"}, N:{s:0,r:0.2,c:"L"} }, OR: { R:{s:-1,r:0.5,c:"M"}, E:{s:0,r:0.3,c:"L"}, D:{s:-1,r:0.5,c:"M"}, SP:{s:-1,r:0.7,c:"H"}, DP:{s:-2,r:0.8,c:"H"}, W:{s:-1,r:0.6,c:"M"}, N:{s:0,r:0.2,c:"L"} }, DC: { R:{s:-1,r:0.6,c:"H"}, E:{s:-1,r:0.5,c:"M"}, D:{s:-1,r:0.6,c:"H"}, SP:{s:-2,r:0.8,c:"H"}, DP:{s:-1,r:0.7,c:"H"}, W:{s:-1,r:0.6,c:"M"}, N:{s:0,r:0.3,c:"L"} }, LC: { R:{s:-1,r:0.7,c:"H"}, E:{s:-1,r:0.6,c:"M"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-2,r:0.8,c:"H"}, DP:{s:-2,r:0.9,c:"H"}, W:{s:-1,r:0.7,c:"H"}, N:{s:0,r:0.2,c:"L"} }, PR: { R:{s:-1,r:0.7,c:"H"}, E:{s:-1,r:0.6,c:"M"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-2,r:0.8,c:"H"}, DP:{s:-2,r:0.85,c:"H"}, W:{s:-1,r:0.7,c:"H"}, N:{s:0,r:0.2,c:"L"} }, SM: { R:{s:0,r:0.5,c:"M"}, E:{s:0,r:0.3,c:"L"}, D:{s:0,r:0.4,c:"M"}, SP:{s:0,r:0.6,c:"M"}, DP:{s:-1,r:0.7,c:"H"}, W:{s:0,r:0.5,c:"M"}, N:{s:0,r:0.2,c:"L"} } },
      narratives: { TX: 'Pendleton Civil Service Reform Act protects federal employees from political firing. Statutory protections cannot be overridden by executive order. Due process protections apply to property interests in continued employment.', OR: 'Founders feared executive patronage and corruption. Merit-based civil service reflected constitutional values. Restoring patronage contradicts the constitutional arc away from spoils systems.', DC: 'The Pendleton Civil Service Reform Act (1883) established merit-based protections with 140 years of precedent. Elrod v. Burns and Branti v. Finkel limit political patronage in government employment. Dismantling these protections contradicts deeply embedded administrative law doctrine.', LC: 'Modern governance requires independent expertise insulated from political pressure. Civil service protections implement evolved commitment to competent administration.', PR: 'Countries with politicized civil services show worse governance, higher corruption, and policy instability. Pendleton Act was enacted precisely to remedy patronage dysfunction.', SM: 'Article II vests executive power including personnel authority. President needs ability to ensure policy-influencing employees align with democratically-mandated agenda. Accountability to elected leadership is itself a democratic value.' }
    },
    {
      id: 'doge', title: 'Department of Government Efficiency (DOGE)', date: '2025-01-20', type: 'Executive Order', admin: 'Trump II',
      desc: 'Created advisory body led by private citizens with access to government systems and de facto spending authority.',
      brief: 'Established DOGE as advisory body with unprecedented access to IT systems, personnel data, and spending authority. Led by unelected private citizens, directed agencies to terminate programs, fire employees, and cancel contracts without congressional authorization, raising Appointments Clause and Appropriations Clause questions.',
      scores: { TX: { R:{s:0,r:0.4,c:"M"}, E:{s:0,r:0.3,c:"L"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:-1,r:0.7,c:"H"}, W:{s:-1,r:0.7,c:"H"}, N:{s:0,r:0.2,c:"L"} }, OR: { R:{s:0,r:0.4,c:"M"}, E:{s:0,r:0.3,c:"L"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:-1,r:0.65,c:"M"}, W:{s:-1,r:0.6,c:"M"}, N:{s:0,r:0.2,c:"L"} }, DC: { R:{s:0,r:0.3,c:"M"}, E:{s:0,r:0.3,c:"L"}, D:{s:-2,r:0.8,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:-1,r:0.6,c:"H"}, W:{s:-1,r:0.5,c:"M"}, N:{s:0,r:0.3,c:"L"} }, LC: { R:{s:-1,r:0.6,c:"M"}, E:{s:0,r:0.3,c:"L"}, D:{s:-2,r:0.85,c:"H"}, SP:{s:-2,r:0.95,c:"H"}, DP:{s:-1,r:0.7,c:"H"}, W:{s:-1,r:0.8,c:"H"}, N:{s:0,r:0.2,c:"L"} }, PR: { R:{s:-1,r:0.6,c:"M"}, E:{s:0,r:0.3,c:"L"}, D:{s:-2,r:0.8,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:-1,r:0.7,c:"H"}, W:{s:-1,r:0.75,c:"H"}, N:{s:0,r:0.2,c:"L"} }, SM: { R:{s:0,r:0.4,c:"M"}, E:{s:0,r:0.3,c:"L"}, D:{s:0,r:0.5,c:"M"}, SP:{s:-1,r:0.7,c:"H"}, DP:{s:0,r:0.5,c:"M"}, W:{s:0,r:0.5,c:"M"}, N:{s:0,r:0.2,c:"L"} } },
      narratives: { TX: 'Appointments Clause requires Senate confirmation for officers exercising significant authority. DOGE operatives directed spending without appointment. Appropriations Clause prevents spending cuts not authorized by Congress.', OR: 'Founders created Appointments Clause to prevent unaccountable private actors from exercising government power. Hamilton warned against faction capturing executive function.', DC: 'No constitutional or statutory precedent supports a privately controlled entity exercising governmental spending authority. Appointments Clause doctrine (Buckley v. Valeo, Lucia v. SEC) requires proper appointment for those exercising significant authority. The Federal Advisory Committee Act governs advisory roles.', LC: 'Democratic governance requires accountability through constitutional processes. Unelected private citizens making binding decisions undermines democratic legitimacy and constitutional commitment to transparency.', PR: 'Rapid unsupervised spending cuts caused disruptions to veterans benefits, research grants, and disaster relief. Effective reform requires deliberate process, not unaccountable speed.', SM: 'President has broad authority to reorganize the executive branch and seek outside advice. Advisory bodies have precedent. Efficiency improvements serve public interest and fiscal responsibility.' }
    },
    {
      id: 'dei-elimination', title: 'DEI Program Elimination', date: '2025-01-20', type: 'Executive Order', admin: 'Trump II',
      desc: 'Eliminated all federal DEI programs and directed private sector compliance investigations.',
      brief: 'Executive orders eliminated all federal DEI programs, terminated DEI offices and personnel, and directed agencies to investigate private sector DEI practices for potential civil rights violations. Reversed decades of federal equity-focused policy and extended government pressure to private employers.',
      scores: { TX: { R:{s:-1,r:0.7,c:"H"}, E:{s:-2,r:0.9,c:"H"}, D:{s:0,r:0.3,c:"L"}, SP:{s:-1,r:0.6,c:"M"}, DP:{s:-1,r:0.6,c:"M"}, W:{s:-1,r:0.6,c:"M"}, N:{s:0,r:0.2,c:"L"} }, OR: { R:{s:0,r:0.5,c:"M"}, E:{s:-1,r:0.7,c:"H"}, D:{s:0,r:0.3,c:"L"}, SP:{s:0,r:0.5,c:"M"}, DP:{s:-1,r:0.5,c:"M"}, W:{s:0,r:0.4,c:"M"}, N:{s:0,r:0.2,c:"L"} }, DC: { R:{s:-1,r:0.6,c:"H"}, E:{s:-1,r:0.7,c:"H"}, D:{s:0,r:0.4,c:"M"}, SP:{s:0,r:0.4,c:"M"}, DP:{s:0,r:0.4,c:"M"}, W:{s:0,r:0.3,c:"L"}, N:{s:0,r:0.2,c:"L"} }, LC: { R:{s:-2,r:0.85,c:"H"}, E:{s:-2,r:0.95,c:"H"}, D:{s:-1,r:0.5,c:"M"}, SP:{s:-1,r:0.6,c:"M"}, DP:{s:-1,r:0.7,c:"H"}, W:{s:-1,r:0.7,c:"H"}, N:{s:0,r:0.2,c:"L"} }, PR: { R:{s:-1,r:0.8,c:"H"}, E:{s:-2,r:0.9,c:"H"}, D:{s:-1,r:0.5,c:"M"}, SP:{s:-1,r:0.6,c:"M"}, DP:{s:-1,r:0.65,c:"M"}, W:{s:-1,r:0.7,c:"H"}, N:{s:0,r:0.2,c:"L"} }, SM: { R:{s:1,r:0.6,c:"M"}, E:{s:0,r:0.7,c:"H"}, D:{s:0,r:0.3,c:"L"}, SP:{s:0,r:0.5,c:"M"}, DP:{s:0,r:0.4,c:"M"}, W:{s:0,r:0.5,c:"M"}, N:{s:0,r:0.2,c:"L"} } },
      narratives: { TX: 'Fourteenth Amendment mandates equal protection. First Amendment protects free expression including diversity advocacy. Orders chilling private speech raise both equal protection and free speech concerns.', OR: 'Fourteenth Amendment was enacted to remedy racial injustice. Original purpose supports equity programs. Elimination contradicts the amendment\'s core remedial purpose.', DC: 'Students for Fair Admissions narrowed race-conscious admissions but did not mandate elimination of all government diversity programs. Title VII anti-discrimination protections remain settled law. Blanket DEI elimination extends beyond the scope of recent judicial decisions.', LC: 'Constitutional arc expanded protections against discrimination. Equity programs reduce documented disparities. Elimination reverses decades of constitutional progress.', PR: 'Diverse organizations perform better. Equity programs reduce disparities. Peer democracies maintain equity frameworks as standard governance. Evidence contradicts elimination.', SM: 'Equal Protection Clause requires government neutrality. Race-conscious programs may themselves violate equal protection. Executive has authority to direct agencies toward race-neutral approaches.' }
    },
    {
      id: 'paris-withdrawal', title: 'Paris Climate Agreement Withdrawal', date: '2025-01-20', type: 'Executive Order', admin: 'Trump II',
      desc: 'Withdrew the US from the Paris Climate Agreement for the second time.',
      brief: 'Executive order initiating withdrawal from Paris Climate Agreement, removing US from global framework addressing climate change. While President has authority over international agreements, the action raised welfare and sovereignty concerns regarding intergenerational environmental obligations.',
      scores: { TX: { R:{s:0,r:0.2,c:"L"}, E:{s:0,r:0.3,c:"L"}, D:{s:-1,r:0.5,c:"M"}, SP:{s:0,r:0.4,c:"M"}, DP:{s:0,r:0.2,c:"L"}, W:{s:-2,r:0.9,c:"H"}, N:{s:1,r:0.7,c:"H"} }, OR: { R:{s:0,r:0.2,c:"L"}, E:{s:0,r:0.3,c:"L"}, D:{s:-1,r:0.5,c:"M"}, SP:{s:0,r:0.4,c:"M"}, DP:{s:0,r:0.2,c:"L"}, W:{s:-1,r:0.7,c:"H"}, N:{s:1,r:0.7,c:"H"} }, DC: { R:{s:0,r:0.2,c:"L"}, E:{s:0,r:0.2,c:"L"}, D:{s:-1,r:0.6,c:"M"}, SP:{s:0,r:0.5,c:"M"}, DP:{s:0,r:0.2,c:"L"}, W:{s:-1,r:0.5,c:"M"}, N:{s:0,r:0.4,c:"M"} }, LC: { R:{s:0,r:0.3,c:"L"}, E:{s:-1,r:0.5,c:"M"}, D:{s:-1,r:0.6,c:"M"}, SP:{s:0,r:0.4,c:"M"}, DP:{s:0,r:0.3,c:"L"}, W:{s:-2,r:0.95,c:"H"}, N:{s:0,r:0.5,c:"M"} }, PR: { R:{s:0,r:0.3,c:"L"}, E:{s:-1,r:0.5,c:"M"}, D:{s:-1,r:0.6,c:"M"}, SP:{s:0,r:0.4,c:"M"}, DP:{s:0,r:0.3,c:"L"}, W:{s:-2,r:0.95,c:"H"}, N:{s:0,r:0.5,c:"M"} }, SM: { R:{s:0,r:0.2,c:"L"}, E:{s:0,r:0.3,c:"L"}, D:{s:0,r:0.4,c:"M"}, SP:{s:1,r:0.6,c:"M"}, DP:{s:0,r:0.2,c:"L"}, W:{s:-1,r:0.7,c:"H"}, N:{s:2,r:0.8,c:"H"} } },
      narratives: { TX: 'Treaty Clause gives President authority over international agreements. Paris was never ratified as treaty. General Welfare Clause suggests obligation to protect collective wellbeing and environmental sustainability.', OR: 'Founders gave President foreign affairs authority but expected major commitments to receive Senate ratification. Original understanding supports executive discretion over non-treaty agreements while recognizing congressional interest.', DC: 'Treaty withdrawal authority is doctrinally ambiguous. Goldwater v. Carter was dismissed without reaching the merits. The executive has traditionally exercised withdrawal power, but the constitutional basis remains unsettled. This falls in a doctrinal gray area where precedent provides limited guidance.', LC: 'Climate change is existential threat to constitutional values of welfare and equality. Arc supports expanding protections to address threats to human flourishing. Withdrawal undermines welfare of future generations.', PR: 'Climate change imposes documented economic costs. Peer democracies maintain Paris commitments. US withdrawal reduces global climate ambition and harms diplomatic credibility.', SM: 'Executive authority over foreign affairs is at its apex over non-treaty agreements. National sovereignty includes determining environmental policy domestically. Energy independence serves national security interests.' }
    },
    {
      id: 'alien-enemies-act', title: 'Alien Enemies Act Deportations', date: '2025-03-15', type: 'Executive Proclamation', admin: 'Trump II',
      desc: 'Invoked the 1798 Alien Enemies Act to deport individuals without due process hearings during peacetime.',
      brief: 'Invoked Alien Enemies Act of 1798—wartime statute last used during WWII for Japanese internment—to summarily deport Venezuelan nationals without individualized hearings. Federal courts blocked action, finding the statute requires a declared war or invasion, neither of which existed. Supreme Court intervened after deportation flights departed.',
      scores: { TX: { R:{s:-2,r:0.9,c:"H"}, E:{s:-2,r:0.85,c:"H"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-1,r:0.6,c:"M"}, DP:{s:-2,r:0.95,c:"H"}, W:{s:-1,r:0.6,c:"M"}, N:{s:0,r:0.5,c:"M"} }, OR: { R:{s:-2,r:0.9,c:"H"}, E:{s:-2,r:0.8,c:"H"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-1,r:0.6,c:"M"}, DP:{s:-2,r:0.95,c:"H"}, W:{s:-1,r:0.6,c:"M"}, N:{s:0,r:0.5,c:"M"} }, DC: { R:{s:-2,r:0.8,c:"H"}, E:{s:-2,r:0.8,c:"H"}, D:{s:-1,r:0.6,c:"H"}, SP:{s:-1,r:0.7,c:"H"}, DP:{s:-2,r:0.9,c:"H"}, W:{s:0,r:0.3,c:"L"}, N:{s:0,r:0.5,c:"M"} }, LC: { R:{s:-2,r:0.95,c:"H"}, E:{s:-2,r:0.9,c:"H"}, D:{s:-2,r:0.8,c:"H"}, SP:{s:-1,r:0.7,c:"H"}, DP:{s:-2,r:0.95,c:"H"}, W:{s:-1,r:0.7,c:"H"}, N:{s:-1,r:0.5,c:"M"} }, PR: { R:{s:-2,r:0.95,c:"H"}, E:{s:-2,r:0.9,c:"H"}, D:{s:-2,r:0.8,c:"H"}, SP:{s:-1,r:0.7,c:"H"}, DP:{s:-2,r:0.95,c:"H"}, W:{s:-1,r:0.7,c:"H"}, N:{s:0,r:0.5,c:"M"} }, SM: { R:{s:-1,r:0.7,c:"H"}, E:{s:-1,r:0.7,c:"H"}, D:{s:-1,r:0.6,c:"M"}, SP:{s:0,r:0.5,c:"M"}, DP:{s:-1,r:0.8,c:"H"}, W:{s:0,r:0.4,c:"M"}, N:{s:1,r:0.7,c:"H"} } },
      narratives: { TX: 'Alien Enemies Act requires declared war or invasion. No war was declared and no invasion existed. Fifth Amendment guarantees due process to all persons. Summary removal without hearings violates the constitutional text.', OR: '1798 Act was part of the Alien and Sedition Acts, widely regarded as among the worst early legislation. Founders opposed the acts. Japanese internment under the same statute is universally condemned.', DC: 'The Alien Enemies Act has been invoked only during declared wars against nationals of enemy nations. Using it outside declared war for immigration enforcement is unprecedented. Hamdi v. Rumsfeld and Boumediene v. Bush established due process requirements even for alleged enemy combatants.', LC: 'Using wartime statute for peacetime deportation is the most regressive invocation since Japanese internment. Arc has firmly repudiated ethnicity-based mass deportation and wartime power abuse.', PR: 'Deporting without hearings to countries where people face danger violates international law and non-refoulement obligations. Evidence shows due process prevents errors in threat identification.', SM: 'Alien Enemies Act remains valid law. Transnational gang organizations may constitute hostile force justifying emergency measures. Executive has broad authority to protect national security from foreign threats.' }
    },
    {
      id: 'funding-freeze', title: 'Federal Funding Freeze', date: '2025-01-27', type: 'OMB Memorandum', admin: 'Trump II',
      desc: 'Attempted to freeze all federal grants and loans, blocked by courts within days.',
      brief: 'OMB memorandum ordering freeze on all federal grants, loans, and financial assistance programs pending review—estimated $3 trillion in federal spending. Federal judges immediately blocked the freeze, finding it directly violated the Appropriations Clause by withholding funds Congress had appropriated. The memorandum was rescinded within days after causing widespread disruption.',
      scores: { TX: { R:{s:-1,r:0.6,c:"M"}, E:{s:-1,r:0.5,c:"M"}, D:{s:-2,r:0.9,c:"H"}, SP:{s:-2,r:0.95,c:"H"}, DP:{s:-1,r:0.7,c:"H"}, W:{s:-2,r:0.9,c:"H"}, N:{s:0,r:0.3,c:"L"} }, OR: { R:{s:-1,r:0.6,c:"M"}, E:{s:-1,r:0.5,c:"M"}, D:{s:-2,r:0.9,c:"H"}, SP:{s:-2,r:0.95,c:"H"}, DP:{s:-1,r:0.7,c:"H"}, W:{s:-2,r:0.85,c:"H"}, N:{s:0,r:0.3,c:"L"} }, DC: { R:{s:0,r:0.3,c:"L"}, E:{s:-1,r:0.5,c:"M"}, D:{s:-2,r:0.8,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:-1,r:0.7,c:"H"}, W:{s:-1,r:0.6,c:"M"}, N:{s:0,r:0.3,c:"L"} }, LC: { R:{s:-1,r:0.7,c:"M"}, E:{s:-1,r:0.6,c:"M"}, D:{s:-2,r:0.9,c:"H"}, SP:{s:-2,r:0.95,c:"H"}, DP:{s:-2,r:0.8,c:"H"}, W:{s:-2,r:0.95,c:"H"}, N:{s:0,r:0.3,c:"L"} }, PR: { R:{s:-1,r:0.7,c:"M"}, E:{s:-1,r:0.6,c:"M"}, D:{s:-2,r:0.85,c:"H"}, SP:{s:-2,r:0.9,c:"H"}, DP:{s:-2,r:0.8,c:"H"}, W:{s:-2,r:0.95,c:"H"}, N:{s:0,r:0.3,c:"L"} }, SM: { R:{s:0,r:0.4,c:"M"}, E:{s:0,r:0.3,c:"L"}, D:{s:-1,r:0.7,c:"H"}, SP:{s:-1,r:0.8,c:"H"}, DP:{s:-1,r:0.6,c:"M"}, W:{s:-1,r:0.7,c:"H"}, N:{s:0,r:0.3,c:"L"} } },
      narratives: { TX: 'Appropriations Clause: No Money shall be drawn from the Treasury except by Appropriations made by Law. Impoundment Control Act prohibits President from withholding appropriated funds. The freeze directly violated both constitutional text and statutory law.', OR: 'Framers designed Appropriations Clause as primary check on executive power. Congress controls the purse. The Act was enacted after Nixon\'s impoundment crisis. Freezing spending represents exactly the overreach the Founders sought to prevent.', DC: 'The Impoundment Control Act (1974) specifically prohibits unilateral executive withholding of appropriated funds. Train v. City of New York upheld Congress\'s spending authority. This action directly contradicts settled statutory and constitutional doctrine on the appropriations power.', LC: 'Constitutional commitment to general welfare requires that appropriated funds flow as Congress intended. Unilateral freezes undermine the social contract and modern governance.', PR: 'Freeze caused immediate disruptions: Medicaid portals offline, research grants suspended, state programs facing gaps. Even brief freezes impose cascading costs. No peer democracy permits such freezes.', SM: 'President has authority to ensure efficient spending and prevent waste. OMB has legitimate oversight functions. A temporary pause for review represents reasonable executive management, and the freeze was rescinded when courts raised concerns.' }
    }
  ];

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
    <p style={{ color: '#9ca3af', margin: '0 0 24px' }}>26 executive orders across four administrations, scored against seven constitutional dimensions.</p>
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
      <p style={{ fontSize: '0.85rem', color: '#a5b4fc', lineHeight: 1.6, margin: '0 0 20px' }}>26 executive orders &times; 6 lenses &times; 7 dimensions = 1,092 individual scoring cells, each with score, relevance, and confidence values.</p>
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
