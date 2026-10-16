export const PHONE = "858-305-0531";
export const PHONE_HREF = "tel:8583050531";
export const EMAIL = "info@taximacpa.com";
export const GOOGLE_BUSINESS_URL = "https://share.google/eKtpH5OxpKxJo0rob";

export const socialLinks = [
  {
    name: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/TaximaTaxPrep/",
  },
  {
    name: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/taximacpa/",
  },
  {
    name: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/taxima/",
  },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/tax-services", hasMenu: true },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Life Insurance", href: "/life-insurance" },
  { label: "Contact", href: "/#contact" },
] as const;

export const serviceMenuItems = [
  { label: "Tax Preparation", href: "/tax-services" },
  { label: "Bookkeeping", href: "/bookkeeping" },
  { label: "Payroll", href: "/payroll" },
  { label: "Business Services", href: "/business-services" },
  { label: "Packages & Plans", href: "/packages" },
  { label: "Tax Planning", href: "/tax-services#tax-planning" },
  { label: "IRS & State Notices", href: "/tax-services#additional-services" },
] as const;

export const whyChoose = [
  "California Licensed CPA",
  "Personalized Service",
  "Transparent Pricing",
  "Year-Round Support",
  "Secure Digital Document Exchange",
  "Virtual & In-Person Appointments",
] as const;

export const services = [
  {
    title: "Tax Preparation",
    description: "Individual and business tax returns.",
    icon: "document",
    wide: true,
    image: "/images/service-tax.jpg",
    href: "/tax-services",
  },
  {
    title: "Bookkeeping",
    description: "Monthly bookkeeping and financial reporting.",
    icon: "book",
    wide: false,
    image: "/images/bookkeeping-hero.jpg",
    href: "/bookkeeping",
  },
  {
    title: "Payroll",
    description: "Payroll processing and payroll tax filings.",
    icon: "wallet",
    wide: false,
    image: "/images/payroll-hero.jpg",
    href: "/payroll",
  },
  {
    title: "Business Services",
    description: "Business formation and compliance.",
    icon: "building",
    wide: true,
    image: "/images/business-team.jpg",
    href: "/business-services",
  },
  {
    title: "Tax Planning",
    description: "Quarterly estimates and tax-saving strategies.",
    icon: "chart",
    wide: false,
    image: "/images/tax-individual.jpg",
    href: "/tax-services#tax-planning",
  },
  {
    title: "IRS & State Notices",
    description: "Help responding to tax notices and letters.",
    icon: "alert",
    wide: false,
    image: "/images/tax-resolution.jpg",
    href: "/tax-services#additional-services",
  },
] as const;

export const whoWeHelp = [
  "Individuals",
  "Self-employed professionals",
  "Small businesses",
  "LLCs",
  "S Corporations",
  "Partnerships",
  "Nonprofits",
] as const;

export const howItWorks = [
  "Schedule a consultation.",
  "Upload your documents.",
  "Receive expert guidance and transparent pricing.",
  "Relax while Taxima handles the accounting and tax work.",
] as const;

export const trustPoints = [
  "CPA-led firm",
  "Accurate and timely service",
  "Year-round support",
  "Personalized solutions",
  "Secure technology",
  "Transparent communication",
] as const;

export const whyTrustUs = [
  "California Licensed CPA",
  "Years of professional tax and accounting experience",
  "Personalized, year-round service",
  "Transparent pricing",
  "Secure document exchange",
  "Accurate and timely work",
  "Dedicated to helping clients minimize taxes legally and stay compliant",
] as const;

export const testimonials = [
  {
    quote:
      "We’ve been working with Hormoz for several years now, handling the accounting, bookkeeping, and tax returns for both our nonprofit and for-profit LLC. From day one, he has been someone we’ve felt we can truly rely on. Hormoz is incredibly knowledgeable, pays close attention to the details, and always takes the time to explain things clearly—especially when it comes to complicated tax rules.",
    name: "Hooman Kalantari",
    role: "Google review · 5 stars",
    source: "Google",
  },
  {
    quote:
      "I’ve been using the same CPA for my taxes every year, and I honestly couldn’t be happier with his service. Hormoz is extremely knowledgeable, professional, and trustworthy. He always takes the time to explain everything clearly and makes the entire tax process so much easier and less stressful. I wouldn’t trust anyone else with my taxes.",
    name: "Fay Sharif",
    role: "Google review · Local Guide · 5 stars",
    source: "Google",
  },
] as const;

export const faqs = [
  {
    q: "How much do tax returns cost?",
    a: "Pricing depends on the complexity of your return — individual, business, investments, and state filings. After a short consultation we provide transparent, upfront pricing before any work begins.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes. We offer secure virtual appointments and digital document exchange, as well as in-person meetings by appointment.",
  },
  {
    q: "Do you prepare business tax returns?",
    a: "Absolutely. We prepare returns for LLCs, S-Corporations, partnerships, and sole proprietors, along with related bookkeeping and payroll support.",
  },
  {
    q: "Do you offer bookkeeping?",
    a: "Yes. We provide monthly bookkeeping, reconciliations, and clear financial reporting so you always know where your business stands.",
  },
  {
    q: "How do I schedule an appointment?",
    a: "Call us at 858-305-0531 or use the Schedule a Free Consultation button. We’ll confirm a time that works for you and send secure upload instructions.",
  },
] as const;

