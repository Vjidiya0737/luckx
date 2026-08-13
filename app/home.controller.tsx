"use client";

import { useState } from "react";
import { APP_DETAILS, DOWNLOAD_LINKS } from "@/config/constants";
import Link from "next/link";

export default function HomeController() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Is Luckx safe to download and play?",
      a: "Yes, Luckx utilizes encrypted server protocols to secure account transactions and player data. Always ensure you download the APK directly from our official portal.",
    },
    {
      q: "Does Luckx offer a new user signup bonus?",
      a: "Yes! New players can claim a welcome registration bonus ranging from ₹200 to ₹500 via Spin & Win upon mobile number verification.",
    },
    {
      q: "How can I withdraw my winnings from Luckx?",
      a: "Winnings can be directly transferred using Instant UPI, Paytm Wallet, or direct Bank IMPS transfers.",
    },
    {
      q: "What games are featured on the Luckx App?",
      a: "The platform offers Color Prediction, Slots, Teen Patti, Rummy, Ludo, Poker, and Fantasy Cricket leagues.",
    },
    {
      q: "What is the minimum withdrawal limit?",
      a: "The minimum withdrawal threshold starts at ₹100 to ₹200 depending on the chosen payment method.",
    },
    {
      q: "Is Luckx available on Google Play Store?",
      a: "Due to Play Store policies on real-cash gaming apps, Luckx is distributed via official Android APK download.",
    },
    {
      q: "Is playing real-cash games legal in India?",
      a: "Skill-based gaming is legal in most Indian states. However, users should verify their local state regulations before playing.",
    },
    {
      q: "How long do withdrawal requests take to process?",
      a: "Most withdrawals via UPI are processed instantly within 5 to 15 minutes. Bank transfers may take up to 24 hours during peak times.",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-4 pb-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-luckx-gold/10 border border-luckx-gold/30 text-luckx-gold text-xs font-semibold uppercase tracking-wider">
          🔥 Latest Release 2026 • Official APK
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Luckx APK Download 2026 <br className="hidden sm:inline" />
          <span className="text-white">
            Play Real Cash Games & Fantasy Cricket
          </span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Experience high-speed card games, live color prediction, slots, and
          fantasy sports with instant UPI withdrawals and up to ₹500 signup
          bonus.
        </p>

        {/* Direct CTA Download Link using DOWNLOAD_LINKS */}
        <div className="flex justify-center pt-2" id="download">
          <Link
            href={DOWNLOAD_LINKS.DEFAULT_APK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-linear-to-r from-[#10b981] to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-lg shadow-[#10b981]/20 transition-transform active:scale-95"
          >
            🚀 Download Luckx APK
          </Link>
        </div>
      </section>

      {/* Specifications Table Mapping APP_DETAILS */}
      <section className="bg-luckx-card border border-luckx-border rounded-2xl p-6 shadow-xl">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span>📊</span> Luckx App Overview & Details
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <tbody>
              {APP_DETAILS.map((spec) => (
                <tr key={spec.label} className="border-b border-slate-800">
                  <td className="py-3 px-4 text-slate-400 font-medium bg-slate-900/50 w-1/3">
                    {spec.label}
                  </td>
                  <td className="py-3 px-4 font-semibold text-white">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Informational Content */}
      <section id="about" className="space-y-4 leading-relaxed text-slate-300">
        <h2 className="text-2xl font-bold text-white">What is Luckx?</h2>
        <p>
          <strong>Luckx</strong> is an all-in-one real cash earnings app where
          players can compete in casual skill games, classic casino matches, and
          fantasy cricket tournaments. Designed with a lightweight interface, it
          ensures fast load times and zero lag even on entry-level Android
          devices.
        </p>

        <h3 className="text-lg font-bold text-white pt-2">
          Why Choose Luckx 2026?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="p-3.5 rounded-xl bg-luckx-card border border-luckx-border flex items-center gap-3">
            <span className="text-luckx-emerald font-bold">✔</span> Instant
            Mobile Registration & OTP
          </div>
          <div className="p-3.5 rounded-xl bg-luckx-card border border-luckx-border flex items-center gap-3">
            <span className="text-luckx-emerald font-bold">✔</span> Real cash
            rewards with daily bonuses
          </div>
          <div className="p-3.5 rounded-xl bg-luckx-card border border-luckx-border flex items-center gap-3">
            <span className="text-luckx-emerald font-bold">✔</span> Live Fantasy
            Cricket League entry
          </div>
          <div className="p-3.5 rounded-xl bg-luckx-card border border-luckx-border flex items-center gap-3">
            <span className="text-luckx-emerald font-bold">✔</span> 24/7 instant
            payout processing
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section id="how-to-play" className="space-y-4">
        <h2 className="text-2xl font-bold text-white">
          How to Download & Start Playing Luckx
        </h2>
        <ol className="space-y-3">
          {[
            "Click the Download Luckx APK button at the top of this page.",
            "Allow 'Install from Unknown Sources' in your Android security settings.",
            "Open the downloaded file and complete the installation process.",
            "Launch the app and register with your mobile number using OTP.",
            "Claim your ₹200 - ₹500 welcome bonus from the Spin & Win wheel.",
            "Select your favorite game mode and start winning real rewards!",
          ].map((step, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-luckx-card border border-luckx-border text-slate-200"
            >
              <span className="w-6 h-6 rounded-full bg-luckx-gold/20 text-luckx-gold font-bold flex items-center justify-center shrink-0 text-sm">
                {idx + 1}
              </span>
              <span className="text-sm">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Pros & Cons Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-luckx-card border border-emerald-500/20">
          <h3 className="text-lg font-bold text-luckx-emerald mb-3 flex items-center gap-2">
            <span>✅</span> Pros
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              ✔ Quick 1-minute registration
            </li>
            <li className="flex items-center gap-2">
              ✔ Broad selection (Slots, Rummy, Ludo)
            </li>
            <li className="flex items-center gap-2">
              ✔ Integrated fantasy sports dashboard
            </li>
            <li className="flex items-center gap-2">
              ✔ Low memory consumption (32 MB)
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-luckx-card border border-rose-500/20">
          <h3 className="text-lg font-bold text-rose-400 mb-3 flex items-center gap-2">
            <span>❌</span> Cons
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              × Involves financial risk
            </li>
            <li className="flex items-center gap-2">
              × Restricted strictly to users 18+
            </li>
            <li className="flex items-center gap-2">
              × Downloadable via official APK only
            </li>
          </ul>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="bg-luckx-card border border-luckx-border rounded-2xl p-6 shadow-xl space-y-4">
        <h2 className="text-xl font-bold text-white">
          Luckx vs Other Gaming Platforms
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-luckx-border text-slate-400">
                <th className="py-3 px-4">Feature</th>
                <th className="py-3 px-4 text-luckx-gold font-bold">Luckx</th>
                <th className="py-3 px-4">Standard Apps</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-800">
                <td className="py-3 px-4 text-slate-300">Signup Bonus</td>
                <td className="py-3 px-4 font-bold text-luckx-emerald">
                  ₹200 – ₹500
                </td>
                <td className="py-3 px-4 text-slate-500">₹10 – ₹50</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-3 px-4 text-slate-300">Payout Speed</td>
                <td className="py-3 px-4 font-bold text-luckx-emerald">
                  Instant (UPI/Paytm)
                </td>
                <td className="py-3 px-4 text-slate-500">24–48 Hours</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-3 px-4 text-slate-300">Package Size</td>
                <td className="py-3 px-4 font-bold text-white">32 MB Lite</td>
                <td className="py-3 px-4 text-slate-500">90 MB – 180 MB</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-300">Fair Play Win Rate</td>
                <td className="py-3 px-4 font-bold text-luckx-emerald">
                  High / Fair Algorithm
                </td>
                <td className="py-3 px-4 text-slate-500">Variable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section id="faq" className="space-y-4">
        <h2 className="text-2xl font-bold text-white">
          ❓ Frequently Asked Questions (Luckx APK 2026)
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-luckx-card border border-luckx-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-4 font-semibold text-white flex justify-between items-center hover:bg-slate-800/50 transition-colors"
              >
                <span>
                  Q{index + 1}: {faq.q}
                </span>
                <span className="text-luckx-gold text-xl font-bold ml-2">
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>
              {openFaq === index && (
                <div className="px-4 pb-4 text-sm text-slate-300 border-t border-slate-800/80 pt-3 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
