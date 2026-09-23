"use client";
import { useState } from "react";
import { Popup } from "@/components/popup";
import { ListReceipts } from "@/components/list-receipts";
import { NewReceipt } from "@/components/new-receipt";

export default function Home() {
  const [show, setShow] = useState<boolean>(false);
  const [time, setTime] = useState<number>(100);
  const [type, setType] = useState<number>(0);

  const popup = (type: number) => {
    setType(type);
    setShow(true);
    setTime(1000);
  };

  return (
    <main className="text-center mt-10 relative">
      <h1 className="text-white text-4xl font-bold">Receiptly</h1>

      <div className="flex flex-wrap gap-10 justify-center mt-10 items-start">
        <NewReceipt popup={popup} />
        <ListReceipts />
      </div>

      <Popup
        setShow={setShow}
        show={show}
        time={time}
        setTime={setTime}
        type={type}
      />
    </main>
  );
}
