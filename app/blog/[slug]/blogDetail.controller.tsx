import Link from "next/link";
import { notFound } from "next/navigation";
import { DOWNLOAD_LINKS } from "@/config/constants";

// Article content repository matching the slugs
const blogData = {
  "luckx-game-apk-download-guide-2026": {
    id: "1",
    title: "How to Download & Install Luckx APK (2026 Latest Version)",
    category: "Guides",
    date: "Aug 10, 2026",
    readTime: "4 min read",
    author: "Luckx Tech Team",
    image: "📱",
    content: `
      <p>Downloading the <strong>Luckx APK</strong> is quick and straightforward. Because real-money gaming apps are distributed outside the Google Play Store, users can download the official package directly from our website.</p>
      
      <h3>Step 1: Download the Official Package</h3>
      <p>Click on the <strong>Download Luckx APK</strong> button on our homepage. The total package size is approximately <strong>32 MB</strong>, ensuring fast downloads even on 3G/4G network connections.</p>
      
      <h3>Step 2: Enable Unknown Sources</h3>
      <p>Go to your phone's <em>Settings &gt; Security / Applications &gt; Enable "Install from Unknown Sources"</em>. This step is required for manually installing APK files on Android.</p>

      <h3>Step 3: Complete Installation & Register</h3>
      <p>Open your download manager, tap the downloaded APK file, and click <strong>Install</strong>. Once launched, register using your active mobile number to verify via OTP.</p>

      <h3>Step 4: Claim Welcome Signup Bonus</h3>
      <p>New verified accounts automatically trigger the welcome wheel where you can win between <strong>₹200 and ₹500</strong> in starting balance.</p>
    `,
  },
  "top-tips-to-win-real-cash-in-color-prediction": {
    id: "2",
    title: "Top 5 Strategies for Color Prediction & Skill Games",
    category: "Strategy",
    date: "Aug 08, 2026",
    readTime: "6 min read",
    author: "Pro Gamer Guide",
    image: "🎯",
    content: `
      <p>Winning in real-cash skill games like Color Prediction and Rummy requires disciplined bankroll management and tactical observation rather than purely relying on luck.</p>
      
      <h3>1. Practice Strict Bankroll Management</h3>
      <p>Never wager more than 5% of your total balance in a single round. Setting strict daily limits keeps your play session sustainable and enjoyable.</p>

      <h3>2. Track Past Pattern Histories</h3>
      <p>Observe color trends and sequence records in previous game rounds before placing higher stakes. Utilizing systematic progression rules helps minimize loss streaks.</p>

      <h3>3. Utilize Daily Free Spins & Bonuses</h3>
      <p>Leverage your daily check-in perks and spin rewards to build up playing capital without drawing entirely from your cash deposits.</p>
    `,
  },
  "how-to-withdraw-winnings-instantly-via-upi": {
    id: "3",
    title: "How to Withdraw Money Instantly via UPI & Paytm on Luckx",
    category: "Finance",
    date: "Aug 05, 2026",
    readTime: "3 min read",
    author: "Finance Support",
    image: "💸",
    content: `
      <p>Getting your winnings transferred to your account on Luckx is designed to be fast and hassle-free.</p>
      
      <h3>Supported Payout Options</h3>
      <ul>
        <li><strong>Instant UPI:</strong> Google Pay, PhonePe, Paytm UPI</li>
        <li><strong>E-Wallets:</strong> Paytm Wallet</li>
        <li><strong>Bank Transfer:</strong> IMPS Direct Bank Deposit</li>
      </ul>

      <h3>Withdrawal Steps</h3>
      <p>Navigate to the <em>Wallet &gt; Withdraw</em> section in the Luckx app. Input your registered UPI ID or Bank account details, enter the amount (minimum ₹100), and tap submit. Payouts are normally credited within 5 to 15 minutes.</p>
    `,
  },
  "fantasy-cricket-tips-luckx-app": {
    id: "4",
    title: "Fantasy Cricket Masterclass: How to Build Winning Teams",
    category: "Fantasy Sports",
    date: "Aug 01, 2026",
    readTime: "5 min read",
    author: "Cricket Analyst",
    image: "🏏",
    content: `
      <p>Fantasy Cricket on Luckx lets sports enthusiasts convert their match knowledge into real cash rewards.</p>

      <h3>Key Strategy Rules</h3>
      <p>Always inspect pitch reports and weather conditions before choosing your Captain and Vice-Captain. Captains grant <strong>2x points</strong>, making them crucial for securing top ranking spots on match leaderboards.</p>
    `,
  },
};

export default async function BlogDetailController({
  params,
}: {
  params: { slug: keyof typeof blogData };
}) {
  const { slug } = params;
  const post = blogData[slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
        <Link href="/" className="hover:text-[#f59e0b] transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#f59e0b] transition-colors">
          Blog
        </Link>
        <span>/</span>
        <span className="text-[#f59e0b] truncate">{post.title}</span>
      </div>

      {/* Article Header */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{post.image}</span>
          <span className="px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-bold uppercase">
            {post.category}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 border-y border-[#2a364f] py-3">
          <span>
            ✍️ By <strong>{post.author}</strong>
          </span>
          <span>📅 {post.date}</span>
          <span>⏱️ {post.readTime}</span>
        </div>
      </section>

      {/* Main Article Body */}
      <article
        className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 
            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:pt-4 [&>strong]:text-white [&>a]:text-[#10b981]"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Bottom CTA Card */}
      <section className="p-6 rounded-2xl bg-linear-to-r from-slate-900 via-[#161f30] to-slate-900 border border-[#2a364f] text-center space-y-4 shadow-xl mt-10">
        <h2 className="text-xl font-bold text-white">
          Ready to play on <span className="text-[#f59e0b]">Luckx Game</span>?
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
          Download the official 32 MB APK and claim up to ₹500 welcome bonus
          today.
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

      {/* Back Button */}
      <div className="pt-4 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#f59e0b] transition-colors"
        >
          ← Back to all blog posts
        </Link>
      </div>
    </main>
  );
}
