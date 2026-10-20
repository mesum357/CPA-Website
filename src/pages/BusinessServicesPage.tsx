import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  businessComplianceItems,
  businessComplianceMatters,
  businessFaqs,
  businessFormationEntities,
  businessLifecycle,
  businessOngoingSupport,
  businessOverview,
  businessRegistrationItems,
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

function BusinessHero() {
  return (
    <section className="relative isolate min-h-[68dvh] overflow-hidden">
      <img
        src="/images/business-hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/78 to-ink/40" />

      <div className="container-page relative flex min-h-[68dvh] items-center py-20 md:py-28">
        <div className="reveal max-w-2xl text-white">
          <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-white/70">
            <ShieldCheckIcon className="size-3.5" />
            Business Formation &amp; Compliance
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,5.2vw,4.1rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-balance">
            Start and Maintain Your Business with Confidence
          </h1>
          <p className="mt-5 max-w-lg text-[1.1rem] leading-relaxed text-white/80">
            Whether you&apos;re starting a new business or managing an established company, Taxima
            helps you choose the right entity, meet filing requirements, and stay compliant year-round.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton
              href="#contact"
              className="!bg-cta-blue !shadow-[0_12px_30px_rgba(74,128,192,0.4)]"
            >
              Schedule a Free Consultation
            </PrimaryButton>
            <AppLink
              href="#formation"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-[0.92rem] font-semibold text-white backdrop-blur-sm transition-all duration-500 ease-[var(--ease-out-soft)] hover:bg-white/20"
            >
              Request a Business Consultation
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function Lifecycle() {
  return (
    <section className="relative z-10 -mt-10 pb-16 md:-mt-12 md:pb-20">
      <div className="container-page grid gap-4 md:grid-cols-3">
        {businessLifecycle.map((item) => (
          <article
            key={item.title}
            className="reveal rounded-[1.5rem] bg-white p-7 shadow-[var(--shadow-soft)] ring-1 ring-black/[0.04]"
          >
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand/55">
              {item.step}
            </p>
            <h2 className="mt-3 font-display text-[1.55rem] font-semibold text-ink">{item.title}</h2>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function OverviewStrip() {
  return (
    <section className="pb-16 md:pb-20">
      <div className="container-page">
        <div className="reveal grid gap-5 rounded-[1.75rem] bg-navy p-7 text-white md:grid-cols-3 md:p-9">
          {businessOverview.map((column) => (
            <div key={column.heading}>
              <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-white/65">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-2.5 text-[0.95rem] text-white/85">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Formation() {
  return (
    <section id="formation" className="pb-20 md:pb-28">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="reveal overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-soft)]">
          <img
            src="/images/business-team.jpg"
            alt=""
            className="aspect-[5/4] w-full object-cover"
          />
        </div>
        <div className="reveal">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            Business Formation Services
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,3vw,2.6rem)] font-semibold tracking-[-0.02em] text-ink">
            Help entrepreneurs get started
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
            We assist with entity selection, tax implications, and filing guidance. Legal advice is
            left to an attorney when appropriate.
          </p>

          <h3 className="mt-8 text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-brand/60">
            Business Entity Guidance
          </h3>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {businessFormationEntities.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-white px-4 py-2 text-[0.88rem] font-medium text-ink"
              >
                {item}
              </span>
            ))}
          </div>

          <h3 className="mt-8 text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-brand/60">
            Business Registration Assistance
          </h3>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {businessRegistrationItems.map((item) => (
              <li key={item} className="flex gap-2 text-[0.92rem] text-ink/85">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Compliance() {
  return (
    <section id="compliance" className="bg-white py-20 md:py-28">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="reveal lg:order-2 overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-soft)]">
          <img
            src="/images/industry-startups.jpg"
            alt=""
            className="aspect-[5/4] w-full object-cover"
          />
        </div>
        <div className="reveal lg:order-1">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            Business Compliance Services
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,3vw,2.6rem)] font-semibold tracking-[-0.02em] text-ink">
            Stay compliant after you launch
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
            Recurring compliance support helps keep your business in good standing—so you can focus
            on growth, not missed filings.
          </p>
          <ul className="mt-6 space-y-3">
            {businessComplianceItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-[1.15rem] bg-cream px-4 py-3.5 text-[0.95rem] font-medium text-ink"
              >
                <CheckIcon className="size-4 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function OngoingSupport() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            Ongoing Business Support
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            We help beyond startup—with the services that keep your business organized year-round.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businessOngoingSupport.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="reveal group flex items-center justify-between rounded-[1.35rem] bg-white px-5 py-5 shadow-[var(--shadow-card)] ring-1 ring-black/[0.03] transition-transform duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-0.5"
            >
              <span className="text-[1rem] font-semibold text-ink">{item.title}</span>
              <span className="text-brand transition-transform duration-500 group-hover:translate-x-1">
                <ArrowRightIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCompliance() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-20">
      <img src="/images/cta-banner.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-navy/88" />
      <div className="container-page relative">
        <h2 className="reveal text-center font-display text-[clamp(1.9rem,3vw,2.6rem)] font-semibold text-white">
          Why Proper Compliance Matters
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businessComplianceMatters.map((item) => (
            <div
              key={item}
              className="reveal flex items-center gap-3 rounded-[1.25rem] bg-white/10 px-5 py-4 text-white ring-1 ring-white/15 backdrop-blur-sm"
            >
              <CheckIcon className="size-4 shrink-0 text-cta-blue" />
              <p className="text-[0.95rem] font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 md:pb-28">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="reveal">
          <h2 className="font-display text-[clamp(2rem,3.4vw,2.7rem)] font-semibold tracking-[-0.02em] text-ink">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[1.02rem] text-muted">
            LLC vs S Corp, elections, annual filings, and support after formation—answered clearly.
          </p>
        </div>

        <div className="reveal divide-y divide-line border-y border-line">
          {businessFaqs.map((item, index) => {
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

export default function BusinessServicesPage() {
  const rootRef = usePageReveal();

  useEffect(() => {
    document.title = "Business Formation & Compliance | Taxima CPA";
  }, []);

  return (
    <div ref={rootRef}>
      <BusinessHero />
      <Lifecycle />
      <OverviewStrip />
      <Formation />
      <Compliance />
      <OngoingSupport />
      <WhyCompliance />
      <FAQ />
      <FinalCTA
        title="Ready to Start or Grow Your Business?"
        subtitle="Taxima can help you navigate business formation, compliance, bookkeeping, payroll, and tax obligations with confidence."
        primaryLabel="Schedule a Consultation"
        secondaryLabel="Contact Us"
      />
    </div>
  );
}
