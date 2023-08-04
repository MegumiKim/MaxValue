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

// export default function categoryFilter(products, input) {
//   switch (input) {
//     case "electronics":
//       console.log(input);

//       return products.filter(
//         (product) =>
//           product.category === "laptops" || product.category === "smartphones"
//       );
//     case "cosmetics":
//       console.log(input);

//       return products.filter(
//         (product) =>
//           product.category === "fragrances" || product.category === "skincare"
//       );
//     case "groceries":
//       console.log(input);

//       return products.filter((product) => product.category === "groceries");
//     case "decorations":
//       console.log(input);

//       return products.filter(
//         (product) =>
//           product.category === "home-decoration" ||
//           product.category === "furniture" ||
//           product.category === "lighting"
//       );
//     case "men":
//       console.log(input);

//       return products.filter(
//         (product) =>
//           product.category === "mens-shirts" ||
//           product.category === "mens-watches" ||
//           product.category === "sunglasses" ||
//           product.category === "mens-shows"
//       );
//     case "women":
//       console.log(input);

//       return products.filter(
//         (product) =>
//           product.category === "womens-bags" ||
//           product.category === "womens-watches" ||
//           product.category === "tops" ||
//           product.category === "womens-dresses" ||
//           product.category === "womens-shoes" ||
//           product.category === "womens-jewellery"
//       );
//     case "others":
//       console.log(input);

//       return products.filter(
//         (product) =>
//           product.category === "automotive" || product.category === "motorcycle"
//       );

//     default:
//       return products;
//   }
// }
