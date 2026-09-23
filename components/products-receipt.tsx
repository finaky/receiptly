import { formatPrice } from "@/lib/format-price";
import { IReceipt } from "./list-receipts";

export const ProductsReceipts = ({
  setSelectedReceipt,
  data,
}: {
  setSelectedReceipt: (v: IReceipt | null) => void;
  data: IReceipt[];
}) => {
  const grandTotal = data.reduce((sum, item) => sum + item.totalCost, 0);
  return (
    <div className="">
      <div className="flex justify-between text-white/30 font-bold p-5">
        <p>PARAGON ({data.length}):</p>
        <p>KOSZT</p>
      </div>

      <ul className="rounded-3xl bg-white/2">
        {data.map((r, i) => (
          <li
            key={i}
            className="flex justify-between border-b border-white/3 p-5 "
          >
            <button
              onClick={() => setSelectedReceipt(r)}
              className="cursor-pointer hover:opacity-50 transition-opacity"
            >
              {r.receiptName}
            </button>
            <p>{formatPrice(r.totalCost)} zł</p>
          </li>
        ))}
      </ul>

      {data.length > 0 && (
        <div className="flex justify-between w-full items-center mt-6 p-3 text-sm font-bold text-white bg-white/2 rounded-xl border border-white/3">
          <span>Łącznie:</span>
          <span className="">{formatPrice(grandTotal)} zł</span>
        </div>
      )}
    </div>
  );
};
