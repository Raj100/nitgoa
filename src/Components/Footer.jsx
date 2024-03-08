import React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContext";
const Footer = () => {
  const {theme}=useContext(AppContext);

  return (
    <>
      <footer className={`flex flex-col bg-defaultbg2 justify-center font-dosis`}>
        <a className={`bg-${theme}th py-[11px] px-[10px] text-center text-[13px] text-white border-b-[0.2px] border-black`}>
          QUICK LINKS
        </a>
        <a className={`bg-${theme}th py-[11px] px-[10px] text-center text-[13px] text-white border-b-[0.2px] border-black`}>
          INFORMATION
        </a>
        <a className={`bg-${theme}th py-[11px] px-[10px] text-center text-[13px] text-white border-b-[0.2px] border-black`}>
          NATIONAL PORTALS
        </a>
        <a className={`bg-${theme}th py-[11px] px-[10px] text-center text-[13px] text-white border-b-[0.2px] border-black`}>
          CONTACT US
        </a>

        <div className="flex justify-center mt-[42px] ">
          <div className={`w-[45px] h-[45px] bg-${theme}th rounded-full`}></div>
          <div className={`w-[45px] h-[45px] ml-[25px] bg-${theme}th rounded-full`}></div>
          <div className={`w-[45px] h-[45px] ml-[25px] bg-${theme}th rounded-full`}></div>
        </div>

        {/* visit counter */}
        <div className={`flex justify-center items-center w-[150px] bg-${theme}th h-[30px] rounded-lg	mx-auto mb-11 text-white text-sm mt-[22px]`}>
          VISIT COUNT : 200000
          {/* <a href='https://dissertation-writingservice.com/'></a> <script type='text/javascript' src='https://www.freevisitorcounters.com/auth.php?id=aa70cb3c0c19fb231f37a07611d90ec2588a2bda'></script>
<script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/1153186/t/3"></script> */}
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
