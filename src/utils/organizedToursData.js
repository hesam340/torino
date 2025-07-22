const organizedToursData = (tours) => {
  const origins = [];
  const destinations = [];

  tours?.map((tour) => {
    if (!origins.find((o) => o.id === tour.origin.id)) {
      origins.push(tour.origin);
    }

    if (!destinations.find((d) => d.id === tour.destination.id)) {
      destinations.push(tour.destination);
    }
  });

  return { origins, destinations };
};

export default organizedToursData;
