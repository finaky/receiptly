"use client";
import { useEffect, useState } from "react";
import { DetailReceipt } from "./details-receipt";
import { ProductsReceipts } from "./products-receipt";

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

export const ListReceipts = () => {
  const [data, setData] = useState<IReceipt[]>([]);
  const [selectedReceipt, setSelectedReceipt] = useState<IReceipt | null>(null);

  useEffect(() => {
    const getReceipts = async () => {
      const res = await fetch("/api/receipt");

      if (!res.ok) {
        console.error("Nie udalo sie pobrac paragonow! (/api/receipt)");
        return;
      }

      const data = await res.json();

      setData(data);
    };

    getReceipts();
  }, []);

  return (
    <div className="bg-white/2 rounded-2xl w-140 min-h-100 p-10 text-white">
      <h2 className="text-3xl font-bold">Lista Paragonów</h2>
      <h3 className="text-white/30 ">Lista wszystich paragonów!</h3>

      {selectedReceipt && (
        <DetailReceipt
          setSelectedReceipt={setSelectedReceipt}
          selectedReceipt={selectedReceipt}
        />
      )}

      {!selectedReceipt && (
        <ProductsReceipts data={data} setSelectedReceipt={setSelectedReceipt} />
      )}
    </div>
  );
};
