import { useEffect } from "react";
import {
  lifeInsuranceAudience,
  lifeInsuranceConsiderations,
  lifeInsuranceReasons,
} from "../data";
import { CheckIcon, ShieldCheckIcon, SparkIcon } from "../components/Icons";
import { FinalCTA, PrimaryButton } from "../components/Layout";
import { usePageReveal } from "../hooks/usePageReveal";

function LifeInsuranceHero() {
  return (
    <section className="relative isolate min-h-[68dvh] overflow-hidden">
      <img
        src="/images/business-hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/80 to-ink/45" />

      <div className="container-page relative flex min-h-[68dvh] items-center py-20 md:py-28">
        <div className="reveal max-w-2xl text-white">
          <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-white/70">
            <ShieldCheckIcon className="size-3.5" />
            Life Insurance &amp; IUL
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,5.2vw,4.1rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-balance">
            Life Insurance Solutions Designed Around Your Needs
          </h1>
          <p className="mt-5 max-w-lg text-[1.1rem] leading-relaxed text-white/80">
            Life insurance can play an important role in protecting your family, supporting your
            financial goals, and creating long-term financial flexibility—including Indexed Universal
            Life (IUL) solutions tailored to your circumstances.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton
              href="#contact"
              className="!bg-cta-blue !shadow-[0_12px_30px_rgba(74,128,192,0.4)]"
            >
              Schedule a Consultation
            </PrimaryButton>
            <a
              href="#approach"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-[0.92rem] font-semibold text-white backdrop-blur-sm transition-all duration-500 ease-[var(--ease-out-soft)] hover:bg-white/20"
            >
              Learn Our Approach
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
          Our approach is educational and personalized. We help you understand how different types of
          life insurance work, what they can and cannot do, and whether a particular solution may be
          appropriate for you.
        </p>
      </div>
    </section>
  );
}

