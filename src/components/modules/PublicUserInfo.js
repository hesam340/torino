"use client";

import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useFormContext } from "react-hook-form";

import { e2p } from "@/utils/replaceNumber";
import PassengerInput from "@/modules/PassengerInput";

function PublicUserInfo({ data, formHandler }) {
  const { handleSubmit, control } = useFormContext();
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="flex flex-col border border-[#00000033] rounded-[10px] px-6 py-3">
      <h2 className="text-base lg:text-lg font-normal">اطلاعات حساب کاربری</h2>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex items-center justify-between mt-4 md:w-[25%]">
          <p className="text-base font-light text-[#282828]">شماره موبایل</p>
          <p className="text-base font-normal">{e2p(data?.mobile)}</p>
        </div>
        {showEdit ? (
          <form autoComplete="off" className="relative mt-3 md:w-[65%]">
            <div className="md:flex md:items-center">
              <div className="md:w-[65%]">
                <PassengerInput control={control} name="email" />{" "}
              </div>
              <div className="flex w-full gap-x-2 md:mr-2 md:w-[35%] md:mb-7 lg:mb-8">
                <button
                  type="button"
                  onClick={() => {
                    handleSubmit((data) => {
                      formHandler(data);
                      setShowEdit(false);
                    })();
                  }}
                  className="w-[290px] h-[46px] md:w-[84px] xl:w-[122px] leading-[46px] bg-primary hover:bg-secondary rounded-[5px] text-white text-base font-medium transition-all duration-[0.2s]"
                >
                  تایید
                </button>
                <button
                  type="button"
                  onClick={() => setShowEdit(false)}
                  className="w-[290px] h-[46px] md:w-[84px] xl:w-[122px] leading-[46px] bg-white text-primary text-base font-medium border-2 border-primary hover:bg-[#28a74550] rounded-[5px] transition-all duration-[0.2s]"
                >
                  انصراف
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="flex items-center justify-between mt-4 md:w-[45%]">
            <div className="flex items-center gap-x-8 ml-3">
              <p className="text-base font-light">ایمیل</p>
              <p className="text-base font-normal">
                {data?.email ? data.email : "-"}
              </p>
            </div>
            <button
              onClick={() => setShowEdit(true)}
              className="flex items-center gap-x-2 text-complementry text-base font-normal"
            >
              <CiEdit className="size-4" />
              افزودن
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PublicUserInfo;
