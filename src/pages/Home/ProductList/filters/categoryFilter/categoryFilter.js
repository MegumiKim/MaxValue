export default function categoryFilter(products, input) {
  const electronicsCategories = ["laptops", "smartphones"];
  const cosmeticsCategories = ["fragrances", "skincare"];
  const groceriesCategories = ["groceries"];
  const decorationsCategories = ["home-decoration", "furniture", "lighting"];
  const menCategories = [
    "mens-shirts",
    "mens-watches",
    "sunglasses",
    "mens-shoes",
  ];
  const womenCategories = [
    "womens-bags",
    "womens-watches",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "womens-jewellery",
  ];
  const othersCategories = ["automotive", "motorcycle"];

  switch (input) {
    case "all":
      return products;
    case "electronics":
      return products.filter((product) =>
        electronicsCategories.includes(product.category)
      );
    case "cosmetics":
      return products.filter((product) =>
        cosmeticsCategories.includes(product.category)
      );
    case "groceries":
      return products.filter((product) =>
        groceriesCategories.includes(product.category)
      );
    case "decorations":
      return products.filter((product) =>
        decorationsCategories.includes(product.category)
      );
    case "men":
      return products.filter((product) =>
        menCategories.includes(product.category)
      );
    case "women":
      return products.filter((product) =>
        womenCategories.includes(product.category)
      );
    case "others":
      return products.filter((product) =>
        othersCategories.includes(product.category)
      );
    default:
      return products;
  }
}
