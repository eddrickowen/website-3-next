interface GlowOrbProps {
  color?: string;
  size?: number | string;
  opacity?: number;
  className?: string;
  animate?: boolean;
}

/**
 * Decorative ambient glow orb — absolute-positioned radial gradient.
 * Place inside a `relative overflow-hidden` container.
 */
export default function GlowOrb({
  color = "rgba(62, 207, 142, 0.35)",
  size = 600,
  opacity = 1,
  className = "",
  animate = false,
}: GlowOrbProps) {
  const sizeStr = typeof size === "number" ? `${size}px` : size;

  return (
    <div
      className={`pointer-events-none absolute rounded-full ${animate ? "animate-glow-pulse" : ""} ${className}`}
      style={{
        width: sizeStr,
        height: sizeStr,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        transform: "translate(-50%, -50%)",
        opacity,
      }}
      aria-hidden="true"
    />
  );
}
