import React from "react";
import Canvas from "./Canvas";
import Diagram from "./Diagram";
import ResultCom from "./ResultCom";

const GraphAndSolution = ({ length, unit, load, forceUnit, position }) => {
  return (
    <>
      <div className="min-h-screen  flex  flex-col w-full p-10  ">
        <div className="bg-green-900  mb-10">
          <Diagram
            length={length}
            unit={unit}
            load={load}
            forceUnit={forceUnit}
          />
        </div>
        <div className="bg-green-900  mb-10">
          <ResultCom load={load} position={position} length={length} />
        </div>
        <div className="bg-red-900">
          <div className="">{/* <Canvas /> */}</div>
        </div>
      </div>
    </>
  );
};

export default GraphAndSolution;
