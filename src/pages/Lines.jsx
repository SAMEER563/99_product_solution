import React from "react";

const Lines = () => {
  return (
    <div className="">
      <div className="absolute ml-10 md:ml-2 flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 top-[50px] overflow-none ">
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            className="border h-[300px] sm:h-[500px] md:h-[600px] lg:h-[500px] w-[1px] "
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderImage:
                "linear-gradient(180deg, #000000 0%, #3C3968 28%, #4B2E4F 66%, #000000 100%) 1",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Lines;
