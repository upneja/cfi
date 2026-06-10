// Constitutional Fidelity Index - Case Law Fidelity Tagging

import type { LensKey } from './constants';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type CaseStatus = 'affirmed' | 'modified' | 'reversed' | 'superseded';
export type FidelityTag = 'reliable' | 'contested' | 'reversed';

export interface CaseLawEntry {
  id: string;
  name: string;
  citation: string;
  year: number;
  status: CaseStatus;
  reversingCase?: string;
  era: string;
  fidelityTag: FidelityTag;
  doctrinalArea: string;
  relevantDimensions: string[];
  notes?: string;
}

// ---------------------------------------------------------------------------
// SCOTUS Case Database
// ---------------------------------------------------------------------------

export const CASE_DATABASE: CaseLawEntry[] = [
  // --- Separation of Powers & Executive Authority ---
  {
    id: 'youngstown',
    name: 'Youngstown Sheet & Tube Co. v. Sawyer',
    citation: '343 U.S. 579 (1952)',
    year: 1952,
    status: 'affirmed',
    era: 'Warren',
    fidelityTag: 'reliable',
    doctrinalArea: 'Separation of Powers',
    relevantDimensions: ['SP', 'D'],
    notes: 'Jackson concurrence framework for presidential power zones.',
  },
  {
    id: 'heckler-chaney',
    name: 'Heckler v. Chaney',
    citation: '470 U.S. 821 (1985)',
    year: 1985,
    status: 'affirmed',
    era: 'Burger',
    fidelityTag: 'reliable',
    doctrinalArea: 'Prosecutorial Discretion',
    relevantDimensions: ['SP'],
    notes: 'Agency non-enforcement decisions presumptively unreviewable.',
  },
  {
    id: 'morrison-olson',
    name: 'Morrison v. Olson',
    citation: '487 U.S. 654 (1988)',
    year: 1988,
    status: 'affirmed',
    era: 'Rehnquist',
    fidelityTag: 'contested',
    doctrinalArea: 'Separation of Powers',
    relevantDimensions: ['SP'],
    notes: 'Upheld independent counsel. Increasingly questioned by unitary executive proponents.',
  },
  {
    id: 'buckley-valeo',
    name: 'Buckley v. Valeo',
    citation: '424 U.S. 1 (1976)',
    year: 1976,
    status: 'affirmed',
    era: 'Burger',
    fidelityTag: 'reliable',
    doctrinalArea: 'Appointments Clause',
    relevantDimensions: ['SP', 'D'],
  },
  {
    id: 'lucia-sec',
    name: 'Lucia v. SEC',
    citation: '585 U.S. 237 (2018)',
    year: 2018,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Appointments Clause',
    relevantDimensions: ['SP'],
  },
  {
    id: 'humphreys-executor',
    name: "Humphrey's Executor v. United States",
    citation: '295 U.S. 602 (1935)',
    year: 1935,
    status: 'modified',
    era: 'Hughes',
    fidelityTag: 'contested',
    doctrinalArea: 'Independent Agencies',
    relevantDimensions: ['SP'],
    notes: 'Limits on removal power. Narrowed by Seila Law (2020).',
  },
  {
    id: 'goldwater-carter',
    name: 'Goldwater v. Carter',
    citation: '444 U.S. 996 (1979)',
    year: 1979,
    status: 'affirmed',
    era: 'Burger',
    fidelityTag: 'contested',
    doctrinalArea: 'Treaty Power',
    relevantDimensions: ['SP', 'N'],
    notes: 'Dismissed without reaching merits; treaty termination power unsettled.',
  },
  {
    id: 'train-new-york',
    name: 'Train v. City of New York',
    citation: '420 U.S. 35 (1975)',
    year: 1975,
    status: 'affirmed',
    era: 'Burger',
    fidelityTag: 'reliable',
    doctrinalArea: 'Appropriations Power',
    relevantDimensions: ['SP', 'D'],
  },
  {
    id: 'kendall-us',
    name: 'Kendall v. United States',
    citation: '37 U.S. 524 (1838)',
    year: 1838,
    status: 'affirmed',
    era: 'Taney',
    fidelityTag: 'reliable',
    doctrinalArea: 'Executive Duty',
    relevantDimensions: ['SP'],
  },
  {
    id: 'zivotofsky-kerry',
    name: 'Zivotofsky v. Kerry',
    citation: '576 U.S. 1 (2015)',
    year: 2015,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Recognition Power',
    relevantDimensions: ['SP', 'N'],
  },
  {
    id: 'dames-moore-regan',
    name: 'Dames & Moore v. Regan',
    citation: '453 U.S. 654 (1981)',
    year: 1981,
    status: 'affirmed',
    era: 'Burger',
    fidelityTag: 'reliable',
    doctrinalArea: 'Executive Agreements',
    relevantDimensions: ['SP', 'N'],
  },

  // --- Administrative Law & Agency Authority ---
  {
    id: 'west-virginia-epa',
    name: 'West Virginia v. EPA',
    citation: '597 U.S. 697 (2022)',
    year: 2022,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Major Questions Doctrine',
    relevantDimensions: ['SP', 'D'],
    notes: 'Formalized major questions doctrine; clear congressional authorization required.',
  },
  {
    id: 'state-farm',
    name: 'Motor Vehicle Mfrs. Assn. v. State Farm',
    citation: '463 U.S. 29 (1983)',
    year: 1983,
    status: 'affirmed',
    era: 'Burger',
    fidelityTag: 'reliable',
    doctrinalArea: 'Arbitrary & Capricious Review',
    relevantDimensions: ['SP', 'DP'],
  },
  {
    id: 'massachusetts-epa',
    name: 'Massachusetts v. EPA',
    citation: '549 U.S. 497 (2007)',
    year: 2007,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Agency Authority',
    relevantDimensions: ['SP', 'W'],
  },
  {
    id: 'fcc-fox',
    name: 'FCC v. Fox Television Stations',
    citation: '556 U.S. 502 (2009)',
    year: 2009,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Agency Policy Changes',
    relevantDimensions: ['SP'],
  },
  {
    id: 'dept-commerce-ny',
    name: 'Department of Commerce v. New York',
    citation: '588 U.S. 752 (2019)',
    year: 2019,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Pretextual Agency Action',
    relevantDimensions: ['SP', 'E', 'DP'],
  },
  {
    id: 'rapanos',
    name: 'Rapanos v. United States',
    citation: '547 U.S. 715 (2006)',
    year: 2006,
    status: 'superseded',
    reversingCase: 'Sackett v. EPA (2023)',
    era: 'Roberts',
    fidelityTag: 'reversed',
    doctrinalArea: 'Clean Water Act Scope',
    relevantDimensions: ['SP', 'W'],
    notes: "Kennedy's significant nexus test superseded by Sackett.",
  },
  {
    id: 'sackett-epa',
    name: 'Sackett v. EPA',
    citation: '598 U.S. 651 (2023)',
    year: 2023,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Clean Water Act Scope',
    relevantDimensions: ['SP', 'W'],
  },
  {
    id: 'jw-hampton',
    name: 'J.W. Hampton Jr. & Co. v. United States',
    citation: '276 U.S. 394 (1928)',
    year: 1928,
    status: 'affirmed',
    era: 'Taft',
    fidelityTag: 'contested',
    doctrinalArea: 'Non-Delegation Doctrine',
    relevantDimensions: ['SP', 'D'],
    notes: 'Intelligible principle test. Revival of non-delegation concerns may modify.',
  },
  {
    id: 'biden-nebraska',
    name: 'Biden v. Nebraska',
    citation: '600 U.S. 477 (2023)',
    year: 2023,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Major Questions Doctrine',
    relevantDimensions: ['SP', 'D', 'W'],
  },

  // --- Immigration ---
  {
    id: 'trump-hawaii',
    name: 'Trump v. Hawaii',
    citation: '585 U.S. 667 (2018)',
    year: 2018,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Immigration / Plenary Power',
    relevantDimensions: ['R', 'E', 'N'],
  },
  {
    id: 'kleindienst-mandel',
    name: 'Kleindienst v. Mandel',
    citation: '408 U.S. 753 (1972)',
    year: 1972,
    status: 'affirmed',
    era: 'Burger',
    fidelityTag: 'reliable',
    doctrinalArea: 'Immigration / Plenary Power',
    relevantDimensions: ['N', 'R'],
  },
  {
    id: 'wong-kim-ark',
    name: 'United States v. Wong Kim Ark',
    citation: '169 U.S. 649 (1898)',
    year: 1898,
    status: 'affirmed',
    era: 'Fuller',
    fidelityTag: 'reliable',
    doctrinalArea: 'Birthright Citizenship',
    relevantDimensions: ['E', 'R'],
    notes: 'Foundational 14th Amendment citizenship case. 125+ years of precedent.',
  },
  {
    id: 'texas-us',
    name: 'Texas v. United States',
    citation: '809 F.3d 134 (5th Cir. 2015)',
    year: 2015,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Immigration Enforcement',
    relevantDimensions: ['SP', 'E'],
    notes: 'Blocked DAPA; Fifth Circuit ruling.',
  },
  {
    id: 'zadvydas-davis',
    name: 'Zadvydas v. Davis',
    citation: '533 U.S. 678 (2001)',
    year: 2001,
    status: 'affirmed',
    era: 'Rehnquist',
    fidelityTag: 'reliable',
    doctrinalArea: 'Immigration Detention',
    relevantDimensions: ['DP', 'R'],
  },
  {
    id: 'ins-cardoza-fonseca',
    name: 'INS v. Cardoza-Fonseca',
    citation: '480 U.S. 421 (1987)',
    year: 1987,
    status: 'affirmed',
    era: 'Rehnquist',
    fidelityTag: 'reliable',
    doctrinalArea: 'Refugee Law',
    relevantDimensions: ['R', 'DP', 'N'],
  },
  {
    id: 'plyler-doe',
    name: 'Plyler v. Doe',
    citation: '457 U.S. 202 (1982)',
    year: 1982,
    status: 'affirmed',
    era: 'Burger',
    fidelityTag: 'reliable',
    doctrinalArea: 'Equal Protection / Immigration',
    relevantDimensions: ['E', 'W'],
  },

  // --- Due Process & Detention ---
  {
    id: 'hamdi-rumsfeld',
    name: 'Hamdi v. Rumsfeld',
    citation: '542 U.S. 507 (2004)',
    year: 2004,
    status: 'affirmed',
    era: 'Rehnquist',
    fidelityTag: 'reliable',
    doctrinalArea: 'Due Process / Detention',
    relevantDimensions: ['DP', 'R', 'SP'],
  },
  {
    id: 'boumediene-bush',
    name: 'Boumediene v. Bush',
    citation: '553 U.S. 723 (2008)',
    year: 2008,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Habeas / Detention',
    relevantDimensions: ['DP', 'R'],
  },
  {
    id: 'hamdan-rumsfeld',
    name: 'Hamdan v. Rumsfeld',
    citation: '548 U.S. 557 (2006)',
    year: 2006,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Military Commissions',
    relevantDimensions: ['DP', 'SP'],
  },
  {
    id: 'mathews-eldridge',
    name: 'Mathews v. Eldridge',
    citation: '424 U.S. 319 (1976)',
    year: 1976,
    status: 'affirmed',
    era: 'Burger',
    fidelityTag: 'reliable',
    doctrinalArea: 'Procedural Due Process',
    relevantDimensions: ['DP'],
  },
  {
    id: 'loudermill',
    name: 'Cleveland Board of Education v. Loudermill',
    citation: '470 U.S. 532 (1985)',
    year: 1985,
    status: 'affirmed',
    era: 'Burger',
    fidelityTag: 'reliable',
    doctrinalArea: 'Property Interest Due Process',
    relevantDimensions: ['DP'],
  },

  // --- Equal Protection & Civil Rights ---
  {
    id: 'bostock',
    name: 'Bostock v. Clayton County',
    citation: '590 U.S. 644 (2020)',
    year: 2020,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Sex Discrimination / Title VII',
    relevantDimensions: ['E', 'R'],
    notes: 'Title VII covers gender identity and sexual orientation.',
  },
  {
    id: 'grutter',
    name: 'Grutter v. Bollinger',
    citation: '539 U.S. 306 (2003)',
    year: 2003,
    status: 'reversed',
    reversingCase: 'Students for Fair Admissions v. Harvard (2023)',
    era: 'Rehnquist',
    fidelityTag: 'reversed',
    doctrinalArea: 'Affirmative Action',
    relevantDimensions: ['E'],
    notes: 'Upheld race-conscious admissions. Overruled by SFFA.',
  },
  {
    id: 'sffa-harvard',
    name: 'Students for Fair Admissions v. Harvard',
    citation: '600 U.S. 181 (2023)',
    year: 2023,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Race-Conscious Admissions',
    relevantDimensions: ['E'],
  },
  {
    id: 'rostker-goldberg',
    name: 'Rostker v. Goldberg',
    citation: '453 U.S. 57 (1981)',
    year: 1981,
    status: 'affirmed',
    era: 'Burger',
    fidelityTag: 'contested',
    doctrinalArea: 'Military Deference',
    relevantDimensions: ['E', 'SP'],
    notes: 'Military deference on personnel; potentially dated on gender issues.',
  },
  {
    id: 'naacp-alabama',
    name: 'NAACP v. Alabama',
    citation: '357 U.S. 449 (1958)',
    year: 1958,
    status: 'affirmed',
    era: 'Warren',
    fidelityTag: 'reliable',
    doctrinalArea: 'Freedom of Association',
    relevantDimensions: ['R'],
  },

  // --- Fourth Amendment & Privacy ---
  {
    id: 'smith-maryland',
    name: 'Smith v. Maryland',
    citation: '442 U.S. 735 (1979)',
    year: 1979,
    status: 'modified',
    era: 'Burger',
    fidelityTag: 'contested',
    doctrinalArea: 'Third-Party Doctrine',
    relevantDimensions: ['R', 'DP'],
    notes: 'Third-party doctrine questioned by Carpenter v. United States (2018).',
  },
  {
    id: 'katz',
    name: 'Katz v. United States',
    citation: '389 U.S. 347 (1967)',
    year: 1967,
    status: 'affirmed',
    era: 'Warren',
    fidelityTag: 'reliable',
    doctrinalArea: 'Reasonable Expectation of Privacy',
    relevantDimensions: ['R', 'DP'],
  },

  // --- Second Amendment ---
  {
    id: 'heller',
    name: 'District of Columbia v. Heller',
    citation: '554 U.S. 570 (2008)',
    year: 2008,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Second Amendment',
    relevantDimensions: ['R'],
  },
  {
    id: 'mcdonald',
    name: 'McDonald v. Chicago',
    citation: '561 U.S. 742 (2010)',
    year: 2010,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Second Amendment Incorporation',
    relevantDimensions: ['R'],
  },

  // --- Federalism & Spending Power ---
  {
    id: 'printz',
    name: 'Printz v. United States',
    citation: '521 U.S. 898 (1997)',
    year: 1997,
    status: 'affirmed',
    era: 'Rehnquist',
    fidelityTag: 'reliable',
    doctrinalArea: 'Anti-Commandeering',
    relevantDimensions: ['SP', 'D'],
  },
  {
    id: 'new-york-us',
    name: 'New York v. United States',
    citation: '505 U.S. 144 (1992)',
    year: 1992,
    status: 'affirmed',
    era: 'Rehnquist',
    fidelityTag: 'reliable',
    doctrinalArea: 'Anti-Commandeering',
    relevantDimensions: ['SP', 'D'],
  },
  {
    id: 'nfib-sebelius',
    name: 'NFIB v. Sebelius',
    citation: '567 U.S. 519 (2012)',
    year: 2012,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Spending Clause / Coercion',
    relevantDimensions: ['SP', 'W'],
  },
  {
    id: 'south-dakota-dole',
    name: 'South Dakota v. Dole',
    citation: '483 U.S. 203 (1987)',
    year: 1987,
    status: 'affirmed',
    era: 'Rehnquist',
    fidelityTag: 'reliable',
    doctrinalArea: 'Spending Conditions',
    relevantDimensions: ['SP', 'D'],
  },

  // --- Religious Liberty ---
  {
    id: 'fulton',
    name: 'Fulton v. City of Philadelphia',
    citation: '593 U.S. 522 (2021)',
    year: 2021,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Free Exercise',
    relevantDimensions: ['R', 'E'],
  },
  {
    id: 'kennedy-bremerton',
    name: 'Kennedy v. Bremerton School District',
    citation: '597 U.S. 507 (2022)',
    year: 2022,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Free Exercise / Establishment',
    relevantDimensions: ['R'],
    notes: 'Effectively replaced Lemon test with historical practices test.',
  },
  {
    id: 'lemon',
    name: 'Lemon v. Kurtzman',
    citation: '403 U.S. 602 (1971)',
    year: 1971,
    status: 'superseded',
    reversingCase: 'Kennedy v. Bremerton School District (2022)',
    era: 'Burger',
    fidelityTag: 'reversed',
    doctrinalArea: 'Establishment Clause',
    relevantDimensions: ['R'],
    notes: 'Three-part test effectively abandoned by Kennedy v. Bremerton.',
  },
  {
    id: 'carson-makin',
    name: 'Carson v. Makin',
    citation: '596 U.S. 767 (2022)',
    year: 2022,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'School Choice / Free Exercise',
    relevantDimensions: ['R', 'W'],
  },
  {
    id: 'espinoza-montana',
    name: 'Espinoza v. Montana',
    citation: '591 U.S. 464 (2020)',
    year: 2020,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'School Choice / Free Exercise',
    relevantDimensions: ['R', 'W'],
  },
  {
    id: 'larson-valente',
    name: 'Larson v. Valente',
    citation: '456 U.S. 228 (1982)',
    year: 1982,
    status: 'affirmed',
    era: 'Burger',
    fidelityTag: 'reliable',
    doctrinalArea: 'Establishment Clause',
    relevantDimensions: ['R', 'E'],
  },

  // --- Public Health ---
  {
    id: 'jacobson',
    name: 'Jacobson v. Massachusetts',
    citation: '197 U.S. 11 (1905)',
    year: 1905,
    status: 'affirmed',
    era: 'Fuller',
    fidelityTag: 'reliable',
    doctrinalArea: 'Public Health / Police Power',
    relevantDimensions: ['R', 'W'],
  },

  // --- Clemency ---
  {
    id: 'schick-reed',
    name: 'Schick v. Reed',
    citation: '419 U.S. 256 (1974)',
    year: 1974,
    status: 'affirmed',
    era: 'Burger',
    fidelityTag: 'reliable',
    doctrinalArea: 'Pardon Power',
    relevantDimensions: ['SP'],
  },
  {
    id: 'ex-parte-garland',
    name: 'Ex parte Garland',
    citation: '71 U.S. 333 (1866)',
    year: 1866,
    status: 'affirmed',
    era: 'Chase',
    fidelityTag: 'reliable',
    doctrinalArea: 'Pardon Power',
    relevantDimensions: ['SP', 'DP'],
  },

  // --- Bill of Attainder / Due Process ---
  {
    id: 'lovett',
    name: 'United States v. Lovett',
    citation: '328 U.S. 303 (1946)',
    year: 1946,
    status: 'affirmed',
    era: 'Stone',
    fidelityTag: 'reliable',
    doctrinalArea: 'Bill of Attainder',
    relevantDimensions: ['DP', 'R'],
  },

  // --- First Amendment ---
  {
    id: 'murthy-missouri',
    name: 'Murthy v. Missouri',
    citation: '144 S. Ct. 1972 (2024)',
    year: 2024,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'contested',
    doctrinalArea: 'Government Speech / Jawboning',
    relevantDimensions: ['R', 'D'],
    notes: 'Resolved on standing; substantive jawboning doctrine unsettled.',
  },
  {
    id: 'holder-hlp',
    name: 'Holder v. Humanitarian Law Project',
    citation: '561 U.S. 1 (2010)',
    year: 2010,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Material Support / Speech',
    relevantDimensions: ['R', 'DP'],
  },
  {
    id: 'keyishian',
    name: 'Keyishian v. Board of Regents',
    citation: '385 U.S. 589 (1967)',
    year: 1967,
    status: 'affirmed',
    era: 'Warren',
    fidelityTag: 'reliable',
    doctrinalArea: 'Academic Freedom',
    relevantDimensions: ['R'],
  },
  {
    id: 'rosenberger',
    name: 'Rosenberger v. University of Virginia',
    citation: '515 U.S. 819 (1995)',
    year: 1995,
    status: 'affirmed',
    era: 'Rehnquist',
    fidelityTag: 'reliable',
    doctrinalArea: 'Viewpoint Discrimination',
    relevantDimensions: ['R'],
  },
  {
    id: 'hartman-moore',
    name: 'Hartman v. Moore',
    citation: '547 U.S. 250 (2006)',
    year: 2006,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Retaliatory Prosecution',
    relevantDimensions: ['R', 'DP'],
  },

  // --- Civil Service ---
  {
    id: 'elrod-burns',
    name: 'Elrod v. Burns',
    citation: '427 U.S. 347 (1976)',
    year: 1976,
    status: 'affirmed',
    era: 'Burger',
    fidelityTag: 'reliable',
    doctrinalArea: 'Political Patronage',
    relevantDimensions: ['R', 'SP'],
  },
  {
    id: 'branti-finkel',
    name: 'Branti v. Finkel',
    citation: '445 U.S. 507 (1980)',
    year: 1980,
    status: 'affirmed',
    era: 'Burger',
    fidelityTag: 'reliable',
    doctrinalArea: 'Political Patronage',
    relevantDimensions: ['R', 'SP'],
  },
  {
    id: 'rutan',
    name: 'Rutan v. Republican Party',
    citation: '497 U.S. 62 (1990)',
    year: 1990,
    status: 'affirmed',
    era: 'Rehnquist',
    fidelityTag: 'reliable',
    doctrinalArea: 'Employment Conditions',
    relevantDimensions: ['R', 'SP'],
  },

  // --- Reproductive Rights ---
  {
    id: 'dobbs',
    name: 'Dobbs v. Jackson Women\'s Health Organization',
    citation: '597 U.S. 215 (2022)',
    year: 2022,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Reproductive Rights',
    relevantDimensions: ['R', 'DP'],
    notes: 'Overruled Roe v. Wade and Planned Parenthood v. Casey.',
  },
  {
    id: 'harris-mcrae',
    name: 'Harris v. McRae',
    citation: '448 U.S. 297 (1980)',
    year: 1980,
    status: 'affirmed',
    era: 'Burger',
    fidelityTag: 'reliable',
    doctrinalArea: 'Funding / Reproductive Rights',
    relevantDimensions: ['R', 'W'],
  },
  {
    id: 'saenz-roe',
    name: 'Saenz v. Roe',
    citation: '526 U.S. 489 (1999)',
    year: 1999,
    status: 'affirmed',
    era: 'Rehnquist',
    fidelityTag: 'reliable',
    doctrinalArea: 'Right to Travel',
    relevantDimensions: ['R'],
  },

  // --- Death Penalty ---
  {
    id: 'gregg-georgia',
    name: 'Gregg v. Georgia',
    citation: '428 U.S. 153 (1976)',
    year: 1976,
    status: 'affirmed',
    era: 'Burger',
    fidelityTag: 'reliable',
    doctrinalArea: 'Death Penalty',
    relevantDimensions: ['R', 'DP'],
  },
  {
    id: 'mccleskey-kemp',
    name: 'McCleskey v. Kemp',
    citation: '481 U.S. 279 (1987)',
    year: 1987,
    status: 'affirmed',
    era: 'Rehnquist',
    fidelityTag: 'contested',
    doctrinalArea: 'Death Penalty / Racial Bias',
    relevantDimensions: ['E', 'DP'],
    notes: 'Widely criticized for refusing to address statistical racial disparities.',
  },

  // --- Education ---
  {
    id: 'pierce',
    name: 'Pierce v. Society of Sisters',
    citation: '268 U.S. 510 (1925)',
    year: 1925,
    status: 'affirmed',
    era: 'Taft',
    fidelityTag: 'reliable',
    doctrinalArea: 'Parental Rights / Education',
    relevantDimensions: ['R'],
  },
  {
    id: 'troxel-granville',
    name: 'Troxel v. Granville',
    citation: '530 U.S. 57 (2000)',
    year: 2000,
    status: 'affirmed',
    era: 'Rehnquist',
    fidelityTag: 'reliable',
    doctrinalArea: 'Parental Rights',
    relevantDimensions: ['R', 'DP'],
  },

  // --- Flores Settlement ---
  {
    id: 'reno-flores',
    name: 'Reno v. Flores',
    citation: '507 U.S. 292 (1993)',
    year: 1993,
    status: 'affirmed',
    era: 'Rehnquist',
    fidelityTag: 'reliable',
    doctrinalArea: 'Immigration Detention of Minors',
    relevantDimensions: ['DP', 'R'],
  },

  // --- Other ---
  {
    id: 'lau-nichols',
    name: 'Lau v. Nichols',
    citation: '414 U.S. 563 (1974)',
    year: 1974,
    status: 'affirmed',
    era: 'Burger',
    fidelityTag: 'reliable',
    doctrinalArea: 'Language Discrimination',
    relevantDimensions: ['E', 'R'],
  },
  {
    id: 'padilla-kentucky',
    name: 'Padilla v. Kentucky',
    citation: '559 U.S. 356 (2010)',
    year: 2010,
    status: 'affirmed',
    era: 'Roberts',
    fidelityTag: 'reliable',
    doctrinalArea: 'Right to Counsel / Immigration',
    relevantDimensions: ['DP', 'R'],
  },
];