export const faqPageSections = [
  {
    id: "general",
    title: "General Questions",
    items: [
      {
        q: "Who does Taxima work with?",
        a: "Taxima works with individuals, self-employed professionals, and small business owners. We support families, LLCs, S Corporations, partnerships, C Corporations, and nonprofit organizations with tax, bookkeeping, payroll, and business services.",
      },
      {
        q: "Do you offer free consultations?",
        a: "Yes. We offer a complimentary initial consultation to understand your needs and recommend the appropriate services.",
      },
      {
        q: "Do you work remotely?",
        a: "Yes. We offer secure virtual appointments and digital document exchange, as well as in-person meetings by appointment.",
      },
      {
        q: "How do I schedule an appointment?",
        a: "Call us at 858-305-0531 or use the Schedule a Free Consultation button. We’ll confirm a time that works for you and send secure upload instructions.",
      },
      {
        q: "Are there any hidden fees?",
        a: "No. You’ll receive a clear quote before work begins. We discuss pricing and scope upfront so there are no surprises.",
      },
      {
        q: "Do you charge by the hour?",
        a: "Most recurring bookkeeping and tax services are offered using fixed monthly or project-based pricing. When hourly rates apply—such as certain consultations—we’ll explain that before work begins.",
      },
    ],
  },
  {
    id: "tax",
    title: "Tax Services",
    items: [
      {
        q: "How much does a tax return cost?",
        a: "Pricing depends on the complexity of your return—income sources, investments, rental activity, business filings, and state returns. After a short consultation, we provide transparent, upfront pricing before any work begins. Individual returns start at $499.",
      },
      {
        q: "What documents do I need?",
        a: "Common items include W-2s, 1099s, brokerage statements, mortgage interest statements, prior-year returns, and business records if applicable. After we learn about your situation, we’ll send a tailored document checklist.",
      },
      {
        q: "Can you help if I haven’t filed for several years?",
        a: "Yes. We help clients catch up on prior-year and unfiled returns, organize records, and get back into compliance with a clear plan.",
      },
      {
        q: "Do you prepare business tax returns?",
        a: "Yes. We prepare returns for sole proprietors, LLCs, S Corporations, partnerships, C Corporations, and nonprofit organizations, including the appropriate federal and California filings based on your entity type.",
      },
      {
        q: "Can you prepare taxes remotely?",
        a: "Absolutely. We offer secure virtual appointments and digital document exchange, along with in-person meetings by appointment when preferred.",
      },
    ],
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping & Packages",
    items: [
      {
        q: "Do you offer bookkeeping?",
        a: "Yes. We provide monthly bookkeeping, reconciliations, and clear financial reporting so you always know where your business stands.",
      },
      {
        q: "Which accounting software do you support?",
        a: "We primarily work with QuickBooks Online and can support setup, cleanup, ongoing bookkeeping, and reporting inside your QBO file.",
      },
      {
        q: "Can I switch from my current bookkeeper?",
        a: "Yes. We’ll review your existing books, outline a clean transition plan, and take over monthly bookkeeping with minimal disruption.",
      },
      {
        q: "Where can I see monthly bookkeeping packages?",
        a: "Visit our Packages & Plans page for Launch, Growth, and Scale bookkeeping packages, plus bundled savings options.",
      },
      {
        q: "Can you clean up past bookkeeping?",
        a: "Absolutely. Catch-up bookkeeping is one of our core services—we organize prior months and get your records accurate so you can move forward confidently.",
      },
    ],
  },
  {
    id: "payroll-business",
    title: "Payroll & Business Services",
    items: [
      {
        q: "Can you work with my existing payroll provider?",
        a: "Yes. Taxima can work with many existing payroll providers. We can coordinate payroll information with your bookkeeping and accounting, assist with payroll-related tax filings, and help you evaluate options if you want to switch.",
      },
      {
        q: "Can you prepare W-2s and 1099s?",
        a: "Yes. Taxima can assist with year-end W-2 and 1099 preparation and filing, and coordinate year-end reporting with your payroll and accounting records.",
      },
      {
        q: "Should I form an LLC or an S Corporation?",
        a: "An LLC and an S Corporation are not necessarily alternatives. An LLC is a legal entity, while S Corporation is a federal tax election. An eligible LLC can elect to be taxed as an S Corporation. Taxima can help you understand the tax and accounting implications.",
      },
      {
        q: "Can you help after my business is formed?",
        a: "Yes. Taxima can continue to support your business after formation with bookkeeping, payroll, tax preparation, tax planning, and ongoing compliance support.",
      },
    ],
  },
] as const;

export const officeHours = [
  { day: "Mon", hours: "9AM–5PM" },
  { day: "Tue", hours: "9AM–5PM" },
  { day: "Wed", hours: "9AM–5PM" },
  { day: "Thu", hours: "9AM–3PM" },
  { day: "Fri", hours: "9AM–5PM" },
  { day: "Sat", hours: "By Appointment Only" },
  { day: "Sun", hours: "Closed" },
] as const;

export const aboutTrustQuestions = [
  {
    title: "Who Are You?",
    paragraphs: [
      "Taxima CPA is a California-based CPA firm providing professional tax, accounting, bookkeeping, payroll, and business services to individuals and small businesses.",
      "Founded and led by a California-Licensed CPA with professional experience in tax and accounting, Taxima is committed to providing accurate, personalized, and dependable financial services.",
      "Our goal is to build long-term relationships with our clients and provide year-round support—not just during tax season.",
    ],
  },
  {
    title: "Why Did You Start Taxima?",
    paragraphs: [
      "Taxima was founded with a simple goal: to provide individuals and small business owners with professional tax and accounting services that are personalized, accessible, and focused on their long-term success.",
      "After working in professional tax and accounting environments, I saw how valuable it can be for clients to have a trusted CPA who understands their individual needs and is available to support them throughout the year—not just during tax season.",
      "Taxima was created to build those long-term client relationships and provide practical guidance in tax preparation, bookkeeping, payroll, tax planning, and business accounting.",
    ],
  },
  {
    title: "Why Should I Trust You With My Finances?",
    paragraphs: [
      "At Taxima, we understand that choosing a CPA is a matter of trust. Your financial information is personal, and the decisions made today can have a lasting impact on your financial future.",
      "Taxima is led by a California-licensed CPA with professional experience in tax and accounting. We are committed to providing accurate work, clear communication, secure handling of client information, and personalized attention to every client.",
      "We believe in doing more than simply preparing tax returns. Our goal is to understand each client's situation, explain the options clearly, and provide practical tax and accounting guidance throughout the year.",
      "Most importantly, we believe that trust is earned through accuracy, integrity, responsiveness, and long-term relationships. When you work with Taxima, you can expect to work directly with a CPA who is committed to understanding your needs and helping you make informed financial decisions.",
    ],
  },
] as const;