function WhyConsider() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="reveal">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            Why Consider Life Insurance?
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,3vw,2.7rem)] font-semibold tracking-[-0.02em] text-ink">
            Financial protection for the people who depend on you
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
            The appropriate type and amount of coverage depends on your individual circumstances.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {lifeInsuranceReasons.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-[1.15rem] bg-white px-4 py-3.5 text-[0.95rem] font-medium text-ink shadow-[var(--shadow-card)] ring-1 ring-black/[0.03]"
              >
                <CheckIcon className="size-4 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-soft)]">
          <img
            src="/images/industry-insurance.jpg"
            alt=""
            className="aspect-[5/4] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function WhatIsIUL() {
  return (
    <section id="iul" className="bg-white py-20 md:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="reveal">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            What Is an IUL?
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,3vw,2.7rem)] font-semibold tracking-[-0.02em] text-ink">
            Indexed Universal Life, explained clearly
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
            An Indexed Universal Life (IUL) policy is a form of permanent life insurance that
            combines a death benefit with a cash-value component.
          </p>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
            Depending on the policy, the cash value may receive interest based in part on the
            performance of a selected market index, subject to the policy&apos;s specific terms,
            limitations, caps, participation rates, and other factors.
          </p>
          <div className="mt-6 rounded-[1.35rem] bg-cream p-6 ring-1 ring-black/[0.03]">
            <div className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-brand/60">
              <SparkIcon className="size-3.5" />
              Important
            </div>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-ink/85">
              IULs are complex financial products. They are not investments in a stock-market index,
              and the policy&apos;s performance depends on the specific contract and how it is managed.
            </p>
          </div>
        </div>

        <aside className="reveal rounded-[1.75rem] bg-brand p-8 text-white shadow-[var(--shadow-btn)] md:p-10">
          <h3 className="font-display text-[1.7rem] font-semibold tracking-[-0.02em]">
            Is an IUL right for everyone?
          </h3>
          <p className="mt-3 text-[1.05rem] font-semibold text-white/90">No.</p>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-white/75">
            An IUL may be appropriate for some individuals, but it is not the right solution for
            everyone. Before purchasing a policy, it is important to consider:
          </p>
          <ul className="mt-6 space-y-2.5">
            {lifeInsuranceConsiderations.map((item) => (
              <li key={item} className="flex gap-2.5 text-[0.92rem] text-white/90">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-cta-blue" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.95rem] leading-relaxed text-white/80">
            We believe clients should understand the product before making a decision.
          </p>
        </aside>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="py-20 md:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
            Our Approach
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            Understand your situation first
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            We don&apos;t recommend a financial product simply because it is available. Our goal is
            to explain your options clearly and help you make an informed decision.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Listen first",
              text: "We start with your goals, cash flow, and need for coverage—not a product pitch.",
            },
            {
              title: "Explain clearly",
              text: "Features, costs, benefits, and potential risks—so you know what you’re considering.",
            },
            {
              title: "Decide together",
              text: "If life insurance is appropriate, we discuss available solutions that fit your circumstances.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="reveal rounded-[1.5rem] bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-black/[0.03]"
            >
              <h3 className="font-display text-[1.45rem] font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.9rem)] font-semibold tracking-[-0.02em] text-ink">
            Life Insurance for Individuals &amp; Business Owners
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            Life insurance can serve different purposes depending on your circumstances.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {lifeInsuranceAudience.map((item) => (
            <article
              key={item.title}
              className="reveal overflow-hidden rounded-[1.75rem] bg-cream p-8 ring-1 ring-black/[0.03] md:p-10"
            >
              <h3 className="font-display text-[1.7rem] font-semibold text-ink">{item.title}</h3>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="reveal mx-auto mt-8 max-w-2xl text-center text-[0.98rem] leading-relaxed text-muted">
          We can discuss your goals and help you determine whether life insurance should be part of
          your broader financial plan.
        </p>
      </div>
    </section>
  );
}

function QuestionsBanner() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-20">
      <img src="/images/cta-banner.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-navy/88" />
      <div className="container-page relative mx-auto max-w-3xl text-center text-white">
        <h2 className="reveal font-display text-[clamp(1.9rem,3.2vw,2.6rem)] font-semibold tracking-[-0.02em]">
          Have Questions About Life Insurance or IUL?
        </h2>
        <p className="reveal mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed text-white/75">
          You don&apos;t have to understand every policy feature before starting a conversation.
          Schedule a consultation to discuss your goals and determine whether life insurance may be
          appropriate for your situation.
        </p>
        <div className="reveal mt-8">
          <PrimaryButton
            href="#contact"
            className="!bg-cta-blue !shadow-[0_12px_30px_rgba(74,128,192,0.4)]"
          >
            Schedule a Consultation
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function Disclosures() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page">
        <div className="reveal rounded-[1.75rem] border border-line bg-white p-7 md:p-9">
          <h2 className="font-display text-[1.5rem] font-semibold text-ink">Important Information</h2>
          <div className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-muted">
            <p>
              Life insurance products are separate from Taxima&apos;s tax, accounting, bookkeeping,
              and CPA services.
            </p>
            <p>
              Product availability, features, costs, benefits, and eligibility vary by insurance
              company and individual circumstances. Policy performance is not guaranteed except as
              specifically stated in the policy contract. An IUL is not a direct investment in a stock
              market index.
            </p>
            <p>
              Insurance products are offered subject to applicable licensing, carrier requirements,
              and regulatory requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LifeInsurancePage() {
  const rootRef = usePageReveal();

  useEffect(() => {
    document.title = "Life Insurance & IUL | Taxima CPA";
  }, []);

  return (
    <div ref={rootRef}>
      <LifeInsuranceHero />
      <Intro />
      <WhyConsider />
      <WhatIsIUL />
      <Approach />
      <Audience />
      <QuestionsBanner />
      <Disclosures />
      <FinalCTA
        title="Ready to Start the Conversation?"
        subtitle="Schedule a consultation to learn how the different options work and whether life insurance may fit your goals."
        primaryLabel="Schedule a Consultation"
        secondaryLabel="Contact Us"
      />
    </div>
  );
}
