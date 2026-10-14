import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  additionalServicePricing,
  businessTaxPricing,
  formationPricingIncludes,
  individualTaxPricing,
  payrollPricingFactors,
  payrollPricingIncludes,
  pricingFaqs,
  pricingVaryFactors,
} from "../data";
import {
  CheckIcon,
  MinusIcon,
  PlusIcon,
  ShieldCheckIcon,
} from "../components/Icons";
import { FinalCTA, PrimaryButton } from "../components/Layout";
import { usePageReveal } from "../hooks/usePageReveal";

function PricingHero() {
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
            Taxima Pricing
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,5.2vw,4.1rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-balance">
            Transparent Pricing for Individuals &amp; Small Businesses
          </h1>
          <p className="mt-5 max-w-lg text-[1.1rem] leading-relaxed text-white/80">
            At Taxima CPA, we believe in straightforward pricing and exceptional service. Our fees
            are based on the complexity of your tax and accounting needs, and we&apos;ll always
            provide a clear quote before work begins.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton
              href="#contact"
              className="!bg-cta-blue !shadow-[0_12px_30px_rgba(74,128,192,0.4)]"
            >
              Schedule a Free Consultation
            </PrimaryButton>
            <a
              href="#individual"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-[0.92rem] font-semibold text-white backdrop-blur-sm transition-all duration-500 ease-[var(--ease-out-soft)] hover:bg-white/20"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroBanner() {
  return (
    <section className="border-b border-line bg-white py-14 md:py-16">
      <div className="container-page reveal mx-auto max-w-3xl text-center">
        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
          Not sure which service is right for you?
        </p>
        <p className="mt-4 text-[1.08rem] leading-relaxed text-muted">
          Schedule a complimentary consultation, and we&apos;ll recommend the best solution for your
          needs. Looking for monthly bookkeeping? See our{" "}
          <Link to="/packages" className="font-semibold text-brand underline-offset-4 hover:underline">
            Packages &amp; Plans
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function PriceTable({
  rows,
}: {
  rows: readonly { service: string; price: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-[var(--shadow-card)] ring-1 ring-black/[0.03]">
      <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-line bg-cream px-5 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-brand/70 md:px-7">
        <span>Service</span>
        <span>Starting Price</span>
      </div>
      <ul className="divide-y divide-line">
        {rows.map((row) => (
          <li
            key={row.service}
            className="grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 md:px-7"
          >
            <span className="text-[0.98rem] font-medium text-ink">{row.service}</span>
            <span className="text-right text-[0.98rem] font-semibold text-brand">{row.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IndividualPricing() {
  return (
    <section id="individual" className="py-20 md:py-28">
      <div className="container-page">
        <div className="reveal grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14">
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
              Individual Tax Services
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
              Starting at $499
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
              Includes preparation and electronic filing of your federal and California individual
              income tax return.
            </p>
          </div>
          <p className="text-[0.95rem] leading-relaxed text-muted lg:pb-1">
            Final pricing depends on complexity and required tax schedules.
          </p>
        </div>

        <div className="reveal mt-10">
          <h3 className="mb-4 font-display text-[1.45rem] font-semibold text-ink">
            Additional Services
          </h3>
          <PriceTable rows={individualTaxPricing} />
        </div>
      </div>
    </section>
  );
}

function BusinessPricing() {
  return (
    <section id="business" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            Business Tax Returns
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            Professional tax preparation for businesses of all sizes
          </h2>
        </div>
        <div className="reveal mx-auto mt-12 max-w-3xl">
          <PriceTable rows={businessTaxPricing} />
        </div>
      </div>
    </section>
  );
}

function PayrollAndFormation() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid gap-8 lg:grid-cols-2">
        <article className="reveal rounded-[1.75rem] bg-white p-8 shadow-[var(--shadow-card)] ring-1 ring-black/[0.03] md:p-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            Payroll Services
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,3vw,2.4rem)] font-semibold tracking-[-0.02em] text-ink">
            Starting at $100/month
          </h2>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">Pricing depends on:</p>
          <ul className="mt-4 space-y-2.5">
            {payrollPricingFactors.map((item) => (
              <li key={item} className="flex gap-2.5 text-[0.95rem] text-ink">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.98rem] font-medium text-ink">Payroll services may include:</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {payrollPricingIncludes.map((item) => (
              <li key={item} className="text-[0.92rem] text-muted">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="reveal rounded-[1.75rem] bg-navy p-8 text-white shadow-[var(--shadow-card)] md:p-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-white/60">
            Business Formation &amp; Compliance
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,3vw,2.4rem)] font-semibold tracking-[-0.02em]">
            Starting at $250
          </h2>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-white/75">Services include:</p>
          <ul className="mt-4 space-y-2.5">
            {formationPricingIncludes.map((item) => (
              <li key={item} className="flex gap-2.5 text-[0.95rem] text-white/90">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-cta-blue" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.88rem] leading-relaxed text-white/55">
            Government filing fees are not included.
          </p>
        </article>
      </div>
    </section>
  );
}

function AdditionalServices() {
  return (
    <section id="additional" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            Additional Services
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            Support beyond the annual return
          </h2>
        </div>
        <div className="reveal mx-auto mt-12 max-w-3xl">
          <PriceTable rows={additionalServicePricing} />
        </div>
        <div className="reveal mt-10 text-center">
          <p className="text-[0.98rem] text-muted">
            Prefer a monthly plan? Explore{" "}
            <Link to="/packages" className="font-semibold text-brand underline-offset-4 hover:underline">
              Packages &amp; Plans
            </Link>{" "}
            for bookkeeping packages and bundled savings.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyPricesVary() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            Transparency
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            Why Prices May Vary
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            Every client is unique. Final pricing may depend on:
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pricingVaryFactors.map((item) => (
            <div
              key={item}
              className="reveal flex items-start gap-3 rounded-[1.35rem] bg-white px-5 py-5 shadow-[var(--shadow-card)] ring-1 ring-black/[0.03]"
            >
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-brand/5 text-brand">
                <CheckIcon className="size-4" />
              </span>
              <p className="text-[0.95rem] font-medium leading-snug text-ink">{item}</p>
            </div>
          ))}
        </div>
        <p className="reveal mx-auto mt-10 max-w-2xl text-center text-[1.02rem] leading-relaxed text-muted">
          We&apos;ll always discuss pricing with you before beginning any work.
        </p>
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
            Clear answers about how we price and what to expect before work begins.
          </p>
        </div>

        <div className="reveal divide-y divide-line border-y border-line">
          {pricingFaqs.map((item, index) => {
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

export default function PricingPage() {
  const rootRef = usePageReveal();

  useEffect(() => {
    document.title = "Transparent Pricing | Taxima CPA";
  }, []);

  return (
    <div ref={rootRef}>
      <PricingHero />
      <IntroBanner />
      <IndividualPricing />
      <BusinessPricing />
      <PayrollAndFormation />
      <AdditionalServices />
      <WhyPricesVary />
      <FAQ />
      <FinalCTA
        title="Ready to Get Started?"
        subtitle="Whether you need tax preparation, bookkeeping, payroll, or business support, Taxima is here to help. Schedule your complimentary consultation today."
        primaryLabel="Schedule a Free Consultation"
        secondaryLabel="Request a Quote"
      />
    </div>
  );
}
