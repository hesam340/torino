"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { HiUser } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";

import Loader from "@/modules/Loader";
import { useOrder } from "@/hooks/mutations";
import { e2p, sp } from "@/utils/replaceNumber";
import { stayingDays } from "@/utils/tourFuncs";
import { userSchema } from "@/validation/userSchema";
import PassengerInput from "@/modules/PassengerInput";
import BasketSkeleton from "@/skeletons/BasketSkeleton";
import CustomDatePicker from "@/modules/CustomDatePicker";
import { useBasket, useUserTours } from "@/hooks/queries";

function BasketPage() {
  const [showGender, setShowGender] = useState(false);
  const [canPurchase, setCanPurchase] = useState(true);
  const { data: tour, error: basketError, refetch } = useBasket();
  const { data: userTours, error: userToursError } = useUserTours();
  const router = useRouter();

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    setCanPurchase(true);
    const userTour = userTours?.find((i) => i.id === tour.id);
    if (!userTour) return;
    if (userTour) setCanPurchase(false);
  }, [userTours, tour]);

  if (basketError || userToursError) {
    router.push("/");
    toast.error("مشکلی پیش آمده ، بعدا دوباره وارد شوید");
  }

  const { isPending: orderPending, mutate } = useOrder();
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(userSchema),
    mode: "onChange",
  });

  const orderHandler = (data) => {
    const newData = {
      ...data,
      birthDate: new Date(data.birthDate).toISOString().split("T")[0],
    };
    mutate(newData);
    reset();
  };

  const days = stayingDays(tour?.startDate, tour?.endDate);

  return (
    <div className="bg-white w-full h-full md:bg-gray-100 md:px-8 md:py-9 lg:py-20">
      <div className="container w-full h-full px-8 md:px-4 md:py-4 md:bg-gray-100 mx-auto md:rounded-[10px] lg:flex lg:items-start lg:gap-x-3">
        {tour && userTours ? (
          <>
            <div className="flex flex-col bg-white justify-center font-vazir text-2xl font-normal border border-[#00000033] rounded-[10px] px-6 py-5 mt-5 lg:w-[80%] lg:mt-0">
              {!canPurchase ? (
                <p className="font-yekan text-center text-2xl font-normal px-8 py-7 leading-10">
                  این تور قبلا توسط شما خریداری شده برای مشاهده جزئیات لطفا به
                  حساب کاربری خود قسمت تورهای من مراجعه کنید.
                </p>
              ) : (
                <>
                  <div className="flex items-center gap-x-3 mb-4">
                    <HiUser className="size-6" />
                    <h1 className="text-2xl font-normal font-vazir">
                      مشخصات مسافر
                    </h1>
                  </div>
                  <form
                    autoComplete="off"
                    className="lg:flex lg:flex-wrap lg:gap-x-1 lg:items-start lg:justify-between"
                  >
                    <div className="relative w-full order-1 lg:order-1 lg:basis-[32%]">
                      <PassengerInput name="fullName" control={control} />
                    </div>
                    <div className="relative w-full order-2 lg:order-4 lg:basis-[32%]">
                      <PassengerInput
                        name="gender"
                        control={control}
                        showGender={showGender}
                        setShowGender={setShowGender}
                      />
                    </div>
                    <div className="relative w-full order-3 lg:order-2 lg:basis-[32%]">
                      <PassengerInput name="nationalCode" control={control} />
                    </div>
                    <div className="relative w-full order-4 lg:order-3 lg:basis-[32%]">
                      <CustomDatePicker control={control} user={true} />
                    </div>
                  </form>
                </>
              )}
            </div>
            <div className="mt-10 lg:mt-0 bg-white border border-[#0000001A] rounded-[10px] flex flex-col mb-10 py-5 lg:[20%] px-6 lg:px-2">
              <div className="flex items-baseline justify-between mb-5">
                <h2 className="text-2xl lg:text-[32px] lg:mb-3 font-semibold">
                  {tour?.title}
                </h2>
                <p className="text-base lg:text-[20px] text-[#00000070] font-normal">{`${e2p(
                  days
                )} روز و ${e2p(days - 1)} شب`}</p>
              </div>
              <span
                className="block border-t border-dashed border-[#00000040] mb-4"
                style={{
                  borderImage:
                    "repeating-linear-gradient(to right, #00000040 0, #00000040 10px, transparent 4px, transparent 20px)",
                  borderImageSlice: 1,
                }}
              ></span>
              <div className="flex items-baseline justify-between font-vazir mb-2">
                <p className="text-base font-normal">قیمت نهایی</p>
                <p className="text-[#282828CC] text-sx font-normal">
                  <span className="text-[28px] font-medium text-complementry ml-1">
                    {sp(tour?.price)}
                  </span>{" "}
                  تومان
                </p>
              </div>
              <button
                onClick={handleSubmit(orderHandler)}
                disabled={!isValid}
                className={`w-[285px] h-[56px] leading-[56px] rounded-[10px] text-2xl font-normal text-center mx-auto font-vazir bg-primary hover:bg-secondary transition-all duration-[0.2s] text-white ${
                  !isValid && "cursor-not-allowed opacity-50"
                }`}
              >
                {orderPending ? <Loader send={true} /> : "ثبت و خرید نهایی"}
              </button>
            </div>
          </>
        ) : (
          <>
            <BasketSkeleton />
          </>
        )}
      </div>
    </div>
  );
}

export default BasketPage;
