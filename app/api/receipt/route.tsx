import { Product } from "@/types/Product";
import { promises as fs } from "fs";

export async function POST(req: Request) {
  const r = await req.json();
  const products: Product[] = r.products;
  const receiptName = r.receiptName;
  const totalCost = r.totalCost;

  const path = process.cwd() + "/data/data.json";
  const file = await fs.readFile(path, "utf-8");
  const data = JSON.parse(file);

  data.push({
    receiptName,
    date: new Date().toDateString(),
    totalCost,
    products,
  });
  fs.writeFile(path, JSON.stringify(data, null, 2), "utf-8");

  return Response.json({ products });
}

export async function GET() {
  const path = process.cwd() + "/data/data.json";
  const file = await fs.readFile(path, "utf-8");
  const data = JSON.parse(file);

  return Response.json(data);
}
