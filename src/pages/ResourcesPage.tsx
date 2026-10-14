import { useEffect } from "react";
import { Link } from "react-router-dom";
import { resourceHubCards } from "../data/resources";
import { ArrowRightIcon, ShieldCheckIcon } from "../components/Icons";
import { FinalCTA, PrimaryButton } from "../components/Layout";
import { usePageReveal } from "../hooks/usePageReveal";

function ResourcesHero() {
  return (
    <section className="relative isolate min-h-[62dvh] overflow-hidden">
      <img
        src="/images/resources-hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/78 to-ink/40" />

      <div className="container-page relative flex min-h-[62dvh] items-center py-20 md:py-28">
        <div className="reveal max-w-2xl text-white">
          <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-white/70">
            <ShieldCheckIcon className="size-3.5" />
            Tax Resources
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,5.2vw,4.1rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-balance">
            Practical Guides for Tax, Planning &amp; Growing Businesses
          </h1>
          <p className="mt-5 max-w-lg text-[1.1rem] leading-relaxed text-white/80">
            Clear, CPA-written resources to help you stay compliant, plan ahead, and make confident
            decisions—before tax season gets busy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton
              href="#articles"
              className="!bg-cta-blue !shadow-[0_12px_30px_rgba(74,128,192,0.4)]"
            >
              Browse Articles
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

function ArticleGrid() {
  return (
    <section id="articles" className="py-20 md:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            Tax Resources
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            Guides worth bookmarking
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            From filing deadlines to entity decisions, these resources are written to answer the
            questions clients ask most.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {resourceHubCards.map((card, index) => (
            <article
              key={card.slug}
              className={`reveal group overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-card)] ring-1 ring-black/[0.03] ${
                index === 0 ? "md:col-span-2 md:grid md:grid-cols-2" : ""
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt=""
                  className={`w-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-105 ${
                    index === 0 ? "aspect-[16/10] md:aspect-auto md:h-full" : "aspect-[16/10]"
                  }`}
                />
              </div>
              <div className="flex flex-col justify-center p-7 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand/60">
                    {card.category}
                  </span>
                  <span className="rounded-full bg-cream px-3 py-1 text-[0.75rem] font-medium text-muted">
                    {card.badge}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-[1.55rem] font-semibold leading-snug text-ink md:text-[1.7rem]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">{card.description}</p>
                <Link
                  to={card.href}
                  className="mt-6 inline-flex items-center gap-2 text-[0.92rem] font-semibold text-brand transition-colors duration-300 hover:text-brand-soft"
                >
                  Read more
                  <ArrowRightIcon className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HelpStrip() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-20">
      <img src="/images/cta-banner.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-navy/88" />
      <div className="container-page relative mx-auto max-w-3xl text-center text-white">
        <h2 className="reveal font-display text-[clamp(1.9rem,3.2vw,2.6rem)] font-semibold tracking-[-0.02em]">
          Prefer to talk it through?
        </h2>
        <p className="reveal mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed text-white/75">
          These guides are a starting point. If your situation needs personalized advice, Taxima can
          help with tax preparation, planning, formation, and year-round support.
        </p>
        <div className="reveal mt-8">
          <PrimaryButton
            href="#contact"
            className="!bg-cta-blue !shadow-[0_12px_30px_rgba(74,128,192,0.4)]"
          >
            Schedule a Free Consultation
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default function ResourcesPage() {
  const rootRef = usePageReveal();

  useEffect(() => {
    document.title = "Tax Resources & Guides | Taxima CPA";
  }, []);

  return (
    <div ref={rootRef}>
      <ResourcesHero />
      <ArticleGrid />
      <HelpStrip />
      <FinalCTA
        title="Have a Tax or Business Question?"
        subtitle="Schedule a complimentary consultation and get clear next steps for your situation."
        primaryLabel="Schedule a Free Consultation"
        secondaryLabel="Contact Us Today"
      />
    </div>
  );
}
