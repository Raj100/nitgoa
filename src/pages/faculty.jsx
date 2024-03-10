import "./faculty.css";
import facpic from "../images/Ellipse 10.png";
import React, { useRef, useEffect } from 'react';

const Faculty = () => {
    // Create references for each section
    const cseRef = useRef(null);
    const eceRef = useRef(null);
    const eeeRef = useRef(null);
    // Add more refs as needed
  
    useEffect(() => {
      const select = document.getElementById("department");
  
      const scroll = () => {
        const value = select.value;
        // Use switch statement instead of multiple if statements
        switch (value) {
          case "cse":
            cseRef.current.scrollIntoView({behaviour:'smooth'});
            break;
          case "ece":
            eceRef.current.scrollIntoView({behaviour:'smooth'});
            break;
          case "eee":
            eeeRef.current.scrollIntoView({behaviour:'smooth'});
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
    <div class="page">
      <div class="select">
        {/* <label class="drop" for="department">
          Select a department:
        </label> */}

        <select class="down" id="department" name="department" >
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
      <div className="dept" id="cse-section" ref={cseRef}>
        <h3>CSE</h3>
        <div className="cards">
          <div class="card">
            <div className="bgc">
              <img src={facpic} alt="John Smith" className="card-img" />
            </div>
            <div className="card-content">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className="foot">
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="card">
            <div className="bgc">
              <img src={facpic} alt="John Smith" className="card-img" />
            </div>
            <div className="card-content">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className="foot">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="dept" id="ece-section" ref={eceRef}>
        <h3>ECE</h3>
        <div className="cards">
          <div class="card">
            <div className="bgc">
              <img src={facpic} alt="John Smith" className="card-img" />
            </div>
            <div className="card-content">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className="foot">
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="card">
            <div className="bgc">
              <img src={facpic} alt="John Smith" className="card-img" />
            </div>
            <div className="card-content">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className="foot">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="dept" id="eee-section" ref={eeeRef}>
        <h3>EEE</h3>
        <div className="cards">
          <div class="card">
            <div className="bgc">
              <img src={facpic} alt="John Smith" className="card-img" />
            </div>
            <div className="card-content">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className="foot">
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="card">
            <div className="bgc">
              <img src={facpic} alt="John Smith" className="card-img" />
            </div>
            <div className="card-content">
              <h3 className="card-name">Dr. Damodar Reddy Edla</h3>
              <p className="card-title">
                Associate Professor, Department of Computer Science and
                Engineering
              </p>
              <div className="contact">
                <h4>dr.reddy@nitgoa.ac.in | 0832-2404216</h4>
              </div>
            </div>
            <div className="foot">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
