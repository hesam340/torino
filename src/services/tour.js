import api from "@/configs/api";

const getTours = () => api.get("/tour");

const getBasket = () => api.get("/basket");

const addBasket = (id) => api.put(`/basket/${id}`);

const orderTour = (data) => api.post(`/order`,  data );

export { getTours, addBasket, getBasket, orderTour };
