import {
  FaUsers,
  FaTasks,
  FaLightbulb,
  FaChartLine,
  FaCheck,
} from "react-icons/fa";

export const THEME_COLORS = {
  primary: "#1c446c", // Indigo-600
  secondary: "#5A90AE", // Indigo-100
  accent: "#88C65A", // Indigo-800
  ex1: "#1c446c",
  ex2: "#C8F0FD",
  ex3: "#f7fcf3",
  ex4: "#0e2134",
  ex5: "#07101a",
};

export const MY_IDEAS = [
  {
    title: "PetCo Life: Integrated In-Store Services",
    summary:
      "Drive profitability by bundling Vital Care, Rover, and in-store services into a unified “Wellness Hub” service ecosystem",
    rationale: [
      "Petco’s services are currently siloed; a unified in-store experience increases usage and spend per visit",
      "Service visits naturally drive product add-ons, boosting basket size across food, accessories, and wellness",
      "Expanding services through 1,500 existing stores enables growth without heavy capex",
    ],
  },
  {
    title: "PetCo Quest: Unified Subscription & Loyalty",
    summary:
      "Increase retention and lifetime value by evolving Vital Care into a gamified, omnichannel loyalty platform that connects all Petco brands and partners",
    rationale: [
      "Bundling Rover, WOOF nutrition, and vet care into Vital Care creates a single, high-engagement subscription",
      "Gamified loyalty builds emotional attachment and shifts competition from discounts to pet wellness value",
      "A single platform centralizes data, enabling better personalization across the pet lifecycle",
    ],
  },
  {
    title: "PetCo Assist: Adoption-Led Ecosystem Growth",
    summary:
      "Strengthen brand trust and leadership by expanding Petco Love from sponsorship into post-adoption education and shelter partnerships",
    rationale: [
      "Petco Love’s scale and $425M in donations position Petco to move from sponsor to hands-on adoption partner",
      "Post-adoption education strengthens mission alignment while onboarding new pet parents early",
      "Embedding education and starter offers turns adoption goodwill into long-term, high-value customer relationships",
    ],
  },
];

export const OTHERS_IDEAS = {
  1: [
    "Mobile Veterinary",
    "Pet Influencers to Expand Online Reach",
    "More Subscription-Based Service Bundles",
  ],
  2: [
    "High-margin service offerings",
    "Digital “Pet ID & Lifestyle” platform",
    "“Pet Cities” and partner for “Petco Resorts”",
  ],
  3: [
    "Improve existing brick-and-mortar stores",
    "Expand the Vetco Full-Service Animal Hospitals",
    "Create a pet-centric social media platform",
  ],
};

export const CHECKLIST_ITEMS = [
  { id: 1, label: "The Recommendations", key: "recommendations" },
  { id: 2, label: "Strategic Execution Plan", key: "execution" },
  { id: 3, label: "Data & Evidence", key: "evidence" },
  { id: 4, label: "Financial Projections", key: "financials" },
  { id: 5, label: "Risk & Mitigation Strategies", key: "risks" },
];

export const RECOMMENDATIONS = [
  {
    title: "Mobile Veterinary Services",
    shortDesc: "At-home non-emergency vet care",
    desc: "At-home vet care reducing stress and increasing accessibility",
    risks: [
      {
        title: "Cannibalization of existing customers",
        mitigation:
          "Mobile vet is priced at a premium and targets customers that do not have existing relationships with Petco",
      },
      {
        title: "Staff Burnout",
        mitigation:
          "Physicians are compensated at a premium, and an incentive structure can be introduced based on miles driven/ number of pets seen",
      },
      {
        title: "Low Utilization",
        mitigation:
          "Vans can be utilized as last mile delivery vehicles for same day shipping or outfitted as mobile groomers if there is demand signal for that service",
      },
    ],
  },
  {
    title: "Flexible Membership Restructuring",
    shortDesc: "Mid-tier membership option",
    desc: "Mid-tier option to drive broader adoption and repeat purchases",
    risks: [
      {
        title: "Overuse by “Power Users”",
        mitigation:
          "Fair Usage Policies: Implement hard caps on variable costs (e.g., max 1 bag of food/month discount) to protect unit economics",
      },
      {
        title: "Cannibalization of High-Paying Customers",
        mitigation:
          "Value Fencing: Ensure Premier retains exclusive, high-margin drivers that power users cannot afford to lose",
      },
      {
        title: "Complexity Confuses Customers",
        mitigation:
          "Curated Bundles: Replace open customization with 2–3 clear personas (Family, Essentials, Premium) to guide decision-making",
      },
    ],
  },
];

