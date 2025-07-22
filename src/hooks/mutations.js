import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { editProfile } from "@/services/user";
import { addBasket, orderTour } from "@/services/tour";

const useAddBasket = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const mutationFn = (id) => addBasket(id);
  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries(["basket"]);
      router.push("/basket");
    },
    onError: () => {
      router.push("/my-error");
    },
  });
};

const useOrder = () => {
  const router = useRouter();
  const mutationFn = (data) => orderTour(data);
  return useMutation({
    mutationFn,
    onSuccess: () => {
      router.push("/");
      toast.success("تور مورد نظر با موفقیت خریداری شد");
    },
    onError: () => {
      router.push("/");
      toast.error("مشکلی پیش آمده ، لطفا مجدد تور خود را انتخاب کنید");
    },
  });
};

const useEditProfile = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => editProfile(data);
  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries(["profile"]);
    },
    onError: () => {
      toast.error("مشکلی پیش آمده است");
    },
  });
};

export { useAddBasket, useOrder, useEditProfile };
