import BlogController from "./blog.controller";
import { buildMetadata } from "../../config/seo";

export const metadata = buildMetadata({
  title: "Blog - Luckx Games",
  description:
    "Latest articles, tips, and news about Luckx games and strategies.",
  path: "/blog",
  keywords: ["Luckx blog", "Luckx tips", "Luckx news"],
});

const BlogPage = () => {
  return <BlogController />;
};

export default BlogPage;
