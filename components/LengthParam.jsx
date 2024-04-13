import React from "react";

const LengthParam = ({
  length,
  setLength,
  unit,
  setUnit,
  forceUnit,
  setForceUnit,
  position,
  setPosition,
}) => {
  const units = ["m", "cm", "mm", "km", "in", "ft", "yd"];
  const ForceUnits = ["N", "kN", "MN", "GN", "PN", "TN", "EN"];
  return (
    <>
      <div className=" bg-red-300 gap-5">
        <div className="m-2 p-2 ">
          <label htmlFor="lenth">Length</label>
          <input
            className="bg-white rounded-sm text-green-900 w-2/3"
            type="number"
            onChange={(e) => {
              setLength(e.target.value);
              setPosition(e.target.value / 2);
            }}
            placeholder={length}
            name="length"
            value={length}
          />
        </div>
        <div
          className="m-2 p-2 w-full flex flex-col
          "
        >
          <label>Length Unit</label>
          <div>
            <select
              className="bg-white rounded-sm text-green-900 w-2/3"
              onChange={(e) => setUnit(e.target.value)}
            >
              {units.map((unit) => {
                return (
                  <option key={1} value={unit}>
                    {unit}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="m-2 p-2 w-full flex flex-col">
          <label>Force Unit</label>
          <div>
            <select
              className="bg-white rounded-sm text-green-900 w-2/3"
              onChange={(e) => setForceUnit(e)}
            >
              {ForceUnits.map((unit) => {
                return (
                  <option key={1} value={unit}>
                    {unit}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default LengthParam;
