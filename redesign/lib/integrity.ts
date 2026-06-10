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
    },
    {
      "id": 26,
      "principle": "Cryptocurrency and digital asset regulation",
      "dem": {
        "action": "Digital Assets Regulatory Framework (Biden, 2022)",
        "description": "Executive order establishing comprehensive regulatory framework for digital assets, directing agencies to study risks and develop consumer protections"
      },
      "gop": {
        "action": "Bitcoin Strategic Reserve (Trump, 2025)",
        "description": "Executive order creating a national bitcoin reserve and directing government acquisition of cryptocurrency"
      },
      "expected_similar_dimensions": ["SP", "AR"],
      "notes": "Both exercise executive authority over novel financial instruments without clear Congressional authorization. Biden used agency coordination; Trump used direct asset acquisition. Both raise questions about executive power over monetary policy traditionally controlled by Congress."
    },
    {
      "id": 27,
      "principle": "AI governance and innovation policy",
      "dem": {
        "action": "AI Safety and Accountability Framework (Biden, 2023)",
        "description": "Executive order requiring AI safety testing, bias audits, and watermarking of AI-generated content, establishing reporting requirements for frontier models"
      },
      "gop": {
        "action": "AI Barriers Removal (Trump, 2025)",
        "description": "Executive order revoking AI safety requirements and removing regulatory barriers to AI development and deployment"
      },
      "expected_similar_dimensions": ["SP", "AR"],
      "notes": "Both use executive authority to set AI policy without Congressional legislation. Biden imposed requirements; Trump removed them. Both implicate agency authority and the major questions doctrine for emerging technology regulation."
    },
    {
      "id": 28,
      "principle": "Religious liberty versus anti-discrimination",
      "dem": {
        "action": "LGBTQ Federal Equality Order (Biden, 2021)",
        "description": "Executive order extending Bostock reasoning across federal programs, requiring non-discrimination protections based on sexual orientation and gender identity"
      },
      "gop": {
        "action": "Religious Liberty Executive Order (Trump, 2017)",
        "description": "Executive order providing broad religious exemptions from federal regulations and directing agencies to accommodate religious objections"
      },
      "expected_similar_dimensions": ["EP", "CL"],
      "notes": "Both address the tension between equality and religious liberty using executive authority. Biden expanded anti-discrimination protections; Trump expanded religious exemptions. Both implicate First Amendment and Equal Protection in competing directions."
    },
    {
      "id": 29,
      "principle": "K-12 education content and standards",
      "dem": {
        "action": "Racial Equity in Education (Biden, 2021)",
        "description": "Executive order promoting diverse and inclusive curricula, directing federal education resources toward racial equity training and materials"
      },
      "gop": {
        "action": "K-12 Indoctrination Elimination (Trump, 2025)",
        "description": "Executive order directing removal of CRT and DEI content from schools receiving federal funding"
      },
      "expected_similar_dimensions": ["CL", "EP"],
      "notes": "Both use federal funding leverage to influence K-12 curriculum content. Biden promoted equity-focused content; Trump prohibited it. Both raise First Amendment academic freedom and spending power coercion concerns."
    },
    {
      "id": 30,
      "principle": "Healthcare access and pricing",
      "dem": {
        "action": "Reproductive Healthcare Access (Biden, 2022)",
        "description": "Post-Dobbs executive order protecting reproductive healthcare access, using EMTALA preemption and interstate travel protections"
      },
      "gop": {
        "action": "Healthcare Pricing Transparency (Trump, 2025)",
        "description": "Executive order directing hospitals and insurers to disclose pricing and directing agencies to promote market-based healthcare reform"
      },
      "expected_similar_dimensions": ["SP", "AR"],
      "notes": "Both use executive authority to reshape healthcare policy without Congressional action. Biden used EMTALA preemption; Trump used disclosure mandates. Both stretch existing statutory authority to achieve policy goals Congress has not enacted."
    },
    {
      "id": 31,
      "principle": "Criminal justice philosophy",
      "dem": {
        "action": "Private Prison Ban (Biden, 2021)",
        "description": "Executive order directing DOJ to end federal contracts with private prisons, citing racial disparities and safety concerns"
      },
      "gop": {
        "action": "Death Penalty Restoration (Trump, 2025)",
        "description": "Executive order directing DOJ to resume federal executions and expand categories of death-eligible offenses"
      },
      "expected_similar_dimensions": ["DP", "EP"],
      "notes": "Both direct DOJ criminal justice policy through executive action. Biden restricted carceral practices; Trump expanded them. Both raise equal protection concerns given documented racial disparities in the criminal justice system."
    },
    {
      "id": 32,
      "principle": "Foreign aid withdrawal and international engagement",
      "dem": {
        "action": "Iran Nuclear Deal (Obama, 2015)",
        "description": "Entry into JCPOA through executive agreement, providing sanctions relief in exchange for nuclear program limits"
      },
      "gop": {
        "action": "Foreign Aid Realignment (Trump, 2025)",
        "description": "Blanket freeze on foreign aid disbursements pending review, halting billions in congressionally appropriated funds"
      },
      "expected_similar_dimensions": ["SP", "N"],
      "notes": "Both involve unilateral executive action on international commitments with spending implications. Obama committed US resources; Trump froze them. Both implicate Congressional spending authority and treaty/agreement power."
    },
    {
      "id": 33,
      "principle": "Gender identity in federal programs",
      "dem": {
        "action": "Gender Identity Protections (Biden, 2021)",
        "description": "Executive order applying Bostock reasoning to extend gender identity protections across all federal programs and contractors"
      },
      "gop": {
        "action": "Defining Sex as Biological (Trump, 2025)",
        "description": "Executive order directing federal agencies to define sex as exclusively biological and immutable for all federal purposes"
      },
      "expected_similar_dimensions": ["EP", "CL"],
      "notes": "Both redefine sex for federal purposes through executive action. Biden expanded to include gender identity; Trump restricted to biological sex. Both contradict some aspect of Bostock and implicate equal protection and statutory interpretation."
    },
    {
      "id": 34,
      "principle": "Energy and climate policy direction",
      "dem": {
        "action": "Climate Crisis Action (Biden, 2021)",
        "description": "Executive order declaring climate emergency, pausing federal oil and gas leasing, setting net-zero targets, and rejoining Paris Agreement"
      },
      "gop": {
        "action": "Unleashing Energy Dominance (Trump, 2025)",
        "description": "Executive order declaring national energy emergency, maximizing fossil fuel production on federal lands, and revoking climate regulations"
      },
      "expected_similar_dimensions": ["SP", "AR"],
      "notes": "Both use emergency declarations for energy policy. Biden paused leasing; Trump expanded it. Both stretch executive authority over federal land management where Congress has set statutory frameworks. Opposite policy but same constitutional mechanisms."
    },
    {
      "id": 35,
      "principle": "Targeting specific legal entities",
      "dem": {
        "action": "DOJ Consent Decree Enforcement (Biden, 2021-2024)",
        "description": "DOJ pursuing pattern-or-practice investigations and consent decrees against local police departments, using federal oversight authority"
      },
      "gop": {
        "action": "Law Firm Sanctions (Trump, 2025)",
        "description": "Executive orders targeting specific law firms (Perkins Coie, Paul Weiss, Jenner & Block) with security clearance revocations and federal contract bans"
      },
      "expected_similar_dimensions": ["DP", "CL"],
      "notes": "Both use federal power against specific entities. Biden used statutory pattern-or-practice authority; Trump targeted named firms by executive order. Trump's action raises bill of attainder and First Amendment concerns absent in Biden's statutory enforcement."
    },
    {
      "id": 36,
      "principle": "Military deployment for domestic purposes",
      "dem": {
        "action": "Guantanamo Closure Order (Obama, 2009)",
        "description": "Executive order closing Guantanamo detention facility and establishing interrogation limits, though Congress blocked detainee transfers"
      },
      "gop": {
        "action": "Military Border Deployment (Trump, 2025)",
        "description": "Deployment of active-duty military forces to southern border for immigration enforcement operations"
      },
      "expected_similar_dimensions": ["SP", "DP"],
      "notes": "Both involve executive direction of military for domestic-facing purposes. Obama restricted military detention; Trump expanded military domestic deployment. Both implicate Posse Comitatus, separation of powers, and due process in different ways."
    },
    {
      "id": 37,
      "principle": "Refugee and asylum policy",
      "dem": {
        "action": "DAPA (Obama, 2014)",
        "description": "Deferred Action for Parents of Americans, extending DACA-like protections to approximately 4 million undocumented parents"
      },
      "gop": {
        "action": "Refugee Admissions Suspension (Trump, 2025)",
        "description": "Executive order suspending refugee admissions program and dramatically reducing annual refugee ceiling"
      },
      "expected_similar_dimensions": ["SP", "EP"],
      "notes": "Both involve unilateral executive action on immigration affecting millions. Obama expanded protections; Trump restricted admissions. Both test limits of executive immigration authority and implicate statutory frameworks."
    },
    {
      "id": 38,
      "principle": "Election integrity and voting access",
      "dem": {
        "action": "Voting Access Expansion (Biden, 2021)",
        "description": "Executive order directing federal agencies to expand voter registration opportunities and improve election accessibility"
      },
      "gop": {
        "action": "Election Interference Accountability (Trump, 2025)",
        "description": "Executive order directing DOJ to investigate alleged election fraud and establishing task forces to review election administration"
      },
      "expected_similar_dimensions": ["D", "EP"],
      "notes": "Both use executive authority to influence election administration. Biden expanded access; Trump pursued enforcement. Both implicate federalism (elections are state-administered) and equal protection (disparate impact on different populations)."
    },
    {
      "id": 39,
      "principle": "International organization membership",
      "dem": {
        "action": "Climate Science Integration (Biden, 2021)",
        "description": "Rejoined Paris Agreement and directed agencies to integrate international climate commitments into domestic policy"
      },
      "gop": {
        "action": "WHO Withdrawal (Trump, 2025)",
        "description": "Unilateral withdrawal from World Health Organization, redirecting US contributions and ending participation"
      },
      "expected_similar_dimensions": ["SP", "N"],
      "notes": "Both involve unilateral executive action on international organization participation. Biden recommitted; Trump withdrew. Both raise treaty power questions and whether Congressional appropriations can be redirected by executive action."
    },
    {
      "id": 40,
      "principle": "Free speech and platform regulation",
      "dem": {
        "action": "Net Neutrality (Obama/FCC, 2015)",
        "description": "FCC reclassification of broadband as common carrier, imposing neutrality requirements on internet service providers"
      },
      "gop": {
        "action": "Free Speech and Censorship Order (Trump, 2025)",
        "description": "Executive order directing agencies to combat alleged government-enabled censorship on social media platforms"
      },
      "expected_similar_dimensions": ["CL", "AR"],
      "notes": "Both address speech and communication through executive/agency authority. Obama imposed neutrality rules; Trump addressed content moderation. Both implicate First Amendment and agency authority over communications."
    },
    {
      "id": 41,
      "principle": "Trade protectionism and supply chains",
      "dem": {
        "action": "Supply Chain Resilience (Biden, 2021)",
        "description": "Executive order directing review of critical supply chains and promoting domestic manufacturing through federal procurement"
      },
      "gop": {
        "action": "China Tariffs Expansion (Trump, 2025)",
        "description": "Broad tariffs on Chinese imports under emergency economic authority, expanding beyond Section 301 framework"
      },
      "expected_similar_dimensions": ["SP", "AR"],
      "notes": "Both use executive authority for trade protectionism. Biden used procurement authority; Trump used emergency tariff power. Both raise Article I commerce clause questions about congressional vs. presidential trade authority."
    },
    {
      "id": 42,
      "principle": "Counterterrorism authority and designation",
      "dem": {
        "action": "Targeted Killing Program (Obama, 2009-2016)",
        "description": "Executive authorization of drone strikes against suspected terrorists, including US citizens abroad, without judicial review"
      },
      "gop": {
        "action": "Cartels as Foreign Terrorist Organizations (Trump, 2025)",
        "description": "Designation of drug cartels as foreign terrorist organizations, extending material support liability to millions of peripheral associates"
      },
      "expected_similar_dimensions": ["DP", "CL"],
      "notes": "Both expand counterterrorism authority into novel domains. Obama used lethal force without judicial process; Trump extended FTO designation beyond political groups. Both raise serious due process concerns and stretch executive counterterrorism authority."
    },
    {
      "id": 43,
      "principle": "Federal workforce management",
      "dem": {
        "action": "Federal Employee Vaccine Mandate (Biden, 2021)",
        "description": "Executive order requiring COVID-19 vaccination for all federal employees with limited exceptions"
      },
      "gop": {
        "action": "Federal Bureaucracy Reduction (Trump, 2025)",
        "description": "Executive order directing mass reductions in federal workforce and elimination of entire agency divisions"
      },
      "expected_similar_dimensions": ["SP", "DP"],
      "notes": "Both impose sweeping employment conditions on federal workers. Biden required medical compliance; Trump directed mass termination. Both implicate due process property interests in employment and executive personnel authority."
    },
    {
      "id": 44,
      "principle": "Anti-corruption and foreign enforcement",
      "dem": {
        "action": "Russia Sanctions (Biden, 2022)",
        "description": "Comprehensive sanctions against Russian entities, oligarchs, and financial institutions in response to Ukraine invasion"
      },
      "gop": {
        "action": "FCPA Enforcement Pause (Trump, 2025)",
        "description": "Executive order pausing Foreign Corrupt Practices Act enforcement and reviewing anti-bribery prosecutions"
      },
      "expected_similar_dimensions": ["SP", "N"],
      "notes": "Both involve executive authority over foreign corruption enforcement. Biden expanded sanctions; Trump reduced enforcement. Both implicate statutory foreign policy frameworks and executive enforcement discretion."
    },
    {
      "id": 45,
      "principle": "Energy infrastructure and federal land",
      "dem": {
        "action": "Keystone XL Revocation (Biden, 2021)",
        "description": "Revocation of Keystone XL pipeline permit, citing climate concerns and redirecting energy policy toward renewables"
      },
      "gop": {
        "action": "Alaska Resource Development (Trump, 2025)",
        "description": "Executive order opening protected federal lands in Alaska to oil, gas, and mineral development"
      },
      "expected_similar_dimensions": ["SP", "AR"],
      "notes": "Both use executive authority over federal land and energy infrastructure. Biden blocked a pipeline; Trump opened protected lands. Both test limits of executive authority where Congress has set frameworks for land management."
    },
    {
      "id": 46,
      "principle": "Deregulation philosophy",
      "dem": {
        "action": "Promoting Competition (Biden, 2021)",
        "description": "Executive order directing agencies to promote competition through 72 specific regulatory actions across industries"
      },
      "gop": {
        "action": "Deregulation for Prosperity (Trump, 2025)",
        "description": "Executive order extending 2-for-1 deregulatory framework and directing agencies to reduce regulatory burden by specified percentages"
      },
      "expected_similar_dimensions": ["SP", "AR"],
      "notes": "Both direct agency rulemaking priorities through executive order. Biden promoted regulation; Trump promoted deregulation. Both implicate presidential authority over independent agencies and APA requirements for reasoned decision-making."
    },
    {
      "id": 47,
      "principle": "International court jurisdiction",
      "dem": {
        "action": "War Powers and International Cooperation (Obama, 2011)",
        "description": "Military intervention in Libya based on UN Security Council authorization without Congressional approval"
      },
      "gop": {
        "action": "ICC Sanctions (Trump, 2025)",
        "description": "Executive order imposing sanctions on International Criminal Court officials investigating US and allied personnel"
      },
      "expected_similar_dimensions": ["SP", "N"],
      "notes": "Both involve executive assertion of authority vis-à-vis international institutions. Obama used international authority to bypass Congress; Trump sanctioned an international court. Both implicate war powers, sovereignty, and separation of powers."
    },
    {
      "id": 48,
      "principle": "Government investment and sovereign wealth",
      "dem": {
        "action": "Supply Chain Investment (Biden, 2021)",
        "description": "Executive direction of federal investment in critical supply chains, semiconductor manufacturing, and clean energy infrastructure"
      },
      "gop": {
        "action": "Sovereign Wealth Fund (Trump, 2025)",
        "description": "Executive order creating a national sovereign wealth fund to invest in strategic assets and infrastructure"
      },
      "expected_similar_dimensions": ["SP", "AR"],
      "notes": "Both direct government investment through executive action without specific Congressional authorization. Biden used procurement authority; Trump created a new investment vehicle. Both raise Appropriations Clause concerns about executive spending discretion."
    },
    {
      "id": 49,
      "principle": "Children's welfare and gender policy",
      "dem": {
        "action": "Title IX Gender Identity Expansion (Biden, 2021)",
        "description": "Guidance expanding Title IX to protect students based on gender identity, including bathroom and sports team access"
      },
      "gop": {
        "action": "Protecting Children from Gender Ideology (Trump, 2025)",
        "description": "Executive order directing federal agencies to prohibit gender-affirming medical care for minors receiving federal funding"
      },
      "expected_similar_dimensions": ["EP", "DP"],
      "notes": "Both address children's gender-related policies through executive authority. Biden expanded protections; Trump restricted medical care. Both implicate parental rights, equal protection for minors, and spending power coercion."
    },
    {
      "id": 50,
      "principle": "National security transparency",
      "dem": {
        "action": "Enhanced Interrogation Ban (Obama, 2009)",
        "description": "Executive order banning enhanced interrogation techniques, establishing Army Field Manual as standard, and ordering CIA black site closures"
      },
      "gop": {
        "action": "JFK Declassification (Trump, 2025)",
        "description": "Executive order directing complete declassification of JFK assassination records over intelligence community objections"
      },
      "expected_similar_dimensions": ["SP"],
      "notes": "Both involve executive authority over national security information and practices. Obama restricted executive methods; Trump overrode agency classification. Both implicate executive power over intelligence community and separation of powers regarding information control."
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
    },
    {
      "id": 16,
      "action": "Schedule F Civil Service Reclassification",
      "administration": "Trump, 2020/2025",
      "favorable": "Essential reform restoring democratic accountability to the federal bureaucracy by ensuring civil servants in policy-relevant positions serve at the pleasure of elected leadership, preventing unelected officials from obstructing the will of the people.",
      "unfavorable": "Authoritarian power grab converting tens of thousands of career civil servants into political appointees, destroying merit-based government employment and enabling a loyalty-based spoils system that undermines institutional expertise and independence.",
      "neutral": "Executive order reclassifying federal employees in policy-related positions from competitive service to excepted service, enabling removal without cause and replacing merit-based protections with at-will employment terms for affected positions."
    },
    {
      "id": 17,
      "action": "DEI Program Elimination",
      "administration": "Trump, 2025",
      "favorable": "Restoration of merit-based principles in government by ending discriminatory programs that divided Americans by race and imposed ideological conformity requirements on federal workers and contractors.",
      "unfavorable": "Systematic dismantling of decades of progress toward racial equity and inclusion, eliminating programs that helped underrepresented groups access opportunities while threatening civil rights enforcement across the federal government.",
      "neutral": "Executive order directing termination of all Diversity, Equity, and Inclusion offices, programs, and training across the federal government and federal contractors, and prohibiting consideration of DEI factors in hiring and procurement decisions."
    },
    {
      "id": 18,
      "action": "AI Barriers Removal",
      "administration": "Trump, 2025",
      "favorable": "Pro-innovation policy removing burdensome regulations that stifled American AI development, ensuring US technological leadership against China and unleashing transformative economic growth in artificial intelligence.",
      "unfavorable": "Reckless deregulation removing safety guardrails from the most powerful technology in human history, prioritizing corporate profits over public safety and enabling deployment of biased, dangerous AI systems without accountability.",
      "neutral": "Executive order revoking Biden-era AI safety requirements including testing mandates, bias audits, and watermarking requirements, and directing agencies to reduce regulatory barriers to AI development and deployment."
    },
    {
      "id": 19,
      "action": "WHO Withdrawal",
      "administration": "Trump, 2025",
      "favorable": "Reassertion of American sovereignty by leaving a corrupt international organization that failed during COVID-19, wasted US taxpayer money, and allowed China to influence global health policy against American interests.",
      "unfavorable": "Dangerous abandonment of global health cooperation during an era of pandemic threats, removing US influence from the world's primary health security organization and leaving Americans more vulnerable to future outbreaks.",
      "neutral": "Executive order initiating US withdrawal from the World Health Organization, redirecting annual contributions of approximately $700 million, and establishing alternative bilateral health cooperation arrangements."
    },
    {
      "id": 20,
      "action": "Student Loan Forgiveness Expansion",
      "administration": "Biden, 2022-2024",
      "favorable": "Continued effort to deliver relief to working families drowning in student debt, using alternative legal pathways after the Supreme Court ruling to address a generational crisis in education affordability.",
      "unfavorable": "Defiance of the Supreme Court's clear ruling against executive student loan cancellation, using bureaucratic workarounds to bypass judicial review and transfer hundreds of billions in costs to taxpayers.",
      "neutral": "Series of executive actions using income-driven repayment plan modifications and targeted forgiveness programs to cancel student loan debt through alternative statutory authorities following the Supreme Court's invalidation of the original broad forgiveness plan."
    }
  ]
}
;

