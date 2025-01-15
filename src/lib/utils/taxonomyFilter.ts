import { normalizeText } from "./textConverter";

const taxonomyFilter = (posts: any[], name: string, key: string) => {
  return posts.filter((post) =>
    post.data[name].map((item: string) => normalizeText(item)).includes(normalizeText(key))
  );
};

export default taxonomyFilter;
