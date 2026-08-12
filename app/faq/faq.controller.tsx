"use client";

import Link from "next/link";
import { useState } from "react";
import { DOWNLOAD_LINKS, FAQ_DATA } from "@/config/constants";

export default function FAQController() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "General",
    "Account & APK",
    "Withdrawal & Bonus",
    "Legality & Rules",
  ];

  const faqData = FAQ_DATA;

  // Filter FAQs based on active category and search query
  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Breadcrumbs & Header */}
      <section className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-[#f59e0b] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#f59e0b]">FAQ</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-bold uppercase tracking-wide">
          ❓ Help Center & Knowledge Base
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Frequently Asked{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f59e0b] via-amber-300 to-yellow-500">
            Questions
          </span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Find answers to common questions about downloading the Luckx APK,
          claiming bonuses, withdrawal rules, and gameplay.
        </p>
      </section>

      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search questions (e.g. withdrawal, bonus, APK)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#161f30] border border-[#2a364f] text-white placeholder-slate-400 focus:outline-none focus:border-[#f59e0b] transition-colors text-sm shadow-inner"
        />
        <span className="absolute left-4 top-3.5 text-slate-400 text-lg">
          🔍
        </span>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setOpenIndex(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === cat
                ? "bg-[#f59e0b] text-slate-950 font-bold shadow-lg shadow-[#f59e0b]/20"
                : "bg-[#161f30] text-slate-300 border border-[#2a364f] hover:border-slate-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      <section className="space-y-3 pt-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#161f30] border border-[#2a364f] rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-4.5 font-semibold text-white flex justify-between items-center hover:bg-slate-800/50 transition-colors gap-3"
              >
                <span className="text-sm sm:text-base flex items-center gap-2">
                  <span className="text-[#f59e0b] font-bold">Q:</span> {faq.q}
                </span>
                <span className="text-[#f59e0b] text-xl font-bold shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 pt-3 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-[#161f30] border border-[#2a364f] rounded-xl text-slate-400 text-sm">
            No matching questions found for &quot;{searchQuery}&quot;. Try
            searching with another keyword or pick a different category.
          </div>
        )}
      </section>

      {/* Direct Help CTA Banner */}
      <section className="p-6 rounded-2xl bg-linear-to-r from-slate-900 via-[#161f30] to-slate-900 border border-[#2a364f] text-center space-y-4">
        <h2 className="text-xl font-bold text-white">Still have questions?</h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
          Download the official Luckx APK to access 24/7 in-app live support and
          talk directly with customer agents.
        </p>
        <Link
          href={DOWNLOAD_LINKS.DEFAULT_APK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-linear-to-r from-[#10b981] to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-lg shadow-[#10b981]/20 transition-transform active:scale-95"
        >
          🚀 Download Luckx APK
        </Link>
      </section>
    </main>
  );
}
