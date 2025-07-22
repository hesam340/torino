import Image from "next/image";
import { ImMap } from "react-icons/im";
import { FaMedal } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { TbRouteSquare } from "react-icons/tb";
import { BiSolidCalendar } from "react-icons/bi";
import { BiSolidBusSchool } from "react-icons/bi";
import { BiSolidUserCheck } from "react-icons/bi";
import { PiShieldSlashFill } from "react-icons/pi";

import { e2p, sp } from "@/utils/replaceNumber";
import AddBasketButton from "@/ui/AddBasketButton";
import getPersianDate from "@/utils/getPersianDate";
import { engVehicleToFarsi, stayingDays } from "@/utils/tourFuncs";

function TourDetailsPage({ tour }) {
  const {
    id,
    image,
    title,
    startDate,
    endDate,
    fleetVehicle,
    price,
    availableSeats,
    insurance,
    origin,
  } = tour;

  const days = stayingDays(startDate, endDate);

  return (
    <div className="bg-white w-full h-full md:bg-gray-100 md:px-9 md:py-9 lg:px-20 lg:py-20">
      <div className="container w-full h-full px-8 md:px-4 md:py-4 bg-white mx-auto md:rounded-[10px]">
        <div className="md:flex md:items-center md:gap-x-4 w-full">
          <div className="relative w-full h-[220px] md:w-[330px] md:h-[205px] lg:w-[397px] lg:h-[265px] mb-5">
            <Image
              src={image}
              fill
              className="object-fill rounded-xl mt-5 md:mt-0"
              alt={title}
              priority={true}
            />
          </div>
          <div className="flex flex-col md:justify-between md:w-[65%]">
            <div className="flex items-center justify-between md:flex-col md:items-start md:gap-y-2 max-md:mt-4 mb-3">
              <h2 className="text-2xl lg:text-[32px] lg:mb-3 font-semibold">
                {title}
              </h2>
              <p className="text-[15px] lg:text-[20px] text-[#282828] font-normal">{`${e2p(
                days
              )} روز و ${e2p(days - 1)} شب`}</p>
            </div>
            <div className="flex justify-between mb-8 md:mb-0 md:mt-5 md:mr-2 md:gap-x-2 lg:w-[87%] xl:w-[70%]">
              <div className="flex items-center gap-x-[6px] text-[#7D7D7D]">
                <BiSolidUserCheck className="size-[16px] md:size-[18px] lg:size-8" />
                <span className="text-sm lg:text-xl font-normal">
                  تورلیدر از مبدا
                </span>
              </div>
              <div className="flex items-center gap-x-[6px] text-[#7D7D7D]">
                <ImMap className="size-[14px] md:size-[18px] lg:size-6" />
                <span className="text-sm lg:text-xl font-normal">
                  برنامه سفر
                </span>
              </div>
              <div className="flex items-center gap-x-[6px] text-[#7D7D7D]">
                <FaMedal className="rotate-180 size-[14px] md:size-[18px] lg:size-6" />
                <span className="text-sm lg:text-xl font-normal">
                  تضمین کیفیت
                </span>
              </div>
            </div>
            <div className="flex justify-between md:hidden">
              <Features
                fleetVehicle={fleetVehicle}
                availableSeats={availableSeats}
                insurance={insurance}
              />
            </div>
            <div className="flex items-center justify-between mt-8 mb-8 md:flex-row-reverse md:mt-11 md:mb-0 lg:w-full">
              <AddBasketButton card={false} id={id} />
              <p className="text-[10px] lg:text-sm font-normal text-[#282828CC]">
                <span className="text-2xl lg:text-[28px] font-medium text-complementry">
                  {sp(price)}
                </span>{" "}
                تومان
              </p>
            </div>
          </div>
        </div>
        <div className="hidden h-[50px] md:flex md:items-center md:justify-between md:mt-5">
          <Features
            fleetVehicle={fleetVehicle}
            availableSeats={availableSeats}
            insurance={insurance}
            startDate={startDate}
            endDate={endDate}
            origin={origin.fa_name}
          />
        </div>
      </div>
    </div>
  );
}

export default TourDetailsPage;

export function Features({
  fleetVehicle,
  availableSeats,
  insurance,
  origin,
  startDate,
  endDate,
}) {
  return (
    <>
      <div className="md:flex flex-col items-start hidden">
        <div className="flex text-[#444444] gap-x-[6px]">
          <TbRouteSquare className="size-4 lg:size-5" />
          <span className="text-base lg:text-lg font-normal font-vazir">
            مبدا
          </span>
        </div>
        <p className="text-sm lg:text-base font-medium text-[#282828] font-vazir mt-1">
          {origin}
        </p>
      </div>
      <span className="hidden md:block h-full border-l border-l-[#00000040]"></span>
      <div className="md:flex flex-col items-start hidden">
        <div className="flex text-[#444444] gap-x-[6px]">
          <BiSolidCalendar className="size-4 lg:size-5" />
          <span className="text-base lg:text-lg font-normal font-vazir">
            تاریخ رفت
          </span>
        </div>
        <p className="text-sm lg:text-base font-medium text-[#282828] font-vazir mt-1">
          {getPersianDate(startDate)}
        </p>
      </div>
      <span className="hidden md:block h-full border-l border-l-[#00000040]"></span>
      <div className="md:flex flex-col items-start hidden">
        <div className="flex text-[#444444] gap-x-[6px]">
          <BiSolidCalendar className="size-4 lg:size-5" />
          <span className="text-base lg:text-lg font-normal font-vazir">
            تاریخ برگشت
          </span>
        </div>
        <p className="text-sm lg:text-base font-medium text-[#282828] font-vazir mt-1">
          {getPersianDate(endDate)}
        </p>
      </div>
      <span className="hidden md:block h-full border-l border-l-[#00000040]"></span>
      <div className="flex flex-col items-center md:items-start">
        <div className="flex text-[#444444] gap-x-[6px]">
          <BiSolidBusSchool className="size-4 lg:size-5" />
          <span className="text-base lg:text-lg font-normal font-vazir">
            حمل و نقل
          </span>
        </div>
        <p className="text-sm lg:text-base font-medium text-[#282828] font-vazir mt-1">
          {engVehicleToFarsi(fleetVehicle)}
        </p>
      </div>
      <span className="hidden md:block h-full border-l border-l-[#00000040]"></span>
      <div className="flex flex-col items-center md:items-start">
        <div className="flex text-[#444444] gap-x-[6px]">
          <HiUsers className="size-4 lg:size-5" />
          <span className="text-base lg:text-lg font-normal font-vazir">
            ظرفیت
          </span>
        </div>
        <p className="text-sm lg:text-base font-medium text-[#282828] font-vazir mt-1">{`حداکثر ${e2p(
          availableSeats
        )} نفر`}</p>
      </div>
      <span className="hidden md:block h-full border-l border-l-[#00000040]"></span>
      <div className="flex flex-col items-center md:items-start">
        <div className="flex text-[#444444] gap-x-[6px]">
          <PiShieldSlashFill className="size-4 lg:size-5" />
          <span className="text-base lg:text-lg font-normal font-vazir">
            بیمه
          </span>
        </div>
        <p className="text-sm lg:text-base font-medium text-[#282828] font-vazir mt-1">
          {insurance ? "بیمه 50 هزار دیناری" : "-"}
        </p>
      </div>
    </>
  );
}
