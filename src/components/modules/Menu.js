"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import MenuList from "@/modules/MenuList";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="block md:hidden">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center"
        >
          <div className="w-[22px] h-[18px] ml-1 text-[#808080] md:text-[#2C2C2C]">
            <div className="border-t-[2.5px] border-secondary rounded-lg mb-[6px]"></div>
            <div className="border-t-[2.5px] border-secondary rounded-lg mb-[6px]"></div>
            <div className="border-t-[2.5px] border-secondary rounded-lg"></div>
          </div>
        </button>
      </div>
      <div className="flex items-center justify-between lg:w-[750px]">
        <div className="hidden md:block">
          <Link href="/">
            <Image
              src="/SVGs/Torino-logo.svg"
              width={146}
              height={44}
              alt="torino-logo"
              className="object-contain"
              priority={true}
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <nav className="w-[370px] lg:w-[499px] text-base lg:text-lg font-normal flex justify-between">
            <MenuList />
          </nav>
        </div>
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-start md:hidden"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="px-5 py-8 flex flex-col gap-4 bg-white w-[209px] h-full rounded-tl-xl"
            >
              <MenuList />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
