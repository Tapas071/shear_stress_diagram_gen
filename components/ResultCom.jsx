import React from "react";

const ResultCom = ({ load, position, length }) => {
  const va = (load * position) / length;
  return (
    <div>
      <div className="">The reaction force at A is Va = {va} </div>
      <div className="">The reaction force at B is Vb = {load - va} </div>
    </div>
  );
};

export default ResultCom;
