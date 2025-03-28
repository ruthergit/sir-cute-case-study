import React from "react";

const Navbar = () => {
  return (
    <nav className="h-14 font-nunitoSans px-72 flex justify-between content-center">
      <div className="grid place-self-center">
        <img className="w-[190px]" src="/pnc-header.png" alt="" />
      </div>
      <div className="flex space-x-3.5 text-gray-800">
        <a href="#" className="flex items-center gap-0.5">
          About <span><img src="/drop-down.png" alt="" /></span>
        </a>
        <a href="#" className="flex items-center gap-0.5">
          Admission <span><img src="/drop-down.png" alt="" /></span>
        </a>
        <a href="#" className="flex items-center gap-0.5">
          Academics <span><img src="/drop-down.png" alt="" /></span>
        </a>
        <a href="#" className="flex items-center gap-0.5">
          Campus Life <span><img src="/drop-down.png" alt="" /></span>
        </a>
      </div>

      <div className="grid place-self-center">
        <img className="w-[23px]" src="/search.png" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
