"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MoveRight, X } from "lucide-react";
import { useEffect, useEffectEvent, useState } from "react";
import { navigationLinks } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const syncScrollState = useEffectEvent(() => {
    setScrolled(window.scrollY > 8);
  });

  useEffect(() => {
    window.addEventListener("scroll", syncScrollState, { passive: true });
    return () => window.removeEventListener("scroll", syncScrollState);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="container-shell">
        <nav
          className={`rounded-[28px] border px-4 py-3 transition-all duration-300 sm:px-6 ${
            scrolled
              ? "border-[rgba(19,33,45,0.08)] bg-[rgba(255,250,244,0.92)] shadow-[0_18px_60px_rgba(19,33,45,0.12)] backdrop-blur-2xl"
              : "border-[rgba(19,33,45,0.06)] bg-[rgba(255,250,244,0.72)] shadow-[0_14px_36px_rgba(19,33,45,0.08)] backdrop-blur-xl"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--accent),var(--accent-cool))] text-sm font-black tracking-[0.18em] text-white">
                TH
              </span>
              <span>
                <span className="block font-display text-[1.35rem] font-semibold leading-none text-[var(--text)]">
                  The Hub
                </span>
                <span className="mt-0.5 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Mumford
                </span>
              </span>
            </Link>

            <div className="hidden items-center gap-2 rounded-full border border-[rgba(19,33,45,0.08)] bg-white/80 p-1 md:flex">
              {navigationLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      active
                        ? "bg-[var(--text)] !text-white"
                        : "text-[var(--muted)] hover:text-[var(--text)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:block">
              <Link href="/book" className="button-primary px-5 py-3 text-sm">
                Book a cut
                <MoveRight className="h-4 w-4" />
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(19,33,45,0.08)] bg-white/80 text-[var(--text)] md:hidden"
              aria-expanded={open}
              aria-label="Toggle navigation menu"
              onClick={() => setOpen((current) => !current)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open ? (
            <div className="mt-4 rounded-[24px] border border-[rgba(19,33,45,0.08)] bg-white/88 p-4 shadow-[0_18px_40px_rgba(19,33,45,0.08)] md:hidden">
              <div className="flex flex-col gap-2">
                {navigationLinks.map((link) => {
                  const active = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                        active
                          ? "bg-[var(--text)] !text-white"
                          : "bg-[rgba(255,250,244,0.88)] text-[var(--text)]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <Link href="/book" className="button-primary mt-4 flex w-full">
                Book a cut
                <MoveRight className="h-4 w-4" />
              </Link>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