export const aboutStory = [
  {
    title: "Why I Became a CPA",
    paragraphs: [
      "I became a CPA because I wanted to build a career where I could combine accounting knowledge, problem-solving, and a genuine desire to help people.",
      "Over the years, my experience in tax and accounting has shown me that financial decisions can have a significant impact on individuals and business owners. I enjoy helping clients understand their financial situation, navigate complex tax matters, and make informed decisions with greater confidence.",
      "Becoming a CPA was an important part of that journey. It gave me the professional foundation and responsibility to provide clients with knowledgeable, ethical, and dependable tax and accounting services.",
      "Today, that same motivation is at the heart of Taxima: to use my experience and expertise to help clients stay compliant, plan ahead, and build stronger financial foundations.",
    ],
  },
  {
    title: "Why I Founded Taxima",
    paragraphs: [
      "I founded Taxima because I wanted to build a CPA firm based on something I believe is essential in this profession: long-term relationships with clients.",
      "Throughout my experience in tax and accounting, I saw how valuable it is for individuals and business owners to have a trusted professional who understands their financial situation and can support them throughout the year—not just when a tax return is due.",
      "I wanted to create a firm where clients can receive personalized attention, clear communication, and practical tax and accounting guidance without feeling like just another account number.",
      "Taxima was created to provide that kind of relationship. My goal is to grow alongside my clients and become a trusted resource for their tax, accounting, and business needs as their financial lives and businesses evolve.",
    ],
  },
  {
    title: "Our Commitment to Individuals and Small Businesses",
    paragraphs: [
      "At Taxima, we believe every client deserves personalized attention, clear communication, and dependable professional service.",
      "For individuals, our goal is to make the tax process easier to understand and less stressful while helping clients take advantage of available tax opportunities and plan ahead.",
      "For small businesses, we look beyond the annual tax return. We help business owners maintain organized financial records, stay on top of tax and compliance requirements, understand their financial performance, and make informed decisions as their businesses grow.",
      "We are committed to building long-term relationships with our clients and being a trusted resource throughout the year—not just during tax season.",
    ],
  },
] as const;

export const cpaCredentials = [
  {
    label: "Licensure",
    value: "California Licensed CPA",
  },
  {
    label: "Education",
    value: "B.A. in International Business, University of California San Diego",
  },
  {
    label: "Experience",
    value:
      "5 years of tax and accounting experience helping clients navigate compliance, keep accurate records, and make informed decisions",
  },
  {
    label: "Industries",
    value: "Worked with a variety of businesses, including real estate and nonprofits",
  },
  {
    label: "Software",
    value: "QuickBooks Online, Drake, CCH Axcess",
  },
] as const;

export const aboutMission =
  "Our mission is to provide accurate, dependable, and personalized tax and accounting services that help our clients stay compliant, make informed financial decisions, and focus on what matters most.";

export const coreValues = [
  {
    title: "Integrity",
    description: "Honest guidance and ethical judgment in every recommendation we make.",
  },
  {
    title: "Accuracy",
    description: "Careful, dependable work you can rely on for compliance and planning.",
  },
  {
    title: "Professionalism",
    description: "Clear standards, respectful communication, and CPA-led accountability.",
  },
  {
    title: "Responsiveness",
    description: "Timely answers and support when questions or notices arise.",
  },
  {
    title: "Long-Term Client Relationships",
    description: "Year-round partnership that grows with your life and business.",
  },
] as const;

export const whyClientsChoose = [
  {
    title: "CPA-led expertise",
    description: "Work directly with a California-licensed CPA—not a call center queue.",
  },
  {
    title: "Personalized service",
    description: "Advice shaped around your goals, filings, and business structure.",
  },
  {
    title: "Transparent pricing",
    description: "Clear expectations before work begins, with no surprise billing.",
  },
  {
    title: "Year-round support",
    description: "Guidance beyond April—planning, bookkeeping, and compliance all year.",
  },
  {
    title: "Modern technology",
    description: "Secure digital document exchange and efficient virtual appointments.",
  },
  {
    title: "Prompt communication",
    description: "Straightforward updates so you always know where things stand.",
  },
  {
    title: "Solutions tailored to each client",
    description: "Practical options explained clearly so you can decide with confidence.",
  },
] as const;

export const whoWeServe = [
  "Individuals",
  "Families",
  "Self-employed professionals",
  "Small businesses",
  "LLCs",
  "S Corporations",
  "Partnerships",
  "Nonprofit organizations",
] as const;

export const professionalCommitment =
  "We believe every client deserves clear communication, reliable advice, and proactive support throughout the year—not just during tax season. Our goal is to build lasting relationships by delivering quality service and practical solutions.";

export const personalNote =
  "When you work with Taxima, you're not calling a large call center or being passed from one department to another. You'll work directly with a CPA who understands your business and is committed to helping you succeed.";

export const taxOverviewQuestions = [
  {
    title: "What Tax Services Do You Offer?",
    paragraphs: [
      "Taxima provides comprehensive tax preparation and planning services for individuals and small businesses.",
      "We also assist clients with IRS and California tax notices and other tax compliance matters.",
      "Our goal is not simply to prepare your tax return, but to help you understand your tax situation, stay compliant, and plan throughout the year.",
    ],
  },
  {
    title: "Who Do You Help?",
    paragraphs: [
      "Taxima helps individuals, self-employed professionals, and small business owners with their tax and accounting needs.",
      "We work with individuals and families, as well as LLCs, S Corporations, partnerships, C Corporations, and nonprofit organizations.",
      "Whether you need help with your tax return, bookkeeping, payroll, business compliance, or year-round tax planning, Taxima provides personalized support designed around your needs.",
    ],
  },
  {
    title: "Why Should I Choose Taxima?",
    paragraphs: [
      "At Taxima, we believe choosing a CPA is about more than simply finding someone to prepare your tax return. It's about finding a professional you can trust with your financial needs throughout the year.",
      "At Taxima, our goal is simple: to provide professional tax and accounting services while building lasting relationships with the individuals and businesses we serve.",
    ],
  },
] as const;

