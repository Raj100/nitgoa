import React from 'react'
import logo from "../assets/logo.png"
import menu from "../assets/menu.svg"
const Navbar = () => {
  return (
    <>
    <div className=' h-12 px-4 py-3 flex justify-between bg-defaultth text-white text-xs'>
      <p>English</p>
      <div className="">
        <a href="" className=' pr-[10px] '>G.I.A.N</a>
        <a href="">Login</a>
      </div>
    </div>

    <header>

      <div className='h-[70px] bg-defaultbg'>
        <img src={menu} alt="" />
        <img src={logo}></img>
      </div>

    </header>
    </>
  )
}

export default Navbar
