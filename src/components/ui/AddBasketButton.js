"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Loader from "@/modules/Loader";
import { useAddBasket } from "@/hooks/mutations";

function AddBasketButton({ card, id }) {
  const [isLoading, setIsLoading] = useState(false);
  const { mutate, isPending, isSuccess, error } = useAddBasket();
  const router = useRouter();

  if (error) router.push("/my-error");

  useEffect(() => {
    if (isSuccess) {
      setIsLoading(true);
      router.push("/basket");
    }
  }, [isSuccess]);

  return (
    <>
      {card ? (
        <button
          disabled={isPending || isLoading}
          onClick={() => mutate(id)}
          className={`w-[99px] h-[29px] text-[15px]  font-light md:font-normal text-white ${
            isPending || isLoading
              ? "bg-primary/50 cursor-not-allowed"
              : "bg-primary hover:bg-secondary"
          } rounded-[4px] cursor-pointer text-center leading-[29px]  transition-all duration-[0.2s]`}
        >
          {isPending || isLoading ? <Loader send={true} /> : "رزرو"}
        </button>
      ) : (
        <button
          disabled={isPending || isLoading}
          onClick={() => mutate(id)}
          className={` ${
            isPending || isLoading
              ? "bg-primary/50 cursor-not-allowed"
              : "bg-primary hover:bg-secondary"
          } w-[154px] h-[42px] lg:w-[204px] lg:h-[56px] leading-[42px] lg:leading-[56px] text-white text-[20px] lg:text-2xl font-normal rounded-[10px] text-center transition-all duration-[0.2s]`}
        >
          {isPending || isLoading ? <Loader send={true} /> : "رزرو و خرید"}
        </button>
      )}
    </>
  );
}

export default AddBasketButton;
