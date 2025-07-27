"use client";

import { RxCross2 } from "react-icons/rx";

function CloseButton({ closeModal, check }) {
  return (
    <button
      className={`absolute top-0 ${
        check ? "right-0 mr-2" : "left-0 ml-2"
      } mt-2 text-[#171717]" onClick={closeModal}`}
      onClick={closeModal}
    >
      <RxCross2
        width={"25px"}
        height={"25px"}
        style={{ margin: "2px", fontSize: "20px" }}
      />
    </button>
  );
}

export default CloseButton;
