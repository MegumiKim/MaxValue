export default function categoryFilter(products, input) {
  switch (input) {
    case "electronics":
      console.log(input);

      return products.filter(
        (product) =>
          product.category === "laptops" || product.category === "smartphones"
      );
    case "cosmetics":
      console.log(input);

      return products.filter(
        (product) =>
          product.category === "fragrances" || product.category === "skincare"
      );
    case "groceries":
      console.log(input);

      return products.filter((product) => product.category === "groceries");
    case "decorations":
      console.log(input);

      return products.filter(
        (product) =>
          product.category === "home-decoration" ||
          product.category === "furniture" ||
          product.category === "lighting"
      );
    case "men":
      console.log(input);

      return products.filter(
        (product) =>
          product.category === "mens-shirts" ||
          product.category === "mens-watches" ||
          product.category === "sunglasses" ||
          product.category === "mens-shows"
      );
    case "women":
      console.log(input);

      return products.filter(
        (product) =>
          product.category === "womens-bags" ||
          product.category === "womens-watches" ||
          product.category === "tops" ||
          product.category === "womens-dresses" ||
          product.category === "womens-womens-shoes" ||
          product.category === "womens-jewellery"
      );
    case "others":
      console.log(input);

      return products.filter(
        (product) =>
          product.category === "automotive" || product.category === "motorcycle"
      );

    default:
      return products;
  }
}
