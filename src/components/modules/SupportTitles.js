import Image from "next/image";

function SupportTitles() {
  return (
    <div className="border-t border-[#00000033] mt-2 max-md:mx-8 md:px-[57px] md:mx-auto">
      <div className="container max-md:px-3 m-auto flex flex-col lg:flex-row lg:justify-between items-start gap-y-2 mt-8">
        <div className="flex items-center gap-x-3 mb-5">
          <div className="relative w-[71px] lg:w-[121px] h-[64px] lg:h-[109px]">
            <Image
              src="/images/footer-price.webp"
              fill
              className="object-fill"
              alt={"price"}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm lg:text-[26px] font-normal lg:font-light font-vazir mb-1">
              بصرفه ترین قیمت
            </p>
            <span className="block text-xs lg:text-base font-extralight lg:font-light text-[#282828] font-vazir lg:w-[202px]">
              بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-3 mb-5">
          <div className="relative w-[71px] lg:w-[121px] h-[64px] lg:h-[109px]">
            <Image
              src="/images/footer-support.webp"
              fill
              className="object-fill"
              alt={"support"}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm lg:text-[26px] font-normal lg:font-light font-vazir mb-1">
              پشتیبانی
            </p>
            <span className="block text-xs lg:text-base font-extralight lg:font-light text-[#282828] font-vazir lg:w-[202px]">
              پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-3 mb-5">
          <div className="relative w-[71px] lg:w-[121px] h-[64px] lg:h-[109px]">
            <Image
              src="/images/footer-satisfying.webp"
              fill
              className="object-fill"
              alt={"satisfying"}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm lg:text-[26px] font-normal lg:font-light font-vazir mb-1">
              رضایت کاربران
            </p>
            <span className="block text-xs lg:text-base font-extralight lg:font-light text-[#282828] font-vazir lg:w-[202px]">
              رضایت بیش از 10هزار کاربر از تور های ما.{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportTitles;
