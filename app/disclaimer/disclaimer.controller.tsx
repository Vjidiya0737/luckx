"use client";

import Link from "next/link";

export default function DisclaimerController() {
  const points = [
    {
      title: "1. Financial Risk & Gambling Warning",
      icon: "⚠️",
      content:
        "Participating in online skill-based gaming, real-cash slots, color prediction, or fantasy cricket involves substantial financial risk and may lead to addiction. Players are strictly advised to play responsibly, set personal spending limits, and never wager money they cannot afford to lose.",
    },
    {
      title: "2. Age Restriction (18+ Strictly)",
      icon: "🔞",
      content:
        "The services, downloads, and information available on luckxgameplay.com are strictly intended for individuals who are 18 years of age or older. Minors are prohibited from accessing, downloading, or using the Luckx APK application.",
    },
    {
      title: "3. Legal & Territorial Compliance (India)",
      icon: "⚖️",
      content:
        "Real-money online gaming regulations vary across different Indian states. Residents of states where real-cash gaming or skill-based gambling is restricted by local legislation (such as Andhra Pradesh, Telangana, Assam, Nagaland, Sikkim, Odisha, and Tamil Nadu) must strictly comply with local state laws and refrain from participating.",
    },
    {
      title: "4. Third-Party Link & Informational Portal Status",
      icon: "🌐",
      content:
        "luckxgameplay.com operates purely as an informational, educational, and download assistance resource portal. We do not directly operate, host, or manage real-money gambling platforms, casino servers, or payment gateways. For direct account issues, wallet balances, or payment queries, please reach out directly to the official in-app support channels.",
    },
    {
      title: "5. No Financial Advice or Guarantee of Winnings",
      icon: "📈",
      content:
        "All game reviews, win-rate metrics, bonus estimates (e.g., ₹200 – ₹500 welcome bonus), and payout timelines listed on this portal are for descriptive purposes only. We do not guarantee winnings or specific financial returns. Past outcomes do not guarantee future game results.",
    },
    {
      title: "6. Trademark & Copyright Notice",
      icon: "©️",
      content:
        "All logos, brand names, game assets, and app trademarks belong to their respective copyright holders and app developers. The use of brand names is solely for informational identification and user routing.",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Breadcrumb & Header */}
      <section className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-[#f59e0b] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#f59e0b]">Disclaimer</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wide">
          ⚠️ Important Legal Notice
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Disclaimer &{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f59e0b] via-amber-300 to-yellow-500">
            Terms of Use
          </span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Please read this legal disclosure carefully before downloading or
          using the Luckx APK application.
        </p>
      </section>

      {/* Highlighted Warning Box */}
      <section className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-slate-300 space-y-2">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
          <span>🔞</span> Responsible Gaming Notice
        </div>
        <p className="text-xs sm:text-sm leading-relaxed">
          Luckx involves financial element risks and can be addictive. Always
          play responsibly and within your personal financial limits. This app
          is intended purely for recreational entertainment for individuals aged
          18+.
        </p>
      </section>

      {/* Disclaimer Points Stack */}
      <section className="space-y-4">
        {points.map((point, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-[#161f30] border border-[#2a364f] space-y-2 hover:border-[#f59e0b]/40 transition-colors"
          >
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span>{point.icon}</span> {point.title}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {point.content}
            </p>
          </div>
        ))}
      </section>

      {/* Contact Note */}
      <section className="p-6 rounded-2xl bg-[#161f30] border border-[#2a364f] text-center space-y-3">
        <h3 className="text-base font-bold text-white">
          Questions or Legal Inquiries?
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
          If you have any questions regarding our compliance policy or website
          disclaimers, please reach out via our in-app support center or
          official Telegram channel.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-[#2a364f] transition-colors"
          >
            ← Return to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
