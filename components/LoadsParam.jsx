"use client";
import React from "react";

const LoadsParam = ({
  angle,
  setAngle,
  load,
  setLoad,
  position,
  setPosition,
}) => {
  return (
    // <div>LoadsParam</div>
    <>
      <div className=" bg-red-300 gap-5">
        <div className="m-2 p-2 ">
          <label htmlFor="lenth">Position</label>
          <input
            className="bg-white rounded-sm text-green-900 w-2/3"
            type="number"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div className="m-2 p-2 ">
          <label htmlFor="lenth">Load Magnitude</label>
          <input
            className="bg-white rounded-sm text-green-900 w-2/3"
            type="number"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
          />
        </div>
        <div className="m-2 p-2 ">
          <label htmlFor="lenth">Angle</label>
          <input
            className="bg-white rounded-sm text-green-900 w-2/3"
            type="number"
            value={angle}
            onChange={(e) => setAngle(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default LoadsParam;
