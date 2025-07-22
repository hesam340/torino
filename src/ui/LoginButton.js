"use client";

import Link from "next/link";
import { HiUser } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { IoMdLogOut } from "react-icons/io";
import { BiLogInCircle } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";

import { setCookie } from "@/utils/cookie";
import { e2p } from "@/utils/replaceNumber";
import { useProfile } from "@/hooks/queries";
import handleHash from "@/utils/hashRedirect";
import Loader from "@/components/modules/Loader";
import { useQueryClient } from "@tanstack/react-query";

function LoginButton() {
  const [showProfile, setShowProfile] = useState(false);
  const { data, error, isPending } = useProfile();
  const profileRef = useRef();
  const router = useRouter();
  const queryClient = useQueryClient();

  if (error && error?.status !== 401) {
    router.push("/");
  }

  const logOutHandler = () => {
    setCookie("accessToken", "", 0);
    setCookie("refreshToken", "", 0);
    queryClient.removeQueries({ queryKey: ["profile"] });
    setShowProfile(false);
    router.refresh();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    if (showProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfile]);

  return (
    <>
      {isPending ? (
        <div>
          <Loader send={false} />
        </div>
      ) : data ? (
        <>
          <div className="relative" ref={profileRef}>
            <div
              className="flex items-center justify-between gap-x-1 cursor-pointer"
              onClick={() => setShowProfile((e) => !e)}
            >
              <HiUser className="size-[14px] md:size-6 text-primary" />
              <span className="block text-primary text-sm md:text-lg">
                {e2p(data.mobile)}
              </span>
              <button>
                <IoIosArrowDown className="size-[16px] md:size-6 text-primary" />
              </button>
            </div>
            {showProfile && (
              <div className="absolute top-6 -left-6 md:top-8 md:-left-10 lg:top-9 lg:-left-11 z-30 bg-white w-[157px] md:w-[246px] h-fit rounded-[11px]">
                <ul>
                  <li className="flex items-center gap-x-2 px-3 py-2 bg-[#F4F4F4] rounded-t-[11px]">
                    <div className="size-7 rounded-full bg-[#D9D9D9]">
                      <HiUser className="size-4 text-[#696969] mx-auto mt-1" />
                    </div>
                    <p className="text-secondary font-normal text-sm md:text-base">
                      {e2p(data.mobile)}
                    </p>
                  </li>
                  <li className="px-3 py-2 cursor-pointer">
                    <button
                      onClick={() => {
                        router.push("/profile");
                        setShowProfile(false);
                      }}
                      className="flex items-center gap-x-2 "
                    >
                      <HiOutlineUser className="size-4 md:size-5" />
                      <p className="text-xs md:text-sm font-light md:font-normal text-[#282828]">
                        اطلاعات حساب کاربری
                      </p>
                    </button>
                  </li>
                  <li className="px-3 py-2 border-t border-t-[#00000033] text-[#D40000] cursor-pointer">
                    <button
                      className="flex items-center gap-x-2"
                      onClick={logOutHandler}
                    >
                      <IoMdLogOut className="size-4 md:size-5" />
                      <p className="text-xs md:text-sm font-light md:font-normal">
                        خروج از حساب کاربری
                      </p>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="block md:hidden">
            <Link
              href="#auth"
              onClick={handleHash}
              className="border border-primary rounded-md w-10 h-10 flex justify-center items-center"
            >
              <BiLogInCircle
                width={24}
                height={24}
                style={{ fontSize: "25px" }}
                color="#28a745"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <Link
              href="#auth"
              onClick={handleHash}
              className="border-2 border-primary rounded-md flex items-center justify-around lg:px-2 text-primary font-vazir w-[130px] lg:w-[160px] md:h-9 lg:h-11 hover:scale-105 transition-all duration-[0.2s]"
            >
              <HiUser
                width={"22px"}
                height={"22px"}
                style={{ fontSize: "20px" }}
                color="#28a745"
              />
              <p className="text-base lg:text-lg font-medium">
                ورود<span className="mx-1 lg:mx-2">|</span>ثبت نام
              </p>
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default LoginButton;
