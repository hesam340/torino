"use client";

import { GoArrowLeft } from "react-icons/go";

function ArrowButton({ setStep }) {
  return (
    <button
      className="absolute top-0 left-0 ml-3 mt-3 text-[#171717]"
      onClick={() => setStep(1)}
    >
      <div className="w-[25px] h-[25px] text-xl">
        <GoArrowLeft strokeWidth="1px" />
      </div>
    </button>
  );
}

export default ArrowButton;
