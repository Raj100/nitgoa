import React from "react";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import { useTranslation } from "react-i18next";
import Twitter from '../assets/twitter.png';
import LinkedIn from '../assets/linkedin.png';
import Insta from '../assets/insta.png';
const Footer = () => {
  const {t} = useTranslation()
  const {theme}=useContext(AppContext);

  const [totalVisitors, setTotalVisitors] = useState(0);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visited");
    if (!hasVisited) {
      incrementVisitorCount();

      sessionStorage.setItem("visited", "true");
    }

    fetchVisitorCount();
  }, []);

  const fetchVisitorCount = () => {
    fetch("http://localhost:3002/count")
      .then((response) => response.json())
      .then((data) => {
        setTotalVisitors(data.totalVisitors);
      })
      .catch((error) => {
        console.error("Error fetching visitor count:", error);
      });
  };

  const incrementVisitorCount = () => {
    fetch("http://localhost:3002/count", { method: "POST" })
      .then(() => {
        fetchVisitorCount();
      })
      .catch((error) => {
        console.error("Error incrementing visitor count:", error);
      });
  };
  return (
    <>
      <footer className={`flex flex-col bg-defaultbg2 justify-center font-dosis`}>
        <a className={`bg-${theme}th py-[11px] px-[10px] text-center text-[13px] text-white border-b-[0.2px] border-black`}>
          {t("quicklink")}
        </a>
        <a className={`bg-${theme}th py-[11px] px-[10px] text-center text-[13px] text-white border-b-[0.2px] border-black`}>
          {t("info")}
        </a>
        <a className={`bg-${theme}th py-[11px] px-[10px] text-center text-[13px] text-white border-b-[0.2px] border-black`}>
          {t("natpor")}
        </a>
        <a className={`bg-${theme}th py-[11px] px-[10px] text-center text-[13px] text-white border-b-[0.2px] border-black`}>
          {t("contact_us")}
        </a>

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
          {t("visit")} : <span id="counter">{totalVisitors}</span>
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
