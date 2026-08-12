import Link from "next/link";
import { DOWNLOAD_LINKS, LEGAL_LINKS } from "@/config/constants";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-luckx-border text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-luckx-gold text-slate-950 font-black flex items-center justify-center text-base">
                LX
              </div>
              <span className="text-xl font-bold text-white">Luckx</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your premier gaming hub for real-time skill games, fantasy
              cricket, and instant rewards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/"
                  className="hover:text-luckx-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-luckx-gold transition-colors"
                >
                  About Luckx
                </Link>
              </li>
              <li>
                <Link
                  href={DOWNLOAD_LINKS.DEFAULT_APK}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-luckx-gold transition-colors"
                >
                  APK Download
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-luckx-gold transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">
              Legal & Compliance
            </h4>
            <ul className="space-y-2 text-xs">
              {LEGAL_LINKS.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("#") ? (
                    <Link
                      href={link.href}
                      className="hover:text-luckx-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className="hover:text-luckx-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Age & Safety Notice */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1.5 rounded-lg text-xs font-semibold">
              <span>🔞 18+ Strictly</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              This game involves financial risk and may be addictive. Please
              play responsibly and within your financial limits.
            </p>
            <p className="text-xs text-slate-400">
              Contact:{" "}
              <Link
                href={`mailto:${DOWNLOAD_LINKS.EMAIL}`}
                className="text-luckx-gold hover:text-white"
              >
                {DOWNLOAD_LINKS.EMAIL}
              </Link>
            </p>
          </div>
        </div>

        {/* Disclaimer Banner */}
        <div
          id="disclaimer"
          className="p-4 rounded-xl bg-luckx-card/60 border border-luckx-border/80 text-xs text-slate-400 mb-8 leading-relaxed"
        >
          <strong className="text-amber-400 block mb-1">
            ⚠️ Disclaimer & Important Notice:
          </strong>
          luckxgameplay.com is an informational resource portal provided for
          guidance and software distribution assistance. We do not operate
          real-money betting systems directly. Online skill-based gaming is
          governed by local state laws. Verify your local regulations before
          participating.
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-800 text-xs text-slate-500">
          <p>© 2026 luckxgameplay.com. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0">
            Designed for speed & mobile performance.
          </p>
        </div>
      </div>
    </footer>
  );
}
