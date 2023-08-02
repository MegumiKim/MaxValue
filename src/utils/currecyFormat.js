export default function formattedNOK(number) {
  return new Intl.NumberFormat("en-DE", {
    style: "currency",
    currency: "NOK",
  }).format(number);
}
