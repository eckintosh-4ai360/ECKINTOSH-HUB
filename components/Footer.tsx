import Link from "next/link";
import { AtSign, Clock3, Mail, MapPin, MoveRight, PhoneCall } from "lucide-react";
import { contactInfo, navigationLinks } from "@/lib/data";

const contactRows = [
  { label: "Location", value: contactInfo.address, icon: MapPin },
  { label: "Phone", value: contactInfo.phone, icon: PhoneCall },
  { label: "Email", value: contactInfo.email, icon: Mail },
  { label: "Instagram", value: contactInfo.instagram, icon: AtSign },
];

export default function Footer() {
  return (
    <footer className="section-space-tight">
      <div className="container-shell">
        <div className="dark-panel overflow-hidden rounded-[36px] p-6 text-white sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <span className="section-tag border-white/10 bg-white/5 text-[rgba(255,255,255,0.8)]">
                Plan your next stop
              </span>
              <div className="max-w-2xl">
                <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[0.98] text-white">
                  The kind of place you come for one thing and stay for three more.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-white/68">
                  The Hub keeps practical errands and feel-good downtime in the same space, so your day moves better without feeling rushed.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/book" className="button-primary">
                  Reserve a chair
                  <MoveRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="button-secondary border-white/12 bg-white/6 text-white hover:border-white/22 hover:bg-white/10">
                  Contact the team
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
                  Visit
                </div>
                <div className="mt-5 space-y-4">
                  {contactRows.map((row) => {
                    const Icon = row.icon;

                    return (
                      <div key={row.label} className="flex items-start gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-[var(--accent)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/38">
                            {row.label}
                          </div>
                          <div className="mt-1 text-sm leading-6 text-white/78">{row.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
                  Explore
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  {navigationLinks.concat({ label: "Book a cut", href: "/book" }).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/18 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-white/8 bg-white/4 p-4">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 text-[var(--accent)]">
                      <Clock3 className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/38">
                        Opening hours
                      </div>
                      <div className="mt-1 text-sm leading-6 text-white/78">
                        <div>{contactInfo.hours.weekday}</div>
                        <div>{contactInfo.hours.weekend}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
            <span>Copyright 2026 The Hub Mumford. Built for smooth, modern everyday stops.</span>
            <span>Barbershop, gaming, food, mobile money, and phone fixes in one place.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
