"use client";

import { useAddBasket } from "@/hooks/mutations";

function AddBasketButton({ card, id }) {
  const { mutate } = useAddBasket();

  return (
    <>
      {card ? (
        <button
          onClick={() => mutate(id)}
          className="w-[99px] h-[29px] text-[15px]  font-light md:font-normal text-white bg-primary rounded-[4px] cursor-pointer text-center leading-[29px] hover:bg-secondary duration-[0.2s]"
        >
          رزرو
        </button>
      ) : (
        <button
          onClick={() => mutate(id)}
          className="bg-primary w-[154px] h-[42px] lg:w-[204px] lg:h-[56px] leading-[42px] lg:leading-[56px] text-white text-[20px] lg:text-2xl font-normal rounded-[10px] text-center hover:bg-secondary duration-[0.2s]"
        >
          رزرو و خرید
        </button>
      )}
    </>
  );
}

export default AddBasketButton;
