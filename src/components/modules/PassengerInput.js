import { Controller } from "react-hook-form";

import { e2p, p2e } from "@/utils/replaceNumber";

function PassengerInput({ control, name, showGender, setShowGender }) {
  const genderHandler = (e, onChange) => {
    e.preventDefault();
    if (e.target.tagName !== "LI") return;
    onChange(e.target.dataset.gender);
    setShowGender(false);
  };

  const genderOptions = {
    male: "مرد",
    female: "زن",
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => {
          return (
            <>
              <input
                type="text"
                id={name}
                placeholder=" "
                value={
                  name === "nationalCode" ||
                  name === "payment.shaba_code" ||
                  name === "payment.debitCard_code" ||
                  name === "payment.accountIdentifier"
                    ? e2p(value || "")
                    : name === "gender"
                    ? genderOptions[value]
                    : value
                }
                readOnly={name === "gender" ? true : false}
                inputMode={
                  (name === "nationalCode" ||
                    name === "payment.shaba_code" ||
                    name === "payment.debitCard_code" ||
                    name === "payment.accountIdentifier") &&
                  "numeric"
                }
                onFocus={name === "gender" ? () => setShowGender(true) : null}
                onBlur={() => {
                  if (name === "gender") {
                    setShowGender(false);
                  }
                  onBlur();
                }}
                onChange={
                  name === "nationalCode" ||
                  name === "payment.shaba_code" ||
                  name === "payment.debitCard_code" ||
                  name === "payment.accountIdentifier"
                    ? (e) => {
                        onChange(p2e(e.target.value.replace(/[^\d۰-۹]/g, "")));
                      }
                    : (e) => onChange(e)
                }
                className={`peer border ${
                  error?.message ? "border-red-500" : "border-[#00000080]"
                } sm:px-3 text-right rounded-[5px] px-3 w-full h-[47px] text-sm font-light lg:text-base lg:font-normal text-[#282828] focus:outline-none focus:border-complementry`}
              />
              <label
                htmlFor={name}
                className={`absolute w-fit right-0 -translate-x-1 -top-2 flex items-center gap-1 bg-white px-1 text-gray-400 text-sm font-light lg:font-normal transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-[20px] peer-placeholder-shown:text-[#00000080] peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#00000080]${
                  value && "-top-4 text-sm"
                }`}
              >
                {name === "fullName"
                  ? "نام و نام خانوادگی"
                  : name === "nationalCode"
                  ? "کد ملی"
                  : name === "gender"
                  ? "جنسیت"
                  : name === "firstName"
                  ? "نام"
                  : name === "lastName"
                  ? "نام خانوادگی"
                  : name === "email"
                  ? "آدرس ایمیل"
                  : name === "shaba_code"
                  ? "شماره شبا"
                  : name === "debitCard_code"
                  ? "شماره کارت"
                  : "شماره حساب"}
              </label>
              <p className="h-2 mb-5 lg:mb-6 text-sm font-light text-red-500 md:text-base lg:font-normal">
                {error?.message}
              </p>
              {showGender && (
                <div className="absolute top-[54px] w-full z-10 bg-[#F8F8F8] border rounded-lg border-[#00000033]">
                  <ul className="divide-y divide-[#0000001F] bg-white">
                    <li
                      data-gender="male"
                      onMouseDown={(e) => genderHandler(e, onChange)}
                      className="py-2 px-2 cursor-pointer text-base"
                    >
                      مرد
                    </li>
                    <li
                      data-gender="female"
                      onMouseDown={(e) => genderHandler(e, onChange)}
                      className="py-2 px-2 cursor-pointer text-base"
                    >
                      زن
                    </li>
                  </ul>
                </div>
              )}
            </>
          );
        }}
      />
    </>
  );
}

export default PassengerInput;
