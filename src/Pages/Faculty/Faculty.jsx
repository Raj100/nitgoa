import "./faculty.css";
import facpic from "../../assets/facepic.png";
import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { AppContext } from "../../Components/AppContext";
import { useState, useContext } from "react";


const Faculty = () => {
  const { theme } = useContext(AppContext);
  const [showScrollButton, setShowScrollButton] = useState(false);
    // Create references for each section
    const cseRef = useRef(null);
    const eceRef = useRef(null);
    const eeeRef = useRef(null);
    const mceRef = useRef(null);
    const cveRef = useRef(null);
    const apRef = useRef(null);
    const huRef = useRef(null);
    
    // Add more refs as needed

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) { // Adjust this value based on when you want the button to appear
          setShowScrollButton(true);
        } else {
          setShowScrollButton(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const select = document.getElementById("department");
  
      const scroll = () => {
        const value = select.value;
        // Use switch statement instead of multiple if statements
        switch (value) {
          case "cse":
            cseRef.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
            break;
          case "ece":
            eceRef.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
            break;
          case "eee":
            eeeRef.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
            break;
          case "mce":
            mceRef.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
            break;
          case "cve":
            cveRef.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
            break;
          case "ap":
            apRef.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
            break;
          case "hu":
            huRef.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
            break;
          // Add more cases as needed
          default:
            break;
        }
      };
  
      select.addEventListener("change", scroll);
  
      return () => {
        select.removeEventListener("change", scroll);
      };
    },);
  return (
    <>
    <Navbar/>
    <div class="mx-auto w-full mt-5 font-dosis">
      <div class="select sticky top-0">
        {/* <label class="drop" for="department">
          Select a department:
        </label> */}
        
        <select class="down" id="department" name="department" className="mx-auto w-80 p-2 bg-gray-50 outline-none">
          <option value="">Select your Department</option>
          <option value="cse">CSE</option>
          <option value="ece">ECE</option>
          <option value="cve">CVE</option>
          <option value="mce">MCE</option>
          <option value="ap">AP</option>
          <option value="hu">HU</option>
          <option value="eee">EEE</option>
        </select>
      </div>
      <div className="dept my-2" id="CSE" ref={cseRef}>
        <h3 className="text-xl font-bold">Department of Computer Science and Engineering</h3>
        <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5 my-4`}></div>
        <div className="flex flex-wrap flex-1 gap-4 w-full pl-3">
          
          <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>

          <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>
          
          <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>

          <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="dept my-2" id="ECE" ref={eceRef}>
      <h3 className="text-xl font-bold">Department of Electronics and Communication Engineering</h3>
      <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5 my-4`}></div>
        <div className="flex flex-wrap flex-1 gap-4 w-full pl-3">

          <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>

          <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>

          <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>

        </div>
      </div>
      <div className="dept my-2" id="EEE" ref={eeeRef}>
      <h3 className="text-xl font-bold">Department of Electrical and Electronics Engineering</h3>
      <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5 my-4`}></div>
        <div className="flex flex-wrap flex-1 gap-4 w-full pl-3">
        <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="dept my-2" id="MCE" ref={mceRef}>
      <h3 className="text-xl font-bold">Department of Mechanical Engineering</h3>
      <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5 my-4`}></div>
        <div className="flex flex-wrap flex-1 gap-4 w-full pl-3">
        <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="dept my-2" ref={cveRef}>
      <h3 className="text-xl font-bold" id="CVE">Department of Civil Engineering</h3>
      <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5 my-4`}></div>
        <div className="flex flex-wrap flex-1 gap-4 w-full pl-3">
        <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>


      <div className="dept my-2" id="AP" ref={apRef}>
      <h3 className="text-xl font-bold">Department of Applied Sciences</h3>
      <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5 my-4`}></div>
        <div className="flex flex-wrap flex-1 gap-4 w-full pl-3">
        <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="dept my-2" id="HU" ref={huRef}>
      <h3 className="text-xl font-bold">Humanities and Social Sciences</h3>
      <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5 my-4`}></div>
        <div className="flex flex-wrap flex-1 gap-4 w-full pl-3">
        <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="card shadow-md shadow-gray-500/50 rounded-xl">
            <div className="bgc p-4 rounded-xl">
              <img src={facpic} alt="John Smith" className="card-img mx-auto " />
            </div>
            <div className="card-content px-2">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className={`foot bg-${theme}th rounded-br-xl rounded-bl-xl px-4`}>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {showScrollButton && (
      <button className="fixed bottom-10 right-10 rounded-full bg-white shadow-lg shadow-gray-500/50 p-2" onClick={scrollToTop}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      </button>
    )}

    <Footer/>
    </>
  );
};

export default Faculty;
