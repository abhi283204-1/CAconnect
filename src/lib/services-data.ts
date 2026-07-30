export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  icon: string;
  features: string[];
  benefits: { title: string; description: string }[];
  process?: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "income-tax",
    title: "Income Tax Filing",
    shortDescription: "Connect with expert CAs for ITR filing, tax planning, and assessment support.",
    heroDescription: "Get matched with verified Income Tax experts who can handle your ITR filing, tax planning, advance tax computation, and assessment representation. Compare quotes from multiple CAs and choose the best fit.",
    icon: "Receipt",
    features: [
      "ITR Filing for Individuals & Businesses",
      "Advance Tax Planning & Computation",
      "Tax Audit under Section 44AB",
      "Capital Gains Tax Advisory",
      "TDS Compliance & Return Filing",
      "Assessment & Scrutiny Representation",
      "NRI Taxation & DTAA Benefits",
      "Tax Refund Processing",
    ],
    benefits: [
      { title: "Expert Matching", description: "Get matched with CAs who specialize in your specific tax situation within 30 minutes." },
      { title: "Compare Quotes", description: "Receive quotes from 3-5 verified tax experts and choose based on price and reviews." },
      { title: "Zero Penalty Guarantee", description: "Our CAs ensure timely, accurate filing that protects you from penalties and notices." },
      { title: "Year-Round Support", description: "Not just filing season — get tax planning advisory throughout the year." },
    ],
    faqs: [
      { question: "How quickly can I get matched with a tax expert?", answer: "Our average matching time is 30 minutes. For urgent cases during filing season, we offer priority matching within 15 minutes." },
      { question: "What does the free consultation include?", answer: "A 20-minute call with the matched CA to discuss your tax situation, get preliminary advice, and understand the scope and pricing of the service." },
      { question: "Can you help with past years' unfiled returns?", answer: "Yes, our CAs can file updated returns for up to 2 previous assessment years and help you become compliant." },
    ],
    relatedServices: ["gst-services", "tds", "audit-assurance"],
  },
  {
    slug: "gst-services",
    title: "GST Services",
    shortDescription: "GST registration, monthly filing, annual returns, refunds, and advisory from verified experts.",
    heroDescription: "From GST registration to complex refund claims, our platform connects you with specialized GST practitioners who handle everything — monthly filings, reconciliation, annual returns, and audit support.",
    icon: "FileText",
    features: [
      "GST Registration & Migration",
      "Monthly/Quarterly Return Filing",
      "Annual Return & Reconciliation",
      "E-Way Bill Management",
      "Input Tax Credit Optimization",
      "GST Refund Processing",
      "GST Audit & Assessment Support",
      "Multi-State GST Compliance",
    ],
    benefits: [
      { title: "Specialized Experts", description: "Get matched with CAs who handle 100+ GST clients and know every nuance of compliance." },
      { title: "ITC Maximization", description: "Advanced reconciliation ensures you claim every rupee of eligible input tax credit." },
      { title: "Multi-State Coverage", description: "Single point of contact for managing GST across multiple states seamlessly." },
      { title: "Penalty Protection", description: "Proactive error detection and timely filing eliminates penalty risks completely." },
    ],
    faqs: [
      { question: "Do I need GST registration?", answer: "GST registration is mandatory if turnover exceeds ₹20 lakhs (₹10 lakhs for special states) or for inter-state supplies and e-commerce sellers." },
      { question: "Can one CA handle multi-state GST?", answer: "Yes, our platform CAs manage multi-state compliance for businesses operating across India with centralized reporting." },
      { question: "How do you help with GST refunds?", answer: "We match you with specialists who prepare and file refund applications with a 95%+ success rate." },
    ],
    relatedServices: ["income-tax", "accounting", "tds"],
  },
  {
    slug: "registration",
    title: "Company Registration",
    shortDescription: "Private Limited, LLP, OPC, Partnership — get registered with expert guidance.",
    heroDescription: "Launch your business on the right legal foundation. Our platform connects you with registration experts who handle everything from name approval to certificate of incorporation in as little as 7 days.",
    icon: "Building2",
    features: [
      "Private Limited Company Registration",
      "LLP Formation",
      "One Person Company (OPC)",
      "Partnership Firm Registration",
      "Section 8 Company (Non-Profit)",
      "MSME/Udyam Registration",
      "GST Registration",
      "Post-Incorporation Compliance Setup",
    ],
    benefits: [
      { title: "7-Day Registration", description: "Our experts complete company registration in as little as 7 working days." },
      { title: "Structure Advisory", description: "Get expert guidance on choosing the right structure for your business goals." },
      { title: "Complete Package", description: "Includes PAN, TAN, GST, bank account setup, and compliance calendar." },
      { title: "Transparent Pricing", description: "Know the exact cost upfront with no hidden charges or surprise fees." },
    ],
    faqs: [
      { question: "Which structure is best for my business?", answer: "Private Limited suits startups seeking funding, LLP works for services, OPC for solo entrepreneurs. Our CAs advise based on your specific goals." },
      { question: "How long does registration take?", answer: "Private Limited: 7-10 days. LLP: 5-7 days. Sole Proprietorship: 2-3 days. All timelines assume documents are ready." },
      { question: "What documents do I need?", answer: "PAN, Aadhaar, address proof of directors, registered office proof, and photographs. We provide a complete checklist." },
    ],
    relatedServices: ["roc-compliance", "startup-advisory", "gst-services"],
  },
  {
    slug: "trademark",
    title: "Trademark Registration",
    shortDescription: "Protect your brand with trademark registration, objection handling, and renewal.",
    heroDescription: "Secure your brand identity with expert trademark professionals. From availability search to registration certificate, our verified experts handle the entire process including objection hearings and renewals.",
    icon: "Shield",
    features: [
      "Trademark Search & Availability Check",
      "Trademark Application Filing",
      "Trademark Objection Reply",
      "Trademark Opposition Handling",
      "Trademark Renewal",
      "Logo & Brand Registration",
      "International Trademark (Madrid Protocol)",
      "Copyright Registration",
    ],
    benefits: [
      { title: "Brand Protection", description: "Secure exclusive rights to your brand name, logo, and tagline across India." },
      { title: "Expert Handling", description: "Specialists who handle objections and opposition with high success rates." },
      { title: "Fast Filing", description: "Application filed within 24 hours of document submission." },
      { title: "Complete Monitoring", description: "Post-registration monitoring for infringement and renewal reminders." },
    ],
    faqs: [
      { question: "How long does trademark registration take?", answer: "Filing happens in 24 hours. The registration process takes 12-18 months if no objection is raised. We handle the entire lifecycle." },
      { question: "What if my trademark gets objected?", answer: "Our experts draft and file objection replies with detailed legal arguments. Success rate on objection replies is above 80%." },
      { question: "Can I register a logo and name together?", answer: "Yes, you can register them separately or together as a composite mark. Our experts advise on the best strategy for maximum protection." },
    ],
    relatedServices: ["registration", "startup-advisory", "roc-compliance"],
  },
  {
    slug: "accounting",
    title: "Accounting & Bookkeeping",
    shortDescription: "Cloud-based accounting, MIS reports, and financial statements from experienced professionals.",
    heroDescription: "Get matched with accounting professionals who use modern cloud tools to deliver real-time financial visibility. From daily bookkeeping to monthly MIS and year-end finalization — all handled remotely with precision.",
    icon: "BookOpen",
    features: [
      "Cloud-Based Bookkeeping",
      "Monthly Financial Statements",
      "Bank Reconciliation",
      "Accounts Receivable & Payable",
      "MIS Reports & Dashboards",
      "Cash Flow Management",
      "Expense Tracking",
      "Year-End Finalization",
    ],
    benefits: [
      { title: "Real-Time Access", description: "24/7 access to your financial data on cloud platforms like Zoho, Tally, or QuickBooks." },
      { title: "Cost Effective", description: "Professional accounting at 50-70% less than hiring a full-time accountant." },
      { title: "Decision Ready", description: "Monthly MIS reports delivered by the 10th — helping you make informed decisions." },
      { title: "Audit Ready", description: "Books maintained to audit standards, always ready for investors or regulators." },
    ],
    faqs: [
      { question: "What software do your CAs use?", answer: "Tally Prime, Zoho Books, QuickBooks, and Xero. The matched CA will recommend the best fit for your business." },
      { question: "How quickly can we get started?", answer: "Setup takes 2-3 days for new businesses. Migration from existing systems: 1-2 weeks depending on data volume." },
      { question: "Do I get real-time access?", answer: "Yes, all clients get real-time dashboard access to view P&L, cash flow, and outstanding receivables anytime." },
    ],
    relatedServices: ["payroll", "virtual-cfo", "audit-assurance"],
  },
];

