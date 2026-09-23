import { formatPrice } from "@/lib/format-price";
import { Product } from "@/types/types";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { Dispatch, SetStateAction } from "react";

export const ProductsList = ({
  products,
  setProducts,
}: {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
}) => {
  const deleteProduct = (index: number) => {
    setProducts((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <ul className="bg-black/10 min-h-10 w-full border rounded-2xl border-white/5">
      {products.length === 0 && (
        <li className="mt-2 text-white/30">Nie znaleziono zadnego produktu!</li>
      )}
      {products.map((product, i) => (
        <li
          key={i}
          className="flex items-center justify-between border-b border-white/10 rounded-2xl p-2"
        >
          <div className="text-start p-2">
            <p>{product.product}:</p>
            <p className="text-white/60">{formatPrice(product.price)} zł</p>
          </div>

          <button
            onClick={() => deleteProduct(i)}
            className="w-8 h-8  rounded-full text-red-400 transition-[scale] cursor-pointer hover:scale-120"
          >
            <DeleteOutlineOutlined />
          </button>
        </li>
      ))}
    </ul>
  );
};
