import './report.css'
import line from '../images/Line.png';


const Report = () =>{
    return (
        <div class='page'>
            <h2>Annual Reports & Annual Accounts</h2>
            {/* <hr class='line'/>
             */}
             <div className="line">
             <img src={line} alt="Line image" />
             </div>
             
            <div className="cont">
                <div className="box">
                    <a href="#">Annual Report and Annual Accounts of 2010-11</a>
                </div>
                <div className="box">
                    <a href="#">Annual Report and Annual Accounts of 2010-11</a>
                </div>
                <div className="box">
                    <a href="#">Annual Report and Annual Accounts of 2010-11</a>
                </div>
                <div className="box">
                    <a href="#">Annual Report and Annual Accounts of 2010-11</a>
                </div>
            </div>

        </div>
    )
}

export default Report;