"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

import { e2p } from "@/utils/replaceNumber";
import sliderImages from "@/constants/sliderImages";

function Slider() {
  const [images, setImages] = useState(sliderImages);
  const [isLargeScreen, setIsLargeScreen] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setIsLargeScreen("xlg");
      } else if (width >= 1024) {
        setIsLargeScreen("lg");
      } else if (width >= 768) {
        setIsLargeScreen("md");
      } else {
        setIsLargeScreen("sm");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSizesByIndex = [
    { w: "100%", h: "100%" },
    { w: "90%", h: "90%" },
    { w: "80%", h: "80%" },
    { w: "70%", h: "70%" },
  ];

  const nextHandler = () => {
    if (images[0].id === `${images.length}`) return;
    const newImages = [...images];
    const first = newImages.shift();
    if (first) newImages.push(first);
    setImages(newImages);
  };

  const prevHandler = () => {
    if (images[0].id === "1") return;
    const newImages = [...images];
    const last = newImages.pop();
    if (last) newImages.unshift(last);
    setImages(newImages);
  };

  if (!isLargeScreen) return null;

  return (
    <div className="flex flex-col items-start lg:items-center mx-auto justify-center w-full md:w-[50%] lg:w-[60%]">
      <div className="relative flex items-center justify-around w-[255px] h-[284px] md:w-[298px] md:h-[375px] lg:w-[389px] lg:h-[479px]">
        {images.map((image, index) => {
          const translateX =
            isLargeScreen === "sm"
              ? index * 35
              : isLargeScreen === "md"
              ? index * 38
              : isLargeScreen === "lg"
              ? index * 70
              : isLargeScreen === "xlg"
              ? index * 65
              : null;
          const zIndex = 10 - index;
          const size = getSizesByIndex[index];

          return (
            <div
              key={image.id}
              className="absolute transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${-translateX}px)`,
                zIndex,
                width: `${size.w}`,
                height: `${size.h}`,
              }}
            >
              <Image
                src={image.src}
                fill
                className="object-cover rounded-[35px]"
                alt={image.id}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex justify-start max-md:mr-16 md:mx-auto w-fit gap-4">
        <button
          onClick={nextHandler}
          disabled={images[0].id === `${images.length}`}
          className="disabled:opacity-50"
        >
          <GoArrowRight size={24} color="#10411B" />
        </button>
        <sapn className="font-vazir">
          {e2p(images[0].id)}/{e2p(images.length)}
        </sapn>
        <button
          onClick={prevHandler}
          disabled={images[0].id === "1"}
          className="disabled:opacity-50"
        >
          <GoArrowLeft size={24} color="#10411B" />
        </button>
      </div>
    </div>
  );
}

export default Slider;
