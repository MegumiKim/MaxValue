export default function sortItems(products, order) {
  console.log(order);

  switch (order) {
    case "lowestPrice":
      return products.sort((a, b) => a.price - b.price);
    case "highestPrice":
      return products.sort((a, b) => b.price - a.price);
    case "discountRate":
      return products.sort(
        (a, b) => b.discountPercentage - a.discountPercentage
      );

    default:
      return products;
  }
}
