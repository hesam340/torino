import Link from "next/link";
import Image from "next/image";
import { IoCall } from "react-icons/io5";

function CartoonPart() {
  return (
    <div className="border border-[#00000040] w-full h-[190px] md:h-[220px] lg:h-[251px] rounded-[10px] flex flex-col md:flex-row mb-10">
      <div className="relative h-[128px] md:h-full md:w-[70%] flex justify-around bg-primary rounded-t-[10px] md:rounded-r-[10px]">
        <div className="text-white text-right w-full pt-3 pr-3 md:pt-8 md:pr-8">
          <p className="text-[22px] md:text-[32px] lg:text-[48px] font-semibold md:font-bold">
            خرید تلفنی از <span className="text-secondary">تورینو</span>
          </p>
          <p className="text-[14px] md:text-[25px] lg:text-[32px] font-light lg:font-normal mt-2">
            به هرکجا که میخواهید!
          </p>
        </div>
        <div className="absolute w-[195px] h-[158px] md:w-[248px] md:h-[187px] lg:w-[308px] lg:h-[225px] bottom-0 left-0 md:left-2 lg:left-4">
          <Image
            src="/images/cartoon-homePage.webp"
            fill
            className="object-fill"
            alt="cartoon-image"
          />
        </div>
      </div>
      <div className="flex md:flex-col md:w-[30%] items-center justify-between md:justify-center md:items-center py-3 px-6 md:py-0">
        <div className="text-[#282828] md:text-black flex items-center md:mb-2">
          <p className="font-vazir text-[20px] md:text-[28px] font-semibold md:font-bold">
            ۰۲۱-۱۸۴۰
          </p>
          <IoCall className="text-[#282828] md:text-black md:size-6" />
        </div>
        <Link
          href="#"
          className="block text-white bg-secondary hover:scale-110 w-[136px] h-[38px] md:w-[175] md:h-[41px] leading-[38px] md:leading-[41px] lg:leading-[44px] text-center font-vazir rounded-[9px] text-base lg:text-lg font-normal"
        >
          اطلاعات بیشتر
        </Link>
      </div>
    </div>
  );
}

export default CartoonPart;
