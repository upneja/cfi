export const symmetryPairs = {
  "description": "Partisan Symmetry Test Suite for the Constitutional Fidelity Index",
  "version": "1.0",
  "methodology": "Each pair contains analogous actions from different parties that implicate the same constitutional principles. If the CFI consistently scores one party higher than the other on analogous actions, it indicates systemic bias. Score differences should reflect legitimate constitutional distinctions (e.g., severity, directness of conflict with constitutional text), not partisan preferences.",
  "pairs": [
    {
      "id": 1,
      "principle": "Executive overreach on immigration",
      "dem": {
        "action": "DACA (Obama, 2012)",
        "description": "Deferred Action for Childhood Arrivals; directed DHS to exercise prosecutorial discretion, deferring deportation for ~800k undocumented immigrants who arrived as minors"
      },
      "gop": {
        "action": "Birthright Citizenship EO (Trump, 2025)",
        "description": "Executive order attempting to redefine citizenship requirements for children born to non-citizen parents, contradicting 14th Amendment text"
      },
      "expected_similar_dimensions": ["SP", "RL"],
      "notes": "DACA uses prosecutorial discretion (narrower); birthright directly contradicts Amendment text (more severe). Legitimate score difference expected, but both implicate separation of powers and equal protection."
    },
    {
      "id": 2,
      "principle": "Emergency powers and statutory authority",
      "dem": {
        "action": "COVID Emergency Powers (Trump/Biden, 2020-2021)",
        "description": "Invocation of National Emergencies Act and other statutory authorities to bypass Congressional appropriations for pandemic response"
      },
      "gop": {
        "action": "Border Wall Emergency (Trump, 2019)",
        "description": "Declared national emergency to reprogram military construction funds for border wall without appropriation"
      },
      "expected_similar_dimensions": ["SP", "AR"],
      "notes": "Both use statutory emergency powers to bypass appropriations. COVID arguably had stronger factual basis for emergency; wall was more transparently political. Both implicate Appropriations Clause."
    },
    {
      "id": 3,
      "principle": "Independent agency authority challenges",
      "dem": {
        "action": "Clean Power Plan (EPA, 2015)",
        "description": "EPA regulations treating CO2 as air pollutant under CAA, dramatically expanding agency authority over power generation"
      },
      "gop": {
        "action": "Office of Government Efficiency (Trump, 2025)",
        "description": "Attempt to create advisory body outside statutory framework with broad authority to audit and restructure federal agencies"
      },
      "expected_similar_dimensions": ["AR"],
      "notes": "Clean Power Plan worked within CAA structure but stretched statutory interpretation; DOGE creates authority with no statutory basis. Clean Power Plan shows broader agency scope expansion; DOGE shows lack of legal foundation."
    },
    {
      "id": 4,
      "principle": "Spending authority and appropriations control",
      "dem": {
        "action": "Student Loan Forgiveness (Biden, 2022)",
        "description": "Executive order directing Department of Education to forgive up to $20k in federal student loan debt without Congressional authorization, impacting $340+ billion in spending"
      },
      "gop": {
        "action": "Tariff Authority (Trump, 2025)",
        "description": "Invocation of International Emergency Economic Powers Act to impose tariffs, claiming revenue authority not explicitly granted in statute"
      },
      "expected_similar_dimensions": ["SP", "AR"],
      "notes": "Student loans repurposed existing agency authority under HEROES Act; tariffs use emergency statute for non-emergency purpose. Loan forgiveness larger dollar impact; tariffs more directly contradict statutory intent."
    },
    {
      "id": 5,
      "principle": "Mass surveillance and civil liberties",
      "dem": {
        "action": "NSA Bulk Metadata Collection (Obama, 2009-2013)",
        "description": "Continued and expanded NSA bulk collection of phone records and internet metadata under Article II and FISA Section 215"
      },
      "gop": {
        "action": "Immigration Enforcement ICE Raids (Trump, 2017-2020)",
        "description": "Expanded ICE workplace and community raids targeting undocumented immigrants, raising Fourth Amendment concerns"
      },
      "expected_similar_dimensions": ["CL", "EP"],
      "notes": "Both involve mass law enforcement action affecting large populations. NSA metadata affects all citizens; ICE targets specific group. Both raise Fourth Amendment and due process concerns."
    },
    {
      "id": 6,
      "principle": "Public health versus religious liberty",
      "dem": {
        "action": "COVID Vaccine Mandates (Biden, 2021)",
        "description": "OSHA emergency temporary standard mandating vaccination or testing for private employers with 100+ employees"
      },
      "gop": {
        "action": "Travel Ban 2.0 (Trump, 2017)",
        "description": "Executive order restricting travel from majority-Muslim countries, justified as national security despite religious effect"
      },
      "expected_similar_dimensions": ["RL", "EP"],
      "notes": "Vaccine mandate targets conduct (vaccination status) affecting religious minority; travel ban targets religion/national origin directly. Both implicate religious liberty and equal protection differently."
    },
    {
      "id": 7,
      "principle": "Racial equity and affirmative action",
      "dem": {
        "action": "Affirmative Action Guidance (Obama, 2011)",
        "description": "DOJ/Education guidance encouraging universities to consider race in admissions to promote diversity and address past discrimination"
      },
      "gop": {
        "action": "DEI Elimination (Trump, 2025)",
        "description": "Executive order eliminating Diversity, Equity, and Inclusion programs across federal government and contractors"
      },
      "expected_similar_dimensions": ["EP"],
      "notes": "Both use equal protection differently—one promoting consideration of race, one eliminating race-conscious programs. Legitimate disagreement over constitutional approach; scores may differ but should reflect EP complexity."
    },
    {
      "id": 8,
      "principle": "Military personnel and constitutional rights",
      "dem": {
        "action": "Open Transgender Service (Obama, 2016)",
        "description": "Directive ending ban on transgender military service and requiring accommodation of transgender personnel"
      },
      "gop": {
        "action": "Transgender Military Ban (Trump, 2017-2020)",
        "description": "Executive order and policy reinstating ban on transgender service in military"
      },
      "expected_similar_dimensions": ["EP", "DPC"],
      "notes": "Both restrict constitutional rights of military personnel. Open service expands rights; ban restricts them. Both justified by military readiness concerns versus equal protection/due process."
    },
    {
      "id": 9,
      "principle": "Clemency and executive power abuse",
      "dem": {
        "action": "Mass Commutations (Obama, final year)",
        "description": "Commutation of 1,715 federal drug offense sentences, mostly nonviolent, in final 12 months of presidency"
      },
      "gop": {
        "action": "January 6 Pardons (Trump, 2025)",
        "description": "Mass pardons and commutations of January 6 Capitol riot participants, including those convicted of violent felonies"
      },
      "expected_similar_dimensions": ["EP"],
      "notes": "Both use clemency authority broadly. Obama's targeted nonviolent offenders where he deemed sentences unjust; Trump's covered violent offenses and apparent personal/political allies. Legitimate authority but different patterns of use."
    },
    {
      "id": 10,
      "principle": "Executive agreements and treaty power",
      "dem": {
        "action": "Paris Climate Agreement (Obama, 2016)",
        "description": "Executive entry into Paris Climate Agreement without Senate ratification, claiming existing authority under UN Framework Convention"
      },
      "gop": {
        "action": "Paris Withdrawal (Trump, 2017)",
        "description": "Executive withdrawal from Paris Agreement using similar authority arguments"
      },
      "expected_similar_dimensions": ["SP"],
      "notes": "Both parties used unilateral executive action on international commitments. Entry required creative statutory interpretation; withdrawal followed statutory process. Both implicate treaty power questions."
    },
    {
      "id": 11,
      "principle": "Agency guidance and regulatory authority",
      "dem": {
        "action": "Title IX Sexual Orientation Guidance (Biden, 2021)",
        "description": "ED and DOJ guidance interpreting Title IX to prohibit discrimination based on sexual orientation and gender identity"
      },
      "gop": {
        "action": "Title IX Sexual Orientation Rollback (Trump, 2017)",
        "description": "Withdrawal of guidance interpreting Title IX to protect LGBTQ students"
      },
      "expected_similar_dimensions": ["AR", "EP"],
      "notes": "Both use agency interpretation authority to expand/contract statutory meaning. Biden's interpretation stretches 'sex' discrimination language; Trump's narrower reading arguably more textual. Both implicate Chevron deference questions."
    },
    {
      "id": 12,
      "principle": "Environmental regulation scope",
      "dem": {
        "action": "Waters of the US Expansion (EPA, 2015)",
        "description": "EPA broadening definition of 'waters of the United States' under Clean Water Act to include smaller wetlands and tributaries"
      },
      "gop": {
        "action": "Waters of the US Contraction (Trump, 2020)",
        "description": "EPA narrowing definition of jurisdictional waters, reducing regulatory scope"
      },
      "expected_similar_dimensions": ["AR"],
      "notes": "Both involve same statutory interpretation in opposite directions. Pendulum swings implicate Chevron deference and agency power stability. Neither party consistent across administrations."
    },
    {
      "id": 13,
      "principle": "Labor union authority and worker organizing",
      "dem": {
        "action": "Ambush Elections Rule (NLRB, 2015)",
        "description": "NLRB rule shortening timeline for union elections, restricting employer's opportunity to present anti-union arguments"
      },
      "gop": {
        "action": "Ambush Elections Reversal (NLRB, 2017-2020)",
        "description": "NLRB reversal extending timeline and employer argument opportunity"
      },
      "expected_similar_dimensions": ["AR", "CL"],
      "notes": "Both swing regulatory pendulum on fundamental labor rights. Democrat version restricts speech opportunity; Republican version expands it but restricts organizing speed. Both implicate First Amendment and agency authority."
    },
    {
      "id": 14,
      "principle": "Recess appointments and Senate bypass",
      "dem": {
        "action": "NLRB Recess Appointments (Obama, 2012)",
        "description": "President declaring pro forma Senate sessions were not valid recesses, making recess appointments to NLRB and CFPB"
      },
      "gop": {
        "action": "Contested Recess Authority (Trump, 2017-2021)",
        "description": "Assertion of broad recess appointment authority under Article II, though more legally careful than Obama approach"
      },
      "expected_similar_dimensions": ["SP"],
      "notes": "Both test limits of recess appointment power and Senate confirmation bypass. Obama's approach more aggressively circumvented Senate; both implicate separation of powers and presidential power."
    },
    {
      "id": 15,
      "principle": "Detention and due process",
      "dem": {
        "action": "Detainee Treatment (Obama, 2009)",
        "description": "Executive order closing Guantanamo Bay (though Congress blocked transfer), establishing interrogation limits, but continuing indefinite detention framework"
      },
      "gop": {
        "action": "Detention Expansion (Trump, 2017-2020)",
        "description": "Increased immigration detention, military detention expansion, executive detention authority without clear congressional basis"
      },
      "expected_similar_dimensions": ["DPC", "CL"],
      "notes": "Both involve executive detention decisions. Obama limited interrogation but maintained framework; Trump expanded detention broadly. Both implicate Fifth Amendment due process and Article I suspension clause."
    },
    {
      "id": 16,
      "principle": "Intelligence gathering and warrantless surveillance",
      "dem": {
        "action": "PRISM Continuation (Obama, 2009-2016)",
        "description": "Continuation and expansion of NSA Section 702 surveillance of digital communications, collecting content without individualized warrants"
      },
      "gop": {
        "action": "Intelligence Expansion (Trump, 2017-2020)",
        "description": "Expansion of intelligence gathering and surveillance capabilities under Article II authority"
      },
      "expected_similar_dimensions": ["CL", "AR"],
      "notes": "Both continue/expand warrantless surveillance. Obama maintained existing framework; Trump sought expansion. Both raise Fourth Amendment concerns. Continuity across parties suggests structural constitutional issue."
    },
    {
      "id": 17,
      "principle": "Prosecutorial discretion and enforcement priorities",
      "dem": {
        "action": "DOJ Marijuana Non-Enforcement (Obama, 2013)",
        "description": "DOJ memo directing prosecutors to de-prioritize marijuana prosecutions despite Schedule I status, effectively refusing to enforce federal law"
      },
      "gop": {
        "action": "DOJ Environmental Non-Enforcement (Trump, 2017-2020)",
        "description": "Reduced EPA enforcement of environmental statutes and reduced DOJ civil litigation on regulatory violations"
      },
      "expected_similar_dimensions": ["SP", "RL"],
      "notes": "Both involve executive refusal to enforce statutes Congress enacted. Marijuana reflects changing policy judgment; environmental reflects deregulation agenda. Both implicate Take Care Clause and prosecutorial discretion limits."
    },
    {
      "id": 18,
      "principle": "Political appointment and civil service bypass",
      "dem": {
        "action": "Political Appointees in Civil Service (Obama)",
        "description": "Expansion of political appointment slots through various mechanisms, reducing civil service positions"
      },
      "gop": {
        "action": "Schedule F and Civil Service Reclassification (Trump, 2020)",
        "description": "Attempted executive order reclassifying large swaths of civil service as at-will political appointees"
      },
      "expected_similar_dimensions": ["SP", "AR"],
      "notes": "Both attempt to increase political control of bureaucracy. Obama used existing appointment slots; Trump attempted structural reclassification without statutory authority. Trump's more directly conflicts with civil service law."
    },
    {
      "id": 19,
      "principle": "Regulatory review and scientific authority",
      "dem": {
        "action": "Climate Science Integration (Biden, 2021)",
        "description": "Elevation of climate science in federal decision-making, including requiring agencies to incorporate climate impacts in environmental reviews"
      },
      "gop": {
        "action": "Regulatory Cost-Benefit Reversal (Trump, 2017)",
        "description": "Executive order requiring deregulation to offset new regulations, de-prioritizing certain cost-benefit analysis categories"
      },
      "expected_similar_dimensions": ["AR"],
      "notes": "Both involve presidents directing agencies on methodology for decision-making. Biden prioritizes climate; Trump prioritizes economic costs. Both implicate regulatory authority and presidential guidance scope."
    },
    {
      "id": 20,
      "principle": "Sanctuary policy and federal-state conflict",
      "dem": {
        "action": "Sanctuary City Non-Enforcement (Obama, 2012-2016)",
        "description": "DOJ guidance limiting local law enforcement cooperation with ICE and restricting access to facilities, effectively protecting sanctuary jurisdictions"
      },
      "gop": {
        "action": "Sanctuary City Funding Threats (Trump, 2017-2020)",
        "description": "Threats and attempts to condition federal funding on local law enforcement cooperation with immigration enforcement"
      },
      "expected_similar_dimensions": ["SP", "FS"],
      "notes": "Both involve executive authority over federal-state relations on immigration enforcement. Obama restricted federal cooperation; Trump attempted conditional spending to force state cooperation. Both raise federalism and spending power questions."
    },
    {
      "id": 21,
      "principle": "Whistleblower and leak prosecution",
      "dem": {
        "action": "Whistleblower Prosecutions (Obama, 2009-2016)",
        "description": "Aggressive prosecution of intelligence leaks under Espionage Act, resulting in 8 prosecutions—more than all previous administrations combined"
      },
      "gop": {
        "action": "Leak Prosecutions (Trump, 2017-2020)",
        "description": "Continued aggressive leak prosecution and expansion of classification authority"
      },
      "expected_similar_dimensions": ["CL", "SP"],
      "notes": "Both administrations increased leak prosecutions. Both raise First Amendment and separation of powers questions. Continuity suggests executive power growth across parties."
    },
    {
      "id": 22,
      "principle": "Agency rulemaking scope and major questions",
      "dem": {
        "action": "Occupational Safety and Health Standards (Biden, 2022)",
        "description": "OSHA emergency standard on vaccine/testing mandates affecting millions of workers, based on broad occupational safety authority"
      },
      "gop": {
        "action": "Environmental Authority Limit (Trump, 2020)",
        "description": "Attempts to limit EPA authority to regulate GHGs and water pollution, arguing major questions require Congressional specificity"
      },
      "expected_similar_dimensions": ["AR"],
      "notes": "Biden used broad authority for major economic impact; Trump argued same authority should be narrowly construed. Both implicate major questions doctrine and agency scope. Partisan pattern on doctrine application evident."
    },
    {
      "id": 23,
      "principle": "Trade authority and tariff power",
      "dem": {
        "action": "Steel/Aluminum Tariffs (Trump/Biden, 2018-2022)",
        "description": "Invocation of Section 232 national security authority to impose steel and aluminum tariffs, later expanded by Biden"
      },
      "gop": {
        "action": "Comprehensive Tariffs (Trump, 2025)",
        "description": "Threatened or implemented broad tariffs under similar national security and emergency commerce authority"
      },
      "expected_similar_dimensions": ["SP", "AR"],
      "notes": "Both administrations used national security statute for trade policy. Tariffs widened under each. Both implicate Article I commerce power and statutory delegation limits. Repeated use suggests statute enables executive overreach."
    },
    {
      "id": 24,
      "principle": "Foreign policy and executive agreement scope",
      "dem": {
        "action": "Iran Nuclear Deal (Obama, 2015)",
        "description": "Entry into JCPOA through executive agreement without Senate ratification, despite claims it constituted a treaty"
      },
      "gop": {
        "action": "Iran Nuclear Deal Withdrawal (Trump, 2018)",
        "description": "Unilateral withdrawal from JCPOA using presidential authority without Senate action"
      },
      "expected_similar_dimensions": ["SP"],
      "notes": "Both used unilateral executive action on major foreign policy. Obama claimed existing authority; Trump used same authority differently. Both raise treaty power questions and separation of powers."
    },
    {
      "id": 25,
      "principle": "Subpoena resistance and executive privilege scope",
      "dem": {
        "action": "Executive Privilege Assertions (Obama, 2009-2016)",
        "description": "Assertion of executive privilege to withhold information from Congress and courts on various matters, including Fast and Furious documents"
      },
      "gop": {
        "action": "Executive Privilege Expansion (Trump, 2017-2020)",
        "description": "Broad assertions of executive privilege and resistance to Congressional subpoenas and investigations"
      },
      "expected_similar_dimensions": ["SP"],
      "notes": "Both administrations asserted executive privilege and Congressional oversight limits. Trump's more direct resistance; Obama's more through formal claims. Both implicate separation of powers and congressional investigative authority."
    }
  ]
}
;
export const framingTests = {
  "description": "Framing Invariance Test Suite for the Constitutional Fidelity Index",
  "version": "1.0",
  "methodology": "Each government action is presented in three distinct framings: favorable (emphasizing benefits/intentions), unfavorable (emphasizing risks/criticisms), and neutral (factual description). The CFI's core constitutional scores should not vary significantly across framings. Score variation exceeding the threshold indicates the index is sensitive to framing rather than substantive constitutional analysis, revealing bias vectors. A robust constitutional assessment should yield consistent dimension scores regardless of rhetorical framing.",
  "threshold": 0.5,
  "tests": [
    {
      "id": 1,
      "action": "DACA (Deferred Action for Childhood Arrivals)",
      "administration": "Obama, 2012",
      "favorable": "Humanitarian protection program shielding 800,000 young Americans who were brought to this country as children through no fault of their own, allowing them to work, study, and contribute to their communities while the immigration system is reformed.",
      "unfavorable": "Unilateral executive amnesty that bypassed Congress and the democratic process, granting quasi-legal status to nearly a million illegal immigrants in defiance of federal law, incentivizing future illegal immigration and undermining the rule of law.",
      "neutral": "Executive memorandum directing DHS to exercise prosecutorial discretion by deferring deportation proceedings for certain undocumented immigrants who arrived in the US before age 16, have continuous residence, and no serious criminal convictions."
    },
    {
      "id": 2,
      "action": "Student Loan Forgiveness Program",
      "administration": "Biden, 2022",
      "favorable": "Historic relief for 43 million Americans burdened by student debt, restoring their ability to save for homes, start businesses, and participate fully in the economy, while directing attention to education affordability in future generations.",
      "unfavorable": "Wasteful transfer of $340 billion in taxpayer money to college-educated borrowers who borrowed money knowing repayment obligations, circumventing Congress through executive fiat and creating moral hazard for future borrowers.",
      "neutral": "Executive order directing the Department of Education to cancel up to $20,000 in federal student loan debt for individual borrowers meeting income thresholds, based on authority under the HEROES Act of 2003."
    },
    {
      "id": 3,
      "action": "COVID-19 Emergency Powers and Appropriations",
      "administration": "Trump/Biden, 2020-2021",
      "favorable": "Swift emergency response that mobilized resources during an unprecedented public health crisis, directing federal funding to testing, vaccines, and economic relief that saved lives and prevented economic collapse.",
      "unfavorable": "Unconstitutional expansion of executive power that bypassed Congressional appropriations authority, using vague emergency statutes to spend hundreds of billions without legislative oversight or accountability.",
      "neutral": "Invocation of the National Emergencies Act, STAFFORD Act, Defense Production Act, and other statutory authorities to reprogram existing appropriations and direct federal agencies to respond to the pandemic."
    },
    {
      "id": 4,
      "action": "Border Wall Emergency Declaration",
      "administration": "Trump, 2019",
      "favorable": "National security measure to secure the southern border against illegal immigration and drug trafficking, protecting American communities by constructing barriers in strategic locations.",
      "unfavorable": "Fraudulent emergency declaration that contradicted the President's own statements about a non-emergency, misappropriating military construction funds Congress allocated for bases and facilities, establishing a dangerous precedent for unilateral executive spending.",
      "neutral": "Invocation of the National Emergencies Act to declare a national emergency at the southern border and reprogram approximately $3.6 billion in military construction funds to border barrier construction."
    },
    {
      "id": 5,
      "action": "Clean Power Plan Regulations",
      "administration": "Obama EPA, 2015",
      "favorable": "Transformative environmental regulations addressing the existential threat of climate change by setting emissions standards that incentivize transition to clean energy and protect future generations from climate catastrophe.",
      "unfavorable": "Regulatory overreach where an unelected agency radically redefined Clean Air Act authority without Congressional authorization, effectively writing major new energy policy that cost jobs and increased electricity rates on American families.",
      "neutral": "EPA regulations under the Clean Air Act establishing CO2 emissions standards for power plants, treating CO2 as an air pollutant and establishing state-by-state reduction targets through a flexible market-based approach."
    },
    {
      "id": 6,
      "action": "Revocation of Clean Power Plan",
      "administration": "Trump EPA, 2017-2020",
      "favorable": "Rational deregulation that restored the legitimate limits of EPA authority, protecting American energy independence and economic competitiveness while returning regulatory decisions to individual states.",
      "unfavorable": "Rollback of vital climate protections driven by fossil fuel interests, abandoning America's climate leadership and returning to outdated coal-dependent energy policy that fails to address existential environmental threats.",
      "neutral": "EPA revocation of the 2015 Clean Power Plan and replacement with the Affordable Clean Energy rule, which establishes emissions guidelines allowing states greater flexibility in how to achieve compliance."
    },
    {
      "id": 7,
      "action": "Travel Ban on Muslim-Majority Countries",
      "administration": "Trump, 2017",
      "favorable": "National security measure restricting travel from countries with inadequate vetting procedures, terrorism threats, or no cooperation with US security protocols, protecting Americans from potential terrorist attacks.",
      "unfavorable": "Unconstitutional Muslim ban targeting individuals based on religion, betraying American values of religious liberty and equal protection while harming millions of innocent people and damaging international relationships.",
      "neutral": "Executive order restricting travel from Iran, Libya, North Korea, Somalia, Syria, Yemen, and later Venezuela and Nigeria, based on determinations that these nations lack adequate information sharing and security protocols."
    },
    {
      "id": 8,
      "action": "COVID-19 Vaccine Mandates",
      "administration": "Biden, 2021",
      "favorable": "Public health emergency response mandating life-saving vaccines or testing for workers and healthcare personnel, preventing deaths and hospitalizations while keeping businesses and schools safe and functional.",
      "unfavorable": "Government overreach violating bodily autonomy and medical freedom rights, coercing millions of Americans to choose between their careers and experimental vaccines, discriminating against those with natural immunity or religious objections.",
      "neutral": "OSHA emergency temporary standard requiring employers with 100+ employees to implement vaccination or testing protocols, with exceptions for medical or religious reasons and natural immunity documentation."
    },
    {
      "id": 9,
      "action": "NSA Bulk Metadata Surveillance Program",
      "administration": "Continued under Obama, 2009-2013",
      "favorable": "Effective counterterrorism tool that collects metadata allowing rapid identification of terrorist networks and prevention of attacks, operating under Congressional oversight through the FISA court system.",
      "unfavorable": "Massive unconstitutional surveillance of Americans' communications and movements, violating Fourth Amendment protections without individualized warrants, creating a surveillance state that Edward Snowden and courts have since ruled illegal.",
      "neutral": "NSA bulk collection of phone call metadata and internet communications under Section 215 of the PATRIOT Act and Executive Order 12333, retained and analyzed for counterterrorism purposes."
    },
    {
      "id": 10,
      "action": "Obama Administration Mass Commutations",
      "administration": "Obama, 2016-2017",
      "favorable": "Compassionate criminal justice reform granting mercy to 1,715 federal prisoners serving disproportionate sentences for nonviolent drug offenses, recognizing systemic racial disparities in sentencing and reducing prison overpopulation.",
      "unfavorable": "Reckless abuse of presidential clemency power releasing hundreds of felons convicted of serious crimes back onto the streets, flouting the rule of law and disrespecting victims and law enforcement.",
      "neutral": "Grant of commutations to 1,715 federal prisoners, primarily serving drug offenses, by whom the President determined sentences to be significantly longer than current sentencing guidelines would impose."
    },
    {
      "id": 11,
      "action": "January 6 Capitol Riot Pardons and Commutations",
      "administration": "Trump, 2025",
      "favorable": "Restoration of justice for political prisoners and supporters who participated in lawful political protest, correcting an unprecedented weaponization of the justice system against political opponents.",
      "unfavorable": "Presidential pardon for violent insurrectionists who assaulted police, breached the Capitol to disrupt Constitutional proceedings, and threatened democracy itself, showing contempt for law and order.",
      "neutral": "Full pardons and sentence commutations for individuals convicted in connection with January 6, 2021 Capitol building breach, including both individuals who pleaded guilty to misdemeanors and those convicted of violent felonies."
    },
    {
      "id": 12,
      "action": "Paris Climate Agreement Entry and Withdrawal",
      "administration": "Obama entry 2016, Trump withdrawal 2017",
      "favorable_entry": "Responsible global leadership recognizing climate change as a threat to American prosperity, joining nearly all nations in binding commitment to emissions reduction and clean energy transition.",
      "unfavorable_entry": "Unilateral commitment to reduce American competitiveness without Senate ratification, imposing climate restrictions that will cost American jobs while China and India continue unchecked emissions.",
      "favorable_withdrawal": "Reversal of a failed agreement that imposed disproportionate burdens on American workers while allowing other nations to continue high emissions, prioritizing American energy independence and economic growth.",
      "unfavorable_withdrawal": "Irresponsible abandonment of global climate leadership, withdrawing from the only binding framework addressing existential climate threats and signaling American abdication of environmental responsibility.",
      "neutral": "Obama executive entry into the Paris Climate Agreement in 2016 based on authority under the UN Framework Convention; Trump executive withdrawal in 2017 invoking authority under Article 28 of the Agreement."
    },
    {
      "id": 13,
      "action": "Transgender Military Service Policies",
      "administration": "Obama 2016, Trump 2017-2020, Biden 2021",
      "favorable_inclusive": "Historic protection of transgender Americans' right to serve their country and receive medical care, ending discrimination against qualified military personnel based on gender identity.",
      "unfavorable_inclusive": "Disruptive policy forcing expensive gender transition procedures on taxpayers and undermining military readiness by introducing complex new accommodations.",
      "favorable_restrictive": "Rational military policy prioritizing unit cohesion and medical readiness by limiting service to those without complex ongoing medical requirements.",
      "unfavorable_restrictive": "Unjust discrimination excluding qualified Americans from serving their country based solely on gender identity, denying their constitutional equal protection rights.",
      "neutral": "Policy decisions affecting eligibility for military service and medical care coverage based on gender identity and transition status, varying by administration."
    },
    {
      "id": 14,
      "action": "Title IX Sexual Orientation and Gender Identity Guidance",
      "administration": "Biden guidance 2021, Trump rollback 2017",
      "favorable_expansion": "Crucial civil rights protections ensuring LGBTQ students can learn and participate safely in schools, prohibiting discrimination that devastates vulnerable youth.",
      "unfavorable_expansion": "Reckless expansion of Title IX beyond its text to redefine sexual discrimination, imposing controversial gender ideology in schools without Congressional authorization.",
      "favorable_rollback": "Restoring the original meaning of sex discrimination in Title IX and preventing regulatory overreach that contradicts Congressional intent.",
      "unfavorable_rollback": "Removal of civil rights protections for vulnerable LGBTQ students, abandoning federal commitment to educational equality and enabling harassment.",
      "neutral": "Biden administration guidance interpreting Title IX sex discrimination provisions to apply to sexual orientation and gender identity discrimination; Trump administration withdrawal and narrower interpretation."
    },
    {
      "id": 15,
      "action": "ICE Immigration Enforcement Operations",
      "administration": "Trump, 2017-2020",
      "favorable": "Enforcement of federal immigration law and removal of criminals and security threats, restoring the rule of law after years of non-enforcement and protecting American communities.",
      "unfavorable": "Militarized immigration enforcement with raids separating families, deporting people with long-term legal residence and community ties, and using fear and intimidation against immigrant communities.",
      "neutral": "Increased Immigration and Customs Enforcement (ICE) operations including workplace raids and detention, targeting both individuals with criminal convictions and undocumented immigrants without criminal records."
    }
  ]
}
;