import { date, object, string } from "yup";

const mobileRegex = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;

export const authSchema = object({
  mobile: string()
    .required("شماره موبایل باید با ۰ شروع شده و بیش از ۱۱ رقم نباشد")
    .matches(
      mobileRegex,
      "لطفا شماره موبایل معتبر وارد نمایید"
    )
    .trim(),
  createdOn: date().default(() => new Date()),
});
