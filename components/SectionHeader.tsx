interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, light, center }: Props) {
  return (
    <div className={`max-w-none ${center ? "mx-auto text-center" : ""}`}>
      <span
        className={`section-tag ${
          light
            ? "border-white/10 bg-white/6 text-[rgba(255,255,255,0.8)]"
            : ""
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-5 font-display text-[clamp(2.2rem,4.8vw,4rem)] font-semibold leading-[1.02] ${
          light ? "text-white" : "text-[var(--text)]"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 max-w-3xl text-base leading-8 ${
            center ? "mx-auto" : ""
          } ${light ? "text-white/68" : "text-[var(--muted)]"}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
