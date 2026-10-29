// Single source of truth for everything the site says about Akshat.
// The home page, /projects and /resume all read from here, so an update
// only has to happen once.

export type Role = {
  title: string;
  org: string;
  kind?: string;
  start: string;
  end: string;
  location?: string;
  summary?: string;
  points: string[];
  upcoming?: boolean;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  start: string;
  end: string;
  stack: string[];
  summary: string;
  points: string[];
  figures: { value: string; label: string }[];
};

export type Honour = {
  name: string;
  issuer: string;
  date: string;
  note?: string;
};

export const profile = {
  name: "Akshat Chopra",
  headline: "Math & Financial Analysis student at Waterloo, working in risk.",
  intro:
    "I study Mathematics and Financial Analysis & Risk Management at the University of Waterloo. My work so far has been on the risk side of finance: fraud and payments analytics, and from January 2027, model risk for retail credit at Scotiabank.",
  location: "Waterloo / Toronto, ON",
  now: {
    label: "Incoming",
    text: "Model Quality Intern, Retail Models & Analytics, Scotiabank (Winter 2027)",
  },
  email: "akshat.chopra@uwaterloo.ca",
  links: {
    linkedin: "https://www.linkedin.com/in/akshatc1/",
    github: "https://github.com/akshatc0",
    instagram: "https://instagram.com/akshat_c1",
  },
};

// Headline numbers for the figures strip on the home page. Each one is
// backed by an entry further down, so keep them in sync.
export const figures = [
  { value: "94M+", label: "payment records under automated reporting at Metrolinx" },
  { value: "55%", label: "portfolio return over 5 months; ranked 4th in cohort" },
  { value: "$13K+", label: "processed through FraserPay across 4,700 transactions" },
  { value: "250+", label: "cadets led as Squadron Warrant Officer" },
];

