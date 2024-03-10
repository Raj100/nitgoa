import "./bod.css";



const Finanace = () => {
    return (
      <div className="page">
        <div className="cont">
          <h2>FINANCE COMMITTEE (FC) of NIT Goa</h2>
          <div className="tab">
            <table>
              <tbody>
                <tr>
                  <th>S.no</th>
                  <th>NIT Statute Section: 10</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Position</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Section 10(i)</td>
                  <td>Prof. O. R. Jaiswal</td>
                  <td>Director, In charge Chairman</td>
                  <td>	Chairperson BoG, ex-officio Chairman</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Section 10(ii)</td>
                  <td> Prof. O. R. Jaiswal </td>
                  <td>Director, National Institute of Technology Goa</td>
                  <td>Director, Ex-Officio  Member </td>
                </tr>
                <tr>
                  <td >3</td>
                  <td rowSpan={2}>Section 10(ii)</td>
                  <td>Mrs. Saumya Gupta</td>
                  <td >
                  Addnl Secretary/Jt. Secretary (Technical Education), MHRD, Govt. of  India
                  </td>
                  <td rowSpan={2}>Jt. Secretary Dealing with NIT or his nominee and Finance advisor  (MoE) or his nominee</td>
                </tr>
                <tr>
                  <td>4</td>
                  {/* <td >Section 14(d)</td> */}
                  <td>Sh. Sanjog Kapoor</td>
                  <td>
                  Financial Advisor, Dept of Higher Education, MHRD, Govt. of India
                  </td>
                  {/* <td>External Member</td> */}
                </tr>
                <tr>
                  <td>5</td>
                  <td rowSpan={2}> Section 10(iv) </td>
                  <td>Dr. Suresh Mikkili, </td>
                  <td>
                  Associate Professor, Department of Electrical and Electronics Engineering
                  </td>
                  <td rowSpan={2}>Two persons nominated by the Board.</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td> -- </td>
                  <td> ---
                  </td>
                  {/* <td>External Member</td> */}
                </tr>
                <tr>
                  <td>7</td>
                  <td >Section 10(v)</td>
                  <td>Dr. Shashidhar K. Kudari </td>
                  <td>   Registrar, NIT Goa </td>
                  <td >Member  Secretary</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default Finanace;
  