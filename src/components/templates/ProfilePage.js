"use client";

import { useEffect } from "react";
import { DateObject } from "react-multi-date-picker";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import persian from "react-date-object/calendars/persian";

import { useProfile } from "@/hooks/queries";
import { useEditProfile } from "@/hooks/mutations";
import PublicUserInfo from "@/modules/PublicUserInfo";
import PrivateUserInfo from "@/modules/PrivateUserInfo";
import ProfileSkeleton from "@/skeletons/ProfileSkeleton";
import { profileSchema } from "@/validation/profileSchema";
import AccountBankUserInfo from "@/modules/AccountBankUserInfo";

function ProfilePage() {
  const { data, isPending } = useProfile();
  const { mutate } = useEditProfile();

  const birthDate = data?.birthDate
    ? new DateObject({
        date: new Date(data.birthDate),
        calendar: persian,
      })
    : {};

  const methods = useForm({
    resolver: yupResolver(profileSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      firstName: data?.firstName || "",
      lastName: data?.lastName || "",
      nationalCode: "",
      birthDate: birthDate,
      gender: "",
      payment: {
        shaba_code: "",
        debitCard_code: "",
        accountIdentifier: "",
      },
    },
  });

  useEffect(() => {
    if (data) {
      methods.reset({
        email: data.email || "",
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        nationalCode: data.nationalCode || "",
        birthDate: birthDate || {},
        gender: data.gender || "",
        payment: {
          shaba_code: data?.payment?.shaba_code || "",
          debitCard_code: data?.payment?.debitCard_code || "",
          accountIdentifier: data?.payment?.accountIdentifier || "",
        },
      });
    }
  }, [data]);

  const formHandler = (formData) => {
    const newData = {
      ...formData,
      birthDate,
      payment: {
        shaba_code: formData?.payment?.shaba_code || "",
        debitCard_code: formData?.payment?.debitCard_code || "",
        accountIdentifier: formData?.payment?.accountIdentifier || "",
      },
    };
    mutate(newData);
  };
  return (
    <div className="mt-5 lg:mt-0 lg:w-[68%] xl:w-[72%] min-h-lvh">
      {isPending ? (
        <>
          <ProfileSkeleton />
          <ProfileSkeleton />
          <ProfileSkeleton />
        </>
      ) : (
        <FormProvider {...methods}>
          <PublicUserInfo data={data} formHandler={formHandler} />
          <PrivateUserInfo data={data} formHandler={formHandler} />
          <AccountBankUserInfo data={data} formHandler={formHandler} />
        </FormProvider>
      )}
    </div>
  );
}

export default ProfilePage;