export const experience: Role[] = [
  {
    title: "Model Quality Intern",
    org: "Scotiabank",
    kind: "Co-op",
    start: "Jan 2027",
    end: "Apr 2027",
    location: "Toronto, ON",
    upcoming: true,
    summary:
      "Joining the Retail Models & Analytics group, supporting model risk management for the credit risk models behind retail and small business lending decisions.",
    points: [],
  },
  {
    title: "Fraud Analytics, Payments (PRESTO) Risk Management",
    org: "Metrolinx",
    kind: "Co-op",
    start: "May 2026",
    end: "Aug 2026",
    location: "Toronto, ON",
    points: [
      "Delivered fraud and payments risk analytics using SQL, Power BI, VBA and Ethoca (Mastercard).",
      "Informed PRESTO control decisions and governance reporting for Metrolinx leadership.",
      "Automated recurring reporting and strengthened data quality across 94M+ payment records.",
    ],
  },
  {
    title: "Engineering, Finance & Artificial Intelligence",
    org: "Sephira Institute",
    kind: "Internship, remote",
    start: "Oct 2025",
    end: "May 2026",
    location: "London, UK",
    points: [
      "Worked with University of Cambridge faculty on an intelligence platform combining proprietary geopolitical indicators and live market data into structured analysis.",
      "Built pipelines to ingest and harmonise multi-source datasets for international strategy reports.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "portfolio-optimizer",
    name: "Portfolio Optimizer",
    tagline: "UWaterloo Math/FARM trading competition",
    start: "Jan 2026",
    end: "Present",
    stack: ["Python", "Fundamental analysis"],
    summary:
      "An AI-assisted tool that analyses financial ratios, earnings data and valuation metrics to produce monthly portfolio re-optimisation recommendations.",
    points: [
      "55% return over the first five months; currently 4th among competing Math/FARM classmates.",
    ],
    figures: [
      { value: "55%", label: "return, 5 months" },
      { value: "4th", label: "in cohort" },
    ],
  },
  {
    slug: "fraserpay",
    name: "FraserPay",
    tagline: "Cashless payments for a 1,700-student school",
    start: "Mar 2025",
    end: "Jul 2025",
    stack: ["React", "Firebase"],
    summary:
      "A QR-code payment system that replaced cash at John Fraser Secondary's Charity Week. Students pre-load funds; homerooms and clubs process sales and track earnings from a dashboard.",
    points: [
      "Processed $13,000+ across 4,700 transactions during Charity Week 2025.",
      "Recognised by executives at BMO and Cornwall Financial Partners.",
      "Built alongside FraserVotes (43% higher voter turnout) and an application portal for council positions.",
    ],
    figures: [
      { value: "$13K+", label: "processed" },
      { value: "4,700", label: "transactions" },
    ],
  },
];

export const leadership: Role[] = [
  {
    title: "Vice President",
    org: "John Fraser Student Activity Council",
    start: "Sep 2022",
    end: "Jun 2025",
    points: [
      "Elected to lead a 36-person executive representing 1,700+ students and managed the council's operating budget.",
      "Ran logistics for 11 school-wide events and Charity Week initiatives that raised $13,000+.",
      "As Environmental Liaison, introduced a utensil policy that removed 94.5kg of plastic waste a year.",
    ],
  },
  {
    title: "Squadron Warrant Officer",
    org: "800 'Black Forest' Squadron, Royal Canadian Air Cadets",
    start: "Sep 2019",
    end: "Jun 2025",
    points: [
      "Senior cadet in a unit of 250+, and Acting Chief Squadron Warrant Officer from February 2025.",
      "Planned multi-day field training exercises, responsible for safety, logistics and scheduling.",
      "Introduced an attendance tracking framework that improved flight retention by 15% in one training year.",
    ],
  },
  {
    title: "Web Content Developer",
    org: "Waterloo Undergraduate Student Association (WUSA)",
    start: "Jan 2026",
    end: "Apr 2026",
    points: ["Maintained content on wusa.ca for the undergraduate student association."],
  },
  {
    title: "Volunteer, Veteran Support",
    org: "The Royal Canadian Legion",
    start: "Jan 2022",
    end: "Jun 2024",
    points: [],
  },
];

export const honours: Honour[] = [
  { name: "President's Scholarship", issuer: "University of Waterloo", date: "2025" },
  {
    name: "Captain Chris Luxemburger Award of Excellence",
    issuer: "800 Black Forest Squadron, RCACS",
    date: "2025",
    note: "Awarded to the squadron's top Warrant Officer.",
  },
  {
    name: "Deborah McDonald \"Leave a Legacy\" Scholarship",
    issuer: "John Fraser Secondary School",
    date: "2025",
  },
  {
    name: "Ontario Principals' Council Award for Student Leadership",
    issuer: "Ontario Principals' Council",
    date: "2025",
  },
  { name: "Peel Award of Distinction", issuer: "Peel District School Board", date: "2024, 2025" },
  {
    name: "Peel Award of Excellence",
    issuer: "Peel District School Board",
    date: "2024",
    note: "The board's highest recognition for contributions to student success.",
  },
  { name: "Silver, Financial Literacy Competition", issuer: "University of Waterloo", date: "2023" },
  { name: "Long Service Award", issuer: "Air Cadet League of Canada", date: "2023" },
];

export const education = {
  school: "University of Waterloo",
  degree: "Bachelor of Mathematics (Co-op), Financial Analysis & Risk Management",
  start: "Sep 2025",
  end: "Apr 2030",
  notes: ["President's Scholarship", "VP Events, UWaterloo Debate Society"],
};

export const certifications = [
  { name: "Bloomberg Finance Fundamentals", issuer: "Bloomberg", date: "Oct 2025" },
  { name: "CS50", issuer: "Harvard University", date: "Sep 2025" },
];

export const skills = [
  { group: "Analysis", items: ["SQL", "Python (pandas, NumPy)", "Excel / VBA", "Power BI"] },
  { group: "Domain", items: ["Fraud & payments risk", "Model risk", "Financial statement analysis"] },
];
