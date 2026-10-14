export type ResourceSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "callout"; text: string };

export type ResourceArticle = {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  ctaHref: string;
  ctaLabel: string;
  relatedService?: string;
  sections: readonly ResourceSection[];
};

export type TaxDeadline = {
  date: string;
  title: string;
  detail: string;
  audience: string;
};

export const taxDeadlines: readonly TaxDeadline[] = [
  {
    date: "January 15",
    title: "Q4 Estimated Tax Payment",
    detail: "Fourth-quarter federal estimated tax payment for individuals (if required).",
    audience: "Individuals & self-employed",
  },
  {
    date: "January 31",
    title: "W-2 & 1099 Deadline",
    detail: "Employers and payers generally must furnish Forms W-2 and many 1099s to recipients.",
    audience: "Employers & business owners",
  },
  {
    date: "March 15",
    title: "S Corporation & Partnership Returns",
    detail: "Typical due date for Forms 1120-S and 1065 (extensions may apply).",
    audience: "S Corps & partnerships",
  },
  {
    date: "April 15",
    title: "Individual & C Corporation Returns",
    detail: "Federal individual income tax returns, many C corporation returns, and Q1 estimated taxes.",
    audience: "Individuals & C Corps",
  },
  {
    date: "April 15",
    title: "California Individual Returns",
    detail: "California Franchise Tax Board individual income tax return due date (in most years).",
    audience: "California residents",
  },
  {
    date: "June 15",
    title: "Q2 Estimated Tax Payment",
    detail: "Second-quarter federal estimated tax payment for individuals (if required).",
    audience: "Individuals & self-employed",
  },
  {
    date: "September 15",
    title: "Q3 Estimated Tax Payment",
    detail: "Third-quarter federal estimated tax payment for individuals (if required).",
    audience: "Individuals & self-employed",
  },
  {
    date: "September 15",
    title: "Extended Business Return Deadline",
    detail: "Common extended due date for S corporation and partnership returns.",
    audience: "S Corps & partnerships",
  },
  {
    date: "October 15",
    title: "Extended Individual Return Deadline",
    detail: "Typical extended due date for individual federal income tax returns.",
    audience: "Individuals",
  },
  {
    date: "Year-round",
    title: "Payroll Tax Deposits & Filings",
    detail: "Payroll tax deposits and quarterly filings follow your deposit schedule and due dates.",
    audience: "Employers",
  },
] as const;