export const serviceDetailsGroup2: ServiceDetail[] = [
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    shortDescription: "Statutory audits, internal audits, tax audits, and due diligence from qualified auditors.",
    heroDescription: "Connect with experienced auditors for statutory, internal, and tax audits. Our platform matches you with audit professionals who bring Big 4 methodology at competitive pricing.",
    icon: "ShieldCheck",
    features: [
      "Statutory Audit under Companies Act",
      "Tax Audit under Section 44AB",
      "Internal Audit & Controls Review",
      "Stock Audit & Verification",
      "Due Diligence for M&A",
      "Bank Audit",
      "Forensic Audit",
      "Management Audit",
    ],
    benefits: [
      { title: "Experienced Auditors", description: "Matched with auditors who have handled 100+ engagements across industries." },
      { title: "Actionable Insights", description: "Audits that deliver improvement recommendations, not just compliance reports." },
      { title: "Competitive Pricing", description: "Big 4 quality at 40-60% lower cost through our verified network." },
      { title: "Timely Delivery", description: "Strict SLA adherence ensures your audit reports are always on time." },
    ],
    faqs: [
      { question: "When is statutory audit mandatory?", answer: "All companies under Companies Act 2013 require audit. Additionally, businesses with turnover exceeding prescribed limits need tax audit." },
      { question: "How long does an audit take?", answer: "For SMEs, typically 2-4 weeks. For larger companies, 4-8 weeks. We ensure minimal disruption to your operations." },
      { question: "Do you provide internal audit?", answer: "Yes, our network includes specialists in internal audit, providing quarterly or half-yearly reviews." },
    ],
    relatedServices: ["accounting", "roc-compliance", "virtual-cfo"],
  },
  {
    slug: "payroll",
    title: "Payroll Management",
    shortDescription: "End-to-end payroll processing, PF/ESI compliance, and salary structuring.",
    heroDescription: "Eliminate payroll headaches with verified payroll experts. From salary computation to PF/ESI compliance and Form 16 generation — get matched with professionals who ensure zero-error processing.",
    icon: "Users",
    features: [
      "Monthly Salary Processing",
      "PF & ESI Compliance",
      "TDS on Salary (Section 192)",
      "Professional Tax",
      "CTC Structuring",
      "Full & Final Settlement",
      "Form 16 Generation",
      "Leave & Attendance Integration",
    ],
    benefits: [
      { title: "Zero Errors", description: "Automated systems with manual QC ensure 100% accuracy every pay cycle." },
      { title: "Full Compliance", description: "PF, ESI, PT, and all labor law compliances handled without you lifting a finger." },
      { title: "Tax Optimization", description: "Smart CTC structuring that increases take-home by 8-15% for employees." },
      { title: "Scalable", description: "Solutions that work whether you have 5 employees or 500+." },
    ],
    faqs: [
      { question: "What's the minimum team size?", answer: "We handle payroll for teams of 5 to 500+ employees. Pricing is per-employee based." },
      { question: "Do you handle PF/ESI registration?", answer: "Yes, complete registration including obtaining numbers, portal setup, and ongoing compliance." },
      { question: "Can you restructure salary for tax savings?", answer: "Yes, our experts optimize CTC structure to increase take-home by 8-15% without increasing your cost." },
    ],
    relatedServices: ["accounting", "income-tax", "tds"],
  },
  {
    slug: "startup-advisory",
    title: "Startup Advisory",
    shortDescription: "From incorporation to funding — CAs who specialize in startup ecosystems.",
    heroDescription: "Get matched with CAs who live and breathe startups. DPIIT registration, fundraising support, ESOP design, angel tax compliance, and growth-stage financial strategy — all from verified startup specialists.",
    icon: "Rocket",
    features: [
      "DPIIT Startup Recognition",
      "Startup India Registration",
      "Financial Modeling & Projections",
      "Fundraising Documentation",
      "ESOP Design & Management",
      "Valuation Reports",
      "Angel Tax Compliance",
      "Section 80-IAC Tax Benefits",
    ],
    benefits: [
      { title: "Startup DNA", description: "CAs who understand startup pace, language, and growth metrics." },
      { title: "Investor Ready", description: "Financial models and clean books that give VCs confidence to invest." },
      { title: "Tax Benefits", description: "Claim 3-year tax holiday, angel tax exemption, and capital gains relief." },
      { title: "End-to-End", description: "From Day 0 incorporation to Series A readiness, all under one roof." },
    ],
    faqs: [
      { question: "What qualifies as a startup under DPIIT?", answer: "Entity under 10 years old, turnover below ₹100 Crore, working on innovation. We handle the entire recognition process." },
      { question: "How do you help with fundraising?", answer: "Financial projections, valuation reports, cap table management, and due diligence support for your next round." },
      { question: "What tax benefits can startups claim?", answer: "3-year tax holiday (80-IAC), angel tax exemption (56(2)(viib)), and capital gains exemption (54GB)." },
    ],
    relatedServices: ["registration", "virtual-cfo", "income-tax"],
  },
  {
    slug: "roc-compliance",
    title: "ROC Compliance",
    shortDescription: "Annual filings, board resolutions, and MCA compliance from dedicated experts.",
    heroDescription: "Never miss an ROC deadline again. Our platform connects you with compliance specialists who manage all your MCA filings, board resolutions, and annual returns — keeping your company in perfect standing.",
    icon: "ClipboardCheck",
    features: [
      "Annual Return Filing (MGT-7)",
      "Financial Statement Filing (AOC-4)",
      "Director KYC (DIR-3 KYC)",
      "Board Resolution Drafting",
      "Change in Directors",
      "Registered Office Change",
      "Share Allotment & Transfer",
      "Company Strike-Off",
    ],
    benefits: [
      { title: "Zero Penalties", description: "Proactive calendar management ensures all deadlines are met well in advance." },
      { title: "Active Status", description: "Maintain active MCA status — essential for banking, tenders, and credibility." },
      { title: "Complete Records", description: "All minutes, resolutions, and registers maintained professionally." },
      { title: "Affordable Plans", description: "Annual compliance packages starting at just ₹8,000/year." },
    ],
    faqs: [
      { question: "What happens if I miss ROC deadlines?", answer: "Late fees of ₹100/day per form. Prolonged non-compliance leads to company strike-off and director disqualification." },
      { question: "Is Director KYC mandatory?", answer: "Yes, every director must file DIR-3 KYC annually by September 30th. Failure deactivates DIN." },
      { question: "Can you reactivate a struck-off company?", answer: "Yes, we handle restoration via NCLT. Process takes 3-6 months with all pending returns filed." },
    ],
    relatedServices: ["registration", "audit-assurance", "accounting"],
  },
  {
    slug: "virtual-cfo",
    title: "Virtual CFO",
    shortDescription: "Strategic financial leadership for growing businesses without full-time cost.",
    heroDescription: "Get Big 4-caliber CFO expertise at a fraction of the cost. Our platform matches you with senior CAs who provide strategic financial leadership — budgeting, fundraising, board reporting, and growth advisory.",
    icon: "TrendingUp",
    features: [
      "Financial Strategy & Planning",
      "Budgeting & Forecasting",
      "Cash Flow Optimization",
      "Investor Relations & Board Reporting",
      "Fundraising & Valuation Support",
      "KPI Dashboards",
      "Cost Optimization",
      "Financial Process Automation",
    ],
    benefits: [
      { title: "70% Cost Saving", description: "Senior CFO expertise at ₹25-50K/month vs ₹30-50 lakh/year for full-time." },
      { title: "Strategic Decisions", description: "Data-driven insights for pricing, expansion, and operational decisions." },
      { title: "Board Confidence", description: "Professional MIS and presentations that build stakeholder trust." },
      { title: "Flexible Engagement", description: "Scale from 2 days/month to near full-time as your business grows." },
    ],
    faqs: [
      { question: "How is this different from accounting?", answer: "Accounting looks backward. A Virtual CFO looks forward — strategy, planning, fundraising, and board-level advisory." },
      { question: "How many hours per month?", answer: "Typically 15-40 hours/month including MIS prep, strategy calls, and leadership meetings." },
      { question: "Can they help with fundraising?", answer: "Yes — financial modeling, pitch deck financials, data room prep, and investor due diligence support." },
    ],
    relatedServices: ["accounting", "startup-advisory", "audit-assurance"],
  },
];

