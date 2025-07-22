"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import menuOptions from "@/constants/menuOptions";

function MenuList() {
  const [clicked, setClicked] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const current = menuOptions.find((item) => item.href === pathname);
    if (current) setClicked(current.id);
  }, [pathname]);

  return (
    <>
      {menuOptions.map((option) => {
        const isActive = clicked === option.id;

        return (
          <Link
            key={option.id}
            href={option.href}
            className={`${
              isActive ? "text-primary" : "text-[#282828]"
            } md:hover:scale-110 md:transition-all md:duration-[0.2s] flex items-center gap-x-2`}
            onClick={() => setClicked(option.id)}
          >
            <div className="block md:hidden w-[16px] h-[16px] ml-1">
              {isActive ? option.iconSelected : option.icon}
            </div>
            {option.title}
          </Link>
        );
      })}
    </>
  );
}

export default MenuList;
