"use client";

import Link from "next/link";
import { CalendarCheck, Clock3, MessageCircleMore, MoveRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import ServiceMark from "@/components/ServiceMark";
import { barberServices, timeSlots } from "@/lib/data";

const bookingPerks = [
  {
    title: "Quick confirmations",
    description: "We follow up on WhatsApp so you know where you stand before you arrive.",
    icon: MessageCircleMore,
  },
  {
    title: "Flexible timing",
    description: "Choose a slot that works for your day and update it if plans change.",
    icon: CalendarCheck,
  },
  {
    title: "Easy arrival",
    description: "The booking flow is meant to reduce waiting and make the stop feel smoother.",
    icon: ShieldCheck,
  },
];

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const activeService = barberServices.find((service) => service.label === form.service);
  const today = new Date().toISOString().split("T")[0];

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function chooseService(serviceLabel: string) {
    setForm((current) => ({ ...current, service: serviceLabel }));
  }

  function resetForm() {
    setSubmitted(false);
    setLoading(false);
    setForm({
      firstName: "",
      lastName: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      notes: "",
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <main className="page-shell">
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-6">
              <span className="section-tag">Barbershop booking</span>
              <div className="max-w-2xl">
                <h1 className="font-display text-[clamp(3rem,7vw,5.6rem)] font-semibold leading-[0.95] text-[var(--text)]">
                  Reserve your chair before you arrive.
                </h1>
                <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                  This booking flow is simple on purpose. Pick the service you want, choose a time that suits your day, and we will confirm the details with you.
                </p>
              </div>

              <div className="glass-panel rounded-[34px] p-6">
                <div className="flex items-center gap-4">
                  <ServiceMark serviceId="barbershop" />
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                      Best for first-time visits
                    </div>
                    <div className="mt-1 text-base leading-7 text-[var(--muted)]">
                      Book ahead if you want the cleanest possible arrival. Walk-ins still work, but this makes timing easier.
                    </div>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[24px] bg-white/75 p-4">
                    <div className="flex items-start gap-3">
                      <Clock3 className="mt-1 h-4 w-4 text-[var(--accent-strong)]" />
                      <div>
                        <div className="text-sm font-semibold text-[var(--text)]">Open from 7:00 AM</div>
                        <div className="mt-1 text-sm text-[var(--muted)]">
                          Early bookings work well if you want to start the day cleanly.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[24px] bg-white/75 p-4">
                    <div className="flex items-start gap-3">
                      <CalendarCheck className="mt-1 h-4 w-4 text-[var(--accent-cool)]" />
                      <div>
                        <div className="text-sm font-semibold text-[var(--text)]">Confirmation within minutes</div>
                        <div className="mt-1 text-sm text-[var(--muted)]">
                          We aim to respond quickly so you are not left wondering.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="label-muted text-[var(--accent-strong)]">Choose a service</div>
                <div className="mt-4 grid gap-3">
                  {barberServices.map((service) => {
                    const selected = form.service === service.label;

                    return (
                      <button
                        key={service.label}
                        type="button"
                        onClick={() => chooseService(service.label)}
                        className={`flex items-center justify-between rounded-[26px] border px-5 py-4 text-left transition-all duration-200 ${
                          selected
                            ? "border-[var(--accent)] bg-[linear-gradient(135deg,rgba(214,118,36,0.16),rgba(29,115,117,0.12))]"
                            : "border-[rgba(19,33,45,0.08)] bg-white/70 hover:border-[rgba(214,118,36,0.24)]"
                        }`}
                      >
                        <span>
                          <span className="block text-base font-semibold text-[var(--text)]">{service.label}</span>
                          <span className="mt-1 block text-sm text-[var(--muted)]">
                            Designed for a faster, clearer booking choice.
                          </span>
                        </span>
                        <span className="text-sm font-semibold text-[var(--accent-strong)]">
                          GHS {service.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {bookingPerks.map((perk) => {
                  const Icon = perk.icon;

                  return (
                    <div key={perk.title} className="surface-panel rounded-[28px] p-5">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h2 className="mt-4 text-base font-semibold text-[var(--text)]">{perk.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{perk.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="dark-panel h-fit rounded-[36px] p-6 text-white sm:p-8 lg:sticky lg:top-28">
              {submitted ? (
                <div className="flex h-full flex-col justify-center">
                  <span className="section-tag border-white/10 bg-white/6 text-white/80">
                    Booking received
                  </span>
                  <h2 className="mt-5 font-display text-5xl font-semibold leading-tight text-white">
                    We have your request.
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-8 text-white/68">
                    We will confirm the appointment over WhatsApp. That keeps the follow-up clear, fast, and easy to adjust if needed.
                  </p>

                  <div className="mt-8 rounded-[28px] border border-white/10 bg-white/6 p-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                          Name
                        </div>
                        <div className="mt-2 text-base font-semibold text-white">
                          {form.firstName} {form.lastName}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                          Service
                        </div>
                        <div className="mt-2 text-base font-semibold text-white">{form.service}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                          Date
                        </div>
                        <div className="mt-2 text-base font-semibold text-white">{form.date}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                          Time
                        </div>
                        <div className="mt-2 text-base font-semibold text-white">{form.time}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <button type="button" onClick={resetForm} className="button-primary">
                      Book another visit
                      <MoveRight className="h-4 w-4" />
                    </button>
                    <Link href="/services" className="button-secondary border-white/12 bg-white/6 text-white hover:border-white/20 hover:bg-white/10">
                      Explore more services
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
                        Complete your booking
                      </div>
                      <h2 className="mt-3 font-display text-4xl font-semibold text-white">
                        Choose the details that matter.
                      </h2>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white/82">
                      {activeService ? `GHS ${activeService.price}` : "Pick a service"}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="field-label" htmlFor="firstName">
                          First name
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                          placeholder="Kwame"
                          className="field-control"
                        />
                      </div>
                      <div>
                        <label className="field-label" htmlFor="lastName">
                          Last name
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Mensah"
                          className="field-control"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="field-label" htmlFor="phone">
                        Phone or WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+233 XX XXX XXXX"
                        className="field-control"
                      />
                    </div>

                    <div>
                      <label className="field-label" htmlFor="service">
                        Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="field-control"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {barberServices.map((service) => (
                          <option key={service.label} value={service.label}>
                            {service.label} - GHS {service.price}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="field-label" htmlFor="date">
                          Date
                        </label>
                        <input
                          id="date"
                          name="date"
                          type="date"
                          min={today}
                          value={form.date}
                          onChange={handleChange}
                          required
                          className="field-control"
                        />
                      </div>
                      <div>
                        <label className="field-label" htmlFor="time">
                          Time
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={form.time}
                          onChange={handleChange}
                          required
                          className="field-control"
                        >
                          <option value="" disabled>
                            Select a time
                          </option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="field-label" htmlFor="notes">
                        Notes
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        value={form.notes}
                        onChange={handleChange}
                        placeholder="Style preferences, references, or anything we should know."
                        className="field-control resize-none"
                      />
                    </div>

                    <button type="submit" disabled={loading} className="button-primary flex w-full disabled:cursor-not-allowed disabled:opacity-70">
                      {loading ? "Sending booking..." : "Confirm booking"}
                      <MoveRight className="h-4 w-4" />
                    </button>

                    <p className="text-center text-sm leading-7 text-white/52">
                      We usually confirm by WhatsApp in under 10 minutes.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
