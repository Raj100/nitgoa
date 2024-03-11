import React from "react";
import { useContext, useState, useEffect, Ref, useRef } from "react";
import { AppContext } from "./AppContext";
import { useTranslation } from "react-i18next";
import Twitter from '../assets/twitter.png';
import LinkedIn from '../assets/linkedin.png';
import { Link } from "react-router-dom";
import Insta from '../assets/insta.png';
import './Footer.css';
import IndiaGov from '../assets/indiagov.png';
import DigitalIndia from '../assets/digitalindia.png';
import MakeInIndia from '../assets/makeinindia.png';
import DataGov from '../assets/datagov.png';
import Location from '../assets/Location.png';
import Web from '../assets/Web.png';
import Phone from '../assets/Phone.png';
import Fax from '../assets/Fax.png';

const Footer = () => {
  const {t} = useTranslation()
  const {theme}=useContext(AppContext);

  const [quickLink, setQuickLink] = useState(false);
  const [infoLink, setInfoLink] = useState(false);
  const [natportLink, setNatportLink] = useState(false);
  const [contactLink, setContactLink] = useState(false);

  const footRef = useRef();

  const toggleQuickLink = () => {
    footRef.current.classList.toggle('qlc1');
    setQuickLink(!quickLink);
  }

  const toggleInfo = () => {
    footRef.current.classList.toggle('infoc1');
    setInfoLink(!infoLink);
  }

  const toggleNatport = () => {
    footRef.current.classList.toggle('natsubc1');
    setNatportLink(!natportLink);
  }

  const toggleContact = () => {
    footRef.current.classList.toggle('contactc1');
    setContactLink(!contactLink);
  }

  return (
    <>
      {quickLink || infoLink || natportLink || contactLink ? (
        <div className="overlay"></div>
      ) : null}
      <footer ref={footRef} className={`flex flex-col bg-defaultbg2 justify-center font-dosis`}>
        <button className={`bg-${theme}th py-[11px] px-[10px] text-center text-[13px] text-white border-b-[0.2px] border-black qlc`} onFocus={toggleQuickLink} onBlur={toggleQuickLink}>
          {t("quicklink")}
          <div id="quicklink-sub-menu">
            <button className={`w-8 mx-auto my-4 rounded-sm mt-1 bg-gray-500 th px-0.5 py-0.5`}></button>
              <h2 className="text-3xl font-bold text-center font-sans">Quick Links</h2>
              <div className={`w-20 mx-auto my-2 rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
              <ul className="text-md flex flex-col gap-4 font-bold font-sans">
                <li>
                  <Link to={'/About'} >About Us</Link>
                </li>
                <li>Syllabus</li>
                <li>Results</li>
                <li>Feedback</li>
                <li>Login</li>
                <li>Dissertation Format</li>
                <li>E-Downloads</li>
                <li>Contact Us</li>
                <li>Students</li>
                <li>RTI</li>
                <li>Academic Calendar</li>
                <li>Regulations & Curriculum</li>
              </ul>
          </div>
        </button>
        <button className={`bg-${theme}th py-[11px] px-[10px] text-center text-[13px] text-white border-b-[0.2px] border-black infoc`} onFocus={toggleInfo} onBlur={toggleInfo}>
          {t("info")}
          <div id="info-sub-menu">
          <button className={`w-8 mx-auto my-4 rounded-sm mt-1 bg-gray-500 th px-0.5 py-0.5`}></button>
              <h2 className="text-3xl font-bold text-center font-sans">Information</h2>
              <div className={`w-20 mx-auto my-2 rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
              <ul className="text-md flex flex-col gap-5 mt-4 font-bold font-sans">
                <li>Faculty</li>
                <li>Staff</li>
                <li>JEE</li>
                <li>Facilities</li>
                <li>Fee Structure</li>
                <li>NIRF</li>
              </ul>
          </div>
        </button>
        <button className={`bg-${theme}th py-[11px] px-[10px] text-center text-[13px] text-white border-b-[0.2px] border-black natsubc`} onFocus={toggleNatport} onBlur={toggleNatport}>
          {t("natpor")}
          <div id="natpor-sub-menu">
          <button className={`w-8 mx-auto my-4 rounded-sm mt-1 bg-gray-500 th px-0.5 py-0.5`}></button>
              <h2 className="text-3xl font-bold text-center font-sans">National Portals</h2>
              <div className={`w-20 mx-auto my-2 rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
              <ul className="text-md flex flex-col gap-5 mt-4 font-bold font-sans">
                <li>
                  <a href="https://www.india.gov.in/">
                    <img src={IndiaGov} alt="india.gov.in" className="mx-auto px-2"/>
                  </a>
                </li>
                <li>
                  <a href="https://digitalindia.gov.in/">
                    <img src={DigitalIndia} alt="Digital India" className="mx-auto px-2"/>
                  </a>
                </li>
                <li>
                  <a href="https://www.makeinindia.com/">
                    <img src={MakeInIndia} alt="Make In India" className="mx-auto px-2"/>
                  </a>
                </li>
                <li>
                  <a href="https://data.gov.in/">
                    <img src={DataGov} alt= "Data Government" className="mx-auto px-2"/>
                  </a>
                </li>
              </ul>
          </div>
        </button>
        <button className={`bg-${theme}th py-[11px] px-[10px] text-center text-[13px] text-white border-b-[0.2px] border-black contactc`} onFocus={toggleContact} onBlur={toggleContact}>
          {t("contact_us")}
          <div id="contact-sub-menu">
          <button className={`w-8 mx-auto my-4 rounded-sm mt-1 bg-gray-500 th px-0.5 py-0.5`}></button>
              <h2 className="text-3xl font-bold text-center font-sans">National Portals</h2>
              <div className={`w-20 mx-auto my-2 rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
              <ul className="text-md flex flex-col gap-2 mt-4 font-bold font-sans">
                <li>
                  <div className="flex flex-row gap-8 mx-auto w-full p-4 items-center text-left content-center">
                    <img src={Location} alt="location" />
                    <div>
                      National Institute of Technology Goa
                      Kottamoll Plateau, Cuncolim Municipal Area,
                      Salcete Taluka, South Goa District, Goa - 403703
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-8 mx-auto w-full p-4 items-center text-left content-center">
                    <img src={Web} alt="Website" />
                    <div>
                      Website: www.nitgoa.ac.in
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-8 mx-auto w-full p-4 items-center text-left content-center">
                    <img src={Phone} alt="Phone" />
                    <div>
                      Phone: [0832] 2404200 (PA to Director)
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-8 mx-auto w-full p-4 items-center text-left content-center">
                    <img src={Fax} alt="Fax" />
                    <div>
                      Fax: [0832] 2404202
                    </div>
                  </div>
                </li>
              </ul>
          </div>
        </button>

        <div className="flex justify-center mt-[42px] ">
          <div className={`w-[45px] h-[45px] bg-${theme}th rounded-full`}>
            <img src={Twitter} className="p-3"/>
          </div>
          <div className={`w-[45px] h-[45px] ml-[25px] bg-${theme}th rounded-full`}>
            <img src={LinkedIn} className="p-3"/>
          </div>
          <div className={`w-[45px] h-[45px] ml-[25px] bg-${theme}th rounded-full`}>
            <img src={Insta} className="p-2"/>
          </div>
        </div>

        {/* visit counter */}
        <div className={`flex justify-center items-center w-[150px] bg-${theme}th h-[30px] rounded-lg	mx-auto mb-11 text-white text-sm mt-[22px]`}>
          {t("visit")} : <span id="counter">80</span>
        </div>

        {/* line */}
        <div className="border-[0.2px] border-white mx-4"></div>

        {/* copywrite */}
        <div className="text-[10px]">
          <div className={`flex text-${theme}txtth  justify-around px-7 pt-5`}>
            <p>© 2024 NIT GOA - ALL RIGHTS RESERVED </p>
            <p>|</p>
            <p>REDESIGNED BY 21CVE1034</p>
          </div>
          <div className={`flex text-${theme}txtth justify-around p-4`}>
            <p className="">TERMS & CONDITIONS</p>
            <p className="">|</p>
            <p className="">PRIVACY POLICY</p>
            <p className="">|</p>
            <p className="">HYPERLINKING POLICY</p>
            <p className="">|</p>
            <p className="">COPYRIGHT</p>
          </div>
        </div>

        <div className="border-2 border-white rounded-lg w-24	my-2 flex justify-center m-auto text-redth  text-greenth  text-darkth  text-defaultth text-pinkth text-darkbg bg-darkbg text-darktxt text-defaulttxt text-redtxt text-pinktxt text-greentxt bg-defaulttxtbg bg-redtxtbg bg-greentxtbg bg-pinktxtbg bg-darktxtbg text-defaulttxtth text-redtxtth text-greentxtth text-pinktxtth text-darktxtth bg-defaultbg bg-greenbg bg-pinkbg bg-redbg bg-darkbg">
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
