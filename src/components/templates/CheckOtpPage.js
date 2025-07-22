"use client";

import { useEffect, useState } from "react";

import timer from "@/utils/timer";
import Modal from "@/modules/Modal";
import SendButton from "@/ui/SendButton";
import { setCookie } from "@/utils/cookie";
import ArrowButton from "@/ui/ArrowButton";
import CloseButton from "@/ui/CloseButton";
import { e2p } from "@/utils/replaceNumber";
import { useProfile } from "@/hooks/queries";
import { checkOtp, sendOtp } from "@/services/auth";
import CheckOtpInput from "@/modules/CheckOtpInput";

function CheckOtpPage({
  mobile,
  setStep,
  closeModal,
  isLoading,
  setIsLoading,
}) {
  const [code, setCode] = useState("");
  const [counter, setCounter] = useState(85);
  const [doShake, setDoShake] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const { refetch } = useProfile();

  useEffect(() => {
    if (counter <= 0) return;

    const result = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 1000);

    return () => clearInterval(result);
  }, [counter]);

  useEffect(() => {
    if (code.length === 6) {
      otpHandler();
    }
  }, [code.length]);

  const otpHandler = async () => {
    setIsLoading(true);
    const { res, error } = await checkOtp(mobile, code);
    setIsLoading(false);
    if (error) {
      setErrorMessage("کد وارد شده نامعتبر است !");
      setDoShake((shake) => shake + 1);
    } else {
      setCookie("accessToken", res.accessToken, 1);
      setCookie("refreshToken", res.refreshToken, 168);
      closeModal();
      refetch();
    }
  };

  return (
    <Modal>
      <div className="flex justify-between items-center">
        <CloseButton check={true} closeModal={closeModal} />
        <ArrowButton setStep={setStep} />
      </div>
      <form onSubmit={otpHandler} className="flex flex-col items-center w-full">
        <h2 className="text-center text-[22px] md:text-[28px] mt-5 font-medium text-[#282828]">
          کد تایید را وارد کنید.
        </h2>
        <p className="text-center text-[14px] md:text-base font-normal font-vazir mt-2 tracking-wider text-[#282828]">
          کد تایید به شماره{" "}
          <span className="text-[16px] md:text-[18px]">{e2p(mobile)}</span>{" "}
          ارسال شد
        </p>
        <button
          className="w-fit mt-5 mb-2 font-normal text-complementry text-sm md:text-base"
          onClick={() => setStep(1)}
        >
          اصلاح شماره موبایل
        </button>
        <div>
          <CheckOtpInput
            code={code}
            setCode={setCode}
            doShake={doShake}
            errorMessage={errorMessage}
          />
          <p className="text-xs md:text-sm w-full text-right text-red-500 mt-1 h-4">
            {errorMessage}
          </p>
        </div>
        {!counter ? (
          <button
            className="mt-3 h-6 border-none font-normal text-complementry text-sm md:text-base"
            onClick={async () => {
              await sendOtp(mobile);
              setCounter(85);
            }}
          >
            ارسال مجدد کد پیامکی
          </button>
        ) : (
          <span className="block w-fit mt-3 h-6 font-light text-sm text-center text-[#282828] md:text-base">
            {e2p(timer(counter))} تا ارسال مجدد کد
          </span>
        )}
        <SendButton
          code={code}
          check={true}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
      </form>
    </Modal>
  );
}

export default CheckOtpPage;
