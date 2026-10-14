import { useState } from "react";
import { Link } from "react-router-dom";
import {
  faqs,
  GOOGLE_BUSINESS_URL,
  howItWorks,
  PHONE,
  PHONE_HREF,
  services,
  testimonials,
  trustPoints,
  whoWeHelp,
  whyChoose,
  whyTrustUs,
} from "../data";
import {
  ArrowRightIcon,
  CheckIcon,
  MinusIcon,
  PlusIcon,
  ServiceIcon,
  ShieldCheckIcon,
  SparkIcon,
  StarIcon,
} from "../components/Icons";
import { FinalCTA, PrimaryButton, SecondaryButton } from "../components/Layout";
import { usePageReveal } from "../hooks/usePageReveal";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-14">
      <div
        className="pointer-events-none absolute right-[-8%] top-[8%] h-[42rem] w-[42rem] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(61,111,232,0.14) 0%, rgba(250,249,246,0) 68%)",
        }}
      />

      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="reveal max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-cream-dark px-3.5 py-1.5 text-[0.78rem] font-semibold text-brand">
            <ShieldCheckIcon className="size-3.5 text-brand" />
            California Licensed CPA
          </div>

          <h1 className="mt-6 font-display text-[clamp(2.55rem,5.2vw,4.15rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink text-balance">
            Professional{" "}
            <span className="text-brand">Tax,</span> Accounting &amp; Bookkeeping Services for{" "}
            <span className="text-brand">Individuals</span> and Small Businesses
          </h1>

          <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-muted">
            Helping individuals and business owners reduce stress with expert tax preparation,
            bookkeeping, payroll, and year round accounting support.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="#contact">Schedule a Free Consultation</PrimaryButton>
            <SecondaryButton href="#contact">Get a Quote</SecondaryButton>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-[34rem] lg:mx-0 lg:justify-self-end">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
            <img
              src="/images/hero.jpg"
              alt="Hormoz, California Licensed CPA at Taxima"
              className="aspect-[4/5] w-full object-cover object-[center_22%] md:aspect-[5/6]"
            />
          </div>

          <div className="absolute bottom-5 left-4 right-4 sm:left-auto sm:right-5 sm:bottom-6 sm:max-w-[17.5rem]">
            <div className="flex items-center gap-3 rounded-full bg-white/95 px-3.5 py-3 shadow-[var(--shadow-card)] backdrop-blur-sm ring-1 ring-black/5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <CheckIcon className="size-4" />
              </span>
              <div className="min-w-0 leading-tight">
                <p className="text-[0.88rem] font-bold text-brand">CA Licensed CPA</p>
                <p className="truncate text-[0.75rem] text-muted">
                  Virtual &amp; in-person appointments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="container-page">
        <h2 className="reveal font-display text-[clamp(2rem,3.5vw,2.75rem)] font-semibold tracking-[-0.02em] text-ink">
          Why Choose Taxima?
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => (
            <div
              key={item}
              className="reveal flex items-center gap-3 rounded-[1.25rem] bg-white px-5 py-5 shadow-[var(--shadow-card)] ring-1 ring-black/[0.03]"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand/5 text-brand">
                <CheckIcon className="size-4" />
              </span>
              <p className="text-[0.98rem] font-medium text-ink">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const top = services.slice(0, 4);
  const bottom = services.slice(4);

  return (
    <section id="services" className="pb-20 md:pb-28">
      <div className="container-page">
        <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] font-semibold tracking-[-0.02em] text-ink">
            Services
          </h2>
          <p className="max-w-md text-[0.98rem] leading-relaxed text-muted md:text-right">
            Everything an individual or small business needs to stay accurate, compliant, and
            confident under one CPA-led roof.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-fr grid-flow-dense gap-5 lg:grid-cols-3">
          {top.map((service) => (
            <article
              key={service.title}
              className={`reveal group relative min-h-[17rem] overflow-hidden rounded-[1.75rem] bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-black/[0.03] ${
                service.wide ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-y-0 right-0 overflow-hidden ${
                  service.wide ? "hidden w-[48%] md:block" : "hidden w-[42%] sm:block"
                }`}
              >
                <img
                  src={service.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
              </div>

              <div
                className={`relative ${
                  service.wide ? "md:max-w-[48%]" : "sm:max-w-[52%]"
                }`}
              >
                <div className="text-brand">
                  <ServiceIcon name={service.icon} className="size-7" />
                </div>
                <h3 className="mt-5 font-display text-[1.65rem] font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-[0.92rem] font-semibold text-brand transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-1"
                >
                  Learn More <ArrowRightIcon />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {bottom.map((service) => (
            <article
              key={service.title}
              className="reveal group relative min-h-[17rem] overflow-hidden rounded-[1.75rem] bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-black/[0.03]"
            >
              <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] overflow-hidden sm:block">
                <img
                  src={service.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
              </div>

              <div className="relative sm:max-w-[52%]">
                <div className="text-brand">
                  <ServiceIcon name={service.icon} className="size-7" />
                </div>
                <h3 className="mt-5 font-display text-[1.65rem] font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-[0.92rem] font-semibold text-brand transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-1"
                >
                  Learn More <ArrowRightIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeHelp() {
  return (
    <section id="who-we-help" className="pb-16 md:pb-24">
      <div className="container-page">
        <h2 className="reveal font-display text-[clamp(2rem,3.5vw,2.75rem)] font-semibold tracking-[-0.02em] text-ink">
          Who We Help
        </h2>
        <div className="reveal mt-8 flex flex-wrap gap-3">
          {whoWeHelp.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-white px-5 py-2.5 text-[0.92rem] font-medium text-ink shadow-[0_4px_16px_rgba(10,28,43,0.04)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="container-page">
        <h2 className="reveal font-display text-[clamp(2rem,3.5vw,2.75rem)] font-semibold tracking-[-0.02em] text-ink">
          How It Works
        </h2>

        <ol className="reveal relative mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-[1.15rem] hidden h-px md:block"
            style={{
              background:
                "linear-gradient(90deg, #d7d2c8 0%, #c4a574 45%, #7aa0a0 100%)",
            }}
            aria-hidden
          />
          {howItWorks.map((step, index) => (
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

function TrustBanner() {
  return (
    <section className="bg-navy py-16 text-white md:py-20">
      <div className="container-page">
        <h2 className="reveal font-display text-[clamp(1.9rem,3.2vw,2.6rem)] font-semibold tracking-[-0.02em]">
          Why Clients Trust Taxima
        </h2>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <div key={point} className="reveal border-t border-white/20 pt-5">
              <p className="text-[1.05rem] font-medium tracking-[-0.01em]">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="reveal space-y-10">
          <div>
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] font-semibold tracking-[-0.02em] text-ink">
              Who We Are
            </h2>
            <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed text-muted">
              Taxima CPA is a California CPA firm providing professional tax, accounting,
              bookkeeping, payroll, and business advisory services to individuals and small
              businesses.
            </p>
          </div>
          <div>
            <h3 className="font-display text-[clamp(1.7rem,2.8vw,2.2rem)] font-semibold tracking-[-0.02em] text-ink">
              What We Do
            </h3>
            <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed text-muted">
              We help individuals and business owners prepare accurate tax returns, maintain
              organized financial records, manage payroll, stay compliant with tax regulations,
              and make informed financial decisions throughout the year.
            </p>
            <a
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-brand transition-transform duration-500 ease-[var(--ease-out-soft)] hover:translate-x-1"
            >
              Read our full story <ArrowRightIcon />
            </a>
          </div>
        </div>

        <aside className="reveal rounded-[1.75rem] bg-white p-8 shadow-[var(--shadow-soft)] ring-1 ring-black/[0.03] md:p-10">
          <h3 className="font-display text-[1.85rem] font-semibold text-ink">Why Trust Us</h3>
          <ul className="mt-6 space-y-3.5">
            {whyTrustUs.map((item) => (
              <li key={item} className="flex gap-3 text-[0.95rem] leading-snug text-ink/85">
                <span className="mt-0.5 text-brand">
                  <CheckIcon className="size-4" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="container-page mt-10">
        <div className="reveal max-w-3xl rounded-[1.75rem] bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-black/[0.03] md:p-9">
          <div className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-brand-soft">
            <SparkIcon className="size-3.5" />
            More than tax prep
          </div>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/85">
            A CPA provides more than tax preparation. We help individuals and businesses with tax
            planning, accounting, bookkeeping, payroll, and year-round financial guidance. Our goal
            is to help you stay compliant, minimize taxes where legally possible, and make informed
            financial decisions.
          </p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="container-page">
        <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
              Google Reviews · 5.0
            </p>
            <h2 className="mt-2 font-display text-[clamp(2rem,3.5vw,2.75rem)] font-semibold tracking-[-0.02em] text-ink">
              What Clients Say
            </h2>
          </div>
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-brand transition-colors duration-300 hover:text-brand-soft"
          >
            Read reviews on Google
            <ArrowRightIcon className="size-4" />
          </a>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <a
              key={item.name}
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal flex h-full flex-col rounded-[1.75rem] bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-black/[0.03] transition-transform duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1 md:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-1 text-star">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="size-4" />
                  ))}
                </div>
                <span className="rounded-full bg-cream px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted">
                  Google
                </span>
              </div>
              <p className="mt-4 font-display text-4xl leading-none text-quote">“</p>
              <p className="mt-2 flex-1 text-[0.98rem] leading-relaxed text-muted">{item.quote}</p>
              <div className="mt-6">
                <p className="font-semibold text-ink">{item.name}</p>
                <p className="mt-0.5 text-[0.85rem] text-muted">{item.role}</p>
              </div>
            </a>
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
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="reveal">
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] font-semibold tracking-[-0.02em] text-ink text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[1.02rem] text-muted">
            Still unsure about something? See our{" "}
            <Link to="/faq" className="font-semibold text-brand underline-offset-4 hover:underline">
              full FAQ page
            </Link>{" "}
            or call us at{" "}
            <a href={PHONE_HREF} className="font-semibold text-brand hover:underline">
              {PHONE}
            </a>
            .
          </p>
        </div>

        <div className="reveal divide-y divide-line border-y border-line">
          {faqs.map((item, index) => {
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
                  <span className="text-brand">
                    {open ? <MinusIcon /> : <PlusIcon />}
                  </span>
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


export default function HomePage() {
  const rootRef = usePageReveal();

  return (
    <div ref={rootRef}>
      <Hero />
      <WhyChoose />
      <Services />
      <WhoWeHelp />
      <HowItWorks />
      <TrustBanner />
      <About />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
