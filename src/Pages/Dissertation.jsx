import { AppContext } from "../Components/AppContext";
import { useContext } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Dissertation = () =>{
    const {theme} = useContext(AppContext);
    return (
        <>
        <Navbar/>
        <div class='page mt-5 font-dosis'>
            <h2 className="text-xl font-bold text-center">U.G Rules & Regulations</h2>
           
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
             
            <div className="cont my-2 text-center">
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
            <h2 className="text-xl font-bold text-center">U.G Curriculum</h2>
           
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
             
            <div className="cont my-2 text-center">
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
        <Footer/>
        </>
    )
}

export default Dissertation;