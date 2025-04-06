import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full font-nunitoSans px-4 sm:px-72 py-2 flex flex-col sm:flex-row justify-between items-center bg-white">
      {/* Top Row: Logo + Hamburger on Mobile */}
      <div className="w-full flex justify-between items-center sm:w-auto">
        <img className="w-[150px] sm:w-[190px]" src="/pnc-header.png" alt="PNC Logo" />
        
        {/* Hamburger menu - visible on mobile only */}
        <div className="sm:hidden">
          <img className="w-4 h-4" src="/hamburger.png" alt="Menu" />
        </div>
      </div>

      {/* Navigation Links - hidden on mobile */}
      <div className="hidden sm:flex space-x-3.5 mt-2 sm:mt-0 text-black">
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

      {/* Search Icon - hidden on mobile */}
      <div className="hidden sm:grid place-self-center">
        <img className="w-[23px]" src="/search.png" alt="Search" />
      </div>
    </nav>
  );
};

export default Navbar;
