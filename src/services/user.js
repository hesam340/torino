import api from "@/configs/api";

const getProfile = () => api.get("/user/profile").then((res) => res || false);

const editProfile = (data) => api.put("/user/profile", data);

const getUserTours = () => api.get("/user/tours");

const getUserTransactions = () => api.get("/user/transactions");

export { getProfile, editProfile, getUserTours, getUserTransactions };
