import Image from "next/image";

import Slider from "@/modules/Slider";

function WhyTorino() {
  return (
    <>
      <div className="block md:hidden mt-20 px-2 w-full">
        <div className="flex flex-col items-start ">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative w-9 h-9">
              <Image
                src="/SVGs/Polygon.svg"
                fill
                className="object-fill"
                sizes="36px"
                alt="why-torino"
              />
              <span className="absolute flex justify-center items-center text-2xl inset-0 text-white top-1">
                ؟
              </span>
            </div>
            <p className="font-vazir text-2xl text-[#282828]">
              چرا <span className="text-primary">تورینو</span> ؟
            </p>
          </div>
          <Slider />
        </div>
      </div>
      <div className="hidden md:block mt-20 px-2 w-full">
        <div className="flex flex-row justify-between items-start gap-x-10">
          <div className="w-[40%]">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-9 h-9">
                <Image
                  src="/SVGs/Polygon-circle.svg"
                  fill
                  sizes="36px"
                  className="object-fill"
                  alt="why-torino"
                />
                <span className="absolute flex justify-center items-center text-2xl inset-0 text-white top-1">
                  ؟
                </span>
              </div>
              <p className="font-vazir text-2xl lg:text-[40px] text-[#282828]">
                چرا <span className="text-primary">تورینو</span> ؟
              </p>
            </div>
            <div>
              <p className="mb-3 text-[#282828] text-lg lg:text-2xl">
                تور طبیعت گردی و تاریخی
              </p>
              <p className="text-base lg:text-xl leading-8 lg:leading-10 font-light text-[#282828] text-justify font-vazir whitespace-pre-line">
                اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در
                دل طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید
                تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های
                گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای
                فرهنگی و تاریخی را خریداری کنید.
              </p>
            </div>
          </div>
          <Slider />
        </div>
      </div>
    </>
  );
}

export default WhyTorino;