// Build a lookup index by case name fragments for efficient matching
const _caseIndex = new Map<string, CaseLawEntry>();
for (const entry of CASE_DATABASE) {
  // Index by full name and common short forms
  _caseIndex.set(entry.name.toLowerCase(), entry);

  // Also index by the "X v. Y" core pattern
  const match = entry.name.match(/^(.+?)\s+v\.\s+(.+?)$/);
  if (match) {
    _caseIndex.set(entry.name.toLowerCase(), entry);
  }
}

/**
 * Scan narrative text for case citations and return matching case law entries.
 * Returns entries with warnings for reversed/contested cases.
 */
export function getCitedCases(
  narratives: Record<string, string>,
): CaseLawEntry[] {
  const found = new Set<string>();
  const results: CaseLawEntry[] = [];

  // Combine all narrative text
  const allText = Object.values(narratives).join(' ');

  for (const entry of CASE_DATABASE) {
    if (found.has(entry.id)) continue;

    // Check if the case name appears in the narratives
    // Use the " v. " pattern to match case citations
    const nameToSearch = entry.name;

    // Try full name first
    if (allText.includes(nameToSearch)) {
      found.add(entry.id);
      results.push(entry);
      continue;
    }

    // Try shortened forms (e.g. "Heckler v. Chaney" from full name)
    const vMatch = nameToSearch.match(/^(.+?)\s+v\.\s+(.+?)$/);
    if (vMatch) {
      // Try "LastName v. LastName" pattern (common in legal writing)
      const shortForm = `${vMatch[1].split(' ').pop()} v. ${vMatch[2].split(' ').pop()}`;
      if (allText.includes(shortForm) || allText.includes(nameToSearch)) {
        found.add(entry.id);
        results.push(entry);
        continue;
      }
    }
  }

  // Sort by year (oldest first)
  results.sort((a, b) => a.year - b.year);

  return results;
}