export const VET_IMAGES = [
  {
    gridSize: 2,
    imgs: ["rec (24).png", "rec (22).png", "rec (3).png", "rec (6).png"],
  },
  {
    gridSize: 1,
    imgs: ["rec (4).png", "rec (7).png", "rec (2).png"],
  },
];

export const MEMBERSHIP_IMAGES = [
  {
    gridSize: 2,
    imgs: ["rec (10).png", "rec (11).png", "rec (13).png", "rec (14).png"],
  },
  {
    gridSize: 1,
    imgs: ["rec (15).png"],
  },
  {
    gridSize: 2,
    imgs: ["rec (17).png", "rec (18).png"],
  },
  {
    gridSize: 1,
    imgs: ["rec (19).png", "rec (20).png"],
  },
];

export const RESEARCH_DATA = [
  {
    id: 1,
    x_origin: -35,
    y_origin: 0,
    x: 15, // percentage from left
    y: 35, // percentage from top
    title: "Brand Trust & Ethical Positioning",
    workflow:
      "10-K, Press Releases, CEO Interviews, Initiatives, Marketing Channels, Media Coverage",
    image: "/assets/img/projects/petco/research1.png",
    problems: [
      "Petco Love Foundation creates brand halo but limited commercial integration",
      "New pet parents enter market with high intent but no guided pathway",
      "Ethical leadership doesn't translate to differentiated market position",
    ],
    insight:
      "Petco's ethical reputation and foundation work build trust and goodwill but aren't effectively converted into customer acquisition, retention, or revenue",
    problemsBrief: [
      "PetCo Love limited commercial integration",
      "No guided pathway for new pet parents",
      "Ethical leadership not market differentiator",
    ],
    hypothesis: "PetCo Assist: Adoption-Led Ecosystem Growth",
  },
  {
    id: 2,
    x_origin: 30,
    y_origin: 90,
    x: 50,
    y: 65,
    title: "Competitive & Market Positioning Analysis",
    workflow:
      "Customer Demographics, Behavior Analysis, and unmet needs using reports, Competitor Websites, and Social Media",
    image: "/assets/img/projects/petco/research2.png",
    problems: [
      "Hybrid model advantage is unrealized in competitive positioning",
      "Price-based retention undermines margin and brand equity",
      "Innovation isn't translating into market leadership perception",
    ],
    insight:
      "Petco is caught in the middle—out-convenient by Chewy, out-serviced by PetSmart, and competing primarily on price rather than differentiated value",
    problemsBrief: [
      "Hybrid model advantage unrealized",
      "Price-based retention undermines margin",
      "Innovation not market differentiator",
    ],
    hypothesis: "PetCo Quest: Unified Subscription & Loyalty",
  },
  {
    id: 3,
    x_origin: 95,
    y_origin: 10,
    x: 85,
    y: 30,
    title: "Industry Trends & Customer Behavior Shifts",
    workflow:
      "Pet Care Industry Trends, Pet Adoption Patterns, Pet Parent Mindset",
    image: "/assets/img/projects/petco/research3.png",
    problems: [
      "Pet parents prioritize wellness services but face education and accessibility barriers",
      "Industry movement toward engagement and community outpaces Petco's offerings",
      "Preventive wellness models aren't monetized despite clear customer demand",
    ],
    insight:
      "Pet spending is shifting from products to wellness and services, but Petco's revenue model remains product-heavy and hasn't captured this transition",
    problemsBrief: [
      "Pet parents seek wellness but face barriers",
      "Industry movement toward engagement outpaces Petco",
      "Preventive wellness not monetized",
    ],
    hypothesis: "PetCo Quest: Unified Subscription & Loyalty",
  },
  {
    id: 4,
    x_origin: 25,
    y_origin: -50,
    x: 45,
    y: 20,
    title: "Customer Analysis & Journey Mapping",
    workflow:
      "Mapped lifecycle from adoption → milestones → care → end-of-life to identify pain points",
    image: "/assets/img/projects/petco/research4.png",
    problems: [
      "Millennial pet parents seek convenience but experience friction across channels",
      "Service utilization remains siloed despite integrated portfolio",
      "Transaction-based interactions miss opportunities for ongoing engagement",
    ],
    insight:
      "Fragmented engagement across disconnected touchpoints reduces customer lifetime value and prevents Petco from capitalizing on its full ecosystem",

    hypothesis: "PetCo Life: Integrated In-Store Services",
    problemsBrief: [
      "Millennial pet parents face friction",
      "Service utilization remains siloed",
      "Missed opportunities for ongoing engagement",
    ],
  },
];

