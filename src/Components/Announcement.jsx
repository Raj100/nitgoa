import React, { useContext } from 'react'
import Line from "../assets/Line.svg"
import News from "../assets/News.png"
import DynamicLinks from "../assets/Dynamic Links.png"
import Noticeboard from "../assets/Noticeboard.png"
import Graphlogo from "../assets/Graph.svg"
import Synapselogo from "../assets/Doc.svg"
import Tweetlogo from "../assets/Tweet.svg"
import { AppContext } from './AppContext'
import { useTranslation } from 'react-i18next'
import { BarController } from 'chart.js'
import Placement from './Placement'
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Announcement = () => {
  const {t} = useTranslation();
  const {theme}=useContext(AppContext);
  return (
    <div>

<div className={`bg-${theme}txtbg h-[211px] lg:h-[543px]`}>

    </div>

         <div className={`bg-${theme}bg pt-5 pb-5 text-${theme}txt`}>

<div className=' flex flex-col text-center justify-center'>
  <h1 className='font-dosis font-semibold	text-lg	'>{t("announcement")}</h1>
  <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
</div>


<div className='p-5'>
  
<div className='border-[#9F9F9F] border-[0.2px] my-5 mx-4'></div>
    <div className={`m-4 bg-${theme}txtbg border rounded-xl p-5`}>
      <h1 className='font-dosis font-extrabold	text-base'>🚨 {t("announcement")}</h1>
      <p className='text-xs	font-semibold'>{t("announcement_content")}</p>
    </div>
<div className='border-[#9F9F9F] border-[0.2px] my-5 mx-4 '></div>


<div className="grid grid-cols-1  md:grid-cols-3 gap-5 ">

  <div className={`bg-${theme}txtbg w-full shadow-xl rounded-lg p-[10px]`}>
    <div className='w-full h-[242px]'>
    <div className='flex '>
      <img className='w-6' src={News} alt="News" />
      <h1>{t("news_events")}</h1>
    </div>
    <p className='list-none text-gray-600 p-4 h-40 overflow-auto text-sm mt-5'>
        <div className='py-2'>
          <p className='font-bold'>October 6, 2024</p>
          <p>Five Day Workshop on Advanced Techniques in Inverse Problem Solving: From Regularization to Deep Learning (Online) March 20-24, 2024 (Under SSR Activities, SERB, DST, Govt. of India)</p>
        </div>
        <div className='py-2'>
          <p className='font-bold'>October 6, 2024</p>
          <p> Five days STTP on Sustainable Future in Water Resources and Climate Challenges sponsored by Goa DST & WM.</p>
        </div>
        <div className='py-2'>
          <p className='font-bold'>October 6, 2024</p>
          <p>Two Weeks Hands-on Workshop on Ethical Hacking and Cyber Security, during 10-21 June 2024</p>
        </div>
        <div className='py-2'>
          <p className='font-bold'>October 6, 2024</p>
          <p>Provisionally shortlisted candidates for the interview of JRF position w.r.t Ref. No. NITGOA/RECT/RP/2024/OW/01 dt. 29/01/2024 under the project Chips to Startup (C2S) Programme, MeiTY, Govt. of India project titled Design and Development of FPGA Accelerator IP for Deep Neural Network (FAipDNet)</p>
        </div>
        <div className='py-2'>
          <p className='font-bold'>October 6, 2024</p>
          <p>Advertisement for the Post of Assistant Librarian on Temporary Basis</p>
        </div>
        <div className='py-2'>
          <p className='font-bold'>October 6, 2024</p>
          <p>Advertisement for the Post of Student Counsellor on Temporary Basis</p>
        </div>
    </p>
    <div className='absolute right-10 flex flex-row gap-1 items-center justify-items-center'>Read More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </div>
    </div>
  </div>


  <div className={`bg-${theme}txtbg w-full shadow-xl rounded-lg p-[10px]`}>
    <div className='w-full h-[242px]'>
    <div className='flex '>
      <img className='w-6' src={DynamicLinks} alt="Quick Links" />
      <h1>{t("quicklink")}</h1>
    </div>
    <p className='list-none text-gray-600 p-4 h-40 overflow-auto text-sm mt-5'>
        <div className='py-2'>
          <p className='font-bold'>October 6, 2024</p>
          <p>Five Day Workshop on Advanced Techniques in Inverse Problem Solving: From Regularization to Deep Learning (Online) March 20-24, 2024 (Under SSR Activities, SERB, DST, Govt. of India)</p>
        </div>
        <div className='py-2'>
          <p className='font-bold'>October 6, 2024</p>
          <p> Five days STTP on Sustainable Future in Water Resources and Climate Challenges sponsored by Goa DST & WM.</p>
        </div>
        <div className='py-2'>
          <p className='font-bold'>October 6, 2024</p>
          <p>Two Weeks Hands-on Workshop on Ethical Hacking and Cyber Security, during 10-21 June 2024</p>
        </div>
        <div className='py-2'>
          <p className='font-bold'>October 6, 2024</p>
          <p>Provisionally shortlisted candidates for the interview of JRF position w.r.t Ref. No. NITGOA/RECT/RP/2024/OW/01 dt. 29/01/2024 under the project Chips to Startup (C2S) Programme, MeiTY, Govt. of India project titled Design and Development of FPGA Accelerator IP for Deep Neural Network (FAipDNet)</p>
        </div>
        <div className='py-2'>
          <p className='font-bold'>October 6, 2024</p>
          <p>Advertisement for the Post of Assistant Librarian on Temporary Basis</p>
        </div>
        <div className='py-2'>
          <p className='font-bold'>October 6, 2024</p>
          <p>Advertisement for the Post of Student Counsellor on Temporary Basis</p>
        </div>
    </p>
    <div className='absolute right-10 flex flex-row gap-1 items-center justify-items-center'>Read More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </div>
    </div>
  </div>

  <div className={`bg-${theme}txtbg w-full shadow-xl rounded-lg p-[10px]`}>
    <div className='w-full h-[242px]'>
    <div className='flex '>
      <img className='w-6 !text-redth' src={Noticeboard} alt="Notice Board" />
      <h1>{t("notice")}</h1>
    </div>
    <p className='list-none text-gray-600 p-4 h-40 overflow-auto text-sm mt-5'>
        <div className='py-2'>
          <p className='font-bold'>October 6, 2024</p>
          <p>Five Day Workshop on Advanced Techniques in Inverse Problem Solving: From Regularization to Deep Learning (Online) March 20-24, 2024 (Under SSR Activities, SERB, DST, Govt. of India)</p>
        </div>
        <div className='py-2'>
          <p className='font-bold'>October 6, 2024</p>
          <p> Five days STTP on Sustainable Future in Water Resources and Climate Challenges sponsored by Goa DST & WM.</p>
        </div>
        <div className='py-2'>
          <p className='font-bold'>October 6, 2024</p>
          <p>Two Weeks Hands-on Workshop on Ethical Hacking and Cyber Security, during 10-21 June 2024</p>
        </div>
        <div className='py-2'>
          <p className='font-bold'>October 6, 2024</p>
          <p>Provisionally shortlisted candidates for the interview of JRF position w.r.t Ref. No. NITGOA/RECT/RP/2024/OW/01 dt. 29/01/2024 under the project Chips to Startup (C2S) Programme, MeiTY, Govt. of India project titled Design and Development of FPGA Accelerator IP for Deep Neural Network (FAipDNet)</p>
        </div>
        <div className='py-2'>
          <p className='font-bold'>October 6, 2024</p>
          <p>Advertisement for the Post of Assistant Librarian on Temporary Basis</p>
        </div>
        <div className='py-2'>
          <p className='font-bold'>October 6, 2024</p>
          <p>Advertisement for the Post of Student Counsellor on Temporary Basis</p>
        </div>
    </p>
    <div className='absolute right-10 flex flex-row gap-1 items-center justify-items-center'>Read More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </div>
    </div>
  </div>

</div>

</div>

<div className='grid grid-cols-1 lg:grid-cols-3'>

<div className={`m-4 bg-${theme}txtbg border rounded-xl p-5`}>
  <div className='flex items-center'>
    <img className={`w-5 filter ${(theme==="dark")? "invert" :""}  mr-1`} src={Graphlogo} alt="Graphlogo" />
  <h1 className='font-dosis font-extrabold text-xl'>{t("placement_stat")}</h1>
  </div>
  <div className='h-full'>
    <Placement/>
  </div>
</div>

<div className='border-[#9F9F9F] border-[0.2px] my-5 mx-4 lg:hidden'></div>

<div className={`m-4 bg-${theme}txtbg border border-${theme}txtbg rounded-xl p-5`}>
  <div className='flex items-center'>
    <img className={`w-5 filter ${(theme==="dark")? "invert" :""}  mr-1`} src={Synapselogo} alt="Synapselogo" />
  <h1 className='font-dosis font-extrabold text-xl '>{t("synapse")}</h1>
  </div>
  <div className='h-64'>
  </div>
</div>
<div className='border-[#9F9F9F] border-[0.2px] my-5 mx-4 lg:hidden'></div>

<div className={`m-4 bg-${theme}txtbg border rounded-xl p-5`}>
  <div className='flex items-center'>
    <img className={`w-5 filter ${(theme==="dark")? "invert" :""} mr-1`} src={Tweetlogo} alt="Tweetlogo" />
  <h1 className='font-dosis font-extrabold text-xl '>{t("tweet")}</h1>
  </div>
  <div className='h-64'>
    <TwitterTweetEmbed tweetId="1732824684683784516" className='overflow-auto'/>
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
