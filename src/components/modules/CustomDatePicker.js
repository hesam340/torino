"use client";

import { useState } from "react";
import DateObject from "react-date-object";
import { Controller } from "react-hook-form";
import { LuCalendarDays } from "react-icons/lu";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function CustomDatePicker({ control, user, profile }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`relative w-full ${user ? "w-full" : "sm:w-[25%]"} `}>
      <Controller
        name={user ? "birthDate" : "calendar"}
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <>
            <DatePicker
              id={user ? "birthDate" : "calendar"}
              placeholder=" "
              range={user ? false : true}
              value={value}
              dateSeparator={user ? false : "- تا -"}
              calendar={persian}
              locale={persian_fa}
              onOpen={() => setFocused(true)}
              onClose={() => setFocused(false)}
              minDate={
                user
                  ? "1310/1/1"
                  : new DateObject({ calendar: persian }).format()
              }
              maxDate={
                user
                  ? new DateObject({ calendar: persian })
                      .subtract(18, "years")
                      .format()
                  : new DateObject({ calendar: persian })
                      .add(2, "years")
                      .format()
              }
              onChange={(e) => {
                if (profile) {
                  const time = new Date(e).getTime();
                  onChange(time);
                } else {
                  onChange(e);
                }
              }}
              currentDate={
                user &&
                new DateObject({ calendar: persian }).subtract(18, "years")
              }
              editable={false}
              calendarPosition={user ? "bottom-right" : "bottom-center"}
              containerStyle={{ width: "100%" }}
              inputClass={`peer border px-3 w-full h-[47px] focus:outline-none focus:border-complementry ${
                error?.message
                  ? "border-red-500"
                  : user
                  ? "border-[#00000080]"
                  : "border-[#00000026]"
              } ${
                user
                  ? "text-right rounded-[5px] text-base"
                  : "sm:border-none text-center sm:text-right rounded-xl mt-3 sm:mt-0 text-base text-gray-400"
              }`}
            />
            {user ? (
              <label
                htmlFor="birthDate"
                className={`absolute w-fit right-0 bg-white -translate-x-1 transition-all duration-200 flex items-center gap-1 px-1 pointer-events-none top-2 text-[20px] text-[#00000080] font-light lg:font-normal ${
                  (focused || (value && value !== "")) && "labelFloating"
                }`}
              >
                <div className="w-[18px] h-[18px] ml-1 text-[#808080]">
                  <LuCalendarDays />
                </div>
                تاریخ تولد
              </label>
            ) : (
              <label
                htmlFor="calendar"
                className={`absolute w-fit left-1/2 -translate-x-1/2 sm:right-0 sm:-translate-x-1 transition-all duration-200 flex items-center gap-1 bg-white px-1 pointer-events-none
          ${
            value?.length >= 1
              ? "top-1 sm:-top-4 text-sm sm:text-[20px] text-gray-400 sm:text-[#2C2C2C]"
              : "top-6 sm:top-3 text-base sm:text-[20px] text-gray-400 sm:text-[#2C2C2C]"
          }`}
              >
                <div className="w-[18px] h-[18px] ml-1 text-[#808080] md:text-[#2C2C2C]">
                  <LuCalendarDays />
                </div>
                ناریخ
              </label>
            )}

            <p
              className={`h-2 text-sm font-light text-red-500 sm:-bottom-4 sm:right-2 md:text-base lg:font-normal ${
                user ? "static" : "sm:absolute"
              }`}
            >
              {error?.message}
            </p>
          </>
        )}
      />
    </div>
  );
}

export default CustomDatePicker;
