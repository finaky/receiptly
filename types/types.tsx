export type Product = {
  product: string;
  price: number;
};

export interface IProduct {
  product: string;
  price: number;
}

export interface IReceipt {
  receiptName: string;
  date: string;
  totalCost: number;
  products: IProduct[];
}
