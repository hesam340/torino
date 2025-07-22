import { useQuery } from "@tanstack/react-query";

import { getTours } from "@/services/tour";
import { getBasket } from "@/services/tour";
import { getProfile, getUserTours, getUserTransactions } from "@/services/user";

const useProfile = () => {
  const queryKey = ["profile"];
  const queryFn = getProfile;
  return useQuery({ queryKey, queryFn });
};

const useTours = () => {
  const queryKey = ["clientTours"];
  const queryFn = getTours;
  return useQuery({ queryKey, queryFn });
};

const useBasket = () => {
  const queryKey = ["basket"];
  const queryFn = getBasket;
  return useQuery({ queryKey, queryFn });
};

const useUserTours = () => {
  const queryKey = ["userTours"];
  const queryFn = getUserTours;
  return useQuery({ queryKey, queryFn });
};

const useUserTransactions = () => {
  const queryKey = ["userTransactions"];
  const queryFn = getUserTransactions;
  return useQuery({ queryKey, queryFn });
};

export { useProfile, useTours, useBasket, useUserTours, useUserTransactions };
