"use client";

import { useState } from "react";
import Link from "next/link";
import { DOWNLOAD_LINKS, NAV_LINKS } from "@/config/constants";
import Image from "next/image";
import luckx from "../../public/luckx.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-luckx-dark/95 backdrop-blur-md border-b border-luckx-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src={luckx}
            alt="Luckx"
            width={140}
            height={40}
            priority
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-luckx-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Header CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href={DOWNLOAD_LINKS.DEFAULT_APK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-linear-to-r from-[#10b981] to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-lg shadow-[#10b981]/20 transition-transform active:scale-95"
          >
            ⚡ Download APK
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-luckx-card border-b border-luckx-border px-4 pt-3 pb-6 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-base font-medium text-slate-200 hover:text-luckx-gold py-1"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={DOWNLOAD_LINKS.DEFAULT_APK}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="block text-center w-full mt-4 px-5 py-3 rounded-xl font-bold bg-linear-to-r from-luckx-emerald to-emerald-600 text-white shadow-lg shadow-luckx-emerald/20"
          >
            ⚡ Download Luckx APK
          </Link>
        </div>
      )}
    </header>
  );
}
