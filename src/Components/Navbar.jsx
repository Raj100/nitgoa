import React, { Ref, useRef, useState ,useEffect, useContext } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import searchicon from "../assets/icon.svg";
import translation from "../assets/Translation.png";
import colorpicker from "../assets/color picker.svg"
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";
import NitGoalogo from "../assets/NIT_Goa_logo.png"
import divider from "../assets/Divder.svg"

// import Hamburger from './Hamburger'

const Navbar = () => {
  // const [theme,settheme]=useState("");
  const {theme,settheme}=useContext(AppContext);
  const [colorpickermenu,setcolorpickermenu]=useState(false);

  const [Menu, setMenu] = useState(false);
  const NavRef = useRef();

  const toggleMenu = () => {
    NavRef.current.classList.toggle("raju1");
    setMenu(!Menu);
  };


  useEffect(() => {
    const value = window.localStorage.getItem("Theme");
    const valueParse = value ? value : "default";
    settheme(valueParse);
    }, []);

  const update=(newtheme) => {
    localStorage.setItem("Theme",newtheme);
   }



  return (
    <>
      <nav
        ref={NavRef}
        // className="fixed h-full raj bg-[#5065d3] w-full z-10 py-7 px-4"
        className={`fixed h-full raj w-full z-30 py-7 px-4 bg-${theme}th lg:max-w-[500px]`}
      >
        <div className="flex">
          <div className="w-56 bg-white py-[10px] pl-[22px] [pr-18px] rounded-[50px] mr-4 relative flex justify-center items-center overflow-hidden">
            <input type="text" placeholder="🔍 Search..." className=" w-full flex mr-2 border-0 active:border-0 focus:border-0"/>
          </div>
          <div className="rounded-full w-11 bg-white mr-4 flex justify-center items-center" onClick={()=>{setcolorpickermenu(!colorpickermenu);}}> <img src={colorpicker} alt="colorpicker" className="w-[30px]"/></div>
          <div
            className="rounded-full w-11 bg-white flex justify-center items-center text-xl"
            onClick={toggleMenu}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="p-[15px] mt-6 text-white font-dosis text-2xl">
          <p onClick={toggleMenu} className="mb-[13px]"><Link to="/">Home</Link></p>
          <p onClick={toggleMenu} className="mb-[13px]"> <Link to="/About">About Us</Link></p>
          <p onClick={()=>{toggleMenu();}} className="mb-[13px]"><Link to="/Administration" >Administration</Link></p>
          <p  className="mb-[13px]"><Link to="/Academics" >Academics</Link></p>
          <p  className="mb-[13px]"><Link to="/Departments" >Departments</Link></p>
          <p  className="mb-[13px]"><Link to="/Research" >Research</Link></p>
          <p  className="mb-[13px]"><Link to="/Traning&Placement" >Traning & Placement</Link></p>
          {/* <p  className="mb-[13px]"><Link to="/Research" >Students</Link></p> */}
          <p  className="mb-[13px]"><Link to="/Alumni" >Alumni</Link></p>
          <p  className="mb-[13px]"><Link to="/Noneofourbussiness" >Fee Payment</Link></p>
          <p >Mis Portal</p>
        </div>
         {colorpickermenu && (
         <div className="absolute inset-y-1/2 inset-x-1/2 -translate-x-2/4 -translate-y-2/4 bg-gray-100 h-48 w-56 rounded-lg border flex flex-col content-center">
            <p className="text-center p-2 border rounded-lg">Choose Theme</p> 
            <div className="flex p-2 flex-wrap justify-center items-center h-full">
              <div className="w-10 h-10 rounded-full bg-defaultth m-2" onClick={()=>{settheme("default");setcolorpickermenu(!colorpickermenu);update("default");}}></div>
              <div className="w-10 h-10 rounded-full bg-redth m-2" onClick={()=>{settheme("red");setcolorpickermenu(!colorpickermenu);update("red");}}></div>
              <div className="w-10 h-10 rounded-full bg-greenth m-2" onClick={()=>{settheme("green");setcolorpickermenu(!colorpickermenu);update("green");}}></div>
              <div className="w-10 h-10 rounded-full bg-pinkth m-2" onClick={()=>{settheme("pink");setcolorpickermenu(!colorpickermenu);update("pink");}}></div>
              <div className="w-10 h-10 rounded-full bg-darkth m-2" onClick={()=>{settheme("dark");setcolorpickermenu(!colorpickermenu);update("dark");}}></div>
            </div>
         </div>)}
      </nav>

      <div className={` h-[50px] px-4 py-3 flex justify-between items-center bg-${theme}th text-white text-xs`}>
        <div className="flex jutify-center items-center">
          <img className="w-6 mr-2" src={translation} alt="translate" />
          <p>English</p>
        </div>
        <div className="text-dosis">
          <a href="" className=" pr-[10px] ">
            G.I.A.N
          </a>
          <a href="">Login</a>
        </div>
      </div>

      <header className=" sticky top-0 z-20">
        <div className={`h-[70px] lg:h-[90px] bg-${theme}bg px-4 py-5 flex justify-around shadow-lg z-20 lg:hidden`}>
          <img onClick={toggleMenu} src={menu} alt="Menu" className={`${(theme==="dark")? "invert" :""} `}/>
          <img src={logo} alt="NIT Goa Logo" className="lg:hidden" ></img>
          <img src={searchicon} alt="Search" className={`${(theme==="dark")? "invert" :""} w-[18px]`}></img>
        </div>
        <div className={`hidden lg:flex bg-${theme}bg shadow-lg p-5 items-center  `}>
          <img src={NitGoalogo} alt="NIT Goa Logo" className="w-[81px]"/>
          <img src={divider} alt="divider" className="mx-2" />
          <div className="flex flex-col justify-center text-2xl whitespace-nowrap mr-3">
            <p>राष्ट्रीय प्रौद्योगिकी संस्थान</p>
            <p>National Institute of Technology</p>
          </div>
          <div>
            <ul className="flex gap-[23px] items-center p-[10px] font-dosis text-lg	font-bold overflow-hidden whitespace-nowrap">
              <li>Home</li>
              <li>Administration</li>
              <li>Academics</li>
              <li>Admissions</li>
              <li>People</li>
              <li>Research</li>
              <p>Traning & Placement</p>
              <li>Outreach Activities</li>
              <li>NIRF</li>
              <li>Alumni</li>
              <li>Fee Payment</li>
            </ul>
            </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
