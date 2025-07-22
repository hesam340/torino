import { TbCarSuv } from "react-icons/tb";
import { PiVanBold } from "react-icons/pi";
import { IoBusOutline } from "react-icons/io5";
import { PiAirplaneBold } from "react-icons/pi";

const miladiToShamsiMonth = [
  { miladiMonth: 0, shamsiBefore: "دی", shamsiAfter: "بهمن" },
  { miladiMonth: 1, shamsiBefore: "بهمن", shamsiAfter: "اسفند" },
  { miladiMonth: 2, shamsiBefore: "اسفند", shamsiAfter: "فروردین" },
  { miladiMonth: 3, shamsiBefore: "فروردین", shamsiAfter: "اردیبهشت" },
  { miladiMonth: 4, shamsiBefore: "اردیبهشت", shamsiAfter: "خرداد" },
  { miladiMonth: 5, shamsiBefore: "خرداد", shamsiAfter: "تیر" },
  { miladiMonth: 6, shamsiBefore: "تیر", shamsiAfter: "مرداد" },
  { miladiMonth: 7, shamsiBefore: "مرداد", shamsiAfter: "شهریور" },
  { miladiMonth: 8, shamsiBefore: "شهریور", shamsiAfter: "مهر" },
  { miladiMonth: 9, shamsiBefore: "مهر", shamsiAfter: "آبان" },
  { miladiMonth: 10, shamsiBefore: "آبان", shamsiAfter: "آذر" },
  { miladiMonth: 11, shamsiBefore: "آذر", shamsiAfter: "دی" },
];

const vehicle = {
  Bus: "اتوبوس",
  Van: "ون",
  SUV: "شاسی بلند",
  Airplane: "هواپیما",
};

const vehicleIcons = {
  Bus: <IoBusOutline className="size-[18px] md:size-6" />,
  Van: <PiVanBold className="size-[18px] md:size-6" />,
  SUV: <TbCarSuv className="size-[18px] md:size-6" />,
  Airplane: <PiAirplaneBold className="size-[18px] md:size-6" />,
};

export { miladiToShamsiMonth, vehicle, vehicleIcons };
