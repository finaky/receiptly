import { Add } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface IAddProduct {
  productName: string;
  setProductName: Dispatch<SetStateAction<string>>;
  productPrice: string;
  setProductPrice: Dispatch<SetStateAction<string>>;
  addProduct: () => void;
}

export const AddProduct = ({
  productName,
  setProductName,
  productPrice,
  setProductPrice,
  addProduct,
}: IAddProduct) => {
  return (
    <div className="border rounded-2xl border-white/5 bg-black/10 border-solid py-4 mt-5 ">
      <p className="mb-2 font-bold text-white/30">Dodaj Nowy produkt</p>

      <div className="flex justify-center gap-3">
        <TextField
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          label="Nazwa Produktu"
          variant="outlined"
          className="w-64"
        />

        <TextField
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          type="number"
          label="Cena (zł)"
          variant="outlined"
          className="w-24"
          slotProps={{ htmlInput: { min: 0, step: "0.01" } }}
          sx={{
            "& input[type=number]::-webkit-inner-spin-button": {
              WebkitAppearance: "none",
              margin: 0,
            },
            "& input[type=number]::-webkit-outer-spin-button": {
              WebkitAppearance: "none",
              margin: 0,
            },
            "& input[type=number]": {
              MozAppearance: "textfield",
            },
          }}
        />

        <Button variant="contained" onClick={addProduct}>
          <Add />
        </Button>
      </div>
    </div>
  );
};
