import { useEffect, useState } from "react";
import {
  taxFaqs,
  taxGettingStarted,
  taxProcess,
  taxWhyChoose,
} from "../data";
import {
  ArrowRightIcon,
  CheckIcon,
  MinusIcon,
  PlusIcon,
  ShieldCheckIcon,
} from "../components/Icons";
import { AppLink, FinalCTA, PrimaryButton } from "../components/Layout";
import { usePageReveal } from "../hooks/usePageReveal";

const serviceCards = [
  {
    title: "Individual Taxation",
    text: "Personal returns, self-employment, rentals, investments, credits, prior-year and amended filings—explained clearly.",
    image: "/images/tax-individual.jpg",
    href: "#individual",
  },
  {
    title: "Business Taxation",
    text: "LLC, S Corp, partnership, C Corp, and nonprofit returns with the right federal and California filings for your entity.",
    image: "/images/tax-business.jpg",
    href: "#business",
  },
  {
    title: "Tax Planning",
    text: "Quarterly estimates, year-end planning, entity review, and projections—so you plan ahead, not just file later.",
    image: "/images/tax-planning.jpg",
    href: "#tax-planning",
  },
  {
    title: "Tax Resolution",
    text: "IRS and California notices, catch-up filings, installment agreements, and penalty abatement support.",
    image: "/images/tax-resolution.jpg",
    href: "#additional-services",
  },
] as const;

const individualHighlights = [
  "Individual tax preparation",
  "Self-employed & Schedule C",
  "Rental & investment income",
  "Prior-year & amended returns",
  "Estimated tax payments",
  "Tax credits & projections",
] as const;

const businessHighlights = [
  "Sole proprietors & LLCs",
  "S Corporations",
  "Partnerships",
  "C Corporations",
  "Nonprofit returns",
  "Business tax planning",
] as const;

const planningHighlights = [
  "Quarterly estimated taxes",
  "Year-end tax planning",
  "Entity structure review",
  "Retirement contribution planning",
  "Tax projections",
  "Business tax strategies",
] as const;

const resolutionHighlights = [
  "IRS notices",
  "California tax notices",
  "Prior-year unfiled returns",
  "Amended returns",
  "Payment plan assistance",
  "Penalty abatement support",
] as const;

