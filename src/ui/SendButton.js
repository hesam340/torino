"use client";

import Loader from "@/components/modules/Loader";

function SendButton({ error, value, code, check, errorMessage, isLoading }) {
  return (
    <button
      className={`w-full cursor-pointer rounded-md bg-primary py-3 text-center mt-9 font-vazir text-[18px] text-white ${
        (
          check
            ? code.length !== 6 || errorMessage || isLoading
            : error || !value
        )
          ? `opacity-60 hover:cursor-not-allowed`
          : `hover:bg-secondary transition-all duration-[0.2s]`
      }`}
      type="submit"
      disabled={
        check ? code.length !== 6 || errorMessage || isLoading : error || !value
      }
    >
      {isLoading ? (
        <Loader send={true} />
      ) : check ? (
        "ورود به تورینو"
      ) : (
        "ارسال کد تایید"
      )}
    </button>
  );
}

export default SendButton;
