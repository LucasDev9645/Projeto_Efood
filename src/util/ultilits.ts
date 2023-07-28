export const getDescription = (description: string) => {
  if (description.length > 100) {
    return description.slice(0, 200) + " ...";
  }
  return description;
};

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};
