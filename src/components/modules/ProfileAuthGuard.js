"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { getCookie } from "@/utils/cookie";

function ProfileAuthGuard() {
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("accessToken");
    if (!token) router.push("/");
  }, []);

  return null;
}

export default ProfileAuthGuard;
