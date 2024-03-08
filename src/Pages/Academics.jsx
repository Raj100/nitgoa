import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Line from "../assets/Line.svg"
import Rectangle41 from "../assets/Rectangle41.png"
import { AppContext } from '../Components/AppContext'
const Academics = () => {
    const {theme}=useContext(AppContext);
  return (
    <div>
        <Navbar></Navbar>
        <div className={`font-dosis bg-${theme}bg pt-12 text-${theme}txt`}>
        <h1 className='text-center font-bold text-2xl'>Academic Calendar</h1>
        <img src={Line} alt="Line" className='mx-auto' />
        <div className='flex flex-wrap'>
            <div className='m-5'>
                <img src={Rectangle41} alt="Earphone" className='h-[200px]' />
                <div className={`h-20 bg-${theme}th text-white p-3 rounded-b-xl flex flex-col justify-between`}>
                    <div className='flex justify-between items-center'>
                    <p className='text-bold text-lg'>Even Semester</p>
                    <p className='text-xs text-normal'>2023 - 24</p>
                    </div>
                    <p className='text-[10px]'>B.Tech | M.Tech | Ph.D</p>
                </div>
            </div>

            <div className='m-5'>
                <img src={Rectangle41} alt="Earphone" />
                <div className={`h-20 bg-${theme}th text-white p-3 rounded-b-xl flex flex-col justify-between`}>
                    <div className='flex justify-between items-center'>
                    <p className='text-bold text-lg'>Even Semester</p>
                    <p className='text-xs text-normal'>2023 - 24</p>
                    </div>
                    <p className='text-[10px]'>B.Tech | M.Tech | Ph.D</p>
                </div>
            </div>

            <div className='m-5'>
                <img src={Rectangle41} alt="Earphone" />
                <div className={`h-20 bg-${theme}th text-white p-3 rounded-b-xl flex flex-col justify-between`}>
                    <div className='flex justify-between items-center'>
                    <p className='text-bold text-lg'>Even Semester</p>
                    <p className='text-xs text-normal'>2023 - 24</p>
                    </div>
                    <p className='text-[10px]'>B.Tech | M.Tech | Ph.D</p>
                </div>
            </div>

        </div>
        </div>
      <Footer></Footer>
    </div>
  )
}

export default Academics
