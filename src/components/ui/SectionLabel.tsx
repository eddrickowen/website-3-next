interface SectionLabelProps {
  num?: string;
  label: string;
  dark?: boolean;
  className?: string;
}

/**
 * Consistent section label used across all pages.
 * Shows a numbered pill indicator + category text.
 * Example: [01] Services
 */
export default function SectionLabel({
  num,
  label,
  dark = false,
  className = "",
}: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 mb-6 ${className}`}
      aria-label={`Section: ${label}`}
    >
      {num && (
        <span
          className={`label-mono text-[10px] px-2 py-1 rounded-full border ${
            dark
              ? "border-accent/30 text-accent bg-accent/10"
              : "border-accent/50 text-accent bg-accent/10"
          }`}
        >
          {num}
        </span>
      )}
      <span
        className={`label-mono text-[11px] ${
          dark ? "text-dark-muted" : "text-foreground/50"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
