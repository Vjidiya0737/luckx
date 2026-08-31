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
    "https://luckx-in.luckxhub.com/en/affiliate-invited?c=WWWXXGTWYH&s=3",
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
];
