"use client";
import React from "react";

const Parameter = ({
  setIsBeamParameterOn,
  isBeamParameterOn,
  onClickHandlerParem,
}) => {
  return (
    <>
      <div className="bg-red-100 flex justify-evenly">
        <div className="cursor-pointer" onClick={onClickHandlerParem}>
          Parameter
        </div>
        <div className="">Clear All</div>
        <div className="">Setting</div>
        <div className="">Run </div>
      </div>
    </>
  );
};

export default Parameter;