function TaxHero() {
  return (
    <section className="relative isolate min-h-[68dvh] overflow-hidden">
      <img
        src="/images/tax-planning.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/78 to-ink/40" />

      <div className="container-page relative flex min-h-[68dvh] items-center py-20 md:py-28">
        <div className="reveal max-w-2xl text-white">
          <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-white/70">
            <ShieldCheckIcon className="size-3.5" />
            Tax Services
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,5.2vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-balance">
            Professional Tax Preparation &amp; Planning
          </h1>
          <p className="mt-5 max-w-lg text-[1.1rem] leading-relaxed text-white/80">
            Accurate preparation and proactive planning for individuals, self-employed professionals,
            and business owners—year-round, not just tax season.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton
              href="#contact"
              className="!bg-cta-blue !shadow-[0_12px_30px_rgba(74,128,192,0.4)]"
            >
              Schedule a Free Consultation
            </PrimaryButton>
            <AppLink
              href="#services-grid"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-[0.92rem] font-semibold text-white backdrop-blur-sm transition-all duration-500 ease-[var(--ease-out-soft)] hover:bg-white/20"
            >
              Request a Quote
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section id="services-grid" className="py-20 md:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            Services We Provide
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            Liberate your potential—let us handle the numbers
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            Focus on your life and business. We handle preparation, planning, and compliance with
            CPA-led care.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {serviceCards.map((card) => (
            <article
              key={card.title}
              className="reveal group overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-card)] ring-1 ring-black/[0.03]"
            >
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-105"
                />
              </div>
              <div className="p-7 md:p-8">
                <h3 className="font-display text-[1.65rem] font-semibold text-ink">{card.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">{card.text}</p>
                <AppLink
                  href={card.href}
                  className="mt-5 inline-flex items-center gap-2 text-[0.92rem] font-semibold text-brand transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-1"
                >
                  Learn More <ArrowRightIcon />
                </AppLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailBlock({
  id,
  eyebrow,
  title,
  text,
  items,
  image,
  reverse = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  items: readonly string[];
  image: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="pb-16 md:pb-24">
      <div
        className={`container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="reveal overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-soft)]">
          <img src={image} alt="" className="aspect-[5/4] w-full object-cover" />
        </div>
        <div className="reveal">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,3vw,2.5rem)] font-semibold tracking-[-0.02em] text-ink">
            {title}
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">{text}</p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[0.92rem] text-ink/85">
                <span className="text-brand">
                  <CheckIcon className="size-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function MidBanner() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-20">
      <img src="/images/cta-banner.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-navy/88" />
      <div className="container-page relative flex flex-col items-center gap-6 text-center text-white md:flex-row md:justify-between md:text-left">
        <div className="reveal max-w-xl">
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-semibold tracking-[-0.02em]">
            Taxima takes the tax worry away
          </h2>
          <p className="mt-2 text-[1rem] text-white/75">
            Year-round guidance from a California-licensed CPA—not a seasonal filing factory.
          </p>
        </div>
        <div className="reveal">
          <PrimaryButton
            href="#contact"
            className="!bg-cta-blue !shadow-[0_12px_30px_rgba(74,128,192,0.35)]"
          >
            Contact Us
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            Why Choose Taxima?
          </h2>
          <p className="mt-3 text-[1.02rem] text-muted">
            Benefits focused on how we support you throughout the year.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {taxWhyChoose.map((item) => (
            <div
              key={item}
              className="reveal flex items-center gap-3 rounded-[1.25rem] bg-white px-5 py-5 shadow-[var(--shadow-card)] ring-1 ring-black/[0.03]"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand/5 text-brand">
                <CheckIcon className="size-4" />
              </span>
              <p className="text-[0.98rem] font-medium text-ink">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessAndStart() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="reveal font-display text-[clamp(1.9rem,3vw,2.5rem)] font-semibold tracking-[-0.02em] text-ink">
            Our Tax Preparation Process
          </h2>
          <ol className="reveal mt-8 space-y-5">
            {taxProcess.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-brand/55">
                    Step {index + 1}
                  </p>
                  <p className="mt-1 text-[1rem] text-ink/85">{step}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="reveal font-display text-[clamp(1.9rem,3vw,2.5rem)] font-semibold tracking-[-0.02em] text-ink">
            How Do I Get Started?
          </h2>
          <div className="reveal mt-8 grid gap-3 sm:grid-cols-2">
            {taxGettingStarted.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.35rem] border border-line bg-cream p-5"
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand/55">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-[1.02rem] font-semibold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-[0.88rem] leading-relaxed text-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TaxFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 md:pb-28">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="reveal">
          <h2 className="font-display text-[clamp(2rem,3.4vw,2.7rem)] font-semibold tracking-[-0.02em] text-ink">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[1.02rem] text-muted">
            Quick answers about pricing, documents, catch-up filings, and remote service.
          </p>
        </div>

        <div className="reveal divide-y divide-line border-y border-line">
          {taxFaqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-300 hover:text-brand"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span className="text-[1.02rem] font-semibold text-ink">{item.q}</span>
                  <span className="text-brand">{open ? <MinusIcon /> : <PlusIcon />}</span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-[var(--ease-out-soft)] ${
                    open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-[0.98rem] leading-relaxed text-muted">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function TaxServicesPage() {
  const rootRef = usePageReveal();

  useEffect(() => {
    document.title = "Tax Preparation & Planning | Taxima CPA";
  }, []);

  return (
    <div ref={rootRef}>
      <TaxHero />
      <ServicesGrid />
      <DetailBlock
        id="individual"
        eyebrow="Individuals & families"
        title="Individual Tax Services"
        text="From W-2 income to self-employment and investments—we prepare returns with clear explanations and year-round support."
        items={individualHighlights}
        image="/images/tax-individual.jpg"
      />
      <DetailBlock
        id="business"
        eyebrow="Businesses & organizations"
        title="Business Tax Services"
        text="We prepare the appropriate federal and California returns based on your entity type—in plain language first."
        items={businessHighlights}
        image="/images/tax-business.jpg"
        reverse
      />
      <MidBanner />
      <DetailBlock
        id="tax-planning"
        eyebrow="Plan ahead"
        title="Tax Planning"
        text="Planning goes beyond filing. We help you act during the year so tax season is calmer and more strategic."
        items={planningHighlights}
        image="/images/tax-planning.jpg"
      />
      <DetailBlock
        id="additional-services"
        eyebrow="Notices & catch-up"
        title="Additional Tax Services"
        text="Need help with a notice, unfiled years, or a payment plan? These services address specific tax issues fast."
        items={resolutionHighlights}
        image="/images/tax-resolution.jpg"
        reverse
      />
      <WhyChoose />
      <ProcessAndStart />
      <TaxFAQ />
      <FinalCTA
        title="Ready to File with Confidence?"
        subtitle="Individual returns, business tax preparation, or year-round planning—Taxima is here to help."
        primaryLabel="Schedule a Free Consultation"
        secondaryLabel="Contact Us"
      />
    </div>
  );
}
