import React from "react";

// import pinnedSupport from "../public/pinnedSupport.jpg";

import pinnedSupport from "@/public/TypesOfSupportImg/pinnedSupport.jpg";
import rollerSupport from "@/public/TypesOfSupportImg/rollarSupport.jpg";
import fixedSupport from "@/public/TypesOfSupportImg/fixedSupport.jpg";
import internalHinge from "@/public/TypesOfSupportImg/InternalHingedSupport.jpg";

// import rollerSupprtImg from "../public/rollerSupport.jpg";
// import fixedSupportImg from "../public/fixedSupport.jpg";
// import internalHingeImg from "../public/internalHingeSupport.jpg";
import Image from "next/image";

const SupportsParams = () => {
  const SupportType = [
    { type: "pinned", value: 1, imgUrl: pinnedSupport },
    { type: "roller", value: 2, imgUrl: rollerSupport },
    { type: "fixed", value: 3, imgUrl: fixedSupport },
    { type: "internal hinge", value: 4, imgUrl: internalHinge },
  ];
  return (
    <>
      <div className=" bg-red-300 gap-5">
        <div className=" h-10 w-10 flex bg-green-900 w-full justify-evenly">
          {SupportType.map((support) => {
            return (
              <div key={support.value} className="flex flex-col  ">
                {/* <img src={support.imgUrl} alt={support.type} /> */}
                <Image
                  src={support.imgUrl}
                  alt={support.type}
                  className=" h-10 pt-1 pb-1"
                  onClick={() => {
                    if (support.type === "pinned") {
                      //   alert("pinned");
                      return <div>hello</div>;
                    }
                    if (support.type === "roller") {
                      alert("roller");
                    }
                    if (support.type === "fixed") {
                      alert("fixed");
                    }
                    if (support.type === "internal hinge") {
                      alert("internal hinge");
                    }
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SupportsParams;
