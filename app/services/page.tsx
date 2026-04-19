import Link from "next/link";
import { CalendarCheck, Clock3, MoveRight, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ServiceMark from "@/components/ServiceMark";
import { services } from "@/lib/data";

const servicePrinciples = [
  {
    title: "Low-friction choices",
    description: "Pricing is easy to read, routes are simple, and each part of the compound is clear about what comes next.",
    icon: CalendarCheck,
  },
  {
    title: "Designed to stack",
    description: "Most visits work better when you combine two services, so the layout encourages that kind of flow.",
    icon: Clock3,
  },
  {
    title: "Reliable everyday stop",
    description: "The experience is practical first, then elevated with better design, better rhythm, and fewer unnecessary steps.",
    icon: ShieldCheck,
  },
];

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="section-tag">Everything in one place</span>
              <h1 className="mt-5 font-display text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.95] text-[var(--text)]">
                Five services, one compound, and a much easier visit.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                The Hub is not about cramming unrelated businesses together. It is about making the combination feel useful, comfortable, and easy to navigate the first time you come in.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/book" className="button-primary">
                  Start with a booking
                  <MoveRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="button-secondary">
                  Ask about availability
                </Link>
              </div>
            </div>

            <div className="glass-panel rounded-[34px] p-6 sm:p-8">
              <div className="label-muted text-[var(--accent-strong)]">How it feels on arrival</div>
              <div className="mt-4 space-y-4">
                {servicePrinciples.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="rounded-[26px] border border-[rgba(19,33,45,0.08)] bg-white/72 p-5">
                      <div className="flex items-start gap-4">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h2 className="text-base font-semibold text-[var(--text)]">{item.title}</h2>
                          <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-tight">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Service lineup"
            title="A modern compound works best when each part stands on its own and still plays well with the rest."
            subtitle="Each card below is built to answer the two most important questions quickly: what it is, and how it fits into the rest of your stop."
          />

          <div className="mt-10 grid gap-5">
            {services.map((service) => (
              <article
                key={service.id}
                className={`grid gap-6 rounded-[36px] p-6 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] ${
                  service.featured ? "dark-panel text-white" : "glass-panel"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <ServiceMark
                        serviceId={service.id}
                        className={service.featured ? "border-white/10 bg-white/8 text-[var(--accent)] shadow-none" : ""}
                      />
                      <div>
                        <div
                          className={`text-sm font-semibold uppercase tracking-[0.18em] ${
                            service.featured ? "text-white/44" : "text-[var(--accent-strong)]"
                          }`}
                        >
                          {service.tagline}
                        </div>
                        <h2
                          className={`mt-2 font-display text-[clamp(2.1rem,4vw,3.4rem)] font-semibold ${
                            service.featured ? "text-white" : "text-[var(--text)]"
                          }`}
                        >
                          {service.name}
                        </h2>
                      </div>
                    </div>
                    <Link
                      href={service.href}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                        service.featured
                          ? "border border-white/10 bg-white/8 text-white"
                          : "border border-[rgba(19,33,45,0.08)] bg-white/80 text-[var(--text)]"
                      }`}
                    >
                      {service.cta}
                      <MoveRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <p className={`mt-6 max-w-2xl text-base leading-8 ${service.featured ? "text-white/70" : "text-[var(--muted)]"}`}>
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {service.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${
                          service.featured
                            ? "border border-white/10 bg-white/6 text-white/82"
                            : "border border-[rgba(19,33,45,0.08)] bg-white/70 text-[var(--text)]"
                        }`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`rounded-[30px] p-6 ${
                    service.featured
                      ? "border border-white/10 bg-white/6"
                      : "border border-[rgba(19,33,45,0.08)] bg-[var(--surface-strong)]"
                  }`}
                >
                  <div
                    className={`text-sm font-semibold uppercase tracking-[0.18em] ${
                      service.featured ? "text-white/40" : "text-[var(--muted)]"
                    }`}
                  >
                    Useful at a glance
                  </div>
                  <div className="mt-5 space-y-3">
                    {service.pricing.map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-start justify-between gap-6 rounded-[22px] px-4 py-4 ${
                          service.featured ? "bg-white/4" : "bg-white/72"
                        }`}
                      >
                        <div>
                          <div className={`text-sm font-semibold ${service.featured ? "text-white" : "text-[var(--text)]"}`}>
                            {item.label}
                          </div>
                          {item.note ? (
                            <div className={`mt-1 text-sm ${service.featured ? "text-white/60" : "text-[var(--muted)]"}`}>
                              {item.note}
                            </div>
                          ) : null}
                        </div>
                        <div className={`shrink-0 text-sm font-semibold ${service.featured ? "text-[var(--accent)]" : "text-[var(--accent-strong)]"}`}>
                          {item.price === null ? "Varies" : `GHS ${item.price}`}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
