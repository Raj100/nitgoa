import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Line from "../assets/Line.svg"
import LocationMarker from "../assets/locationMarker.png"
import Line17 from "../assets/Line17.svg"
import Back from "../assets/Back.png"
import { AppContext } from '../Components/AppContext'
const About = () => {
    const {theme} =useContext(AppContext);
  return (
    <div>
      <Navbar></Navbar>
      <div className={`px-9 py-3 font-dosis bg-${theme}bg text-${theme}txt`}>

        <div className='mb-8'>
        <div className='mb-10'>
            <h1 className='text-center text-2xl font-bold'>History</h1>
            <img className='mx-auto mt-3' src={Line} alt="Line" />
        </div>
        <p className='text-[13px]'>NIT Goa was established in 2010 as one of the 31 NITs in India under the NIT Act 2007 (Amended 2012). It was mentored by NIT Karnataka, Surathkal and received full funding support from the Ministry of Human Resource Development, Government of India. It admitted its first batch of students in 2010-11 and started academic activities in a temporary campus at Goa Engineering College, Farmagudi. It faced some challenges in acquiring land for its permanent campus, but finally got 300 acres of land at Cuncolim in 2013. It is expected to move to its permanent campus by January 2024.</p>
        </div>

        <div className='mb-8'>
        <div className='mb-10'>
            <h1 className='text-center text-2xl font-bold'>Campus Administration</h1>
            <img className='mx-auto mt-3' src={Line} alt="Line" />
        </div>
        <p className='text-[13px]'>NIT Goa is governed by a Board of Governors, chaired by Dr. V. K. Aatre, a former scientific adviser to the Defence Minister of India. The Director of the institute is Prof. O. R. Jaiswal, who is assisted by four Deans and eight Heads of Departments. The institute also has a Senate, a Finance Committee and a Building & Works Committee to oversee academic, financial and infrastructural matters respectively. The Registrar of the institute is Mr. S. K. Das, who is responsible for the administration and management of the institute.</p>
        </div>

        <div className='mb-8'>
        <div className='mb-5'>
            <h1 className='text-center text-2xl font-bold'>Achievements</h1>
            <img className='mx-auto mt-3' src={Line} alt="Line" />
        </div>
        <p className='text-[13px]'>NIT Goa offers undergraduate, postgraduate and doctoral programs in five engineering disciplines: Computer Science and Engineering, Electrical and Electronics Engineering, Electronics and Communication Engineering, Civil Engineering and Mechanical Engineering. It also offers PhD programs in Physics, Chemistry, Mathematics, Economics and English. The institute has a faculty strength of 56 and a student strength of about 1000. The institute has been ranked among the top engineering colleges in India by various agencies such as NIRF, Outlook, The Week, etc. The institute has also received several research grants and awards from various funding agencies such as DST, DRDO, ISRO, etc. The institute has also established collaborations with several national and international institutions and industries for academic and research purposes. Some of the notable achievements of the institute are:</p>
<ul className='list-disc pl-4 text-[13px]'>
   <li>Developing a low-cost ventilator prototype for COVID-19 patients in collaboration with BITS Pilani, Goa.</li>
   <li> Developing a smart helmet for motorcycle riders that can detect drowsiness and alert the rider.</li>
   <li>Developing a solar-powered water purifier that can produce potable water from seawater.</li>
   <li>Winning the first prize in the Smart India Hackathon 2019 for developing a solution for detecting fake news using machine learning.</li>
   <li>Winning the second prize in the e-Yantra Robotics Competition 2018 for developing a robot that can perform agricultural tasks</li>
  </ul>
        </div>

        <div className='mb-8'>
        <div className='mb-5 mt-3'>
            <h1 className='text-center text-2xl font-bold'>How To Reach Us</h1>
            <img className='mx-auto' src={Line} alt="Line" />
        </div>
        <p className='text-[13px]'>NIT Goa Campus is located at Farmagudi, Ponda, Goa.Farmagudi is located on a plateau 3 km from the main Ponda City on the way towards Panaji. Ponda is a city and a municipal council in North Goa district in the Indian state of Goa. It is located in the central part of Goa. Ponda city lies about 28 km south-east of Panaji and 17 km north-east of Margao and is also the capital of Ponda Taluka. Ponda is well connected by road to the Panaji (Capital of Goa) and main railway junction of Margao.</p>
        </div>


        <div className='mb-8 flex'>
        <div className='mr-8'>
        <div className='mb-5'>
            <h1 className='text-center text-2xl font-bold'>Air</h1>
            <img className='mx-auto' src={Line17} alt="Line" />
        </div>
        <p className='text-[13px]'>Goa’s sole airport, the ‘Dabolim Airport’ in Vasco, caters to domestic and international airlines that stop en route to other Indian destinations. It is at a distance of around 30 Km (45 Minute ride) from the institute.</p>
        </div>
        <div>
        <div className=''>
        <div className='mb-5'>
            <h1 className='text-center text-2xl font-bold'>Rail</h1>
            <img className='mx-auto' src={Line17} alt="Line" />
        </div>
        <p className='text-[13px] font-normal'>Goa has two rail lines-one run by the South Western Railway and the other by the Konkan Railway. Closest major railway station is ‘Madgaon Railway Station’ which is around 20 Km (30 Minute ride) from the institute.</p>
        </div>
        </div>

        </div>

        <div className='flex'>
            <img className='mr-8' src={LocationMarker} alt="LocationMarker" />
            <a href="https://maps.app.goo.gl/9NsCYG43qGoUwqHv6" target='_blank' className='flex w-full grow' >
            <div className={`bg-${theme}th text-white flex py-[14px] px-[13px] rounded-[10px] grow items-center relative`}>
                <p>NIT GOA Location</p>
                <img className='w-[23px] h-[23px] absolute right-8' src={Back} alt="Back" />
                <img className='w-[33px] h-[33px] absolute right-4' src={Back} alt="Back" />
                <img className='w-[41px] h-[41px] absolute right-0' src={Back} alt="Back" />
            </div>
            </a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default About
