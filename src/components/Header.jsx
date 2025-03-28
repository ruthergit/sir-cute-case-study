import React from 'react'

const Header = () => {
  return (
    <header className='h-12 bg-[#198754] font-nunitoSans text-white px-72 py-2.5 flex justify-between content-center'>
      <div className='h-6 flex'>
        <img src="/location.png" alt="" />
        <p>JP Rizal St, Cabuyao, 4025 Laguna</p>
      </div>
      <div className='h-6 flex gap-4'>
        <a href="">Announcements</a>
        <a href="">Events</a>
        <a href="">Privacy Policy</a>
      </div>
    </header>
  )
}

export default Header
