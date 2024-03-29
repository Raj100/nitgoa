import React, { useContext } from 'react'
import Line from "../assets/Line.svg"
import News from "../assets/News.png"
import DynamicLinks from "../assets/Dynamic Links.png"
import Noticeboard from "../assets/Noticeboard.png"
import Graphlogo from "../assets/Graph.svg"
import Synapselogo from "../assets/Doc.svg"
import Tweetlogo from "../assets/Tweet.svg"
import { AppContext } from './AppContext'

const Announcement = () => {
  const {theme}=useContext(AppContext);
  return (
    <div>

<div className={`bg-${theme}txtbg h-[211px] lg:h-[543px]`}>

    </div>

         <div className={`bg-${theme}bg pt-5 pb-5 text-${theme}txt`}>

<div className='border-[0.2px] m-5 border-[#9F9F9F]'></div>
<div className=' flex flex-col text-center justify-center'>
  <h1 className='font-dosis font-semibold	text-lg	'>Announcement</h1>
  <img className='mx-auto' src={Line} alt="Line" />
</div>


<div className='p-5'>

<div className="grid grid-cols-1  md:grid-cols-3 gap-5 ">

  <div className={`bg-${theme}txtbg w-full shadow-xl rounded-lg p-[10px]`}>
    <div className='w-full h-[242px]'>
    <div className='flex '>
      <img className='w-6' src={News} alt="News" />
      <h1> News and events</h1>
    </div>
    </div>
  </div>

  <div className={`bg-${theme}txtbg w-full shadow-xl rounded-lg p-[10px]`}>
  <div className='w-full h-[242px]'>
    <div className='flex'>
      <img className='w-6' src={DynamicLinks} alt="Quick Link" />
      <h1>  Quick Link</h1>
    </div>
    </div>
    <div>
      <ul>
        <map name=""></map>
      </ul>
    </div>
  </div>

  <div className={`bg-${theme}txtbg w-full shadow-xl rounded-lg p-[10px]`}>
  <div className='w-full h-[242px]'>
    <div className='flex'>
      <img className='w-6 !text-redth' src={Noticeboard} alt="Noticeboard" />
      <h1>  Notice Board</h1>
    </div>
    </div>
  </div>

</div>

</div>

<div className='border-[#9F9F9F] border-[0.2px] my-5 mx-4'></div>

<div className={`m-4 bg-${theme}txtbg border rounded-xl p-5`}>
  <h1 className='font-dosis font-extrabold	text-base'>🚨 Announcement</h1>
  <p className='text-xs	font-semibold'>All nine eligible B.Tech. programmes have been accredited by the NBAAll nine eligible B.Tech. programmes have been accredited by the NBAAll nine eligible B.Tech. programmes have been accredited by the NBAAll nine eligible B.Tech. programmes have been accredited by theAll nine eligible B.Tech. programmes have been accredited by the</p>
</div>

<div className='border-[#9F9F9F] border-[0.2px] my-5 mx-4 '></div>

<div className='grid grid-cols-1 lg:grid-cols-3'>

<div className={`m-4 bg-${theme}txtbg border rounded-xl p-5`}>
  <div className='flex items-center'>
    <img className={`w-5 filter ${(theme==="dark")? "invert" :""}  mr-1`} src={Graphlogo} alt="Graphlogo" />
  <h1 className='font-dosis font-extrabold text-xl'>Placement Statistics</h1>
  </div>
  <div className='h-64'>

  </div>
</div>

<div className='border-[#9F9F9F] border-[0.2px] my-5 mx-4 lg:hidden'></div>

<div className={`m-4 bg-${theme}txtbg border border-${theme}txtbg rounded-xl p-5`}>
  <div className='flex items-center'>
    <img className={`w-5 filter ${(theme==="dark")? "invert" :""}  mr-1`} src={Synapselogo} alt="Synapselogo" />
  <h1 className='font-dosis font-extrabold text-xl '> Synapse</h1>
  </div>
  <div className='h-64'>

  </div>
</div>

<div className='border-[#9F9F9F] border-[0.2px] my-5 mx-4 lg:hidden'></div>

<div className={`m-4 bg-${theme}txtbg border rounded-xl p-5`}>
  <div className='flex items-center'>
    <img className={`w-5 filter ${(theme==="dark")? "invert" :""} mr-1`} src={Tweetlogo} alt="Tweetlogo" />
  <h1 className='font-dosis font-extrabold text-xl '> Tweets</h1>
  </div>
  <div className='h-64'>

  </div>
</div>


</div>

<div className={`bg-${theme}txtbg h-[357px] mx-7 rounded-2xl`}>

</div>

</div>
    </div>
  )
}

export default Announcement
