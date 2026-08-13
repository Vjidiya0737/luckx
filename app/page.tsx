import type { Metadata } from "next";
import HomeController from "./home.controller";
import { SITE_URL } from "../config/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Luckx Games - Official luckx Guide",
  description:
    "Complete guide for luckx Games including APK download, login instructions, and latest updates.",
  keywords: ["Luckx", "Luckx APK", "luckx Guide"],
  openGraph: {
    title: "Luckx Games - Official luckx Guide",
    description:
      "Complete guide for luckx Games including APK download, login instructions, and latest updates.",
    url: SITE_URL + "/",
    siteName: "Luckx Games",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luckx Games - Official luckx Guide",
    description:
      "Complete guide for luckx Games including APK download, login instructions, and latest updates.",
  },
  alternates: {
    canonical: SITE_URL + "/",
    languages: {
      "x-default": "https://www.hu777gameplay.com",
    },
  },
};

export default function Home() {
  return <HomeController />;
}
