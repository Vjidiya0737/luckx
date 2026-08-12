"use client";

import Link from "next/link";
import { DOWNLOAD_LINKS, GAMES_LIST } from "@/config/constants";

export default function AboutUsController() {
  const gamesList = GAMES_LIST;

  const corePillars = [
    {
      icon: "⚡",
      title: "Lightweight & Ultra-Fast",
      desc: "Optimized package size (32 MB) ensures quick downloads, zero lag, and instant game loading on all mobile networks.",
    },
    {
      icon: "🎮",
      title: "All-in-One Gaming Hub",
      desc: "No need to install multiple applications. Play slots, card games, skill matches, and fantasy cricket within one secure portal.",
    },
    {
      icon: "🔒",
      title: "Secure & Fair Play",
      desc: "Built with industry-standard encryption algorithms to protect user sessions, wallet data, and payout transactions.",
    },
    {
      icon: "🎁",
      title: "Daily Rewards & Events",
      desc: "Unlock Spin & Win bonuses, daily check-in perks, ranking leaderboards, and exclusive limited-time tournament events.",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Breadcrumb & Hero */}
      <section className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-[#f59e0b] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#f59e0b]">About Us</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-bold uppercase tracking-wide">
          🏆 Premium Mobile Entertainment Portal
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          About{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f59e0b] via-amber-300 to-yellow-500">
            Luckx APK
          </span>
        </h1>

        <p className="text-slate-300 text-base max-w-3xl mx-auto leading-relaxed">
          One application, endless ways to play. Engineered for performance,
          simplicity, and non-stop entertainment on mobile devices.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="bg-[#161f30] border border-[#2a364f] rounded-2xl p-6 sm:p-8 shadow-xl space-y-4 leading-relaxed text-slate-300">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-[#f59e0b]">🚀</span> The Luckx Vision
        </h2>
        <p>
          <strong>Luckx APK</strong> is a modern online gaming application
          created for users who demand variety, speed, and smooth performance in
          a single lightweight package. Designed with a clean interface and
          intuitive navigation, new players can understand the platform within
          seconds while experienced players move through features effortlessly.
        </p>
        <p>
          By bringing multiple gaming formats together under one roof, Luckx
          eliminates the friction of downloading separate applications.
          Everything operates inside a unified, high-speed ecosystem designed to
          save storage space and deliver an organized gaming experience.
        </p>
      </section>

      {/* 4 Core Pillars Grid */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">
            Why Players Prefer Luckx
          </h2>
          <p className="text-slate-400 text-sm">
            Built around four core principles for maximum user comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {corePillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#161f30] border border-[#2a364f] hover:border-[#f59e0b]/40 transition-all space-y-2"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Wide Game Collection Showcase */}
      <section className="bg-[#161f30] border border-[#2a364f] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>🎰</span> Diverse Game Collection
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Luckx APK features an extensive lineup of skill and luck-based
            options tailored to suit various play styles. Move seamlessly
            between different modes without extra setup or additional downloads:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {gamesList.map((game, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-[#f59e0b]/50 transition-colors"
            >
              <span className="text-white font-bold text-sm">{game.name}</span>
              <span className="text-[10px] font-semibold text-[#f59e0b] uppercase tracking-wider mt-2">
                {game.category}
              </span>
            </div>
          ))}
        </div>

        <p className="text-slate-400 text-xs leading-relaxed">
          * Regular content updates bring fresh game modes, enhanced graphics,
          and seasonal events directly to your dashboard.
        </p>
      </section>

      {/* Performance & User Experience */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-[#161f30] border border-[#2a364f] space-y-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>⚡</span> Smooth Performance
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Built on a low-latency architecture, Luckx loads quickly and
            operates smoothly even on 3G/4G network connections or entry-level
            Android devices. Clear button layouts and readable menus let you
            focus strictly on gameplay.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#161f30] border border-[#2a364f] space-y-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>🛡️</span> Secure Environment
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Registration requires simple mobile OTP verification. The
            application operates within a controlled server environment
            following strict data handling practices so players can explore
            games with total peace of mind.
          </p>
        </div>
      </section>

      {/* Daily Bonus & Innovations */}
      <section className="bg-[#161f30] border border-[#2a364f] rounded-2xl p-6 sm:p-8 space-y-4 text-slate-300">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span>🎁</span> Daily Engagement & Ongoing Updates
        </h2>
        <p className="leading-relaxed">
          Luckx APK includes active daily engagement systems designed to reward
          consistency. Users can access daily spin wheels, participate in
          time-limited bonus challenges, and compete on community leaderboards.
        </p>
        <p className="leading-relaxed">
          Our engineering team releases frequent updates to optimize system
          speed, patch bugs, upgrade visual elements, and release brand-new
          titles based directly on user feedback.
        </p>
      </section>

      {/* Responsible Gaming Notice */}
      <section className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-slate-300 space-y-3">
        <h2 className="text-lg font-bold text-amber-400 flex items-center gap-2">
          <span>⚠️</span> Responsible Play Notice
        </h2>
        <p className="text-xs sm:text-sm leading-relaxed">
          Luckx is constructed as an entertainment platform. Users are strictly
          encouraged to play responsibly, set personal limits, and enjoy the app
          for fun and relaxation rather than financial expectations. Strictly
          for users 18 years of age or older.
        </p>
      </section>

      {/* Bottom CTA Banner */}
      <section className="p-8 rounded-2xl bg-linear-to-r from-slate-900 via-[#161f30] to-slate-900 border border-[#2a364f] text-center space-y-4 shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          Ready to Experience <span className="text-[#f59e0b]">Luckx</span>?
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Get instant access to real-time card games, live color prediction,
          slots, and fantasy cricket in one lightweight 32 MB APK download.
        </p>
        <div className="pt-2">
          <Link
            href={DOWNLOAD_LINKS.DEFAULT_APK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-linear-to-r from-[#10b981] to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-lg shadow-[#10b981]/25 transition-transform active:scale-95"
          >
            🚀 Download Luckx APK 2026
          </Link>
        </div>
      </section>
    </main>
  );
}
