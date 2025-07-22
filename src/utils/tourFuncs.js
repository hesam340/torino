import { miladiToShamsiMonth, vehicle } from "@/constants/tourOptions";

const getShamsiFromMiladi = (date) => {
  const month = new Date(date).getUTCMonth();
  const day = new Date(date).getUTCDate();

  const selectedMonth = miladiToShamsiMonth[month];

  return day >= 21 ? selectedMonth.shamsiAfter : selectedMonth?.shamsiBefore;
};

const stayingDays = (startDate, endDate) => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();

  const days = end - start;
  const oneDay = 1 * 24 * 60 * 60 * 1000;

  return Math.floor(days / oneDay);
};

const engVehicleToFarsi = (engVehicle) => {
  return vehicle[engVehicle];
};

const getDay = (date) => {
  return new Date(date).getDay();
};

const scheduleTime = (startDate, endDate) => {
  const now = new Date().getTime();
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();

  if (now < start) {
    return "waiting";
  } else if (now > end) {
    return "finished";
  } else {
    return "doing";
  }
};

export {
  getShamsiFromMiladi,
  stayingDays,
  engVehicleToFarsi,
  getDay,
  scheduleTime,
};
