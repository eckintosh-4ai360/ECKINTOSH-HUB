import Image from "next/image";
import Link from "next/link";
import { Gamepad2, MonitorPlay, MoveRight, Trophy, Wifi } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { gamingExtras, gamingPlans, gamingTitles } from "@/lib/data";

const loungeHighlights = [
  {
    title: "Console lineup ready to go",
    description: "Sessions are built for fast starts, whether you are dropping in solo or bringing friends.",
    icon: Gamepad2,
  },
  {
    title: "Comfortable screens and seating",
    description: "The room is set up for longer stays, not just short turns on a crowded setup.",
    icon: MonitorPlay,
  },
  {
    title: "Reliable connection",
    description: "Free Wi-Fi keeps the lounge useful even outside the game itself.",
    icon: Wifi,
  },
];

export default function GamingPage() {
  return (
    <main className="page-shell">
      <section className="section-space">
        <div className="container-shell">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <span className="section-tag">Gaming lounge</span>
              <h1 className="mt-5 font-display text-[clamp(3rem,7.5vw,5.6rem)] font-semibold leading-[0.95] tracking-tight text-[var(--text)]">
                Big-screen sessions that fit both quick drop-ins and long hangs.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                The lounge is meant to feel easy from the second you step in. Clear pricing, familiar titles, flexible session lengths, and a setup that works whether you are passing through or staying a while.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="button-primary">
                  Ask about availability
                  <MoveRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="button-secondary">
                  See the full compound
                </Link>
              </div>
            </div>

            <div className="relative isolate">
              {/* Decorative Gamepad Image */}
              <div className="absolute -bottom-16 -right-16 z-20 hidden lg:block">
                <div className="relative h-[300px] w-[300px]">
                  <Image
                    src="/gamepad.png"
                    alt="Gaming Controller"
                    fill
                    className="animate-float object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                    priority
                  />
                </div>
              </div>

              <div className="dark-panel relative z-10 rounded-[40px] p-6 text-white sm:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/44">
                      Recommended entry point
                    </div>
                    <h2 className="mt-3 font-display text-4xl font-semibold text-white">
                      Start with the two-hour standard session.
                    </h2>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-[var(--accent)]">
                    <Trophy className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-4 text-base leading-8 text-white/68">
                  It gives you enough time to settle in, switch games, and enjoy the room without committing to a half day on your first visit.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {loungeHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/6 p-4">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 text-[var(--accent)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <h3 className="mt-4 text-sm font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-white/62">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-tight">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Session pricing"
            title="Choose the session length that matches the energy you want."
            subtitle="Short visits stay simple. Longer sessions reward you with better value and more room to relax into the space."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {gamingPlans.map((plan) => (
              <article
                key={plan.id}
                className={`rounded-[32px] p-6 ${
                  plan.tag === "Most popular" ? "dark-panel text-white" : "glass-panel"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
                      plan.tag
                        ? plan.tag === "Most popular"
                          ? "bg-white/8 text-white/76"
                          : "bg-[var(--accent-soft)] text-[var(--accent-strong)]"
                        : "bg-transparent text-[var(--muted)]"
                    }`}
                  >
                    {plan.tag || "Flexible option"}
                  </span>
                  <span className={`text-sm font-semibold ${plan.tag === "Most popular" ? "text-[var(--accent)]" : "text-[var(--accent-strong)]"}`}>
                    {plan.hours} {plan.hours === 1 ? "hour" : "hours"}
                  </span>
                </div>
                <h2 className={`mt-6 font-display text-3xl font-semibold ${plan.tag === "Most popular" ? "text-white" : "text-[var(--text)]"}`}>
                  {plan.name}
                </h2>
                <div className="mt-4 flex items-end gap-2">
                  <span className={`font-display text-5xl font-semibold ${plan.tag === "Most popular" ? "text-white" : "text-[var(--text)]"}`}>
                    GHS {plan.price}
                  </span>
                </div>
                <div className={`mt-2 text-sm ${plan.tag === "Most popular" ? "text-white/50" : "text-[var(--muted)]"}`}>
                  About GHS {plan.perHour.toFixed(2)} per hour
                </div>
                <div className="mt-6 space-y-3">
                  {plan.perks.map((perk) => (
                    <div
                      key={perk}
                      className={`rounded-[22px] px-4 py-3 text-sm ${
                        plan.tag === "Most popular"
                          ? "border border-white/8 bg-white/6 text-white/78"
                          : "border border-[rgba(19,33,45,0.08)] bg-white/72 text-[var(--text)]"
                      }`}
                    >
                      {perk}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-tight">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="glass-panel rounded-[34px] p-6 sm:p-8">
              <div className="label-muted text-[var(--accent-strong)]">Extras and upgrades</div>
              <div className="mt-6 space-y-3">
                {gamingExtras.map((extra) => (
                  <div
                    key={extra.label}
                    className="flex items-center justify-between gap-6 rounded-[24px] border border-[rgba(19,33,45,0.08)] bg-white/72 px-5 py-4"
                  >
                    <div>
                      <div className="text-base font-semibold text-[var(--text)]">{extra.label}</div>
                      <div className="mt-1 text-sm text-[var(--muted)]">{extra.per}</div>
                    </div>
                    <div className="text-sm font-semibold text-[var(--accent-strong)]">GHS {extra.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dark-panel rounded-[34px] p-6 text-white sm:p-8">
              <SectionHeader
                eyebrow="On the consoles"
                title="Popular titles are already in rotation."
                subtitle="You can keep it competitive, go co-op, or bounce between a few familiar favorites without overthinking the plan."
                light
              />
              <div className="mt-8 flex flex-wrap gap-3">
                {gamingTitles.map((title) => (
                  <span
                    key={title}
                    className="rounded-full border border-white/10 bg-white/6 px-4 py-3 text-sm font-semibold text-white/82"
                  >
                    {title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
