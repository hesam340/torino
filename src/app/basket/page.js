"use client";

import { useRouter } from "next/navigation";

import { useBasket } from "@/hooks/queries";
import BasketPage from "@/components/templates/BasketPage";

function Basket() {
  const router = useRouter();
  const { data, error } = useBasket();

  if (error) router.push("/");

  return <BasketPage tour={data} />;
}

export default Basket;
