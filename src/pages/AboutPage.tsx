import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  coreValues,
  cpaCredentials,
  personalNote,
  whoWeServe,
} from "../data";
import { ArrowRightIcon, CheckIcon, ShieldCheckIcon } from "../components/Icons";
import { FinalCTA, PrimaryButton } from "../components/Layout";
import { usePageReveal } from "../hooks/usePageReveal";

const storyCards = [
  {
    title: "Why I Became a CPA",
    text: "I wanted a career that combines accounting knowledge with helping people make confident financial decisions.",
    image: "/images/tax-planning.jpg",
  },
  {
    title: "Why I Founded Taxima",
    text: "To build a firm around long-term relationships—not seasonal filings and anonymous accounts.",
    image: "/images/business-team.jpg",
  },
  {
    title: "Our Commitment",
    text: "Personalized attention for individuals and small businesses, year-round—not just during tax season.",
    image: "/images/bookkeeping-hero.jpg",
  },
] as const;

const trustCards = [
  {
    title: "Who We Are",
    text: "A California CPA firm for tax, accounting, bookkeeping, payroll, and business services.",
  },
  {
    title: "Why Taxima Exists",
    text: "Personalized, accessible support focused on long-term success—not one-time filings.",
  },
  {
    title: "Why Trust Us",
    text: "CPA-led work, clear communication, secure handling of your information, and lasting relationships.",
  },
] as const;

function AboutHero() {
  return (
    <section className="relative isolate min-h-[70dvh] overflow-hidden">
      <img
        src="/images/about-office.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/35" />

      <div className="container-page relative flex min-h-[70dvh] items-center py-20 md:py-28">
        <div className="reveal max-w-2xl text-white">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-white/70">
            About Taxima
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.6rem,5.5vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-balance">
            Your partner in financial clarity
          </h1>
          <p className="mt-5 max-w-lg text-[1.1rem] leading-relaxed text-white/80">
            Taxima is a California-based CPA firm helping individuals and small businesses stay
            compliant, plan ahead, and feel confident about their finances.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton
              href="#contact"
              className="!bg-cta-blue !shadow-[0_12px_30px_rgba(74,128,192,0.4)] hover:!brightness-110"
            >
              Schedule a Free Consultation
            </PrimaryButton>
            <a
              href="#meet-your-cpa"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-[0.92rem] font-semibold text-white backdrop-blur-sm transition-all duration-500 ease-[var(--ease-out-soft)] hover:bg-white/20"
            >
              Meet Your CPA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="relative z-10 -mt-10 pb-16 md:-mt-14 md:pb-20">
      <div className="container-page grid gap-4 md:grid-cols-3">
        {trustCards.map((card) => (
          <article
            key={card.title}
            className="reveal rounded-[1.5rem] bg-white p-7 shadow-[var(--shadow-soft)] ring-1 ring-black/[0.04]"
          >
            <div className="flex size-10 items-center justify-center rounded-full bg-brand/5 text-brand">
              <ShieldCheckIcon className="size-5" />
            </div>
            <h2 className="mt-4 font-display text-[1.55rem] font-semibold text-ink">{card.title}</h2>
            <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            Our Story
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            Liberate your potential—leave the numbers to us
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            Built for people who want a trusted CPA they can reach all year, not a call center.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {storyCards.map((card) => (
            <article
              key={card.title}
              className="reveal group overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-card)] ring-1 ring-black/[0.03]"
            >
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt=""
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-[1.45rem] font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MeetCPA() {
  return (
    <section id="meet-your-cpa" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="reveal mx-auto mb-12 max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            Meet Your CPA
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            Your financial champion
          </h2>
        </div>

        <div className="reveal mx-auto grid max-w-4xl overflow-hidden rounded-[2rem] bg-cream shadow-[var(--shadow-soft)] ring-1 ring-black/[0.03] md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[22rem]">
            <img
              src="/images/about-office.jpg"
              alt="Hormoz, California Licensed CPA at Taxima"
              className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10">
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-brand/5 px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-brand">
              <CheckIcon className="size-3.5" />
              California Licensed CPA
            </p>
            <h3 className="mt-4 font-display text-[2rem] font-semibold text-ink">Founder, Taxima CPA</h3>
            <p className="mt-3 text-[1rem] leading-relaxed text-muted">
              Experience that helps you navigate compliance, keep accurate records, and make informed
              decisions—with clear guidance, not jargon.
            </p>
            <ul className="mt-6 space-y-3">
              {cpaCredentials.slice(0, 4).map((item) => (
                <li key={item.label} className="flex gap-3 text-[0.92rem] text-ink/85">
                  <span className="mt-1 text-brand">
                    <CheckIcon className="size-3.5" />
                  </span>
                  <span>
                    <span className="font-semibold">{item.label}: </span>
                    {item.value}
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

function MissionBanner() {
  return (
    <section className="relative isolate overflow-hidden py-20 md:py-24">
      <img src="/images/cta-banner.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="container-page relative text-center text-white">
        <p className="reveal text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-white/60">
          Our Mission
        </p>
        <h2 className="reveal mx-auto mt-4 max-w-3xl font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold leading-snug tracking-[-0.02em]">
          Accurate, dependable, personalized tax and accounting—so you can focus on what matters most.
        </h2>
        <div className="reveal mt-8">
          <PrimaryButton
            href="#contact"
            className="!bg-cta-blue !shadow-[0_12px_30px_rgba(74,128,192,0.35)]"
          >
            Get Started
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function ValuesAndAudience() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            Core Values
          </h2>
          <p className="mt-3 text-[1.02rem] text-muted">What clients care about when choosing a CPA.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="reveal rounded-[1.35rem] bg-white p-5 text-center shadow-[var(--shadow-card)] ring-1 ring-black/[0.03]"
            >
              <h3 className="font-display text-[1.25rem] font-semibold text-ink">{value.title}</h3>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 text-center">
          <h3 className="font-display text-[1.9rem] font-semibold text-ink">Who We Serve</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {whoWeServe.map((tag) => (
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

function PersonalNote() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="container-page">
        <div className="reveal overflow-hidden rounded-[2rem] bg-brand p-8 text-white shadow-[var(--shadow-btn)] md:p-12 md:text-center">
          <p className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-semibold leading-snug tracking-[-0.02em] md:mx-auto md:max-w-3xl">
            “{personalNote}”
          </p>
          <Link
            to="/tax-services"
            className="mt-8 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-white/90 transition-transform duration-500 ease-[var(--ease-out-soft)] hover:translate-x-1"
          >
            Explore tax services <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  const rootRef = usePageReveal();

  useEffect(() => {
    document.title = "About Taxima CPA | California Licensed CPA";
  }, []);

  return (
    <div ref={rootRef}>
      <AboutHero />
      <TrustStrip />
      <OurStory />
      <MeetCPA />
      <MissionBanner />
      <ValuesAndAudience />
      <PersonalNote />
      <FinalCTA
        title="Ready to work with a trusted CPA?"
        subtitle="Schedule a free consultation—you'll work directly with a California-licensed CPA."
        primaryLabel="Schedule a Free Consultation"
        secondaryLabel="Contact Taxima Today"
      />
    </div>
  );
}
