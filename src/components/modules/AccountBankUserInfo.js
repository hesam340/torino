import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useFormContext } from "react-hook-form";

import { e2p } from "@/utils/replaceNumber";
import PassengerInput from "@/modules/PassengerInput";

function AccountBankUserInfo({ data, formHandler }) {
  const { handleSubmit, control } = useFormContext();
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="flex flex-col border border-[#00000033] rounded-[10px] px-6 py-3 mt-5 mb-10">
      {showEdit ? (
        <>
          <h2 className="text-base lg:text-lg font-normal">
            ویرایش اطلاعات حساب بانکی
          </h2>
          <form
            autoComplete="off"
            className="mt-8 lg:flex lg:flex-wrap lg:gap-x-1 lg:items-start lg:justify-between"
          >
            <div className="relative w-full lg:basis-[32%]">
              <PassengerInput name="payment.debitCard_code" control={control} />
            </div>
            <div className="relative w-full lg:basis-[32%]">
              <PassengerInput
                name="payment.accountIdentifier"
                control={control}
              />
            </div>
            <div className="relative w-full lg:basis-[32%]">
              <PassengerInput name="payment.shaba_code" control={control} />
            </div>
            <div className="order-6 lg:order-6 w-full">
              <span className="hidden lg:block -mx-6 h-px bg-[#00000033]"></span>
              <div className="flex w-full gap-x-2 max-lg:mt-4 lg:justify-end lg:pt-3">
                <button
                  type="button"
                  onClick={() => {
                    handleSubmit((data) => {
                      formHandler(data);
                      setShowEdit(false);
                    })();
                  }}
                  className="w-full h-[46px] lg:w-[144px] leading-[46px] bg-primary hover:bg-secondary rounded-[5px] text-white text-base font-medium transition-all duration-[0.2s]"
                >
                  تایید
                </button>
                <button
                  type="button"
                  onClick={() => setShowEdit(false)}
                  className="w-full h-[46px] lg:w-[144px] leading-[46px] bg-white text-primary text-base font-medium border-2 border-primary hover:bg-[#28a74550] rounded-[5px] transition-all duration-[0.2s]"
                >
                  انصراف
                </button>
              </div>
            </div>
          </form>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h2 className="text-base lg:text-lg font-normal">
              اطلاعات حساب بانکی
            </h2>
            <button
              onClick={() => setShowEdit(true)}
              className="flex items-center gap-x-2 text-complementry"
            >
              <CiEdit className="size-3 lg:size-4" />
              <p className="text-sm font-normal">ویرایش اطلاعات</p>
            </button>
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between mt-4">
            <div className="flex items-center justify-between md:w-[47%] mt-4">
              <p className="text-base font-light">شماره کارت</p>
              <p className="text-base font-medium">
                {data?.payment?.debitCard_code
                  ? e2p(data?.payment?.debitCard_code)
                  : "-"}
              </p>
            </div>
            <div className="flex items-center justify-between md:w-[47%] mt-4">
              <p className="text-base font-light">شماره شبا</p>
              <p className="text-base font-medium">
                {data?.payment?.shaba_code
                  ? e2p(data?.payment?.shaba_code)
                  : "-"}
              </p>
            </div>
            <div className="flex items-center justify-between md:w-[47%] mt-4">
              <p className="text-base font-light">شماره حساب</p>
              <p className="text-base font-medium">
                {data?.payment?.accountIdentifier
                  ? e2p(data?.payment?.accountIdentifier)
                  : "-"}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AccountBankUserInfo;
