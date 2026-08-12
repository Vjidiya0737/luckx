"use client";

import { useState } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/config/constants";

const blogPosts = BLOG_POSTS;

export default function BlogController() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Guides", "Strategy", "Finance", "Fantasy Sports"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Header & Breadcrumb */}
      <section className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-[#f59e0b] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#f59e0b]">Blog</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-bold uppercase tracking-wide">
          📰 Official News, Guides & Strategies
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Luckx{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f59e0b] via-amber-300 to-yellow-500">
            Blog & Insights
          </span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Stay updated with APK release notes, gameplay strategies, bonus
          announcements, and instant withdrawal guides.
        </p>
      </section>

      {/* Search & Filter Bar */}
      <div className="space-y-4">
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search articles (e.g. UPI withdrawal, APK download)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#161f30] border border-[#2a364f] text-white placeholder-slate-400 focus:outline-none focus:border-[#f59e0b] text-sm shadow-inner transition-colors"
          />
          <span className="absolute left-4 top-3 text-slate-400 text-lg">
            🔍
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-[#f59e0b] text-slate-950 font-bold shadow-lg shadow-[#f59e0b]/20"
                  : "bg-[#161f30] text-slate-300 border border-[#2a364f] hover:border-slate-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group p-6 rounded-2xl bg-[#161f30] border border-[#2a364f] hover:border-[#f59e0b]/50 transition-all flex flex-col justify-between space-y-4 shadow-xl hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{post.image}</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-[10px] font-bold uppercase">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-[#f59e0b] transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-400">
                <span>📅 {post.date}</span>
                <span className="text-[#10b981] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read Article →
                </span>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12 bg-[#161f30] border border-[#2a364f] rounded-2xl text-slate-400 text-sm">
            No blog posts found matching your query &quot;{searchQuery}&quot;.
          </div>
        )}
      </section>
    </main>
  );
}
