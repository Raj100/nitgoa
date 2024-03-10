import "./bod.css";
import { useContext } from "react";
import { AppContext } from "../Components/AppContext";
import Line from "../assets/Line.svg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Deans = () => {
    const {theme}=useContext(AppContext);
    return (
      <>
      <Navbar/>
      <div className="page mt-5 font-dosis">
        <div className="cont">
          <h1 className='text-center text-2xl font-bold'>Deans</h1>
          <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
          <div className="tab">
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Roles</th>
                  <th>Email</th>
                  <th>Phone No</th>
                </tr>
                <tr>
                  <td>Dr. C. Vyjayanthi
Associate Professor of EEE</td>
                  <td>Academics</td>
                  <td>dean.acad@nitgoa.ac.in</td>
                  <td>0832-2404204</td>
                </tr>
                <tr>
                  <td>Dr. Damodar Reddy Edla
Associate Professor of CSE</td>
                  <td>Students Welfare</td>
                  <td>dean.sw@nitgoa.ac.in</td>
                  <td>0832-2404216</td>
                </tr>
                <tr>
                  <td >Dr. Amol D Rahulkar
Associate Professor of EEE</td>
                  <td>Faculty Welfare</td>
                  <td>dean.fw@nitgoa.ac.in</td>
                  <td > --- 
                  </td>
                </tr>
                <tr>
                  <td>Dr. Chirag Modi
Associate Professor of CSE</td>
                  <td>Research & Consultancy</td>
                  <td>dean.rc@nitgoa.ac.in
                  </td>
                  <td>0832-2404201</td>
                </tr>
                <tr>
                  <td>Dr. Velavan Kathirvelu
Associate Professor of Applied Sciences</td>
                  <td > Planning & Development</td>
                  <td>dean.pd@nitgoa.ac.in </td>
                  <td> --- 
                  </td>
                </tr>
                <tr>
                  <td>Dr. Anirban Chatterjee
Associate Professor of ECE</td>
                  <td> Institutional Relations & Alumni Affairs</td>
                  <td> dean.iraa@nitgoa.ac.in
                  </td>
                  <td>0832-2404220</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="cont">
        <h1 className='text-center text-2xl font-bold'>Associate Deans</h1>
        <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
          <div className="tab">
            <table className="text-xl">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Roles</th>
                  <th>Email</th>
                  <th>Phone No</th>
                </tr>
                <tr>
                  <td>Dr. Shivnarayan Patidar
Assistant Professor of ECE</td>
                  <td>Academics</td>
                  <td>asd.acad@nitgoa.ac.in</td>
                  <td> -- </td>
                </tr>
                <tr>
                  <td>Dr. S. Mini
Associate Professor of CSE</td>
                  <td>Students Welfare</td>
                  <td>asd.sw@nitgoa.ac.in</td>
                  <td> --- </td>
                </tr>
                <tr>
                  <td >Dr. Prasenjit Dey
Assistant Professor of Mechanical</td>
                  <td>Faculty Welfare</td>
                  <td>dean.fw@nitgoa.ac.in</td>
                  <td > --- 
                  </td>
                </tr>
                <tr>
                  <td>Dr. Lalat Indu Giri
Assistant Professor of ECE</td>
                  <td>Research & Consultancy</td>
                  <td>dean.rc@nitgoa.ac.in
                  </td>
                  <td>0832-2404213</td>
                </tr>
                <tr>
                  <td>Dr. Harikumar
Assistant Professor of Civil</td>
                  <td > Planning & Development</td>
                  <td>dean.pd@nitgoa.ac.in </td>
                  <td> --- 
                  </td>
                </tr>
                <tr>
                  <td>Dr. L. Shangerganesh
Assistant Professor of Applied Sciences</td>
                  <td> Institutional Relations & Alumni Affairs</td>
                  <td> dean.iraa@nitgoa.ac.in
                  </td>
                  <td> --- </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    
    );
  };
  
  export default Deans;
  