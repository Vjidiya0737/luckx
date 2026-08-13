import BlogDetailController from "./blogDetail.controller";
import { buildMetadata } from "../../../config/seo";
import { BLOG_POSTS } from "../../../config/constants";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug) || BLOG_POSTS[0];

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category],
  });
}

const BlogDetailPage = () => {
  return (
    <BlogDetailController
      params={{ slug: "top-tips-to-win-real-cash-in-color-prediction" }}
    />
  );
};

export default BlogDetailPage;
