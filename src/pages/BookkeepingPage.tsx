import { useEffect, useState } from "react";
import {
  bookkeepingAddOns,
  bookkeepingFaqs,
  bookkeepingIndustries,
  bookkeepingMenuOverview,
  bookkeepingPackages,
  bookkeepingProcess,
  bookkeepingServiceGroups,
  bookkeepingWhyChoose,
  bookkeepingWhyMatters,
} from "../data";
import {
  CheckIcon,
  MinusIcon,
  PlusIcon,
  ShieldCheckIcon,
} from "../components/Icons";
import { FinalCTA, PrimaryButton } from "../components/Layout";
import { usePageReveal } from "../hooks/usePageReveal";

function BookkeepingHero() {
  return (
    <section className="relative isolate min-h-[68dvh] overflow-hidden">
      <img
        src="/images/bookkeeping-hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/78 to-ink/40" />

      <div className="container-page relative flex min-h-[68dvh] items-center py-20 md:py-28">
        <div className="reveal max-w-2xl text-white">
          <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-white/70">
            <ShieldCheckIcon className="size-3.5" />
            Bookkeeping &amp; Accounting
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,5.2vw,4.1rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-balance">
            Professional Bookkeeping &amp; Accounting Services
          </h1>
          <p className="mt-5 max-w-lg text-[1.1rem] leading-relaxed text-white/80">
            Accurate bookkeeping is the foundation of every successful business. Taxima helps you
            keep records organized, stay compliant, and make informed decisions with reliable monthly
            accounting.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton
              href="#contact"
              className="!bg-cta-blue !shadow-[0_12px_30px_rgba(74,128,192,0.4)]"
            >
              Schedule a Free Consultation
            </PrimaryButton>
            <a
              href="#packages"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-[0.92rem] font-semibold text-white backdrop-blur-sm transition-all duration-500 ease-[var(--ease-out-soft)] hover:bg-white/20"
            >
              Request a Bookkeeping Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyMatters() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            Why Bookkeeping Matters
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            More than tax prep—your year-round accounting partner
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bookkeepingWhyMatters.map((item) => (
            <div
              key={item}
              className="reveal flex items-start gap-3 rounded-[1.35rem] bg-white px-5 py-5 shadow-[var(--shadow-card)] ring-1 ring-black/[0.03]"
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

function OverviewStrip() {
  return (
    <section className="pb-16 md:pb-20">
      <div className="container-page">
        <div className="reveal grid gap-5 rounded-[1.75rem] bg-navy p-7 text-white md:grid-cols-3 md:p-9">
          {bookkeepingMenuOverview.map((column) => (
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
            Our Bookkeeping Services
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            Monthly accuracy, clean reporting, and QuickBooks support—built to keep you connected all
            year.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bookkeepingServiceGroups.map((group) => (
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
              <div className="p-6">
                <h3 className="font-display text-[1.4rem] font-semibold text-ink">{group.title}</h3>
                <ul className="mt-4 space-y-2">
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

function Packages() {
  return (
    <section id="packages" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            Bookkeeping Packages
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            Packages that grow with your business
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {bookkeepingPackages.map((pkg, index) => (
            <article
              key={pkg.name}
              className={`reveal rounded-[1.75rem] p-8 shadow-[var(--shadow-card)] ring-1 ring-black/[0.03] ${
                index === 1 ? "bg-brand text-white" : "bg-cream"
              }`}
            >
              <h3
                className={`font-display text-[1.8rem] font-semibold ${
                  index === 1 ? "text-white" : "text-ink"
                }`}
              >
                {pkg.name}
              </h3>
              <p
                className={`mt-3 text-[0.98rem] leading-relaxed ${
                  index === 1 ? "text-white/80" : "text-muted"
                }`}
              >
                {pkg.description}
              </p>
            </article>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <PrimaryButton href="/packages">View Packages &amp; Plans</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function AddOnsAndIndustries() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <h2 className="font-display text-[clamp(1.9rem,3vw,2.5rem)] font-semibold tracking-[-0.02em] text-ink">
            Add-On Services
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {bookkeepingAddOns.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-[1.1rem] bg-white px-4 py-3.5 text-[0.92rem] font-medium text-ink shadow-[var(--shadow-card)] ring-1 ring-black/[0.03]"
              >
                <CheckIcon className="size-4 shrink-0 text-brand" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="reveal">
          <h2 className="font-display text-[clamp(1.9rem,3vw,2.5rem)] font-semibold tracking-[-0.02em] text-ink">
            Industries We Serve
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {bookkeepingIndustries.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-white px-5 py-2.5 text-[0.9rem] font-medium text-ink shadow-[0_4px_16px_rgba(10,28,43,0.04)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-20">
      <img src="/images/cta-banner.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-navy/88" />
      <div className="container-page relative">
        <h2 className="reveal text-center font-display text-[clamp(1.9rem,3vw,2.6rem)] font-semibold text-white">
          Why Choose Taxima?
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bookkeepingWhyChoose.map((item) => (
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

function Process() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <h2 className="reveal font-display text-[clamp(2rem,3.4vw,2.7rem)] font-semibold tracking-[-0.02em] text-ink">
          Our Process
        </h2>
        <ol className="reveal relative mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-[1.15rem] hidden h-px md:block"
            style={{
              background: "linear-gradient(90deg, #d7d2c8 0%, #c4a574 45%, #7aa0a0 100%)",
            }}
            aria-hidden
          />
          {bookkeepingProcess.map((step, index) => (
            <li key={step} className="relative">
              <div className="flex size-9 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white shadow-[0_8px_20px_rgba(20,31,106,0.25)]">
                {index + 1}
              </div>
              <p className="mt-4 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand/60">
                Step {index + 1}
              </p>
              <p className="mt-2 max-w-[16rem] text-[0.98rem] leading-relaxed text-muted">{step}</p>
            </li>
          ))}
        </ol>
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
            Quick answers about software, transitions, updates, and catch-up work.
          </p>
        </div>

        <div className="reveal divide-y divide-line border-y border-line">
          {bookkeepingFaqs.map((item, index) => {
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

export default function BookkeepingPage() {
  const rootRef = usePageReveal();

  useEffect(() => {
    document.title = "Bookkeeping & Accounting Services | Taxima CPA";
  }, []);

  return (
    <div ref={rootRef}>
      <BookkeepingHero />
      <WhyMatters />
      <OverviewStrip />
      <ServicesGrid />
      <Packages />
      <AddOnsAndIndustries />
      <WhyChoose />
      <Process />
      <FAQ />
      <FinalCTA
        title="Ready to Simplify Your Bookkeeping?"
        subtitle="Let Taxima handle your bookkeeping so you can focus on growing your business."
        primaryLabel="Request a Quote"
        secondaryLabel="Schedule a Free Consultation"
      />
    </div>
  );
}
