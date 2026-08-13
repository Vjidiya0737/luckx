import FAQController from "./faq.controller";
import { buildMetadata } from "../../config/seo";

export const metadata = buildMetadata({
  title: "FAQ - Luckx Games",
  description:
    "Frequently asked questions about Luckx APK, accounts, withdrawals, and bonuses.",
  path: "/faq",
  keywords: ["Luckx FAQ", "Luckx help", "Luckx support"],
});

const fAQPage = () => {
  return <FAQController />;
};

export default fAQPage;