export const taxChooseReasons = [
  {
    title: "CPA-led service",
    description: "Your tax and accounting needs are handled with professional CPA experience.",
  },
  {
    title: "Personalized attention",
    description: "We take the time to understand your individual or business situation.",
  },
  {
    title: "Year-round support",
    description: "Tax, bookkeeping, payroll, and accounting services beyond tax season.",
  },
  {
    title: "Clear communication",
    description: "Straightforward language so you can make informed decisions.",
  },
  {
    title: "Transparent pricing",
    description: "We discuss fees and services clearly before beginning work.",
  },
  {
    title: "Long-term relationships",
    description: "A trusted financial resource as your needs and business grow.",
  },
] as const;

export const taxGettingStarted = [
  {
    title: "Contact Us",
    description: "Schedule a consultation or contact us to tell us what you need help with.",
  },
  {
    title: "Discuss Your Needs",
    description:
      "We'll learn about your tax or accounting situation, answer your questions, and discuss the services that may be right for you.",
  },
  {
    title: "Receive a Clear Quote",
    description: "We'll explain the recommended services and fees before beginning any work.",
  },
  {
    title: "Get Started",
    description:
      "Once you decide to move forward, we'll provide the next steps and securely collect the information and documents needed to begin.",
  },
] as const;

export const individualTaxServices = [
  "Individual Tax Preparation",
  "W-2 Income",
  "1099 Income",
  "Self-employed (Schedule C)",
  "Rental Properties (Schedule E)",
  "Investment Income",
  "Retirement Income",
  "Capital Gains",
  "Tax Credits",
  "Prior-Year Tax Returns",
  "Amended Returns",
  "Estimated Tax Payments",
] as const;

export const businessTaxServices = [
  "Sole Proprietorships",
  "Single-Member LLCs",
  "Multi-Member LLCs",
  "S Corporations",
  "Partnerships",
  "C Corporations",
  "Nonprofit Organizations",
] as const;

export const taxPlanningServices = [
  {
    title: "Quarterly Estimated Taxes",
    description: "Stay current with estimated payments and avoid underpayment surprises.",
  },
  {
    title: "Year-End Tax Planning",
    description: "Review opportunities before year-end so you can act while options remain open.",
  },
  {
    title: "Entity Structure Review",
    description: "Evaluate whether your current structure still fits your goals and tax picture.",
  },
  {
    title: "Retirement Contribution Planning",
    description: "Plan contributions that support both retirement goals and tax efficiency.",
  },
  {
    title: "Estimated Tax Projections",
    description: "Clear projections so you can budget and plan with fewer surprises.",
  },
  {
    title: "Business Tax Strategies",
    description: "Practical strategies aligned with how your business actually operates.",
  },
] as const;

export const additionalTaxServices = [
  {
    title: "Amended Returns",
    description: "Corrections when something was missed or needs to be updated.",
  },
  {
    title: "Prior-Year Unfiled Returns",
    description: "Help catching up if you have unfiled returns from previous years.",
  },
  {
    title: "IRS Notices",
    description: "Guidance and response support when the IRS reaches out.",
  },
  {
    title: "California Tax Notices",
    description: "Help reviewing and responding to California Franchise Tax Board notices.",
  },
  {
    title: "Installment Agreement Assistance",
    description: "Support setting up payment plans when you need more time to pay.",
  },
  {
    title: "Penalty Abatement Requests",
    description: "Help requesting relief when penalties may be reduced or removed.",
  },
] as const;

export const taxWhyChoose = [
  "California Licensed CPA",
  "Personalized Service",
  "Year-Round Support",
  "Transparent Pricing",
  "Secure Document Exchange",
  "Virtual and In-Person Appointments",
] as const;

export const taxProcess = [
  "Schedule a consultation.",
  "Upload your tax documents securely.",
  "We prepare and review your return.",
  "Review, sign, and file your return.",
] as const;

export const taxFaqs = [
  {
    q: "How much does a tax return cost?",
    a: "Pricing depends on the complexity of your return—income sources, investments, rental activity, business filings, and state returns. After a short consultation, we provide transparent, upfront pricing before any work begins.",
  },
  {
    q: "What documents do I need?",
    a: "Common items include W-2s, 1099s, brokerage statements, mortgage interest statements, prior-year returns, and business records if applicable. After we learn about your situation, we'll send a tailored document checklist.",
  },
  {
    q: "Can you help if I haven't filed for several years?",
    a: "Yes. We help clients catch up on prior-year and unfiled returns, organize records, and get back into compliance with a clear plan.",
  },
  {
    q: "Do you prepare business tax returns?",
    a: "Yes. We prepare returns for sole proprietors, LLCs, S Corporations, partnerships, C Corporations, and nonprofit organizations, including the appropriate federal and California filings based on your entity type.",
  },
  {
    q: "Can you prepare taxes remotely?",
    a: "Absolutely. We offer secure virtual appointments and digital document exchange, along with in-person meetings by appointment when preferred.",
  },
] as const;

export const taxServiceMenu = [
  {
    heading: "Individual Tax Services",
    items: [
      "Individual Tax Preparation",
      "Tax Planning",
      "Prior-Year Returns",
      "Amended Returns",
      "Estimated Tax Payments",
    ],
  },
  {
    heading: "Business Tax Services",
    items: [
      "Business Tax Preparation",
      "S Corporation Returns",
      "Partnership Returns",
      "C Corporation Returns",
      "LLC Tax Returns",
      "Nonprofit Tax Returns",
    ],
  },
  {
    heading: "Tax Resolution",
    items: [
      "IRS Notices",
      "California Notices",
      "Payment Plan Assistance",
      "Penalty Abatement Support",
    ],
  },
] as const;

