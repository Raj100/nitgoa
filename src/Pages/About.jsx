import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Line from "../assets/Line.svg"
import LocationMarker from "../assets/locationMarker.png"
import Line17 from "../assets/Line17.svg"
import Back from "../assets/Back.png"
import { AppContext } from '../Components/AppContext'
import { useTranslation } from'react-i18next'
const About = () => {
    const {theme} =useContext(AppContext);
    const {t} = useTranslation();
  return (
    <div>
      <Navbar></Navbar>
      <div className={`px-9 py-3 font-dosis bg-${theme}bg text-${theme}txt`}>

        <div className='mb-8'>
        <div className='mb-10'>
            <h1 className='text-center text-2xl font-bold'>{t("history")}</h1>
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
        </div>
        <p className='text-[13px]'>{t("history_content")}</p>
        </div>

        <div className='mb-8'>
        <div className='mb-10'>
            <h1 className='text-center text-2xl font-bold'>{t("campus_admin")}</h1>
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
        </div>
        <p className='text-[13px]'>{t("campus_admin_content")}</p>
        </div>

        <div className='mb-8'>
        <div className='mb-5'>
            <h1 className='text-center text-2xl font-bold'>{t("achievements")}</h1>
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
        </div>
        <p className='text-[13px]'>{t("achievements_content")}</p>
<ul className='list-disc pl-4 text-[13px]'>
   <li>{t("achievement_sub_1")}</li>
   <li>{t("achievement_sub_2")}</li>
   <li>{t("achievement_sub_3")}</li>
   <li>{t("achievement_sub_4")}</li>
   <li>{t("achievement_sub_5")}</li>
  </ul>
        </div>

        <div className='mb-8'>
        <div className='mb-5 mt-3'>
            <h1 className='text-center text-2xl font-bold'>{t("reach_us")}</h1>
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
        </div>
        <p className='text-[13px]'>{t("reach_us_content")}</p>
        </div>


        <div className='mb-8 flex'>
        <div className='mr-8'>
        <div className='mb-5'>
            <h1 className='text-center text-2xl font-bold'>{t("Air")}</h1>
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
        </div>
        <p className='text-[13px]'>{t("Air_content")}</p>
        </div>
        <div>
        <div className=''>
        <div className='mb-5'>
            <h1 className='text-center text-2xl font-bold'>{t("Rail")}</h1>
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
        </div>
        <p className='text-[13px] font-normal'>{t("Rail_content")}</p>
        </div>
        </div>

        </div>

        <div className='flex'>
            <img className='mr-8' src={LocationMarker} alt="LocationMarker" />
            <a href="https://maps.app.goo.gl/9NsCYG43qGoUwqHv6" target='_blank' className='flex w-full grow' >
            <div className={`bg-${theme}th text-white flex py-[14px] px-[13px] rounded-[10px] grow items-center relative`}>
                <p>{t("location")}</p>
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