export const serviceDetailsGroup3: ServiceDetail[] = [
  {
    slug: "fssai",
    title: "FSSAI Registration",
    shortDescription: "Food business license and registration with complete documentation support.",
    heroDescription: "Get your FSSAI license quickly with verified food compliance experts. Whether you need basic registration or a state/central license, our experts handle documentation, application, and follow-up.",
    icon: "UtensilsCrossed",
    features: ["FSSAI Basic Registration", "State FSSAI License", "Central FSSAI License", "License Renewal", "Annual Return Filing", "Product Approval", "Import License", "Compliance Audit Support"],
    benefits: [
      { title: "Quick Processing", description: "Basic registration in 3-5 days. State license in 30-45 days." },
      { title: "Expert Guidance", description: "Specialists who know exactly what documents are needed for your food category." },
      { title: "Renewal Reminders", description: "Never let your license lapse with automated renewal tracking." },
      { title: "Complete Compliance", description: "Beyond registration — ongoing compliance support for your food business." },
    ],
    faqs: [
      { question: "Which FSSAI license do I need?", answer: "Basic Registration for turnover under ₹12 lakhs, State License for ₹12L-20Cr, Central License for above ₹20Cr or multi-state operations." },
      { question: "How long does it take?", answer: "Basic: 3-5 days. State License: 30-45 days. Central License: 45-60 days." },
      { question: "What documents are needed?", answer: "PAN, Aadhaar, business proof, food safety plan, and category-specific documents. We provide a complete checklist." },
    ],
    relatedServices: ["registration", "gst-services", "msme"],
  },
  {
    slug: "import-export",
    title: "Import Export Code (IEC)",
    shortDescription: "IEC registration for international trade with DGFT compliance assistance.",
    heroDescription: "Start your international trade journey with expert IEC registration support. Our verified professionals handle DGFT registration, documentation, and ongoing compliance for importers and exporters.",
    icon: "Globe",
    features: ["IEC Registration", "IEC Modification", "DGFT Compliance", "Export Promotion Schemes", "MEIS/SEIS Claims", "Advance Authorization", "EPCG Scheme", "Custom Documentation"],
    benefits: [
      { title: "Fast Registration", description: "IEC code issued within 3-5 working days with our expert handling." },
      { title: "Scheme Benefits", description: "Experts help you claim export incentives and duty exemption schemes." },
      { title: "Ongoing Support", description: "Not just registration — continuous DGFT compliance and scheme advisory." },
      { title: "Trade Advisory", description: "Guidance on HS codes, customs duty, and trade documentation." },
    ],
    faqs: [
      { question: "Who needs an IEC?", answer: "Any business involved in import or export of goods requires IEC. Services exports above ₹5 lakh also need IEC." },
      { question: "How long does IEC registration take?", answer: "With all documents ready, IEC is typically issued within 3-5 working days." },
      { question: "Is IEC lifetime valid?", answer: "Yes, IEC once issued is valid for lifetime. No renewal needed, but annual updation on DGFT portal is mandatory." },
    ],
    relatedServices: ["gst-services", "registration", "income-tax"],
  },
  {
    slug: "msme",
    title: "MSME Registration",
    shortDescription: "Udyam registration to unlock government benefits and priority lending.",
    heroDescription: "Unlock government benefits, subsidies, and priority sector lending with Udyam/MSME registration. Our experts ensure your registration is correct and help you leverage all available schemes.",
    icon: "Award",
    features: ["Udyam Registration", "MSME Certificate", "Scheme Application Support", "Priority Lending Support", "Government Tender Eligibility", "Subsidy Claims", "Credit Guarantee Scheme", "Technology Upgradation"],
    benefits: [
      { title: "Same-Day Registration", description: "Udyam registration completed within 24 hours in most cases." },
      { title: "Scheme Access", description: "Unlock benefits like priority lending, subsidy schemes, and lower interest rates." },
      { title: "Tender Eligibility", description: "MSME certificate makes you eligible for government purchase preferences." },
      { title: "Expert Advisory", description: "Guidance on which schemes apply to your specific business category." },
    ],
    faqs: [
      { question: "Who qualifies for MSME?", answer: "Micro: Investment up to ₹1 Cr, Turnover up to ₹5 Cr. Small: Investment up to ₹10 Cr, Turnover up to ₹50 Cr. Medium: Investment up to ₹50 Cr, Turnover up to ₹250 Cr." },
      { question: "Is Udyam registration free?", answer: "The government portal is free, but our experts ensure correct classification and help you access related schemes." },
      { question: "What benefits does MSME registration provide?", answer: "Priority lending, interest subsidy, delayed payment protection, government purchase preference, and various state-level incentives." },
    ],
    relatedServices: ["registration", "business-loan", "gst-services"],
  },
  {
    slug: "tds",
    title: "TDS Compliance",
    shortDescription: "TDS return filing, computation, and compliance to avoid penalties.",
    heroDescription: "Stay TDS compliant with expert professionals who handle computation, deduction, deposit, and return filing. Avoid penalties and interest with timely, accurate TDS management.",
    icon: "Calculator",
    features: ["TDS Return Filing (24Q, 26Q, 27Q)", "TDS Computation & Deduction", "TDS Certificate (Form 16/16A)", "Lower Deduction Certificate", "TDS on Property (26QB)", "TDS Refund Claims", "TRACES Management", "TDS Assessment Support"],
    benefits: [
      { title: "Timely Filing", description: "Quarterly returns filed well before deadlines to avoid late fees." },
      { title: "Accurate Computation", description: "Correct TDS rates applied based on latest amendments and provisions." },
      { title: "Certificate Generation", description: "Form 16 and 16A generated and distributed to deductees on time." },
      { title: "Notice Handling", description: "Expert support for TDS demand notices and rectification requests." },
    ],
    faqs: [
      { question: "When are TDS returns due?", answer: "Q1: July 31, Q2: October 31, Q3: January 31, Q4: May 31. Late filing attracts fees of ₹200/day." },
      { question: "What's the penalty for non-compliance?", answer: "Late filing fee ₹200/day, interest at 1-1.5% per month on late deposit, plus penalty under Section 271H up to ₹1 lakh." },
      { question: "Can you help with TDS on property?", answer: "Yes, we handle Form 26QB filing for TDS on property purchase (1% above ₹50 lakhs) and ensure compliance." },
    ],
    relatedServices: ["income-tax", "payroll", "accounting"],
  },
  {
    slug: "business-loan",
    title: "Business Loan Assistance",
    shortDescription: "Expert help with loan documentation, projections, and lender coordination.",
    heroDescription: "Improve your loan approval chances with expert financial documentation. Our CAs prepare projections, structure your financials, and coordinate with lenders to secure the best terms for your business.",
    icon: "Landmark",
    features: ["Loan Application Preparation", "Financial Projections", "CMA Data Preparation", "Project Report", "Working Capital Assessment", "Term Loan Documentation", "MUDRA Loan Support", "Lender Coordination"],
    benefits: [
      { title: "Higher Approval Rate", description: "Professionally prepared applications have 3x higher approval rates." },
      { title: "Better Terms", description: "Strong financials presentation helps negotiate lower interest rates." },
      { title: "Multiple Options", description: "CAs help you approach the right lenders for your specific need." },
      { title: "End-to-End Support", description: "From documentation to disbursement — complete handholding throughout." },
    ],
    faqs: [
      { question: "How do you help with loan approval?", answer: "We prepare CMA data, financial projections, project reports, and structure your application to maximize approval chances with the right lender." },
      { question: "What types of loans can you help with?", answer: "Term loans, working capital, MUDRA loans, LAP, equipment finance, and startup funding. Our CAs advise on the best option." },
      { question: "Do you guarantee loan approval?", answer: "We don't guarantee approval, but our professionally prepared applications see 80%+ approval rates vs 30-40% for self-filed applications." },
    ],
    relatedServices: ["accounting", "virtual-cfo", "startup-advisory"],
  },
];

// Combined array of all services
export const allServiceDetails: ServiceDetail[] = [
  ...serviceDetails,
  ...serviceDetailsGroup2,
  ...serviceDetailsGroup3,
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return allServiceDetails.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return allServiceDetails.map((s) => s.slug);
}
