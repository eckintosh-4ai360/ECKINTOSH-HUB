import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Clock3,
  MapPin,
  MessagesSquare,
  MoveRight,
  Sparkles,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ServiceMark from "@/components/ServiceMark";
import { compoundJourneys, homeStats, quickLinks, services } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="section-space">
        <div className="container-shell">
          <div className="grid items-start gap-8 lg:grid-cols-[1.14fr_0.86fr] lg:gap-14">
            <div className="space-y-8">
              <span className="section-tag">Mumford lifestyle compound</span>
              <div className="max-w-3xl lg:max-w-4xl">
                <h1 className="font-display text-[clamp(3.4rem,7.4vw,6.6rem)] font-semibold leading-[0.94] tracking-tight text-[var(--text)]">
                  One stop for a clean cut, great food, games, and quick errands.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                  The Hub brings together the useful parts of a day out and the fun parts of a day out, so you can move through your stop without feeling scattered.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/book" className="button-primary">
                  Book a cut
                  <MoveRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="button-secondary">
                  Explore the compound
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {homeStats.map((item) => (
                  <div key={item.label} className="surface-panel rounded-[28px] p-5">
                    <div className="font-display text-4xl font-semibold text-[var(--text)]">
                      {item.value}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-panel relative isolate overflow-hidden rounded-[36px] p-6 sm:p-8">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[rgba(214,118,36,0.14)] blur-3xl" />
                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[rgba(29,115,117,0.12)] blur-3xl" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="label-muted text-[var(--accent-strong)]">Today at The Hub</span>
                      <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-[var(--text)]">
                        Build the stop that fits your day.
                      </h2>
                    </div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                      <Sparkles className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="mt-6 space-y-3">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={service.href}
                        className="group flex items-start gap-4 rounded-[28px] border border-[rgba(19,33,45,0.08)] bg-white/70 p-4 transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        <ServiceMark serviceId={service.id} />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-base font-semibold text-[var(--text)]">{service.name}</h3>
                              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                                {service.summary}
                              </p>
                            </div>
                            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[var(--accent-strong)] transition-transform duration-200 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[24px] bg-[var(--surface-strong)] p-4">
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                          <Clock3 className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-[var(--text)]">Open daily rhythm</div>
                          <div className="mt-1 text-sm leading-6 text-[var(--muted)]">
                            7:00 AM to 9:00 PM most days, with a softer Sunday schedule.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[24px] bg-[var(--surface-strong)] p-4">
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(29,115,117,0.12)] text-[var(--accent-cool)]">
                          <MessagesSquare className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-[var(--text)]">Fast confirmations</div>
                          <div className="mt-1 text-sm leading-6 text-[var(--muted)]">
                            Booking requests are designed to feel quick and conversational.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accent-panel absolute -bottom-6 -left-2 hidden rounded-[28px] p-4 shadow-[0_22px_48px_rgba(19,33,45,0.08)] sm:block">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-[var(--accent-strong)]">
                    <CalendarCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-[var(--text)]">Walk in or book ahead</div>
                    <div className="text-sm text-[var(--muted)]">Use the flow that feels easiest.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-tight">
        <div className="container-shell">
          <SectionHeader
            eyebrow="What makes it work"
            title="Every part of the compound is designed to be easy to understand and easy to combine."
            subtitle="You can come with a clear plan or improvise on the spot. The layout, pricing, and service mix are built to support both."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className={`rounded-[32px] p-6 ${
                  service.featured ? "dark-panel text-white" : "glass-panel"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <ServiceMark
                    serviceId={service.id}
                    className={service.featured ? "border-white/10 bg-white/8 text-[var(--accent)]" : ""}
                  />
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
                      service.featured
                        ? "bg-white/8 text-white/76"
                        : "bg-[var(--accent-soft)] text-[var(--accent-strong)]"
                    }`}
                  >
                    {service.tagline}
                  </span>
                </div>
                <h3
                  className={`mt-6 font-display text-3xl font-semibold ${
                    service.featured ? "text-white" : "text-[var(--text)]"
                  }`}
                >
                  {service.name}
                </h3>
                <p className={`mt-3 text-sm leading-7 ${service.featured ? "text-white/70" : "text-[var(--muted)]"}`}>
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className={`rounded-full px-3 py-2 text-sm ${
                        service.featured
                          ? "border border-white/10 bg-white/6 text-white/80"
                          : "border border-[rgba(19,33,45,0.08)] bg-white/70 text-[var(--text)]"
                      }`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <Link
                  href={service.href}
                  className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold ${
                    service.featured ? "text-[var(--accent)]" : "text-[var(--accent-strong)]"
                  }`}
                >
                  {service.cta}
                  <MoveRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-tight">
        <div className="container-shell">
          <div className="dark-panel rounded-[40px] p-6 text-white sm:p-8 lg:p-10">
            <SectionHeader
              eyebrow="Plan the flow"
              title="A better stop usually means combining one useful thing with one enjoyable thing."
              subtitle="These common visit patterns make the whole place feel more intuitive, especially if it is your first time in."
              light
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {compoundJourneys.map((journey) => (
                <article key={journey.title} className="rounded-[30px] border border-white/8 bg-white/5 p-6">
                  <h3 className="font-display text-3xl font-semibold text-white">{journey.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{journey.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {journey.services.map((serviceId) => {
                      const service = services.find((entry) => entry.id === serviceId);

                      if (!service) {
                        return null;
                      }

                      return (
                        <span
                          key={service.id}
                          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white/82"
                        >
                          <ServiceMark
                            serviceId={service.id}
                            className="h-10 w-10 border-white/10 bg-white/10 text-[var(--accent)] shadow-none"
                          />
                          {service.name}
                        </span>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-tight">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="accent-panel rounded-[36px] p-6 sm:p-8">
              <div className="max-w-xl">
                <span className="label-muted text-[var(--accent-strong)]">Start somewhere easy</span>
                <h2 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.02] text-[var(--text)]">
                  New here? Start with the part of The Hub you already know you need.
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                  The rest of the experience is close enough to discover naturally. That is the point of the place: fewer decisions, better flow.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="button-primary">
                  Ask a question
                  <MoveRight className="h-4 w-4" />
                </Link>
                <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(19,33,45,0.08)] bg-white/72 px-4 py-3 text-sm font-semibold text-[var(--text)]">
                  <MapPin className="h-4 w-4 text-[var(--accent-strong)]" />
                  Mumford, Ghana
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="glass-panel rounded-[30px] p-6 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text)]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                    </div>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                      <MoveRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
