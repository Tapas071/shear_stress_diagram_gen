import Link from "next/link";
import React from "react";
import { PiAirplaneInFlight } from "react-icons/pi";

const Navbar = () => {
  const options = [
    { name: "Terms and Conditions", link: "/about/terms&conditions" },
    { name: "Pricing", link: "/" },
    { name: "Support", link: "/" },
    { name: "Contacts", link: "/" },
  ];
  return (
    <>
      <nav className="bg-gray-700 flex justify-between p-4 text-white text-2xl">
        <Link href="/">
          <div className="flex gap-2">
            <div className="">
              <PiAirplaneInFlight className="" />
            </div>
            <div className="">Beam calculator</div>
          </div>
        </Link>
        <div className=" flex text-sm gap-4">
          {options.map((option, index) => {
            return (
              <div key={index} className="hover:bg-sky-200 ">
                <Link href="/">{option.name}</Link>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
