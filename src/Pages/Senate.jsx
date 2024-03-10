import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import './senate.css';
import { AppContext } from '../Components/AppContext';
import { useContext } from 'react';

const Senate = () => {
  const {theme} = useContext(AppContext);
    return(
 <div className="page font-dosis">
  <Navbar/>
  <div className="mt-5">
    <h2 className='text-xl font-bold text-center'>Senate Committee</h2>
    <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
    <div className="tab">
      <table>
        <tbody><tr>
            <th>S.no</th>
            <th>NIT Act</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Position</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Section 14(a)</td>
            <td>Prof. O. R. Jaiswal</td>
            <td>Director, NITGoa</td>
            <td>Chairman Senate</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Sec.14(b)</td>
            <td> -- </td>
            <td>Deputy Director</td>
            <td>Member</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Section 14(c)</td>
            <td>Prof. O. R. Jaiswal</td>
            <td>The Professors appointed or recognized as such
              by the institute for the purpose of imaparting instructions in the institute</td>
            <td>Member</td>
          </tr>
          <tr>
            <td>4</td>
            <td rowSpan={3}>Section 14(d)</td>
            <td>Prof. N. C. Shivaprakash</td>
            <td>Professor, Department of Instrumentation, Indian Institute of Sciences, Bengaluru</td>
            <td>External Member</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Prof. Vijay H. Desai </td>
            <td>Professor, Department of Mechanical Engineering, NIT Karnataka, Surathkal</td>
            <td>External Member</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Prof.Geetha Bakilapadavu</td>
            <td>Professor, Department of Humanities &amp; Social Sciences,BITS Pilani, K.K. Birla Goa Campus
            </td>
            <td>External Member</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Section 18(2)</td>
            <td>Dr. Shashidhar K. Kudar</td>
            <td>Registrar</td>
            <td>Member Secretary</td>
          </tr>
          <tr>
            <td>8</td>
            <td rowSpan={2}>As per 20th BoG resolution of Item number A.3</td>
            <td> --</td>
            <td>All Deans</td>
            <td>Member </td>
          </tr>
          <tr>
            <td>9</td>
            <td> --</td>
            <td>All HoDs</td>
            <td>Member </td>
          </tr>
        </tbody></table>
    </div>
    <div className="pop-up">
      <hr className="top-hr" />
      <h4>Minutes of Senate Meeting</h4>
      <hr className="low-hr" />
      <div className="list">
        <ul>
          <li><a href>Senate -1</a></li>
          <li><a href>Senate -2</a></li>
          <li><a href>Senate -3</a></li>
          <li><a href>Senate -4</a></li>
          <li><a href>Senate -5</a></li>
          <li><a href>Senate -6</a></li>
          <li><a href>Senate -7</a></li>
          <li><a href>Senate -8</a></li>
          <li><a href>Senate -9</a></li>
          <li><a href>Senate -10</a></li>
          <li><a href>Senate -11</a></li>
          <li><a href>Senate -12</a></li>
          <li><a href>Senate -13</a></li>
          <li><a href>Senate -14</a></li>
          <li><a href>Senate -15</a></li>
          <li><a href>Senate -16</a></li>
          <li><a href>Senate -17</a></li>
          <li><a href>Senate -18</a></li>
          <li><a href>Senate -19</a></li>
          <li><a href>Senate -20</a></li>
          <li><a href>Senate -21</a></li>
          <li><a href>Senate -22</a></li>
        </ul>
      </div>
    </div>
  </div>
  <Footer/>
</div>


    );
}

export default Senate;