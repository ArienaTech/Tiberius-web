import Link from "next/link";
import { mailto } from "@/lib/mailto";

export function MailtoBtn({ subject, label, to }: { subject: string; label: string; to?: string }) {
  return (
    <a className="btn-pill" href={mailto(subject, to)}>
      <span className="btn-fill"></span>
      <span className="btn-label">{label}</span>
      <span className="btn-arrow">→</span>
    </a>
  );
}

export function LinkBtn({ href, label }: { href: string; label: string }) {
  return (
    <Link className="btn-pill" href={href}>
      <span className="btn-fill"></span>
      <span className="btn-label">{label}</span>
      <span className="btn-arrow">→</span>
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  lede,
  ctaLabel,
  ctaSubject,
  to,
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  lede: string;
  ctaLabel: string;
  ctaSubject: string;
  to?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="page-hero">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1 className="display page-title">{title}</h1>
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
      <p className="lede">{lede}</p>
      <div className="page-hero-ctas">
        <MailtoBtn subject={ctaSubject} label={ctaLabel} to={to} />
        {secondaryLabel && secondaryHref && <LinkBtn href={secondaryHref} label={secondaryLabel} />}
      </div>
    </section>
  );
}

export function BlockHead({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="block-head">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="display block-title">{title}</h2>
    </div>
  );
}

export function CardGrid({
  items,
  columns = 3,
}: {
  items: { title: string; desc: string }[];
  columns?: number;
}) {
  return (
    <div className="card-grid" style={{ ["--cols" as string]: columns }}>
      {items.map((it, i) => (
        <div className="card-cell" key={i}>
          <b>{it.title}</b>
          <p>{it.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function ProcessSteps({
  steps,
}: {
  steps: { phase?: string; title: string; desc: string; count?: string }[];
}) {
  const columns = Math.min(steps.length, 4);
  return (
    <div className="process-grid" style={{ ["--cols" as string]: columns }}>
      {steps.map((s, i) => (
        <div className="process-cell" key={i}>
          <div>
            {s.phase && <span className="process-phase">{s.phase}</span>}
            <h3>{s.title}</h3>
          </div>
          <p>{s.desc}</p>
          {s.count && <span className="process-count">{s.count}</span>}
        </div>
      ))}
    </div>
  );
}

export function StatsRow({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="stats-row">
      {stats.map((s, i) => (
        <div className="stat" key={i}>
          <div className="stat-num">
            <em>{s.value}</em>
          </div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function TwoColList({
  left,
  right,
}: {
  left: { title: string; items: string[] };
  right: { title: string; items: string[] };
}) {
  return (
    <div className="two-col-list">
      <div>
        <h4>{left.title}</h4>
        <ul>
          {left.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>{right.title}</h4>
        <ul>
          {right.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function CtaBand({
  eyebrow,
  title,
  lede,
  ctaLabel,
  ctaSubject,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  ctaLabel: string;
  ctaSubject: string;
}) {
  return (
    <section className="cta-band">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="display cta-title">{title}</h2>
      {lede && <p className="lede">{lede}</p>}
      <MailtoBtn subject={ctaSubject} label={ctaLabel} />
    </section>
  );
}

export function ContentSection({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="content-section">
      {children}
    </section>
  );
}
