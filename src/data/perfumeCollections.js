import { perfumes } from "./perfumes";

export const perfumeCollections = {
  perfume: perfumes, // 18 TOTAL
  men: perfumes.filter((p) => p.category === "men"), // 12
  women: perfumes.filter((p) => p.category === "women"), // 2
  unisex: perfumes.filter((p) => p.category === "unisex"), // 4
};
