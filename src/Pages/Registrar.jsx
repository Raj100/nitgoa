import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import registrar_img from '../assets/registrar.jpeg';

const Registrar = () => {
    return (
        <>
        <Navbar/>
        <div className='font-dosis'>
            <div>
                <div className="image mx-auto w-full rounded-full">
                    <img src={registrar_img} className='rounded-full' alt="Director" />
                </div>
                <div className="name text-2xl font-bold">
                    <h2>Dr. Shashidhar K. Kudari</h2>
                </div>
            </div>
            <div className="pos text-lg font-bold">
                <h4>Registrar, NIT Goa</h4>
            </div>
            <div className="mx-auto w-full text-center my-6 text-sm font-bold">
                <h5> Phone : +91-0832-2404200  |  E-mail : registrar@nitgoa.ac.in </h5>
            </div>
            <div className="p-8 text-xx text-center">
                Dr. Shashidhar K. Kudari obtained his B.E (Mechanical Engineering) degree from Karnataka University, Dharwad. He received M. Tech. (Machine Design) and Ph.D. degrees from the Indian Institute of Technology, Kharagpur. He has 34 years of Teaching / Research and Administration experience.
                He has 55 research publications to his credit; five research scholars obtained Ph.D. degrees under his supervision. His research area includes stress analysis, elastic-plastic fracture, mixed mode fracture and fatigue analysis of engineering materials. He is the adaptation author of book Mechanical Vibrations, by S. G Kelly, Published by Schaum’s Outline and Tata Mc Graw Hill.
                Dr. Kudari joined as the Registrar of NIT Goa in the month of February 2021..
            </div>
            <Footer/>
        </div>
        </>
    );
}



export default Registrar;
