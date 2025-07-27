"use client";

import { toast } from "react-toastify";
import { authSchema } from "@/validation/authSchema";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Modal from "@/modules/Modal";
import SendButton from "@/ui/SendButton";
import { sendOtp } from "@/services/auth";
import CloseButton from "@/ui/CloseButton";
import { e2p, p2e } from "@/utils/replaceNumber";

function SendOtpPage({
  closeModal,
  setStep,
  setUserMobile,
  isLoading,
  setIsLoading,
}) {
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(authSchema),
    mode: "onChange",
  });

  const sendMobile = async (data) => {
    setIsLoading(true);
    const { res, error } = await sendOtp(data.mobile);
    setIsLoading(false);
    setUserMobile(data.mobile);
    
    if (res) setStep(2);
    if (error) toast.error(error.message);
  };

  return (
    <Modal reset={reset}>
      <CloseButton closeModal={closeModal} />
      <form onSubmit={handleSubmit(sendMobile)} className="flex flex-col">
        <h2 className="text-center text-[22px] md:text-[28px] font-medium text-[#282828]">
          ورود به تورینو
        </h2>
        <Controller
          name="mobile"
          control={control}
          render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => (
            <>
              <label
                htmlFor="mobile"
                className="mt-8 text-base font-light mb-2 w-fit"
              >
                شماره موبایل خود را وارد کنید
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={e2p(value || "")}
                onBlur={onBlur}
                onChange={(e) => {
                  onChange(p2e(e.target.value.replace(/[^\d۰-۹]/g, "")));
                }}
                placeholder={e2p("۴۲۵۳***۰۹۱۲")}
                className={`rounded-md border peer ${
                  error ? "border-red-500" : "border-[#00000040]"
                } text-base md:text-xl text-gray-600 placeholder:text-base md:placeholder:text-lg placeholder:text-[#00000070] placeholder:font-vazir font-vazir focus:outline-0 focus:border-gray-700 px-2 py-3`}
              />
              <p className="text-xs md:text-sm peer-focus:text-gray-500 text-red-500 mt-1 h-4">
                {error?.message}
              </p>
              <SendButton value={value} error={error} isLoading={isLoading} />
            </>
          )}
        />
      </form>
    </Modal>
  );
}

export default SendOtpPage;
