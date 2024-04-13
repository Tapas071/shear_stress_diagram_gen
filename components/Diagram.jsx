import React from "react";
import pinnedSupprt from "@/public/TypesOfSupportImg/pinnedSupport.jpg";

import rollerSupport from "@/public/TypesOfSupportImg/rollarSupport.jpg";
import downArrow from "@/public/TypesOfSupportImg/downArrow.png";
import Image from "next/image";

const Diagram = ({ length, unit, load, forceUnit }) => {
  return (
    <>
      <div className="p-10 flex flex-col">
        {" "}
        {/* arrow */}
        <div className="force flex  flex-col  w-full justify-center ">
          <div className=" flex  justify-center">
            <div
              className=" justify-0
            xcenter  "
            >
              <div className="">
                Load :{load} {forceUnit}
              </div>
              <Image
                src={downArrow}
                alt="Picture of the author"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
        {/*  bar  */}
        <div className="sup flex justify-between mt-0">
          <div className=" float-end pl-5">A</div>
          <div className=" pr-5">B</div>
        </div>
        <div className=" h-1 bg-orange-900 mb-0"></div>
        <div className="sup flex justify-between mt-0">
          <div className=" float-end">
            <Image
              src={pinnedSupprt}
              alt="Picture of the author"
              width={50}
              height={100}
            />
          </div>
          <div className="">
            <Image
              src={rollerSupport}
              alt="Picture of the author"
              width={50}
              height={100}
            />
          </div>
        </div>
        <div className="length flex">
          <div className="bg-red-100 h-1 w-full"></div>
          <div className="text-sm w-1/12">
            {" "}
            {length} {unit}
          </div>
          <div className=" h-1 bg-red-100 w-full"> </div>
        </div>
      </div>
    </>
  );
};

export default Diagram;
