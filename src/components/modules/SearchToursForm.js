"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";

import { useTours } from "@/hooks/queries";
import convertData from "@/utils/convertData";
import { tourSchema } from "@/validation/tourSchema";
import CustomDatePicker from "@/modules/CustomDatePicker";
import SearchToursInputs from "@/modules/SearchToursInputs";
import organizedToursData from "@/utils/organizedToursData";

function SearchToursForm() {
  const [showOrigin, setShowOrigin] = useState(false);
  const [showDest, setShowDest] = useState(false);
  const router = useRouter();

  const { data } = useTours();

  const cities = organizedToursData(data);

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(tourSchema),
    mode: "onChange",
  });

  const searchTours = (data) => {
    let newData;

    if (data.calendar) {
      newData = convertData(data);
    } else {
      newData = {
        destination: data.destination.id,
        origin: data.origin.id,
      };
    }

    const queryParams = {
      destinationId: newData.destination,
      originId: newData.origin,
    };

    if (newData.startDate) queryParams.startDate = newData.startDate;
    if (newData.endDate) queryParams.endDate = newData.endDate;

    const params = new URLSearchParams(queryParams);

    router.push(`/tours?${params.toString()}`);
    reset();
  };

  return (
    <form
      className="w-full mt-6 mb-10 mx-auto sm:flex sm:items-center sm:border sm:border-[#00000026] sm:h-[60px] sm:rounded-[20px] sm:px-[6px] lg:w-[900px]"
      onSubmit={handleSubmit(searchTours)}
    >
      <div className="flex justify-center gap-2 sm:gap-0 sm:w-[50%]">
        <SearchToursInputs
          origin={true}
          control={control}
          showOrigin={showOrigin}
          setShowOrigin={setShowOrigin}
          originCities={cities.origins}
        />
        <SearchToursInputs
          origin={false}
          control={control}
          showDest={showDest}
          setShowDest={setShowDest}
          destinationCities={cities.destinations}
        />
      </div>
      <CustomDatePicker control={control} user={false} />
      <button
        type="submit"
        className="w-full sm:w-[25%] bg-primary border-none rounded-2xl h-[47px] text-white text-xl font-light mt-6 sm:mt-0 hover:bg-secondary duration-[0.2s] active:bg-secondary focus:bg-primary"
      >
        جستجو
      </button>
    </form>
  );
}

export default SearchToursForm;
