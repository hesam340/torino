"use client";

import { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { Controller } from "react-hook-form";
import { TbWorldSearch } from "react-icons/tb";

function SearchToursInputs({
  origin,
  control,
  showOrigin,
  setShowOrigin,
  showDest,
  setShowDest,
  originCities,
  destinationCities,
}) {
  const [selectedFromList, setSelectedFromList] = useState(false);

  return (
    <div className="relative w-full">
      <Controller
        name={origin ? "origin" : "destination"}
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => {
          return (
            <>
              <input
                type="text"
                id={origin ? "origin" : "destination"}
                placeholder=" "
                value={value?.fa_name || ""}
                readOnly
                onFocus={() =>
                  origin ? setShowOrigin(true) : setShowDest(true)
                }
                onBlur={() => {
                  if (!selectedFromList) {
                    origin ? setShowOrigin(false) : setShowDest(false);
                  }
                  setSelectedFromList(false);
                }}
                className="peer border border-[#00000026] sm:border-transparent sm:border-l sm:border-l-[#00000033] sm:rounded-r-2xl sm:rounded-none sm:px-3 sm:focus:border-transparent sm:focus:border-l sm:focus:border-l-[#00000033] text-center sm:text-right rounded-xl px-3 w-full h-[47px] text-base md:text-lg text-[#282828] focus:outline-none focus:border-complementry"
              />
              <label
                htmlFor={origin ? "origin" : "destination"}
                className={`absolute left-1/2 -translate-x-1/2 w-fit sm:right-0 sm:-translate-x-1 -top-2 flex items-center gap-1 bg-white px-1 text-gray-400 text-sm transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-[20px] peer-placeholder-shown:text-gray-400 sm:peer-placeholder-shown:text-[#2C2C2C] peer-focus:-top-2 sm:peer-focus:-top-4 peer-focus:text-sm sm:peer-focus:text-[20px] peer-focus:text-gray-400 sm:peer-focus:text-[#2C2C2C] ${
                  value && "sm:-top-4 sm:text-[#2C2C2C] sm:text-[20px]"
                }`}
              >
                <div className="w-[18px] h-[18px] ml-1 text-[#808080] md:text-[#2C2C2C]">
                  {origin ? <GrLocation /> : <TbWorldSearch />}
                </div>
                {origin ? "مبدا" : "مقصد"}
              </label>
              <p className="h-2 text-sm font-light text-red-500 sm:absolute sm:-bottom-4 sm:right-2 md:text-base lg:font-normal">
                {error?.message}
              </p>
              {(showOrigin || showDest) && (
                <div className="absolute top-[54px] w-full z-10 bg-[#F8F8F8] border rounded-lg border-[#00000033]">
                  <ul>
                    <li className="text-[13px] text-[#282828B2] font-light font-vazir p-2">
                      پرتردد
                    </li>
                    <li className="divide-y divide-[#0000001F] bg-white max-h-[148px] overflow-y-auto">
                      {(showOrigin ? originCities : destinationCities).map(
                        (city) => (
                          <div
                            key={city.id}
                            className="flex items-center py-2 px-2 cursor-pointer"
                            onMouseDown={(e) => {
                              e.preventDefault();
                              setSelectedFromList(true);
                              onChange(city);
                              origin
                                ? setShowOrigin(false)
                                : setShowDest(false);
                            }}
                          >
                            <div className="w-[18px] h-[18px] ml-1 text-[#808080] md:text-[#2C2C2C]">
                              {showOrigin ? <GrLocation /> : <TbWorldSearch />}
                            </div>
                            <p className="text-sm font-light pr-1 w-fit md:text-base md:font-normal md:py-2">
                              {city.fa_name}
                            </p>
                          </div>
                        )
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </>
          );
        }}
      />
    </div>
  );
}

export default SearchToursInputs;
