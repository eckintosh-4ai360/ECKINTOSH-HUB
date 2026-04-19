import Link from "next/link";
import { ArrowDownRight, ChefHat, Coffee, CupSoda, MoveRight, Soup, UtensilsCrossed } from "lucide-react";
import { menuCategories } from "@/lib/data";

const menuIconMap = {
  Sunrise: Coffee,
  Pot: Soup,
  Tray: UtensilsCrossed,
  Cup: CupSoda,
};

export default function MenuPage() {
  return (
    <main id="top" className="page-shell">
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="max-w-3xl">
              <span className="section-tag">The Hub chop bar</span>
              <h1 className="mt-5 font-display text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.95] text-[var(--text)]">
                Fresh local food with the kind of menu that makes staying longer feel easy.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                The food offer is built to work for a full meal, a quick reset between activities, or a simple add-on to the rest of your stop around the compound.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {menuCategories.map((category) => (
                  <a key={category.id} href={`#${category.id}`} className="button-secondary">
                    {category.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[36px] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                  <ChefHat className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                    Good to know
                  </div>
                  <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--text)]">
                    The menu moves with the day.
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                    Breakfast starts early, mains carry the middle of the day, and drinks and sides are easy to add whenever you need them.
                  </p>
                </div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[26px] bg-white/75 p-5">
                  <div className="text-sm font-semibold text-[var(--text)]">Best first order</div>
                  <div className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    Start with a main meal and a drink if you want the easiest feel for the chop bar on your first visit.
                  </div>
                </div>
                <div className="rounded-[26px] bg-white/75 p-5">
                  <div className="text-sm font-semibold text-[var(--text)]">Pairs well with</div>
                  <div className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    Gaming sessions, phone drop-offs, and any visit where you know you will be around for a while.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-tight">
        <div className="container-shell space-y-5">
          {menuCategories.map((category) => {
            const Icon = menuIconMap[category.emoji as keyof typeof menuIconMap] ?? UtensilsCrossed;

            return (
              <article key={category.id} id={category.id} className="glass-panel rounded-[36px] p-6 sm:p-8">
                <div className="flex flex-col gap-5 border-b border-[rgba(19,33,45,0.08)] pb-6 md:flex-row md:items-end md:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-[22px] bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <div className="label-muted text-[var(--accent-strong)]">{category.time}</div>
                      <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--text)]">
                        {category.name}
                      </h2>
                    </div>
                  </div>
                  <a href="#top" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)]">
                    Back to top
                    <ArrowDownRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-[28px] border border-[rgba(19,33,45,0.08)] bg-white/72 p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-lg font-semibold text-[var(--text)]">{item.name}</h3>
                            {item.popular ? (
                              <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">
                                Popular
                              </span>
                            ) : null}
                          </div>
                          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-[rgba(19,33,45,0.06)] px-4 py-2 text-sm font-semibold text-[var(--text)]">
                          GHS {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-space-tight">
        <div className="container-shell">
          <div className="dark-panel rounded-[36px] p-6 text-white sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div>
                <span className="section-tag border-white/10 bg-white/6 text-white/80">
                  Daily specials
                </span>
                <h2 className="mt-5 font-display text-[clamp(2.2rem,4.6vw,4rem)] font-semibold leading-[1.02] text-white">
                  The best way to catch what is freshest is to ask on the day.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/68">
                  The cook adjusts based on availability, so the best specials are often the ones you hear about closest to lunchtime.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href="/contact" className="button-primary">
                  Message the team
                  <MoveRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="button-secondary border-white/12 bg-white/6 text-white hover:border-white/20 hover:bg-white/10">
                  See the whole compound
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
