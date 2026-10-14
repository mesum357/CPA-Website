import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  payrollFaqs,
  payrollOutsourceBenefits,
  payrollOverview,
  payrollServiceGroups,
  payrollWhoWeServe,
} from "../data";
import {
  ArrowRightIcon,
  CheckIcon,
  MinusIcon,
  PlusIcon,
  ShieldCheckIcon,
} from "../components/Icons";
import { FinalCTA, PrimaryButton } from "../components/Layout";
import { usePageReveal } from "../hooks/usePageReveal";

function PayrollHero() {
  return (
    <section className="relative isolate min-h-[68dvh] overflow-hidden">
      <img
        src="/images/payroll-hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/78 to-ink/40" />

      <div className="container-page relative flex min-h-[68dvh] items-center py-20 md:py-28">
        <div className="reveal max-w-2xl text-white">
          <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-white/70">
            <ShieldCheckIcon className="size-3.5" />
            Payroll Services
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,5.2vw,4.1rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-balance">
            Reliable Payroll Services for Small Businesses
          </h1>
          <p className="mt-5 max-w-lg text-[1.1rem] leading-relaxed text-white/80">
            Managing payroll can be time-consuming and complex. Taxima helps you pay employees on
            time, stay compliant with federal and California requirements, and focus on running your
            business.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton
              href="#contact"
              className="!bg-cta-blue !shadow-[0_12px_30px_rgba(74,128,192,0.4)]"
            >
              Schedule a Free Consultation
            </PrimaryButton>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-[0.92rem] font-semibold text-white backdrop-blur-sm transition-all duration-500 ease-[var(--ease-out-soft)] hover:bg-white/20"
            >
              Request a Payroll Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Differentiator() {
  return (
    <section className="relative z-10 -mt-10 pb-12 md:-mt-12 md:pb-16">
      <div className="container-page">
        <div className="reveal rounded-[1.75rem] bg-white p-7 shadow-[var(--shadow-soft)] ring-1 ring-black/[0.04] md:p-9 md:text-center">
          <p className="font-display text-[clamp(1.35rem,2.5vw,1.85rem)] font-semibold leading-snug tracking-[-0.02em] text-ink md:mx-auto md:max-w-3xl">
            We integrate your payroll with your bookkeeping and tax planning so your financial
            records stay accurate year-round.
          </p>
          <p className="mt-3 text-[0.95rem] text-muted md:mx-auto md:max-w-2xl">
            You don&apos;t have to coordinate between a payroll company, a bookkeeper, and a tax
            preparer—Taxima can help with all of it.
          </p>
        </div>
      </div>
    </section>
  );
}

function OverviewStrip() {
  return (
    <section className="pb-16 md:pb-20">
      <div className="container-page">
        <div className="reveal grid gap-5 rounded-[1.75rem] bg-navy p-7 text-white md:grid-cols-3 md:p-9">
          {payrollOverview.map((column) => (
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

function ServicesGrid() {
  return (
    <section id="services" className="pb-20 md:pb-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            Payroll Services We Offer
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            Accurate processing, employee management, and California payroll compliance—supported by
            modern cloud-based payroll tools.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {payrollServiceGroups.map((group) => (
            <article
              key={group.title}
              className="reveal group overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-card)] ring-1 ring-black/[0.03]"
            >
              <div className="overflow-hidden">
                <img
                  src={group.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-display text-[1.5rem] font-semibold text-ink">{group.title}</h3>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2 text-[0.9rem] text-muted">
                      <span className="mt-0.5 text-brand">
                        <CheckIcon className="size-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyOutsource() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            Why Outsource Payroll?
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {payrollOutsourceBenefits.map((item) => (
            <div
              key={item}
              className="reveal flex items-start gap-3 rounded-[1.35rem] bg-cream px-5 py-5 ring-1 ring-black/[0.03]"
            >
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-brand/5 text-brand">
                <CheckIcon className="size-4" />
              </span>
              <p className="text-[0.98rem] font-medium leading-snug text-ink">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CrossSell() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-20">
      <img src="/images/cta-banner.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-navy/88" />
      <div className="container-page relative grid items-center gap-8 text-white lg:grid-cols-[1.2fr_auto]">
        <div className="reveal max-w-2xl">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-white/60">
            Payroll &amp; Bookkeeping Together
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-semibold tracking-[-0.02em]">
            Better records. Smoother tax prep. One point of contact.
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-white/75">
            Businesses that combine payroll and bookkeeping benefit from more accurate financial
            records, smoother tax preparation, and a single trusted CPA firm for accounting questions.
          </p>
        </div>
        <div className="reveal">
          <Link
            to="/bookkeeping"
            className="inline-flex items-center gap-2 rounded-full bg-cta-blue px-6 py-3.5 text-[0.92rem] font-semibold text-white shadow-[0_12px_30px_rgba(74,128,192,0.35)] transition-all duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:brightness-110"
          >
            Explore Bookkeeping <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhoWeServe() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page text-center">
        <h2 className="reveal font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
          Who We Serve
        </h2>
        <div className="reveal mt-8 flex flex-wrap justify-center gap-3">
          {payrollWhoWeServe.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-white px-5 py-2.5 text-[0.9rem] font-medium text-ink shadow-[0_4px_16px_rgba(10,28,43,0.04)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="pb-20 md:pb-28">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="reveal">
          <h2 className="font-display text-[clamp(2rem,3.4vw,2.7rem)] font-semibold tracking-[-0.02em] text-ink">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[1.02rem] text-muted">
            Common questions about providers, pay schedules, year-end forms, and S Corporation payroll.
          </p>
        </div>

        <div className="reveal divide-y divide-line border-y border-line">
          {payrollFaqs.map((item, index) => {
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

export default function PayrollPage() {
  const rootRef = usePageReveal();

  useEffect(() => {
    document.title = "Payroll Services for Small Businesses | Taxima CPA";
  }, []);

  return (
    <div ref={rootRef}>
      <PayrollHero />
      <Differentiator />
      <OverviewStrip />
      <ServicesGrid />
      <WhyOutsource />
      <CrossSell />
      <WhoWeServe />
      <FAQ />
      <FinalCTA
        title="Let Taxima Simplify Your Payroll"
        subtitle="Spend less time on payroll administration and more time growing your business."
        primaryLabel="Schedule a Consultation"
        secondaryLabel="Request a Payroll Quote"
      />
    </div>
  );
}