export const PHASES = [
  {
    title: "Research & Disaggregation",
    icon: <FaTasks className="text-indigo-500 mr-2" />,
    images: ["/images/research1.jpg", "/images/research2.jpg"],
    bgColor: "bg-gray-50",
  },
  {
    title: "Hypotheses",
    icon: <FaTasks className="text-indigo-500 mr-2" />,
    images: ["/images/research1.jpg", "/images/research2.jpg"],
    bgColor: "bg-gray-50",
  },
  {
    title: "Analysis",
    icon: <FaLightbulb className="text-indigo-500 mr-2" />,
    images: ["/images/ideation1.jpg", "/images/ideation2.jpg"],
    bgImage: "/images/ideation-bg.jpg", // 👈 NEW
  },
  // {
  //   title: "Iteration",
  //   icon: <FaTasks className="text-indigo-500 mr-2" />,
  //   images: ["/images/iteration1.jpg", "/images/iteration2.jpg"],
  //   bgColor: "bg-gray-50",
  // },
  {
    title: "Recommendation",
    icon: <FaChartLine className="text-indigo-500 mr-2" />,
    images: ["/images/recommendation1.jpg", "/images/recommendation2.jpg"],
    bgColor: "bg-white",
  },
];

export const META = [
  {
    name: "Role",
    content: "Strategic Analyst",
  },
  {
    name: "Timeline",
    content: "5 Weeks",
  },
  {
    name: "Stakeholders",
    content: "Professor, TA, MBA Classmates",
  },
  {
    name: "Collaborators",
    content: "3 MBA Students",
  },
];

export const OBJECTIVES = [
  "Identify new growth opportunities for Petco in a competitive pet care market.",
  "Develop strategic initiatives to enhance customer loyalty and engagement.",
  "Create actionable recommendations to drive sustainable revenue growth.",
];

