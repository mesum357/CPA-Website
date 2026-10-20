import { useEffect } from "react";
import { ShieldCheckIcon } from "../components/Icons";
import { FinalCTA } from "../components/Layout";
import { EMAIL, PHONE } from "../data";
import { usePageReveal } from "../hooks/usePageReveal";

export default function PrivacyPolicyPage() {
  const rootRef = usePageReveal();

  useEffect(() => {
    document.title = "Privacy Policy | Taxima CPA";
  }, []);

  return (
    <div ref={rootRef}>
      <section className="relative isolate min-h-[46dvh] overflow-hidden">
        <img
          src="/images/resources-hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/50" />

        <div className="container-page relative flex min-h-[46dvh] items-center py-16 md:py-24">
          <div className="reveal max-w-2xl text-white">
            <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-white/70">
              <ShieldCheckIcon className="size-3.5" />
              Legal &amp; Privacy
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.4rem,4.8vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-balance">
              Privacy Policy &amp; Client Data Protection
            </h1>
            <p className="mt-4 max-w-lg text-[1.05rem] leading-relaxed text-white/80">
              How Taxima CPA collects, safeguards, and protects your confidential financial, tax, and
              personal information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <div className="reveal space-y-10 text-[1rem] leading-relaxed text-ink/85">
            <div>
              <p className="text-[0.82rem] font-semibold uppercase tracking-[0.15em] text-brand/70">
                Effective Date: January 1, 2026
              </p>
              <h2 className="mt-2 font-display text-[2rem] font-semibold text-ink">
                Our Commitment to Your Privacy
              </h2>
              <p className="mt-4">
                At Taxima CPA, we recognize that your privacy is of utmost importance. As a
                California-licensed Certified Public Accountant (CPA) firm, we are held to the
                highest standards of confidentiality, ethical conduct, and legal compliance under the
                California Accountancy Act, the American Institute of CPAs (AICPA) Code of Professional
                Conduct, and federal Gramm-Leach-Bliley Act (GLBA) regulations.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-cream p-6 md:p-8">
              <h3 className="font-display text-[1.4rem] font-semibold text-ink">
                Types of Information We Collect
              </h3>
              <p className="mt-3">
                In order to provide comprehensive tax preparation, bookkeeping, payroll, and business
                advisory services, we collect non-public personal information (NPI) from the following
                sources:
              </p>
              <ul className="mt-4 space-y-2 list-disc pl-5">
                <li>
                  <strong>Information you provide directly:</strong> Tax documents (Forms W-2, 1099,
                  K-1), social security numbers, dates of birth, bank account numbers, financial
                  statements, corporate records, and contact information.
                </li>
                <li>
                  <strong>Information about your transactions:</strong> Invoices, payment records,
                  payroll ledgers, and account balances provided for bookkeeping and tax reporting.
                </li>
                <li>
                  <strong>Third-party and government notices:</strong> Tax notices, correspondence with
                  the Internal Revenue Service (IRS), and state tax agencies (such as California FTB,
                  EDD, and CDTFA) shared with us to resolve tax matters.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-[1.6rem] font-semibold text-ink">
                Confidentiality &amp; Information Security
              </h3>
              <p className="mt-3">
                We maintain physical, electronic, and procedural safeguards that comply with federal and
                California state regulations to guard your non-public personal information:
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-white p-5 shadow-[var(--shadow-card)]">
                  <h4 className="font-semibold text-brand">Secure Digital Exchange</h4>
                  <p className="mt-2 text-[0.92rem] text-muted">
                    We utilize enterprise-grade encrypted client portals for uploading and storing
                    sensitive tax documents and tax returns.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-white p-5 shadow-[var(--shadow-card)]">
                  <h4 className="font-semibold text-brand">Restricted Access</h4>
                  <p className="mt-2 text-[0.92rem] text-muted">
                    Access to your confidential information is restricted strictly to authorized
                    personnel who require it to complete your engagements.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-[1.6rem] font-semibold text-ink">
                No Sale or Rental of Your Data
              </h3>
              <p className="mt-3">
                <strong>Taxima CPA does not sell, rent, lease, or disclose your personal or financial
                information to any third parties for marketing purposes.</strong>
              </p>
              <p className="mt-3">
                We disclose information only as permitted or required by law, such as:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>
                  Filing federal and state tax returns with the IRS, California Franchise Tax Board, and
                  authorized regulatory bodies upon your authorization.
                </li>
                <li>
                  Transmitting payroll filings to relevant agencies (EDD, SSA, IRS).
                </li>
                <li>
                  Complying with valid legal processes, subpoenas, or professional peer-review standards
                  governed by the California Board of Accountancy.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-[1.6rem] font-semibold text-ink">
                Retention of Tax and Accounting Records
              </h3>
              <p className="mt-3">
                We retain records relating to professional services that we perform to comply with
                professional guidelines and statutory requirements. Physical or digital records are
                securely archived and disposed of according to standard retention periods.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-cream p-6 md:p-8">
              <h3 className="font-display text-[1.4rem] font-semibold text-ink">
                Questions or Concerns?
              </h3>
              <p className="mt-3">
                If you have questions regarding our privacy practices or wish to update your records,
                please feel free to contact us directly:
              </p>
              <p className="mt-4 font-medium text-ink">
                Taxima CPA<br />
                Phone:{" "}
                <a href={`tel:${PHONE.replace(/-/g, "")}`} className="text-brand hover:underline">
                  {PHONE}
                </a>
                <br />
                Email:{" "}
                <a href={`mailto:${EMAIL}`} className="text-brand hover:underline">
                  {EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Have Questions About Working Together?"
        subtitle="Schedule a free consultation to discuss your tax, bookkeeping, or accounting needs."
        primaryLabel="Schedule a Free Consultation"
        secondaryLabel="Contact Taxima"
      />
    </div>
  );
}