/**
 * Maps symmetry pair IDs to EO IDs in data.ts where both dem and gop
 * actions correspond to entries in the 100-EO dataset.
 * Used by calibration to compute per-lens bias from actual scored data.
 */
export const symmetryPairEOMapping: Record<number, { dem: string; gop: string }> = {
  1: { dem: 'daca', gop: 'birthright-citizenship' },
  2: { dem: 'covid-emergency-powers', gop: 'border-wall-emergency' },
  3: { dem: 'clean-power', gop: 'doge' },
  4: { dem: 'student-loan-forgiveness', gop: 'liberation-tariffs' },
  5: { dem: 'nsa-surveillance', gop: 'immigration-enforcement' },
  6: { dem: 'osha-vaccine-mandate', gop: 'travel-ban' },
  7: { dem: 'racial-equity-initiative', gop: 'dei-elimination' },
  8: { dem: 'transgender-federal-protections', gop: 'transgender-military-ban' },
  9: { dem: 'guantanamo-closure', gop: 'jan6-pardons' },
  10: { dem: 'iran-nuclear-deal', gop: 'paris-withdrawal' },
  11: { dem: 'title-ix-gender-identity', gop: 'gender-ideology-extremism' },
  12: { dem: 'waters-of-us-rule', gop: 'energy-independence' },
  14: { dem: 'gun-control', gop: 'second-amendment' },
  15: { dem: 'enhanced-interrogation-ban', gop: 'alien-enemies-act' },
  17: { dem: 'policing-reform', gop: 'cartels-fto' },
  18: { dem: 'cybersecurity-improvement', gop: 'schedule-f' },
  20: { dem: 'voting-access', gop: 'sanctuary-cities' },
  26: { dem: 'digital-assets-regulation', gop: 'bitcoin-reserve' },
  27: { dem: 'cybersecurity-improvement', gop: 'ai-barriers-removal' },
  28: { dem: 'lgbtq-equality', gop: 'religious-liberty' },
  29: { dem: 'racial-equity-initiative', gop: 'k12-indoctrination' },
  30: { dem: 'reproductive-healthcare', gop: 'healthcare-pricing' },
  31: { dem: 'private-prisons-ban', gop: 'death-penalty-restoration' },
  32: { dem: 'iran-nuclear-deal', gop: 'foreign-aid-realignment' },
  33: { dem: 'gender-identity-protections', gop: 'gender-ideology-extremism' },
  34: { dem: 'climate-crisis-action', gop: 'unleashing-energy' },
  36: { dem: 'guantanamo-closure', gop: 'military-border' },
  37: { dem: 'dapa', gop: 'refugee-realignment' },
  38: { dem: 'voting-access', gop: 'election-interference-accountability' },
  39: { dem: 'climate-crisis-action', gop: 'who-withdrawal' },
  40: { dem: 'net-neutrality', gop: 'free-speech-censorship' },
  41: { dem: 'supply-chains', gop: 'china-tariffs' },
  42: { dem: 'drone-strikes', gop: 'cartels-fto' },
  43: { dem: 'federal-employee-vaccine', gop: 'federal-bureaucracy-reduction' },
  44: { dem: 'russia-sanctions', gop: 'fcpa-pause' },
  45: { dem: 'keystone-xl-revocation', gop: 'alaska-resources' },
  46: { dem: 'promoting-competition', gop: 'deregulation-prosperity' },
  48: { dem: 'supply-chains', gop: 'sovereign-wealth-fund' },
  49: { dem: 'title-ix-gender-identity', gop: 'protecting-children-gender' },
  50: { dem: 'enhanced-interrogation-ban', gop: 'jfk-declassification' },
};