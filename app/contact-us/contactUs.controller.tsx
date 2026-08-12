"use client";

import { useState } from "react";
import Link from "next/link";
import { DOWNLOAD_LINKS } from "@/config/constants";

export default function ContactUsController() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    category: "General Inquiry",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Front-end handling state simulation
    setIsSubmitted(true);
  };

  const supportChannels = [
    {
      title: "In-App Live Chat",
      icon: "💬",
      desc: "Fastest response time (1-5 minutes). Available directly inside the Luckx APK application.",
      badge: "Recommended 24/7",
      actionText: "Open App Chat",
      href: DOWNLOAD_LINKS.DEFAULT_APK,
    },
    {
      title: "Official Telegram",
      icon: "✈️",
      desc: "Get live updates, promo codes, direct developer help, and community announcements.",
      badge: "Instant Channel",
      actionText: "Join Telegram",
      href: DOWNLOAD_LINKS.TELEGRAM,
    },
    {
      title: "WhatsApp Support",
      icon: "🟢",
      desc: "Direct helpdesk for registration issues, deposit updates, and withdrawal status.",
      badge: "Fast Help",
      actionText: "Chat on WhatsApp",
      href: DOWNLOAD_LINKS.WHATSAPP,
    },
    {
      title: "Email Support",
      icon: "✉️",
      desc: "For business inquiries, partnership requests, or formal legal queries.",
      badge: "Official Mail",
      actionText: "Send Email",
      href: `mailto:${DOWNLOAD_LINKS.EMAIL}`,
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Breadcrumb & Header */}
      <section className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-[#f59e0b] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#f59e0b]">Contact Us</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-bold uppercase tracking-wide">
          📞 24/7 Customer Support & Helpdesk
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Get in Touch with{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f59e0b] via-amber-300 to-yellow-500">
            Luckx Support
          </span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Have questions regarding APK downloads, bonus claims, or withdrawal
          status? Our support team is available around the clock.
        </p>
      </section>

      {/* Support Channels Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {supportChannels.map((channel, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#161f30] border border-[#2a364f] hover:border-[#f59e0b]/40 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-3xl">{channel.icon}</span>
                <span className="px-2.5 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-[10px] font-bold uppercase">
                  {channel.badge}
                </span>
              </div>
              <h2 className="text-lg font-bold text-white">{channel.title}</h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {channel.desc}
              </p>
            </div>

            <div>
              <Link
                href={channel.href}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#10b981] hover:text-emerald-400 transition-colors"
              >
                {channel.actionText} →
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#161f30] border border-[#2a364f] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>📩</span> Send Us a Direct Message
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Fill out the form below and our dedicated support team will review
            your inquiry within 2 to 4 hours.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-6 rounded-xl bg-[#10b981]/10 border border-[#10b981]/30 text-center space-y-3">
            <span className="text-4xl">✅</span>
            <h3 className="text-lg font-bold text-[#10b981]">
              Message Sent Successfully!
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Thank you for contacting Luckx Support. A support representative
              will review your query and get back to you shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-2 px-4 py-2 rounded-lg bg-slate-800 text-xs font-bold text-slate-200 border border-[#2a364f]"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-[#2a364f] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#f59e0b]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Mobile Number / Registered No.
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 9876543210"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-[#2a364f] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#f59e0b]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="yourname@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-[#2a364f] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#f59e0b]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Inquiry Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-[#2a364f] text-white text-sm focus:outline-none focus:border-[#f59e0b]"
                >
                  <option>General Inquiry</option>
                  <option>APK Download & Installation</option>
                  <option>Deposit & Bonus Assistance</option>
                  <option>Withdrawal Query</option>
                  <option>Account Safety & Bug Report</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Message / Query Details
              </label>
              <textarea
                rows={4}
                required
                placeholder="Describe your query in detail..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-[#2a364f] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#f59e0b]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-linear-to-r from-[#10b981] to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-lg shadow-[#10b981]/20 transition-transform active:scale-95"
            >
              🚀 Submit Support Ticket
            </button>
          </form>
        )}
      </section>

      {/* Operating Hours Note */}
      <section className="p-6 rounded-2xl bg-slate-900/80 border border-[#2a364f] text-center space-y-2">
        <h3 className="text-sm font-bold text-white flex items-center justify-center gap-2">
          <span>⏰</span> Support Working Hours
        </h3>
        <p className="text-slate-400 text-xs leading-relaxed">
          In-app live chat and automated Telegram/WhatsApp bots run 24 hours a
          day, 7 days a week. Email responses and manual ticket inquiries are
          processed daily between 8:00 AM and 11:00 PM IST.
        </p>
      </section>
    </main>
  );
}
