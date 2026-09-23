import { formatPrice } from "@/lib/format-price";
import { Button } from "@mui/material";
import { IReceipt } from "./list-receipts";

export const DetailReceipt = ({
  selectedReceipt,
  setSelectedReceipt,
}: {
  selectedReceipt: IReceipt;
  setSelectedReceipt: (v: IReceipt | null) => void;
}) => {
  return (
    <div className="mt-10">
      <div className="p-3 mb-5 bg-white/3 border border-white/5 rounded-3xl flex justify-between items-center">
        <div className="text-start ml-3 ">
          <p className="text-white/30 font-bold">Paragon</p>
          <p className="text-2xl font-bold">{selectedReceipt.receiptName}: </p>
          <p>{selectedReceipt.date}</p>
        </div>

        <div className="mr-3">
          <p className="text-white/30 font-bold">SUMA</p>
          <p className=" text-2xl font-bold">
            {formatPrice(selectedReceipt.totalCost)}
            zł
          </p>
        </div>
      </div>

      <ul className="bg-white/2 border border-white/5 rounded-3xl p-5 mb-5">
        {selectedReceipt.products.map((product, i) => (
          <li
            key={i}
            className="flex justify-between border-b border-white/3 p-2"
          >
            <p>{product.product}</p> <p>{formatPrice(product.price)}zł</p>
          </li>
        ))}
      </ul>

      <Button
        onClick={() => setSelectedReceipt(null)}
        variant="contained"
        color="error"
      >
        Wróć
      </Button>
    </div>
  );
};
