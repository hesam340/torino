import { array, object, string } from "yup";

export const tourSchema = object({
  origin: object({
    id: string().required(),
    name: string().required(),
    fa_name: string().required(),
  })
    .required()
    .test(
      "origin-complete",
      "مبدا را انتخاب کنید",
      (value) => !!value?.id && !!value?.name && !!value?.fa_name
    ),
  destination: object({
    id: string().required(),
    name: string().required(),
    fa_name: string().required(),
  })
    .required()
    .test(
      "destination-complete",
      "مقصد را انتخاب کنید",
      (value) => !!value?.id && !!value?.name && !!value?.fa_name
    ),
  calendar: array()
    .min(2, "تاریخ رفت و برگشت را انتخاب کنید"),
});
