"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getCookie } from "@/utils/cookie";
import SendOtpPage from "@/templates/SendOtpPage";
import CheckOtpPage from "@/templates/CheckOtpPage";

function ModalContainer() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [userMobile, setUserMobile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#auth") {
        setIsOpen(true);
        setStep(1);
      } else {
        setIsOpen(false);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const closeModal = () => {
    router.replace(document.location.pathname);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const token = getCookie("accessToken");
  if (token) {
    router.push("/profile");
    setIsOpen(false);
  }

  return (
    <>
      {step === 1 && (
        <SendOtpPage
          setUserMobile={setUserMobile}
          closeModal={closeModal}
          setStep={setStep}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}
      {step === 2 && (
        <CheckOtpPage
          mobile={userMobile}
          setStep={setStep}
          closeModal={closeModal}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}
    </>
  );
}

export default ModalContainer;
