import { useEffect } from "react";
import { industriesWeServe } from "../data";
import { ArrowRightIcon, CheckIcon, ShieldCheckIcon } from "../components/Icons";
import { FinalCTA, PrimaryButton } from "../components/Layout";
import { usePageReveal } from "../hooks/usePageReveal";

function IndustriesHero() {
  return (
    <section className="relative isolate min-h-[68dvh] overflow-hidden">
      <img
        src="/images/industry-real-estate.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/78 to-ink/40" />

      <div className="container-page relative flex min-h-[68dvh] items-center py-20 md:py-28">
        <div className="reveal max-w-2xl text-white">
          <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-white/70">
            <ShieldCheckIcon className="size-3.5" />
            Industries We Serve
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,5.2vw,4.1rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-balance">
            Specialized Tax and Accounting Support for Your Industry
          </h1>
          <p className="mt-5 max-w-lg text-[1.1rem] leading-relaxed text-white/80">
            Every industry has unique financial, tax, and compliance needs. Taxima provides
            personalized tax, accounting, bookkeeping, payroll, and business support tailored to how
            you actually operate.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton
              href="#industries"
              className="!bg-cta-blue !shadow-[0_12px_30px_rgba(74,128,192,0.4)]"
            >
              Explore Industries
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

function Intro() {
  return (
    <section className="border-b border-line bg-white py-14 md:py-16">
      <div className="container-page reveal mx-auto max-w-3xl text-center">
        <p className="text-[1.08rem] leading-relaxed text-muted">
          A one-size-fits-all approach does not work for every business. Our goal is to understand
          your business, identify your specific needs, and provide practical year-round support as
          your financial situation and business evolve.
        </p>
      </div>
    </section>
  );
}

function IndustryGrid() {
  return (
    <section id="industries" className="py-20 md:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            Who we help
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            Explore the industries we serve
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {industriesWeServe.map((industry, index) => (
            <article
              key={industry.slug}
              id={industry.slug}
              className={`reveal group overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-card)] ring-1 ring-black/[0.03] ${
                index === 0 || index === 5 ? "md:col-span-2 md:grid md:grid-cols-2" : ""
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={industry.image}
                  alt=""
                  className={`w-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-105 ${
                    index === 0 || index === 5
                      ? "aspect-[16/10] md:aspect-auto md:h-full"
                      : "aspect-[16/10]"
                  }`}
                />
              </div>
              <div className="flex flex-col justify-center p-7 md:p-8">
                <h3 className="font-display text-[1.55rem] font-semibold text-ink md:text-[1.7rem]">
                  {industry.title}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">{industry.text}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-[0.92rem] font-semibold text-brand transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-1"
                >
                  Discuss your needs <ArrowRightIcon className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NotListed() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-20">
      <img src="/images/cta-banner.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-navy/88" />
      <div className="container-page relative mx-auto max-w-3xl text-center text-white">
        <h2 className="reveal font-display text-[clamp(1.9rem,3.2vw,2.6rem)] font-semibold tracking-[-0.02em]">
          Don&apos;t See Your Industry Listed?
        </h2>
        <p className="reveal mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed text-white/75">
          You don&apos;t have to fit into one specific category to work with Taxima. We serve
          individuals and small businesses across a wide range of industries and tailor our services
          to each client&apos;s unique needs.
        </p>
        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-3">
          <PrimaryButton
            href="#contact"
            className="!bg-cta-blue !shadow-[0_12px_30px_rgba(74,128,192,0.4)]"
          >
            Contact Taxima Today
          </PrimaryButton>
        </div>
        <ul className="reveal mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-3 text-left">
          {[
            "Personalized year-round support",
            "Tax, bookkeeping & payroll under one roof",
            "Practical guidance as your business evolves",
          ].map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[0.88rem] text-white/90 ring-1 ring-white/15"
            >
              <CheckIcon className="size-3.5 text-cta-blue" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function IndustriesPage() {
  const rootRef = usePageReveal();

  useEffect(() => {
    document.title = "Industries We Serve | Taxima CPA";
  }, []);

  return (
    <div ref={rootRef}>
      <IndustriesHero />
      <Intro />
      <IndustryGrid />
      <NotListed />
      <FinalCTA
        title="Ready to Talk About Your Industry Needs?"
        subtitle="Contact Taxima today to discuss how we can support your tax, accounting, and business needs."
        primaryLabel="Schedule a Free Consultation"
        secondaryLabel="Request a Quote"
      />
    </div>
  );
}
