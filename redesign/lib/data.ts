import type { ExecutiveOrder } from "./constants";

export const executiveOrders: ExecutiveOrder[] = [
  {
    "id": "daca",
    "title": "DACA (Deferred Action for Childhood Arrivals)",
    "date": "2012-06-15",
    "type": "Executive Memorandum",
    "admin": "Obama",
    "desc": "Granted temporary protection from deportation to childhood arrivals of undocumented immigrants.",
    "brief": "In June 2012, President Obama issued an executive memorandum directing DHS to defer deportation for certain undocumented immigrants brought to the US as children. The policy created a presumption against deportation for individuals who arrived before age 16, had lived in the US for at least 5 years, and had no serious criminal record. Approximately 800,000 people benefited. The action raised significant separation-of-powers concerns—the Constitution grants Congress exclusive authority over immigration. Critics argued the Executive exceeded prosecutorial discretion by creating a blanket non-enforcement category rather than case-by-case decisions.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 1,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.3,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "The INA does not explicitly authorize deferred action programs of this scope. Article I, Section 8 commits immigration regulation to Congress. Creating a categorical non-enforcement policy for 800,000 people exceeds prosecutorial discretion—this is de facto legislation by the Executive.",
      "OR": "The Founders placed naturalization power in Congress. Prosecutorial discretion existed at the Founding but its scope was narrow—individual cases, not categorical classes. This program's magnitude exceeds historical executive practice.",
      "DC": "Prosecutorial discretion is a recognized doctrine (Heckler v. Chaney), but categorical deferred action for 800,000 people lacks precedent. Courts have recognized case-by-case enforcement discretion, not blanket non-enforcement categories of this magnitude.",
      "LC": "The Constitution's arc toward equality supports protecting children who had no agency in their arrival. Equal protection rejects penalizing persons for circumstances beyond their control. Congressional inaction justifies executive action to implement constitutional values.",
      "PR": "DACA recipients contribute economically ($300B+ GDP), have lower crime rates, and peer democracies grant similar protections. Deporting 800,000 economically productive people would be counterproductive.",
      "SM": "Prosecutorial discretion includes category-based enforcement policies. Congress's 30-year failure to reform immigration effectively delegates the problem to the Executive. The Take Care Clause permits systematic enforcement approaches."
    }
  },
  {
    "id": "clean-power",
    "title": "Clean Power Plan",
    "date": "2015-08-03",
    "type": "Executive/EPA Rule",
    "admin": "Obama",
    "desc": "First national carbon emission limits on power plants via EPA regulatory authority under Clean Air Act.",
    "brief": "The Clean Power Plan used EPA authority under the Clean Air Act to impose the first national limits on carbon emissions from existing power plants, requiring states to reduce emissions 32% below 2005 levels by 2030. The constitutional issues centered on federalism and agency authority. In West Virginia v. EPA (2022), the Supreme Court struck it down 6-3, holding the EPA exceeded its authority under the \"major questions doctrine.\"",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        }
      },
      "LC": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.6,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "Congress delegated authority to the EPA for air pollutants under the Clean Air Act. The text does not explicitly include carbon. Regulating the entire energy economy exceeds reasonable statutory construction.",
      "OR": "The Founders did not contemplate an agency regulating energy systems nationwide. The major questions doctrine applies. EPA authority was designed for localized pollutants, not global climate.",
      "DC": "The major questions doctrine, formalized in West Virginia v. EPA, requires clear congressional authorization for rules of vast economic significance. EPA authority under the Clean Air Act has precedent for localized pollutants, but economy-wide energy regulation departs from established regulatory scope.",
      "LC": "Climate change is an existential threat with profound rights and equality implications. The Constitution's protective arc justifies expansive regulatory authority to preserve habitability for future generations.",
      "PR": "Clean energy transition generates jobs and reduces healthcare costs. Global competitors are moving faster. The US faces competitive disadvantage without regulatory ambition.",
      "SM": "The Clean Air Act grants broad authority to regulate air pollutants. Carbon is chemically a pollutant. Congress provided a flexible framework to permit adaptive implementation as science progressed."
    }
  },
  {
    "id": "nsa-surveillance",
    "title": "NSA Surveillance Expansion",
    "date": "2009-01-01",
    "type": "Executive/Classified Programs",
    "admin": "Obama",
    "desc": "Expanded surveillance authority under EO 12333 and classified programs later revealed by Edward Snowden.",
    "brief": "The NSA expanded surveillance programs under EO 12333 and classified statutory authority. The Snowden revelations disclosed bulk metadata collection on tens of millions of Americans, surveillance of foreign leaders, and PRISM collection from internet companies. The Fourth Amendment protects against unreasonable searches; bulk collection appeared to violate it. The First Amendment protects association; surveillance chilled speech.",
    "scores": {
      "TX": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "N": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "N": {
          "s": -1,
          "r": 0.4,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -2,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "The Fourth Amendment protects against unreasonable searches. Bulk metadata collection is intrinsically unreasonable—no individualized suspicion, no warrant. \"The right of the people to be secure...against unreasonable searches...shall not be violated.\"",
      "OR": "The Framers feared government surveillance most. They experienced British writs of assistance and general warrants. The Fourth Amendment's particularity requirement reflects founding-era abhorrence of dragnet searches.",
      "DC": "Smith v. Maryland's third-party doctrine provides limited foundation, but bulk metadata collection on millions of Americans vastly exceeds its scope. Katz v. United States established reasonable expectation of privacy. The scale of surveillance departs dramatically from doctrinal precedent.",
      "LC": "Modern technology demands evolved interpretation. Bulk metadata violates privacy even more than physical searches. Dragnet digital surveillance poses greater threats to equality and association than 18th-century intrusions.",
      "PR": "Bulk metadata programs caught very few terrorists compared to targeted investigation. Privacy violations impose measurable social costs—chilling speech, political organizing. Democracies without mass surveillance achieve comparable security.",
      "SM": "The programs had legitimate national security rationales post-9/11, but the bulk nature and lack of judicial oversight exceeded reasonable bounds. Executive authority over foreign intelligence was broader, but domestic surveillance required stronger statutory authorization."
    }
  },
  {
    "id": "gun-control",
    "title": "Gun Control Executive Actions",
    "date": "2016-01-05",
    "type": "Executive Memorandum",
    "admin": "Obama",
    "desc": "Required gun sellers to be licensed and expanded background check requirements.",
    "brief": "President Obama issued a memorandum directing DOJ to clarify which gun sellers must be licensed and expanding background check requirements. The Second Amendment issue was contested. The memorandum did not ban guns but reinterpreted existing law. Critics argued the Executive cannot redefine statutory definitions, violating separation of powers.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.6,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.6,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The Second Amendment protects the right to bear arms; regulation through background checks is permissible. However, the Executive cannot redefine statutory terms—\"gun seller\" and \"license\" have meanings fixed by statute.",
      "OR": "The Second Amendment protects an individual right for self-defense and militia service. The Founders understood regulation, but Congress, not the Executive, must define licensing requirements.",
      "DC": "District of Columbia v. Heller and McDonald v. Chicago established an individual right to bear arms that constrains regulatory scope. The executive actions largely operate within existing statutory authority, giving them modest doctrinal support where they stay within established frameworks.",
      "LC": "The Constitution recognizes both individual arms rights and compelling government interest in regulating dangerous weapons. Closing the private seller loophole serves public safety and equal protection.",
      "PR": "Countries with universal background checks have lower gun homicide rates. The US is an outlier in gun violence. Closing a regulatory gap is practical governance aligned with evidence.",
      "SM": "Executive authority to enforce statutes includes clarifying ambiguous language. Whether an unlicensed person is a \"dealer\" is a reasonable interpretive question within bounds of permissible statutory construction."
    }
  },
  {
    "id": "dapa",
    "title": "DAPA (Deferred Action for Parents)",
    "date": "2014-11-20",
    "type": "Executive Memorandum",
    "admin": "Obama",
    "desc": "Extended deferred action to parents of US citizens and legal permanent residents. Blocked by courts.",
    "brief": "DAPA would have extended temporary protection to approximately 4 million undocumented immigrants who were parents of US citizens or legal residents. The Fifth Circuit found it likely exceeded prosecutorial discretion, and the Supreme Court deadlocked 4-4 in 2016. Unlike DACA, DAPA was never implemented. The scale (4M vs 800K) made separation-of-powers concerns more acute.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.6,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.3,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "DAPA extended categorical deferred action to 4 million people—nearly 5x DACA's scope. This crosses from prosecutorial discretion to legislating by Executive fiat.",
      "OR": "The scale makes separation-of-powers violation more severe. Prosecutorial discretion has never extended to categorical policy affecting millions. The Founders would recognize this as executive usurpation.",
      "DC": "Texas v. United States blocked DAPA, with the Fifth Circuit finding it likely violated the APA. Covering approximately 4 million people exceeds any prior exercise of prosecutorial discretion recognized by courts. Less doctrinal support than DACA due to broader reach.",
      "LC": "Parents raising families embody family integrity and equal dignity values. But DAPA's scope exposed implementation challenges and may have exceeded practical administrative feasibility.",
      "PR": "Economic benefits would have been substantial—4 million workers in the formal economy, higher tax revenue. But implementation concerns about vetting and Congressional coordination were legitimate.",
      "SM": "While prosecutorial discretion can encompass categorical policies, DAPA's scope without Congressional engagement created democratic legitimacy concerns. Phased implementation with Congressional notice might have been safer."
    }
  },
  {
    "id": "travel-ban",
    "title": "Travel Ban (Muslim-Majority Countries)",
    "date": "2017-01-27",
    "type": "Executive Order 13769",
    "admin": "Trump I",
    "desc": "Restricted entry from 7 Muslim-majority countries. Upheld by SCOTUS in Trump v. Hawaii (5-4).",
    "brief": "EO 13769 initially barred entry from Iraq, Syria, Iran, Libya, Somalia, Sudan, and Yemen. After legal challenges, a revised version was upheld in Trump v. Hawaii (2018) 5-4. The Establishment Clause challenge argued religious discrimination; due process arguments highlighted lack of individualized review. The majority stressed broad presidential immigration authority and facially neutral language.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.6,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The INA grants the President broad authority over entry of non-citizens. The facially neutral language does not violate textual constitutional requirements. The text permits nationality-based classifications for security.",
      "OR": "The Founders granted the President exclusive power over foreign nationals seeking entry. Immigration and foreign relations are quintessentially executive powers.",
      "DC": "Plenary power doctrine (Kleindienst v. Mandel) supports broad executive immigration authority. Trump v. Hawaii upheld the third iteration. However, initial versions' apparent religious targeting created tension with Establishment Clause precedent (Larson v. Valente).",
      "LC": "The Establishment Clause protects against government disfavoring religion. The order targets Muslim-majority nations, and campaign rhetoric explicitly called for a \"Muslim ban.\" Intent matters.",
      "PR": "Nationals from banned countries committed very few terrorist attacks in the US. The countries are predominantly Muslim, making disparate impact obvious. Peer democracies do not use nationality-based entry bans.",
      "SM": "The President has extraordinarily broad immigration authority. Courts defer to Executive national security judgments. The facially neutral language supports textual validity."
    }
  },
  {
    "id": "border-wall-emergency",
    "title": "Border Wall National Emergency",
    "date": "2019-02-15",
    "type": "Executive Order & National Emergency",
    "admin": "Trump I",
    "desc": "Declared national emergency to divert military funds for border wall construction.",
    "brief": "After Congress refused to appropriate wall funds, Trump declared a national emergency to redirect $3.6 billion in military construction funds to border wall sections. The Appropriations Clause (Article I, Section 9) was the core challenge: can the Executive redirect funds appropriated for one purpose to another via emergency declaration, especially after Congress explicitly denied the funding?",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The Appropriations Clause: \"No Money shall be drawn from the Treasury, but in Consequence of Appropriations made by Law.\" Congress appropriated military funds for military construction, not border walls. Redirecting funds Congress explicitly denied violates the Clause.",
      "OR": "The Framers designed the Appropriations Clause as the primary check on executive power. Madison wrote extensively about this. Allowing emergency redirects would render the Clause meaningless.",
      "DC": "The Youngstown framework places this in Category 3—the president acting contrary to Congress's expressed will, where executive power is at its lowest ebb. Using emergency declarations to redirect funds Congress specifically denied departs from established separation of powers doctrine.",
      "LC": "The Constitution's development has reinforced Congressional spending power. Emergency powers cannot override the Appropriations Clause's core protection of democratic governance.",
      "PR": "No national emergency existed—border crossings were at 15-year lows. The declaration was politically motivated. Peer democracies do not permit such spending redirects.",
      "SM": "The National Emergencies Act delegates emergency power to the Executive. Courts have historically deferred to emergency declarations. If Congress does not override, the constitutional check is satisfied."
    }
  },
  {
    "id": "sanctuary-cities",
    "title": "Sanctuary Cities Funding Threat",
    "date": "2017-01-25",
    "type": "Executive Order 13768",
    "admin": "Trump I",
    "desc": "Threatened to strip federal funding from sanctuary jurisdictions that failed to cooperate with immigration enforcement.",
    "brief": "Executive Order 13768 directed federal agencies to withhold grants and federal funding from municipalities and states that limited cooperation with federal immigration enforcement efforts. The executive sought to use the Spending Clause as leverage to compel compliance with federal immigration priorities.\n\nMultiple federal courts found the order unconstitutional under the anti-commandeering doctrine and Spending Clause limitations. Federal funding conditions must be unambiguous, directly related to the federal program, and not coercive. The order failed to meet these requirements.\n\nThe core constitutional conflict centers on whether the President can unilaterally add conditions to federal spending that Congress did not explicitly authorize, and whether such conditions unconstitutionally commandeer local enforcement resources.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The text of the Spending Clause grants Congress authority to spend for the general welfare, but the Framers' original text does not authorize the President to unilaterally attach new conditions beyond those Congress enacted. Separation of powers principles prevent executive overreach into congressional appropriations power. The order conflicted with the anti-commandeering doctrine because it attempted to compel state action through coercive financial pressure rather than cooperation.",
      "OR": "The Founders understood that federal-state relations require clear constitutional or statutory authorization. Presidents traditionally respected state sovereignty in law enforcement, with federal grants serving defined purposes set by Congress. The order violated the original public meaning of the Spending Clause by imposing conditions that Congress neither approved nor appropriated funds to support.",
      "DC": "Anti-commandeering doctrine (Printz v. United States, New York v. United States) and Spending Clause limitations (NFIB v. Sebelius) create strong doctrinal barriers. The federal government cannot commandeer state officials to enforce federal law, and funding conditions must be non-coercive.",
      "LC": "The evolving constitutional arc supports strong protections for federalism and prevents coercive federal-state relationships. Modern jurisprudence has developed robust limits on conditional federal spending to protect state autonomy and prevent manipulation. The order represents a regression from settled constitutional principles protecting state sovereignty and democratic accountability in local governance.",
      "PR": "Practical experience in federal-state relations shows that unilateral executive funding conditions create instability and undermine cooperation between levels of government. Most peer democracies maintain clear separation between federal incentives and local enforcement decisions. Effective immigration policy requires genuine state participation, which is damaged by threats and coercive funding manipulations.",
      "SM": "The President possesses legitimate executive authority over federal law enforcement and can condition federal grants on compliance with federal law. The order reasonably interpreted existing statutory authority to enforce immigration laws and coordinate with state actors. Federal law enforcement priorities have constitutional weight, and resistance to immigration enforcement from sanctuary jurisdictions represents a serious federalism problem requiring executive response."
    }
  },
  {
    "id": "transgender-military-ban",
    "title": "Transgender Military Service Ban",
    "date": "2017-08-25",
    "type": "Executive Order 13764",
    "admin": "Trump I",
    "desc": "Banned transgender individuals from military service and denied access to medical care for gender transition.",
    "brief": "The President announced via Twitter and subsequent policy that transgender individuals would be barred from military service in any capacity. The policy prohibited the Department of Defense from providing medical care related to gender transition and required discharge or denial of enlistment for transgender service members.\n\nMultiple federal courts issued preliminary injunctions halting enforcement of the ban on equal protection grounds under the Fifth Amendment. The courts found the policy likely violated substantive due process and equal protection by distinguishing on the basis of transgender status without adequate justification.\n\nThe constitutional tension involves whether military deference to Commander-in-Chief judgment can override equal protection scrutiny, and whether excluding a group based on identity without medical or operational evidence violates fundamental fairness principles.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The text of the Fifth Amendment prohibits deprivation of liberty without due process. An exclusion based on transgender status that lacks clear statutory authorization and rational relationship to military objectives conflicts with the plain text of due process protections. The textualist concern centers on whether the policy follows proper procedures and whether the stated rationale genuinely relates to enumerated military functions.",
      "OR": "The original understanding of the Fifth Amendment protected individuals from arbitrary government action and classifications without rational basis. Military tradition has long supported executive deference in force composition, suggesting the Framers understood military judgment as supreme. However, the total exclusion of a class based on identity rather than demonstrated capability lacks originalist support for such categorical discrimination.",
      "DC": "Military deference doctrine (Rostker v. Goldberg) provides some support for personnel decisions. However, Bostock v. Clayton County's recognition of sex-based protections and established integration precedent create countervailing doctrinal pressure against categorical exclusion.",
      "LC": "The constitutional arc has progressively protected individuals from discrimination based on immutable or quasi-immutable characteristics. Courts have recognized gender identity as fundamental to personal liberty under the Fourteenth Amendment doctrine as applied through the Fifth. The policy represents a regression from settled protections for equal dignity and inclusion, absent demonstrated harm or operational necessity.",
      "PR": "Empirical evidence from allied democracies demonstrates that transgender military service functions without operational disruption or cohesion problems. The policy lacked evidence-based justification and contradicted military medical professionals' assessments. Pragmatic governance suggests following the evidence on military effectiveness rather than categorical exclusions based on identity.",
      "SM": "The President as Commander-in-Chief possesses broad authority over military personnel and force composition, reflecting the Framers' understanding of executive military power. Military deference doctrine traditionally grants executive judgment significant weight on personnel questions. The legitimate government interest in military readiness and unit cohesion may support tailored policies regarding medical readiness and deployment capacity."
    }
  },
  {
    "id": "family-separation-zero-tolerance",
    "title": "Family Separation & Zero Tolerance Policy",
    "date": "2018-04-06",
    "type": "Immigration Enforcement Policy",
    "admin": "Trump I",
    "desc": "Criminally prosecuted all border crossers, resulting in systematic separation of migrant children from parents.",
    "brief": "The Attorney General announced a \"zero tolerance\" policy directing federal prosecutors to criminally prosecute all individuals apprehended crossing the border illegally. Because federal criminal detention facilities cannot house children, this policy necessarily resulted in the systematic separation of dependent children from their parents.\n\nFederal Judge Dana Boarruman later found in Ms. L v. ICE that the separation policy \"shocks the conscience.\" Thousands of children were separated without adequate process to track or reunify them. The government conceded it could not locate hundreds of separated children, and many were subjected to traumatic conditions during separation.\n\nThe policy raised severe constitutional concerns regarding due process, family integrity rights, and whether the government action constituted cruel and unusual punishment. Even supporters acknowledged the policy caused serious human rights violations without demonstrable legislative authorization.",
    "scores": {
      "TX": {
        "R": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "N": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        }
      },
      "PR": {
        "R": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        }
      },
      "SM": {
        "R": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.75,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "The Fifth Amendment explicitly protects fundamental family rights as an aspect of liberty. The systematic separation of children from parents without individualized due process determinations violates the plain text of due process protections. No statutory authorization explicitly authorized family separation, and the policy contradicted Congress's implicit protection of family unity in immigration statutes.",
      "OR": "The Framers and ratifiers understood that government action separating families without cause violated fundamental natural rights. Family integrity was recognized as foundational to liberty in common law and original public meaning. The policy's systematic nature and lack of individual adjudication violated the Due Process Clause as originally understood to protect family relationships.",
      "DC": "The Flores Settlement Agreement establishes binding precedent on detention conditions for minors. Reno v. Flores and subsequent jurisprudence create clear doctrinal requirements for due process in immigration proceedings involving children. Systematic separation violates established procedural protections.",
      "LC": "Constitutional jurisprudence has consistently recognized family unity as a fundamental interest protected by substantive due process and equal protection. The policy represents a profound regression from settled doctrine protecting parent-child relationships. The arc of constitutional development firmly establishes that government cannot separate families without extraordinary justification and individualized process.",
      "PR": "Empirical evidence demonstrates that family separation causes severe psychological trauma to children and contradicts evidence-based immigration enforcement. Other democracies manage border enforcement without systematic family separation. Practical governance demands that policies serve legitimate ends; family separation served no compelling interest while inflicting documented harm.",
      "SM": "Even from a steelman perspective, executive immigration enforcement authority cannot justify systematic family separation without explicit congressional authorization or demonstrated necessity. The policy lacked procedural safeguards to reunify families and created unrebutted evidence of \"shocking the conscience\" harm. No principled defense can sustain the policy's indifference to family trauma."
    }
  },
  {
    "id": "covid-emergency-powers",
    "title": "COVID-19 Emergency Powers",
    "date": "2020-03-13",
    "type": "National Emergency Declaration",
    "admin": "Trump I",
    "desc": "Declared national emergency under the National Emergencies Act, invoking Defense Production Act authority and implementing payroll tax deferral.",
    "brief": "The President declared a national emergency on March 13, 2020, in response to the COVID-19 pandemic. The declaration invoked the National Emergencies Act and authorized use of the Defense Production Act to direct manufacturing of ventilators and protective equipment. The administration also implemented payroll tax deferral authority under the Internal Revenue Code, delaying certain payroll tax obligations.\n\nThe emergency powers largely withstood constitutional challenge, with courts recognizing the genuine crisis nature of the pandemic. However, the payroll tax deferral provision raised questions about whether executive authority extends to substantive tax policy changes without congressional authorization, as that power derives from the Internal Revenue Code.\n\nThe constitutional debate centered on the appropriate scope of emergency powers under the Necessary and Proper Clause and whether extraordinary circumstances justify executive action that would normally require congressional approval, balanced against Appropriations Clause constraints.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.75,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.75,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 1,
          "r": 0.6,
          "c": "H"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "LC": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.85,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "Emergency powers inherent in executive authority are not unlimited even during crises. The National Emergencies Act and Defense Production Act provided some textual authorization, but the payroll tax deferral lacked clear statutory basis and effectively altered tax law through executive action. True emergency powers have temporal limits and must relate to the genuine crisis rather than serve as vehicles for policy changes Congress rejected.",
      "OR": "The Framers understood that the executive possessed inherent emergency powers to protect the nation when Congress could not assemble or act. However, even in emergencies, the executive cannot permanently alter the fiscal or tax system without congressional approval. The original understanding respected emergency measures of defined duration while maintaining separated powers over substantive law.",
      "DC": "Jacobson v. Massachusetts (1905) provides strong doctrinal support for emergency public health measures. The National Emergencies Act framework has been repeatedly upheld. Executive emergency powers during genuine public health crises have deep roots in constitutional doctrine.",
      "LC": "The constitutional arc supports broad emergency flexibility when facing genuine crises threatening public health and safety. Modern jurisprudence recognizes that rigid separation of powers can undermine the government's ability to protect welfare during catastrophes. Public health emergencies justify executive action that would normally require congressional authorization.",
      "PR": "Pragmatic governance during a pandemic requires executive flexibility to direct industrial production and manage economic consequences. Evidence-based assessment showed both the genuine emergency and the effectiveness of defense production mobilization. The payroll tax deferral raised practical concerns about fiscal impacts but served economic stimulus purposes during crisis unemployment.",
      "SM": "Executive authority encompasses broad emergency powers during genuine national crises, particularly to direct military-industrial capacity and manage public health threats. The defense production authority reflected legitimate wartime powers traditionally available to the President. The payroll tax deferral represented a reasonable exercise of fiscal emergency authority under the CARES Act framework."
    }
  },
  {
    "id": "keystone-xl-revocation",
    "title": "Keystone XL Pipeline Permit Revocation",
    "date": "2021-01-20",
    "type": "Executive Order 13990",
    "admin": "Biden",
    "desc": "Revoked the presidential permit for the Keystone XL pipeline on the first day of the Biden administration.",
    "brief": "President Biden signed Executive Order 13990, which revoked the presidential permit for the Keystone XL pipeline project. The permit had been issued under the Trump administration after an extensive regulatory review. The revocation was based on concerns about climate change and environmental impacts.\n\nThe order was largely challenged on grounds of executive overreach and instability in permitting processes rather than fundamental constitutional violations. Property rights and reliance interests were implicated, but courts found the President's permitting authority gave sufficient discretion for permit revocation.\n\nThe constitutional issues involved the scope of executive permitting authority over border-crossing projects, the stability of regulatory decisions across administrations, and whether environmental concerns justified overriding energy independence and economic development priorities.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.85,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.75,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "The International Bridges and Tunnels Act grants the President authority to issue or revoke permits for border-crossing pipelines. The text does not limit revocation authority to narrow circumstances, suggesting broad executive discretion. However, reliance interests in previously-issued permits may constrain retroactive revocation based on changed policy preferences.",
      "OR": "The original public meaning of executive authority over border commerce includes the power to control infrastructure crossing national boundaries. However, original principles of contractual stability and reliance interests suggest vested property interests deserve protection even when administrations change. The revocation raised original concerns about arbitrary executive action affecting settled reliance.",
      "DC": "Executive authority over international pipeline permits is well-established through the cross-border permit process. Revoking a permit within recognized executive prerogative raises no significant doctrinal concerns under established administrative law.",
      "LC": "Environmental protection and climate change represent evolved constitutional priorities under the Welfare Clause and emerging constitutional consciousness regarding intergenerational environmental justice. The executive authority to protect environmental values has expanded through modern statutory architecture. The revocation reflects constitutional values of environmental stewardship advancing through successive administrations.",
      "PR": "Pragmatic energy policy requires balancing climate benefits against economic disruption and energy security costs. Evidence on climate impacts supports pipeline prevention, but evidence on economic dependence on continued fossil fuel infrastructure suggests costs were significant. Practical governance favors transparent cost-benefit analysis before disrupting settled permitting decisions.",
      "SM": "The President's broad authority over border-crossing infrastructure and environmental permitting constitutes core executive power. Permitting decisions reflect policy judgment that properly belongs to the elected executive, not courts. The revocation reflected legitimate constitutional authority over border infrastructure and environmental stewardship."
    }
  },
  {
    "id": "osha-vaccine-mandate",
    "title": "OSHA Workplace Vaccine Mandate",
    "date": "2021-09-09",
    "type": "Executive Order 14042",
    "admin": "Biden",
    "desc": "Required vaccination or testing for employees of businesses with 100 or more workers through OSHA authority.",
    "brief": "Executive Order 14042 directed OSHA to develop emergency rules requiring vaccination or regular testing for businesses with 100 or more employees. The mandate applied to private sector employers and was intended to increase vaccination rates during the Delta variant surge.\n\nThe Supreme Court in NFIB v. OSHA stayed the mandate pending review, indicating the petitioners demonstrated serious constitutional questions regarding the OSHA statute's scope. The Court found that OSHA's authority to regulate \"grave dangers\" in the workplace did not clearly authorize vaccination mandates affecting millions of workers nationwide.\n\nThe constitutional questions involved non-delegation concerns, whether OSHA's statutory authority extended to general public health rather than workplace-specific hazards, and whether the mandate violated individual liberty interests. The case exemplified the \"major questions doctrine\" debate regarding executive authority.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.85,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.65,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "The OSHA statute authorizes regulation of \"grave dangers\" in the workplace, but the text does not clearly extend authority to require vaccinations for hazards transmitted outside the workplace. The mandate affected workers' personal health decisions rather than traditional workplace safety measures. Textualist interpretation requires clear statutory authorization for policies affecting individual medical liberty.",
      "OR": "OSHA was created to address workplace-specific hazards, not to serve as a vehicle for general public health mandates. The original understanding of workplace safety did not encompass mandatory medical treatment decisions. The Tenth Amendment reserves police powers to states, including public health authority, which the federal government cannot assume without explicit constitutional grant.",
      "DC": "NFIB v. OSHA struck down the mandate, applying the major questions doctrine. OSHA's emergency temporary standards authority has limited judicial support historically. The unprecedented scope—covering 84 million workers—exceeded what courts recognized as ordinary agency authority.",
      "LC": "Public health emergencies justify broader executive authority to protect collective welfare under evolved constitutional doctrine. The pandemic represented a genuine grave danger justifying extraordinary measures. Constitutional values of preserving public health and protecting vulnerable populations support vaccine promotion through workplace requirements.",
      "PR": "Empirical evidence demonstrated vaccine effectiveness in reducing COVID-19 transmission and mortality. Vaccination mandates in comparable democracies increased vaccination rates without significant operational disruption. Pragmatic policy supports evidence-based public health measures during genuine health emergencies affecting millions of workers.",
      "SM": "The President's authority to protect workplace safety and direct federal contractors to implement health measures encompasses vaccine policy authority. Executive emergency power during pandemic crisis justified measures beyond normal statutory scope. OSHA's broad \"grave danger\" language provided reasonable statutory basis for emergency workplace health mandates."
    }
  },
  {
    "id": "student-loan-forgiveness",
    "title": "Student Loan Forgiveness Plan",
    "date": "2022-08-24",
    "type": "Executive Action",
    "admin": "Biden",
    "desc": "Announced debt forgiveness program providing up to $20,000 per borrower in federal student loan cancellation.",
    "brief": "The Biden administration announced a student loan forgiveness program that would cancel up to $20,000 in federal student loan debt per borrower, targeting individuals with annual income below $125,000. The program would cost an estimated $400+ billion over the following decade.\n\nThe Supreme Court in Biden v. Nebraska (2023) struck down the program 6-3, finding that the administration lacked the statutory authority to implement such a sweeping policy without explicit congressional authorization. The Court applied the major questions doctrine, requiring clear congressional approval for decisions of vast economic consequence.\n\nThe constitutional conflict mirrored the DACA/DAPA debates, centering on whether executive officials could use broad statutory language (the HEROES Act) to justify billion-dollar policy changes. The case raised separation of powers concerns regarding the Appropriations Clause and whether such spending decisions belong exclusively to Congress.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.85,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.85,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.85,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.75,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The HEROES Act authorized the Secretary of Education to waive or modify student loan obligations during national emergencies, but the statute's text does not clearly authorize cancellation affecting millions of borrowers and costing hundreds of billions. Major questions doctrine requires explicit authorization when executives claim vast discretion over questions of enormous economic consequence. The forgiveness program exceeded the reasonable textual limits of \"waiver\" or \"modification.\"",
      "OR": "The Appropriations Clause reserves spending authority exclusively to Congress, reflecting the Framers' understanding that fiscal decisions belong to elected representatives closest to taxpayers. Unilateral executive spending programs violate the original constitutional design. The program attempted to spend billions without congressional authorization, usurping the power of the purse.",
      "DC": "Biden v. Nebraska applied the major questions doctrine to invalidate the program. The HEROES Act interpretation was novel and lacked support in prior agency practice. Congressional spending authority under the Appropriations Clause creates strong doctrinal barriers to executive debt cancellation.",
      "LC": "The arc of constitutional development increasingly supports government action reducing inequality and expanding access to education. Student debt relief advances constitutional values of human flourishing and equal opportunity. The living Constitution perspective favors executive authority to address modern crises like student debt affecting millions.",
      "PR": "Evidence demonstrates that student debt reduction increases economic mobility and benefits lower-income borrowers significantly. Comparable democracies have implemented debt relief programs during economic crises. Pragmatic policy supports relief for borrowers harmed by rising tuition costs that outpaced wage growth.",
      "SM": "The HEROES Act provided reasonable statutory basis for emergency loan modification authority during the pandemic crisis. The President's executive authority over education policy extends to loan administration. The program represented legitimate exercise of executive discretion within broad statutory delegation."
    }
  },
  {
    "id": "title-ix-gender-identity",
    "title": "Title IX Expansion to Gender Identity",
    "date": "2024-04-29",
    "type": "Proposed Title IX Regulation",
    "admin": "Biden",
    "desc": "Proposed expansion of Title IX to prohibit discrimination based on gender identity in schools.",
    "brief": "The Department of Education proposed revised Title IX regulations that would expand sex discrimination protections to explicitly cover gender identity discrimination in schools. The regulation interpreted Title IX's prohibition on sex discrimination to encompass discrimination based on gender identity and transgender status.\n\nSeveral federal courts enjoined enforcement of aspects of the regulation, finding that Title IX's statutory language is ambiguous and the regulatory expansion may violate the First Amendment by imposing speech restrictions on schools regarding pronouns and facilities.\n\nThe constitutional questions centered on statutory interpretation (whether \"sex\" includes gender identity), administrative law principles (whether agency interpretation went beyond statutory bounds), and First Amendment concerns regarding government-mandated speech and religious liberty implications for schools with religious missions.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.75,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.75,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 1,
          "r": 0.75,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.75,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.75,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "Title IX's statutory text prohibits discrimination \"on the basis of sex,\" language enacted in 1972 with settled meaning concerning biological sex. The text does not mention gender identity or transgender status. Textualist interpretation requires Congress to speak clearly before agencies can expand statutory language beyond original meaning, especially when affecting First Amendment freedoms.",
      "OR": "Congress in 1972 understood \"sex\" to mean biological sex with settled meaning in law, not gender identity as a social or psychological construct. The original public meaning of Title IX did not encompass gender identity. Originalism requires respecting settled statutory meaning rather than allowing agencies to rewrite statutes through regulatory expansion.",
      "DC": "Bostock v. Clayton County (2020) provides doctrinal support by recognizing sex discrimination encompasses gender identity under Title VII. Extending this reasoning to Title IX has textual parallel, though it represents an incremental extension of the Bostock framework to educational contexts.",
      "LC": "Constitutional principles have evolved to recognize gender identity as integral to equal protection and individual dignity. The arc of civil rights progress extends protections to historically excluded groups, and contemporary understanding embraces gender identity as foundational to equal treatment. Title IX should evolve with constitutional consciousness to protect students from discrimination based on gender identity.",
      "PR": "Empirical evidence demonstrates that discrimination based on gender identity causes documented harm to student wellbeing and academic success. Evidence from schools implementing inclusive policies shows no operational disruption. Pragmatic policy supports Title IX expansion to protect vulnerable students from discrimination.",
      "SM": "Bostock v. Clayton County (2020) held that discrimination based on transgender status constitutes sex discrimination under Title VII because it necessarily involves classification based on sex. The logic extends readily to Title IX as a parallel statute with identical language. Executive authority to enforce civil rights statutes supports expansive interpretation protecting vulnerable students."
    }
  },
  {
    "id": "racial-equity-initiative",
    "title": "Racial Equity Advancement Initiative",
    "date": "2021-01-20",
    "type": "Executive Order 13985",
    "admin": "Biden",
    "desc": "Directed federal agencies to advance racial equity in their programs and operations.",
    "brief": "Executive Order 13985 directed federal agencies to assess equity in their programs, set racial equity goals, and develop action plans to address disparities affecting communities of color. The order aimed to embed equity considerations throughout federal administrative operations and resource allocation.\n\nThe executive order did not explicitly mandate race-conscious affirmative action but directed equity-focused policy analysis and priority-setting. Implementation raised constitutional questions about whether race-conscious approaches to federal spending and administration constitute unlawful racial classifications under the Equal Protection Clause.\n\nThe constitutional tension involved whether federal executive action advancing equity goals through race-conscious analysis violates equal protection principles, or whether such action represents legitimate implementation of civil rights obligations and constitutional values of equal protection. The 14th Amendment's remedial purpose became central to the debate.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.75,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.85,
          "c": "H"
        },
        "D": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.85,
          "c": "H"
        },
        "D": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.85,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.75,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "The Fourteenth Amendment protects equal protection under law, requiring government neutrality regarding race in statutory language and governmental action. However, directing agencies to assess and address disparities does not necessarily mandate racial classifications. The executive order's text focuses on equity goals rather than explicit race-based allocation, potentially consistent with neutral language principles.",
      "OR": "The Fourteenth Amendment was enacted to remedy slavery and ensure equal citizenship, reflecting remedial purpose toward equality. The original understanding recognized that achieving equal protection required addressing systemic inequality resulting from slavery and discrimination. Executive action to advance equity aligns with the original remedial purpose of the Fourteenth Amendment.",
      "DC": "Executive equity orders build on EO 11246 and affirmative action doctrine (Grutter v. Bollinger). However, Students for Fair Admissions v. Harvard narrowed race-conscious policies. Doctrinal tension exists between historical support for equity measures and recent judicial retrenchment.",
      "LC": "Constitutional jurisprudence recognizes that authentic equality sometimes requires race-conscious remedies addressing documented historical and ongoing discrimination. The arc of equal protection doctrine has evolved to support legitimate equity initiatives as consistent with constitutional values. Agencies implementing equity goals fulfill evolving constitutional commitments to equal dignity.",
      "PR": "Empirical evidence demonstrates persistent racial disparities in federal program outcomes reflecting historical discrimination and systemic inequities. Evidence shows that equity-focused analysis and targeting of resources reduces disparities. Pragmatic governance supports evidence-based equity initiatives that reduce measurable gaps in federal program impacts.",
      "SM": "The President possesses broad executive authority to direct agencies toward equity-focused administration of federal programs. The Fourteenth Amendment empowers federal officials to advance equal protection through active remedial measures. Executive authority to implement constitutional values supports directing agencies to advance equity goals."
    }
  },
  {
    "id": "birthright-citizenship",
    "title": "Ending Birthright Citizenship",
    "date": "2025-01-20",
    "type": "Executive Order",
    "admin": "Trump II",
    "desc": "Attempted to end birthright citizenship for children of non-citizens by executive order.",
    "brief": "Executive order directing agencies to deny citizenship to children born in the US whose parents are not citizens or lawful permanent residents. Courts immediately blocked it as violating the Fourteenth Amendment. The order attempted to override 150 years of settled interpretation since United States v. Wong Kim Ark (1898).",
    "scores": {
      "TX": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "N": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "The Fourteenth Amendment states unambiguously: All persons born in the US are citizens. No executive order can override constitutional text. The attempt contradicts 150 years of settled precedent.",
      "OR": "The Fourteenth Amendment was ratified to ensure broad citizenship. The Framers of Reconstruction intended to prevent executive exclusion. Subject to the jurisdiction means subject to US law.",
      "DC": "United States v. Wong Kim Ark (1898) definitively established that the Fourteenth Amendment grants citizenship to all persons born on U.S. soil. This is among the most settled precedents in constitutional law. An executive order contradicting it represents a direct conflict with over a century of stare decisis.",
      "LC": "Constitutional arc has expanded citizenship. Denying birthright citizenship reverses foundational commitments and creates a permanent underclass undermining equal dignity.",
      "PR": "No peer democracy has eliminated birthright citizenship by executive action. The policy would create chaos, statelessness, and violate international law. Evidence shows it harms integration.",
      "SM": "The subject to jurisdiction clause has narrow readings available for diplomats and combatants. But this contradicts 150 years of precedent. Congress, not the executive, should clarify the clause."
    }
  },
  {
    "id": "immigration-enforcement",
    "title": "Immigration Enforcement & Mass Deportation",
    "date": "2025-01-20",
    "type": "Executive Order",
    "admin": "Trump II",
    "desc": "Directed mass deportation operations and expanded immigration enforcement to unprecedented scale.",
    "brief": "Suite of orders directing mass deportation of undocumented immigrants, deploying military resources to the border, and expanding expedited removal without individualized hearings. The orders raise severe due process concerns and strain separation between military and civilian law enforcement.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "Fifth Amendment guarantees due process to all persons. Mass removal without individualized hearings violates constitutional text. Posse Comitatus Act restricts military involvement in civilian law enforcement.",
      "OR": "Founders divided immigration power between Congress and Executive. Original understanding supported individual adjudication, not mass proceedings. Military deployment for domestic law enforcement contradicts founding concerns.",
      "DC": "Immigration enforcement authority is established, but mass deportation at this scale lacks modern precedent. Due process requirements for removal proceedings are well-settled (Zadvydas v. Davis, Padilla v. Kentucky). The operational scope raises serious procedural due process concerns under established doctrine.",
      "LC": "Constitutional protections now recognize rights of long-term residents. Mass deportation without process represents regression from evolved due process standards.",
      "PR": "Mass deportation of 11+ million would cost hundreds of billions, devastate labor-dependent industries, and separate families. Peer democracies use regularization, not mass removal.",
      "SM": "President possesses broad enforcement authority over immigration law. Prioritizing resources reflects legitimate discretion. National sovereignty requires ability to enforce immigration laws effectively."
    }
  },
  {
    "id": "jan6-pardons",
    "title": "January 6th Pardons",
    "date": "2025-01-20",
    "type": "Executive Clemency",
    "admin": "Trump II",
    "desc": "Pardoned approximately 1,500 individuals convicted of January 6th Capitol breach crimes.",
    "brief": "Blanket pardons issued to virtually all individuals convicted or charged in connection with January 6 Capitol breach, including those convicted of assaulting police and seditious conspiracy. Courts questioned whether pardon power can immunize political violence against democratic institutions.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "N": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "E": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.4,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "E": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.4,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "Article II grants pardon power with no textual limitation except impeachment. Text permits blanket pardons but raises implicit concerns about self-dealing and undermining accountability.",
      "OR": "Founders granted pardon power for mercy and restoring tranquility, not rewarding political allies. Using pardons to immunize political violence inverts the original purpose.",
      "DC": "The pardon power is broad under Article II (Schick v. Reed, Ex parte Garland). However, no precedent exists for pardoning individuals convicted of acts directed against the constitutional order itself. This novel application to insurrection-related offenses is uncharted doctrinal territory.",
      "LC": "Democratic norms require accountability for political violence. Pardoning insurrectionists signals violence against institutions carries no consequences, undermining the constitutional order.",
      "PR": "Blanket pardons for political violence create moral hazard and encourage future overthrow attempts. Peer democracies do not pardon those who attack democratic institutions.",
      "SM": "Pardon power is textually unlimited and courts refuse to review pardon decisions. President may exercise mercy based on judgment that sentences were excessive or prosecutions were politically motivated."
    }
  },
  {
    "id": "liberation-tariffs",
    "title": "Liberation Day Tariffs",
    "date": "2025-04-02",
    "type": "Executive Proclamation",
    "admin": "Trump II",
    "desc": "Imposed sweeping tariffs on virtually all imports using emergency powers, bypassing congressional trade authority.",
    "brief": "Massive unilateral tariff increases on imports from nearly all partners, using IEEPA rather than congressional trade authority. The largest unilateral trade action in modern history, bypassing Congress. Markets experienced severe disruption with multiple legal challenges filed.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "Article I, Section 8 grants Congress authority to lay tariffs. President lacks independent tariff authority. IEEPA was designed for sanctions, not trade policy restructuring.",
      "OR": "Founders specifically vested tariff power in Congress because tariffs were primary federal revenue. Executive unilateral tariffs contradict original constitutional design.",
      "DC": "Section 301 and IEEPA provide statutory authority for tariff actions, and Curtiss-Wright deference applies to foreign affairs. However, broad tariffs without specific trade injury findings depart from established trade law doctrine and push against the non-delegation principle.",
      "LC": "Normalization of emergency declarations for routine policy undermines constitutional balance and democratic deliberation on economic policy.",
      "PR": "Tariffs function as regressive taxes on consumers with documented inflationary effects. Peer democracies show multilateral agreements produce better outcomes than tariff wars.",
      "SM": "IEEPA grants broad emergency economic authority. Trade imbalances constitute genuine threats to national economic security requiring executive flexibility."
    }
  },
  {
    "id": "schedule-f",
    "title": "Schedule F Civil Service Reclassification",
    "date": "2025-01-20",
    "type": "Executive Order",
    "admin": "Trump II",
    "desc": "Reclassified tens of thousands of career civil servants as at-will political appointees.",
    "brief": "Reinstated and expanded Schedule F, reclassifying approximately 50,000 federal employees in policy-influencing positions as at-will appointees who can be fired without cause. Bypassed Pendleton Act civil service protections and threatened independence of nonpartisan government expertise.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "Pendleton Civil Service Reform Act protects federal employees from political firing. Statutory protections cannot be overridden by executive order. Due process protections apply to property interests in continued employment.",
      "OR": "Founders feared executive patronage and corruption. Merit-based civil service reflected constitutional values. Restoring patronage contradicts the constitutional arc away from spoils systems.",
      "DC": "The Pendleton Civil Service Reform Act (1883) established merit-based protections with 140 years of precedent. Elrod v. Burns and Branti v. Finkel limit political patronage in government employment. Dismantling these protections contradicts deeply embedded administrative law doctrine.",
      "LC": "Modern governance requires independent expertise insulated from political pressure. Civil service protections implement evolved commitment to competent administration.",
      "PR": "Countries with politicized civil services show worse governance, higher corruption, and policy instability. Pendleton Act was enacted precisely to remedy patronage dysfunction.",
      "SM": "Article II vests executive power including personnel authority. President needs ability to ensure policy-influencing employees align with democratically-mandated agenda. Accountability to elected leadership is itself a democratic value."
    }
  },
  {
    "id": "doge",
    "title": "Department of Government Efficiency (DOGE)",
    "date": "2025-01-20",
    "type": "Executive Order",
    "admin": "Trump II",
    "desc": "Created advisory body led by private citizens with access to government systems and de facto spending authority.",
    "brief": "Established DOGE as advisory body with unprecedented access to IT systems, personnel data, and spending authority. Led by unelected private citizens, directed agencies to terminate programs, fire employees, and cancel contracts without congressional authorization, raising Appointments Clause and Appropriations Clause questions.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.65,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.75,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "Appointments Clause requires Senate confirmation for officers exercising significant authority. DOGE operatives directed spending without appointment. Appropriations Clause prevents spending cuts not authorized by Congress.",
      "OR": "Founders created Appointments Clause to prevent unaccountable private actors from exercising government power. Hamilton warned against faction capturing executive function.",
      "DC": "No constitutional or statutory precedent supports a privately controlled entity exercising governmental spending authority. Appointments Clause doctrine (Buckley v. Valeo, Lucia v. SEC) requires proper appointment for those exercising significant authority. The Federal Advisory Committee Act governs advisory roles.",
      "LC": "Democratic governance requires accountability through constitutional processes. Unelected private citizens making binding decisions undermines democratic legitimacy and constitutional commitment to transparency.",
      "PR": "Rapid unsupervised spending cuts caused disruptions to veterans benefits, research grants, and disaster relief. Effective reform requires deliberate process, not unaccountable speed.",
      "SM": "President has broad authority to reorganize the executive branch and seek outside advice. Advisory bodies have precedent. Efficiency improvements serve public interest and fiscal responsibility."
    }
  },
  {
    "id": "dei-elimination",
    "title": "DEI Program Elimination",
    "date": "2025-01-20",
    "type": "Executive Order",
    "admin": "Trump II",
    "desc": "Eliminated all federal DEI programs and directed private sector compliance investigations.",
    "brief": "Executive orders eliminated all federal DEI programs, terminated DEI offices and personnel, and directed agencies to investigate private sector DEI practices for potential civil rights violations. Reversed decades of federal equity-focused policy and extended government pressure to private employers.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.65,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "Fourteenth Amendment mandates equal protection. First Amendment protects free expression including diversity advocacy. Orders chilling private speech raise both equal protection and free speech concerns.",
      "OR": "Fourteenth Amendment was enacted to remedy racial injustice. Original purpose supports equity programs. Elimination contradicts the amendment's core remedial purpose.",
      "DC": "Students for Fair Admissions narrowed race-conscious admissions but did not mandate elimination of all government diversity programs. Title VII anti-discrimination protections remain settled law. Blanket DEI elimination extends beyond the scope of recent judicial decisions.",
      "LC": "Constitutional arc expanded protections against discrimination. Equity programs reduce documented disparities. Elimination reverses decades of constitutional progress.",
      "PR": "Diverse organizations perform better. Equity programs reduce disparities. Peer democracies maintain equity frameworks as standard governance. Evidence contradicts elimination.",
      "SM": "Equal Protection Clause requires government neutrality. Race-conscious programs may themselves violate equal protection. Executive has authority to direct agencies toward race-neutral approaches."
    }
  },
  {
    "id": "paris-withdrawal",
    "title": "Paris Climate Agreement Withdrawal",
    "date": "2025-01-20",
    "type": "Executive Order",
    "admin": "Trump II",
    "desc": "Withdrew the US from the Paris Climate Agreement for the second time.",
    "brief": "Executive order initiating withdrawal from Paris Climate Agreement, removing US from global framework addressing climate change. While President has authority over international agreements, the action raised welfare and sovereignty concerns regarding intergenerational environmental obligations.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "Treaty Clause gives President authority over international agreements. Paris was never ratified as treaty. General Welfare Clause suggests obligation to protect collective wellbeing and environmental sustainability.",
      "OR": "Founders gave President foreign affairs authority but expected major commitments to receive Senate ratification. Original understanding supports executive discretion over non-treaty agreements while recognizing congressional interest.",
      "DC": "Treaty withdrawal authority is doctrinally ambiguous. Goldwater v. Carter was dismissed without reaching the merits. The executive has traditionally exercised withdrawal power, but the constitutional basis remains unsettled. This falls in a doctrinal gray area where precedent provides limited guidance.",
      "LC": "Climate change is existential threat to constitutional values of welfare and equality. Arc supports expanding protections to address threats to human flourishing. Withdrawal undermines welfare of future generations.",
      "PR": "Climate change imposes documented economic costs. Peer democracies maintain Paris commitments. US withdrawal reduces global climate ambition and harms diplomatic credibility.",
      "SM": "Executive authority over foreign affairs is at its apex over non-treaty agreements. National sovereignty includes determining environmental policy domestically. Energy independence serves national security interests."
    }
  },
  {
    "id": "alien-enemies-act",
    "title": "Alien Enemies Act Deportations",
    "date": "2025-03-15",
    "type": "Executive Proclamation",
    "admin": "Trump II",
    "desc": "Invoked the 1798 Alien Enemies Act to deport individuals without due process hearings during peacetime.",
    "brief": "Invoked Alien Enemies Act of 1798—wartime statute last used during WWII for Japanese internment—to summarily deport Venezuelan nationals without individualized hearings. Federal courts blocked action, finding the statute requires a declared war or invasion, neither of which existed. Supreme Court intervened after deportation flights departed.",
    "scores": {
      "TX": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "Alien Enemies Act requires declared war or invasion. No war was declared and no invasion existed. Fifth Amendment guarantees due process to all persons. Summary removal without hearings violates the constitutional text.",
      "OR": "1798 Act was part of the Alien and Sedition Acts, widely regarded as among the worst early legislation. Founders opposed the acts. Japanese internment under the same statute is universally condemned.",
      "DC": "The Alien Enemies Act has been invoked only during declared wars against nationals of enemy nations. Using it outside declared war for immigration enforcement is unprecedented. Hamdi v. Rumsfeld and Boumediene v. Bush established due process requirements even for alleged enemy combatants.",
      "LC": "Using wartime statute for peacetime deportation is the most regressive invocation since Japanese internment. Arc has firmly repudiated ethnicity-based mass deportation and wartime power abuse.",
      "PR": "Deporting without hearings to countries where people face danger violates international law and non-refoulement obligations. Evidence shows due process prevents errors in threat identification.",
      "SM": "Alien Enemies Act remains valid law. Transnational gang organizations may constitute hostile force justifying emergency measures. Executive has broad authority to protect national security from foreign threats."
    }
  },
  {
    "id": "funding-freeze",
    "title": "Federal Funding Freeze",
    "date": "2025-01-27",
    "type": "OMB Memorandum",
    "admin": "Trump II",
    "desc": "Attempted to freeze all federal grants and loans, blocked by courts within days.",
    "brief": "OMB memorandum ordering freeze on all federal grants, loans, and financial assistance programs pending review—estimated $3 trillion in federal spending. Federal judges immediately blocked the freeze, finding it directly violated the Appropriations Clause by withholding funds Congress had appropriated. The memorandum was rescinded within days after causing widespread disruption.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "Appropriations Clause: No Money shall be drawn from the Treasury except by Appropriations made by Law. Impoundment Control Act prohibits President from withholding appropriated funds. The freeze directly violated both constitutional text and statutory law.",
      "OR": "Framers designed Appropriations Clause as primary check on executive power. Congress controls the purse. The Act was enacted after Nixon's impoundment crisis. Freezing spending represents exactly the overreach the Founders sought to prevent.",
      "DC": "The Impoundment Control Act (1974) specifically prohibits unilateral executive withholding of appropriated funds. Train v. City of New York upheld Congress's spending authority. This action directly contradicts settled statutory and constitutional doctrine on the appropriations power.",
      "LC": "Constitutional commitment to general welfare requires that appropriated funds flow as Congress intended. Unilateral freezes undermine the social contract and modern governance.",
      "PR": "Freeze caused immediate disruptions: Medicaid portals offline, research grants suspended, state programs facing gaps. Even brief freezes impose cascading costs. No peer democracy permits such freezes.",
      "SM": "President has authority to ensure efficient spending and prevent waste. OMB has legitimate oversight functions. A temporary pause for review represents reasonable executive management, and the freeze was rescinded when courts raised concerns."
    }
  },
  {
    "id": "guantanamo-closure",
    "title": "Closure of Guantanamo Bay Detention Facility",
    "date": "2009-01-22",
    "type": "Executive Order 13492",
    "admin": "Obama",
    "desc": "Ordered the closure of Guantanamo Bay detention facility within one year and required lawful treatment of all detainees.",
    "brief": "On his first full day in office, President Obama signed EO 13492 ordering the closure of the Guantanamo Bay detention facility within one year and mandating a review of all detainee cases. The order sought to restore habeas corpus rights and due process protections for detainees held without charge, some for over seven years. Congress repeatedly blocked closure by prohibiting funding for detainee transfers to the mainland, creating a separation-of-powers standoff. The facility was never closed, illustrating the limits of executive power when Congress controls the purse strings. The order raised fundamental tensions between executive authority over military operations, congressional power of the purse, and individual liberty rights under the Fifth Amendment.",
    "scores": {
      "TX": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "N": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "The text of the Constitution grants Congress power over appropriations and the regulation of captures (Article I, Section 8). While the President commands the military, ordering facility closure without Congressional funding approval exceeds textual executive authority. The habeas suspension clause (Article I, Section 9) is a Congressional power, making executive restoration of habeas rights constitutionally proper in principle but procedurally problematic.",
      "OR": "The Founders feared indefinite detention without trial as a hallmark of tyranny, and the writ of habeas corpus was understood as fundamental at the Founding. However, the original design placed war-related detention decisions with Congress, not the President alone. Executive unilateral action to restructure military detention policy without legislative cooperation departs from the original allocation of war powers.",
      "DC": "Boumediene v. Bush (2008) established that Guantanamo detainees have constitutional habeas rights, supporting the order's direction. However, Congress's power of the purse is well-established in doctrine, and appropriations riders blocking detainee transfers were upheld. The order aligned with Boumediene but collided with Congressional spending authority.",
      "LC": "Indefinite detention without charge violates the evolving understanding of human dignity and due process. The Constitution must be read to prohibit the creation of legal black holes where fundamental rights do not apply. This order represented a necessary correction toward constitutional values of liberty and the rule of law.",
      "PR": "Guantanamo became a global symbol undermining American moral authority and complicated counterterrorism cooperation with allies. Pragmatically, the facility was a recruitment tool for extremists, and its closure would have served national security interests. However, the failure to close it demonstrated that executive orders alone cannot overcome determined Congressional opposition.",
      "SM": "The President, as Commander-in-Chief, has inherent authority to direct military operations including facility management. The Take Care Clause obligates the President to faithfully execute the law, including constitutional guarantees of habeas corpus affirmed by the Supreme Court. Ordering closure was a lawful exercise of military command authority to bring detention practices into compliance with judicial mandates."
    }
  },
  {
    "id": "enhanced-interrogation-ban",
    "title": "Banning Enhanced Interrogation Techniques",
    "date": "2009-01-22",
    "type": "Executive Order 13491",
    "admin": "Obama",
    "desc": "Prohibited the use of enhanced interrogation techniques and required all interrogations to comply with the Army Field Manual.",
    "brief": "Executive Order 13491 revoked prior CIA interrogation authorities and required all U.S. government interrogations to comply with the Army Field Manual, effectively banning waterboarding and other enhanced interrogation techniques. The order aligned executive practice with the Eighth Amendment prohibition on cruel and unusual punishment and the Fifth Amendment due process clause. Constitutional concerns were minimal since the President was directing executive branch agencies within his Article II authority. The order was broadly supported across the political spectrum as restoring the rule of law, though some critics argued it unduly constrained intelligence gathering. The order represented executive self-restraint rather than executive overreach, making it constitutionally unremarkable from a separation-of-powers standpoint.",
    "scores": {
      "TX": {
        "R": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 1,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 1,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 1,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 1,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 1,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "The Eighth Amendment prohibits cruel and unusual punishment, and the Fifth Amendment guarantees due process. The President directing executive agencies to comply with these textual provisions is a straightforward exercise of Article II supervisory authority. This order aligns executive practice with constitutional text rather than departing from it.",
      "OR": "The Founders understood the prohibition on cruel and unusual punishment as a core protection against government tyranny. Torture was condemned in the common law tradition the Framers inherited. Directing agencies to cease practices that violate these original guarantees is constitutionally sound and within the President's duty to faithfully execute the laws.",
      "DC": "Hamdan v. Rumsfeld (2006) established that Common Article 3 of the Geneva Conventions applies to the war on terror, prohibiting cruel treatment. The Detainee Treatment Act of 2005 also banned cruel treatment. This order brought executive practice into compliance with both judicial and legislative mandates, making it doctrinally well-grounded.",
      "LC": "Human dignity is the animating principle behind the Eighth Amendment, and our understanding of what constitutes cruel treatment evolves toward greater protection. Waterboarding and similar techniques are incompatible with a modern constitutional commitment to human rights. This order affirmed the Constitution's living commitment to humane treatment.",
      "PR": "Enhanced interrogation produced questionable intelligence while severely damaging American credibility and soft power abroad. FBI and military interrogators consistently found rapport-based methods more effective than coercive techniques. The ban was pragmatically sound for both intelligence effectiveness and international standing.",
      "SM": "The President has plenary authority over how executive agencies conduct operations. Directing compliance with the Army Field Manual standardizes interrogation practices, improves reliability of intelligence, and ensures lawful conduct. This is a textbook proper exercise of the Commander-in-Chief's authority to set rules for the forces."
    }
  },
  {
    "id": "drone-strikes",
    "title": "Targeted Killing/Drone Strike Program",
    "date": "2010-04-07",
    "type": "Classified Executive Authorization",
    "admin": "Obama",
    "desc": "Expanded the targeted killing program using drone strikes, including authorization to target U.S. citizens abroad deemed enemy combatants.",
    "brief": "The Obama administration dramatically expanded the use of drone strikes for targeted killings, including the 2011 killing of U.S. citizen Anwar al-Awlaki in Yemen without judicial process. The program raised profound Fifth Amendment due process concerns, as the government killed a citizen without indictment, trial, or conviction. The ACLU and others challenged the program, but in Al-Aulaqi v. Obama, the D.C. District Court dismissed the case on political question and standing grounds. A leaked DOJ white paper argued the executive could target citizens who posed an \"imminent\" threat, redefining imminence to not require evidence of a specific attack. The program tested the outer limits of executive war powers, the applicability of the Bill of Rights extraterritorially, and whether the political question doctrine can shield lethal executive action from any judicial review.",
    "scores": {
      "TX": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The Fifth Amendment states no person shall be deprived of life without due process of law. The text makes no exception for citizens abroad or those labeled enemy combatants. The AUMF authorized force against those responsible for 9/11, but textually does not override the Bill of Rights or authorize extrajudicial killing of citizens without any judicial process.",
      "OR": "The Founders crafted the Bill of Rights specifically to prevent the government from taking life without due process. The original understanding of \"due process\" required judicial proceedings before deprivation of life. While letters of marque and reprisal existed, they were Congressional powers, and the Founders never contemplated unilateral executive authority to kill citizens without trial.",
      "DC": "Hamdi v. Rumsfeld (2004) held that even enemy combatant citizens are entitled to due process, at minimum notice and an opportunity to be heard. The Al-Aulaqi court dismissed on justiciability grounds rather than reaching the merits, leaving a doctrinal gap. Existing precedent suggests the program operates in constitutionally suspect territory where no court has sanctioned the practice on the merits.",
      "LC": "Even under an evolving constitutional framework, the right to life is the most fundamental right from which all others flow. The expansion of executive killing authority without any judicial check represents a dangerous regression in constitutional protections. The living Constitution demands more process, not less, when the government takes the ultimate action of ending a citizen's life.",
      "PR": "Drone strikes eliminated high-value targets who posed genuine threats, and al-Awlaki was actively recruiting for attacks against Americans. The impracticality of arrest in Yemen's ungoverned spaces created a genuine security dilemma. However, the precedent of unchecked executive killing authority creates long-term institutional risks that outweigh short-term security gains.",
      "SM": "The AUMF authorized all necessary force against those who planned or aided the 9/11 attacks and associated forces. Al-Awlaki was an operational leader of AQAP actively directing plots against the U.S. homeland. The Commander-in-Chief authority, combined with Congressional authorization, permits targeting enemy combatants on the battlefield, and the battlefield extends to where the enemy operates."
    }
  },
  {
    "id": "iran-nuclear-deal",
    "title": "Iran Nuclear Agreement (JCPOA)",
    "date": "2015-07-14",
    "type": "Executive Agreement",
    "admin": "Obama",
    "desc": "Entered a multilateral nuclear agreement with Iran as an executive agreement rather than a Senate-ratified treaty, lifting sanctions in exchange for nuclear restrictions.",
    "brief": "The Joint Comprehensive Plan of Action (JCPOA) was a multilateral agreement between Iran and six world powers that restricted Iran's nuclear program in exchange for sanctions relief. Rather than submitting the deal as a treaty requiring two-thirds Senate approval under Article II, the Obama administration structured it as an executive agreement. Critics argued that an agreement of this magnitude and duration—affecting national security, international commitments, and sanctions regimes—constitutionally required Senate advice and consent under the Treaty Clause. Congress passed the Iran Nuclear Agreement Review Act (Corker-Cardin), creating a review mechanism but ultimately failing to block the deal. The episode highlighted longstanding tensions between the growing use of executive agreements and the Treaty Clause's original design.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "Article II, Section 2 states the President \"shall have Power, by and with the Advice and Consent of the Senate, to make Treaties, provided two thirds of the Senators present concur.\" The JCPOA imposed binding international commitments on nuclear policy and sanctions relief, functionally operating as a treaty while circumventing the Treaty Clause. The text does not distinguish between \"important\" and \"unimportant\" international agreements.",
      "OR": "The Founders specifically required Senate supermajority approval for treaties to prevent the executive from unilaterally binding the nation to foreign powers. The original understanding was that significant international commitments—especially those affecting war and peace—required the deliberative check of the Senate. The JCPOA's scope and significance clearly fit within what the Founders would have considered treaty-worthy.",
      "DC": "The Supreme Court has long recognized executive agreements as constitutionally valid (Dames & Moore v. Regan, United States v. Pink), but these cases involved narrower agreements or congressional-executive agreements with majority support. The JCPOA pushed beyond established precedent by structuring a major multilateral security agreement to avoid Senate ratification, stretching the doctrine of executive agreements.",
      "LC": "International cooperation to prevent nuclear proliferation serves the Constitution's commitment to common defense and general welfare. The rigid treaty requirement can impede necessary diplomatic flexibility in a complex modern world. The JCPOA's multilateral structure and Congressional review process provided democratic accountability even without formal treaty ratification.",
      "PR": "The JCPOA successfully froze Iran's nuclear program, extended breakout time from weeks to over a year, and established intrusive inspections. Senate dysfunction made treaty ratification practically impossible despite broad international support. The practical outcome—preventing a nuclear-armed Iran—served core national security interests regardless of the procedural vehicle.",
      "SM": "Presidents have made thousands of executive agreements throughout American history, and the practice is well-established constitutionally. Congress was given a review mechanism through Corker-Cardin and chose not to block the deal. The agreement was structured to be reversible precisely because it was not a treaty, preserving future presidential flexibility."
    }
  },
  {
    "id": "transgender-federal-protections",
    "title": "Prohibiting Anti-LGBT Discrimination by Federal Contractors",
    "date": "2014-07-21",
    "type": "Executive Order 13672",
    "admin": "Obama",
    "desc": "Extended non-discrimination protections to LGBT employees of federal contractors and the federal workforce.",
    "brief": "Executive Order 13672 amended two earlier executive orders to add sexual orientation and gender identity to the list of protected categories for federal employees and federal contractors. The order relied on the President's authority over federal procurement and the federal workforce rather than creating new statutory rights. Its constitutional footprint was relatively modest since it operated within the executive branch's existing authority over its own employment and contracting. Some religious organizations argued the order burdened their free exercise rights by requiring compliance as a condition of federal contracts, and sought but did not receive a broad religious exemption. The order raised minor First Amendment tensions between non-discrimination principles and religious liberty but largely stayed within recognized executive authority.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "DP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The Constitution does not mention sexual orientation or gender identity, and the Fourteenth Amendment's equal protection text refers to \"persons\" without specifying protected categories. The President has recognized authority over federal employment terms and procurement conditions. The order is constitutionally permissible as an exercise of executive management authority, though it goes beyond what the text explicitly requires.",
      "OR": "The original understanding of equal protection did not encompass sexual orientation or gender identity classifications. However, the President's authority over federal employment conditions has been recognized since the Founding. The order does not compel private conduct beyond the government contracting context, limiting its constitutional reach.",
      "DC": "Rutan v. Republican Party (1990) affirmed executive authority over federal employment conditions. Bostock v. Clayton County (2020) later confirmed Title VII covers sexual orientation and gender identity, retroactively supporting the order's substance. The procurement authority basis is well-established in precedent.",
      "LC": "Equal protection is an evolving principle that now encompasses sexual orientation and gender identity discrimination. The Constitution's commitment to equality demands that the federal government lead by example in eliminating discrimination. This order advanced the arc of equal protection toward fuller inclusion.",
      "PR": "Non-discrimination policies improve workforce quality by expanding the talent pool and reducing turnover among LGBT employees. Federal contractors serve diverse populations and benefit from inclusive workplaces. The narrow scope—limited to federal employment and contracting—made it a practical, low-disruption measure.",
      "SM": "The President has well-established authority to set conditions for federal employment and procurement. Requiring non-discrimination by government contractors ensures taxpayer funds are not used to subsidize discrimination. The order includes existing religious exemptions from prior executive orders, balancing equality and liberty interests."
    }
  },
  {
    "id": "net-neutrality",
    "title": "Net Neutrality Rules",
    "date": "2015-02-26",
    "type": "Executive/FCC Regulatory Action",
    "admin": "Obama",
    "desc": "The FCC reclassified broadband internet as a common carrier under Title II, imposing net neutrality rules after public pressure from President Obama.",
    "brief": "In November 2014, President Obama publicly called on the FCC to reclassify broadband internet under Title II of the Communications Act, treating it as a common carrier subject to net neutrality regulations. The FCC, an independent regulatory agency, adopted the rules in February 2015. The episode raised significant concerns about executive influence over independent agencies designed to be insulated from political pressure. While the FCC technically acted independently, Obama's unprecedented public pressure campaign blurred the line between executive direction and agency independence. The D.C. Circuit upheld the rules in United States Telecom Association v. FCC (2016), but the constitutional tension centered on whether the President effectively directed an independent agency's rulemaking and whether the Communications Act authorized reclassification of internet services.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The Communications Act of 1934 was written for telephone monopolies, not the modern internet. Reclassifying broadband as a Title II common carrier stretches the statutory text beyond its plain meaning. Additionally, the FCC is structured as an independent agency, and the President's public lobbying campaign undermined the textual independence Congress established for the commission.",
      "OR": "The Founders separated powers to prevent any single branch from dominating policy. Independent agencies were designed to exercise delegated legislative power free from executive control. The President's public pressure on the FCC departed from the original understanding of agency independence and concentrated regulatory power in the executive.",
      "DC": "The D.C. Circuit upheld the reclassification in US Telecom v. FCC (2016), finding the FCC had statutory authority under Brand X to reclassify broadband. However, Humphrey's Executor established that independent agencies must be free from presidential control. The tension between these doctrines was left unresolved. West Virginia v. EPA (2022) later suggested the major questions doctrine might have applied.",
      "LC": "The internet is the modern public square, and ensuring equal access serves democratic participation and free expression. The Constitution's commitment to democratic governance requires that essential communications infrastructure remain open and non-discriminatory. Net neutrality protects the modern equivalent of the public forum.",
      "PR": "Net neutrality prevented ISPs from creating fast lanes for wealthy content providers and throttling competitors. Small businesses, startups, and marginalized communities depended on an open internet for economic opportunity. The rules addressed a genuine market failure in a sector with limited competition.",
      "SM": "The FCC has broad authority to regulate communications in the public interest. Title II classification was within the agency's statutory discretion as affirmed by Brand X. The President's public statements were advocacy, not direction—the FCC independently deliberated and voted. The reclassification was a reasonable exercise of existing regulatory authority."
    }
  },
  {
    "id": "waters-of-us-rule",
    "title": "Waters of the United States Rule",
    "date": "2015-05-27",
    "type": "Executive/EPA-Army Corps Rule",
    "admin": "Obama",
    "desc": "Expanded federal jurisdiction over smaller waterways and wetlands under the Clean Water Act through a broad redefinition of \"waters of the United States.\"",
    "brief": "The EPA and Army Corps of Engineers issued a rule broadly redefining \"waters of the United States\" under the Clean Water Act to extend federal regulatory jurisdiction to smaller streams, tributaries, and wetlands with a \"significant nexus\" to navigable waters. The rule was intended to clarify ambiguous Supreme Court rulings in SWANCC (2001) and Rapanos (2006) but instead significantly expanded federal authority over land use traditionally regulated by states. Twenty-seven states challenged the rule, and multiple courts blocked its implementation. The rule raised serious federalism concerns under the Tenth Amendment, as it extended federal control deep into state and private land use decisions. In Sackett v. EPA (2023), the Supreme Court ultimately adopted a narrower standard, requiring a continuous surface connection to navigable waters, rejecting the significant nexus test.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "The Clean Water Act authorizes regulation of \"navigable waters,\" defined as \"waters of the United States.\" The textual meaning of \"navigable\" implies waters used for interstate commerce, not every ditch and ephemeral stream. The rule stretched the statutory text far beyond its plain meaning, and the Commerce Clause does not support federal jurisdiction over isolated wetlands with tenuous connections to navigable waters.",
      "OR": "The original constitutional design reserved police power over land use to the states. The Commerce Clause was understood to cover interstate navigation and trade, not local land and water management. The Founders' federalism envisioned strong state authority over local resources, and this rule represents the kind of federal overreach the Tenth Amendment was designed to prevent.",
      "DC": "The Supreme Court fractured in Rapanos v. United States (2006), with Justice Kennedy's \"significant nexus\" test and the plurality's narrower standard both having doctrinal weight. The rule adopted Kennedy's broader test, but Sackett v. EPA (2023) ultimately rejected it in favor of continuous surface connection. The rule's legal basis was doctrinally contested and ultimately overturned.",
      "LC": "Clean water is essential to public health and ecological sustainability, and environmental degradation disproportionately affects disadvantaged communities. The Constitution's commitment to general welfare supports broad federal authority to protect interconnected water systems that do not respect state boundaries. Scientific understanding of hydrology supports treating watersheds as integrated systems.",
      "PR": "Water systems are ecologically interconnected—upstream pollution flows downstream regardless of jurisdictional boundaries. Without federal oversight, a race to the bottom in state environmental regulation would degrade water quality nationally. However, the rule's breadth created compliance burdens for farmers and landowners that undermined practical implementation and political sustainability.",
      "SM": "The Clean Water Act grants the EPA broad authority to protect water quality, and science demonstrates that tributaries and wetlands are hydrologically connected to navigable waters. The rule clarified ambiguous Supreme Court precedent to provide regulatory certainty. Federal jurisdiction is necessary because water pollution is inherently interstate in nature, making state-only regulation inadequate."
    }
  },
  {
    "id": "china-trade-tariffs",
    "title": "Section 301 China Trade Tariffs",
    "date": "2018-03-22",
    "type": "Presidential Memorandum/Section 301",
    "admin": "Trump I",
    "desc": "Imposed tariffs on over $250 billion of Chinese imports using Section 301 trade authority, citing unfair trade practices and intellectual property theft.",
    "brief": "President Trump directed the U.S. Trade Representative to impose tariffs on Chinese goods following a Section 301 investigation into China's intellectual property practices. The tariffs ultimately covered over $250 billion in imports at rates up to 25%. While the President has delegated tariff authority under the Trade Act of 1974, the unprecedented scale of these tariffs raised questions about whether Congress's Article I power to \"regulate Commerce with foreign Nations\" and \"lay and collect...Duties\" had been improperly delegated to the executive. Courts largely upheld the tariffs under existing trade statutes, with the Court of International Trade finding proper statutory authority. The action highlighted the tension between Congress's constitutional tariff power and the broad trade authority it has delegated to the President over decades, effectively allowing one person to reshape billions in trade flows.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "Article I, Section 8 grants Congress the power to regulate foreign commerce and lay duties. Section 301 of the Trade Act delegated significant tariff authority to the President, but the text of the Constitution places this power with Congress. The unprecedented scale—$250 billion in tariffs imposed unilaterally—tests whether the delegation has effectively transferred a core legislative power to the executive branch.",
      "OR": "The Founders placed tariff authority squarely with Congress because tariffs were the primary revenue source and a major policy tool. The original design ensured that trade policy reflected the will of the people's representatives, not a single executive. Broad delegations of tariff authority over the past century have departed from this original allocation of power.",
      "DC": "Courts have consistently upheld broad delegations of trade authority to the President under the non-delegation doctrine (J.W. Hampton Jr. & Co. v. United States). The Court of International Trade upheld the Section 301 tariffs as within statutory authority. Doctrinally, the tariffs operate on firm legal ground, though the revival of non-delegation concerns in recent Supreme Court opinions could change this analysis.",
      "LC": "Tariffs function as a regressive tax that disproportionately burdens lower-income consumers who spend a larger share of income on imported goods. The constitutional commitment to equality and general welfare counsels against trade policies that increase costs for ordinary Americans while benefiting narrow industries. Concentrated executive trade authority lacks sufficient democratic accountability.",
      "PR": "China's intellectual property theft and forced technology transfer posed genuine threats to American economic competitiveness. However, tariffs imposed significant costs on American consumers and businesses ($46 billion annually according to studies), disrupted supply chains, and triggered retaliatory tariffs that hurt American farmers. The practical costs may have outweighed the strategic benefits.",
      "SM": "Congress specifically delegated Section 301 authority to address unfair foreign trade practices. China's systematic IP theft, forced technology transfers, and trade barriers justified strong action. The President used established statutory tools for their intended purpose, and the scale was proportionate to the magnitude of China's trade violations, which cost American businesses hundreds of billions annually."
    }
  },
  {
    "id": "jerusalem-embassy",
    "title": "Jerusalem Embassy Recognition",
    "date": "2017-12-06",
    "type": "Presidential Proclamation",
    "admin": "Trump I",
    "desc": "Recognized Jerusalem as the capital of Israel and directed the relocation of the U.S. Embassy from Tel Aviv.",
    "brief": "President Trump issued a proclamation recognizing Jerusalem as Israel's capital and directing the State Department to begin relocating the U.S. Embassy from Tel Aviv. Congress had passed the Jerusalem Embassy Act in 1995 requiring the move, but every subsequent president had exercised the act's waiver provision, deferring relocation on national security grounds. The recognition was squarely within the President's constitutional authority over foreign affairs recognition, as confirmed by Zivotofsky v. Kerry (2015), which held the President has exclusive power to recognize foreign sovereigns. However, reversing decades of bipartisan diplomatic consensus without Congressional consultation raised questions about the prudential limits of unilateral executive action on sensitive geopolitical matters. The proclamation had a relatively modest constitutional footprint since recognition power is well-established as presidential.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The Constitution grants the President power to receive ambassadors (Article II, Section 3), which has been understood to include recognition authority. The proclamation exercised this textual grant of power. Congress had also passed the Jerusalem Embassy Act of 1995, providing statutory support. The action aligns with constitutional text and legislative direction.",
      "OR": "The Founders vested recognition power exclusively in the President as part of the executive's foreign affairs authority. Washington established the precedent of unilateral recognition decisions. The original design contemplated that the President would exercise independent judgment on diplomatic recognition without requiring Congressional concurrence.",
      "DC": "Zivotofsky v. Kerry (2015) explicitly held that the recognition power belongs exclusively to the President, even striking down a Congressional statute that attempted to direct recognition policy. This proclamation sits on the strongest possible doctrinal foundation—a recent Supreme Court decision affirming the precise power being exercised. The Jerusalem Embassy Act provided additional Congressional support.",
      "LC": "While the recognition power is presidential, unilateral reversal of decades of bipartisan diplomatic consensus without broader consultation raises concerns about democratic deliberation on matters affecting peace and stability. The living Constitution values inclusive decision-making on actions with far-reaching consequences for affected populations.",
      "PR": "The recognition aligned U.S. policy with the reality that Jerusalem functions as Israel's capital, hosting its government institutions. However, it complicated peace negotiations by prejudging a final-status issue and provoked regional instability. The practical diplomatic costs, including damage to the U.S. role as an honest broker, were significant.",
      "SM": "The President exercised his exclusive constitutional recognition power, implementing a Congressional mandate from 1995 that three prior presidents had deferred. The action brought U.S. policy in line with reality and Congressional intent. The proclamation explicitly stated it did not prejudge final-status issues including Jerusalem's boundaries, preserving space for negotiations."
    }
  },
  {
    "id": "energy-independence",
    "title": "Promoting Energy Independence and Economic Growth",
    "date": "2017-03-28",
    "type": "Executive Order 13783",
    "admin": "Trump I",
    "desc": "Reversed Obama-era climate policies, lifted the coal leasing moratorium, and directed review of the Clean Power Plan.",
    "brief": "Executive Order 13783 directed federal agencies to review and potentially rescind Obama-era climate and environmental regulations, lifted the moratorium on federal coal leasing, and rescinded several climate-related presidential actions. The order directed the EPA to review the Clean Power Plan and other regulations deemed to burden domestic energy production. While presidents have authority to direct regulatory review, the order raised concerns about whether agencies could lawfully reverse established rules without following the Administrative Procedure Act's notice-and-comment requirements. The APA requires that rule changes be supported by reasoned decision-making, not merely political preference. The order also raised questions about whether directing agencies to prioritize energy production over environmental protection conflicted with statutory mandates under the Clean Air Act.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "The President has authority to direct executive agencies to review regulations and set policy priorities. The text of Article II grants supervisory power over the executive branch. However, the Clean Air Act textually mandates that the EPA regulate pollutants endangering public health, creating a tension between presidential directive authority and statutory obligations that agencies cannot simply ignore.",
      "OR": "The original design gave Congress the power to legislate and the President the power to execute laws faithfully. Directing agencies to reconsider regulations is within executive authority, but the Founders' understanding of \"faithful execution\" did not include directing agencies to disregard statutory mandates. The proper remedy for disagreement with environmental laws is legislative repeal, not executive nullification.",
      "DC": "Motor Vehicle Manufacturers Association v. State Farm (1983) established that agencies cannot arbitrarily rescind rules—they must provide reasoned explanations for policy changes. FCC v. Fox Television (2009) allows policy reversals but requires acknowledgment of the change and reasoned justification. Simply directing deregulation without following APA procedures risks arbitrary and capricious action.",
      "LC": "Climate change poses existential threats to human welfare, environmental justice, and intergenerational equity. Rolling back environmental protections disproportionately harms vulnerable communities already bearing the greatest pollution burden. The Constitution's commitment to general welfare and equal protection demands forward progress on environmental protection, not regression.",
      "PR": "While energy production supports economic growth and energy security, climate change imposes massive long-term costs. The economic case for deregulation was weakened by the declining cost of renewables, which were already more competitive than coal. Pragmatically, the order attempted to revive an industry in structural decline while imposing long-term environmental costs.",
      "SM": "The President has legitimate authority to set energy policy priorities for the executive branch and to direct regulatory review. Excessive regulation imposes real costs on energy producers and consumers, and balancing environmental and economic goals is a valid executive function. The order directed review, not automatic rescission, preserving the agencies' ability to make reasoned decisions through proper procedures."
    }
  },
  {
    "id": "religious-liberty",
    "title": "Promoting Free Speech and Religious Liberty",
    "date": "2017-05-04",
    "type": "Executive Order 13798",
    "admin": "Trump I",
    "desc": "Directed agencies to relax enforcement of the Johnson Amendment and expand religious liberty protections, raising Establishment Clause concerns.",
    "brief": "Executive Order 13798 directed the IRS not to take adverse action against religious organizations for political speech that would not result in enforcement against secular organizations, effectively relaxing enforcement of the Johnson Amendment. It also directed agencies to consider issuing amended regulations to address conscience-based objections to the ACA contraceptive mandate. The order raised Establishment Clause concerns because it specifically singled out religious organizations for favorable treatment, potentially violating the neutrality principle established in Lemon v. Kurtzman. Critics argued the order created a preference for religion over non-religion. Defenders contended it merely restored First Amendment free exercise protections. The tension between the Free Exercise Clause and the Establishment Clause was central to the constitutional debate.",
    "scores": {
      "TX": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The First Amendment protects both free exercise of religion and prohibits establishment of religion. The order's text directs enforcement discretion in favor of religious speech, which aligns with the Free Exercise Clause but creates tension with the Establishment Clause's prohibition on government favoritism toward religion. The Johnson Amendment itself is a statutory provision, and directing non-enforcement raises Take Care Clause questions.",
      "OR": "The Founders deeply valued religious liberty and understood the Free Exercise Clause to provide robust protection for religious practice and expression. However, the original understanding of the Establishment Clause also prohibited government actions that preferred religion over non-religion. The order's specific singling out of religious organizations for favorable enforcement treatment is in tension with the Founders' commitment to neutrality.",
      "DC": "Lemon v. Kurtzman (1971) established that government actions must have a secular purpose, not advance or inhibit religion, and avoid excessive entanglement. While the test has been modified by American Legion v. American Humanist Association (2019), the principle of government neutrality toward religion persists. Selectively relaxing enforcement for religious organizations may violate neutrality principles, though Masterpiece Cakeshop and Fulton v. City of Philadelphia have expanded free exercise protections.",
      "LC": "Religious liberty must be balanced against equality and non-discrimination. Broad religious exemptions can harm third parties—particularly women and LGBT individuals—who depend on non-discrimination protections. The evolving constitutional commitment to equality means religious liberty cannot be used as a license to discriminate in the public sphere.",
      "PR": "The Johnson Amendment has been minimally enforced for decades, making the order largely symbolic. However, weakening the wall between religious institutions and partisan politics risks corrupting both religion and governance. The practical effect of broad religious exemptions is to create a two-tier system where some organizations are exempt from rules that bind everyone else.",
      "SM": "The First Amendment protects religious speech, and the Johnson Amendment's restriction on political activity by churches burdens that speech. Directing even-handed enforcement—ensuring religious groups are not targeted more aggressively than secular ones—restores constitutional balance. The order does not eliminate the Johnson Amendment but ensures it is not selectively enforced against religious communities."
    }
  },
  {
    "id": "buy-american-hire-american",
    "title": "Buy American and Hire American",
    "date": "2017-04-18",
    "type": "Executive Order 13788",
    "admin": "Trump I",
    "desc": "Tightened H-1B visa requirements and strengthened Buy American provisions for federal procurement contracts.",
    "brief": "Executive Order 13788 directed agencies to strengthen enforcement of Buy American laws in federal procurement and to propose reforms to the H-1B visa program to protect American workers. The order operated within established executive authority over both federal procurement and immigration enforcement. Buy American requirements have existed since the Buy American Act of 1933, and the President has recognized authority to set procurement preferences. The H-1B provisions directed agencies to enforce existing statutory requirements more rigorously rather than creating new categories. The constitutional footprint was relatively modest since the order worked within existing statutory frameworks and delegated authorities. Some concerns were raised about arbitrary changes to administrative processes affecting businesses that relied on existing rules, touching on due process considerations.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The President has textual authority over federal procurement and immigration enforcement as head of the executive branch. The Buy American Act of 1933 and the Immigration and Nationality Act provide statutory bases for the order's directives. The order directs agencies to enforce existing law more vigorously rather than creating new legal requirements, keeping it within textual executive authority.",
      "OR": "The Founders envisioned the President as the chief executive responsible for faithfully executing the laws. Directing agencies to enforce existing procurement and immigration statutes is consistent with the original design. The order does not create new law but ensures existing Congressional mandates are effectively implemented.",
      "DC": "Executive authority over federal procurement is well-established (Youngstown Sheet & Tube Co. framework places this in Category 1, where the President acts with Congressional authorization). The H-1B program operates under broad statutory delegation to the executive. The order operates on solid doctrinal ground within recognized executive authorities.",
      "LC": "While protecting American workers is a legitimate goal, tightened immigration restrictions can harm immigrants and their families who contribute to American society. The equal protection principle counsels against policies that disproportionately affect people based on national origin. Economic nationalism must be balanced against the Constitution's inclusive vision.",
      "PR": "Buy American provisions increase procurement costs and can reduce competition, while H-1B restrictions in a tight labor market can harm industries facing worker shortages, particularly in technology and healthcare. The pragmatic effects depend on implementation details—overly rigid application could increase costs for taxpayers and reduce American competitiveness in sectors that depend on global talent.",
      "SM": "The President has a duty to ensure federal dollars support American workers and businesses. Strengthening enforcement of existing Buy American laws and ensuring H-1B visas serve their intended purpose of filling genuine labor gaps—rather than displacing qualified American workers—is responsible governance. The order works within established statutory frameworks to better achieve Congressional intent."
    }
  },
  {
    "id": "iran-jcpoa-withdrawal",
    "title": "Withdrawal from Iran Nuclear Deal (JCPOA)",
    "date": "2018-05-08",
    "type": "Presidential Memorandum",
    "admin": "Trump I",
    "desc": "Unilaterally withdrew from the Iran nuclear agreement and reimposed economic sanctions on Iran.",
    "brief": "President Trump announced U.S. withdrawal from the JCPOA and directed the reimposition of all sanctions that had been lifted under the agreement. Since the JCPOA was structured as an executive agreement rather than a Senate-ratified treaty, the withdrawal was within presidential authority—a president can generally reverse a predecessor's executive agreements. However, the withdrawal raised significant questions about the credibility and durability of American international commitments when any subsequent president can reverse course. The episode illustrated the constitutional consequences of bypassing the Treaty Clause: executive agreements are easier to make but also easier to unmake, creating instability in foreign relations. The withdrawal also demonstrated how the structural choice between treaty and executive agreement can have profound policy consequences, as Senate ratification would have made withdrawal far more difficult.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The JCPOA was structured as an executive agreement, not a treaty ratified under Article II. The text of the Constitution does not address withdrawal from executive agreements, but since the President made the agreement, the President can unmake it. The withdrawal is textually permissible precisely because the agreement was never submitted for Senate ratification—the same structural choice that made it constitutionally questionable in the first place.",
      "OR": "The Founders established the Treaty Clause to ensure that significant international commitments had durable democratic support through Senate supermajority approval. The JCPOA's reversal demonstrates exactly why the Founders required treaties for major agreements—executive agreements lack the democratic foundation needed for stable foreign policy. The withdrawal, while legally permissible, validates originalist concerns about overuse of executive agreements.",
      "DC": "No court has held that a president cannot withdraw from a predecessor's executive agreement. Goldwater v. Carter (1979) addressed treaty termination and was resolved on justiciability grounds without clear precedent. The withdrawal operates in a doctrinal space where presidential authority is largely unchecked by courts, highlighting the limited judicial role in foreign affairs.",
      "LC": "International cooperation to prevent nuclear proliferation serves evolving security needs and the general welfare of humanity. Unilateral withdrawal from a functioning multilateral agreement undermines the cooperative international order needed to address modern threats. The living Constitution demands institutional arrangements that promote peace and stability, not instability.",
      "PR": "After withdrawal, Iran resumed enriching uranium to higher levels and reduced cooperation with IAEA inspectors, shortening its nuclear breakout time from over a year to weeks. The reimposed sanctions failed to produce a better deal. Pragmatically, the withdrawal weakened nonproliferation efforts and damaged U.S. credibility in international negotiations, making future agreements harder to achieve.",
      "SM": "The JCPOA had critical flaws—sunset provisions allowed Iran to resume enrichment, ballistic missile development was unaddressed, and verification was imperfect. The President has authority to reassess executive agreements that no longer serve national interests. Withdrawal and maximum pressure was a strategy to negotiate a more comprehensive agreement addressing all of Iran's threatening activities."
    }
  },
  {
    "id": "census-citizenship-question",
    "title": "Census Citizenship Question",
    "date": "2018-12-28",
    "type": "Commerce Department Directive",
    "admin": "Trump I",
    "desc": "Directed adding a citizenship question to the 2020 Census, which the Supreme Court blocked after finding the stated rationale was pretextual.",
    "brief": "The Commerce Department directed the Census Bureau to add a citizenship question to the 2020 Census, ostensibly to improve enforcement of the Voting Rights Act. In Department of Commerce v. New York (2019), the Supreme Court ruled 5-4 that while the Commerce Secretary had the legal authority to add such a question, the Voting Rights Act rationale was \"pretextual\"—a contrived justification that violated the Administrative Procedure Act's requirement of reasoned decision-making. The decision was remarkable for the Court finding that a Cabinet secretary had lied about the reason for a policy. The case raised due process concerns about arbitrary government action, equal protection concerns about disproportionate impact on minority communities who would be deterred from responding, and Enumeration Clause concerns about whether the question would undermine the constitutional mandate for an \"actual enumeration\" of all persons.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "Article I, Section 2 mandates an \"actual Enumeration\" of all persons, not just citizens. Adding a question that deters non-citizen response undermines the textual requirement for a complete count. The Enumeration Clause specifically counts \"persons,\" deliberately chosen over \"citizens,\" to ensure complete population data for apportionment. A question that suppresses response rates among non-citizens violates the plain text.",
      "OR": "The Founders debated census methodology extensively and chose to count all \"persons\" for apportionment, including enslaved people (at the three-fifths ratio). The original understanding was that the census must capture the total population for representative government to function. Actions that systematically undercount certain populations undermine the Founders' design for proportional representation.",
      "DC": "The Supreme Court in Department of Commerce v. New York (2019) found the VRA rationale pretextual, violating the APA's requirement of reasoned agency action. The Court held that while the Secretary had statutory authority to add questions, the contrived justification failed arbitrary-and-capricious review. This landmark ruling established that courts can look behind pretextual agency rationales, strengthening due process constraints on executive discretion.",
      "LC": "The citizenship question was designed to suppress census participation among immigrant communities, undermining equal representation and the allocation of federal resources. This disproportionately harms communities of color and immigrants, violating the evolving constitutional commitment to equal protection and inclusive democracy. An accurate census is foundational to equal political representation.",
      "PR": "Census Bureau experts estimated the citizenship question would reduce response rates among non-citizen households by 5.8%, leading to a significant undercount. This would have distorted Congressional apportionment, federal funding allocation, and redistricting. The practical consequence was to reduce political power and resources for states and communities with large immigrant populations, regardless of citizenship status.",
      "SM": "The citizenship question appeared on the census for most of American history and is currently on the American Community Survey. Accurate citizenship data supports Voting Rights Act enforcement by identifying eligible voter populations. The Commerce Secretary has broad statutory authority over census content, and collecting citizenship data serves multiple legitimate governmental purposes including legislative redistricting."
    }
  },
  {
    "id": "deregulation-2for1",
    "title": "Two-for-One Regulatory Reform",
    "date": "2017-01-30",
    "type": "Executive Order 13771",
    "admin": "Trump I",
    "desc": "Required federal agencies to eliminate two existing regulations for every new regulation enacted, with a net zero incremental regulatory cost.",
    "brief": "Executive Order 13771 imposed a \"regulatory budget\" on federal agencies, requiring that for every new significant regulation issued, at least two existing regulations be identified for elimination, and that total incremental regulatory costs for the fiscal year be no greater than zero. The order raised questions about whether the executive could override Congressional regulatory mandates—when Congress directs an agency to regulate, an arbitrary requirement to eliminate two regulations may conflict with the agency's statutory obligations. Critics argued the order created an unconstitutional condition on the exercise of congressionally delegated power and could lead agencies to violate their statutory duties. The mechanical two-for-one formula bore no relationship to the merits of individual regulations, potentially forcing agencies to eliminate beneficial rules simply to satisfy an arbitrary numerical constraint.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "When Congress passes a statute directing an agency to regulate, the President cannot impose conditions that effectively prevent the agency from fulfilling its statutory mandate. The Take Care Clause requires faithful execution of the laws, not selective execution contingent on an arbitrary numerical formula. The two-for-one requirement has no textual basis in any statute and potentially conflicts with dozens of Congressional regulatory mandates.",
      "OR": "The Founders designed a system where Congress makes law and the President executes it. Imposing conditions on agency rulemaking that may prevent agencies from fulfilling statutory obligations inverts this relationship. The original understanding of executive power did not include the authority to override or condition Congressional directives to regulatory agencies through blanket executive orders.",
      "DC": "Courts have held that agencies cannot refuse to regulate when Congress has directed them to do so (Massachusetts v. EPA). The APA requires agencies to engage in reasoned decision-making based on statutory criteria, not arbitrary numerical constraints. If an agency eliminated a beneficial regulation solely to satisfy the two-for-one requirement, that action would likely be held arbitrary and capricious under State Farm.",
      "LC": "Regulations protect public health, safety, and the environment—values central to the Constitution's commitment to general welfare. An arbitrary deregulatory mandate that forces removal of protective regulations without regard to their benefits places economic costs above human welfare. The living Constitution demands that government retain the capacity to protect vulnerable populations from market failures.",
      "PR": "Regulatory accumulation is a real problem that increases compliance costs and can stifle innovation. However, a mechanical formula that ignores the benefits of regulations—only counting costs—leads to perverse outcomes. Some regulations produce benefits far exceeding their costs, and eliminating them simply to satisfy a numerical target is economically irrational and could increase net costs to society.",
      "SM": "The President has authority to manage the executive branch and set priorities for regulatory agencies. Regulatory accumulation imposes real costs on businesses and the economy, and the two-for-one requirement creates a disciplined framework for evaluating whether existing regulations remain necessary. The order encourages agencies to prioritize the most important regulations and eliminate outdated or duplicative ones, improving regulatory quality."
    }
  },
  {
    "id": "space-force",
    "title": "Establishment of United States Space Force",
    "date": "2019-02-19",
    "type": "Space Policy Directive 4",
    "admin": "Trump I",
    "desc": "Directed the establishment of a Space Force as the sixth branch of the U.S. military, later authorized by Congress in the 2020 NDAA.",
    "brief": "Space Policy Directive 4 directed the Department of Defense to establish the United States Space Force as a new armed service within the Department of the Air Force. The directive initially raised separation of powers questions because Article I, Section 8 grants Congress the power to \"raise and support Armies\" and to \"provide and maintain a Navy,\" suggesting that creating a new military branch requires legislative action. However, the constitutional concern was resolved when Congress formally established the Space Force through the National Defense Authorization Act for Fiscal Year 2020. The episode illustrates a healthy constitutional process: the executive proposed a military reorganization, and Congress exercised its constitutional prerogative to authorize it through legislation. The final result operated within proper constitutional channels despite the initial unilateral framing.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "Article I, Section 8 gives Congress the power to raise armies and provide for a navy. The creation of a new military branch is textually a legislative function. The initial directive raised textual concerns, but Congress's subsequent authorization through the NDAA resolved them. The final outcome respected the constitutional text by obtaining the required legislative approval.",
      "OR": "The Founders deliberately placed military organization under Congressional control to prevent executive military expansion. The original design required legislative authorization for new military forces. While the initial directive was constitutionally premature, the proper constitutional process was ultimately followed when Congress authorized the Space Force, consistent with the Founders' design.",
      "DC": "Congress has historically authorized military branch reorganizations through legislation (creating the Air Force in 1947, for example). The directive alone would have been constitutionally insufficient, but Congressional authorization through the NDAA placed the action in Youngstown Category 1—executive action with Congressional approval—the strongest constitutional position. The final process followed established institutional precedent.",
      "LC": "The creation of Space Force, once properly authorized by Congress, represents a reasonable adaptation of military structure to modern threats. The Constitution must evolve to address domains the Founders could not have anticipated, including space. The proper constitutional process was followed, with democratic deliberation and legislative authorization.",
      "PR": "Space is increasingly contested, with China and Russia developing anti-satellite capabilities. Centralizing space operations under a dedicated branch improves coordination, acquisition, and talent development. The Congressional authorization process ensured democratic accountability and proper resourcing. The pragmatic case for dedicated space operations management is strong given growing threats.",
      "SM": "The President, as Commander-in-Chief, identified an emerging national security need and proposed a structural solution. Congress reviewed the proposal through its regular legislative process and authorized the Space Force with bipartisan support. This represents the constitutional system working as designed—executive initiative followed by legislative deliberation and authorization, with proper democratic accountability."
    }
  },
  {
    "id": "gender-identity-protections",
    "title": "Preventing Discrimination Based on Gender Identity",
    "date": "2021-01-20",
    "type": "Executive Order 13988",
    "admin": "Biden",
    "desc": "Directed all federal agencies to apply Bostock v. Clayton County reasoning to prevent discrimination based on gender identity and sexual orientation across federal programs.",
    "brief": "On his first day in office, President Biden signed Executive Order 13988 directing every federal agency to review and revise its regulations to ensure protections against discrimination on the basis of gender identity and sexual orientation, applying the Supreme Court's reasoning in Bostock v. Clayton County (2020). The order's broad scope extended to education, healthcare, housing, and employment, raising concerns about potential conflicts with religious liberty and First Amendment free exercise protections. Constitutional tensions centered on whether executive reinterpretation of existing civil rights statutes across all federal programs exceeded the scope of Bostock's Title VII holding, and whether the order adequately accommodated religious objections under the Religious Freedom Restoration Act.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The text of Title VII and other civil rights statutes does not explicitly mention gender identity or sexual orientation. While Bostock interpreted \"because of sex\" to encompass these categories under Title VII, extending that reasoning across all federal statutes raises textual concerns, as each statute has distinct language and legislative history. Religious liberty protections in the First Amendment and RFRA create textual tension with blanket non-discrimination directives.",
      "OR": "The original public meaning of \"sex\" in the Civil Rights Act of 1964 referred to biological sex, not gender identity. The Founders' conception of religious liberty as a paramount right suggests caution in imposing government mandates that conflict with sincere religious beliefs. Extending Bostock beyond Title VII to all federal programs exceeds the original understanding of these statutes.",
      "DC": "Bostock v. Clayton County (2020) provides direct doctrinal support for interpreting sex discrimination to encompass gender identity and sexual orientation under Title VII. The order extends this reasoning to parallel statutory frameworks, which has doctrinal precedent in how courts have historically applied Title VII reasoning to Title IX and other civil rights statutes. However, Fulton v. City of Philadelphia (2021) reinforced religious exemption considerations.",
      "LC": "The Constitution's arc of expanding equality and dignity demands extending anti-discrimination protections to LGBTQ+ individuals across all federal programs. Gender identity discrimination represents a modern form of the sex-based discrimination the Equal Protection Clause was designed to eradicate. Executive action implementing evolving civil rights consciousness fulfills constitutional commitments to equal dignity.",
      "PR": "Evidence demonstrates that anti-discrimination protections for LGBTQ+ individuals reduce documented harms including employment discrimination, housing instability, and healthcare disparities. Peer democracies have implemented similar protections without significant institutional disruption. Pragmatic implementation requires balancing anti-discrimination mandates with religious accommodation frameworks to minimize social conflict.",
      "SM": "Bostock's holding that sex discrimination necessarily encompasses gender identity and sexual orientation applies with equal force across federal civil rights statutes sharing similar language. The President's authority to direct agency enforcement of existing law encompasses directing consistent interpretation of anti-discrimination mandates. Religious accommodations can be implemented through RFRA's existing framework without undermining core protections."
    }
  },
  {
    "id": "climate-crisis-action",
    "title": "Tackling the Climate Crisis at Home and Abroad",
    "date": "2021-01-27",
    "type": "Executive Order 14008",
    "admin": "Biden",
    "desc": "Established climate change as a national security priority, paused new oil and gas leases on federal lands, and created a White House environmental justice council.",
    "brief": "Executive Order 14008 was a sweeping climate directive that designated climate change as an essential element of national security and foreign policy, paused new oil and gas leasing on federal lands and offshore waters, established a White House Environmental Justice Council, and set a goal of conserving 30% of U.S. lands and waters by 2030. The order raised significant separation-of-powers questions about whether the executive branch could unilaterally reshape national energy policy without congressional authorization, particularly regarding the oil and gas lease moratorium. Federal courts in Louisiana partially blocked the lease pause, finding it likely exceeded executive authority under the Outer Continental Shelf Lands Act and the Mineral Leasing Act, which mandate regular lease sales.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "The Mineral Leasing Act and Outer Continental Shelf Lands Act mandate periodic lease sales; a blanket pause conflicts with these statutory directives. While the President has discretion over federal land management, the text of these statutes creates affirmative obligations that the executive cannot unilaterally suspend. The Property Clause grants Congress, not the President, primary authority over federal lands.",
      "OR": "The Founders vested control over federal property and natural resources in Congress through the Property Clause. Energy policy affecting the national economy falls within congressional authority over commerce and public lands. Executive orders reshaping industrial policy without legislation represent a modern expansion of executive power inconsistent with the original constitutional design.",
      "DC": "Louisiana v. Biden partially enjoined the lease moratorium, finding the executive likely exceeded statutory authority. The major questions doctrine applies to executive actions of vast economic and political significance. Federal land management statutes create mandatory lease sale schedules that constrain executive discretion, though the President retains significant authority over environmental review processes.",
      "LC": "Climate change poses existential threats to future generations, implicating evolving constitutional values of intergenerational justice and environmental welfare. The Constitution must adapt to address planetary-scale crises the Founders could not have anticipated. Executive leadership on climate reflects constitutional commitments to general welfare and securing liberty for posterity.",
      "PR": "Scientific consensus confirms climate change as the defining challenge of this era. Peer nations have implemented comparable climate policies. The economic costs of inaction vastly exceed transition costs. However, unilateral executive action without legislative buy-in creates policy instability across administrations, undermining long-term planning.",
      "SM": "The President's broad authority over national security, foreign affairs, and federal land management provides constitutional foundation for comprehensive climate action. Designating climate as a national security priority falls within established executive prerogative. The lease pause represents a temporary review period within executive management discretion, not a permanent policy change requiring legislation."
    }
  },
  {
    "id": "voting-access",
    "title": "Promoting Access to Voting",
    "date": "2021-03-07",
    "type": "Executive Order 14019",
    "admin": "Biden",
    "desc": "Directed federal agencies to expand voter registration and access, including using federal facilities and resources to promote voter participation.",
    "brief": "Executive Order 14019 directed federal agencies to develop plans to promote voter registration and participation, including making federal facilities available for registration, providing voting information to federal employees and beneficiaries, and improving access for underserved communities. Critics argued the order improperly enlisted federal agencies in what amounts to a partisan voter mobilization effort, since the demographics served by federal programs skew toward certain political preferences. The order raised federalism concerns because the Elections Clause grants primary authority over election administration to state legislatures, and using federal agencies to effectively conduct voter registration campaigns could be seen as federal intrusion into state-administered election systems.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "The Elections Clause vests authority over the \"Times, Places, and Manner\" of elections in state legislatures, with Congress retaining override authority. The text does not grant the executive branch a role in voter registration campaigns. Using federal agencies to promote voter registration raises concerns about executive overreach into state-administered electoral processes and potential violations of the Hatch Act's restrictions on political activities by federal employees.",
      "OR": "The Founders entrusted election administration to state legislatures as a check on centralized federal power. The original constitutional design reflected deep suspicion of federal involvement in state elections. Using federal agencies as voter registration infrastructure represents a modern expansion of executive power into domains the Founders reserved to the states.",
      "DC": "The National Voter Registration Act (NVRA) provides some statutory basis for federal voter registration activities through motor voter provisions and agency-based registration. The order operates within existing statutory frameworks rather than creating new authority. However, the scope of agency involvement goes beyond established NVRA practices, and the lack of transparency about agency plans raised concerns about potential partisan application.",
      "LC": "The Fifteenth, Nineteenth, Twenty-Fourth, and Twenty-Sixth Amendments collectively reflect an evolving constitutional commitment to expanding the franchise. Voter access is a fundamental democratic right, and government has an affirmative obligation to remove barriers to participation. Federal agencies promoting voter registration advance the Constitution's deepening commitment to democratic inclusion.",
      "PR": "Higher voter participation strengthens democratic legitimacy. Evidence from peer democracies demonstrates that government-facilitated registration increases turnout without partisan advantage. Practical governance supports removing administrative barriers to voting, though implementation must ensure nonpartisan execution to maintain public trust in electoral processes.",
      "SM": "The President's authority to direct federal agencies encompasses administrative measures that facilitate citizen participation in democratic governance. The NVRA specifically contemplates agency-based voter registration. Promoting voter access is a nonpartisan governmental function that strengthens democratic accountability and fulfills constitutional commitments to representative government."
    }
  },
  {
    "id": "promoting-competition",
    "title": "Promoting Competition in the American Economy",
    "date": "2021-07-09",
    "type": "Executive Order 14036",
    "admin": "Biden",
    "desc": "Launched 72 initiatives across federal agencies to promote economic competition, targeting monopolistic practices in technology, healthcare, agriculture, and labor markets.",
    "brief": "Executive Order 14036 directed over a dozen federal agencies to pursue 72 specific initiatives targeting anti-competitive practices, including promoting right-to-repair, restricting non-compete agreements, increasing healthcare price transparency, and addressing consolidation in agriculture and technology markets. While many initiatives fell within existing agency authority under antitrust and consumer protection statutes, the order's sweeping scope raised questions about whether the executive branch can effectively direct such comprehensive economic policy without new legislation. The constitutional significance centered on whether the order represented legitimate coordination of existing agency authority or constituted executive-driven industrial policy that should originate in Congress.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "Most of the 72 initiatives direct agencies to use existing statutory authority under the Sherman Act, Clayton Act, and FTC Act. The text of these statutes supports agency action against anti-competitive practices. However, the comprehensive scope of the order, touching nearly every sector of the economy, raises questions about whether the executive is directing policy priorities that should be set by Congress through new legislation rather than reinterpreted through existing frameworks.",
      "OR": "The Founders understood the dangers of concentrated economic power and supported competitive markets. However, the original constitutional design placed regulation of commerce in Congress, not the executive branch. Directing 72 agency-specific competition initiatives through executive order represents a centralization of economic policymaking that the Founders' separation-of-powers framework was designed to prevent.",
      "DC": "Antitrust law provides extensive doctrinal support for federal competition enforcement. The FTC and DOJ have longstanding authority to pursue anti-competitive conduct. The order largely directs agencies to prioritize enforcement within existing statutory mandates, which falls within recognized executive enforcement discretion. Individual initiatives may face doctrinal challenges depending on their specific statutory basis.",
      "LC": "Economic concentration threatens democratic governance and individual liberty by concentrating power in private hands. Constitutional values of equal opportunity and general welfare support vigorous competition enforcement. The order advances constitutional commitments to preventing private accumulations of power that undermine democratic self-governance and economic opportunity.",
      "PR": "Evidence demonstrates that market concentration has increased across multiple sectors, reducing consumer welfare and worker bargaining power. Peer economies with stronger competition enforcement show better outcomes for consumers and workers. Coordinated agency action is a practical approach to addressing economy-wide competition concerns that individual enforcement actions cannot address.",
      "SM": "The President's authority to direct executive agencies to prioritize enforcement encompasses setting competition policy priorities across government. Each initiative draws on existing statutory authority delegated by Congress to specific agencies. Coordinated executive direction improves the coherence and effectiveness of the federal government's competition enforcement mission."
    }
  },
  {
    "id": "policing-reform",
    "title": "Advancing Accountable Policing and Criminal Justice Practices",
    "date": "2022-05-25",
    "type": "Executive Order 14074",
    "admin": "Biden",
    "desc": "Restricted federal use of chokeholds and no-knock warrants, and created a national police accountability database for federal law enforcement.",
    "brief": "Issued on the second anniversary of George Floyd's murder, Executive Order 14074 banned the use of chokeholds and carotid restraints by federal law enforcement, restricted no-knock warrants, mandated body-worn cameras, and created a National Law Enforcement Accountability Database. The order applied directly only to federal agencies but also used federal grant conditions to incentivize state and local adoption of similar standards. The primary constitutional tensions involved federalism and the Spending Clause: while the federal government can set standards for its own officers, conditioning federal grants on policing reform standards for state and local departments raised questions about coercive federalism under South Dakota v. Dole and NFIB v. Sebelius.",
    "scores": {
      "TX": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "The Fourth Amendment protects against unreasonable seizures, and restricting chokeholds and no-knock warrants for federal officers directly implements this textual guarantee. The President has clear authority to set operational standards for federal law enforcement agencies. However, conditioning federal grants on state policing standards raises Tenth Amendment concerns about federal coercion of state governments beyond the text's grant of federal authority.",
      "OR": "The Founders' deep concern about government abuse of force is reflected in the Fourth and Fifth Amendments. Restricting dangerous law enforcement tactics aligns with original principles of limited government power over persons. However, policing was historically a state function, and the Founders would have recognized the federalism concerns inherent in federal conditions on state law enforcement practices.",
      "DC": "The executive has well-established authority to set standards for federal law enforcement agencies. Grant conditions must satisfy South Dakota v. Dole's requirements: they must be related to the federal interest, unambiguous, and non-coercive. The order's grant incentive structure appears to satisfy these doctrinal requirements, though the scope of conditions could face challenge if deemed coercive under NFIB v. Sebelius.",
      "LC": "The constitutional commitment to due process and equal protection demands accountability for law enforcement practices that disproportionately impact communities of color. The Fourth Amendment's protections must evolve to address modern policing practices. A national accountability database represents constitutional progress toward ensuring that the right to be free from unreasonable force is equally enjoyed by all persons.",
      "PR": "Evidence demonstrates that body-worn cameras reduce use-of-force incidents and complaints against officers. Accountability databases prevent officers with records of misconduct from moving between departments. Peer democracies with comparable reforms show improved police-community relations and reduced incidents of lethal force without compromising public safety outcomes.",
      "SM": "The President's authority as chief executive over federal law enforcement agencies clearly encompasses setting operational standards including use-of-force policies. Federal grant conditions incentivizing best practices represent cooperative federalism, not coercion. The accountability database serves the constitutional interest in transparency and due process without mandating state compliance."
    }
  },
  {
    "id": "reproductive-healthcare",
    "title": "Protecting Access to Reproductive Healthcare Services",
    "date": "2022-07-08",
    "type": "Executive Order 14076",
    "admin": "Biden",
    "desc": "Directed HHS to protect access to reproductive healthcare services, medication abortion, and patient privacy following the Dobbs decision.",
    "brief": "Issued two weeks after Dobbs v. Jackson Women's Health Organization overturned Roe v. Wade, Executive Order 14076 directed HHS to expand access to medication abortion, protect patient privacy and medical records, ensure emergency medical care including abortion services under EMTALA, and safeguard interstate travel for reproductive healthcare. The order tested the limits of executive healthcare authority in a post-Dobbs landscape where the Supreme Court explicitly returned abortion regulation to the states. Core constitutional tensions involved whether the executive could use federal regulatory authority to create de facto protections for abortion access that the Court had declined to find in the Constitution, and whether EMTALA preemption of state abortion bans exceeded statutory authority.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "Dobbs held that the Constitution does not confer a right to abortion and returned the issue to the states. The executive order attempts to use federal regulatory authority to circumvent this holding. EMTALA's text requires stabilizing treatment in emergencies but does not explicitly address abortion. Using federal preemption to override state abortion laws stretches statutory text beyond its enacted purpose.",
      "OR": "The Dobbs majority held that abortion regulation was a matter for democratic processes in the states, consistent with the original understanding that unenumerated rights were reserved to the people and states. Executive action to protect abortion access through federal regulatory mechanisms contradicts the Court's return of this question to state legislatures, undermining the federalism principles central to the original constitutional design.",
      "DC": "Dobbs explicitly overruled Roe and Casey, removing federal constitutional protection for abortion. The executive order's use of EMTALA preemption has faced conflicting court rulings: Idaho v. United States reached the Supreme Court, which vacated and remanded without resolving the EMTALA question. The doctrinal landscape is unsettled, with significant questions about whether EMTALA can preempt state abortion bans in emergency contexts.",
      "LC": "Reproductive autonomy represents a fundamental dimension of liberty and equal protection that the Constitution's living principles demand. The Dobbs decision was a regression from constitutional values of bodily autonomy and gender equality. Executive action to protect healthcare access advances evolving constitutional commitments to equal dignity and personal liberty, even where the Court has retreated from prior protections.",
      "PR": "Evidence demonstrates that restricting abortion access produces measurable harms: increased maternal mortality, economic hardship, and disparate impact on low-income women and women of color. Protecting emergency medical care and interstate travel reflects practical governance concerns about healthcare system functionality. Federal coordination prevents a patchwork of state laws from undermining basic healthcare access.",
      "SM": "EMTALA independently requires hospitals to provide stabilizing emergency care regardless of state law, and the executive has authority to enforce this federal mandate. Protecting interstate travel is grounded in the constitutional right to travel recognized since Saenz v. Roe. The executive order operates within existing federal statutory authority without creating new abortion rights, focusing on enforcing existing federal obligations."
    }
  },
  {
    "id": "cybersecurity-improvement",
    "title": "Improving the Nation's Cybersecurity",
    "date": "2021-05-12",
    "type": "Executive Order 14028",
    "admin": "Biden",
    "desc": "Mandated zero-trust architecture, software supply chain security standards, and breach notification requirements for federal information systems.",
    "brief": "Issued in response to the SolarWinds supply chain attack and other major cyber incidents, Executive Order 14028 mandated federal agencies adopt zero-trust security architectures, established software supply chain security requirements including a Software Bill of Materials for vendors selling to the government, created standardized breach notification procedures, and modernized federal cybersecurity standards. The order operated primarily within the executive's authority over federal IT procurement and operations. Constitutional significance was moderate: the order largely directed internal federal operations, but its requirements for government contractors and software vendors effectively set industry-wide security standards, raising questions about whether the executive was creating de facto regulation through procurement power.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The President has recognized authority to manage federal executive branch operations, including setting IT security standards for federal systems. The Federal Information Security Management Act (FISMA) provides statutory basis for federal cybersecurity requirements. Procurement conditions for government contractors fall within established executive purchasing authority. The constitutional footprint is modest, as the order primarily directs internal federal operations.",
      "OR": "The President's authority as chief executive to manage the operations of federal agencies is well-grounded in the original constitutional design. Setting security standards for federal information systems falls squarely within executive management authority. The Founders anticipated executive control over internal governmental operations, and cybersecurity represents a modern iteration of that foundational principle.",
      "DC": "Executive authority over federal procurement and IT operations is well-established in administrative law doctrine. FISMA and the Federal Acquisition Regulation provide strong statutory and regulatory foundations. The order's extension to contractor requirements through procurement conditions follows established doctrinal patterns from cases upholding executive procurement authority. Constitutional concerns are minimal given the narrow scope.",
      "LC": "National cybersecurity directly serves the general welfare by protecting critical infrastructure, personal data, and democratic institutions from cyber threats. The Constitution's protective purposes evolve to encompass modern threats to national security and individual privacy. Strong federal cybersecurity standards advance constitutional values of security and privacy in the digital age.",
      "PR": "The SolarWinds attack demonstrated catastrophic vulnerabilities in federal supply chains. Evidence from cybersecurity research confirms that zero-trust architecture and supply chain security requirements significantly reduce breach risk. Federal procurement power is an efficient mechanism for improving security standards across the technology industry without requiring new legislation.",
      "SM": "The President's plenary authority over executive branch operations and federal procurement clearly encompasses mandating cybersecurity standards for federal systems and vendors. The order represents responsible stewardship of federal information assets within core executive authority. Supply chain security requirements through procurement conditions are an established and constitutionally sound mechanism for advancing national security objectives."
    }
  },
  {
    "id": "private-prisons-ban",
    "title": "Eliminating Privately Operated Criminal Detention Facilities",
    "date": "2021-01-26",
    "type": "Executive Order 14006",
    "admin": "Biden",
    "desc": "Directed the Department of Justice to not renew contracts with privately operated federal criminal detention facilities.",
    "brief": "Executive Order 14006 directed the Attorney General not to renew DOJ contracts with privately operated criminal detention facilities, citing concerns that private operators prioritize profits over safety, rehabilitation, and humane conditions. The order fell within the executive's procurement authority and did not require new legislation. However, it notably excluded immigration detention facilities operated by DHS, where the majority of private detention occurs. Constitutional questions centered on whether the executive can effectively restructure the federal prison system through procurement decisions without congressional authorization, and whether the order's selective application to DOJ but not DHS detention created equal protection concerns for immigration detainees left in private facilities.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The President has clear authority over federal procurement decisions, including whether to contract with private operators for federal detention. The text of the Constitution does not require the government to privatize detention functions. However, the order does not address immigration detention under DHS, creating an inconsistency in the textual application of the government's detention obligations across agencies.",
      "OR": "The Founders understood criminal punishment as a core government function. The Eighth Amendment's prohibition on cruel and unusual punishment reflects the original understanding that the government bears responsibility for conditions of confinement. Executive authority over federal law enforcement operations, including the management of detention facilities, is well-grounded in the original constitutional design.",
      "DC": "Executive procurement authority is well-established in administrative law doctrine. The decision not to renew specific contracts falls within the executive's recognized discretion over government operations. No court has required the government to use private operators for detention. The selective application to DOJ but not DHS detention has been noted but does not create a doctrinal problem, as different agencies operate under different statutory frameworks.",
      "LC": "The Eighth Amendment's prohibition on cruel and unusual punishment, interpreted through evolving standards of decency, supports eliminating profit-driven detention that evidence shows produces worse outcomes for incarcerated persons. The constitutional commitment to human dignity demands that the government take direct responsibility for conditions of confinement rather than delegating this fundamental obligation to private actors.",
      "PR": "Studies from the DOJ Inspector General and academic research demonstrate that private prisons have higher rates of safety incidents, lower staffing levels, and fewer rehabilitative programs. Ending private federal detention reduces these documented harms. However, the exclusion of immigration detention, where private facility conditions are often worse, limits the practical impact of the order.",
      "SM": "The President's plenary authority over executive branch procurement and operations encompasses decisions about how the federal government fulfills its detention obligations. Choosing to operate facilities directly rather than through contractors represents a legitimate exercise of executive management discretion. The order improves government accountability for constitutional obligations regarding conditions of confinement."
    }
  },
  {
    "id": "federal-employee-vaccine",
    "title": "Requiring COVID-19 Vaccination for Federal Employees",
    "date": "2021-09-09",
    "type": "Executive Order 14043",
    "admin": "Biden",
    "desc": "Required all federal executive branch employees to be vaccinated against COVID-19, with limited medical and religious exemptions.",
    "brief": "Executive Order 14043 required COVID-19 vaccination for all federal civilian employees, with accommodations available for medical conditions and sincerely held religious beliefs under Title VII. Unlike the separate OSHA private-sector mandate struck down by the Supreme Court, this order applied only to the federal workforce over which the President has direct management authority. The Fifth Circuit upheld the mandate, finding it within the President's authority to manage the federal workforce under 5 U.S.C. Section 7301. Constitutional tensions involved individual liberty and bodily autonomy claims under the Fifth Amendment, religious accommodation requirements under the First Amendment and RFRA, and whether the President's management authority over federal employees extends to mandating medical procedures as a condition of employment.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The Fifth Amendment's due process protections extend to federal employees and protect liberty interests including bodily autonomy. Requiring vaccination as a condition of continued employment implicates these interests. However, 5 U.S.C. Section 7301 authorizes the President to prescribe regulations for the conduct of federal employees, and the text supports conditions of employment including health requirements. The tension lies between individual liberty guarantees and the text of federal employment authority.",
      "OR": "The Founders understood employment conditions as matters within an employer's authority, and the government as employer has historically set conditions of service. However, the original understanding of liberty did not contemplate mandatory medical treatments as a condition of civilian government employment. Vaccination mandates for the military had historical precedent from George Washington's smallpox inoculation order, but extending this to civilian employees is a modern expansion.",
      "DC": "The Fifth Circuit upheld the mandate in Feds for Medical Freedom v. Biden, finding it within the President's authority under civil service statutes. Jacobson v. Massachusetts (1905) established that government vaccine mandates can survive constitutional scrutiny during public health emergencies. The mandate's application only to the federal workforce, over which the President has established management authority, gave it stronger doctrinal footing than the OSHA private-sector mandate struck down in NFIB v. OSHA.",
      "LC": "Public health emergencies justify reasonable restrictions on individual liberty to protect collective welfare. The constitutional commitment to promoting the general welfare encompasses protecting the federal workforce and the public they serve from preventable infectious disease. Religious and medical exemptions preserve individual rights while advancing public health objectives consistent with evolving constitutional values.",
      "PR": "Evidence demonstrated vaccine effectiveness in reducing COVID-19 transmission, hospitalization, and death. Federal employee vaccination reduced workplace transmission and maintained government operations during the pandemic. Comparable democracies implemented similar requirements for government employees. The mandate achieved high compliance rates with minimal workforce disruption, demonstrating practical feasibility.",
      "SM": "The President's broad authority to manage the federal workforce under civil service statutes and Article II encompasses setting health and safety conditions for federal employment. The mandate included religious and medical accommodations satisfying First Amendment and RFRA requirements. Workplace vaccination requirements have extensive historical precedent in both military and healthcare settings, and the pandemic context provided compelling justification."
    }
  },
  {
    "id": "lgbtq-equality",
    "title": "Advancing Equality for LGBTQ+ Individuals",
    "date": "2022-06-15",
    "type": "Executive Order 14075",
    "admin": "Biden",
    "desc": "Directed federal agencies to combat conversion therapy, protect LGBTQ+ youth, and address discrimination in foster care and housing programs.",
    "brief": "Executive Order 14075 directed federal agencies to advance equality for LGBTQ+ individuals by combating conversion therapy, addressing discriminatory child welfare practices, protecting LGBTQ+ youth from bullying and harassment, and expanding data collection on sexual orientation and gender identity. The order built on the foundation of EO 13988 and extended Bostock reasoning into foster care, housing, and youth-serving programs. Constitutional tensions paralleled those raised by EO 13988: the scope of Bostock's reach beyond Title VII, potential conflicts with religious liberty and the First Amendment for faith-based organizations participating in foster care and social services, and whether the executive branch can effectively redefine anti-discrimination obligations across federal programs without new legislation from Congress.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The First Amendment protects both free exercise of religion and freedom of speech. Directing agencies to combat conversion therapy and impose non-discrimination requirements on faith-based foster care agencies creates tension with these textual protections. The order extends Bostock's Title VII reasoning to statutes that may not share its precise textual framework, raising concerns about executive expansion beyond statutory text.",
      "OR": "The Founders prioritized religious liberty as a fundamental right, and the original public meaning of the Free Exercise Clause protected sincere religious practice from government interference. Requiring faith-based organizations to modify their practices regarding sexual orientation and gender identity may conflict with original understandings of religious liberty. The original meaning of civil rights statutes did not encompass sexual orientation or gender identity categories.",
      "DC": "Bostock provides doctrinal foundation for treating sexual orientation and gender identity discrimination as sex discrimination. However, Fulton v. City of Philadelphia (2021) recognized religious organizations' Free Exercise claims against non-discrimination requirements in foster care. The doctrinal tension between Bostock's anti-discrimination holding and Fulton's religious liberty protections creates uncertainty about the order's application to faith-based service providers.",
      "LC": "LGBTQ+ youth face documented rates of discrimination, homelessness, and mental health crises that demand protective government action. The Constitution's evolving commitment to equal dignity requires safeguarding the most vulnerable members of society from discrimination in essential services like foster care and housing. Combating conversion therapy protects youth from practices that medical consensus identifies as harmful.",
      "PR": "Every major medical and psychological professional organization has condemned conversion therapy as harmful and ineffective. LGBTQ+ youth in affirming environments show dramatically better mental health outcomes. Evidence from jurisdictions with strong non-discrimination protections demonstrates improved outcomes without significant disruption to service delivery. Pragmatic policy supports evidence-based protections for vulnerable youth populations.",
      "SM": "The President's authority to direct federal agency enforcement encompasses ensuring consistent application of Bostock's anti-discrimination principles across federally funded programs. Combating practices condemned by medical consensus serves the constitutional interest in protecting welfare. Religious accommodations can be implemented through existing RFRA frameworks while maintaining core non-discrimination protections for LGBTQ+ individuals in federal programs."
    }
  },
  {
    "id": "russia-sanctions",
    "title": "Sanctions on Russian Federation Harmful Activities",
    "date": "2021-04-15",
    "type": "Executive Order 14024",
    "admin": "Biden",
    "desc": "Imposed comprehensive sanctions on Russia for election interference, the SolarWinds cyberattack, and aggression in Ukraine.",
    "brief": "Executive Order 14024 declared a national emergency with respect to Russian harmful activities and imposed wide-ranging sanctions targeting Russian government officials, intelligence services, and entities associated with election interference, the SolarWinds cyberattack, and Ukraine-related aggression. The order used the International Emergency Economic Powers Act (IEEPA) to block property of designated persons, restrict financial transactions, and authorize secondary sanctions. While presidential sanctions authority in foreign affairs is well-established, the unprecedented scope of these sanctions, affecting broad sectors of a major economy, raised questions about the limits of executive unilateral action in international economic policy and whether such far-reaching economic measures should require congressional authorization.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "IEEPA explicitly authorizes the President to declare national emergencies and impose economic sanctions in response to foreign threats. The statute's text provides broad authority for the specific measures taken. However, the scope of sanctions affecting entire sectors of a major world economy pushes against textual limits of what constitutes an \"emergency\" versus ongoing foreign policy disputes that should be addressed through congressional legislation and treaty processes.",
      "OR": "The President's authority over foreign affairs and national security has deep roots in the original constitutional design. The Founders vested the executive with primary responsibility for foreign relations, and economic measures against hostile foreign powers fall within this core executive function. Historical practice from the Founding era through the present supports broad executive sanctions authority in response to threats to national sovereignty.",
      "DC": "IEEPA provides well-established statutory authority for presidential sanctions, and courts have consistently upheld executive sanctions programs against constitutional challenges. Dames & Moore v. Regan (1981) recognized broad presidential authority over international economic measures during declared emergencies. The doctrinal foundation for sanctions authority is among the strongest in foreign affairs law, though the expanding scope of IEEPA use across administrations has drawn academic criticism.",
      "LC": "Protecting democratic elections and critical infrastructure from foreign interference serves fundamental constitutional values of democratic self-governance and national sovereignty. Sanctions represent a proportionate response to documented threats to American democratic institutions. The Constitution's commitment to protecting the republic from foreign influence demands robust executive tools for deterrence and accountability.",
      "PR": "Evidence confirmed Russian election interference, the SolarWinds attack, and Ukraine aggression, providing strong factual basis for sanctions. Coordinated sanctions with allies amplified effectiveness. Empirical studies on sanctions effectiveness show mixed results for behavior change but demonstrate value as deterrence and norm-setting. The sanctions aligned U.S. policy with allied democratic consensus on responding to Russian aggression.",
      "SM": "The President's foreign affairs and national security authority, combined with explicit IEEPA authorization, provides comprehensive constitutional and statutory foundation for comprehensive Russia sanctions. Protecting national sovereignty from foreign cyberattacks, election interference, and military aggression represents the most compelling use of executive emergency economic powers. Congressional bipartisan support through CAATSA reinforced the legitimacy of the sanctions framework."
    }
  },
  {
    "id": "digital-assets-regulation",
    "title": "Ensuring Responsible Development of Digital Assets",
    "date": "2022-03-09",
    "type": "Executive Order 14067",
    "admin": "Biden",
    "desc": "Established the first comprehensive federal framework for cryptocurrency and digital asset regulation, directing interagency study of risks and policy development.",
    "brief": "Executive Order 14067 directed federal agencies to coordinate policy development for digital assets including cryptocurrencies, stablecoins, and potential central bank digital currency. The order tasked agencies with studying consumer protection, financial stability, illicit finance, U.S. competitiveness, financial inclusion, and responsible innovation. Because the order was primarily study-focused rather than enforcement-oriented, its direct constitutional impact was limited. However, it raised questions about whether the executive branch can create a comprehensive regulatory framework for an entirely new asset class without congressional legislation, and whether directing agencies to develop regulatory approaches constitutes de facto rulemaking that should originate in Congress. The order also implicated privacy concerns related to potential government surveillance through a central bank digital currency.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "Directing federal agencies to study and develop policy recommendations falls within the President's authority to manage executive branch operations. The order does not create new regulations or enforcement mechanisms, limiting its textual constitutional footprint. However, the comprehensive scope of interagency coordination for an entirely new asset class approaches the boundary of executive policy development that should be guided by congressional legislation under the Commerce Clause.",
      "OR": "The Founders placed regulatory authority over commerce in Congress. Creating a comprehensive regulatory framework for an entirely new asset class, even through a study-focused order, raises originalist concerns about executive assumption of legislative policy development functions. Monetary policy and financial regulation were understood as congressional prerogatives at the Founding.",
      "DC": "The order's study-focused approach largely avoids doctrinal problems because directing agencies to study issues and make recommendations falls within recognized executive management authority. No court has found that directing interagency policy coordination exceeds executive power. The doctrinal concerns would intensify if study recommendations led to enforcement actions without congressional authorization under the major questions doctrine.",
      "LC": "Digital assets present novel risks to financial stability, consumer protection, and financial inclusion that existing regulatory frameworks do not adequately address. Constitutional values of protecting welfare and ensuring equal access to financial systems support proactive executive engagement with emerging technologies. The order's emphasis on financial inclusion advances equal protection values in evolving financial markets.",
      "PR": "Cryptocurrency markets have experienced significant consumer losses, fraud, and illicit finance. Peer economies have moved ahead with digital asset regulation. A coordinated federal approach to studying digital asset risks is a pragmatic step toward evidence-based regulation. The study-first approach allows policy development informed by analysis rather than reactive enforcement, though the pace of market evolution requires timely legislative follow-through.",
      "SM": "The President's authority to coordinate executive branch policy development clearly encompasses directing agencies to study emerging technologies and develop recommendations. The order represents responsible governance by establishing interagency coordination before regulatory action. Study directives enhance the quality of eventual legislation by providing Congress with informed agency analysis. The order's restraint in focusing on study rather than enforcement demonstrates appropriate respect for congressional legislative authority."
    }
  },
  {
    "id": "supply-chains",
    "title": "America's Supply Chains",
    "date": "2021-02-24",
    "type": "Executive Order 14017",
    "admin": "Biden",
    "desc": "Directed a 100-day review of critical supply chains in semiconductors, batteries, rare earth minerals, and pharmaceuticals, and invoked the Defense Production Act.",
    "brief": "Executive Order 14017 directed federal agencies to conduct a comprehensive 100-day review of supply chain vulnerabilities in four critical sectors: semiconductor manufacturing, high-capacity batteries, critical minerals and rare earths, and pharmaceuticals. The order also invoked Defense Production Act authority to support domestic production and directed longer-term sectoral reviews across defense, public health, transportation, energy, and agriculture. While supply chain review falls within executive management authority and the DPA provides statutory basis for production incentives, the order's vision of reshaping industrial policy to reduce foreign dependence raised questions about whether such transformative economic planning should originate in Congress. The order represented executive-driven industrial policy that historically has been a congressional function under the Commerce Clause.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The Defense Production Act provides explicit statutory authority for the President to direct production priorities and incentivize domestic manufacturing in critical sectors. The order's review directives fall within the President's management authority over executive agencies. However, the broader industrial policy vision, including reshaping global supply chains and directing domestic manufacturing priorities, touches on Commerce Clause powers that the text reserves to Congress.",
      "OR": "The Founders placed regulation of commerce with foreign nations in Congress under Article I, Section 8. Industrial policy, including decisions about which goods to produce domestically versus import, historically fell within congressional authority. While the executive's national security role encompasses ensuring access to critical materials, the scope of economic restructuring envisioned by the order exceeds the original understanding of executive commercial authority.",
      "DC": "The Defense Production Act provides robust statutory authority for executive action on supply chain security. Courts have upheld broad DPA authority for presidential direction of industrial priorities during declared emergencies and for national defense preparedness. The 100-day review directive falls well within executive management authority. Subsequent actions invoking DPA authority for domestic production have strong doctrinal support given the national security rationale.",
      "LC": "Ensuring resilient supply chains for critical goods, including pharmaceuticals and clean energy components, directly serves constitutional welfare objectives. Supply chain vulnerabilities exposed during the COVID-19 pandemic demonstrated how dependence on foreign production can threaten public health and national security. The Constitution's commitment to promoting the general welfare supports proactive executive action to secure critical supply chains.",
      "PR": "The COVID-19 pandemic exposed dangerous supply chain vulnerabilities in PPE, pharmaceuticals, and semiconductor chips. Evidence demonstrated that concentrated foreign sourcing created single points of failure affecting national security and public health. Peer economies including the EU, Japan, and South Korea have implemented similar supply chain security reviews. Practical governance requires anticipating and mitigating supply chain risks before crises occur.",
      "SM": "The President's national security authority, combined with explicit Defense Production Act authorization, provides comprehensive constitutional and statutory basis for supply chain reviews and domestic production incentives. Ensuring reliable access to critical materials is a core executive national security function. The order's emphasis on review and analysis demonstrates appropriate executive restraint, gathering information to inform both executive action and congressional legislation on industrial policy."
    }
  },
  {
    "id": "who-withdrawal",
    "title": "Withdrawing from the World Health Organization",
    "date": "2025-01-20",
    "type": "Executive Order 14155",
    "admin": "Trump II",
    "desc": "Withdrew the United States from the World Health Organization, raising questions about unilateral executive withdrawal from congressionally-funded international organizations.",
    "brief": "Executive order directing US withdrawal from WHO, an organization established by treaty and repeatedly funded by Congress. The order raised separation of powers concerns about whether the president can unilaterally withdraw from international organizations without congressional consent, particularly when Congress has continuously appropriated funds for US participation. Welfare concerns centered on diminished pandemic preparedness and global health cooperation. The constitutional footprint was moderate given presidential foreign affairs authority but significant given Congressional funding history.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": -1,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": -1,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The Constitution grants treaty power jointly to the President and Senate. Congress has repeatedly appropriated funds for WHO participation, creating a statutory commitment that the executive cannot unilaterally abrogate. The Appropriations Clause implies congressional consent is needed for withdrawal from funded international commitments.",
      "OR": "The Founders vested treaty-making in the President with Senate advice and consent. While executive authority over foreign affairs is broad, unilateral withdrawal from organizations funded by Congress strains the original constitutional framework. The Founders expected shared authority over international commitments.",
      "DC": "Treaty withdrawal authority remains doctrinally unsettled after Goldwater v. Carter was dismissed on political question grounds. However, WHO membership involves ongoing congressional appropriations, distinguishing it from purely executive agreements. The intersection of treaty power and spending authority creates genuine doctrinal uncertainty.",
      "LC": "Withdrawal from WHO undermines global health infrastructure that protects vulnerable populations worldwide. The constitutional commitment to general welfare extends to pandemic preparedness. Unilateral withdrawal from health cooperation frameworks threatens the welfare of marginalized communities most affected by infectious disease.",
      "PR": "The US contributes roughly 15% of WHO funding and withdrawal undermines pandemic preparedness for 8 billion people. COVID-19 demonstrated the cost of inadequate global health coordination. Peer democracies maintain WHO membership as essential infrastructure.",
      "SM": "The President possesses broad authority over foreign affairs and international organization membership. WHO membership was established by executive agreement, not Senate-ratified treaty, giving the President discretion to withdraw. National sovereignty includes determining which international bodies serve American interests."
    }
  },
  {
    "id": "free-speech-censorship",
    "title": "Restoring Freedom of Speech and Ending Federal Censorship",
    "date": "2025-01-20",
    "type": "Executive Order 14149",
    "admin": "Trump II",
    "desc": "Directed federal agencies to cease coordination with social media companies on content moderation, framing prior government communications as censorship.",
    "brief": "Executive order directing agencies to end content moderation coordination with social media platforms, characterizing prior government communications about misinformation as censorship. The order raised complex First Amendment questions from both directions: government jawboning of private platforms may itself violate the First Amendment, but so may government directives that chill agency speech. The order had support from free speech advocates across the political spectrum concerned about government pressure on platforms, though critics argued it conflated legitimate public health communication with censorship.",
    "scores": {
      "TX": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The First Amendment prohibits government abridgment of speech. Government coordination with platforms to suppress content raises legitimate concerns under the Free Speech Clause. The text protects against government action that chills private expression, whether through direct regulation or informal coercion.",
      "OR": "The Founders enshrined free speech precisely to prevent government control of public discourse. Government pressure on platforms to remove content echoes the seditious libel concerns that motivated the First Amendment. Ending such coordination aligns with original free speech values.",
      "DC": "Murthy v. Missouri (2024) addressed government communications with platforms, with the Court finding standing issues but not resolving the substantive First Amendment question. The jawboning doctrine remains unsettled. The order addresses legitimate concerns but its framing of all coordination as censorship oversimplifies complex First Amendment doctrine.",
      "LC": "Free speech protections must account for the information ecosystem. While government coercion of platforms threatens speech, so does unchecked misinformation that undermines informed democratic participation. The order addresses one threat while potentially exacerbating another.",
      "PR": "Evidence from pandemic response shows government health communications saved lives. Peer democracies maintain public health communication channels with platforms. Blanket prohibition on coordination may impair emergency response capabilities.",
      "SM": "The First Amendment is the paramount constitutional protection. Government coordination with private companies to suppress speech is among the most dangerous forms of censorship. This order restores the constitutional baseline that government should not pressure private actors to suppress lawful speech."
    }
  },
  {
    "id": "cartels-fto",
    "title": "Designating Cartels as Foreign Terrorist Organizations",
    "date": "2025-01-20",
    "type": "Executive Order 14157",
    "admin": "Trump II",
    "desc": "Designated Mexican drug cartels as Foreign Terrorist Organizations, applying terrorism legal frameworks to criminal organizations.",
    "brief": "Executive order designating Mexican drug cartels as Foreign Terrorist Organizations under the Immigration and Nationality Act. The designation raised concerns about applying the expansive terrorism legal framework—including material support statutes, enhanced surveillance authority, and military action provisions—to criminal organizations. Due process concerns arose for individuals associated with designated groups, and the designation raised sovereignty questions regarding potential military operations in a sovereign allied nation.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The FTO designation triggers material support statutes (18 USC 2339B) with severe penalties and broad liability. Due process concerns arise because individuals with even tenuous associations face criminal liability. The terrorism framework was designed for ideologically motivated organizations, not criminal enterprises motivated by profit.",
      "OR": "The Founders distinguished between foreign threats and domestic criminal matters. Applying wartime legal frameworks to criminal organizations blurs the distinction between military and civilian law enforcement that the Constitution carefully maintains. The designation could justify military action in ways the Founders reserved for Congress.",
      "DC": "FTO designation authority is established under INA Section 219. However, applying it to criminal organizations rather than politically motivated groups is novel. Material support doctrine (Holder v. Humanitarian Law Project) creates broad liability that raises due process concerns when extended to organizations with millions of peripheral associates.",
      "LC": "The terrorism legal framework allows expanded surveillance, reduced due process protections, and potential military action. Applying it to drug cartels could sweep in communities and individuals with tangential connections, disproportionately affecting Latino populations and raising severe equal protection and due process concerns.",
      "PR": "Terrorism designations for drug cartels could destabilize US-Mexico relations, complicate bilateral law enforcement cooperation, and trigger military escalation. Evidence suggests cooperative law enforcement approaches are more effective against drug trafficking than terrorism frameworks.",
      "SM": "The President has broad authority over FTO designations under the INA. Cartels engage in violence, territory control, and intimidation comparable to terrorist organizations. The designation provides law enforcement with additional tools to combat organizations responsible for tens of thousands of deaths annually."
    }
  },
  {
    "id": "death-penalty-restoration",
    "title": "Restoring the Death Penalty and Protecting Public Safety",
    "date": "2025-01-20",
    "type": "Executive Order 14164",
    "admin": "Trump II",
    "desc": "Reversed the Biden-era federal execution moratorium and directed DOJ to aggressively pursue death penalty cases.",
    "brief": "Executive order reversing Biden's moratorium on federal executions and directing the Department of Justice to pursue the death penalty more aggressively. The order raised Eighth Amendment questions about cruel and unusual punishment, particularly as global and domestic trends move away from capital punishment. Equal protection concerns center on well-documented racial disparities in capital sentencing. The order falls within executive prosecutorial discretion but pushes against evolving standards of decency.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The Eighth Amendment prohibits cruel and unusual punishment. The death penalty is not explicitly prohibited by the text, and the Fifth Amendment references capital crimes, implying its permissibility. However, the Eighth Amendment's evolving standards framework creates ongoing textual tension with capital punishment.",
      "OR": "The Founders accepted capital punishment as an established practice. The Fifth Amendment's Grand Jury Clause references capital crimes, indicating original acceptance. However, the Eighth Amendment was designed to evolve with societal standards, and original understanding does not freeze punishment practices in 1791.",
      "DC": "Gregg v. Georgia (1976) upheld the death penalty's constitutionality, and the executive has clear prosecutorial discretion over charging decisions. However, documented racial disparities (McCleskey v. Kemp notwithstanding) and the global trend toward abolition inform evolving standards analysis. The order is within executive authority but aggressive pursuit amplifies equal protection concerns.",
      "LC": "The constitutional arc bends toward abolishing cruel punishment. Most democracies have eliminated the death penalty. Racial disparities in capital sentencing demonstrate persistent equal protection failures. Aggressive pursuit reverses progress toward evolved dignity standards.",
      "PR": "Evidence shows the death penalty does not deter crime, costs more than life imprisonment, and produces irreversible errors. Over 190 death row exonerations demonstrate system failures. Racial disparities are statistically significant and well-documented across jurisdictions.",
      "SM": "The death penalty is constitutionally permissible per Gregg v. Georgia and subsequent decisions. The executive has broad prosecutorial discretion to pursue available sentences. Restoring enforcement after a moratorium represents legitimate exercise of executive law enforcement authority."
    }
  },
  {
    "id": "gender-ideology-extremism",
    "title": "Defending Women From Gender Ideology Extremism",
    "date": "2025-01-20",
    "type": "Executive Order 14168",
    "admin": "Trump II",
    "desc": "Directed federal agencies to define sex as exclusively biological and immutable for all federal purposes, contradicting Bostock v. Clayton County.",
    "brief": "Executive order directing all federal agencies to define sex as biological and immutable, effectively excluding gender identity from federal anti-discrimination protections. The order contradicts the Supreme Court's reasoning in Bostock v. Clayton County (2020), which held that Title VII protections extend to gender identity. The order raises equal protection concerns for transgender individuals, First Amendment implications regarding compelled governmental definitions, and separation of powers questions about executive reversal of Supreme Court interpretation.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The Fourteenth Amendment guarantees equal protection to all persons. Bostock v. Clayton County held that discrimination based on transgender status is discrimination because of sex. An executive order cannot override Supreme Court statutory interpretation. The order creates tension with settled judicial construction of federal anti-discrimination law.",
      "OR": "The Founders understood sex in binary biological terms, which supports this order's definitional approach. However, the Equal Protection Clause was designed as a broad anti-discrimination principle whose application evolves. Original meaning of equal protection is not limited to categories known at ratification.",
      "DC": "Bostock v. Clayton County (2020) held 6-3 that Title VII covers gender identity discrimination. The executive cannot override Supreme Court statutory interpretation by order. While Bostock addressed Title VII specifically, its reasoning applies broadly to federal anti-discrimination law. The order contradicts binding precedent.",
      "LC": "The constitutional arc has expanded protections for marginalized groups, including LGBTQ+ individuals. Stripping federal recognition of transgender identity reverses progress toward equal dignity. The order harms a vulnerable population and contradicts the Constitution's commitment to evolving equal protection.",
      "PR": "Medical and scientific consensus recognizes gender identity as distinct from biological sex. Peer democracies increasingly protect transgender rights. Evidence shows anti-transgender policies correlate with increased mental health crises, particularly among youth.",
      "SM": "The executive has authority to define terms for federal regulatory purposes. Bostock addressed Title VII employment discrimination, not all federal sex-based classifications. Biological sex definitions serve legitimate administrative functions and protect sex-based rights that predated gender identity recognition."
    }
  },
  {
    "id": "merit-based-opportunity",
    "title": "Ending Illegal Discrimination and Restoring Merit-Based Opportunity",
    "date": "2025-01-21",
    "type": "Executive Order 14173",
    "admin": "Trump II",
    "desc": "Extended beyond federal DEI elimination to direct agencies to investigate private companies' DEI programs as potential civil rights violations.",
    "brief": "Executive order going beyond eliminating federal DEI programs to direct agencies to investigate private companies' diversity, equity, and inclusion programs as potential civil rights violations. The order extended government pressure to private sector speech and association, raising severe First Amendment concerns about government investigation of lawful private activity. The order threatened enforcement action against companies for internal policies addressing workplace diversity, creating a chilling effect on private associational rights.",
    "scores": {
      "TX": {
        "R": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The First Amendment protects private association and expression, including corporate diversity programs. Government investigation of lawful private speech and association violates core free speech protections. The order effectively penalizes private entities for exercising protected associational rights.",
      "OR": "The Founders enshrined freedom of association as a core liberty. Government investigation of private organizations' internal policies echoes the abuses the First Amendment was designed to prevent. Original understanding firmly protects private actors from government pressure on their internal associational choices.",
      "DC": "While Students for Fair Admissions narrowed race-conscious admissions, it did not prohibit all private diversity efforts. Title VII allows voluntary diversity programs. Government investigation of lawful private activity raises concerns under NAACP v. Alabama's associational freedom doctrine. The order extends government pressure beyond settled doctrinal boundaries.",
      "LC": "Investigating companies for maintaining diversity programs reverses decades of civil rights progress. The constitutional arc expanded protections against discrimination; now the government threatens those who voluntarily combat discrimination. This chills protected speech and association.",
      "PR": "Research consistently shows diverse organizations outperform homogeneous ones. Threatening companies for diversity programs contradicts business evidence and creates regulatory uncertainty. Peer democracies encourage, not punish, workplace diversity efforts.",
      "SM": "The Equal Protection Clause requires government neutrality. Race-conscious programs may themselves constitute unlawful discrimination. The executive has authority to investigate potential civil rights violations, including discrimination disguised as diversity. Merit-based approaches better serve constitutional equality."
    }
  },
  {
    "id": "unleashing-energy",
    "title": "Unleashing American Energy",
    "date": "2025-01-20",
    "type": "Executive Order 14154",
    "admin": "Trump II",
    "desc": "Reversed Biden-era energy restrictions, resumed federal oil and gas leasing, and rolled back methane regulations.",
    "brief": "Executive order reversing Biden-era energy policies including restrictions on federal land oil and gas leasing, methane emission regulations, and environmental review requirements. The order falls largely within executive energy policy authority and represents a legitimate policy reversal. Constitutional footprint is moderate, with primary concerns centering on welfare implications of reduced environmental protections and separation of powers questions about whether the executive can override statutory environmental requirements.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "Executive authority over federal land management and energy policy is established by statute. Reversing prior executive policies is within presidential authority. Environmental statutes like NEPA and Clean Air Act create statutory obligations that cannot be waived by executive order, limiting the scope of permissible deregulation.",
      "OR": "The Founders granted Congress authority over federal lands and commerce. Executive discretion over leasing and regulatory priorities is legitimate within statutory bounds. The Property Clause gives Congress primary authority over federal lands, but executive management discretion is well-established.",
      "DC": "Executive reversal of prior executive policies is doctrinally straightforward. However, rollback of regulations promulgated under statutory authority requires notice-and-comment rulemaking under the APA. West Virginia v. EPA's major questions doctrine limits agency authority but does not eliminate statutory environmental obligations.",
      "LC": "Environmental degradation disproportionately affects vulnerable communities. The constitutional commitment to general welfare encompasses environmental protection for current and future generations. Rolling back protections reverses progress toward environmental justice.",
      "PR": "Climate change imposes trillions in economic costs. Clean energy creates more jobs than fossil fuels. Peer democracies are accelerating energy transitions while the US retreats. Long-term economic competitiveness requires clean energy investment.",
      "SM": "Energy independence is a core national security interest. The executive has broad authority over federal land management and energy policy. Removing regulatory barriers promotes economic growth, reduces energy costs, and strengthens national sovereignty over energy supply."
    }
  },
  {
    "id": "protecting-children-gender",
    "title": "Protecting Children From Chemical and Surgical Mutilation",
    "date": "2025-01-28",
    "type": "Executive Order 14187",
    "admin": "Trump II",
    "desc": "Directed HHS to restrict gender-affirming care for minors and threatened funding withdrawal from hospitals providing such care.",
    "brief": "Executive order directing HHS to restrict gender-affirming medical care for minors, threatening to withdraw federal funding from hospitals and medical providers. The order raises significant concerns about parental rights, medical liberty, and equal protection for transgender youth. It interferes with state medical practice regulation and the doctor-patient relationship, traditionally areas of state authority. The order applies federal coercive spending power to override medical judgment and parental decision-making.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The Fourteenth Amendment protects parental rights and liberty interests in medical decisions for children. Federal intrusion into medical practice regulation traditionally reserved to states raises Tenth Amendment federalism concerns. Threatening funding withdrawal coerces states and providers beyond the scope of federal enumerated powers.",
      "OR": "The Founders protected individual liberty including parental authority over children's welfare. Medical practice regulation was understood as a state function. Federal interference in doctor-patient relationships and parental medical decisions contradicts original federalism principles.",
      "DC": "Parental rights are recognized as fundamental under substantive due process (Troxel v. Granville, Pierce v. Society of Sisters). Federal spending conditions must relate to the purpose of the funds and not be coercive (NFIB v. Sebelius). Threatening to withdraw all hospital funding over specific treatments may constitute unconstitutional coercion.",
      "LC": "Transgender youth are among the most vulnerable populations. Denying medically recommended care raises severe equal protection and welfare concerns. The constitutional commitment to protecting marginalized populations requires access to evidence-based medical treatment regardless of identity.",
      "PR": "Major medical organizations (AMA, AAP, Endocrine Society) support age-appropriate gender-affirming care. Evidence shows such care reduces suicidality. Blanket bans override medical expertise and harm patient outcomes. Peer democracies increasingly protect access to evidence-based care.",
      "SM": "The government has a compelling interest in protecting children from irreversible medical procedures. Minors cannot consent to permanent changes. The executive has authority to condition federal funding on compliance with child protection standards. Prudential medical caution serves the welfare of vulnerable youth."
    }
  },
  {
    "id": "k12-indoctrination",
    "title": "Ending Radical Indoctrination in K-12 Schooling",
    "date": "2025-01-29",
    "type": "Executive Order 14190",
    "admin": "Trump II",
    "desc": "Directed investigation of school curricula deemed radical and threatened federal funding based on content taught in schools.",
    "brief": "Executive order directing federal investigation of curricula in K-12 schools deemed to promote radical ideologies, threatening withdrawal of federal funding based on educational content. The order raises severe First Amendment academic freedom concerns and federalism issues, as curriculum decisions have traditionally been reserved to state and local authority. Using federal funding as leverage to control classroom content represents an unprecedented expansion of executive power over education.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The First Amendment protects academic freedom and prohibits government viewpoint discrimination in education. Federal content-based investigations of school curricula constitute viewpoint-based regulation of speech. The Tenth Amendment reserves education policy to the states.",
      "OR": "The Founders strongly supported education but placed it firmly within state and local control. The First Amendment was enacted to prevent government control of ideas and discourse. Federal policing of classroom content contradicts the original constitutional design of decentralized education governance.",
      "DC": "Academic freedom is protected under the First Amendment (Keyishian v. Board of Regents). Federal spending conditions must not be coercive (NFIB v. Sebelius) and must be related to federal program purposes. Content-based funding conditions on education raise viewpoint discrimination concerns under Rosenberger v. University of Virginia.",
      "LC": "Academic freedom is essential to democratic education and the development of critical thinking. Government policing of ideas in schools echoes authoritarian censorship. The constitutional commitment to free inquiry protects students' right to encounter diverse perspectives.",
      "PR": "Evidence shows diverse curricula improve student outcomes and civic engagement. Countries that impose ideological controls on education produce less innovative and adaptable citizens. Academic freedom is correlated with democratic resilience.",
      "SM": "Parents have fundamental rights over children's education. The federal government has legitimate interest in ensuring taxpayer-funded education serves national interests. Investigating whether curricula meet educational standards is a reasonable exercise of oversight over federal spending."
    }
  },
  {
    "id": "foreign-aid-realignment",
    "title": "Reevaluating and Realigning US Foreign Aid",
    "date": "2025-01-20",
    "type": "Executive Order 14169",
    "admin": "Trump II",
    "desc": "Froze all foreign aid pending review, causing humanitarian disruptions and raising Appropriations Clause concerns.",
    "brief": "Executive order freezing all foreign aid disbursements pending a comprehensive review, disrupting humanitarian programs worldwide. The order raised serious Appropriations Clause concerns because Congress had specifically authorized and appropriated the frozen funds. The freeze functioned as an impoundment of congressionally appropriated spending, similar to the domestic funding freeze. Humanitarian organizations reported disruptions to HIV/AIDS treatment, food aid, and refugee assistance programs.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The Appropriations Clause vests spending authority in Congress. When Congress appropriates foreign aid funds, the executive must disburse them. The Impoundment Control Act prohibits the president from withholding congressionally appropriated funds without following statutory procedures for rescission or deferral.",
      "OR": "The Founders placed the power of the purse in Congress as the primary check on executive power. Freezing congressionally appropriated spending without congressional consent constitutes impoundment, the very practice that led to the Impoundment Control Act after the Nixon era.",
      "DC": "Train v. City of New York established that the executive cannot impound congressionally appropriated funds. The Impoundment Control Act codified this principle. Blanket freezing of appropriated foreign aid without following statutory rescission procedures directly contradicts settled doctrine on congressional spending authority.",
      "LC": "Freezing humanitarian aid disrupts programs serving the world's most vulnerable populations. PEPFAR treatment interruptions threaten lives. The constitutional commitment to welfare and human dignity extends to how the US exercises its global responsibilities.",
      "PR": "Foreign aid freeze disrupted HIV/AIDS treatment for millions, food programs for vulnerable populations, and refugee assistance. Evidence shows US foreign aid advances national security interests and costs a fraction of military spending. Abrupt freezes waste previously invested resources.",
      "SM": "The President has broad authority over foreign affairs and can review whether aid programs serve national interests. Temporary pauses for evaluation represent responsible stewardship of taxpayer funds. Executive review authority extends to ensuring aid advances American foreign policy objectives."
    }
  },
  {
    "id": "jfk-declassification",
    "title": "Declassifying JFK, RFK, and MLK Records",
    "date": "2025-01-23",
    "type": "Executive Order 14176",
    "admin": "Trump II",
    "desc": "Directed full declassification of assassination records related to President Kennedy, Robert Kennedy, and Martin Luther King Jr.",
    "brief": "Executive order directing the full declassification and release of records related to the assassinations of President John F. Kennedy, Robert F. Kennedy, and Martin Luther King Jr. The order falls squarely within executive classification authority and promotes democratic accountability and government transparency. The action is broadly supported across the political spectrum and raises minimal constitutional concerns, representing one of the more constitutionally sound actions of the administration.",
    "scores": {
      "TX": {
        "R": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 2,
          "r": 0.85,
          "c": "H"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 2,
          "r": 0.85,
          "c": "H"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 2,
          "r": 0.85,
          "c": "H"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "Classification authority is vested in the executive branch. The President has plenary power to declassify government records. This order exercises that authority to promote the transparency and democratic accountability that the First Amendment implicitly supports.",
      "OR": "The Founders valued transparency in government and an informed citizenry. Declassifying historical assassination records serves the original constitutional commitment to democratic accountability. The People's right to know about their government's actions is foundational to the republican form of government the Founders established.",
      "DC": "Executive classification authority is well-established and the President has absolute declassification power. The JFK Records Act of 1992 already mandated release with limited exemptions. This order accelerates existing statutory requirements. It operates comfortably within settled executive authority and enhances democratic transparency.",
      "LC": "Government transparency is essential to democratic legitimacy. Decades of secrecy around these assassinations eroded public trust. Full disclosure serves the constitutional commitment to informed self-governance and accountability.",
      "PR": "Public trust in government institutions has declined partly due to perceived secrecy. Declassification of historical records costs virtually nothing and serves democratic accountability. The 60-year delay in full disclosure has fueled conspiracy theories that undermine institutional legitimacy.",
      "SM": "The President exercises clear constitutional authority over classification. Full transparency promotes public trust and democratic accountability. This order fulfills a long-standing bipartisan commitment to disclosure and represents exemplary use of executive authority."
    }
  },
  {
    "id": "ai-barriers-removal",
    "title": "Removing Barriers to American Leadership in AI",
    "date": "2025-01-23",
    "type": "Executive Order 14179",
    "admin": "Trump II",
    "desc": "Reversed Biden's AI safety executive order, removing guardrails on artificial intelligence development.",
    "brief": "Executive order reversing Biden-era AI safety regulations, removing safety testing requirements and government oversight mechanisms for artificial intelligence development. The deregulatory approach raises questions about executive responsibility for emerging technology governance and welfare implications of removing safety standards for increasingly powerful AI systems. The constitutional footprint is moderate as it primarily involves reversal of prior executive action, though the welfare implications of removing safety guardrails are significant.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.7,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "No constitutional text specifically addresses technology regulation. Executive authority to set regulatory policy for emerging technologies is within normal executive discretion. However, the General Welfare Clause creates an obligation to protect citizens from foreseeable harms, which increasingly includes AI risks.",
      "OR": "The Founders could not have anticipated AI but designed a system that adapts to new challenges. Original understanding supports congressional authority to regulate emerging threats to public welfare. The executive's role in technology policy is limited to implementing congressional direction.",
      "DC": "Reversing prior executive orders is within standard executive authority. No statutory mandate required the Biden AI order's specific provisions. The administrative deregulatory action is doctrinally straightforward, though the absence of any regulatory framework for an increasingly powerful technology raises prudential concerns.",
      "LC": "AI systems pose risks to equality, privacy, due process, and welfare. Algorithmic bias disproportionately affects marginalized communities. Removing safety guardrails retreats from the constitutional commitment to protect vulnerable populations from emerging technological threats.",
      "PR": "Unregulated AI development has produced documented harms including discriminatory algorithms, deepfake proliferation, and labor displacement. Peer democracies are implementing AI governance frameworks. The US risks becoming an outlier in technology safety governance.",
      "SM": "Excessive regulation stifles innovation and cedes technological leadership to competitors. The executive has authority to calibrate regulatory approaches. Market-driven safety standards may prove more effective than government mandates. American AI leadership serves national security and economic interests."
    }
  },
  {
    "id": "women-sports",
    "title": "Keeping Men Out of Women's Sports",
    "date": "2025-02-05",
    "type": "Executive Order 14201",
    "admin": "Trump II",
    "desc": "Directed agencies to enforce biological sex classifications in federally funded athletics, excluding transgender women from women's sports.",
    "brief": "Executive order directing federal agencies to enforce sex-based (not gender identity) classifications in federally funded athletics programs. The order contradicts the Supreme Court's reasoning in Bostock v. Clayton County and raises equal protection concerns for transgender athletes. Title IX interpretation questions arise about whether the statute's sex-based protections encompass or exclude gender identity. The order affects both collegiate and K-12 athletics programs receiving federal funding.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "Title IX prohibits sex-based discrimination in federally funded education programs. The question of whether sex encompasses gender identity is textually contested. The Fourteenth Amendment's Equal Protection Clause protects against invidious discrimination targeting specific groups, and transgender exclusion from athletics raises such concerns.",
      "OR": "The original understanding of sex was biological. Title IX was enacted to protect women's athletic opportunities. The Founders understood equal protection broadly but within the social categories of their era. Original meaning supports sex-based classifications while the equal protection principle evolves.",
      "DC": "Bostock v. Clayton County held that Title VII's sex discrimination provision covers transgender status. While Bostock addressed employment, its reasoning applies to other sex-based protections. However, the Court acknowledged potential distinctions in other contexts. Title IX athletics regulations involve unique considerations about competitive fairness that Bostock did not address.",
      "LC": "Excluding transgender women from athletics denies them equal participation in educational programs. The constitutional arc has expanded equal protection to include gender identity. Categorical exclusion reverses progress toward inclusion and harms a vulnerable population.",
      "PR": "The number of transgender athletes is very small, and existing policies at IOC and NCAA address competitive fairness through individualized assessments. Blanket bans are disproportionate to the issue's scope and override evidence-based policy approaches used by international sports organizations.",
      "SM": "Title IX was enacted to protect women's athletic opportunities. Biological sex differences create legitimate competitive considerations. The executive has authority to interpret Title IX consistent with its original purpose of ensuring fair competition for women. Protecting women's sports advances the statute's core objectives."
    }
  },
  {
    "id": "icc-sanctions",
    "title": "Imposing Sanctions on the International Criminal Court",
    "date": "2025-02-06",
    "type": "Executive Order 14203",
    "admin": "Trump II",
    "desc": "Imposed sanctions on ICC officials investigating US and Israeli personnel, targeting international judicial officials with economic penalties.",
    "brief": "Executive order imposing economic sanctions on International Criminal Court officials who investigated or issued warrants against US and allied (Israeli) personnel. The order raises rule of law concerns about sanctioning international judicial officials for performing their judicial functions. While within executive foreign affairs authority, the unprecedented targeting of judicial officials undermines the principle of judicial independence and international rule of law frameworks.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -2,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -2,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The Constitution vests foreign affairs authority in the executive. Sanctions authority is well-established. However, targeting judicial officials for performing judicial functions raises due process concerns about punishing individuals for lawful professional conduct. The principle of judicial independence, central to Article III domestically, is undermined when the US sanctions foreign judges.",
      "OR": "The Founders valued judicial independence as a cornerstone of legitimate governance. While ICC jurisdiction over US personnel is contested, sanctioning judges for exercising judicial authority contradicts the founding commitment to independent adjudication and rule of law.",
      "DC": "Executive sanctions authority is established under IEEPA and other statutes. The US is not a party to the Rome Statute. However, sanctioning judicial officials for conducting investigations is unprecedented and creates tension with international rule of law norms that US courts have historically respected under international comity principles.",
      "LC": "Sanctioning international judicial officials undermines the global rule of law architecture. The constitutional commitment to due process and judicial independence extends to respecting judicial institutions that hold powerful actors accountable. The order signals impunity for violations of international humanitarian law.",
      "PR": "Sanctioning ICC officials damages US credibility in promoting international rule of law. Allies that support the ICC view such sanctions as undermining accountability mechanisms. The US benefits from international legal frameworks even when not a party to specific institutions.",
      "SM": "The US is not a party to the Rome Statute and has consistently objected to ICC jurisdiction over US personnel. Sovereignty requires protecting citizens and allies from unauthorized foreign judicial processes. Executive sanctions authority includes defending national interests against overreaching international institutions."
    }
  },
  {
    "id": "south-africa-sanctions",
    "title": "Addressing Egregious Actions of Republic of South Africa",
    "date": "2025-02-07",
    "type": "Executive Order 14204",
    "admin": "Trump II",
    "desc": "Imposed sanctions and aid cuts on South Africa over land reform policies and participation in ICJ proceedings against Israel.",
    "brief": "Executive order imposing sanctions and cutting aid to South Africa in response to its land reform policies and its role in bringing the ICJ genocide case against Israel. The order raised foreign affairs questions about using economic pressure to influence a sovereign nation's domestic policies and participation in international judicial proceedings. The action was unprecedented in targeting a nation for exercising its rights before the International Court of Justice.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -2,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "Executive sanctions authority over foreign nations is established. However, sanctioning a sovereign nation for exercising its rights before the ICJ raises concerns about undermining international legal processes. The equal protection implications of targeting a Black-majority nation over land reform echo troubling historical patterns.",
      "OR": "The Founders granted the executive broad foreign affairs authority including trade restrictions. However, punishing a nation for participating in international judicial processes contradicts the founding commitment to rule of law and peaceful dispute resolution among nations.",
      "DC": "Executive sanctions authority is broad under IEEPA and related statutes. Foreign affairs decisions receive Curtiss-Wright deference. However, targeting a nation for bringing a case before the ICJ is unprecedented and raises questions about whether sanctions can be used to obstruct international judicial processes.",
      "LC": "Sanctioning South Africa over land reform to address historical dispossession raises profound equal protection concerns. The racial dynamics of opposing a Black-majority nation's efforts to remedy colonial-era land theft reflect constitutional values of equality in reverse. Punishing ICJ participation undermines international accountability.",
      "PR": "South Africa's land reform addresses well-documented colonial dispossession. Sanctioning a sovereign nation for pursuing legal remedies at the ICJ damages US credibility as a supporter of international law. Peer democracies do not sanction nations for participating in international judicial proceedings.",
      "SM": "The President has broad discretion over foreign relations and sanctions. Protecting allied nations from hostile international legal proceedings serves strategic interests. Property rights concerns in South Africa's land reform are legitimate bases for diplomatic pressure. Executive authority over foreign affairs is at its constitutional apex."
    }
  },
  {
    "id": "fcpa-pause",
    "title": "Pausing Foreign Corrupt Practices Act Enforcement",
    "date": "2025-02-10",
    "type": "Executive Order 14209",
    "admin": "Trump II",
    "desc": "Directed DOJ to pause enforcement of the Foreign Corrupt Practices Act, raising Take Care Clause concerns about faithfully executing federal law.",
    "brief": "Executive order directing the Department of Justice to pause enforcement of the Foreign Corrupt Practices Act, a federal anti-corruption statute prohibiting bribery of foreign officials by US companies. The order raises significant Take Care Clause concerns, as the President is constitutionally obligated to faithfully execute the laws. Suspending enforcement of a valid federal statute implicates separation of powers by effectively nullifying a congressional enactment through executive inaction.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "Article II requires the President to take care that the laws be faithfully executed. The FCPA is a valid federal statute enacted by Congress. Directing DOJ to pause enforcement of a valid law raises direct Take Care Clause concerns. Prosecutorial discretion permits prioritization but not categorical suspension of enforcement.",
      "OR": "The Founders vested law execution in the President as a duty, not a discretionary power. The Take Care Clause was specifically designed to prevent the executive from suspending laws—a grievance against the Crown enumerated in the Declaration of Independence. Categorical enforcement pauses violate this core founding principle.",
      "DC": "Heckler v. Chaney recognized prosecutorial discretion for individual cases, but categorical non-enforcement of valid statutes is distinguishable. The Take Care Clause requires faithful execution, not selective nullification. Courts have found that blanket refusal to enforce statutes violates the executive's constitutional obligations.",
      "LC": "Pausing anti-corruption enforcement signals tolerance for bribery of foreign officials. Corruption disproportionately harms developing nations and undermines democratic governance. The constitutional commitment to rule of law requires enforcement of anti-corruption statutes.",
      "PR": "FCPA enforcement deters corporate bribery that distorts markets and harms governance in developing countries. US anti-corruption leadership has been a competitive advantage. Pausing enforcement invites corruption and damages international business integrity standards.",
      "SM": "Prosecutorial discretion includes resource allocation and enforcement prioritization. The FCPA's extraterritorial reach creates competitive disadvantages for US companies. Reviewing enforcement guidelines to ensure proportionality and consistency serves legitimate executive functions."
    }
  },
  {
    "id": "english-official-language",
    "title": "Designating English as Official Language of the United States",
    "date": "2025-03-01",
    "type": "Executive Order 14224",
    "admin": "Trump II",
    "desc": "Designated English as the official language of the United States by executive order, a measure Congress has never enacted.",
    "brief": "Executive order designating English as the official language of the United States, a policy that Congress has considered but never passed. The order raises equal protection concerns for non-English speakers' access to government services, due process implications for limited English proficiency individuals in legal proceedings, and separation of powers questions about whether the executive can establish official language policy without congressional action. Executive Order 13166 previously required federal programs to ensure language access.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The Constitution does not designate an official language. The Equal Protection Clause prohibits discrimination that denies meaningful access to government services. Due process requires that individuals understand proceedings affecting their rights. An executive order establishing national language policy exceeds executive authority on a matter Congress has explicitly declined to enact.",
      "OR": "The Founders deliberately chose not to designate an official language despite operating in a multilingual nation. Many Founders spoke multiple languages and recognized linguistic diversity. The Constitution was debated in multiple languages. Imposing an official language by executive fiat contradicts founding practice and values.",
      "DC": "Lau v. Nichols established that language-based exclusion can constitute national origin discrimination under Title VI. Executive Order 13166 recognized language access obligations. Congress has repeatedly considered but not passed official English legislation. Executive establishment of language policy without congressional authorization raises separation of powers concerns under Youngstown.",
      "LC": "Language access is essential for equal protection and due process. Over 25 million Americans have limited English proficiency. Official English designations historically function as tools of exclusion targeting immigrant communities. The constitutional arc has expanded, not contracted, language access protections.",
      "PR": "Multilingual government services improve public health outcomes, emergency response, and civic participation. Peer democracies with official language policies maintain robust translation services. Evidence shows bilingual populations contribute more to economic productivity.",
      "SM": "English proficiency promotes civic integration and economic mobility. A common language facilitates democratic participation and national unity. The executive has authority to establish administrative language policies for federal agencies. Official English designation is a governance efficiency measure, not a restriction on private language use."
    }
  },
  {
    "id": "perkins-coie-sanctions",
    "title": "Addressing Risks From Perkins Coie LLP",
    "date": "2025-03-06",
    "type": "Executive Order 14230",
    "admin": "Trump II",
    "desc": "Targeted specific law firm that represented Democratic clients with security clearance revocations and federal contract bans, raising severe due process and bill of attainder concerns.",
    "brief": "Executive order targeting Perkins Coie LLP, a law firm that represented Democratic clients including the Hillary Clinton campaign, with security clearance revocations for firm employees and bans on federal contracts. The order raises severe constitutional concerns including due process violations for punishing a specific entity without judicial process, First Amendment right to counsel and associational freedom, and potential bill of attainder issues by targeting a named private entity for legislative-type punishment through executive action.",
    "scores": {
      "TX": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "Article I, Section 9 prohibits bills of attainder—legislative punishment of specific individuals or entities without trial. The Fifth Amendment guarantees due process. The First Amendment protects the right to counsel and freedom of association. Targeting a named law firm with punitive sanctions without judicial process violates all three constitutional provisions.",
      "OR": "The Founders specifically prohibited bills of attainder because they had witnessed the Crown targeting political opponents through legislative punishment. Targeting a law firm for representing political opponents is precisely the type of retaliatory government action the Bill of Attainder Clause was designed to prevent.",
      "DC": "Bills of attainder are prohibited by Article I, Sections 9 and 10 (United States v. Lovett, Nixon v. GSA). Due process requires individualized adjudication before imposing sanctions. The right to counsel is protected under the Sixth Amendment and the First Amendment's associational freedoms. Targeting a specific firm by name for punitive action is unprecedented and doctrinally indefensible.",
      "LC": "Targeting lawyers for representing clients strikes at the foundation of the adversarial legal system. The constitutional commitment to due process requires that all parties have access to legal representation without fear of government retaliation. This order creates a chilling effect on the entire legal profession.",
      "PR": "Retaliatory sanctions against law firms deter legal representation of politically disfavored clients. Functional legal systems require lawyers to represent all clients without fear of government reprisal. No peer democracy targets specific law firms by executive order for their client representation choices.",
      "SM": "The executive has authority to manage security clearances and federal contracts. However, targeting a specific named firm raises significant process concerns even under the most favorable reading. A general review of security clearance criteria would achieve legitimate security goals without the appearance of political targeting."
    }
  },
  {
    "id": "paul-weiss-sanctions",
    "title": "Addressing Risks From Paul Weiss",
    "date": "2025-03-14",
    "type": "Executive Order 14237",
    "admin": "Trump II",
    "desc": "Targeted law firm Paul Weiss with sanctions similar to Perkins Coie; rescinded after the firm publicly capitulated to administration demands.",
    "brief": "Executive order targeting the law firm Paul, Weiss, Rifkind, Wharton & Garrison with security clearance revocations and contract bans, similar to the Perkins Coie order. The order was rescinded after the firm publicly capitulated to administration demands, demonstrating the coercive intent. The order raises identical bill of attainder, due process, and First Amendment concerns as the Perkins Coie order, compounded by the demonstrated pattern of using executive power to coerce private entities into compliance.",
    "scores": {
      "TX": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The Bill of Attainder Clause, Due Process Clause, and First Amendment all prohibit targeting a specific named entity with punitive action without judicial process. The coercive pattern is confirmed by the order's rescission after the firm capitulated, demonstrating it was designed to extract compliance rather than address genuine security concerns.",
      "OR": "The Founders prohibited bills of attainder precisely to prevent executive or legislative punishment of political opponents. The pattern of targeting, coercion, and rescission upon capitulation represents the exact abuse the Constitution's structural protections were designed to prevent. This is executive overreach in its most concerning form.",
      "DC": "Identical to Perkins Coie, this order violates bill of attainder doctrine (United States v. Lovett), due process requirements, and First Amendment protections. The rescission upon capitulation strengthens the legal case that the order was retaliatory rather than security-based, undermining any rational basis defense.",
      "LC": "The pattern of targeting law firms, extracting capitulation, and rescinding reveals coercive intent that strikes at the heart of the legal system. When the government can effectively control which clients lawyers will represent through threats of economic punishment, the adversarial system and access to justice collapse.",
      "PR": "The capitulation pattern demonstrates the coercive mechanism: target, pressure, extract compliance. This creates a precedent where any law firm can be pressured into abandoning clients the administration opposes. No functioning democracy permits executive targeting of legal representation.",
      "SM": "Executive security clearance and contracting authority exists, but the pattern of targeting and rescission upon capitulation undermines the security rationale. Even the most favorable reading must acknowledge that rescission upon compliance suggests the purpose was coercion rather than addressing genuine risks."
    }
  },
  {
    "id": "bitcoin-reserve",
    "title": "Strategic Bitcoin Reserve",
    "date": "2025-03-06",
    "type": "Executive Order 14233",
    "admin": "Trump II",
    "desc": "Created a strategic Bitcoin reserve using seized cryptocurrency assets, raising Appropriations Clause questions about executive creation of sovereign reserves.",
    "brief": "Executive order establishing a strategic Bitcoin reserve using cryptocurrency assets seized through federal law enforcement actions. The order raised Appropriations Clause questions about whether the executive can create sovereign financial reserves without congressional authorization, as well as novel questions about executive property management authority over seized digital assets. The constitutional footprint is moderate given that the order primarily concerns management of already-seized assets rather than new spending.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "Article I, Section 8 grants Congress power to coin money and regulate its value. Creating a sovereign reserve of a volatile digital asset without congressional authorization raises Appropriations Clause and monetary authority concerns. The Property Clause grants Congress authority over federal property, not the executive.",
      "OR": "The Founders vested monetary authority in Congress precisely to prevent executive control over the nation's financial instruments. Creating sovereign reserves without congressional authorization extends executive power into an area the Constitution explicitly assigns to the legislature.",
      "DC": "Executive management of seized assets has statutory authorization under forfeiture laws. However, creating a strategic reserve represents a policy decision of significant economic magnitude that may implicate the major questions doctrine. No precedent exists for executive creation of sovereign cryptocurrency reserves, making the doctrinal analysis novel and uncertain.",
      "LC": "Bitcoin's volatility creates financial risk for the public treasury. Creating sovereign reserves of speculative assets without democratic deliberation raises concerns about accountability and potential conflicts of interest. The welfare implications of committing public assets to volatile instruments merit congressional oversight.",
      "PR": "Bitcoin's price volatility makes it a poor store of value for sovereign reserves. No peer democracy has established cryptocurrency sovereign reserves. The potential for conflicts of interest given cryptocurrency industry involvement in political donations creates governance concerns.",
      "SM": "The executive has authority to manage seized federal assets, including digital currencies. Establishing a strategic reserve from already-seized assets involves no new spending. Bitcoin's growing institutional adoption supports treating it as a strategic asset. The order represents innovative asset management within existing executive authority."
    }
  },
  {
    "id": "weaponization-end",
    "title": "Ending Weaponization of the Federal Government",
    "date": "2025-01-20",
    "type": "Executive Order 14147",
    "admin": "Trump II",
    "desc": "Directed review of federal agencies allegedly weaponized against political allies, raising concerns about undermining law enforcement independence.",
    "brief": "Executive order directing review of alleged weaponization of federal agencies including DOJ and FBI, with focus on investigations of political allies. While framed as ending government abuse of power, the order raised concerns about undermining law enforcement independence by directing reviews targeting specific investigations. The order threatened to politicize prosecutorial decisions and create a chilling effect on career law enforcement professionals investigating politically connected individuals.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -2,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "Article II vests executive power in the President, including authority over executive agencies. However, due process requires that law enforcement operate independently from political direction. Equal protection is violated when investigations are directed or terminated based on political affiliation rather than evidence.",
      "OR": "The Founders created an independent judiciary and valued impartial law enforcement. Directing reviews of specific investigations of political allies mirrors the very abuse of power the Constitution's structural protections were designed to prevent. The rule of law requires equal application regardless of political connections.",
      "DC": "The President has supervisory authority over executive agencies. However, DOJ independence norms, while not constitutionally mandated, represent established institutional practice dating to Watergate reforms. Directing review of specific investigations raises concerns under Morrison v. Olson and broader separation of powers principles regarding prosecutorial independence.",
      "LC": "Equal application of law is a constitutional imperative. When the executive directs law enforcement to protect political allies, it creates a two-tiered justice system that undermines the Fourteenth Amendment's promise of equal protection. The order effectively shields politically connected individuals from accountability.",
      "PR": "Politicized law enforcement agencies produce less effective outcomes and erode public trust. Countries with politically directed prosecution show higher corruption and lower rule-of-law scores. Independent law enforcement is correlated with democratic stability and public safety.",
      "SM": "Government agencies can be weaponized against political opponents, as documented throughout American history. The executive has legitimate authority to review agency conduct and correct abuses. Ensuring agencies operate within legal bounds serves constitutional values of fairness and due process."
    }
  },
  {
    "id": "tiktok-application",
    "title": "TikTok Application of PAFACA",
    "date": "2025-01-20",
    "type": "Executive Order 14166",
    "admin": "Trump II",
    "desc": "Extended enforcement deadline for congressionally mandated TikTok ban, raising Take Care Clause questions about executive suspension of valid law.",
    "brief": "Executive order extending the enforcement deadline for the Protecting Americans from Foreign Adversary Controlled Applications Act (PAFACA), which Congress passed requiring TikTok's divestiture or ban. The order raised Take Care Clause concerns about whether the President can unilaterally delay enforcement of a statute Congress passed and the President signed. The action also implicated First Amendment free speech concerns regarding government restriction of a communications platform used by 170 million Americans.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The Take Care Clause requires faithful execution of the laws. The President cannot unilaterally suspend a statute Congress enacted. However, the First Amendment protects the speech of 170 million American users, creating tension between faithful execution and free speech. The executive delay creates a novel constitutional conflict between these principles.",
      "OR": "The Founders required the President to faithfully execute laws passed by Congress. Unilateral delay of a valid statute echoes the royal suspending and dispensing powers that the Founders specifically rejected. Original understanding clearly prohibits executive suspension of legislative enactments.",
      "DC": "The Take Care Clause requires faithful execution. While the executive has some timing discretion in enforcement, delaying a statute with a specific congressional deadline is distinguishable from routine enforcement prioritization. The Supreme Court has recognized executive enforcement discretion but not the power to suspend statutes (Kendall v. United States).",
      "LC": "The free speech implications of banning a platform used by 170 million Americans are severe. Delay may serve First Amendment values even if it creates Take Care Clause tensions. The constitutional commitment to free expression supports caution before eliminating a major communications channel.",
      "PR": "TikTok is used by 170 million Americans for expression, commerce, and community building. Abrupt bans would disrupt small businesses and content creators. Negotiated solutions preserve both security interests and free expression. Peer democracies have addressed TikTok concerns through regulation rather than bans.",
      "SM": "The President has authority to manage the timing and manner of law enforcement. PAFACA grants the President some discretion in implementation. Extending the deadline allows for negotiation of a resolution that addresses both national security concerns and the interests of millions of American users."
    }
  },
  {
    "id": "military-border",
    "title": "Clarifying Military's Role in Protecting Territorial Integrity",
    "date": "2025-01-20",
    "type": "Executive Order 14167",
    "admin": "Trump II",
    "desc": "Expanded military deployment to the southern border for immigration enforcement, raising Posse Comitatus Act and civil liberties concerns.",
    "brief": "Executive order expanding military deployment to the southern border for immigration enforcement purposes, blurring the line between military and civilian law enforcement. The order raised concerns under the Posse Comitatus Act, which restricts the use of military personnel for domestic law enforcement. Civil liberties concerns centered on militarizing immigration enforcement, deploying armed military forces against civilian populations, and the erosion of traditional boundaries between military and civilian governance.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The Posse Comitatus Act (18 USC 1385) prohibits use of the military for civilian law enforcement absent congressional authorization. The Third Amendment reflects founding-era concerns about military deployment among civilians. Article I grants Congress authority to call forth the militia, not the President unilaterally.",
      "OR": "The Founders deeply feared standing armies and military involvement in domestic affairs. The Third Amendment, Posse Comitatus tradition, and civilian control of the military all reflect original understanding that military force should not be deployed against or among civilian populations for law enforcement purposes.",
      "DC": "The Posse Comitatus Act restricts military law enforcement roles. Exceptions exist for national guard under state authority and specific statutory authorizations. While the Insurrection Act provides potential authority, it requires conditions not clearly met by immigration enforcement. Border security has precedent for military support roles, but direct enforcement activities test doctrinal boundaries.",
      "LC": "Militarizing immigration enforcement dehumanizes communities and creates fear. Armed military deployment against civilian populations—predominantly communities of color—raises severe equal protection and civil liberties concerns. The constitutional commitment to civilian governance is undermined by military enforcement of civil law.",
      "PR": "Evidence shows militarized border enforcement is less cost-effective than civilian enforcement and immigration courts. Military deployment creates diplomatic tensions with neighboring countries. Peer democracies use civilian agencies, not military forces, for immigration enforcement.",
      "SM": "The President is Commander-in-Chief and has authority to deploy military forces to protect territorial integrity. Border security is a core national defense function. Military support for border operations has precedent across multiple administrations. The executive has inherent authority to defend the nation's borders."
    }
  },
  {
    "id": "refugee-realignment",
    "title": "Realigning US Refugee Admissions Program",
    "date": "2025-01-20",
    "type": "Executive Order 14163",
    "admin": "Trump II",
    "desc": "Suspended the US Refugee Admissions Program and drastically reduced the annual refugee ceiling to near zero.",
    "brief": "Executive Order 14163 suspended the US Refugee Admissions Program and set the refugee admissions ceiling at effectively zero. While the President has statutory authority under the Refugee Act of 1980 to set annual refugee ceilings, a complete suspension raised due process concerns for refugees already in the pipeline and welfare questions about abandoning international protection obligations. The US is a signatory to the 1967 Protocol Relating to the Status of Refugees, creating tension between executive discretion and international commitments.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The Refugee Act of 1980 grants the President authority to set annual refugee ceilings, but the statute envisions a functioning admissions program, not indefinite suspension. The Fifth Amendment protects due process interests of refugees already approved and in the pipeline. Complete suspension rather than reduced ceiling strains the textual framework Congress established.",
      "OR": "The Founders vested immigration power primarily in Congress, with executive enforcement discretion. The Refugee Act represents a congressional policy judgment that the President may modulate but not nullify. Original understanding of executive discretion did not extend to suspending entire congressionally mandated programs.",
      "DC": "INS v. Cardoza-Fonseca established that the Refugee Act creates legal entitlements distinct from general immigration discretion. While executive authority over refugee ceilings is broad, complete suspension of a congressionally mandated program tests the limits of delegation doctrine. Refugees in the pipeline have cognizable due process interests.",
      "LC": "International refugee protection reflects the constitutional commitment to human dignity and welfare. Complete suspension abandons vulnerable populations and reverses decades of humanitarian policy. The constitutional arc toward expanding protections for persecuted persons is undermined by categorical exclusion.",
      "PR": "The US resettles a fraction of global refugees and the program has strong vetting. Peer democracies maintain refugee programs even during restrictive periods. Complete suspension damages diplomatic credibility and abandons individuals who assisted US operations abroad, creating practical national security risks.",
      "SM": "The President has broad statutory authority to determine refugee admissions numbers and the Refugee Act explicitly grants ceiling-setting power. National security concerns about vetting justify temporary pauses. The executive is exercising explicitly delegated authority to manage the scope of admissions."
    }
  },
  {
    "id": "un-withdrawal",
    "title": "Withdrawing from United Nations Organizations",
    "date": "2025-02-04",
    "type": "Executive Order 14199",
    "admin": "Trump II",
    "desc": "Directed withdrawal from multiple United Nations bodies including the UN Human Rights Council.",
    "brief": "Executive Order 14199 directed US withdrawal from multiple UN organizations including the UNHRC. The order raised questions about whether the President can unilaterally withdraw from international organizations that Congress has authorized participation in and funded through appropriations. While the President exercises broad foreign affairs authority, congressional appropriations and statutory authorizations for participation create separation of powers tensions. The order also implicated sovereignty questions about the balance between international cooperation and national autonomy.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The Constitution grants the President broad authority over foreign affairs, but Congress authorized US participation in UN bodies through statutes and funded them through appropriations. Unilateral withdrawal from congressionally authorized organizations strains the separation of powers by effectively nullifying legislative commitments. The text does not clearly grant withdrawal authority from international organizations Congress has joined.",
      "OR": "The Founders divided foreign affairs power between branches, with the President conducting diplomacy and Congress funding and authorizing treaty obligations. Original understanding supports executive flexibility in managing diplomatic relationships, but withdrawing from organizations Congress authorized and funded through statute raises concerns about executive overreach into legislative commitments.",
      "DC": "Goldwater v. Carter left treaty termination questions largely unresolved, and the withdrawal from international organizations Congress has funded occupies a similar doctrinal gray area. The President has traditionally exercised significant foreign affairs discretion, but unilateral withdrawal from congressionally-mandated participation challenges the balance established in the Youngstown framework.",
      "LC": "International human rights bodies serve the constitutional commitment to dignity and equality. Withdrawal from the UNHRC signals retreat from global accountability mechanisms that reinforce domestic constitutional values. The arc of constitutional development supports engagement with international human rights frameworks.",
      "PR": "Withdrawal reduces US influence over global human rights standards and cedes leadership to authoritarian regimes. Peer democracies maintain engagement with UN bodies even when criticizing them. Practical diplomacy requires presence at the table rather than absence.",
      "SM": "The President has broad authority over foreign affairs and diplomatic engagement. UN bodies often exhibit anti-American bias and inefficiency. Withdrawal preserves sovereignty and allows reallocation of resources to more effective bilateral arrangements. Congressional funding does not mandate perpetual participation."
    }
  },
  {
    "id": "doge-workforce",
    "title": "DOGE Workforce Optimization Initiative",
    "date": "2025-02-11",
    "type": "Executive Order 14210",
    "admin": "Trump II",
    "desc": "Directed mass federal workforce reduction based on DOGE recommendations, bypassing civil service protections.",
    "brief": "Executive Order 14210 directed agencies to implement mass workforce reductions based on recommendations from the Department of Government Efficiency. The order raised significant due process concerns for terminated employees who hold property interests in continued employment under civil service protections. Appointments Clause issues arose from DOGE operatives exercising significant governmental authority without Senate confirmation. The order also raised questions about whether mass terminations violate the Pendleton Act and other civil service statutes that Congress enacted to protect merit-based employment.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The Appointments Clause requires Senate confirmation for officers exercising significant governmental authority. DOGE operatives directing mass firings without proper appointment violates this textual requirement. Civil service statutes enacted by Congress create property interests in continued employment that the Fifth Amendment protects through due process requirements. Mass terminations without individualized review violate statutory protections the executive cannot override.",
      "OR": "The Founders created the Appointments Clause specifically to prevent unaccountable persons from exercising governmental power. The Pendleton Act reflected a constitutional evolution away from patronage that the original design anticipated. Mass workforce reduction directed by unconfirmed private actors contradicts the original understanding of accountable government.",
      "DC": "Cleveland Board of Education v. Loudermill established that employees with property interests in continued employment are entitled to due process before termination. The Appointments Clause doctrine from Buckley v. Valeo and Lucia v. SEC requires proper appointment for those exercising significant authority. DOGE-directed mass firings conflict with both lines of precedent.",
      "LC": "Modern governance depends on professional civil service insulated from political interference. Mass terminations undermine institutional competence and the constitutional commitment to effective government. The arc of constitutional development has strengthened employment protections, not weakened them.",
      "PR": "Rapid mass terminations disrupted essential government services including veterans benefits, food safety inspections, and disaster response. Countries with politicized civil services show measurably worse governance outcomes. Effective reform requires deliberate restructuring, not wholesale firing.",
      "SM": "The President has constitutional authority over executive branch management and Article II vests executive power including personnel decisions. Workforce optimization serves fiscal responsibility and government efficiency. Advisory recommendations from DOGE inform but do not replace presidential authority over the executive branch."
    }
  },
  {
    "id": "federal-bureaucracy-reduction",
    "title": "Commencing Reduction of the Federal Bureaucracy",
    "date": "2025-02-19",
    "type": "Executive Order 14217",
    "admin": "Trump II",
    "desc": "Ordered elimination of multiple federal agencies and offices that Congress created by statute.",
    "brief": "Executive Order 14217 directed the elimination of numerous federal agencies and offices established by acts of Congress. This raised severe separation of powers concerns because Congress creates agencies through legislation, and the executive cannot unilaterally abolish entities that exist by statute. The order effectively attempted to repeal Congressional enactments through executive action, undermining the legislative process. Additional concerns arose about democratic accountability and the welfare impacts of eliminating agencies that administer congressionally mandated programs.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "Article I vests legislative power in Congress, including the authority to establish federal agencies. The President cannot unilaterally eliminate agencies Congress created by statute. The Take Care Clause requires the President to faithfully execute the laws, not abolish the instruments Congress designed for their execution. This order directly contradicts the constitutional text on legislative authority.",
      "OR": "The Founders designed a system where Congress creates governmental structures and the Executive implements them. The power to create and destroy agencies resides in the legislature. Hamilton and Madison both emphasized that the Executive administers, not legislates. Unilateral agency abolition inverts the constitutional design.",
      "DC": "The Supreme Court in Humphrey's Executor and subsequent cases recognized Congress's authority to structure the executive branch through legislation. The President cannot repeal statutory mandates through executive order. Youngstown's Category 3 analysis applies when the President acts contrary to congressional will, placing executive power at its lowest ebb.",
      "LC": "Constitutional governance requires that democratic institutions function as designed. Eliminating agencies that serve vulnerable populations and enforce civil rights protections undermines the constitutional commitment to welfare and equality. The arc of development has expanded government capacity to serve the general welfare.",
      "PR": "Eliminating agencies that administer essential programs causes cascading disruptions to services millions depend on. Effective government reform requires legislative process to ensure continuity. Peer democracies restructure agencies through legislative action, not executive decree.",
      "SM": "The President has broad authority over executive branch organization and management. Many agencies have overlapping functions and consolidation serves efficiency. The executive may propose reorganization and redirect resources within legal bounds to streamline government operations."
    }
  },
  {
    "id": "anti-semitism-measures",
    "title": "Additional Measures to Combat Anti-Semitism",
    "date": "2025-01-29",
    "type": "Executive Order 14188",
    "admin": "Trump II",
    "desc": "Expanded federal enforcement of anti-semitism protections in federally funded institutions using the IHRA definition.",
    "brief": "Executive Order 14188 expanded anti-semitism protections by directing agencies to apply the International Holocaust Remembrance Alliance definition of anti-semitism in enforcement of civil rights laws at federally funded institutions. While combating anti-semitism serves equal protection values, the IHRA definition includes examples that critics argue could encompass protected political speech about Israel, raising First Amendment concerns. The order generally furthered civil rights objectives but created tension between anti-discrimination enforcement and free expression.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The First Amendment protects political speech, including criticism of foreign governments. The IHRA definition's examples referencing Israel could encompass constitutionally protected expression. While anti-discrimination enforcement serves equal protection, the text of the First Amendment prohibits government from restricting speech based on viewpoint, even when that speech is offensive.",
      "OR": "The Founders prioritized free expression and political speech as essential to self-governance. Original understanding strongly protects the right to criticize governments and policies. Anti-discrimination enforcement must not become a vehicle for suppressing political viewpoints the Founders considered core to democratic participation.",
      "DC": "Title VI enforcement against discrimination has strong doctrinal support, and Grutter v. Bollinger recognized compelling interests in campus diversity. However, First Amendment overbreadth doctrine (Broadrick v. Oklahoma) raises concerns when definitions could chill protected speech. The balance between anti-discrimination and free expression is doctrinally sensitive.",
      "LC": "Combating anti-semitism furthers constitutional commitments to equal dignity and protection. However, the evolving understanding of free expression requires that anti-discrimination definitions not suppress legitimate political discourse. Both equality and speech values must be honored simultaneously.",
      "PR": "Rising anti-semitism on campuses demands effective response, and federal enforcement creates accountability. However, overbroad definitions have chilling effects on academic freedom and political speech. Effective anti-discrimination policy must be precisely tailored to avoid suppressing legitimate discourse.",
      "SM": "The executive has authority to direct civil rights enforcement and the IHRA definition provides a widely adopted framework for identifying anti-semitism. Enforcement targets discriminatory conduct, not protected speech. The definition serves legitimate civil rights goals and reflects international consensus on identifying anti-semitism."
    }
  },
  {
    "id": "anti-christian-bias",
    "title": "Eradicating Anti-Christian Bias",
    "date": "2025-02-06",
    "type": "Executive Order 14202",
    "admin": "Trump II",
    "desc": "Directed federal agencies to address perceived anti-Christian bias in federal policies and enforcement.",
    "brief": "Executive Order 14202 directed agencies to identify and remedy perceived anti-Christian bias in federal policies and programs. The order raised significant Establishment Clause concerns because it singled out one religion for favorable governmental attention, potentially creating a religious preference. While the Free Exercise Clause protects religious practice from government interference, the Establishment Clause prohibits government from favoring one religion over others. The order created tension between these two Religion Clause provisions.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The Establishment Clause prohibits government from favoring one religion. The Free Exercise Clause protects religious practice. An order specifically addressing anti-Christian bias, rather than anti-religious bias generally, creates textual tension with the Establishment Clause's neutrality requirement. Government may protect free exercise without singling out one faith for preferential treatment.",
      "OR": "The Founders debated the Religion Clauses extensively. Madison's Memorial and Remonstrance argued against government favoring any religion. The original understanding of the Establishment Clause was broad denominational neutrality. However, some originalists argue the Clause prohibited only establishing a national church, leaving room for non-preferential accommodation.",
      "DC": "Lemon v. Kurtzman and its progeny require government neutrality among religions. While the Free Exercise line from Fulton v. City of Philadelphia strengthens religious accommodation, singling out one religion for protective action risks violating the neutrality principle. Kennedy v. Bremerton shifted doctrine but did not endorse denominational preference.",
      "LC": "The constitutional arc has moved toward pluralism and equal treatment of all faiths. Singling out Christianity for government protection creates a hierarchy of religions that contradicts evolved Establishment Clause values. Religious liberty protections should apply equally to all faiths.",
      "PR": "Effective religious liberty policy protects all faiths equally. Singling out one religion creates resentment and perceived favoritism. Peer democracies with robust religious freedom protections maintain denominational neutrality in government action.",
      "SM": "The Free Exercise Clause protects religious practice from government hostility. If evidence shows anti-Christian bias in federal enforcement, the executive has authority to remedy discriminatory application of neutral laws. Protecting the religious liberty of the majority faith does not constitute establishment."
    }
  },
  {
    "id": "second-amendment",
    "title": "Protecting Second Amendment Rights",
    "date": "2025-02-07",
    "type": "Executive Order 14206",
    "admin": "Trump II",
    "desc": "Directed agencies to protect gun rights and rescind Biden-era firearms regulations and enforcement actions.",
    "brief": "Executive Order 14206 directed federal agencies to protect Second Amendment rights by rolling back Biden-era firearms regulations and enforcement priorities. The order operated within executive enforcement discretion and aligned with individual rights under the Second Amendment as recognized in Heller and Bruen. However, questions arose about whether declining to enforce valid statutory gun regulations violates the Take Care Clause, which requires the President to faithfully execute the laws Congress enacted.",
    "scores": {
      "TX": {
        "R": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The Second Amendment protects the right to keep and bear arms. Directing agencies to align enforcement with this right has textual support. However, the Take Care Clause requires faithful execution of valid statutes, and declining to enforce congressionally enacted gun regulations creates tension between two constitutional commands.",
      "OR": "The Second Amendment protects an individual right to bear arms as the Founders understood it. Heller confirmed this original understanding. Directing agencies to respect this right aligns with founding-era commitments. The original understanding of executive enforcement discretion, however, did not encompass categorical non-enforcement of valid laws.",
      "DC": "Heller and McDonald established individual Second Amendment rights, and Bruen created a historical-tradition test for firearms regulations. Executive enforcement priorities aligning with these decisions have doctrinal support. However, declining to enforce valid statutory provisions raises Take Care Clause concerns under the Youngstown framework.",
      "LC": "The Second Amendment coexists with the government's compelling interest in public safety. Rolling back evidence-based firearms regulations increases gun violence risk, undermining the constitutional commitment to welfare and security. Modern conditions with mass shootings demand updated regulatory approaches.",
      "PR": "Countries with stronger firearms regulation have dramatically lower gun death rates. Rolling back enforcement of background checks and other safety measures contradicts empirical evidence on gun violence prevention. Public safety outcomes should inform enforcement priorities.",
      "SM": "The Second Amendment is a fundamental individual right confirmed by the Supreme Court. The executive has broad enforcement discretion and may prioritize protecting constitutional rights over regulations of questionable constitutionality. Aligning enforcement with the Constitution is the essence of the Take Care Clause."
    }
  },
  {
    "id": "election-interference-accountability",
    "title": "Holding Former Officials Accountable for Election Interference",
    "date": "2025-01-20",
    "type": "Executive Order 14152",
    "admin": "Trump II",
    "desc": "Directed investigations into former intelligence officials who signed the Hunter Biden laptop letter and other alleged election interference.",
    "brief": "Executive Order 14152 directed investigations into former government officials who allegedly interfered in elections, particularly targeting intelligence officials who signed a letter about the Hunter Biden laptop. The order raised severe due process concerns about using executive power for political retribution against individuals exercising First Amendment rights. It implicated separation of powers by directing prosecutorial resources toward political opponents and raised fundamental questions about weaponizing federal investigations for punitive purposes.",
    "scores": {
      "TX": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The First Amendment protects the right of former officials to express opinions, including about election integrity. Directing federal investigations at individuals for protected speech violates core free expression guarantees. The Due Process Clause prohibits using government power for punitive targeting of political opponents. The Bill of Attainder Clause bars legislative or executive punishment of named individuals without judicial process.",
      "OR": "The Founders specifically warned against government persecution of political opponents. The First Amendment was enacted precisely to protect political speech from government retaliation. The original understanding of executive power did not include directing investigations to punish critics, which the Founders would recognize as tyrannical abuse.",
      "DC": "Hartman v. Moore established that retaliatory prosecution claims are cognizable under the First Amendment. The independence of prosecutorial judgment from political direction is a cornerstone of rule of law doctrine. Directing investigations at named political opponents contradicts established norms of prosecutorial independence.",
      "LC": "Democratic governance requires that opposition and dissent be protected, not punished. Using executive power to investigate political opponents represents authoritarian regression inconsistent with the constitutional commitment to democratic accountability and free expression.",
      "PR": "Politicized investigations undermine public trust in justice institutions and create chilling effects on political participation. Peer democracies with independent prosecutorial systems show stronger rule of law outcomes. Retaliatory investigations are a hallmark of authoritarian governance.",
      "SM": "The executive has authority to investigate potential government misconduct, and former officials who may have coordinated to influence elections deserve scrutiny. Accountability for potential abuses of intelligence authority serves democratic integrity. However, investigation must follow evidence rather than political targeting."
    }
  },
  {
    "id": "iron-dome",
    "title": "The Iron Dome for America",
    "date": "2025-01-27",
    "type": "Executive Order 14186",
    "admin": "Trump II",
    "desc": "Directed development of a comprehensive missile defense shield for the US homeland.",
    "brief": "Executive Order 14186 directed the development of a comprehensive missile defense system for the American homeland. The initiative falls broadly within the President's Commander-in-Chief authority over national defense. However, the scale of spending required raises Appropriations Clause questions about directing defense expenditures not specifically authorized by Congress. The order's constitutional footprint is moderate, as defense planning is a core executive function but implementation requires congressional funding.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "Article II designates the President as Commander-in-Chief with authority to direct national defense. Directing development of missile defense falls within this authority. However, Article I grants Congress the power to raise and support armies and appropriate funds, so implementation at scale requires congressional authorization and funding.",
      "OR": "The Founders vested military leadership in the Executive while reserving funding authority for Congress. Defense planning is a core executive function in the original design. The President may direct military development priorities, but the Founders ensured Congress controlled the purse to check executive military ambitions.",
      "DC": "Commander-in-Chief authority over defense planning is well-established doctrinally. However, the scale of expenditure required for a comprehensive missile defense system necessitates congressional appropriation under the Appropriations Clause. Executive direction of defense priorities has strong precedent, but spending authority remains legislative.",
      "LC": "National defense serves the constitutional commitment to common welfare and security. However, massive defense spending may divert resources from social welfare programs that serve constitutional values of equality and welfare. Opportunity costs must be considered.",
      "PR": "Missile defense has a mixed track record of effectiveness and enormous cost. Resources devoted to missile defense have opportunity costs for other security and domestic priorities. Effective defense policy should be evidence-based and congressionally authorized to ensure democratic accountability.",
      "SM": "The Commander-in-Chief has clear authority to direct national defense strategy, and missile defense addresses emerging threats from adversaries developing advanced ballistic capabilities. National security is a paramount executive responsibility and the order initiates planning within existing authority while implementation will proceed through normal appropriations processes."
    }
  },
  {
    "id": "china-tariffs",
    "title": "Tariffs Addressing China Synthetic Opioid Supply Chain",
    "date": "2025-02-01",
    "type": "Executive Order 14195",
    "admin": "Trump II",
    "desc": "Imposed additional tariffs on Chinese imports citing the fentanyl crisis and IEEPA emergency authority.",
    "brief": "Executive Order 14195 imposed additional tariffs on Chinese imports by invoking the International Emergency Economic Powers Act, citing the fentanyl crisis as a national emergency. While narrower in scope than the Liberation Day Tariffs, the order raised similar constitutional concerns about using emergency powers for trade policy, which Article I, Section 8 assigns to Congress. The nexus between fentanyl and broad import tariffs tested the limits of IEEPA's emergency framework.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "Article I, Section 8 grants Congress authority to regulate commerce with foreign nations and lay tariffs. IEEPA was designed for sanctions during genuine emergencies, not as a general trade policy tool. Using emergency authority to impose broad tariffs strains the text of the emergency delegation beyond its intended scope, though the fentanyl crisis provides a closer nexus than typical trade disputes.",
      "OR": "The Founders specifically vested tariff power in Congress because tariffs were the primary revenue source. Executive unilateral tariff authority contradicts the original design. While the fentanyl emergency provides more justification than pure trade disputes, the Founders would be skeptical of broad tariffs imposed without congressional deliberation.",
      "DC": "IEEPA provides statutory authority for economic measures during declared emergencies, and courts have given significant deference to emergency declarations. However, the scope of tariffs on broad Chinese imports exceeds the targeted sanctions IEEPA was designed to authorize. The nexus between fentanyl precursors and general imports tests the limits of statutory delegation.",
      "LC": "Using emergency powers for trade policy normalizes executive bypass of congressional authority and undermines democratic deliberation on economic matters. The fentanyl crisis is real but broad tariffs impose regressive costs on consumers while the constitutional framework assigns trade policy to Congress.",
      "PR": "Tariffs on Chinese imports function as consumer taxes and have documented inflationary effects. Targeted sanctions on fentanyl precursor chemicals would be more effective and constitutionally sound than broad import tariffs. Evidence-based policy would target the supply chain more precisely.",
      "SM": "IEEPA grants broad emergency authority and the fentanyl crisis constitutes a genuine national emergency killing tens of thousands annually. China's role in the fentanyl supply chain justifies economic pressure through tariffs. The President has significant foreign affairs and economic emergency authority to address threats to public health and national security."
    }
  },
  {
    "id": "canada-mexico-tariffs",
    "title": "Tariffs on Canadian and Mexican Imports",
    "date": "2025-02-01",
    "type": "Executive Orders 14193/14194",
    "admin": "Trump II",
    "desc": "Imposed 25% tariffs on imports from Canada and Mexico citing border security concerns under IEEPA.",
    "brief": "Executive Orders 14193 and 14194 imposed 25% tariffs on imports from Canada and Mexico using IEEPA emergency authority, citing border security and drug trafficking concerns. The orders raised significant questions about whether IEEPA was designed for trade disputes with neighboring allies and whether border issues constitute the type of economic emergency the statute contemplates. The tariffs strained both constitutional trade authority and existing treaty relationships under USMCA.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.4,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "Article I, Section 8 vests tariff authority in Congress. IEEPA was designed for sanctions during genuine national emergencies, not as a tool for imposing tariffs on allied neighbors. Border security concerns, while legitimate, do not constitute the type of extraordinary threat IEEPA contemplates. Using emergency authority to override the USMCA trade agreement raises additional concerns about executive override of Senate-ratified treaties.",
      "OR": "The Founders specifically assigned tariff power to Congress and expected trade policy to be deliberated legislatively. Using emergency powers for tariffs on neighboring allies would have been unrecognizable to the Founders, who designed the system to prevent unilateral executive economic actions of this magnitude.",
      "DC": "IEEPA grants emergency economic authority, but its use for broad tariffs on allied neighbors lacks precedent. The USMCA was ratified through constitutional processes, and unilateral tariffs that override treaty provisions raise questions under the Supremacy Clause. Curtiss-Wright deference applies but is tested by the scope and target of these measures.",
      "LC": "Using emergency powers for routine trade disputes normalizes executive overreach and undermines democratic deliberation on economic policy. The tariffs impose regressive costs on consumers and disrupt integrated North American supply chains that serve welfare interests.",
      "PR": "North American economic integration benefits all three nations and tariffs disrupt supply chains, raise consumer prices, and invite retaliation. Border security can be addressed through diplomatic cooperation rather than punitive trade measures. Evidence shows tariffs are ineffective at achieving stated border security goals.",
      "SM": "IEEPA provides broad emergency authority and border security threats from fentanyl trafficking and illegal immigration constitute genuine emergencies. Economic leverage through tariffs can pressure allies to strengthen their own border enforcement. The President has significant foreign affairs authority to use economic tools for national security objectives."
    }
  },
  {
    "id": "jenner-block-sanctions",
    "title": "Addressing Risks From Jenner & Block",
    "date": "2025-03-25",
    "type": "Executive Order 14246",
    "admin": "Trump II",
    "desc": "Imposed executive sanctions on Jenner & Block law firm, the third law firm targeted for representing clients adverse to the administration.",
    "brief": "Executive Order 14246 imposed sanctions on the law firm Jenner & Block, making it the third law firm targeted by executive action alongside Perkins Coie and Paul Weiss. The order revoked security clearances, barred federal contracts, and restricted government access for the firm and its attorneys. This raised severe bills of attainder, due process, right to counsel, and First Amendment concerns. The pattern of targeting legal adversaries through executive action raised fundamental questions about the rule of law and the independence of the legal profession.",
    "scores": {
      "TX": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": -2,
          "r": 0.95,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "Article I, Section 9 prohibits bills of attainder, which are legislative or executive acts singling out specific individuals or entities for punishment without judicial process. Targeting a named law firm by executive order for punitive sanctions is precisely the type of action the Bill of Attainder Clause prohibits. The Sixth Amendment guarantees the right to counsel, and sanctioning law firms for representing adverse clients directly undermines this guarantee.",
      "OR": "The Founders specifically prohibited bills of attainder because the British Crown used them to persecute political opponents. Targeting named entities for punishment without judicial process was among the abuses that motivated the Revolution. The right to counsel was considered essential to the rule of law in the founding era, and government retaliation against lawyers who represent unpopular clients contradicts foundational principles.",
      "DC": "The Bill of Attainder Clause has been applied to executive actions targeting specific entities (United States v. Lovett, Nixon v. Administrator of General Services). The right to counsel under the Sixth Amendment has been broadly construed. Sanctioning a law firm for its client representations creates a severe chilling effect on legal representation, contradicting established due process and access to justice doctrine.",
      "LC": "The pattern of targeting three law firms represents escalating authoritarian behavior that undermines the rule of law. The constitutional commitment to equal justice requires that all parties have access to legal representation without government retaliation. This represents a severe regression from settled rule of law norms.",
      "PR": "Targeting law firms chills legal representation and undermines the adversarial system that produces fair outcomes. No peer democracy sanctions law firms for representing government adversaries. The pattern of targeting multiple firms creates systematic damage to the legal profession's independence.",
      "SM": "The executive has authority over security clearances and federal contracting decisions. Firms that engage in conduct undermining national security may legitimately face restrictions on government access. However, even the steelman must acknowledge that targeting a firm for its client representations strains the constitutional framework protecting right to counsel."
    }
  },
  {
    "id": "national-energy-emergency",
    "title": "Declaring a National Energy Emergency",
    "date": "2025-01-20",
    "type": "Executive Order 14156",
    "admin": "Trump II",
    "desc": "Declared a national energy emergency to expedite energy projects and bypass environmental review processes.",
    "brief": "Executive Order 14156 declared a national energy emergency despite no actual energy crisis existing in the United States. The declaration was used to expedite energy production projects, bypass environmental review requirements under NEPA, and override state and federal environmental protections. The order raised concerns about pretextual emergency declarations being used to circumvent regulatory processes that Congress established by statute. The separation of powers implications center on executive use of emergency authority to override statutory environmental frameworks.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": -1,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": -1,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "SP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The National Emergencies Act grants emergency power, but the text contemplates genuine emergencies, not pretextual declarations to bypass regulatory frameworks. NEPA and environmental review statutes were enacted by Congress and cannot be overridden by emergency declaration without clear statutory authorization. The Take Care Clause requires faithful execution of environmental laws Congress enacted.",
      "OR": "The Founders created emergency powers for genuine crises, not policy preferences. Using emergency declarations to bypass established regulatory processes contradicts the original understanding of limited executive emergency authority. The Founders feared executive pretext and designed checks to prevent emergency power abuse.",
      "DC": "The National Emergencies Act provides emergency authority, but courts have begun scrutinizing pretextual emergency declarations (see litigation over border wall emergency). NEPA requirements have deep doctrinal roots and cannot be waived by emergency declaration without explicit congressional authorization. The scope of the energy emergency claim lacks the factual predicate courts require.",
      "LC": "Pretextual emergency declarations to bypass environmental protections undermine the constitutional commitment to welfare and intergenerational justice. Environmental review processes protect communities and ecosystems that serve the general welfare. Normalizing pretextual emergencies erodes democratic accountability.",
      "PR": "The US was producing record levels of energy at the time of the declaration, undermining the factual basis for emergency. Bypassing environmental review creates long-term costs that exceed short-term production gains. Evidence-based energy policy requires regulatory deliberation, not emergency bypass.",
      "SM": "Energy independence serves national security and economic stability. Regulatory delays impede domestic energy production that strengthens the nation. The President has broad authority to declare emergencies and the energy sector faces genuine challenges from overregulation that threaten economic competitiveness and energy affordability."
    }
  },
  {
    "id": "educational-freedom",
    "title": "Expanding Educational Freedom and Opportunity for Families",
    "date": "2025-01-29",
    "type": "Executive Order 14191",
    "admin": "Trump II",
    "desc": "Promoted school choice and directed federal support for alternatives to public schools including religious institutions.",
    "brief": "Executive Order 14191 directed federal agencies to promote school choice and support alternatives to public education, including directing federal resources toward religious schools. The order raised Establishment Clause concerns about channeling public funds to religious institutions, as well as federalism questions about federal involvement in K-12 education, which is traditionally a state and local responsibility. The tension between religious freedom and non-establishment principles was central to the constitutional analysis.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "The Establishment Clause prohibits government from establishing religion, which courts have interpreted to restrict direct public funding of religious institutions. The Tenth Amendment reserves education policy to the states. Federal direction of education funding toward religious schools raises both Establishment Clause and federalism concerns under the constitutional text.",
      "OR": "The Founders debated public education and religious funding extensively. Madison opposed using public funds for religious instruction. The original understanding of the Establishment Clause reflects skepticism about government involvement in religious education. However, parental choice in education aligns with founding-era liberty values.",
      "DC": "Carson v. Makin and Espinoza v. Montana established that excluding religious schools from generally available public benefits may violate the Free Exercise Clause. However, direct government promotion of religious school alternatives goes beyond neutral inclusion. The doctrine is evolving, with recent decisions favoring accommodation but not active government promotion of religious education.",
      "LC": "Public education serves as a constitutional commitment to equal opportunity and democratic formation. Diverting resources to private and religious schools may deepen educational inequality and undermine the shared civic experience that public schools provide. The Establishment Clause protects pluralism and prevents government religious preference.",
      "PR": "Evidence on school choice outcomes is mixed, with voucher programs showing varied results. Diverting public funds undermines the public education system that serves the vast majority of students. Peer democracies maintain strong public education systems with limited private school subsidies.",
      "SM": "Parental choice in education is a fundamental liberty. Carson v. Makin confirmed that religious schools cannot be excluded from public benefits. The President has authority to direct federal education resources toward choice-based programs, and empowering parents serves both liberty and welfare values."
    }
  },
  {
    "id": "deregulation-prosperity",
    "title": "Unleashing Prosperity Through Deregulation",
    "date": "2025-01-31",
    "type": "Executive Order 14192",
    "admin": "Trump II",
    "desc": "Expanded the regulatory elimination requirement to 10-for-1, directing agencies to remove ten regulations for every new one.",
    "brief": "Executive Order 14192 dramatically expanded the Trump I-era 2-for-1 regulatory elimination requirement to a 10-for-1 ratio. The order directed agencies to eliminate ten existing regulations for every new regulation issued. This raised questions about whether the executive can override statutory mandates from Congress that require agencies to regulate. Many agencies are required by law to issue and maintain regulations, and a blanket elimination requirement may conflict with these legislative commands.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -2,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -2,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The Take Care Clause requires faithful execution of the laws, including statutory mandates that agencies issue and maintain regulations. A blanket 10-for-1 elimination ratio may force agencies to violate congressional commands to regulate. Congress created regulatory mandates that the executive cannot override through arbitrary numerical requirements.",
      "OR": "The Founders designed a system where Congress sets regulatory policy through legislation. Executive authority to manage regulatory process exists but cannot override statutory commands. The original understanding does not support executive authority to impose arbitrary ratios that may prevent agencies from fulfilling congressional mandates.",
      "DC": "Executive management of the regulatory process has precedent in Reagan's Executive Order 12291 and subsequent orders. However, a 10-for-1 ratio may conflict with specific statutory mandates (e.g., Clean Air Act, Dodd-Frank). The APA requires reasoned decision-making for regulatory changes, and arbitrary ratios may not satisfy this standard.",
      "LC": "Regulations protect public health, safety, and the environment. Arbitrary deregulation undermines the constitutional commitment to general welfare and threatens communities that depend on regulatory protections. The arc of constitutional development has recognized the necessity of the regulatory state.",
      "PR": "Arbitrary ratios prioritize quantity over quality in regulatory decisions. Evidence-based deregulation targeting genuinely inefficient rules would be more effective. The 10-for-1 ratio forces agencies to eliminate beneficial regulations to meet an arbitrary target, regardless of public impact.",
      "SM": "The President has broad authority over executive branch management, including regulatory process. Reducing regulatory burden promotes economic growth and liberty. The order directs prioritization of the most beneficial regulations while eliminating outdated or duplicative ones, serving efficiency and competitiveness."
    }
  },
  {
    "id": "sovereign-wealth-fund",
    "title": "Plan for US Sovereign Wealth Fund",
    "date": "2025-02-03",
    "type": "Executive Order 14196",
    "admin": "Trump II",
    "desc": "Directed creation of a US sovereign wealth fund through executive action without congressional authorization.",
    "brief": "Executive Order 14196 directed the creation of a US sovereign wealth fund, a novel government investment vehicle. The order raised Appropriations Clause questions because creating an investment fund that deploys government capital requires congressional authorization under Article I's spending power. The executive cannot create investment vehicles or direct substantial government spending without legislative appropriation. The order represented a novel exercise of executive economic authority without clear statutory or constitutional basis.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.1,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        }
      }
    },
    "narratives": {
      "TX": "Article I, Section 9 vests the spending power in Congress. Creating a sovereign wealth fund that invests government resources requires congressional authorization. The President cannot create investment vehicles or direct substantial capital deployment without legislative appropriation. The text reserves financial initiative to the legislature.",
      "OR": "The Founders specifically placed the power of the purse in Congress to prevent executive financial adventurism. Creating a government investment fund without legislative authorization contradicts the original understanding of the Appropriations Clause as the primary check on executive power over public funds.",
      "DC": "No precedent exists for executive creation of sovereign wealth funds without congressional authorization. The Appropriations Clause doctrine consistently holds that the executive cannot direct spending beyond what Congress has authorized. While the order may initiate planning, actual fund creation requires legislative action.",
      "LC": "Government investment could serve welfare interests if properly authorized and governed. However, executive creation of financial vehicles without democratic authorization raises accountability concerns. The constitutional commitment to democratic governance requires congressional participation in major fiscal decisions.",
      "PR": "Sovereign wealth funds can be effective economic tools but require robust governance frameworks that only legislation can provide. Executive creation without congressional oversight risks politicized investment decisions. Countries with successful sovereign wealth funds established them through legislative processes with accountability mechanisms.",
      "SM": "The executive has authority to propose economic initiatives and direct agencies to develop plans. Directing agencies to study and plan for a sovereign wealth fund is a legitimate exercise of executive leadership. Implementation would proceed through normal appropriations processes, and the order initiates planning rather than spending."
    }
  },
  {
    "id": "military-covid-reinstatement",
    "title": "Reinstating Service Members Discharged Under COVID Vaccine Mandate",
    "date": "2025-01-27",
    "type": "Executive Order 14184",
    "admin": "Trump II",
    "desc": "Reinstated military members discharged for refusing COVID vaccination and ordered back pay and benefits.",
    "brief": "Executive Order 14184 directed the reinstatement of military service members who were discharged for refusing the COVID-19 vaccine mandate, along with back pay and benefits. The order falls within the President's Commander-in-Chief authority over military personnel decisions. However, ordering back pay raises Appropriations Clause questions about directing expenditures Congress has not specifically authorized. The constitutional footprint is moderate, as military personnel decisions are a core executive function.",
    "scores": {
      "TX": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "Article II designates the President as Commander-in-Chief with broad authority over military personnel. Reinstating service members and correcting discharges falls within this authority. However, ordering back pay without specific congressional appropriation raises Appropriations Clause concerns, as Article I vests spending authority in Congress.",
      "OR": "The Founders vested military command in the President, including authority over military personnel decisions. Reversing discharges is within the Commander-in-Chief power. The original understanding supports executive discretion over military composition while maintaining congressional control over military spending.",
      "DC": "Commander-in-Chief authority over military personnel is well-established. However, military pay and benefits are governed by Title 10 and require congressional appropriation. The back pay component may require legislative authorization. The reinstatement itself has stronger doctrinal support than the financial remedy.",
      "LC": "Vaccine mandates served public health and military readiness interests. Reinstating members who refused lawful orders may undermine military discipline. However, correcting discharges when the underlying mandate is no longer in effect serves fairness values.",
      "PR": "Military vaccine mandates were consistent with longstanding military practice. Reinstating discharged members creates precedent for refusing lawful orders. The back pay component imposes costs without demonstrated readiness benefit. Military discipline requires consistent enforcement of lawful commands.",
      "SM": "The Commander-in-Chief has clear authority over military personnel and force composition. Service members who objected to vaccination on principled grounds should not bear permanent career consequences when the mandate has been rescinded. Reinstatement serves military readiness by restoring trained personnel and due process by correcting potentially unjust discharges."
    }
  },
  {
    "id": "hyde-amendment-enforcement",
    "title": "Enforcing the Hyde Amendment",
    "date": "2025-01-24",
    "type": "Executive Order 14182",
    "admin": "Trump II",
    "desc": "Directed strict enforcement of Hyde Amendment restrictions on federal funding for abortion services.",
    "brief": "Executive Order 14182 directed agencies to strictly enforce the Hyde Amendment, which prohibits federal funding for most abortion services. The order operated within executive enforcement discretion, as the Hyde Amendment is existing law. However, it raised equal protection concerns about the disparate impact on low-income women who rely on federally funded healthcare, and welfare questions about restricting healthcare access for vulnerable populations.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The Hyde Amendment is existing statutory law that restricts federal funding for abortion. Directing strict enforcement of existing law is within the executive's Take Care Clause obligations. However, the Fourteenth Amendment's equal protection guarantee raises questions about whether differential access to healthcare based on economic status creates constitutionally problematic classifications.",
      "OR": "The executive's duty to faithfully execute the laws includes enforcing the Hyde Amendment as enacted by Congress. The original understanding supports legislative discretion over spending. Abortion was regulated at the state level during the founding era, and Congress's power to condition spending is well-established in the original framework.",
      "DC": "Harris v. McRae upheld the Hyde Amendment, finding no constitutional obligation to fund abortion. Enforcing this settled law has strong doctrinal support. The executive is faithfully executing a statute that the Supreme Court has validated. Post-Dobbs, federal funding restrictions have even stronger constitutional footing.",
      "LC": "Equal protection requires examining the disparate impact of funding restrictions on low-income women. The Hyde Amendment effectively creates a two-tiered system of reproductive rights based on wealth, contradicting the constitutional commitment to equal dignity and welfare for all persons.",
      "PR": "Evidence shows the Hyde Amendment reduces access primarily for low-income women and women of color, creating measurable health disparities. Peer democracies that provide comprehensive reproductive healthcare show better health outcomes. Strict enforcement widens existing healthcare gaps.",
      "SM": "The executive has a constitutional obligation to enforce existing law. The Hyde Amendment represents a legitimate congressional judgment about appropriate uses of federal funds. Strict enforcement honors both the legislative will and the principle of separation of powers, as the executive implements rather than creates spending policy."
    }
  },
  {
    "id": "healthcare-pricing",
    "title": "Making America Healthy Again by Empowering Patients with Healthcare Pricing",
    "date": "2025-02-25",
    "type": "Executive Order 14221",
    "admin": "Trump II",
    "desc": "Required healthcare pricing transparency from hospitals and insurers to empower consumer healthcare decisions.",
    "brief": "Executive Order 14221 directed enhanced healthcare pricing transparency, requiring hospitals and insurers to disclose pricing information to consumers. Building on the Trump I-era transparency rules, the order generally operated within executive regulatory authority and promoted consumer welfare and information access. The constitutional footprint was moderate, with the order advancing welfare values through market transparency without raising significant rights or separation of powers concerns.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "DP": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        }
      }
    },
    "narratives": {
      "TX": "The executive has authority to direct regulatory agencies to implement transparency requirements within existing statutory frameworks. Healthcare pricing disclosure does not implicate core constitutional rights and operates within established regulatory authority. The order advances consumer information access within constitutional bounds.",
      "OR": "The Founders valued informed citizens and transparent markets. Requiring disclosure of pricing information aligns with founding-era commitments to transparency and informed decision-making. The executive's authority to direct regulatory agencies to implement transparency measures has historical support.",
      "DC": "Healthcare transparency regulations build on established executive authority to direct agency rulemaking within statutory frameworks. The ACA and prior legislation provide statutory basis for transparency requirements. The order operates within settled administrative law and represents incremental regulatory development.",
      "LC": "Pricing transparency promotes equal access to information and empowers patients, particularly those with fewer resources. The constitutional commitment to welfare supports policies that reduce information asymmetry in healthcare markets and enable informed decision-making.",
      "PR": "Evidence shows that pricing transparency reduces healthcare costs and improves consumer outcomes. Countries with transparent healthcare pricing systems show lower costs without reduced quality. This is a rare area of bipartisan policy agreement supported by empirical evidence.",
      "SM": "The executive has clear authority to direct healthcare regulatory agencies, and pricing transparency serves consumer welfare, market efficiency, and informed decision-making. This order represents a straightforward exercise of executive regulatory authority with broad bipartisan support and no significant constitutional concerns."
    }
  },
  {
    "id": "taxpayer-subsidization-borders",
    "title": "Ending Taxpayer Subsidization of Open Borders",
    "date": "2025-02-19",
    "type": "Executive Order 14218",
    "admin": "Trump II",
    "desc": "Cut federal benefits to undocumented immigrants and asylum seekers awaiting adjudication of their claims.",
    "brief": "Executive Order 14218 directed agencies to terminate federal benefits to undocumented immigrants and those awaiting asylum decisions. The order raised due process and equal protection concerns about denying benefits without individualized determinations, particularly for asylum seekers with pending legal claims. Welfare implications were significant for vulnerable populations including children and families in lawful proceedings. The order also raised questions about executive authority to override congressional benefit eligibility determinations.",
    "scores": {
      "TX": {
        "R": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": -1,
          "r": 0.6,
          "c": "H"
        },
        "E": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "E": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "D": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "SP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "DP": {
          "s": -2,
          "r": 0.85,
          "c": "H"
        },
        "W": {
          "s": -2,
          "r": 0.9,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "E": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.8,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The Fifth Amendment guarantees due process to all persons, not just citizens. Cutting benefits to asylum seekers with pending claims, without individualized determinations, violates due process requirements. Congress established benefit eligibility criteria through statute, and the executive cannot override these legislative determinations unilaterally.",
      "OR": "The Founders extended due process protections to all persons within the jurisdiction, not just citizens. Original understanding of due process requires individualized determination before deprivation of government benefits. Executive termination of benefits established by Congress violates the constitutional separation between legislative benefit creation and executive enforcement.",
      "DC": "Mathews v. Eldridge established that due process requires notice and opportunity to be heard before deprivation of government benefits. Plyler v. Doe confirmed that undocumented persons have constitutional protections. Categorical denial of benefits without individualized process contradicts established procedural due process doctrine.",
      "LC": "The constitutional commitment to equal dignity extends to all persons within US jurisdiction. Denying benefits to asylum seekers lawfully pursuing claims punishes vulnerable populations for exercising legal rights. The welfare of children and families in lawful proceedings demands constitutional protection.",
      "PR": "Cutting benefits to asylum seekers undermines the asylum system by making it impossible for claimants to sustain themselves during adjudication. This effectively denies access to lawful processes. Evidence shows that asylum seekers with basic support are more likely to comply with legal requirements and appear for hearings.",
      "SM": "The executive has authority to enforce immigration law and direct resource allocation. Taxpayer funds should not subsidize illegal immigration, and distinguishing between lawful residents and those without legal status represents reasonable policy. However, asylum seekers in lawful proceedings present a more nuanced case warranting some process."
    }
  },
  {
    "id": "alaska-resources",
    "title": "Unleashing Alaska's Extraordinary Resource Potential",
    "date": "2025-01-20",
    "type": "Executive Order 14153",
    "admin": "Trump II",
    "desc": "Opened Alaska federal lands including ANWR for energy development, reversing Biden-era environmental protections.",
    "brief": "Executive Order 14153 directed the opening of Alaska's federal lands, including the Arctic National Wildlife Refuge, for energy development by reversing Biden-era environmental protections. The order operated within executive land management authority but raised environmental welfare concerns and federalism questions about the balance between state economic interests and federal environmental stewardship obligations. The constitutional footprint was moderate, as federal land management is a recognized executive function, though environmental impacts implicate welfare values.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.7,
          "c": "H"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.6,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.6,
          "c": "M"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": -1,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": -1,
          "r": 0.4,
          "c": "M"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -2,
          "r": 0.8,
          "c": "H"
        },
        "N": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.7,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "The Property Clause (Article IV, Section 3) grants Congress authority over federal lands. The executive manages federal lands under congressional delegation through statutes like FLPMA and ANILCA. Reversing prior land management decisions is within executive discretion, but must comply with statutory environmental requirements including NEPA review.",
      "OR": "The Founders granted Congress authority over federal territory, with executive management subject to legislative direction. Original understanding supports state economic interests in resource development, but federal land management was understood as stewardship, not exploitation. The balance between development and conservation reflects ongoing constitutional negotiation.",
      "DC": "Executive authority over federal land management is well-established under the Property Clause and delegated statutory authority. However, ANWR development has a specific legislative history, with Congress authorizing limited development in the 2017 Tax Act. Environmental review requirements under NEPA remain applicable, and reversal of prior protections must comply with APA rulemaking procedures.",
      "LC": "Environmental protection serves the constitutional commitment to welfare for current and future generations. Opening pristine wilderness for energy development imposes irreversible environmental costs that contradict the arc of expanding environmental protection. Indigenous communities and environmental justice populations bear disproportionate impacts.",
      "PR": "ANWR development would produce a relatively small amount of oil with significant environmental risk. The US already produces record amounts of energy. Environmental costs of development in sensitive ecosystems outweigh marginal production gains. Evidence-based energy policy should prioritize efficiency and renewable sources.",
      "SM": "The President has broad authority over federal land management and energy policy. Alaska's resources serve national energy security and economic interests. The 2017 Tax Act authorized ANWR development, and executive action implementing this congressional authorization respects separation of powers while advancing energy independence."
    }
  },
  {
    "id": "america-first-foreign-policy",
    "title": "America First Policy Directive to the Secretary of State",
    "date": "2025-01-20",
    "type": "Executive Order 14150",
    "admin": "Trump II",
    "desc": "Directed the State Department to prioritize American interests above all other considerations in diplomatic engagements.",
    "brief": "Executive Order 14150 directed the Secretary of State to prioritize American interests in all diplomatic engagements and foreign policy decisions. As a broad foreign policy directive, it fell within the President's recognized authority over diplomatic relations. However, questions arose about whether the order implicitly directed non-compliance with existing treaty obligations and international commitments. The constitutional footprint was moderate, as foreign policy direction is a core executive function, but tension existed with the Supremacy Clause's treatment of treaties as the supreme law of the land.",
    "scores": {
      "TX": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "OR": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.8,
          "c": "H"
        }
      },
      "DC": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.3,
          "c": "M"
        },
        "N": {
          "s": 1,
          "r": 0.7,
          "c": "H"
        }
      },
      "LC": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        }
      },
      "PR": {
        "R": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "SP": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": -1,
          "r": 0.5,
          "c": "M"
        },
        "N": {
          "s": 0,
          "r": 0.6,
          "c": "M"
        }
      },
      "SM": {
        "R": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "E": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "D": {
          "s": 0,
          "r": 0.3,
          "c": "L"
        },
        "SP": {
          "s": 1,
          "r": 0.5,
          "c": "M"
        },
        "DP": {
          "s": 0,
          "r": 0.2,
          "c": "L"
        },
        "W": {
          "s": 0,
          "r": 0.4,
          "c": "M"
        },
        "N": {
          "s": 2,
          "r": 0.9,
          "c": "H"
        }
      }
    },
    "narratives": {
      "TX": "Article II grants the President authority to conduct foreign affairs, including directing the Secretary of State. Prioritizing national interests in diplomacy is a quintessential executive function. However, the Supremacy Clause designates treaties as supreme law, and a directive that implicitly authorizes non-compliance with treaty obligations creates textual tension.",
      "OR": "The Founders expected the President to conduct foreign affairs in the national interest. Washington's Farewell Address cautioned against entangling alliances, and original understanding supports executive primacy in diplomatic direction. The founding era recognized that national interest guides foreign policy while treaty obligations create binding commitments.",
      "DC": "Executive authority over foreign policy direction is well-established under Curtiss-Wright. Directing the State Department represents a routine exercise of presidential authority. However, to the extent the directive encourages non-compliance with treaty obligations, it creates tension with the Supremacy Clause and settled treaty law doctrine.",
      "LC": "An \"America First\" approach risks undermining multilateral cooperation that serves long-term welfare interests. International engagement and alliance maintenance serve American security and prosperity. The constitutional framework envisions the US as a good-faith participant in the international order.",
      "PR": "Unilateral foreign policy reduces diplomatic leverage and alienates allies. Evidence shows multilateral engagement produces better outcomes for American interests than isolationism. Peer democracies maintain alliance commitments as a force multiplier for national influence.",
      "SM": "The President has clear constitutional authority to direct foreign policy and set diplomatic priorities. Prioritizing American interests is the fundamental obligation of the executive. This order represents a legitimate and routine exercise of presidential authority over the State Department and foreign affairs."
    }
  }
];