import HomeController from "./home.controller";
import { buildMetadata } from "../config/seo";

export const metadata = buildMetadata({
  title: "Luckx Games - Home",
  description:
    "Official Luckx guide: APK download, login, registration, bonuses, and latest updates.",
  path: "/",
  keywords: ["Luckx", "Luckx APK", "Luckx Guide"],
});

export default function Home() {
  return <HomeController />;
}
