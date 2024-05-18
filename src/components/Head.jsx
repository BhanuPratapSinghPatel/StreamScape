import React from 'react';

export const Head = () => {
  return (
      <div className="grid grid-flow-col  items-center p-2 m-2  shadow-lg ">
        {/* Left Section */}
        <div className="flex items-center">
          <img
            className="h-6"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
            alt="Menu Icon"
          />
          <img
            className="h-6 mx-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="Logo"
          />
        </div>

        {/* Middle Section */}
        <div className="flex justify-center items-center">
          <input
            className="w-full border border-[#F0F0F0] rounded-l-full p-2 focus:outline-none focus:ring-2 focus:ring-[#F0F0F0] focus:border-transparent"
            type="text"
            placeholder="Search"
          />
          <button className="bg-[#F0F0F0] p-2 rounded-r-full w-[12%]">
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
              alt="Search Icon"
            />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-end items-center">
          <img
            className="h-10"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User Icon"
          />
        </div>
      </div>
  );
};
