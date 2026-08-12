import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luckx | Real Cash Games APK Download",
  description:
    "Download the official Luckx APK to play real cash skill games, fantasy cricket, and win instant UPI payouts.",
  metadataBase: new URL("https://luckxgameplay.com"),
  openGraph: {
    title: "Luckx | Real Cash Games APK Download",
    description:
      "Download the official Luckx APK to play real cash skill games, fantasy cricket, and win instant UPI payouts.",
    url: "https://luckxgameplay.com",
    siteName: "Luckx",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luckx | Official APK Download",
    description:
      "Secure the Luckx APK and start playing slots, fantasy cricket, and instant payout games.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <div className="min-h-screen bg-luckx-dark text-slate-100 font-sans antialiased">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
