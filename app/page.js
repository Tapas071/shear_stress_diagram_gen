"use client";
import Canvas from "@/components/Canvas";
import Footer from "@/components/Footer";
import GraphAndSolution from "@/components/GraphAndSolution";
import MyForm from "@/components/Myform";
import Parameter from "@/components/Parameter";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/nabvar";
import React from "react";
import { useState } from "react";

const Home = () => {
  //  all the states are here
  const [isBeamParameterOn, setIsBeamParameterOn] = useState(true);
  const [length, setLength] = useState(10);
  const [unit, setUnit] = useState("m");
  const [forceUnit, setForceUnit] = useState("F");
  const [isLengthOn, setIsLengthOn] = useState(false);
  const [isSupportOn, setIsSupportOn] = useState(true);
  const [isLoadsOn, setIsLoadsOn] = useState(false);
  const l = length / 2;
  const [angle, setAngle] = useState(90);
  const [load, setLoad] = useState(10);
  const [position, setPosition] = useState(l);

  // all the functions are here
  const onClickHandlerParem = () => {
    console.log("clicked has been pressed");
    setIsBeamParameterOn((a) => !a);
  };
  return (
    <>
      <Navbar />
      <Parameter
        setIsBeamParameterOn={setIsBeamParameterOn}
        isBeamParameterOn={isBeamParameterOn}
        onClickHandlerParem={onClickHandlerParem}
      />
      <div className=" flex">
        {isBeamParameterOn ? (
          <Sidebar
            setIsBeamParameterOn={setIsBeamParameterOn}
            isBeamParameterOn={isBeamParameterOn}
            length={length}
            setLength={setLength}
            unit={unit}
            setUnit={setUnit}
            forceUnit={forceUnit}
            setForceUnit={setForceUnit}
            onClickHandlerParem={onClickHandlerParem}
            isLengthOn={isLengthOn}
            setIsLengthOn={setIsLengthOn}
            isSupportOn={isSupportOn}
            setIsSupportOn={setIsSupportOn}
            isLoadsOn={isLoadsOn}
            setIsLoadsOn={setIsLoadsOn}
            angle={angle}
            setAngle={setAngle}
            load={load}
            setLoad={setLoad}
            position={position}
            setPosition={setPosition}
          />
        ) : (
          ""
        )}
        {/* <MyForm /> */}
        <GraphAndSolution
          length={length}
          unit={unit}
          load={load}
          forceUnit={forceUnit}
          position={position}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
