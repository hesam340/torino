"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function ShowMoreWrapper({ children, initialCount }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <div className="flex flex-wrap justify-center md:justify-between mx-auto gap-4 w-full">
        {children.map((child, index) => (
          <div
            key={index}
            className={`${
              index < initialCount ? "" : showAll ? "block" : "hidden"
            } md:block`}
          >
            {child}
          </div>
        ))}
      </div>
      {children.length > initialCount && (
        <div className="md:hidden flex justify-center mt-6">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center text-[#00000080] hover:text-[#00000090] transition duration-[0.2s]"
          >
            {showAll ? "مشاهده کمتر" : "مشاهده بیشتر"}
            <IoIosArrowDown
              style={{
                transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
                marginRight: "8px",
              }}
            />
          </button>
        </div>
      )}
    </>
  );
}

export default ShowMoreWrapper;
