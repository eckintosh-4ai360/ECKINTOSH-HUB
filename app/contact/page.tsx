"use client";

import Link from "next/link";
import {
  AtSign,
  Clock3,
  Mail,
  MapPin,
  MessageCircleMore,
  MoveRight,
  PhoneCall,
} from "lucide-react";
import { useState } from "react";
import { contactInfo } from "@/lib/data";

const contactRows = [
  { label: "Location", value: contactInfo.address, icon: MapPin },
  { label: "WhatsApp", value: contactInfo.whatsapp, icon: MessageCircleMore },
  { label: "Phone", value: contactInfo.phone, icon: PhoneCall },
  { label: "Email", value: contactInfo.email, icon: Mail },
  { label: "Instagram", value: contactInfo.instagram, icon: AtSign },
  {
    label: "Hours",
    value: `${contactInfo.hours.weekday}\n${contactInfo.hours.weekend}`,
    icon: Clock3,
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
  }

  function resetForm() {
    setSent(false);
    setLoading(false);
    setForm({
      name: "",
      phone: "",
      subject: "",
      message: "",
    });
  }

  return (
    <main className="page-shell">
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <span className="section-tag">Contact the team</span>
              <div className="max-w-2xl">
                <h1 className="font-display text-[clamp(3rem,7vw,5.8rem)] font-semibold leading-[0.95] text-[var(--text)]">
                  Reach out before you arrive or while you are planning the stop.
                </h1>
                <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                  Contact should feel as clear as the rest of the experience. Whether you are checking hours, asking about a booking, or just orienting yourself, this page is meant to make that easy.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactRows.map((row) => {
                  const Icon = row.icon;

                  return (
                    <div key={row.label} className="glass-panel rounded-[30px] p-5">
                      <div className="flex items-start gap-4">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">
                            {row.label}
                          </div>
                          <div className="mt-2 whitespace-pre-line text-sm leading-7 text-[var(--muted)]">
                            {row.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="dark-panel rounded-[36px] p-6 text-white sm:p-8">
              {sent ? (
                <div className="flex h-full flex-col justify-center">
                  <span className="section-tag border-white/10 bg-white/6 text-white/80">
                    Message received
                  </span>
                  <h2 className="mt-5 font-display text-5xl font-semibold leading-tight text-white">
                    We will get back to you soon.
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-8 text-white/68">
                    Your message is in. We usually reply within a few hours, and faster when the question is time-sensitive.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button type="button" onClick={resetForm} className="button-primary">
                      Send another message
                      <MoveRight className="h-4 w-4" />
                    </button>
                    <Link href="/book" className="button-secondary border-white/12 bg-white/6 text-white hover:border-white/20 hover:bg-white/10">
                      Make a booking
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
                      Send a message
                    </div>
                    <h2 className="mt-3 font-display text-4xl font-semibold text-white">
                      Tell us what you need.
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="field-label" htmlFor="name">
                          Your name
                        </label>
                        <input
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Full name"
                          className="field-control"
                        />
                      </div>
                      <div>
                        <label className="field-label" htmlFor="phone">
                          Phone
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
                    </div>

                    <div>
                      <label className="field-label" htmlFor="subject">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="field-control"
                      >
                        <option value="" disabled>
                          Select a topic
                        </option>
                        <option>General question</option>
                        <option>Booking help</option>
                        <option>Gaming lounge question</option>
                        <option>Food question</option>
                        <option>Partnership or business</option>
                        <option>Feedback</option>
                      </select>
                    </div>

                    <div>
                      <label className="field-label" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us what you are planning or what you want to know."
                        className="field-control resize-none"
                      />
                    </div>

                    <button type="submit" disabled={loading} className="button-primary flex w-full disabled:cursor-not-allowed disabled:opacity-70">
                      {loading ? "Sending message..." : "Send message"}
                      <MoveRight className="h-4 w-4" />
                    </button>

                    <p className="text-center text-sm leading-7 text-white/52">
                      Clear messages get quicker replies, so short and direct is perfect.
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
