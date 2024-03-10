import "./bod.css";

const Bod = () => {
  return (
    <div className="page">
      <div className="cont">
        <h2>Board of Governors(BoG)</h2>
        <div className="tab">
          <table>
            <tbody>
              <tr>
                <th>S.no</th>
                <th>NIT Act</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Position</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Section 11(a)</td>
                <td>Prof. O. R. Jaiswal</td>
                <td>In charge Chairman (Statute Sec.17 (15))
Director, National Institute of Technology Goa</td>
                <td>Chaiperson</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sec.11(b)</td>
                <td> Prof. O. R. Jaiswal </td>
                <td>Director, National Institute of Technology Goa</td>
                <td>Director, Ex-Officio  Member</td>
              </tr>
              <tr>
                <td >3</td>
                <td rowSpan={2}>Section 11(c)</td>
                <td>Mrs. Saumya Gupta</td>
                <td >
                Addnl Secretary/Jt. Secretary (Technical Education), MHRD, Govt. of  India
                </td>
                <td rowSpan={2}>	
Two persons not below the rank of JS to the Govt. of India to be nominated by the Central Govt. from amongst persons dealing with tech. edu. And finance</td>
              </tr>
              <tr>
                <td>4</td>
                {/* <td >Section 14(d)</td> */}
                <td>Sh. Sanjog Kapoo</td>
                <td>
                Financial Advisor, Dept of Higher Education, MHRD, Govt. of India
                </td>
                {/* <td>External Member</td> */}
              </tr>
              <tr>
                <td>5</td>
                <td rowSpan={2}> Section 11(d) </td>
                <td>Dr. Venkatesh Ganesh  Prabhu Desai </td>
                <td>
                Chairman, Chandranath Education Society, Assolda, Quepem, Goa
                </td>
                <td rowSpan={2}>Two persons nominated by the Govt. of the States in which the Institute is situated.</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Dr.Mahesh Dhavalikar</td>
                <td>
                Professor, Department of Mechanical Engineering, Goa Engineering College, Farmagudi, Ponda, Goa
                </td>
                {/* <td>External Member</td> */}
              </tr>
              <tr>
                <td>7</td>
                <td rowSpan={2}>Section 11(e)</td>
                <td>Vacant</td>
                <td> --  </td>
                <td rowSpan={2}>Two persons at least one whom shall be a woman having special knowledge or practical experience in respect of education, engineering or science to be nominated by the council</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Vacant</td>
                {/* <td> --</td> */}
                <td> -- </td>
                {/* <td>Member </td> */}
              </tr>
              <tr>
                <td>9</td>
                <td rowSpan={2}> Section 11(f)</td>
                <td>Dr. Suresh Mikkili</td>
                <td>Associate Professor, Department of Electrical and Electronics Engineering </td>
                <td rowSpan={2}>One Professor and one Assistant Professor or a Lecturer nominated by Senate</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Dr. Lalat Indu Giri</td>
                <td>Assistant Professor, Department of Electronics and Communication Engineering </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Section 11(g)</td>
                <td>Prof. B. G. Fernandes</td>
                <td>	Professor & Head of Department of Electrical Engineering, IIT Bombay</td>
                <td>Director of IIT in whose zone the Institute is located, or his nominee not below the rank of Professor</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Section 18(2)</td>
                <td>Dr. Shashidhar K. Kudari</td>
                <td>Registrar, NIT Goa</td>
                <td>Member  Secretary</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bod;
