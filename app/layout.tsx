import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { SITE_URL } from "../config/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Luckx Games – Official Luckx Guide",

  description:
    "Complete guide for Luckx Games including APK download, login instructions, registration, bonuses, and latest updates.",

  keywords: [
    "Luckx",
    "Luckx Games",
    "Luckx APK",
    "Luckx APK Download",
    "Luckx Game",
    "Luckx Login",
    "Luckx Registration",
    "Luckx App",
  ],

  openGraph: {
    title: "Luckx Games – Official Luckx Guide",
    description:
      "Complete guide for Luckx Games including APK download, login instructions, registration, bonuses, and latest updates.",
    url: SITE_URL + "/",
    siteName: "Luckx Games",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Luckx Games – Official Luckx Guide",
    description:
      "Complete guide for Luckx Games including APK download, login instructions, registration, bonuses, and latest updates.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
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
