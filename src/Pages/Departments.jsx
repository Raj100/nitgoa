import React, { useContext } from "react";
import Line from "../assets/Line.svg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AppContext } from "../Components/AppContext";
const Departments = () => {
    const {theme}=useContext(AppContext);
  return (
    <>
      <Navbar></Navbar>
      <div className={`font-dosis bg-${theme}bg text-${theme}txt`}>
        {/* <div className="bg-white text-xl font-semibold mt-[31px] mb-12 flex mx-4">
            <p>Select Your Departments</p>
            <img src="" alt="" />
        </div> */}

        <h1 className="text-center text-2xl font-bold mt-2">
        Departments
        </h1>
        <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>

        <div className="grid m-5 gap-[31px]">
          <div className="rounded-2xl border-2 h-52 border-[#555] relative ">
            <div className="border-[0.5px] border-[#4C4C4C] w-full mt-[65px]"></div>
            <div className={`bg-${theme}th w-[75px] h-[75px] rounded-full text-2xl text-white flex justify-center items-center left-[42px] absolute top-[27px]`}><p>CSE</p></div>
            <div className="mt-[58px] ml-[42px] text-2xl font-bold">Computer Science & Enginnering</div>
          </div>

          <div className="rounded-2xl border-2 h-52 border-[#555] relative">
            <div className="border-[0.5px] border-[#4C4C4C] w-full mt-[65px]"></div>
            <div className={`bg-${theme}th w-[75px] h-[75px] rounded-full text-2xl text-white flex justify-center items-center left-[42px] absolute top-[27px]`}><p>CVE</p></div>
            <div className="mt-[58px] ml-[42px] text-2xl font-bold">Civil Engineering</div>
          </div>

          <div className="rounded-2xl border-2 h-52 border-[#555] relative">
            <div className="border-[0.5px] border-[#4C4C4C] w-full mt-[65px]"></div>
            <div className={`bg-${theme}th w-[75px] h-[75px] rounded-full text-2xl text-white flex justify-center items-center left-[42px] absolute top-[27px]`}><p>MCE</p></div>
            <div className="mt-[58px] ml-[42px] text-2xl font-bold">Mechanical Engineering</div>
          </div>

          <div className="rounded-2xl border-2 h-52 border-[#555] relative">
            <div className="border-[0.5px] border-[#4C4C4C] w-full mt-[65px]"></div>
            <div className={`bg-${theme}th w-[75px] h-[75px] rounded-full text-2xl text-white flex justify-center items-center left-[42px] absolute top-[27px]`}><p>EEE</p></div>
            <div className="mt-[58px] ml-[42px] text-2xl font-bold">Electrical and Electronics Engineering</div>
          </div>

          <div className="rounded-2xl border-2 h-52 border-[#555] relative">
            <div className="border-[0.5px] border-[#4C4C4C] w-full mt-[65px]"></div>
            <div className={`bg-${theme}th w-[75px] h-[75px] rounded-full text-2xl text-white flex justify-center items-center left-[42px] absolute top-[27px]`}><p>ECE</p></div>
            <div className="mt-[58px] ml-[42px] text-2xl font-bold">Electronics and Communication Engineering</div>
          </div>

          <div className="rounded-2xl border-2 h-52 border-[#555] relative">
            <div className="border-[0.5px] border-[#4C4C4C] w-full mt-[65px]"></div>
            <div className={`bg-${theme}th w-[75px] h-[75px] rounded-full text-2xl text-white flex justify-center items-center left-[42px] absolute top-[27px]`}><p>HS</p></div>
            <div className="mt-[58px] ml-[42px] text-2xl font-bold">Humanities and Social Sciences</div>
          </div>

          <div className="rounded-2xl border-2 h-52 border-[#555] relative">
            <div className="border-[0.5px] border-[#4C4C4C] w-full mt-[65px]"></div>
            <div className={`bg-${theme}th w-[75px] h-[75px] rounded-full text-2xl text-white flex justify-center items-center left-[42px] absolute top-[27px]`}><p>AS</p></div>
            <div className="mt-[58px] ml-[42px] text-2xl font-bold">Applied Sciences</div>
          </div>

        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Departments;
