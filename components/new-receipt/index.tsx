"use client";

import { Product } from "@/types/types";
import { Save } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { ProductsList } from "./products-list";
import { AddProduct } from "./add-product";

export const NewReceipt = ({ popup }: { popup: (type: number) => void }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productName, setProductName] = useState("");
  const [receiptName, setReceiptName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const addProduct = () => {
    const price = Number(productPrice);

    if (!productName.trim() || !productPrice.trim() || price <= 0) {
      popup(3);
      return;
    }

    setProducts((prev) => [
      ...prev,
      {
        product: productName.trim(),
        price,
      },
    ]);

    setProductName("");
    setProductPrice("");

    popup(0);
  };

  const save = async () => {
    if (!receiptName.trim() || products.length === 0) {
      popup(3);
      return;
    }

    const totalCost = products.reduce((sum, product) => sum + product.price, 0);

    const res = await fetch("/api/receipt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        receiptName: receiptName.trim(),
        date: new Date().toDateString(),
        totalCost,
        products,
      }),
    });

    if (!res.ok) {
      popup(3);
      return;
    }

    popup(2);

    setReceiptName("");
    setProducts([]);
    setProductName("");
    setProductPrice("");
  };

  return (
    <div className="bg-white/2 rounded-2xl w-140 min-h-100 p-10 text-white">
      <h2 className="text-3xl font-bold">Dodaj Paragon</h2>
      <h3 className="text-white/30">Dodaj produkty i zapisz paragon!</h3>

      <TextField
        value={receiptName}
        onChange={(e) => setReceiptName(e.target.value)}
        label="Nazwa Paragonu"
        variant="outlined"
        sx={{ width: "100%", margin: "20px 0" }}
      />

      <AddProduct
        productName={productName}
        setProductName={setProductName}
        setProductPrice={setProductPrice}
        productPrice={productPrice}
        addProduct={addProduct}
      />

      <p className="mt-12 mb-2 text-sm text-start text-white/30 font-bold">
        Produkty
      </p>

      <ProductsList products={products} setProducts={setProducts} />

      <Button
        sx={{
          marginTop: "40px",
          padding: "15px 30px",
          width: "100%",
        }}
        variant="contained"
        endIcon={<Save />}
        onClick={save}
      >
        Zapisz Paragon
      </Button>
    </div>
  );
};