export const bookkeepingWhyMatters = [
  "Know how your business is performing.",
  "Stay organized for tax season.",
  "Make informed financial decisions.",
  "Reduce costly bookkeeping errors.",
  "Save time by outsourcing your accounting.",
] as const;

export const bookkeepingServiceGroups = [
  {
    title: "Monthly Bookkeeping",
    image: "/images/tax-business.jpg",
    items: [
      "Recording income and expenses",
      "Categorizing transactions",
      "Maintaining your general ledger",
    ],
  },
  {
    title: "Bank & Credit Card Reconciliations",
    image: "/images/tax-individual.jpg",
    items: [
      "Reconcile business bank accounts",
      "Reconcile credit card accounts",
      "Identify discrepancies",
    ],
  },
  {
    title: "Financial Statements",
    image: "/images/tax-planning.jpg",
    items: [
      "Profit & Loss Statement",
      "Balance Sheet",
      "Cash Flow Statement (when requested)",
    ],
  },
  {
    title: "Month-End Closing",
    image: "/images/bookkeeping-hero.jpg",
    items: [
      "Review transactions",
      "Adjusting journal entries",
      "Ensure books are accurate and complete",
    ],
  },
  {
    title: "QuickBooks Services",
    image: "/images/badge-calc.jpg",
    items: [
      "QuickBooks Online setup",
      "QuickBooks cleanup",
      "Chart of accounts organization",
      "Ongoing QuickBooks support",
    ],
  },
  {
    title: "Catch-Up Bookkeeping",
    image: "/images/tax-resolution.jpg",
    items: [
      "Organize prior months",
      "Clean up incomplete records",
      "Prepare accurate financial history",
    ],
  },
] as const;

export const bookkeepingPackages = [
  {
    name: "Launch",
    description: "Ideal for new businesses and solopreneurs with low transaction volume.",
  },
  {
    name: "Growth",
    description: "Designed for growing businesses with recurring bookkeeping needs.",
  },
  {
    name: "Scale",
    description: "Comprehensive bookkeeping and support for established businesses.",
  },
] as const;

export const individualTaxPricing = [
  { service: "Individual Tax Return (Form 1040)", price: "$499" },
  { service: "Self-Employment Income (Schedule C)", price: "+$250" },
  { service: "Rental Property (per property)", price: "+$150" },
  { service: "Amended Tax Return", price: "From $350" },
  { service: "Prior-Year Tax Return", price: "From $550" },
  { service: "Tax Planning Consultation", price: "From $300" },
] as const;

export const businessTaxPricing = [
  { service: "Single-Member LLC", price: "$650" },
  { service: "Partnership", price: "$1,200" },
  { service: "S Corporation", price: "$1,200" },
  { service: "C Corporation", price: "$1,300" },
  { service: "Nonprofit Organization", price: "Custom Quote" },
] as const;

export const payrollPricingFactors = [
  "Number of employees",
  "Payroll frequency",
  "State filing requirements",
  "Additional payroll services requested",
] as const;

export const payrollPricingIncludes = [
  "Payroll processing",
  "Payroll tax filings",
  "Direct deposit",
  "New employee setup",
  "W-2 preparation",
  "1099 preparation (where applicable)",
] as const;

export const formationPricingIncludes = [
  "Entity selection consultation",
  "EIN application assistance",
  "S Corporation election assistance",
  "Business registration guidance",
  "California Statement of Information (SOI)",
  "Annual compliance reminders",
] as const;

export const additionalServicePricing = [
  { service: "QuickBooks Cleanup", price: "Custom Quote" },
  { service: "Catch-Up Bookkeeping", price: "Custom Quote" },
  { service: "IRS & California Tax Notice Assistance", price: "From $200" },
  { service: "Tax Planning", price: "From $300" },
  { service: "Business Consultation", price: "From $250" },
  { service: "1099 Preparation", price: "From $150" },
] as const;

export const pricingVaryFactors = [
  "Business complexity",
  "Number of bank accounts",
  "Number of credit cards",
  "Monthly transaction volume",
  "Number of employees",
  "Industry-specific requirements",
  "Cleanup work needed",
  "Additional tax schedules or filings",
] as const;

export const pricingFaqs = [
  {
    q: "Do you charge by the hour?",
    a: "Most recurring bookkeeping and tax services are offered using fixed monthly or project-based pricing.",
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes. We offer a complimentary initial consultation to understand your needs and recommend the appropriate services.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. You'll receive a clear quote before work begins.",
  },
  {
    q: "Where can I see monthly bookkeeping packages?",
    a: "Visit our Packages & Plans page for Launch, Growth, and Scale bookkeeping packages, plus bundled savings options.",
  },
] as const;

export const monthlyPackages = [
  {
    name: "Launch",
    price: "$349",
    cadence: "/month",
    tagline: "Designed for new and small businesses.",
    ideal: "New businesses and solopreneurs",
    featured: false,
    includes: [
      "Up to 1 business bank account",
      "Up to 2 business credit cards",
      "Up to 100 monthly transactions",
      "Monthly bookkeeping",
      "Monthly bank and credit card reconciliations",
      "Monthly Profit & Loss Statement",
      "Monthly Balance Sheet",
      "Quarterly financial review",
      "Annual California SOI preparation (if applicable)*",
      "Secure client portal",
      "Routine email support",
    ],
  },
  {
    name: "Growth",
    price: "$499",
    cadence: "/month",
    tagline: "Ideal for growing businesses.",
    ideal: "Growing businesses with recurring bookkeeping needs",
    featured: true,
    includes: [
      "Up to 2 business bank accounts",
      "Up to 4 business credit cards",
      "Up to 250 monthly transactions",
      "Monthly bookkeeping",
      "Monthly reconciliations",
      "Monthly financial statements",
      "Quarterly review meeting",
      "Annual California SOI preparation (if applicable)*",
      "Priority email support",
      "Secure client portal",
    ],
  },
  {
    name: "Scale",
    price: "$699",
    cadence: "/month",
    tagline: "Designed for established businesses requiring additional support.",
    ideal: "Established businesses needing more support",
    featured: false,
    includes: [
      "Up to 4 business bank accounts",
      "Up to 8 business credit cards",
      "Up to 500 monthly transactions",
      "Monthly bookkeeping",
      "Monthly reconciliations",
      "Monthly financial statements",
      "Quarterly business review",
      "Annual California SOI preparation (if applicable)*",
      "Priority email support",
      "Secure client portal",
    ],
  },
] as const;

