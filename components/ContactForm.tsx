"use client";

import { FormEvent } from "react";

type ContactFormProps={context?:string;theme?:"dark"|"gold"};

export default function ContactForm({context="General website enquiry",theme="dark"}:ContactFormProps){
  function handleSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const form=new FormData(event.currentTarget);
    const value=(name:string)=>String(form.get(name)??"").trim();
    const lines=[
      "Hello Joseph, I just came from your website and would like to connect.",
      "",
      `Enquiry: ${value("enquiry")}`,
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Phone: ${value("phone")||"Not provided"}`,
      `Organisation: ${value("organisation")||"Not provided"}`,
      `Timeline: ${value("timeline")||"Not specified"}`,
      "",
      "Project / message:",
      value("message"),
      "",
      `Page context: ${context}`,
    ];
    window.open(`https://wa.me/2348036682403?text=${encodeURIComponent(lines.join("\n"))}`,"_blank","noopener,noreferrer");
  }

  const gold=theme==="gold";
  const fieldClass=`min-h-12 w-full rounded-lg border px-4 py-3 text-base outline-none transition focus:border-[#16c7d9] ${gold?"border-[#07111f]/25 bg-white text-[#07111f] placeholder:text-[#536171]":"border-[#23384d] bg-[#07111f] text-white placeholder:text-[#6f8293]"}`;
  return <section id="contact" className={`section ${gold?"bg-[#d7a84b] text-[#07111f]":"bg-[#07111f] text-white"}`}><div className="site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className={`section-label ${gold?"!text-[#07111f]":""}`}>CONTACT / WHATSAPP</p><h2 className="section-title mt-5">Tell me what you want to build.</h2><p className={`mt-7 max-w-xl text-lg leading-8 ${gold?"text-[#243548]":"text-[#9eadba]"}`}>Share the essential details here. When you continue, WhatsApp will open with one organized message ready for you to review and send from your account.</p><div className={`mt-8 border-l-2 pl-5 text-sm leading-7 ${gold?"border-[#07111f] text-[#243548]":"border-[#16c7d9] text-[#9eadba]"}`}><p>Your information is not submitted to or stored by this website.</p><p>WhatsApp: +234 803 668 2403</p></div></div><form onSubmit={handleSubmit} className={`rounded-2xl border p-5 sm:p-8 ${gold?"border-[#07111f]/20 bg-[#e5bc67]":"border-[#23384d] bg-[#0d1b2a]"}`}><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Your name<span aria-hidden="true"> *</span><input className={`${fieldClass} mt-2`} name="name" autoComplete="name" required/></label><label className="text-sm font-semibold">Email address<span aria-hidden="true"> *</span><input className={`${fieldClass} mt-2`} name="email" type="email" autoComplete="email" required/></label><label className="text-sm font-semibold">WhatsApp or phone<input className={`${fieldClass} mt-2`} name="phone" type="tel" autoComplete="tel"/></label><label className="text-sm font-semibold">Organisation<input className={`${fieldClass} mt-2`} name="organisation" autoComplete="organization"/></label><label className="text-sm font-semibold">What is this about?<span aria-hidden="true"> *</span><select className={`${fieldClass} mt-2`} name="enquiry" defaultValue={context} required><option>General website enquiry</option><option>Kwechiri</option><option>New digital system</option><option>Technology consulting</option><option>Speaking or media</option><option>Partnership</option></select></label><label className="text-sm font-semibold">Preferred timeline<select className={`${fieldClass} mt-2`} name="timeline" defaultValue=""><option value="">Select timeline</option><option>As soon as possible</option><option>Within one month</option><option>Within three months</option><option>Exploring for later</option></select></label></div><label className="mt-5 block text-sm font-semibold">Project details or message<span aria-hidden="true"> *</span><textarea className={`${fieldClass} mt-2 min-h-36 resize-y`} name="message" required placeholder="Describe what you need, the problem to solve and any useful context."/></label><button type="submit" className={`btn mt-6 w-full sm:w-auto ${gold?"border-[#07111f] bg-[#07111f] !text-white":"btn-primary"}`}><svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M16.04 3A12.86 12.86 0 0 0 5.2 22.78L3.5 29l6.37-1.67A12.98 12.98 0 1 0 16.04 3Zm0 23.76c-2.1 0-4.15-.57-5.93-1.65l-.43-.25-3.78.99 1.01-3.68-.28-.45a10.68 10.68 0 1 1 9.41 5.04Zm5.86-7.98c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.82 1.05-1.01 1.26-.19.22-.37.24-.69.08-.32-.16-1.36-.5-2.58-1.59a9.67 9.67 0 0 1-1.79-2.23c-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.22.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.67 0 1.58 1.15 3.1 1.31 3.31.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.76.27-1.42.19-1.55-.08-.14-.29-.22-.61-.38Z"/></svg>Continue on WhatsApp <span aria-hidden="true">↗</span></button></form></div></section>;
}
