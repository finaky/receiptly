"use client";

import { Done, Error, SaveAlt } from "@mui/icons-material";
import { ReactNode, useEffect } from "react";

interface IPopup {
  show: boolean;
  setShow: (val: boolean) => void;
  time: number;
  setTime: (t: number) => void;
  type: number;
}

interface IPopupType {
  message: string;
  icon: ReactNode;
  color: string;
}

const types: Record<number, IPopupType> = {
  0: {
    message: "Pomyślnie Dodano Produkt!",
    icon: <Done className="ml-5 bg-green-500 rounded-full" fontSize="large" />,
    color: "bg-green-500",
  },

  1: {
    message: "Pomyślnie Usunięto Produkt!",
    icon: <Error className="ml-5 bg-red-500 rounded-full" fontSize="large" />,
    color: "bg-red-500",
  },

  2: {
    message: "Pomyślnie Zapisano Paragon!",
    icon: (
      <SaveAlt className="ml-5 bg-blue-400 p-1 rounded-full" fontSize="large" />
    ),
    color: "bg-blue-400",
  },

  3: {
    message: "Nie uzupełniłeś wszystkich danych!",
    icon: <Error className="ml-5 bg-red-500 rounded-full" fontSize="large" />,
    color: "bg-red-500",
  },
};

export const Popup = ({ show, setShow, time, setTime, type }: IPopup) => {
  const popup = types[type];
  useEffect(() => {
    if (time <= 0) {
      setShow(false);
      return;
    }

    const timeout = setTimeout(() => {
      setTime(time - 5);
    }, 10);

    return () => clearTimeout(timeout);
  }, [time, setTime, setShow]);

  return (
    <div
      className={`w-100 h-25 absolute top-0 right-10 bg-white/4 flex items-center rounded-2xl overflow-hidden  transition-all ease-in-out  duration-300
    ${show ? "translate-y-0" : "-translate-y-100"}`}
    >
      {popup.icon}
      <p className="text-xl text-[white] ml-5">{popup.message}</p>
      <div
        className={`h-1 absolute bottom-0 left-0 transition-[width] duration-10 ${popup.color}`}
        style={{ width: time / 10 + "%" }}
      ></div>
    </div>
  );
};
