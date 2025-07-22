const convertData = (data) => {
  const startDate =
    new Date(data.calendar[0]).toISOString().slice(0, 10) + "T00:00:00.000Z";
  const endDate =
    new Date(data.calendar[1]).toISOString().slice(0, 10) + "T00:00:00.000Z";

  return {
    destination: data.destination.id,
    origin: data.origin.id,
    startDate,
    endDate,
  };
};

export default convertData;
