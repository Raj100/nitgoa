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
import { useTranslation } from "react-i18next";
import LanguageTranslator from "./LanguageToggle";

// import Hamburger from './Hamburger'

const Navbar = () => {
  const {t} = useTranslation()
  // const [theme,settheme]=useState("");
  const {theme,settheme}=useContext(AppContext);
  const [colorpickermenu,setcolorpickermenu]=useState(false);

  const [Menu, setMenu] = useState(false);
  const [AdminMenu, setAdminMenu] = useState(false);
  const [AcademicsMenu, setAcademicsMenu] = useState(false);
  const NavRef = useRef();

  const toggleMenu = () => {
    NavRef.current.classList.toggle("raju1");
    setMenu(!Menu);
  };

  const toggleAdminSubMenu = () => {
    NavRef.current.classList.toggle("adminsubc1");
    setAdminMenu(!AdminMenu);
  }

  const toggleAcademicSubMenu = () => {
    NavRef.current.classList.toggle("academicsubc1");
    setAcademicsMenu(!AcademicsMenu);
  }


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
            <input type="text" placeholder={`🔍 ${t('search')}`} className=" w-full flex mr-2 border-0 active:border-0 focus:border-0"/>
          </div>
          <div className="rounded-full w-11 bg-white mr-4 flex justify-center items-center" onClick={()=>{setcolorpickermenu(!colorpickermenu);}}> <img src={colorpicker} alt="colorpicker" className="w-[30px]"/></div>
          <div
            className="rounded-full w-11 bg-white flex justify-center items-center text-xl"
            onClick={toggleMenu}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="p-[15px] mt-6 text-white font-dosis text-2xl overflow-scroll h-full">
          <p onClick={toggleMenu} className="mb-[13px] border-b border-b-gray-50/25"><Link to="/">{t("home")}</Link></p>
          <p onClick={toggleMenu} className="mb-[13px] border-b border-b-gray-50/25"> <Link to="/About">{t("about_us")}</Link></p>
          <p onClick={toggleAdminSubMenu} className={`mb-[13px] adminsubc`}>
            <div className={`${AdminMenu ? "arrow" : "arrow-down"} border-b border-b-gray-50/25`}>{t("administration")}</div>
            <p className="ml-8" id='admin'>
              <ul className="pt-3">
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to="/BOG">{t('bog')}</Link>
                </li>
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to="/Director">{t('director')}</Link>
                </li>
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to="/Registrar">{t('registrar')}</Link>
                </li>
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to='/Senate'>{t('senate')}</Link>
                </li>
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to='/Dean'>{t('dean')}</Link>
                </li>
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to='/Building'>{t('bwc')}</Link>
                </li>
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to='/Finance'>{t("finance")}</Link>
                </li>
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to='/Reports'>{t("reports")}</Link>
                </li>
              </ul>
            </p>
          </p>
          <p onClick={toggleAcademicSubMenu} className={`mb-[13px] academicsubc`}>
            <div className={`${AcademicsMenu ? "arrow" : "arrow-down"} border-b border-b-gray-50/25`}>{t("academics")}</div>
            <p className="ml-8" id='academic'>
              <ul className="pt-3">
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to="/Academics">{t("academic_calender")}</Link>
                </li>
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to="/Dissertation">{t("dissertation")}</Link>
                </li>
              </ul>
            </p>
          </p>
          <p  className="mb-[13px] border-b border-b-gray-50/25"><Link to="/Departments" >{t("dept")}</Link></p>
          <p  className="mb-[13px] border-b border-b-gray-50/25"><Link to="/Research" >{t("research")}</Link></p>
          <p  className="mb-[13px] border-b border-b-gray-50/25"><Link to="/Traning&Placement" >{t("t_p")}</Link></p>
          {/* <p  className="mb-[13px]"><Link to="/Research" >Students</Link></p> */}
          <p  className="mb-[13px] border-b border-b-gray-50/25"><Link to="/Alumni" >{t("alumni")}</Link></p>
          <p  className="mb-[13px] border-b border-b-gray-50/25"><Link to="/Noneofourbussiness" >{t("feepay")}</Link></p>
          <p className="mb-[13px] border-b border-b-gray-50/25">{t("mis")}</p>
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
          <LanguageTranslator />
        <div className="text-dosis">
          <a href="" className=" pr-[10px] ">
            {t('gian')}
          </a>
          <a href="">{t('login')}</a>
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
              <li>{t("home")}</li>
              <li>{t("about_us")}</li>
              <li>{t("academics")}</li>
              <li>{t("admission")}</li>
              <li>{t("people")}</li>
              <li>{t("research")}</li>
              <p>{t("t_p")}</p>
              <li>{t("outreach")}</li>
              <li>{t("nirf")}</li>
              <li>{t("alumni")}</li>
              <li>{t("feepay")}</li>
            </ul>
            </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
