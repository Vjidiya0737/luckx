import ContactUsController from "./contactUs.controller";
import { buildMetadata } from "../../config/seo";

export const metadata = buildMetadata({
  title: "Contact Us - Luckx Games",
  description:
    "Reach Luckx support via Telegram, WhatsApp, or email for help and inquiries.",
  path: "/contact-us",
  keywords: ["Luckx support", "contact Luckx"],
});

const ContactUsPage = () => {
  return <ContactUsController />;
};

export default ContactUsPage;
