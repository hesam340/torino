"use client";

import { ThreeDots } from "react-loader-spinner";

function Loader({ send }) {
  return (
    <>
      {send ? (
        <ThreeDots
          color="#fff"
          ariaLabel="three-dots-loading"
          visible={true}
          wrapperStyle={{
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "27px",
          }}
        />
      ) : (
        <span className="loading loading-spinner loading-sm md:loading-md text-primary h-5 block md:h-10 md:ml-16"></span>
      )}
    </>
  );
}

export default Loader;
