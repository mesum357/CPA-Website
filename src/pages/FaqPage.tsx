import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faqPageSections, PHONE, PHONE_HREF } from "../data";
import { MinusIcon, PlusIcon, ShieldCheckIcon } from "../components/Icons";
import { AppLink, FinalCTA, PrimaryButton } from "../components/Layout";
import { usePageReveal } from "../hooks/usePageReveal";

function FaqHero() {
  return (
    <section className="relative isolate min-h-[58dvh] overflow-hidden">
      <img
        src="/images/resources-hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/78 to-ink/40" />

      <div className="container-page relative flex min-h-[58dvh] items-center py-20 md:py-28">
        <div className="reveal max-w-2xl text-white">
          <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-white/70">
            <ShieldCheckIcon className="size-3.5" />
            Frequently Asked Questions
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,5.2vw,4.1rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-balance">
            Clear Answers About Taxima&apos;s Services
          </h1>
          <p className="mt-5 max-w-lg text-[1.1rem] leading-relaxed text-white/80">
            Straightforward answers about tax preparation, bookkeeping, payroll, pricing, and how we
            work with individuals and small businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton
              href="#faq-sections"
              className="!bg-cta-blue !shadow-[0_12px_30px_rgba(74,128,192,0.4)]"
            >
              Browse Questions
            </PrimaryButton>
            <AppLink
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-[0.92rem] font-semibold text-white backdrop-blur-sm transition-all duration-500 ease-[var(--ease-out-soft)] hover:bg-white/20"
            >
              Schedule a Free Consultation
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionNav() {
  return (
    <section className="border-b border-line bg-white py-8">
      <div className="container-page">
        <div className="reveal flex flex-wrap justify-center gap-3">
          {faqPageSections.map((section) => (
            <AppLink
              key={section.id}
              href={`#${section.id}`}
              className="rounded-full bg-cream px-4 py-2 text-[0.88rem] font-semibold text-ink ring-1 ring-black/[0.04] transition-colors duration-300 hover:bg-brand hover:text-white"
            >
              {section.title}
            </AppLink>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqAccordion({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
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
                <p className="max-w-3xl text-[0.98rem] leading-relaxed text-muted">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FaqSections() {
  return (
    <section id="faq-sections" className="py-20 md:py-28">
      <div className="container-page space-y-16 md:space-y-20">
        {faqPageSections.map((section) => (
          <div key={section.id} id={section.id} className="reveal scroll-mt-28">
            <div className="mb-8 max-w-2xl">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
                FAQ
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.9rem,3.2vw,2.6rem)] font-semibold tracking-[-0.02em] text-ink">
                {section.title}
              </h2>
            </div>
            <FaqAccordion items={section.items} />
          </div>
        ))}

        <div className="reveal rounded-[1.75rem] bg-white p-8 text-center shadow-[var(--shadow-card)] ring-1 ring-black/[0.03] md:p-10">
          <h2 className="font-display text-[clamp(1.7rem,2.8vw,2.2rem)] font-semibold text-ink">
            Still have questions?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[1.02rem] leading-relaxed text-muted">
            Call us at{" "}
            <a href={PHONE_HREF} className="font-semibold text-brand hover:underline">
              {PHONE}
            </a>{" "}
            or schedule a complimentary consultation. You can also review{" "}
            <Link to="/pricing" className="font-semibold text-brand underline-offset-4 hover:underline">
              Pricing
            </Link>{" "}
            and{" "}
            <Link to="/packages" className="font-semibold text-brand underline-offset-4 hover:underline">
              Packages &amp; Plans
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default function FaqPage() {
  const rootRef = usePageReveal();

  useEffect(() => {
    document.title = "Frequently Asked Questions | Taxima CPA";
  }, []);

  return (
    <div ref={rootRef}>
      <FaqHero />
      <SectionNav />
      <FaqSections />
      <FinalCTA
        title="Ready to Get Clear Answers for Your Situation?"
        subtitle="Schedule a free consultation and we’ll walk through the services that fit your needs."
        primaryLabel="Schedule a Free Consultation"
        secondaryLabel="Contact Us"
      />
    </div>
  );
}
