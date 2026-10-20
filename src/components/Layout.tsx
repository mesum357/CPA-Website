import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  EMAIL,
  footerQuickLinks,
  footerResources,
  footerServices,
  navLinks,
  officeHours,
  PHONE,
  PHONE_HREF,
  serviceMenuItems,
  socialLinks,
} from "../data";
import { ChevronDownIcon, PhoneIcon, SocialIcon } from "./Icons";

export function AppLink({
  href,
  children,
  className = "",
  onClick,
  target,
  rel,
  role,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  role?: string;
}) {
  const location = useLocation();

  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:");

  if (isExternal) {
    const isBlank = href.startsWith("http");
    return (
      <a
        href={href}
        target={target ?? (isBlank ? "_blank" : undefined)}
        rel={rel ?? (isBlank ? "noopener noreferrer" : undefined)}
        className={className}
        onClick={onClick}
        role={role}
      >
        {children}
      </a>
    );
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.();

    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const [targetPathRaw, targetHash] = href.split("#");
    const targetPath = targetPathRaw || "/";
    const currentPath = location.pathname;

    const isCurrentPage =
      targetPath === currentPath ||
      (targetPath === "" && currentPath === "/") ||
      (targetPath === "/" && currentPath === "/");

    if (isCurrentPage) {
      if (targetHash) {
        e.preventDefault();
        const el = document.getElementById(targetHash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        if (location.hash !== `#${targetHash}`) {
          window.history.pushState(null, "", href);
        }
      } else {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <Link to={href} onClick={handleClick} className={className} role={role}>
      {children}
    </Link>
  );
}

export function Logo() {
  return (
    <Link to="/" className="group shrink-0" aria-label="Taxima CPA home">
      <img
        src="/logo.png"
        alt="Taxima CPA"
        className="h-11 w-auto object-contain sm:h-12"
        width={48}
        height={48}
      />
    </Link>
  );
}

export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <AppLink
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-brand px-6 py-3.5 text-[0.92rem] font-semibold text-white shadow-[var(--shadow-btn)] transition-all duration-500 ease-[var(--ease-out-soft)] hover:bg-brand-soft hover:-translate-y-0.5 active:scale-[0.98] ${className}`}
    >
      {children}
    </AppLink>
  );
}

export function SecondaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <AppLink
      href={href}
      className={`inline-flex items-center justify-center rounded-full border border-line bg-white/80 px-6 py-3.5 text-[0.92rem] font-semibold text-brand shadow-[0_8px_24px_rgba(10,28,43,0.06)] transition-all duration-500 ease-[var(--ease-out-soft)] hover:bg-white hover:-translate-y-0.5 active:scale-[0.98] ${className}`}
    >
      {children}
    </AppLink>
  );
}

function ServicesDropdown({ onNavigate }: { onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const serviceActive =
    location.pathname.startsWith("/tax-services") ||
    location.pathname.startsWith("/bookkeeping") ||
    location.pathname.startsWith("/payroll") ||
    location.pathname.startsWith("/business-services") ||
    location.pathname.startsWith("/packages") ||
    location.pathname.startsWith("/life-insurance");

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onPointer = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className={`inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-[0.84rem] font-medium transition-colors duration-300 2xl:text-[0.9rem] ${
          serviceActive || open ? "text-brand" : "text-ink/80 hover:text-brand"
        }`}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
      >
        Services
        <ChevronDownIcon
          className={`size-3.5 transition-transform duration-300 ease-[var(--ease-out-soft)] ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute left-1/2 top-[calc(100%+0.75rem)] z-50 w-64 -translate-x-1/2 overflow-hidden rounded-2xl bg-white p-2 shadow-[var(--shadow-soft)] ring-1 ring-black/[0.06] transition-all duration-300 ease-[var(--ease-out-soft)] ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
        role="menu"
      >
        {serviceMenuItems.map((item) => (
          <AppLink
            key={item.label}
            href={item.href}
            role="menuitem"
            className="block rounded-xl px-3.5 py-2.5 text-[0.9rem] font-medium text-ink/85 transition-colors duration-200 hover:bg-cream hover:text-brand"
            onClick={() => {
              setOpen(false);
              onNavigate?.();
            }}
          >
            {item.label}
          </AppLink>
        ))}
      </div>
    </div>
  );
}

function NavItem({
  link,
  onClick,
  className,
}: {
  link: (typeof navLinks)[number];
  onClick?: () => void;
  className?: string;
}) {
  const location = useLocation();

  if ("hasMenu" in link && link.hasMenu) {
    return <ServicesDropdown onNavigate={onClick} />;
  }

  const isHash = link.href.includes("#");

  if (!isHash && link.href.startsWith("/")) {
    return (
      <NavLink
        to={link.href}
        onClick={(e) => {
          onClick?.();
          if (location.pathname === link.href) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className={({ isActive }) =>
          `${className ?? ""} ${isActive ? "text-brand" : "text-ink/80 hover:text-brand"}`
        }
      >
        {link.label}
      </NavLink>
    );
  }

  return (
    <AppLink href={link.href} onClick={onClick} className={className}>
      {link.label}
    </AppLink>
  );
}

function MobileServices({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-base font-medium text-ink hover:bg-white"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        Services
        <ChevronDownIcon
          className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open ? (
        <div className="mb-1 ml-3 space-y-1 border-l border-line pl-3">
          {serviceMenuItems.map((item) => (
            <AppLink
              key={item.label}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-[0.95rem] font-medium text-ink/80 hover:bg-white hover:text-brand"
              onClick={onNavigate}
            >
              {item.label}
            </AppLink>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const desktopLinks = navLinks.filter((link) => link.label !== "Contact");

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-ink text-white">
        <div className="container-page flex h-10 items-center justify-between gap-3 text-[0.78rem] sm:text-[0.8rem]">
          <a
            href={PHONE_HREF}
            className="inline-flex min-w-0 items-center gap-2 truncate opacity-95 hover:opacity-100"
          >
            <PhoneIcon className="size-3.5 shrink-0" />
            <span className="truncate">
              Call us: <span className="font-medium">{PHONE}</span>
            </span>
          </a>
          <p className="hidden items-center gap-2 sm:inline-flex">
            <span className="size-1.5 shrink-0 rounded-full bg-cta-blue" />
            Now accepting new clients
          </p>
        </div>
      </div>

      <div
        className={`border-b border-transparent bg-cream/90 backdrop-blur-xl transition-shadow duration-500 ${
          scrolled ? "border-line shadow-[0_8px_30px_rgba(10,28,43,0.06)]" : ""
        }`}
      >
        <div className="container-page flex h-[4.25rem] items-center justify-between gap-3 sm:h-[4.6rem] sm:gap-4">
          <Logo />

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-x-4 gap-y-1 xl:flex 2xl:gap-x-6"
            aria-label="Primary"
          >
            {desktopLinks.map((link) => (
              <NavItem
                key={link.label}
                link={link}
                className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-[0.84rem] font-medium transition-colors duration-300 text-ink/80 hover:text-brand 2xl:text-[0.9rem]"
              />
            ))}
          </nav>

          <div className="hidden shrink-0 xl:block">
            <PrimaryButton href="/#contact" className="px-4 py-2.5 text-[0.82rem] 2xl:px-5 2xl:py-3 2xl:text-[0.85rem]">
              Free Consultation
            </PrimaryButton>
          </div>

          <button
            type="button"
            className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-white sm:size-11 xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-ink transition-all duration-500 ease-[var(--ease-out-soft)] ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-[1.5px] w-full bg-ink transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-ink transition-all duration-500 ease-[var(--ease-out-soft)] ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>

        {open ? (
          <div className="border-t border-line bg-cream px-5 pb-6 pt-4 xl:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link) =>
                "hasMenu" in link && link.hasMenu ? (
                  <MobileServices key={link.label} onNavigate={() => setOpen(false)} />
                ) : (
                  <NavItem
                    key={link.label}
                    link={link}
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-1 rounded-xl px-3 py-2.5 text-base font-medium text-ink hover:bg-white"
                  />
                ),
              )}
              <PrimaryButton href="/#contact" className="mt-3 w-full">
                Schedule a Free Consultation
              </PrimaryButton>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink-deep pt-16 text-white/70">
      <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-white">
            Services
          </h3>
          <ul className="mt-5 space-y-2.5 text-[0.92rem]">
            {footerServices.map((s) => (
              <li key={s.label}>
                <AppLink
                  href={s.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {s.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-white">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-2.5 text-[0.92rem]">
            {footerQuickLinks.map((item) => (
              <li key={item.label}>
                <AppLink
                  href={item.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-white">
            Contact
          </h3>
          <ul className="mt-5 space-y-2.5 text-[0.92rem]">
            <li>
              <a href={PHONE_HREF} className="hover:text-white transition-colors duration-200">
                {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors duration-200">
                {EMAIL}
              </a>
            </li>
          </ul>
          <h4 className="mt-8 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-white">
            Office Hours
          </h4>
          <ul className="mt-4 space-y-0 text-[0.88rem]">
            {officeHours.map((row) => (
              <li
                key={row.day}
                className="flex items-center justify-between gap-4 border-b border-white/10 py-2"
              >
                <span>{row.day}</span>
                <span className="text-white/55">{row.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-white">
            Resources
          </h3>
          <ul className="mt-5 space-y-2.5 text-[0.92rem]">
            {footerResources.map((item) => (
              <li key={item.label}>
                <AppLink
                  href={item.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </AppLink>
              </li>
            ))}
          </ul>
          <h4 className="mt-8 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-white">
            Follow
          </h4>
          <div className="mt-4 flex gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="flex size-10 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/10 hover:text-white"
              >
                <SocialIcon name={item.name} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-page mt-12 flex flex-col gap-3 border-t border-white/10 py-6 text-[0.85rem] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Taxima CPA. All rights reserved.</p>
        <AppLink
          href="/privacy-policy"
          className="hover:text-white transition-colors duration-200"
        >
          Privacy Policy
        </AppLink>
      </div>
    </footer>
  );
}

export function FinalCTA({
  title = "Ready to Simplify Your Taxes and Accounting?",
  subtitle = "Whether you need tax preparation, bookkeeping, payroll, or business guidance, Taxima is here to help.",
  primaryLabel = "Schedule a Consultation",
  secondaryLabel = "Contact Us Today",
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <section id="contact" className="bg-navy py-20 text-center text-white md:py-24">
      <div className="container-page max-w-3xl">
        <h2 className="reveal font-display text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.02em] text-balance">
          {title}
        </h2>
        <p className="reveal mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed text-white/75">
          {subtitle}
        </p>
        <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center rounded-full bg-cta-blue px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_12px_30px_rgba(74,128,192,0.35)] transition-all duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]"
          >
            {primaryLabel}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3.5 text-[0.95rem] font-semibold text-white ring-1 ring-white/15 transition-all duration-500 ease-[var(--ease-out-soft)] hover:bg-white/15 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