export const EVALUATION_CRITERIA = [
  {
    id: "strategic",
    title: "Strategic Alignment",
    weight: 25,
    color: THEME_COLORS.ex4,
    description:
      "Does this leverage Petco's unique assets and strengthen its competitive position?",
    subCriteria: [
      {
        name: "Brand Fit",
        weight: 30,
        guide:
          "1 = Conflicts with brand values → 5 = Amplifies brand mission",
      },
      {
        name: "Asset Leverage",
        weight: 40,
        guide:
          "1 = Requires entirely new capabilities → 5 = Maximizes existing infrastructure",
      },
      {
        name: "Competitive Differentiation",
        weight: 30,
        guide:
          "1 = Easily replicated by competitors → 5 = Creates defensible moat",
      },
    ],
  },
  {
    id: "financial",
    title: "Financial Impact",
    weight: 30,
    color: THEME_COLORS.primary,
    description: "What is the revenue potential and path to profitability?",
    subCriteria: [
      {
        name: "Revenue Upside",
        weight: 35,
        guide: "1 = <$10M incremental → 5 = >$100M incremental",
      },
      {
        name: "Margin Profile",
        weight: 30,
        guide:
          "1 = Lower than current margins → 5 = Significantly higher margins",
      },
      {
        name: "Payback Period",
        weight: 20,
        guide: "1 = >3 years → 5 = <1 year",
      },
      {
        name: "Capital Efficiency",
        weight: 15,
        guide: "1 = High capex required → 5 = Leverages existing assets",
      },
    ],
  },
  {
    id: "implementation",
    title: "Implementation Feasibility",
    weight: 20,
    color: THEME_COLORS.ex4,
    description:
      "How realistic is execution given Petco's capabilities and constraints?",
    subCriteria: [
      {
        name: "Technical Complexity",
        weight: 25,
        guide:
          "1 = Requires major platform rebuild → 5 = Minor integration work",
      },
      {
        name: "Organizational Readiness",
        weight: 30,
        guide:
          "1 = Requires major restructuring → 5 = Fits current structure",
      },
      {
        name: "Time to Market",
        weight: 25,
        guide: "1 = >18 months → 5 = <6 months",
      },
      {
        name: "Partner Dependencies",
        weight: 20,
        guide:
          "1 = Requires new critical partners → 5 = Uses existing partnerships",
      },
    ],
  },
  {
    id: "market",
    title: "Market Validation",
    weight: 15,
    color: THEME_COLORS.primary,
    description: "Is there proven customer demand and market precedent?",
    subCriteria: [
      {
        name: "Customer Pain Point",
        weight: 40,
        guide: "1 = Nice-to-have feature → 5 = Urgent, unmet need",
      },
      {
        name: "Market Precedent",
        weight: 30,
        guide:
          "1 = Completely unproven model → 5 = Proven in similar contexts",
      },
      {
        name: "Addressable Market",
        weight: 30,
        guide: "1 = Niche segment only → 5 = Broad customer base",
      },
    ],
  },
  {
    id: "risk",
    title: "Risk & Downside Protection",
    weight: 10,
    color: THEME_COLORS.ex4,
    description: "What could go wrong and how severe are the consequences?",
    subCriteria: [
      {
        name: "Execution Risk",
        weight: 40,
        guide: "1 = High failure likelihood → 5 = Low execution risk",
      },
      {
        name: "Reputational Risk",
        weight: 30,
        guide: "1 = Could damage brand → 5 = Brand-enhancing opportunity",
      },
      {
        name: "Exit Optionality",
        weight: 30,
        guide: "1 = High sunk costs if failed → 5 = Easy to pilot and pivot",
      },
    ],
  },
];

export const DECISION_THRESHOLDS = [
  {
    category: "GO",
    color: THEME_COLORS.ex4,
    rules: [
      "Overall weighted score ≥ 3.5 / 5.0",
      "Financial Impact score ≥ 3.0 / 5.0",
      "No sub-criterion scores < 2.0 / 5.0",
      "Clear path to profitability within 24 months",
    ],
  },
  {
    category: "PILOT",
    color: THEME_COLORS.primary,
    rules: [
      "Overall score between 3.0 - 3.5",
      "High uncertainty in market validation",
      "Reversible investment with clear kill criteria",
      "Can be tested in subset of markets",
    ],
  },
  {
    category: "NO-GO",
    color: THEME_COLORS.ex5,
    rules: [
      "Reputational risk score < 2.0 / 5.0",
      "Execution risk score < 2.0 / 5.0",
      "Market validation score < 2.5 / 5.0",
      "Conflicts with core brand values or mission",
    ],
  },
];
