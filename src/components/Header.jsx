import React from 'react';

const Header = () => {
  return (
    <header className='w-full h-auto bg-[#198754] font-nunitoSans text-white px-4 py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:px-72'>
      <div className='flex items-center gap-2'>
        <img src="/location.png" alt="Location icon" className='w-4 h-4' />
        <p className='text-sm'>JP Rizal St, Cabuyao, 4025 Laguna</p>
      </div>
      <div className='flex flex-col sm:flex-row sm:gap-4 text-sm'>
        <a href="">Announcements</a>
        <a href="">Events</a>
        <a href="">Privacy Policy</a>
      </div>
    </header>
  );
};

export default Header;
