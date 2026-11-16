"use client";

import { FormEvent } from "react";
import { profile } from "@/data/profile";

type ContactFormProps = { context?: string; theme?: "dark" | "gold" };

export default function ContactForm({ context = "General website enquiry", theme = "dark" }: ContactFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (name: string) => String(form.get(name) ?? "").trim();
    const lines = [
      "Hello Joseph, I just came from your website and would like to connect.",
      "",
      `Enquiry: ${value("enquiry")}`,
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Phone: ${value("phone") || "Not provided"}`,
      `Organisation: ${value("organisation") || "Not provided"}`,
      `Timeline: ${value("timeline") || "Not specified"}`,
      "",
      "Project / message:",
      value("message"),
      "",
      `Page context: ${context}`,
    ];
    const subject = `Website enquiry — ${value("enquiry")}`;
    const body = lines.join("\n");
    window.location.href = `mailto:${profile.contact.publicEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const gold = theme === "gold";
  const fieldClass = `min-h-12 w-full rounded-lg border px-4 py-3 text-base outline-none transition focus:border-[#16c7d9] ${gold ? "border-[#07111f]/25 bg-white text-[#07111f] placeholder:text-[#536171]" : "border-[#23384d] bg-[#07111f] text-white placeholder:text-[#6f8293]"}`;

  return (
    <section id="contact" className={`section ${gold ? "bg-[#d7a84b] text-[#07111f]" : "bg-[#07111f] text-white"}`}>
      <div className="site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className={`section-label ${gold ? "!text-[#07111f]" : ""}`}>CONTACT / EMAIL</p>
          <h2 className="section-title mt-5">Tell me what you want to build.</h2>
          <p className={`mt-7 max-w-xl text-lg leading-8 ${gold ? "text-[#243548]" : "text-[#9eadba]"}`}>Share the essential details here. When you continue, your email app will open with one organized draft addressed to {profile.contact.publicEmail}, ready for you to review and send.</p>
          <p className={`mt-5 max-w-xl font-semibold leading-7 ${gold ? "text-[#243548]" : "text-[#dbe5ec]"}`}>Available for technology consulting, partnerships, speaking, and product collaborations.</p>
          <div className={`mt-8 border-l-2 pl-5 text-sm leading-7 ${gold ? "border-[#07111f] text-[#243548]" : "border-[#16c7d9] text-[#9eadba]"}`}>
            <p>Your information is not submitted to or stored by this website.</p>
            <p>WhatsApp: <a href="https://wa.me/2348036682403" target="_blank" rel="noreferrer" className="underline decoration-current/40 underline-offset-4 hover:decoration-current">{profile.contact.publicPhone}</a></p>
            <p>Email: <a href={`mailto:${profile.contact.publicEmail}`} className="underline decoration-current/40 underline-offset-4 hover:decoration-current">{profile.contact.publicEmail}</a></p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={`rounded-2xl border p-5 sm:p-8 ${gold ? "border-[#07111f]/20 bg-[#e5bc67]" : "border-[#23384d] bg-[#0d1b2a]"}`}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold">Your name<span aria-hidden="true"> *</span><input className={`${fieldClass} mt-2`} name="name" autoComplete="name" required /></label>
            <label className="text-sm font-semibold">Email address<span aria-hidden="true"> *</span><input className={`${fieldClass} mt-2`} name="email" type="email" autoComplete="email" required /></label>
            <label className="text-sm font-semibold">WhatsApp or phone<input className={`${fieldClass} mt-2`} name="phone" type="tel" autoComplete="tel" /></label>
            <label className="text-sm font-semibold">Organisation<input className={`${fieldClass} mt-2`} name="organisation" autoComplete="organization" /></label>
            <label className="text-sm font-semibold">What is this about?<span aria-hidden="true"> *</span><select className={`${fieldClass} mt-2`} name="enquiry" defaultValue={context} required><option>General website enquiry</option><option>Consultation or mentorship</option><option>Consultation</option><option>Mentorship</option><option>Kwechiri</option><option>New digital system</option><option>Technology consulting</option><option>Speaking or media</option><option>Partnership</option></select></label>
            <label className="text-sm font-semibold">Preferred timeline<select className={`${fieldClass} mt-2`} name="timeline" defaultValue=""><option value="">Select timeline</option><option>As soon as possible</option><option>Within one month</option><option>Within three months</option><option>Exploring for later</option></select></label>
          </div>
          <label className="mt-5 block text-sm font-semibold">Project details or message<span aria-hidden="true"> *</span><textarea className={`${fieldClass} mt-2 min-h-36 resize-y`} name="message" required placeholder="Describe what you need, the problem to solve and any useful context." /></label>
          <button type="submit" className={`btn mt-6 w-full sm:w-auto ${gold ? "border-[#07111f] bg-[#07111f] !text-white" : "btn-primary"}`}>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
            Continue by email <span aria-hidden="true">↗</span>
          </button>
        </form>
      </div>
    </section>
  );
}
