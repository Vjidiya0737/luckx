export interface NavLink {
  name: string;
  href: string;
}

export interface AppSpecs {
  label: string;
  value: string;
}

export interface FAQItem {
  category: string;
  q: string;
  a: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

export const SITE_CONFIG = {
  name: "LuckX Games",
  shortName: "LuckX Game",
  domain: "www.luckxgameplay.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.luckxgameplay.com",
  ogImage: "/luckx-og.jpeg",
  themeColor: "#1e293b",
  backgroundColor: "#0f172a",
  title: "LuckX Game – Download App, Register & Login Official",
  description:
    "Explore LuckX Games: official APK download guide, registration steps, Android access, safety tips, FAQs, and responsible gaming support.",
  keywords: [
    "LuckX Game",
    "LuckX Game download",
    "LuckX APK download",
    "LuckX app login",
    "LuckX register",
    "LuckX gameplay",
    "LuckX official site",
    "LuckX Android app",
    "LuckX tips and tricks",
  ],
  author: {
    name: "LuckX Games Official",
    url: "https://www.luckxgameplay.com",
  },
};

export const SITE_URL = SITE_CONFIG.url;

export interface GameItem {
  name: string;
  category: string;
}

export const DOWNLOAD_LINKS = {
  DEFAULT_APK:
    "https://luckx-in.luckxhub.com/en/affiliate-invited?c=WWWXX86HYV&s=3",
  TELEGRAM: "https://t.me/luckxofficial",
  WHATSAPP: "https://wa.me/1234567890",
  EMAIL: "support@luckxgameplay.com",
} as const;

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "FAQ", href: "/faq" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Blog", href: "/blog" },
];

export const LEGAL_LINKS: NavLink[] = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Responsible Gaming", href: "#disclaimer" },
];

export const APP_DETAILS: AppSpecs[] = [
  { label: "App Name", value: "Luckx Official" },
  { label: "Category", value: "Online Skill Games / Fantasy Sports" },
  { label: "Version", value: "v1.4.2 (Updated 2026)" },
  { label: "File Size", value: "32 MB (Lite Version)" },
  { label: "Supported Platforms", value: "Android APK • iOS Web Version" },
  { label: "Welcome Bonus", value: "₹200 – ₹500 Free Claim" },
  { label: "Payout Options", value: "Instant UPI, Paytm, Bank Transfer" },
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: "General",
    q: "What is Luckx APK?",
    a: "Luckx is an all-in-one online earnings and gaming application where users can play slots, color prediction, Teen Patti, Rummy, Ludo, Poker, and Fantasy Cricket to win real rewards.",
  },
  {
    category: "Account & APK",
    q: "Is Luckx safe to download and install?",
    a: "Yes, Luckx is safe when downloaded directly from our official website (luckxgameplay.com). The APK package undergoes strict security checks and uses encrypted protocol servers to safeguard user data.",
  },
  {
    category: "Withdrawal & Bonus",
    q: "Does Luckx provide a new user signup bonus?",
    a: "Yes! All new users receive a welcome Spin & Win bonus ranging from ₹200 to ₹500 upon completing mobile registration and OTP verification.",
  },
  {
    category: "Withdrawal & Bonus",
    q: "Can I withdraw my winnings from Luckx?",
    a: "Yes, players can instantly withdraw their winnings directly into their bank account via Instant UPI, Paytm Wallet, or direct Bank IMPS transfer.",
  },
  {
    category: "General",
    q: "Which games are available in the Luckx App?",
    a: "Luckx features a wide array of games including Fortune Tiger, Lucky Neko, Color Prediction, Rummy, Teen Patti, Andar Bahar, Ludo, Poker, and live Fantasy Cricket leagues.",
  },
  {
    category: "Withdrawal & Bonus",
    q: "What is the minimum withdrawal amount in Luckx?",
    a: "The minimum withdrawal threshold generally starts from ₹100 to ₹200 depending on the chosen payment method and account level.",
  },
  {
    category: "Account & APK",
    q: "Is Luckx available on Google Play Store?",
    a: "No. Due to Google Play Store policies regarding real-money gaming apps, Luckx is available exclusively as an Android APK download through our official website.",
  },
  {
    category: "Legality & Rules",
    q: "Is Luckx legal in India?",
    a: "Online skill-based gaming is legal in most Indian states. However, users are advised to verify local state regulations before participating, as certain states restrict real-cash games.",
  },
  {
    category: "Withdrawal & Bonus",
    q: "How long does a withdrawal take to process?",
    a: "UPI and Paytm withdrawals are usually processed instantly (5–15 minutes). Direct bank transfers may take up to 24 hours depending on banking queue times.",
  },
  {
    category: "Account & APK",
    q: "How can I contact Luckx customer support?",
    a: "Customer support is accessible 24/7 directly through the in-app live chat widget, official Telegram support channel, or WhatsApp helpdesk.",
  },
  {
    category: "Account & APK",
    q: "Do I need to update the Luckx APK regularly?",
    a: "Yes. Keeping your Luckx APK updated ensures you get access to new game titles, better performance, active bonus events, and critical security patches.",
  },
  {
    category: "Legality & Rules",
    q: "Is there an age limit to play on Luckx?",
    a: "Yes, Luckx is strictly restricted to users who are 18 years of age or older.",
  },
];

