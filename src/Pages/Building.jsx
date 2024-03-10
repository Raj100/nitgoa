import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { AppContext } from "../Components/AppContext";
import { useContext } from "react";

const Building = () => {
    const { theme } = useContext(AppContext);
    return (
      <>
      <Navbar/>
      <div className="page font-dosis">
        <div className="cont mt-5">
          <h2 className="text-xl font-bold">Building and Works Committee</h2>
          <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
          <div className="tab">
            <table>
              <tbody>
                <tr>
                  <th>S.no</th>
                  <th>NIT Statute Section: 12</th>
                  <th>Name And Adresss</th>
                  <th>Designation</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Section (i)</td>
                  <td>Prof. O. R. Jaiswal</td>
                  <td>Director, Ex-officio  Chairman</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Section (ii)</td>
                  <td>Ms. Veena Dunga  Deputy Secretary, MOE</td>
                  <td>Deputy Secretary, MoE dealing with NIT Member</td>
                </tr>
                <tr>
                  <td >3</td>
                  <td >(ii)</td>
                  <td>Sri. Anilkumar Director, IFD, MoE</td>
                  <td >
                  Director, MoE, dealing with Finance Member
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td > (iii) </td>
                  <td>Prof. R.K. Tripathi, Professor Dept. of Civil Engineering & Dean (P&D), NIT Raipur</td>
                  <td>
                  Nominee of BoG Member
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td > (iv) </td>
                  <td>	Dr. Shashidhar K. Kudari</td>
                  <td>
                  Registrar, Ex-officio  Member Secretary
                  </td>
                  
                </tr>
                <tr>
                    <td>6</td>
                  <td>(v)</td>
                  <td> 	Dr. Velavan Kathirvelu </td>
                  <td>	Dean (P&D) Member 
                  </td>
                 
                </tr>
                <tr>
                  <td rowSpan={2}>7</td>
                  <td rowSpan={2} >(vi)</td>
                  <td>Prof. Krishna Kant Pathak Professor Dept. of Civil Engineering IIT BHU </td>
                  <td rowSpan={2}>  One Expert each from Civil & Electrical wing of Central or State or any autonomous body. Members.</td>
                  
                </tr>
                <tr>
                    <td>Shri A.K Jain Former DDG (Works), CPWD Delhi</td>
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
  
  export default Building;
  