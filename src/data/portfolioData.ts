export interface Metric {
  value: string;
  label: string;
  sublabel: string;
  trend: string;
  iconName: string;
}

export interface CareerItem {
  id: string;
  role: string;
  company: string;
  parentCompany?: string;
  location: string;
  period: string;
  badge: string;
  description: string[];
  skills: string[];
  highlights: {
    metric: string;
    text: string;
  }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  metric: string;
  metricLabel: string;
  workflow: string[];
  challenge: string;
  solution: string;
  impact: string[];
  tags: string[];
  logos?: string[];
  confidentialityNote?: string;
}

export interface ToolItem {
  name: string;
  category: string;
  description: string;
  appliedAt: string;
  level: string;
  icon: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  focus: string;
  badge: string;
}

export interface LanguageItem {
  language: string;
  level: string;
  status: string;
}

export const portfolioData = {
  personal: {
    name: "Swathy Moorthy",
    eyebrow: "DIGITAL COMMERCE • MARKETPLACE STRATEGY",
    headline: "E-Commerce Strategy That Turns Browsing Into Buying",
    subheadline: "Helping global premium brands scale across 20+ marketplaces through data-driven content, operational precision, and customer journey optimization.",
    aboutBio: "I am an e-commerce strategist with 3+ years of international experience across Europe and India in marketplace operations, content optimization, digital marketing, and analytics. Having completed my dual MBA in France and worked on 20+ premier retail platforms (including Amazon, Farfetch, Zalando, La Redoute, and Walmart), I bridge analytical rigor with high-converting customer experiences.",
    location: "Pondicherry, India / Paris, France",
    email: "swathymoorthy2000@gmail.com",
    linkedin: "https://www.linkedin.com/in/swathy-moorthy-847133210/",
    resumePdf: "/Swathy_Resume.pdf",
    strategyChain: [
      "Product Content",
      "Marketplace Operations",
      "Digital Commerce",
      "Customer Success",
      "Growth",
    ],
  },

  metrics: [
    {
      value: "20+",
      label: "Global Marketplaces",
      sublabel: "Amazon, Farfetch, Zalando, Walmart, La Redoute",
      trend: "Multi-platform sync",
      iconName: "Globe",
    },
    {
      value: "60%",
      label: "Visibility Increase",
      sublabel: "Content enrichment & listing error resolution",
      trend: "Organic discovery",
      iconName: "Eye",
    },
    {
      value: "90%+",
      label: "Brand Exposure Growth",
      sublabel: "Cross-marketplace strategic expansion campaigns",
      trend: "Audience reach",
      iconName: "TrendingUp",
    },
    {
      value: "3+",
      label: "Years in Commerce",
      sublabel: "Digital shelf optimization & analytics leadership",
      trend: "Cross-border track record",
      iconName: "Award",
    },
  ] as Metric[],

  career: [
    {
      id: "neteven-csm",
      role: "Customer Success Manager (Intern)",
      company: "Neteven — A Lectra Group",
      location: "Paris, France",
      period: "08/2025 – 02/2026",
      badge: "Marketplace Expansion",
      description: [
        "Conducted seasonal sales analyses across 20 European & global marketplaces, delivering actionable insights on digital commerce trends and high-performing brands.",
        "Led data-driven digital strategy and cross-marketplace expansion, boosting verified brand exposure by over 90%.",
        "Documented and authored structured reports to streamline catalogue and content management workflows for internal delivery teams and external brand clients.",
        "Guided enterprise accounts through cross-border channel integration, inventory planning, and strategic positioning.",
      ],
      skills: ["Marketplace Strategy", "Account Management", "Project Management", "Content Strategy"],
      highlights: [
        { metric: "90%+", text: "Increase in client brand exposure" },
        { metric: "20", text: "Active European marketplaces managed" },
      ],
    },
    {
      id: "neteven-content",
      role: "International Content Coordinator (Intern)",
      company: "Neteven — A Lectra Group",
      location: "Paris, France",
      period: "08/2024 – 02/2025",
      badge: "Content Operations",
      description: [
        "Optimized product content using Neteven SaaS technology across 20 platforms, including Farfetch, Zalando, Amazon, and La Redoute, lifting product visibility by 60%.",
        "Managed and resolved complex catalog publication and listing errors, drastically boosting live publication rates and driving strong Gross Merchandise Value (GMV) growth.",
        "Created, structured, and curated product catalogs for premium fashion and lifestyle brands, aligning seasonal assortments, promotional calendars, and international new launches.",
      ],
      skills: ["Back Office Operation", "Listing Management", "Client Reporting", "Catalog Curation"],
      highlights: [
        { metric: "60%", text: "Boost in product catalog visibility" },
        { metric: "Zero Defect", text: "Publication error triage pipeline" },
      ],
    },
    {
      id: "cognizant-senior",
      role: "E-commerce Senior Analyst",
      company: "Cognizant",
      location: "Chennai, India",
      period: "07/2022 – 01/2023",
      badge: "Enterprise Retail",
      description: [
        "Curated and optimized enterprise product content for Hardware and Home categories, ensuring brand-aligned, high-converting digital shelf listings.",
        "Led editorial content team revisions, driving accurate, on-time delivery of client-facing product detail pages (PDPs) for enterprise retail partners including Highbourne and Walmart.",
        "Analyzed conversion funnels, keyword discoverability, and taxonomy alignment to maintain top-tier customer satisfaction and client retention.",
      ],
      skills: ["Digital Marketing", "CRM", "Product Analysis", "Team Leadership"],
      highlights: [
        { metric: "100%", text: "On-time delivery for retail PDPs" },
        { metric: "Hardware & Home", text: "Category content leadership" },
      ],
    },
    {
      id: "lumina-analyst",
      role: "E-commerce Analyst",
      company: "Lumina Datamatics Ltd",
      location: "Pondicherry, India",
      period: "09/2020 – 06/2022",
      badge: "Merchandising & Layout",
      description: [
        "Managed editorial projects for Walmart Strategic Business Units (SBUs), spanning beauty, baby, pets, personal care, health & wellness, and household essentials.",
        "Developed wireframes and digital page layouts to showcase online design elements for high-traffic seasonal updates and new brand launches.",
        "Merchandised best-selling, trending, and high-margin SKUs on Walmart category pages during peak demand periods based on GMV analytics and consumer search demand.",
      ],
      skills: ["Campaign Planning", "Wireframe Design", "Quality Control", "GMV Optimization"],
      highlights: [
        { metric: "6 SBUs", text: "Walmart retail verticals managed" },
        { metric: "Peak Seasons", text: "High-demand SKU merchandising" },
      ],
    },
  ] as CareerItem[],

  caseStudies: [
    {
      id: "marketplace-expansion",
      title: "Pan-European Marketplace Expansion & Discovery Strategy",
      client: "Neteven — A Lectra Group (Paris, France)",
      category: "Marketplace Expansion",
      summary: "Strategizing cross-platform expansion across 20 European retail marketplaces for premium fashion & lifestyle brands.",
      metric: "90%+",
      metricLabel: "Brand Exposure Gain",
      workflow: [
        "Audit Channel Demand",
        "Assortment Alignment",
        "SaaS Engine Mapping",
        "Multi-Platform Launch",
        "Performance Monitoring",
      ],
      challenge: "Premium brands faced fragmented channel visibility across diverse European marketplaces, each with stringent catalog taxonomy, pricing, and localization rules.",
      solution: "Engineered seasonal sales analysis models across 20 platforms. Streamlined catalog feeds and deployed strategic cross-marketplace recommendations tailored to regional consumer demand.",
      impact: [
        "Expanded brand exposure by over 90% across top-tier European channels.",
        "Standardized seasonal reporting for enterprise brands and internal executive teams.",
        "Established predictable cross-border revenue channels across fashion and lifestyle verticals.",
      ],
      tags: ["Marketplace Strategy", "Channel Expansion", "Seasonal Analytics", "Neteven SaaS"],
      logos: ["/logo/neteven_logo.png", "/logo/farfetch_logo.png", "/logo/zalando_logo.png"],
      confidentialityNote: "Aggregated performance metrics from verified resume data. Brand details generalized for client confidentiality.",
    },
    {
      id: "content-optimization",
      title: "Automated Content Optimization & Listing Hygiene at Scale",
      client: "Farfetch, Zalando, Amazon & La Redoute",
      category: "Content Strategy",
      summary: "End-to-end product data optimization and automated error resolution across 20 premier digital commerce storefronts.",
      metric: "60%",
      metricLabel: "Visibility Uplift",
      workflow: [
        "Product Data Ingestion",
        "Attribute Enrichment",
        "Rule Validation",
        "Live Publishing",
        "Listing Error Triage",
      ],
      challenge: "High catalog rejection rates and listing discrepancies were suppressing search rankings and delaying seasonal product launches across key European marketplaces.",
      solution: "Implemented automated attribute mapping, enriched titles and bullet points with high-intent keywords, and established rapid-response listing resolution SOPs using Neteven back-office tools.",
      impact: [
        "60% measurable increase in organic product visibility and search impressions.",
        "Drastically reduced unpublish error rates, maximizing active sellable inventory.",
        "Directly stimulated GMV growth across premium fashion and accessories collections.",
      ],
      tags: ["Farfetch", "Zalando", "Amazon", "La Redoute", "Listing Health"],
      logos: ["/logo/amazon_logo.png", "/logo/farfetch_logo.png", "/logo/zalando_logo.png", "/logo/laredoute_logo.png"],
    },
    {
      id: "retail-content-ops",
      title: "Enterprise Retail Content Operations & PDP Governance",
      client: "Cognizant / Highbourne & Walmart",
      category: "Digital Operations",
      summary: "Curating high-converting product detail pages (PDPs) and managing cross-functional content governance for high-volume categories.",
      metric: "100%",
      metricLabel: "On-Time Delivery",
      workflow: [
        "Catalog Audit",
        "Copy & Spec Optimization",
        "Brand Guideline Review",
        "Multi-Tier Approval",
        "Live Shelf Audit",
      ],
      challenge: "Large-scale hardware and home assortments suffered from incomplete specifications, inconsistent formatting, and unoptimized product detail pages that dampened search discoverability.",
      solution: "Led content team review cycles, restructured taxonomy and feature highlights, and enforced strict digital shelf quality standards for flagship enterprise accounts.",
      impact: [
        "Enhanced product page discoverability and customer trust across major retail portals.",
        "Maintained 100% on-time delivery across peak launch cycles for Highbourne and Walmart.",
        "Streamlined CRM and product analysis routines for continuous listing improvement.",
      ],
      tags: ["Cognizant", "Walmart", "Content Governance", "Product Analysis"],
    },
    {
      id: "campaign-merchandising",
      title: "Campaign-Led Digital Merchandising & SBU Optimization",
      client: "Lumina Datamatics / Walmart SBUs",
      category: "Merchandising & Wireframing",
      summary: "Strategic wireframing and high-impact SKU merchandising across beauty, personal care, baby, and household essentials SBUs.",
      metric: "6 SBUs",
      metricLabel: "Retail Verticals Managed",
      workflow: [
        "Season Planning",
        "GMV Data Analysis",
        "Wireframe Design",
        "Trending SKU Pinning",
        "Performance Review",
      ],
      challenge: "Maximizing digital storefront conversion during high-demand promotional and seasonal holiday rushes across multiple competitive retail categories.",
      solution: "Crafted intuitive digital wireframes and storefront layouts that prioritized best-selling, new, and trending SKUs based on real-time GMV velocity and consumer search patterns.",
      impact: [
        "Delivered engaging, user-friendly storefront layouts across 6 strategic business units.",
        "Maximized visibility for high-demand seasonal items, driving higher cart sizes.",
        "Elevated client satisfaction through rigorous quality control and creative visual merchandising.",
      ],
      tags: ["Lumina Datamatics", "Walmart SBUs", "Wireframing", "GMV Optimization"],
    },
  ] as CaseStudy[],

  tools: [
    {
      name: "Adobe Analytics",
      category: "Analytics & Intelligence",
      description: "Channel traffic analysis, conversion funnel auditing, and customer behavioral journey tracking.",
      appliedAt: "Digital commerce performance reviews & client KPI reporting.",
      level: "Advanced",
      icon: "BarChart3",
    },
    {
      name: "Adobe Photoshop",
      category: "Visual Content",
      description: "Product asset refinement, banner editing, transparent silhouette generation, and visual merchandising assets.",
      appliedAt: "Digital storefront creative collaterals & catalog image hygiene.",
      level: "Proficient",
      icon: "Palette",
    },
    {
      name: "Canva",
      category: "Campaign Design",
      description: "Quick-turn promotional graphics, strategic client pitch decks, and brand style boards.",
      appliedAt: "Seasonal campaign presentations & executive summaries.",
      level: "Proficient",
      icon: "Layout",
    },
    {
      name: "Microsoft Office",
      category: "Data & Modeling",
      description: "Advanced spreadsheet modeling, catalog bulk uploads, pivot analytics, and executive client documentation.",
      appliedAt: "Cross-marketplace inventory reconciliation & structured reporting.",
      level: "Expert",
      icon: "FileSpreadsheet",
    },
    {
      name: "Wireframe Design",
      category: "UX & Merchandising",
      description: "Architecting high-converting digital shelf layouts, homepage SBU slots, and promotional feature blocks.",
      appliedAt: "Walmart category page updates & seasonal storefront refreshes.",
      level: "Advanced",
      icon: "Figma",
    },
  ] as ToolItem[],

  coreExpertise: [
    "Marketplace Strategy",
    "Content Strategy",
    "Back Office Operations",
    "Account Management",
    "Client Reporting",
    "Listing Management",
    "Digital Marketing",
    "Customer Relationship Management",
    "Product Analysis",
    "Campaign Planning",
    "Quality Control",
    "Cross-Border Expansion",
  ],

  education: [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "ESCC Business School",
      location: "France",
      period: "2024 – 2025",
      focus: "Marketing & E-Commerce Development",
      badge: "Dual Master's",
    },
    {
      degree: "Master of Business Administration (MBA)",
      institution: "ESCC Business School",
      location: "France",
      period: "2023 – 2024",
      focus: "International Marketing & Business",
      badge: "Dual Master's",
    },
    {
      degree: "Bachelor of Science (B.Sc.)",
      institution: "Pondicherry University",
      location: "India",
      period: "2017 – 2020",
      focus: "Mathematics",
      badge: "Foundational Analytics",
    },
  ] as EducationItem[],

  languages: [
    { language: "English", level: "Professional Working Proficiency", status: "Fluent" },
    { language: "French", level: "Professional Working Proficiency", status: "Fluent" },
    { language: "Tamil", level: "Native Proficiency", status: "Native" },
  ] as LanguageItem[],
};
