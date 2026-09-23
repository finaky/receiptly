export const formatPrice = (v: number) => {
  return v.toFixed(2).replace(".", ",").padStart(4, "0");
};