export const packageBundles = [
  {
    name: "Bookkeeping + Quarterly Tax",
    price: "$399/month",
    description: "Monthly bookkeeping paired with quarterly tax guidance.",
  },
  {
    name: "Quarterly Tax + Tax Return — Schedule C",
    price: "$1,000/year",
    description: "Year-round quarterly tax support plus your Schedule C return.",
  },
  {
    name: "Quarterly Tax + Tax Return — S-Corp/Partnership",
    price: "$1,900/year",
    description: "Quarterly tax support plus your S Corporation or partnership return.",
  },
  {
    name: "Complete Accounting & Tax",
    price: "$499/month",
    description: "Ongoing accounting and tax support in one monthly plan.",
  },
] as const;

export const quarterlyTaxPricing = [
  { service: "Quarterly Tax — Individual/Schedule C", price: "$200/quarter" },
  { service: "Quarterly Tax — S-Corp/Partnership", price: "$250/quarter" },
] as const;

export const packageFaqs = [
  {
    q: "Which package is right for me?",
    a: "Launch fits new and smaller businesses. Growth is built for expanding activity and more accounts. Scale supports established businesses that need broader capacity and priority support. We’ll recommend the best fit during your consultation.",
  },
  {
    q: "What does the SOI footnote mean?",
    a: "Bookkeeping packages include preparation of one annual California Statement of Information filing for eligible California entities. Government filing fees, if any, are not included.",
  },
  {
    q: "Can I add payroll to a package?",
    a: "Yes. Payroll is available as an add-on starting at $100/month, based on employee count, pay frequency, and filing requirements.",
  },
  {
    q: "Do bundles replace individual services?",
    a: "Bundles combine frequently paired services at a clearer starting price. We’ll confirm what’s included and any customization during your consultation.",
  },
] as const;

export const soiFootnote =
  "Includes one annual California Statement of Information filing for eligible California entities. Government filing fees, if any, are not included.";

export const bookkeepingAddOns = [
  "Payroll",
  "Sales tax filings",
  "Accounts payable support",
  "Accounts receivable support",
  "Budget preparation",
  "Cash flow analysis",
  "Annual Statement of Information (SOI)",
  "Business compliance reminders",
] as const;

export const bookkeepingIndustries = [
  "Consultants",
  "Contractors",
  "Professional Services",
  "Real Estate Professionals",
  "Retail Businesses",
  "Medical Practices",
  "Nonprofit Organizations",
] as const;

export const bookkeepingWhyChoose = [
  "CPA-led bookkeeping",
  "Monthly financial reports",
  "Transparent pricing",
  "Secure cloud-based systems",
  "Personalized support",
  "Year-round guidance",
] as const;

export const bookkeepingProcess = [
  "Schedule a consultation.",
  "Review your current bookkeeping.",
  "Receive a customized monthly proposal.",
  "We keep your books accurate every month.",
] as const;

export const bookkeepingFaqs = [
  {
    q: "Which accounting software do you support?",
    a: "We primarily work with QuickBooks Online and can support setup, cleanup, ongoing bookkeeping, and reporting inside your QBO file.",
  },
  {
    q: "Can I switch from my current bookkeeper?",
    a: "Yes. We’ll review your existing books, outline a clean transition plan, and take over monthly bookkeeping with minimal disruption.",
  },
  {
    q: "How often will my books be updated?",
    a: "Most clients are on a monthly cadence with reconciliations and financial statements delivered after each month closes. Higher-volume clients can discuss more frequent updates.",
  },
  {
    q: "Do I have to use QuickBooks?",
    a: "QuickBooks Online is our preferred platform for accuracy and collaboration, but we’ll discuss options during your consultation if you use another system.",
  },
  {
    q: "Can you clean up past bookkeeping?",
    a: "Absolutely. Catch-up bookkeeping is one of our core services—we organize prior months and get your records accurate so you can move forward confidently.",
  },
] as const;

export const bookkeepingMenuOverview = [
  {
    heading: "Monthly Services",
    items: [
      "Monthly bookkeeping",
      "Bank reconciliations",
      "Credit card reconciliations",
      "Financial statements",
      "Month-end close",
    ],
  },
  {
    heading: "Setup & Cleanup",
    items: [
      "QuickBooks setup",
      "QuickBooks cleanup",
      "Catch-up bookkeeping",
      "Chart of accounts review",
    ],
  },
  {
    heading: "Advisory",
    items: [
      "Financial reporting",
      "Cash flow review",
      "Budget assistance",
      "Quarterly business reviews",
    ],
  },
] as const;

export const payrollServiceGroups = [
  {
    title: "Payroll Processing",
    image: "/images/payroll-hero.jpg",
    items: ["Weekly payroll", "Bi-weekly payroll", "Semi-monthly payroll", "Monthly payroll"],
  },
  {
    title: "Employee Payroll Management",
    image: "/images/payroll-hero.jpg",
    items: [
      "New employee setup",
      "Employee updates",
      "Direct deposit coordination",
      "Employee deductions",
      "Vacation and sick leave tracking (if requested)",
    ],
  },
  {
    title: "Payroll Tax Compliance",
    image: "/images/payroll-compliance.jpg",
    items: [
      "Federal payroll tax filings",
      "California payroll tax filings",
      "Payroll tax deposits",
      "Quarterly payroll reports",
      "Year-end payroll reporting",
    ],
  },
  {
    title: "Year-End Payroll Forms",
    image: "/images/tax-individual.jpg",
    items: ["W-2 preparation", "W-3 filing", "1099 preparation (where applicable)"],
  },
] as const;