export const GAMES_LIST: GameItem[] = [
  { name: "Fortune Tiger", category: "Slots" },
  { name: "Lucky Neko", category: "Slots" },
  { name: "Dragon Hatch", category: "Slots" },
  { name: "Gem Saviour", category: "Slots" },
  { name: "Teen Patti", category: "Cards" },
  { name: "Andar Bahar", category: "Cards" },
  { name: "Rummy", category: "Skill" },
  { name: "Fantasy Cricket", category: "Sports" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "luckx-game-apk-download-guide-2026",
    title: "How to Download & Install Luckx APK (2026 Latest Version)",
    excerpt:
      "Step-by-step installation guide to download the latest Luckx APK safely on Android devices and claim your ₹500 signup bonus.",
    category: "Guides",
    date: "Aug 10, 2026",
    readTime: "4 min read",
    image: "📱",
    author: "Luckx Tech Team",
  },
  {
    id: "2",
    slug: "top-tips-to-win-real-cash-in-color-prediction",
    title: "Top 5 Strategies for Color Prediction & Skill Games",
    excerpt:
      "Learn effective bankroll management techniques and timing strategies to improve your win rate on Luckx real-cash games.",
    category: "Strategy",
    date: "Aug 08, 2026",
    readTime: "6 min read",
    image: "🎯",
    author: "Pro Gamer Guide",
  },
  {
    id: "3",
    slug: "how-to-withdraw-winnings-instantly-via-upi",
    title: "How to Withdraw Money Instantly via UPI & Paytm on Luckx",
    excerpt:
      "A complete walkthrough on setting up your withdrawal account, minimum withdrawal limits, and instant payout timelines.",
    category: "Finance",
    date: "Aug 05, 2026",
    readTime: "3 min read",
    image: "💸",
    author: "Finance Support",
  },
  {
    id: "4",
    slug: "fantasy-cricket-tips-luckx-app",
    title: "Fantasy Cricket Masterclass: How to Build Winning Teams",
    excerpt:
      "Key metrics, pitch report analysis, and player combination tips to top the leaderboards in Luckx fantasy cricket leagues.",
    category: "Fantasy Sports",
    date: "Aug 01, 2026",
    readTime: "5 min read",
    image: "🏏",
    author: "Cricket Analyst",
  },
  {
    id: "5",
    slug: "luckx-bonus-offers-rewards-guide",
    title: "Luckx Bonus & Rewards Guide: How to Maximize Your Benefits",
    excerpt:
      "Discover how Luckx bonuses, rewards, and promotional offers work and learn smart ways to use them responsibly.",
    category: "Bonuses",
    date: "Jul 29, 2026",
    readTime: "5 min read",
    image: "🎁",
    author: "Luckx Rewards Team",
  },
  {
    id: "6",
    slug: "luckx-account-registration-complete-guide",
    title: "Luckx Account Registration: Complete Step-by-Step Guide",
    excerpt:
      "A simple guide to creating your Luckx account, completing verification, and getting started with the platform.",
    category: "Guides",
    date: "Jul 26, 2026",
    readTime: "4 min read",
    image: "📝",
    author: "Luckx Tech Team",
  },
  {
    id: "7",
    slug: "responsible-gaming-bankroll-management-tips",
    title: "Responsible Gaming: Smart Bankroll Management Tips",
    excerpt:
      "Learn practical bankroll management techniques, spending limits, and habits that can help you keep gaming within your budget.",
    category: "Responsible Gaming",
    date: "Jul 23, 2026",
    readTime: "6 min read",
    image: "💰",
    author: "Luckx Support Team",
  },
  {
    id: "8",
    slug: "luckx-color-prediction-game-guide",
    title: "Color Prediction Games Explained: A Beginner's Guide",
    excerpt:
      "Understand how color prediction games work, explore common game formats, and learn important factors to consider before playing.",
    category: "Guides",
    date: "Jul 20, 2026",
    readTime: "5 min read",
    image: "🌈",
    author: "Game Guide Team",
  },
  {
    id: "9",
    slug: "luckx-android-app-features-2026",
    title: "Luckx Android App: Top Features You Should Know",
    excerpt:
      "Explore the key features of the Luckx Android app, from account management and game navigation to payments and support.",
    category: "App Features",
    date: "Jul 17, 2026",
    readTime: "4 min read",
    image: "📲",
    author: "Luckx Tech Team",
  },
  {
    id: "10",
    slug: "upi-payment-safety-tips-online-gaming",
    title: "UPI Payment Safety Tips for Online Gaming Platforms",
    excerpt:
      "Follow these practical UPI security tips to protect your payment details and keep your online gaming transactions safer.",
    category: "Finance",
    date: "Jul 14, 2026",
    readTime: "5 min read",
    image: "🔐",
    author: "Finance Support",
  },
  {
    id: "11",
    slug: "fantasy-cricket-player-selection-guide",
    title: "Fantasy Cricket Player Selection: 7 Things to Consider",
    excerpt:
      "From recent form and playing conditions to team combinations, explore important factors when selecting fantasy cricket players.",
    category: "Fantasy Sports",
    date: "Jul 11, 2026",
    readTime: "6 min read",
    image: "🏆",
    author: "Cricket Analyst",
  },
  {
    id: "12",
    slug: "luckx-withdrawal-troubleshooting-guide",
    title: "Luckx Withdrawal Problems? Common Issues & Solutions",
    excerpt:
      "Learn how to troubleshoot common withdrawal issues, check transaction details, and contact support when a payout is delayed.",
    category: "Finance",
    date: "Jul 08, 2026",
    readTime: "4 min read",
    image: "💳",
    author: "Finance Support",
  },
  {
    id: "13",
    slug: "how-to-keep-luckx-account-secure",
    title: "How to Keep Your Luckx Account Secure",
    excerpt:
      "Protect your account with strong passwords, secure login habits, verification checks, and practical online security measures.",
    category: "Security",
    date: "Jul 05, 2026",
    readTime: "5 min read",
    image: "🛡️",
    author: "Luckx Security Team",
  },
  {
    id: "14",
    slug: "luckx-faq-beginners-guide",
    title: "Luckx FAQ: Answers to Common Beginner Questions",
    excerpt:
      "Find answers to frequently asked questions about registration, games, bonuses, payments, withdrawals, and account support.",
    category: "FAQ",
    date: "Jul 02, 2026",
    readTime: "5 min read",
    image: "❓",
    author: "Luckx Support Team",
  },
  {
    id: "15",
    slug: "how-to-play-rummy-rules-guide",
    title: "Mastering Indian Rummy: Rules, Sets, and Sequences Explained",
    excerpt:
      "A complete walkthrough of 13-card rummy rules, differentiating pure sequences from impures, and minimizing penalty points.",
    category: "Guides",
    date: "Jul 05, 2026",
    readTime: "6 min read",
    image: "🃏",
    author: "Luckx Strategy Desk",
  },
  {
    id: "16",
    slug: "aviator-crash-game-tricks-tips",
    title: "Aviator Crash Game Strategies: Risk Management & Auto Cashout",
    excerpt:
      "Explore multiplier curves, timing principles, and how dual-bet setups help manage bankroll volatility effectively.",
    category: "Casino",
    date: "Jul 08, 2026",
    readTime: "5 min read",
    image: "✈️",
    author: "Luckx Pro Team",
  },
  {
    id: "17",
    slug: "instant-upi-withdrawals-explained",
    title: "How Instant UPI & IMPS Withdrawals Work on Luckx",
    excerpt:
      "Understand the payment rail mechanics behind 15-minute cashouts, daily transfer caps, and instant account settlement.",
    category: "Payments",
    date: "Jul 11, 2026",
    readTime: "4 min read",
    image: "⚡",
    author: "Finance Team",
  },
  {
    id: "18",
    slug: "kyc-verification-step-by-step",
    title: "Step-by-Step KYC Verification: Keep Your Account Fully Compliant",
    excerpt:
      "Why identity and bank document verification matters, standard approval timelines, and tips for instant one-click approval.",
    category: "Account & Safety",
    date: "Jul 14, 2026",
    readTime: "4 min read",
    image: "🛡️",
    author: "Luckx Compliance",
  },
  {
    id: "19",
    slug: "understanding-rng-certification-fair-play",
    title: "Demystifying RNG: What Certified Randomness Means for Fair Play",
    excerpt:
      "An inside look into hardware-level algorithms and independent testing labs ensuring every card and multiplier outcome is neutral.",
    category: "Fair Play",
    date: "Jul 17, 2026",
    readTime: "5 min read",
    image: "🎲",
    author: "Tech & Security",
  },
  {
    id: "20",
    slug: "daily-race-leaderboard-scoring",
    title: "Daily Race Tournaments: How Points and Prize Pools Are Calculated",
    excerpt:
      "Unlock higher leaderboard standings by tracking wager calculations, round multipliers, and daily reset mechanics.",
    category: "Tournaments",
    date: "Jul 20, 2026",
    readTime: "5 min read",
    image: "🏆",
    author: "Luckx Events",
  },
  {
    id: "21",
    slug: "points-vs-pool-vs-deals-rummy",
    title: "Points Rummy vs. Pool Rummy vs. Deals Rummy: Which Fits You?",
    excerpt:
      "A deep comparative analysis of round duration, scoring metrics, and risk-reward profiles across key rummy variants.",
    category: "Guides",
    date: "Jul 24, 2026",
    readTime: "6 min read",
    image: "🎴",
    author: "Luckx Strategy Desk",
  },
  {
    id: "22",
    slug: "fortune-gems-500-slot-review",
    title: "Fortune Gems 500 Breakdown: Paylines, Wilds, and Bonus Multipliers",
    excerpt:
      "Reviewing grid mechanics, symbol pay tables, and multiplier reels in one of the most popular arcade slot titles.",
    category: "Casino",
    date: "Jul 27, 2026",
    readTime: "4 min read",
    image: "💎",
    author: "Slot Reviewers",
  },
  {
    id: "23",
    slug: "responsible-gaming-limits-bankroll",
    title: "Responsible Gaming: Setting Deposit Caps and Managing Bankrolls",
    excerpt:
      "Actionable habits for sustainable gaming, including strict loss limits, session timers, and disciplined self-exclusion tools.",
    category: "Fair Play",
    date: "Jul 30, 2026",
    readTime: "5 min read",
    image: "⏳",
    author: "Luckx Player Welfare",
  },
  {
    id: "24",
    slug: "online-ludo-tactics-winning-moves",
    title: "Competitive Online Ludo: Tactical Pawn Movement and Board Control",
    excerpt:
      "Turn casual board play into strategic wins by understanding safe-zone timings, token splitting, and defensive blocking.",
    category: "Guides",
    date: "Aug 03, 2026",
    readTime: "4 min read",
    image: "🎯",
    author: "Arcade Master",
  },
  {
    id: "25",
    slug: "vip-loyalty-tiers-and-perks",
    title: "Luckx VIP Program Explained: Tier Upgrades, Rebates, and Rewards",
    excerpt:
      "Everything you need to know about accumulating VIP points, level-up bonuses, prioritized support, and reduced withdrawal limits.",
    category: "Rewards",
    date: "Aug 06, 2026",
    readTime: "5 min read",
    image: "👑",
    author: "Luckx VIP Club",
  },
  {
    id: "26",
    slug: "resolving-common-deposit-issues",
    title: "Troubleshooting UPI & Bank Deposit Delays: Quick Solutions",
    excerpt:
      "Step-by-step guidance on tracking reference (UTR) numbers, bank processing windows, and automated dispute resolution.",
    category: "Payments",
    date: "Aug 09, 2026",
    readTime: "4 min read",
    image: "💳",
    author: "Luckx Support Team",
  },
  {
    id: "27",
    slug: "chicken-road-2-beginners-walkthrough",
    title: "Chicken Road 2 Guide: Navigating Lanes Without Bumping Out",
    excerpt:
      "A complete look at stepping mechanics, lane multipliers, and deciding when to bank your winnings in this mini-game.",
    category: "Casino",
    date: "Aug 13, 2026",
    readTime: "4 min read",
    image: "🐔",
    author: "Game Analysis Desk",
  },
  {
    id: "28",
    slug: "anti-fraud-account-security-tips",
    title: "Securing Your Gaming Account: Two-Factor Auth and Phishing Safety",
    excerpt:
      "Essential security practices to safeguard wallet balances, prevent unauthorized logins, and identify fake portal links.",
    category: "Account & Safety",
    date: "Aug 16, 2026",
    readTime: "5 min read",
    image: "🔒",
    author: "Tech & Security",
  },
  {
    id: "29",
    slug: "fortune-garuda-500-feature-breakdown",
    title: "Fortune Garuda 500: Paytables, Free Respins, and Feature Triggers",
    excerpt:
      "Explore the golden eagle theme, expanding wilds, and theoretical return-to-player percentages on Fortune Garuda 500.",
    category: "Casino",
    date: "Aug 20, 2026",
    readTime: "4 min read",
    image: "🦅",
    author: "Slot Reviewers",
  },
  {
    id: "30",
    slug: "top-rummy-blunders-to-avoid",
    title: "Top 7 Rummy Mistakes Beginners Make (And How to Fix Them)",
    excerpt:
      "Avoid costly declaration errors, poor discard discipline, and holding onto unmelded high cards during fast-paced matches.",
    category: "Guides",
    date: "Aug 23, 2026",
    readTime: "6 min read",
    image: "⚠️",
    author: "Luckx Strategy Desk",
  },
  {
    id: "31",
    slug: "sports-exchange-vs-sportsbook",
    title: "Come Sports Explained: Fixed Odds vs. Live In-Play Market Action",
    excerpt:
      "A quick primer on cricket, football, and tennis match betting, reading dynamic odds, and navigating event scoreboards.",
    category: "Sports",
    date: "Aug 27, 2026",
    readTime: "5 min read",
    image: "⚽",
    author: "Sportsbook Editors",
  },
  {
    id: "32",
    slug: "refer-and-earn-affiliate-program",
    title: "Luckx Refer & Earn: How to Build Ongoing Commission Rewards",
    excerpt:
      "How to share your invite link, track referee deposits, and maximize tier-based promotional bonuses every week.",
    category: "Rewards",
    date: "Aug 31, 2026",
    readTime: "4 min read",
    image: "👥",
    author: "Affiliate Desk",
  },
  {
    id: "33",
    slug: "understanding-pappu-card-game",
    title: "Pappu Card Game: Fast-Paced Matching Rules and Scoring",
    excerpt:
      "Learn the quick setup, scoring rounds, and card pairing tactics that make Pappu a top-trending quick-round game.",
    category: "Guides",
    date: "Sep 03, 2026",
    readTime: "4 min read",
    image: "🎴",
    author: "Game Analysis Desk",
  },
  {
    id: "34",
    slug: "pwa-vs-apk-install-guide",
    title: "Web App (PWA) vs Android APK: Best Ways to Install Luckx",
    excerpt:
      "How to install the lightweight home screen progressive web app or standard APK for offline caching and fast load times.",
    category: "Guides",
    date: "Sep 07, 2026",
    readTime: "4 min read",
    image: "📱",
    author: "Luckx Tech Support",
  },
  {
    id: "35",
    slug: "cricket-ipl-t20-betting-basics",
    title: "T20 Match Day Strategies: Analyzing Pitch Reports and Overs",
    excerpt:
      "Key statistical factors to evaluate before live-betting on T20 fixtures, powerplay swings, and death-over run tallies.",
    category: "Sports",
    date: "Sep 10, 2026",
    readTime: "6 min read",
    image: "🏏",
    author: "Sportsbook Editors",
  },
  {
    id: "36",
    slug: "what-is-rtp-in-online-gaming",
    title: "What Does 99% RTP Mean? A Realistic Math Primer for Gamers",
    excerpt:
      "Understanding Return to Player percentages, house edges, and statistical variance across short versus long session counts.",
    category: "Fair Play",
    date: "Sep 13, 2026",
    readTime: "5 min read",
    image: "📊",
    author: "Tech & Security",
  },
  {
    id: "37",
    slug: "how-to-participate-in-rummy-freerolls",
    title: "Luckx Rummy Freerolls: Win Real Cash Pools with Zero Buy-In",
    excerpt:
      "How to register for daily free tournaments, qualifying round schedules, and advancing through multi-table tournament brackets.",
    category: "Tournaments",
    date: "Sep 15, 2026",
    readTime: "5 min read",
    image: "🎟️",
    author: "Luckx Events",
  },
  {
    id: "38",
    slug: "customer-support-channels-guide",
    title: "Reaching Luckx Support: 24/7 Live Chat, Tickets, and Queries",
    excerpt:
      "Where to find in-app live chat support, response expectations, and how to format ticket details for speedy resolutions.",
    category: "Account & Safety",
    date: "Sep 17, 2026",
    readTime: "3 min read",
    image: "💬",
    author: "Luckx Support Team",
  },
  {
    id: "39",
    slug: "luckx-2026-roadmap-new-features",
    title: "What's Next for Luckx: Upcoming Games, UI Enhancements & Rewards",
    excerpt:
      "A sneak peek at new slot provider rollouts, faster withdrawal engines, and dedicated multi-table rummy desktop lobbies.",
    category: "News",
    date: "Sep 19, 2026",
    readTime: "4 min read",
    image: "🚀",
    author: "Luckx Product Team",
  },
];
