import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  monthlyPackages,
  packageBundles,
  packageFaqs,
  quarterlyTaxPricing,
  soiFootnote,
} from "../data";
import {
  CheckIcon,
  MinusIcon,
  PlusIcon,
  ShieldCheckIcon,
} from "../components/Icons";
import { FinalCTA, PrimaryButton } from "../components/Layout";
import { usePageReveal } from "../hooks/usePageReveal";

function PackagesHero() {
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
            Packages &amp; Plans
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,5.2vw,4.1rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-balance">
            Monthly Packages That Grow With Your Business
          </h1>
          <p className="mt-5 max-w-lg text-[1.1rem] leading-relaxed text-white/80">
            Choose a bookkeeping plan that matches where you are—Launch, Growth, or Scale—and add
            bundles that combine tax and accounting support at a clear starting price.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton
              href="#packages"
              className="!bg-cta-blue !shadow-[0_12px_30px_rgba(74,128,192,0.4)]"
            >
              Compare Packages
            </PrimaryButton>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-[0.92rem] font-semibold text-white backdrop-blur-sm transition-all duration-500 ease-[var(--ease-out-soft)] hover:bg-white/20"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function LifecycleIntro() {
  return (
    <section className="border-b border-line bg-white py-14 md:py-16">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            Built for your stage
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,3.2vw,2.6rem)] font-semibold tracking-[-0.02em] text-ink">
            A long-term partner that grows with you
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {monthlyPackages.map((pkg) => (
            <div
              key={pkg.name}
              className="reveal rounded-[1.35rem] bg-cream px-6 py-6 ring-1 ring-black/[0.03]"
            >
              <p className="font-display text-[1.5rem] font-semibold text-ink">{pkg.name}</p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{pkg.ideal}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageCards() {
  return (
    <section id="packages" className="py-20 md:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            Monthly Bookkeeping Packages
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            Clear plans. Clear value.
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            Every package includes monthly bookkeeping, reconciliations, and financial statements—so
            you always know where your business stands.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {monthlyPackages.map((pkg) => (
            <article
              key={pkg.name}
              className={`reveal flex flex-col rounded-[1.75rem] p-8 shadow-[var(--shadow-card)] ring-1 ring-black/[0.03] ${
                pkg.featured ? "bg-brand text-white lg:-translate-y-2" : "bg-white"
              }`}
            >
              {pkg.featured ? (
                <span className="mb-4 inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/90">
                  Most Popular
                </span>
              ) : (
                <span className="mb-4 inline-flex h-6" aria-hidden />
              )}
              <h3
                className={`font-display text-[1.9rem] font-semibold ${
                  pkg.featured ? "text-white" : "text-ink"
                }`}
              >
                {pkg.name}
              </h3>
              <p className={`mt-2 text-[0.95rem] ${pkg.featured ? "text-white/75" : "text-muted"}`}>
                {pkg.tagline}
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span
                  className={`font-display text-[2.6rem] font-semibold leading-none ${
                    pkg.featured ? "text-white" : "text-ink"
                  }`}
                >
                  {pkg.price}
                </span>
                <span className={`text-[0.95rem] ${pkg.featured ? "text-white/70" : "text-muted"}`}>
                  {pkg.cadence}
                </span>
              </p>
              <ul className="mt-7 flex-1 space-y-2.5">
                {pkg.includes.map((item) => (
                  <li
                    key={item}
                    className={`flex gap-2.5 text-[0.92rem] leading-snug ${
                      pkg.featured ? "text-white/90" : "text-ink"
                    }`}
                  >
                    <CheckIcon
                      className={`mt-0.5 size-4 shrink-0 ${
                        pkg.featured ? "text-cta-blue" : "text-brand"
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PrimaryButton
                  href="#contact"
                  className={
                    pkg.featured
                      ? "!bg-cta-blue !shadow-[0_12px_30px_rgba(74,128,192,0.4)]"
                      : undefined
                  }
                >
                  Get Started
                </PrimaryButton>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mx-auto mt-10 max-w-3xl text-center text-[0.9rem] leading-relaxed text-muted">
          *{soiFootnote}
        </p>
      </div>
    </section>
  );
}

function Bundles() {
  return (
    <section id="bundles" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            Select Bundles and Save
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            Combine services with clearer starting prices
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {packageBundles.map((bundle) => (
            <article
              key={bundle.name}
              className="reveal rounded-[1.5rem] border border-line bg-cream p-7 md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-display text-[1.45rem] font-semibold text-ink">{bundle.name}</h3>
                <span className="rounded-full bg-brand/8 px-3.5 py-1.5 text-[0.88rem] font-semibold text-brand">
                  {bundle.price}
                </span>
              </div>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">{bundle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuarterlyTax() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="reveal grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
              Quarterly Tax
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.4vw,2.7rem)] font-semibold tracking-[-0.02em] text-ink">
              Stay ahead between filings
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
              Quarterly tax support helps you plan estimates and avoid year-end surprises. Pair it
              with a bundle, or add it on its own.
            </p>
            <p className="mt-6 text-[0.95rem] text-muted">
              Looking for one-time tax return pricing? See our{" "}
              <Link to="/pricing" className="font-semibold text-brand underline-offset-4 hover:underline">
                Pricing page
              </Link>
              .
            </p>
          </div>

          <div className="reveal overflow-hidden rounded-[1.5rem] bg-white shadow-[var(--shadow-card)] ring-1 ring-black/[0.03]">
            <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-line bg-cream px-5 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-brand/70 md:px-7">
              <span>Service</span>
              <span>Price</span>
            </div>
            <ul className="divide-y divide-line">
              {quarterlyTaxPricing.map((row) => (
                <li
                  key={row.service}
                  className="grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 md:px-7"
                >
                  <span className="text-[0.98rem] font-medium text-ink">{row.service}</span>
                  <span className="text-right text-[0.98rem] font-semibold text-brand">
                    {row.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
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
            Quick answers about packages, SOI, payroll add-ons, and bundles.
          </p>
        </div>

        <div className="reveal divide-y divide-line border-y border-line">
          {packageFaqs.map((item, index) => {
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

export default function PackagesPage() {
  const rootRef = usePageReveal();

  useEffect(() => {
    document.title = "Packages & Plans | Taxima CPA";
  }, []);

  return (
    <div ref={rootRef}>
      <PackagesHero />
      <LifecycleIntro />
      <PackageCards />
      <Bundles />
      <QuarterlyTax />
      <FAQ />
      <FinalCTA
        title="Ready to Choose a Plan?"
        subtitle="Schedule a complimentary consultation and we’ll recommend the package or bundle that fits your business."
        primaryLabel="Schedule a Free Consultation"
        secondaryLabel="Request a Quote"
      />
    </div>
  );
}
