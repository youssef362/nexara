/**
 * Nexara brand lockup — geometric "N" monogram + wordmark.
 *
 * The monogram is a self-contained inline SVG (indigo→violet gradient that
 * matches the site accents, with a small "node" accent evoking a network/nexus).
 * The wordmark uses the already-loaded Sora typeface so it stays crisp at any
 * size and always renders the brand name correctly — no image dependency.
 */
import { useId } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** Extra classes on the outer lockup wrapper. */
  className?: string;
  /** Show the "NEXARA" wordmark next to the mark. Default: true. */
  showWordmark?: boolean;
  /** Size preset controlling the mark + wordmark scale. */
  size?: "sm" | "md" | "lg";
}

const SIZES = {
  sm: { mark: "h-6 w-6", word: "text-sm tracking-[0.22em]", gap: "gap-2" },
  md: { mark: "h-8 w-8", word: "text-lg tracking-[0.2em]", gap: "gap-2.5" },
  lg: { mark: "h-10 w-10", word: "text-2xl tracking-[0.18em]", gap: "gap-3" },
} as const;

export function NexaraMark({ className }: { className?: string }) {
  const id = useId();
  const grad = `nexara-grad-${id}`;
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={grad}
          x1="4"
          y1="4"
          x2="44"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#818CF8" />
          <stop offset="0.5" stopColor="#A78BFA" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      {/* Rounded tile */}
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        rx="13"
        fill="#0B0D14"
        stroke={`url(#${grad})`}
        strokeWidth="1.5"
        strokeOpacity="0.55"
      />
      {/* "N" — two verticals + diagonal */}
      <path d="M14 14h5v20h-5z" fill={`url(#${grad})`} />
      <path d="M29 14h5v20h-5z" fill={`url(#${grad})`} />
      <path d="M14 14 19 14 34 34 29 34Z" fill={`url(#${grad})`} />
      {/* Node accent */}
      <circle cx="33.5" cy="14.5" r="2.6" fill="#fff" />
    </svg>
  );
}

export default function Logo({
  className,
  showWordmark = true,
  size = "md",
}: LogoProps) {
  const s = SIZES[size];
  return (
    <span className={cn("inline-flex items-center", s.gap, className)}>
      <NexaraMark className={s.mark} />
      {showWordmark && (
        <span
          className={cn(
            "font-[Sora] font-semibold text-white leading-none",
            s.word
          )}
        >
          NEXARA
        </span>
      )}
    </span>
  );
}
