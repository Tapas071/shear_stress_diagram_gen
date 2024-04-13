"use client";
import React from "react";
import { IoBackspaceSharp } from "react-icons/io5";
import { useState } from "react";
import LengthParam from "./LengthParam";
import LoadsParam from "./LoadsParam";
import SupportsParams from "./SupportsParams";

const Sidebar = ({
  setIsBeamParameterOn,
  isBeamParameterOn,
  onClickHandlerParem,
  length,
  setLength,
  unit,
  setUnit,
  forceUnit,
  setForceUnit,
  isLengthOn,
  setIsLengthOn,
  isSupportOn,
  setIsSupportOn,
  isLoadsOn,
  setIsLoadsOn,
  angle,
  setAngle,
  load,
  setLoad,
  position,
  setPosition,
}) => {
  return (
    <>
      <div className=" min-h-screen h-10 w-1/3 bg-black text-black gap-3">
        <div className=" bg-gray-500 flex justify-between p-3">
          <div className="">Beam Parameter</div>
          <div className="">
            <button className="" onClick={onClickHandlerParem}>
              <IoBackspaceSharp />
            </button>
          </div>
        </div>

        {/* -------------length, support, loads, Calculation */}
        <div className="bg-red-900 p-3 flex justify-evenly">
          <button
            onClick={() => {
              setIsLengthOn(true);
              setIsLoadsOn(false);
              setIsSupportOn(false);
            }}
          >
            Length
          </button>
          <button
            onClick={() => {
              setIsSupportOn(true);
              setIsLengthOn(false);
              setIsLoadsOn(false);
            }}
          >
            Support
          </button>
          <button
            onClick={() => {
              setIsLoadsOn(true);
              setIsLengthOn(false);
              setIsSupportOn(false);
            }}
          >
            Loads
          </button>
          <button>Calculation</button>
        </div>

        {isLengthOn && (
          <LengthParam
            length={length}
            setLength={setLength}
            unit={unit}
            setUnit={setUnit}
            forceUnit={forceUnit}
            setForceUnit={setForceUnit}
            position={position}
            setPosition={setPosition}
          />
        )}
        {isSupportOn && <SupportsParams />}
        {isLoadsOn && (
          <LoadsParam
            angle={angle}
            setAngle={setAngle}
            load={load}
            setLoad={setLoad}
            position={position}
            setPosition={setPosition}
          />
        )}
      </div>
    </>
  );
};

export default Sidebar;