export const resourceArticles: readonly ResourceArticle[] = [
  {
    slug: "prior-year-tax-returns",
    category: "Tax Compliance",
    title: "Haven't Filed Your Taxes? What You Should Know",
    description:
      "Missed a filing deadline? Learn what happens next, how to catch up on prior-year returns, and how to get back into compliance with less stress.",
    image: "/images/tax-prep.jpg",
    readTime: "6 min read",
    ctaHref: "/tax-services#additional-services",
    ctaLabel: "Get Help With Prior-Year Returns",
    relatedService: "Tax Services",
    sections: [
      {
        type: "paragraph",
        text: "If you haven't filed a tax return—or several—you're not alone. Life gets busy, records get incomplete, and filing can feel overwhelming. The good news: in most cases, catching up is possible, and taking action now is almost always better than waiting.",
      },
      {
        type: "heading",
        text: "What happens if you don't file?",
      },
      {
        type: "paragraph",
        text: "Failing to file can lead to IRS or California Franchise Tax Board notices, failure-to-file penalties, interest on unpaid tax, and added stress over time. If you are owed a refund, waiting too long can also mean losing the ability to claim it.",
      },
      {
        type: "list",
        items: [
          "Failure-to-file penalties can grow the longer a return remains unfiled",
          "Interest may accrue on unpaid tax balances",
          "Notices and collection activity can escalate if ignored",
          "Refund claims are generally subject to time limits",
        ],
      },
      {
        type: "heading",
        text: "Prior-year returns are often recoverable",
      },
      {
        type: "paragraph",
        text: "Many clients assume unfiled years are too complicated to fix. In practice, a CPA can help reconstruct records, identify missing documents, prepare prior-year returns in the right order, and create a clear plan for any balances due.",
      },
      {
        type: "heading",
        text: "What you should do next",
      },
      {
        type: "list",
        items: [
          "Gather W-2s, 1099s, bank statements, and prior correspondence if available",
          "Do not ignore IRS or FTB notices—response timing matters",
          "Avoid filing incomplete returns just to \"get something in\"",
          "Schedule a consultation so a CPA can map a catch-up plan",
        ],
      },
      {
        type: "callout",
        text: "Taxima helps individuals and business owners catch up on prior-year and unfiled returns with clear pricing and a practical path back to compliance.",
      },
    ],
  },
  {
    slug: "tax-planning-basics",
    category: "Tax Planning",
    title: "Why Tax Planning Should Happen Before Tax Season",
    description:
      "Tax planning is most effective before year-end—not in April. Learn how proactive planning can reduce surprises and support better decisions.",
    image: "/images/tax-planning.jpg",
    readTime: "5 min read",
    ctaHref: "/tax-services#tax-planning",
    ctaLabel: "Explore Tax Planning",
    relatedService: "Tax Planning",
    sections: [
      {
        type: "paragraph",
        text: "Many people treat tax season as the moment to think about taxes. By then, most opportunities have already passed. Tax planning works best when it happens throughout the year—especially before December 31.",
      },
      {
        type: "heading",
        text: "Filing is looking backward. Planning looks forward.",
      },
      {
        type: "paragraph",
        text: "Preparing a return reports what already happened. Planning helps you shape what happens next: estimated payments, retirement contributions, entity choices, timing of income and expenses, and year-end decisions that can materially change your tax picture.",
      },
      {
        type: "heading",
        text: "What early planning can help with",
      },
      {
        type: "list",
        items: [
          "Avoiding underpayment surprises with better estimated tax timing",
          "Evaluating whether your business structure still fits",
          "Coordinating bookkeeping, payroll, and tax strategy",
          "Making year-end moves while options are still open",
          "Entering tax season with organized records and clearer expectations",
        ],
      },
      {
        type: "heading",
        text: "A simple rhythm that works",
      },
      {
        type: "paragraph",
        text: "For many individuals and small businesses, a practical approach is quarterly check-ins plus a focused year-end planning conversation. That cadence keeps cash flow, estimates, and compliance aligned—so April feels like a review, not a scramble.",
      },
      {
        type: "callout",
        text: "At Taxima, tax planning is part of year-round CPA support—not a one-time April conversation.",
      },
    ],
  },
  {
    slug: "llc-vs-s-corporation",
    category: "Business Structure",
    title: "LLC vs. S Corporation: Which Structure Is Right for Your Business?",
    description:
      "An LLC and an S Corporation aren't always alternatives. Learn how legal structure and tax elections differ—and what to consider before choosing.",
    image: "/images/industry-startups.jpg",
    readTime: "8 min read",
    ctaHref: "/business-services",
    ctaLabel: "Talk About Business Formation",
    relatedService: "Business Services",
    sections: [
      {
        type: "paragraph",
        text: "\"Should I form an LLC or an S Corporation?\" is one of the most common questions new business owners ask. The answer depends on more than a simple preference—and the two options are not always mutually exclusive.",
      },
      {
        type: "heading",
        text: "First: they answer different questions",
      },
      {
        type: "paragraph",
        text: "An LLC is a legal entity formed under state law. An S Corporation is a federal tax election. In many cases, a business forms an LLC first, then later elects S Corporation taxation if that election makes sense for the facts and circumstances.",
      },
      {
        type: "heading",
        text: "Key factors to compare",
      },
      {
        type: "list",
        items: [
          "Expected profit and how owners are compensated",
          "Need for liability protection and ownership flexibility",
          "Payroll requirements and reasonable compensation rules for S Corps",
          "Administrative cost and ongoing compliance burden",
          "Long-term growth plans and potential investors",
        ],
      },
      {
        type: "heading",
        text: "When an S Corporation election may be considered",
      },
      {
        type: "paragraph",
        text: "An S Corporation election is sometimes considered when a profitable business owner is paying self-employment tax on all net earnings and may benefit from a salary-plus-distribution structure. That said, an election does not automatically reduce taxes, and it adds payroll and compliance responsibilities.",
      },
      {
        type: "heading",
        text: "What not to do",
      },
      {
        type: "list",
        items: [
          "Don't elect S Corporation status solely because of a social media tip",
          "Don't set salary based only on a desired tax result",
          "Don't ignore California-specific filing and franchise tax considerations",
          "Don't treat entity choice as permanent without periodic review",
        ],
      },
      {
        type: "callout",
        text: "Taxima can help you understand the tax and accounting implications of LLC and S Corporation options. When legal advice is needed, we recommend consulting a qualified attorney.",
      },
    ],
  },
  {
    slug: "new-business-checklist",
    category: "New Business",
    title: "Starting a Business? Important Steps Every Business Owner Should Take",
    description:
      "A practical checklist for new California business owners—from entity selection and EINs to bookkeeping, payroll, and first-year compliance.",
    image: "/images/business-team.jpg",
    readTime: "7 min read",
    ctaHref: "/business-services",
    ctaLabel: "Get Formation & Compliance Help",
    relatedService: "Business Formation",
    sections: [
      {
        type: "paragraph",
        text: "Starting a business is exciting—and easy to underestimate. The owners who build a clean foundation early usually spend less time fixing compliance issues later. Use this checklist as a practical starting point.",
      },
      {
        type: "heading",
        text: "1. Clarify your business model and ownership",
      },
      {
        type: "paragraph",
        text: "Before filing paperwork, define what the business does, who owns it, how decisions will be made, and how money will flow. Those basics influence entity choice, banking, bookkeeping, and tax elections.",
      },
      {
        type: "heading",
        text: "2. Choose and form the right entity",
      },
      {
        type: "list",
        items: [
          "Discuss whether a sole proprietorship, LLC, partnership, or corporation fits your goals",
          "Complete state formation or registration steps as needed",
          "Understand California compliance expectations from day one",
        ],
      },
      {
        type: "heading",
        text: "3. Get your tax IDs and accounts in order",
      },
      {
        type: "list",
        items: [
          "Apply for an EIN when appropriate",
          "Open a dedicated business bank account",
          "Separate personal and business spending immediately",
          "Set up bookkeeping software (QuickBooks Online is a common choice)",
        ],
      },
      {
        type: "heading",
        text: "4. Plan for payroll, sales tax, and estimated taxes",
      },
      {
        type: "paragraph",
        text: "If you will have employees—or if an S Corporation salary will be required—set up payroll before the first paycheck. Confirm whether sales tax applies to your activities, and calendar estimated tax payments so cash flow stays predictable.",
      },
      {
        type: "heading",
        text: "5. Build a simple compliance calendar",
      },
      {
        type: "list",
        items: [
          "Income tax return due dates",
          "Estimated tax payment dates",
          "Payroll filing schedule",
          "California Statement of Information (when applicable)",
          "License and permit renewals",
        ],
      },
      {
        type: "callout",
        text: "Taxima helps new business owners with entity guidance, EIN support, bookkeeping setup, payroll, and ongoing compliance—so you can focus on building the business.",
      },
    ],
  },
] as const;

export const resourceHubCards = [
  {
    slug: "tax-deadlines-calendar",
    category: "Reference",
    title: "Tax Deadlines Calendar",
    description:
      "Key federal and California tax dates for individuals, business owners, and employers—organized in one place.",
    image: "/images/bookkeeping-hero.jpg",
    href: "/resources/tax-deadlines-calendar",
    badge: "Calendar",
  },
  ...resourceArticles.map((article) => ({
    slug: article.slug,
    category: article.category,
    title: article.title,
    description: article.description,
    image: article.image,
    href: `/resources/${article.slug}`,
    badge: article.readTime,
  })),
] as const;

export function getResourceArticle(slug: string) {
  return resourceArticles.find((article) => article.slug === slug);
}
