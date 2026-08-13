import DisclaimerController from "./disclaimer.controller";
import { buildMetadata } from "../../config/seo";

export const metadata = buildMetadata({
  title: "Disclaimer - Luckx Games",
  description:
    "Important legal and responsible gaming information for Luckx users.",
  path: "/disclaimer",
  keywords: ["Luckx disclaimer", "responsible gaming"],
});

const DisclaimerPage = () => {
  return <DisclaimerController />;
};

export default DisclaimerPage;
