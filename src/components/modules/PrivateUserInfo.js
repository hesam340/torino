"use client";

import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useFormContext } from "react-hook-form";

import { e2p } from "@/utils/replaceNumber";
import PassengerInput from "@/modules/PassengerInput";
import CustomDatePicker from "@/modules/CustomDatePicker";

function PrivateUserInfo({ data, formHandler }) {
  const { handleSubmit, control } = useFormContext();
  const [showEdit, setShowEdit] = useState(false);
  const [showGender, setShowGender] = useState(false);

  return (
    <div className="flex flex-col border border-[#00000033] rounded-[10px] px-6 py-3 mt-5">
      {showEdit ? (
        <>
          <h2 className="text-base lg:text-lg font-normal">
            ویرایش اطلاعات شخصی
          </h2>
          <form
            autoComplete="off"
            className="mt-8 lg:flex lg:flex-wrap lg:gap-x-1 lg:items-start lg:justify-between"
          >
            <div className="relative w-full order-1 lg:order-1 lg:basis-[28%]">
              <PassengerInput name="firstName" control={control} />
            </div>
            <div className="relative w-full order-2 lg:order-2 lg:basis-[28%]">
              <PassengerInput name="lastName" control={control} />
            </div>
            <div className="relative w-full order-3 lg:order-4 lg:basis-[28%] lg:flex-1">
              <PassengerInput
                name="gender"
                control={control}
                showGender={showGender}
                setShowGender={setShowGender}
              />
            </div>
            <div className="relative w-full order-4 lg:order-3 lg:basis-[28%]">
              <PassengerInput name="nationalCode" control={control} />
            </div>
            <div className="relative w-full order-5 lg:order-5 lg:basis-[28%] lg:flex-1 lg:mb-3">
              <CustomDatePicker control={control} user={true} profile={true} />
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
            <h2 className="text-base lg:text-lg font-normal">اطلاعات شخصی</h2>
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
              <p className="text-base font-light">نام و نام خانوادگی</p>
              <p className="text-base font-medium">
                {data?.firstName && data?.lastName
                  ? `${data.firstName} ${data.lastName}`
                  : "-"}
              </p>
            </div>
            <div className="flex items-center justify-between md:w-[47%] mt-4">
              <p className="text-base font-light">کدملی</p>
              <p className="text-base font-medium">
                {data?.nationalCode ? e2p(data.nationalCode) : "-"}
              </p>
            </div>
            <div className="flex items-center justify-between md:w-[47%] mt-4">
              <p className="text-base font-light">جنسیت</p>
              <p className="text-base font-medium">
                {data?.gender ? (data.gender === "male" ? "مرد" : "زن") : "-"}
              </p>
            </div>
            <div className="flex items-center justify-between md:w-[47%] mt-4">
              <p className="text-base font-light">تاریخ تولد</p>
              <p className="text-base font-medium">
                {data?.birthDate ? new Date(+data.birthDate).toLocaleDateString("fa-IR") : "-"}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PrivateUserInfo;