export const payrollOutsourceBenefits = [
  "Save time.",
  "Reduce payroll errors.",
  "Stay compliant with payroll tax requirements.",
  "Avoid late filing penalties.",
  "Coordinate payroll with bookkeeping and tax preparation.",
  "One trusted CPA firm handling your financial needs.",
] as const;

export const payrollWhoWeServe = [
  "Small businesses",
  "S Corporations",
  "LLCs",
  "Professional service firms",
  "Restaurants",
  "Contractors",
  "Retail businesses",
  "Nonprofit organizations",
] as const;

export const payrollOverview = [
  {
    heading: "Payroll Administration",
    items: [
      "Payroll processing",
      "Employee setup",
      "Direct deposit coordination",
      "Payroll record maintenance",
    ],
  },
  {
    heading: "Payroll Tax Compliance",
    items: [
      "Payroll tax calculations",
      "Payroll tax filings",
      "Quarterly payroll reports",
      "Year-end reporting",
    ],
  },
  {
    heading: "Year-End Forms",
    items: ["W-2 preparation", "W-3 filing", "1099 preparation"],
  },
] as const;

export const payrollFaqs = [
  {
    q: "Can you work with my existing payroll provider?",
    a: "Yes. Taxima can work with many existing payroll providers. If you are already using a payroll service that meets your business needs, you generally do not need to switch providers just to work with us. We can help coordinate payroll information with your bookkeeping and accounting, assist with payroll-related tax filings and compliance, and help identify issues that may need attention. If you are considering changing payroll providers, we can also help you evaluate your options.",
  },
  {
    q: "Can you help me switch payroll providers?",
    a: "Yes. Taxima can help you transition from your current payroll provider to a new one. We can assist with reviewing your existing payroll setup, gathering the necessary information, setting up the new payroll system, and coordinating the transition to help minimize disruptions. Before making a change, we'll review your current payroll needs and help you understand the steps involved.",
  },
  {
    q: "How often can employees be paid?",
    a: "Employees can generally be paid weekly, biweekly, semimonthly, or monthly, depending on applicable state and federal requirements and your established payroll schedule. For California employers, payroll frequency rules can be specific to the type of employee and circumstances. Taxima can help you determine an appropriate payroll schedule and stay on track with pay-date and payroll tax requirements.",
  },
  {
    q: "Can you prepare W-2s and 1099s?",
    a: "Yes. Taxima can assist with year-end W-2 and 1099 preparation and filing. We help ensure employee and contractor information is organized and forms are prepared and submitted by applicable deadlines. If you use Taxima for ongoing payroll and bookkeeping, we can also coordinate year-end reporting with your payroll and accounting records.",
  },
  {
    q: "Do I need payroll if I'm an S Corporation owner?",
    a: "In many cases, yes. An S Corporation shareholder-employee who provides services to the business generally needs to receive reasonable compensation through payroll rather than taking all earnings as distributions. The appropriate salary depends on the facts and circumstances of the business. Taxima can help you understand the requirements, establish payroll, and coordinate payroll with your S Corporation tax return. Reasonable compensation rules and other requirements need to be considered—salary should not be set solely based on a desired tax result.",
  },
] as const;

export const businessLifecycle = [
  {
    step: "01",
    title: "Start Your Business",
    text: "Entity guidance, registration support, EIN help, and S Corporation election assistance.",
  },
  {
    step: "02",
    title: "Stay Compliant",
    text: "Annual filings, reminders, and record support so you stay in good standing.",
  },
  {
    step: "03",
    title: "Grow Your Business",
    text: "Bookkeeping, payroll, tax preparation, planning, and year-round advisory.",
  },
] as const;

export const businessFormationEntities = [
  "Sole Proprietorship",
  "LLC",
  "S Corporation",
  "C Corporation",
  "Partnership",
  "Nonprofit Organizations",
] as const;

export const businessRegistrationItems = [
  "State registration guidance",
  "EIN application assistance",
  "Entity selection consultation",
  "S Corporation election assistance",
] as const;

export const businessComplianceItems = [
  "Annual Statement of Information (California)",
  "Annual compliance reminders",
  "Business record maintenance",
  "Registered agent coordination (if offered)",
  "Business license renewal reminders",
  "Tax filing deadline reminders",
] as const;

export const businessOngoingSupport = [
  { title: "Bookkeeping", href: "/bookkeeping" },
  { title: "Payroll", href: "/payroll" },
  { title: "Business tax preparation", href: "/tax-services#business" },
  { title: "Tax planning", href: "/tax-services#tax-planning" },
  { title: "Financial reporting", href: "/bookkeeping" },
  { title: "Quarterly consultations", href: "/#contact" },
] as const;

export const businessComplianceMatters = [
  "Avoid penalties.",
  "Stay in good standing.",
  "Meet filing deadlines.",
  "Maintain accurate records.",
  "Focus on running your business.",
] as const;

export const businessOverview = [
  {
    heading: "Business Formation",
    items: [
      "Entity selection guidance",
      "EIN application assistance",
      "S corporation election assistance",
      "Business registration guidance",
    ],
  },
  {
    heading: "Business Compliance",
    items: [
      "California Statement of Information (SOI)",
      "Annual compliance reminders",
      "Business license renewal reminders",
      "Corporate record support",
    ],
  },
  {
    heading: "Ongoing Business Services",
    items: [
      "Bookkeeping",
      "Payroll",
      "Business tax returns",
      "Tax planning",
      "Financial reporting",
    ],
  },
] as const;

