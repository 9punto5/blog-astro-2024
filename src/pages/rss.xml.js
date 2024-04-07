import rss from "@astrojs/rss";

const postImportResult = import.meta.globEager("./posts/*.md");
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: "9punto5 RSS Feed",
    description: "RSS feed for 9punto5",
    site: import.meta.env.SITE,
    items: import.meta.glob("./posts/**/*.md"),
  });
