import type { ReactElement } from "react";

type IconProps = {
  className?: string;
};

export function PhoneIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7.5 3.75h2.2l1.1 4.1-1.7 1.1a12.2 12.2 0 0 0 5.95 5.95l1.1-1.7 4.1 1.1v2.2c0 .9-.7 1.7-1.6 1.75C9.9 18.7 5.3 14.1 4.75 5.35c-.05-.9.85-1.6 1.75-1.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ className = "size-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="m5.5 12.5 4.2 4.2 8.8-9.4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "size-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3.5 5.5 6.2v5.1c0 4.2 2.8 7.9 6.5 9.2 3.7-1.3 6.5-5 6.5-9.2V6.2L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2.1 2.1L15.4 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className = "size-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ className = "size-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="m12 3.2 2.6 5.4 5.9.7-4.4 4.1 1.2 5.8L12 16.3l-5.3 2.9 1.2-5.8-4.4-4.1 5.9-.7L12 3.2Z" />
    </svg>
  );
}

export function PlusIcon({ className = "size-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function MinusIcon({ className = "size-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function SparkIcon({ className = "size-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.5 13.8 9l6.7 1.2-5.1 4.6 1.4 6.7L12 18.2l-4.8 3.3 1.4-6.7-5.1-4.6L10.2 9 12 2.5Z" />
    </svg>
  );
}

const servicePaths: Record<string, string> = {
  document:
    "M8 4.5h6.2L16.5 7v12.5H8V4.5Zm6 0V7h2.3M10 11h5M10 14h5M10 17h3.5",
  book: "M6.5 6.5c1.4-.8 2.9-1.2 4.5-1.2v12.4c-1.6 0-3.1.4-4.5 1.2V6.5Zm11 0c-1.4-.8-2.9-1.2-4.5-1.2v12.4c1.6 0 3.1.4 4.5 1.2V6.5Z",
  wallet:
    "M5 8.5h14v9H5v-9Zm0 0V7a2 2 0 0 1 2-2h8M16.5 13h.01",
  building:
    "M6.5 19.5V6.8L12 4.5l5.5 2.3v12.7M9.5 19.5v-4h5v4M9.5 10h.01M12 10h.01M14.5 10h.01M9.5 13h.01M12 13h.01M14.5 13h.01",
  chart:
    "M5 18.5h14M7.5 15.5v-4M12 15.5v-7M16.5 15.5v-5.5M9.5 8.5l2.8-2.8 2.4 2.4 3.3-3.6",
  alert:
    "M12 4.5 20 18.5H4L12 4.5Zm0 5.2v4M12 16.4h.01",
};

export function ServiceIcon({ name, className = "size-6" }: { name: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={servicePaths[name] ?? servicePaths.document}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SocialIcon({ name, className = "size-5" }: { name: string; className?: string }) {
  const paths: Record<string, ReactElement> = {
    facebook: <path d="M14 9h2.5V6.2C16 5 15.2 4.5 13.7 4.5H11.2C9 4.5 7.5 5.9 7.5 8.4V10H5.5v3H7.5v6.5h3.2V13H13l1-3h-3.3V8.6c0-.7.2-1.1 1.1-1.1H14Z" fill="currentColor" />,
    instagram: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="16.2" cy="7.8" r="0.9" fill="currentColor" />
      </>
    ),
    telegram: (
      <path
        d="M5.5 11.8 18.2 6.4c.6-.3 1.2.2 1 0.9l-2.2 10.3c-.15.7-.8.9-1.3.6l-3.1-2.3-1.7 1.7c-.2.2-.5.1-.6-.2l-.3-2.7 6-5.3c.2-.2 0-.4-.3-.3l-7.4 4.5-2.5-.8c-.7-.2-.7-1.1.1-1.4Z"
        fill="currentColor"
      />
    ),
    linkedin: (
      <path
        d="M7.2 9.3H4.6V19h2.6V9.3ZM5.9 5.2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM19.4 19h-2.6v-5.1c0-1.4-.5-2.3-1.7-2.3-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V19h-2.6v-9.7h2.6v1.3c.4-.7 1.2-1.6 2.9-1.6 2.1 0 3.7 1.4 3.7 4.4V19Z"
        fill="currentColor"
      />
    ),
  };

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      {paths[name]}
    </svg>
  );
}