export const businessFaqs = [
  {
    q: "Should I form an LLC or an S Corporation?",
    a: "An LLC and an S Corporation are not necessarily alternatives. An LLC is a legal entity, while S Corporation is a federal tax election. An eligible LLC can elect to be taxed as an S Corporation. The right choice depends on expected income, business activities, ownership, payroll requirements, administrative costs, and long-term goals. Taxima can help you understand the tax and accounting implications. When legal advice is needed, we recommend consulting with a qualified attorney.",
  },
  {
    q: "When should I elect S Corporation status?",
    a: "There is no single income level or date that makes an S Corporation election right for every business. The decision depends on expected profit, reasonable compensation, payroll requirements, administrative costs, and overall tax situation. If an election is appropriate, timing matters because IRS deadlines apply. An S Corporation election does not automatically reduce taxes for every business, and additional payroll and compliance responsibilities apply.",
  },
  {
    q: "What annual filings are required?",
    a: "Annual filing requirements depend on your business structure, location, tax status, and activities. They may include federal and state income tax returns, California filings, payroll reports, information returns, and business registrations or statements. Taxima can help identify the applicable federal, California, and local requirements for your business. Filing requirements and deadlines can vary, so we recommend reviewing your specific situation.",
  },
  {
    q: "Can you help after my business is formed?",
    a: "Yes. Taxima can continue to support your business after formation with bookkeeping, payroll, tax preparation, tax planning, and ongoing compliance support. Our goal is to be a year-round accounting and tax resource—not just someone you contact when your tax return is due.",
  },
  {
    q: "Can I switch business entities later?",
    a: "Yes, in some circumstances a business can change its legal structure or tax classification as it grows. Changing entities can have legal, tax, payroll, and compliance consequences, so it should be carefully evaluated. Taxima can help you understand the tax and accounting implications and coordinate necessary tax filings. When legal or corporate-structure advice is required, we recommend working with a qualified attorney.",
  },
] as const;

export const industriesWeServe = [
  {
    title: "Real Estate Investors",
    slug: "real-estate-investors",
    image: "/images/industry-real-estate.jpg",
    text: "Real estate investors often face unique tax and accounting considerations involving rental income, operating expenses, depreciation, entity structures, and multiple properties. Taxima can help with tax preparation, bookkeeping, financial organization, and year-round tax planning to help you stay organized and better understand your real estate investments.",
  },
  {
    title: "Realtors & Real Estate Professionals",
    slug: "realtors",
    image: "/images/industry-realtors.jpg",
    text: "Realtors and real estate professionals often operate as independent contractors or business owners with variable income and ongoing business expenses. Taxima can help with tax preparation, estimated taxes, bookkeeping, business expenses, entity tax returns, and year-round tax planning.",
  },
  {
    title: "Nonprofit Organizations",
    slug: "nonprofits",
    image: "/images/industry-nonprofit.jpg",
    text: "Nonprofit organizations have unique accounting, reporting, and compliance responsibilities. Maintaining organized financial records and meeting required filing obligations is essential to supporting your organization's mission. Taxima provides bookkeeping, payroll, tax preparation, and compliance support tailored to nonprofit needs.",
  },
  {
    title: "Insurance Agents",
    slug: "insurance-agents",
    image: "/images/industry-insurance.jpg",
    text: "Many insurance professionals work as independent contractors or business owners and may have variable commission income and business-related expenses. Taxima can help with tax preparation, estimated tax planning, bookkeeping, business expense tracking, and ongoing financial support.",
  },
  {
    title: "Doctors & Dentists",
    slug: "doctors-dentists",
    image: "/images/industry-healthcare.jpg",
    text: "Medical and dental professionals may face complex tax and business considerations, particularly when operating a practice or earning income from multiple sources. Taxima provides tax preparation, bookkeeping, payroll, business tax services, and year-round tax planning designed around growing professional practices.",
  },
  {
    title: "Startups & New Businesses",
    slug: "startups",
    image: "/images/industry-startups.jpg",
    text: "Starting a business involves important financial and tax decisions from the beginning. Establishing organized records and understanding your tax and compliance responsibilities can help create a stronger foundation for future growth. Taxima can assist with business formation support, bookkeeping setup, tax planning, payroll, compliance, and ongoing accounting.",
  },
  {
    title: "Law Firms & Attorneys",
    slug: "law-firms",
    image: "/images/industry-legal.jpg",
    text: "Law firms and legal professionals often have specific accounting, payroll, and business tax needs as their practices grow. Taxima provides bookkeeping, payroll, tax preparation, business tax services, and year-round financial support to help legal professionals stay organized and focused on their practice.",
  },
  {
    title: "Contractors & Construction Businesses",
    slug: "contractors",
    image: "/images/industry-construction.jpg",
    text: "Contractors and construction businesses often manage multiple projects, variable income, subcontractor payments, payroll, and significant business expenses. Taxima can provide bookkeeping, payroll support, business tax preparation, estimated tax planning, and ongoing accounting services throughout the year.",
  },
] as const;

export const lifeInsuranceReasons = [
  "Income replacement",
  "Family financial protection",
  "Mortgage and debt protection",
  "Business continuity",
  "Estate and legacy planning",
  "Long-term financial planning",
] as const;

export const lifeInsuranceConsiderations = [
  "Your financial goals",
  "Your need for life insurance",
  "Your current and future cash flow",
  "The amount of coverage you need",
  "Policy costs and charges",
  "Premium requirements",
  "Cash-value growth assumptions",
  "Your ability to maintain the policy over time",
] as const;

export const lifeInsuranceAudience = [
  {
    title: "Individuals & Families",
    text: "Coverage may help protect your family's financial security and provide resources for future needs.",
  },
  {
    title: "Business Owners",
    text: "Life insurance may also be used in certain business-planning situations, including business continuation and buy-sell arrangements, subject to applicable requirements.",
  },
] as const;

