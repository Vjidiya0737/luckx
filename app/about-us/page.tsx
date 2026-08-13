import AboutUsController from "./aboutUs.controller";
import { buildMetadata } from "../../config/seo";

export const metadata = buildMetadata({
  title: "About Us - Luckx Games",
  description:
    "Learn about Luckx, our mission, team, and commitment to fair play.",
  path: "/about-us",
  keywords: ["About Luckx", "Luckx team", "Luckx mission"],
});

const AboutUsPage = () => {
  return <AboutUsController />;
};

export default AboutUsPage;
