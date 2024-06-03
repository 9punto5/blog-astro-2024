import rss from "@astrojs/rss";
import config from "@/config/config.json";
import { getSinglePage } from "@/lib/contentParser.astro";

export async function GET() {
  const posts = await getSinglePage("posts");
  return rss({
    title: config.site.title,
    description: config.metadata.meta_description,
    site: config.site.base_url,
    items: posts.map((post) => ({
      link: `/blog/${post.slug}/`,
      pubDate: post.data.date,
      title: post.data.title,
      author: post.data.authors.join(", "),
      categories: post.data.categories,
    })),
  });
}
