export const perfumeCollections = {
  perfume: Array.from({ length: 18 }, (_, i) => ({
    id: i,
    name: `Signature No. ${i + 1}`,
    description: "Elegant and timeless fragrance composition.",
    bestSuit: ["Date Night", "Special Occasion", "Versatile"] // Example, adjust as needed
  })),
  men: Array.from({ length: 11 }, (_, i) => ({
    id: i + 18,
    name: `Men's Essence ${i + 1}`,
    description: "Bold and sophisticated masculine scent.",
    bestSuit: ["Party & Event", "Versatile", "Summer"]
  })),
  women: Array.from({ length: 2 }, (_, i) => ({
    id: i + 29,
    name: `Women's Bloom ${i + 1}`,
    description: "Delicate and feminine floral notes.",
    bestSuit: ["Date Night", "Special Occasion"]
  })),
  unisex: Array.from({ length: 4 }, (_, i) => ({
    id: i + 31,
    name: `Unisex Aura ${i + 1}`,
    description: "Versatile and modern fragrance for all.",
    bestSuit: ["Rainy & Cold", "Summer", "Versatile"]
  }))
};
