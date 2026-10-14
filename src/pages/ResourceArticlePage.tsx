import { useEffect } from "react";
import type { ReactNode } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  getResourceArticle,
  resourceArticles,
  taxDeadlines,
  type ResourceSection,
} from "../data/resources";
import { ArrowRightIcon, CheckIcon, ShieldCheckIcon } from "../components/Icons";
import { FinalCTA, PrimaryButton } from "../components/Layout";
import { usePageReveal } from "../hooks/usePageReveal";

function SectionBlock({ section }: { section: ResourceSection }) {
  if (section.type === "heading") {
    return (
      <h2 className="mt-10 font-display text-[clamp(1.55rem,2.5vw,1.95rem)] font-semibold tracking-[-0.02em] text-ink">
        {section.text}
      </h2>
    );
  }

  if (section.type === "paragraph") {
    return <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">{section.text}</p>;
  }

  if (section.type === "list") {
    return (
      <ul className="mt-5 space-y-3">
        {section.items.map((item) => (
          <li key={item} className="flex gap-3 text-[1.02rem] leading-relaxed text-ink">
            <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand/5 text-brand">
              <CheckIcon className="size-3.5" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <aside className="mt-8 rounded-[1.35rem] bg-brand/5 px-6 py-5 text-[1.02rem] leading-relaxed text-ink ring-1 ring-brand/10">
      {section.text}
    </aside>
  );
}

function ResourceShell({
  category,
  title,
  description,
  image,
  children,
  ctaHref,
  ctaLabel,
}: {
  category: string;
  title: string;
  description: string;
  image: string;
  children: ReactNode;
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <>
      <section className="relative isolate min-h-[52dvh] overflow-hidden">
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/80 to-ink/45" />
        <div className="container-page relative flex min-h-[52dvh] items-end py-16 md:py-20">
          <div className="reveal max-w-3xl pb-4 text-white">
            <p className="inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-white/70">
              <ShieldCheckIcon className="size-3.5" />
              {category}
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-balance">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-[1.08rem] leading-relaxed text-white/80">{description}</p>
          </div>
        </div>
      </section>

      <div className="border-b border-line bg-white">
        <div className="container-page flex flex-wrap items-center gap-3 py-4 text-[0.9rem] text-muted">
          <Link to="/resources" className="font-medium text-brand hover:text-brand-soft">
            Resources
          </Link>
          <span aria-hidden>/</span>
          <span className="text-ink">{title}</span>
        </div>
      </div>

      <article className="py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <div className="reveal mx-auto w-full max-w-3xl lg:mx-0">{children}</div>

          <aside className="reveal h-fit rounded-[1.5rem] bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-black/[0.03] lg:sticky lg:top-28">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand/60">
              Need personalized help?
            </p>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
              Taxima can review your situation and recommend clear next steps.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <PrimaryButton href={ctaHref}>{ctaLabel}</PrimaryButton>
              <PrimaryButton href="#contact" className="!bg-navy">
                Schedule a Consultation
              </PrimaryButton>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}

export function TaxDeadlinesPage() {
  const rootRef = usePageReveal();

  useEffect(() => {
    document.title = "Tax Deadlines Calendar | Taxima CPA";
  }, []);

  return (
    <div ref={rootRef}>
      <ResourceShell
        category="Tax Resources"
        title="Tax Deadlines Calendar"
        description="Key federal and California tax dates for individuals, business owners, and employers. Dates can vary by year and extension status—confirm the current-year deadlines for your situation."
        image="/images/tax-prep.jpg"
        ctaHref="/tax-services"
        ctaLabel="View Tax Services"
      >
        <p className="text-[1.05rem] leading-relaxed text-muted">
          Use this calendar as a planning reference. If you are unsure which deadlines apply to your
          entity type, payroll schedule, or extension status, Taxima can help you build a compliance
          calendar tailored to your business.
        </p>

        <div className="mt-10 overflow-hidden rounded-[1.5rem] bg-white shadow-[var(--shadow-card)] ring-1 ring-black/[0.03]">
          <div className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line bg-cream px-5 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-brand/70 md:grid-cols-[9rem_1.2fr_0.8fr] md:px-7">
            <span>Date</span>
            <span>Deadline</span>
            <span className="hidden md:block">Who it affects</span>
          </div>
          <ul className="divide-y divide-line">
            {taxDeadlines.map((item) => (
              <li
                key={`${item.date}-${item.title}`}
                className="grid grid-cols-[7.5rem_1fr] gap-4 px-5 py-5 md:grid-cols-[9rem_1.2fr_0.8fr] md:px-7"
              >
                <span className="text-[0.95rem] font-semibold text-brand">{item.date}</span>
                <div>
                  <p className="text-[1.02rem] font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">{item.detail}</p>
                  <p className="mt-2 text-[0.85rem] font-medium text-brand/70 md:hidden">
                    {item.audience}
                  </p>
                </div>
                <p className="hidden text-[0.95rem] text-muted md:block">{item.audience}</p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="mt-8 rounded-[1.35rem] bg-brand/5 px-6 py-5 text-[1.02rem] leading-relaxed text-ink ring-1 ring-brand/10">
          Deadlines can shift for weekends, holidays, and disaster relief. Always verify the current
          IRS and California Franchise Tax Board dates for your filing year.
        </aside>
      </ResourceShell>

      <RelatedResources currentSlug="tax-deadlines-calendar" />
      <FinalCTA
        title="Need help staying ahead of deadlines?"
        subtitle="Schedule a complimentary consultation and we'll map the tax and compliance dates that apply to you."
        primaryLabel="Schedule a Free Consultation"
        secondaryLabel="Contact Us Today"
      />
    </div>
  );
}

function RelatedResources({ currentSlug }: { currentSlug: string }) {
  const related = resourceArticles.filter((article) => article.slug !== currentSlug).slice(0, 3);

  return (
    <section className="border-t border-line bg-white py-16 md:py-20">
      <div className="container-page">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand/60">
              Keep reading
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.8rem,3vw,2.4rem)] font-semibold text-ink">
              Related resources
            </h2>
          </div>
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-[0.92rem] font-semibold text-brand hover:text-brand-soft"
          >
            All resources
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {related.map((article) => (
            <Link
              key={article.slug}
              to={`/resources/${article.slug}`}
              className="reveal group rounded-[1.5rem] bg-cream p-6 ring-1 ring-black/[0.03] transition-shadow duration-300 hover:shadow-[var(--shadow-card)]"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand/60">
                {article.category}
              </p>
              <h3 className="mt-3 font-display text-[1.25rem] font-semibold leading-snug text-ink group-hover:text-brand">
                {article.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-[0.92rem] leading-relaxed text-muted">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ResourceArticlePage() {
  const { slug } = useParams();
  const article = slug ? getResourceArticle(slug) : undefined;
  const rootRef = usePageReveal();

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Taxima CPA`;
    }
  }, [article]);

  if (!article) {
    return <Navigate to="/resources" replace />;
  }

  return (
    <div ref={rootRef}>
      <ResourceShell
        category={article.category}
        title={article.title}
        description={article.description}
        image={article.image}
        ctaHref={article.ctaHref}
        ctaLabel={article.ctaLabel}
      >
        <p className="text-[0.88rem] font-medium text-brand/70">{article.readTime}</p>
        {article.sections.map((section, index) => (
          <SectionBlock key={`${section.type}-${index}`} section={section} />
        ))}
      </ResourceShell>

      <RelatedResources currentSlug={article.slug} />
      <FinalCTA
        title="Ready for personalized guidance?"
        subtitle="Whether you need catch-up filing, tax planning, or business formation support, Taxima is here to help."
        primaryLabel="Schedule a Free Consultation"
        secondaryLabel="Contact Us Today"
      />
    </div>
  );
}
