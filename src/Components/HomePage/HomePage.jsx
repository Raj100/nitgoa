import React from 'react'
import HomePageCarousel from './HomePageCarousel/HomePageCarousel'
import HomePageCards from './HomePageCards'
import HomePageMoto from './HomePageMoto/HomePageMoto';

const HomePage = () => {

  const newsContent = [
    { title: "Oct 6, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 6, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 6, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 6, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 6, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 6, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 6, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 6, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
  ];

  const quickLinks = [
    { title: "Oct 7, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 7, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 7, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 7, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 7, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 7, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 7, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 7, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
  ]

  const noticeBoard = [
    { title: "Oct 8, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 8, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 8, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 8, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 8, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 8, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 8, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
    { title: "Oct 8, 2024", content: "All nine eligible B.Tech. programmes have been accredited by the NBA" },
  ]

  return (
    <>
    <HomePageCarousel/>
    <div className='m-5 border-2 border-gray-300'></div>
    <h1 className='text-center text-3xl'>Announcement</h1>
    <div className='mx-auto mt-1 w-40 border-2 border-blue-600'></div>
    <HomePageCards
      title="News and Events"
      contentItems={newsContent}
      svgPath="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
    />
    <HomePageCards
      title="Quick Links"
      contentItems={quickLinks}
      svgPath="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
    />
    <HomePageCards
      title="Notice Board"
      contentItems={noticeBoard}
      svgPath="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
    />
    <div className='m-5 border border-gray-300'></div>
    <div className='bg-white m-10 p-4 shadow-md rounded-xl'>
      <div className='flex flex-row gap-2'>
        <h2 className='text-xl'>🚨  Announcement</h2>
      </div>
      <p className='p-5'>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </p>
    </div>
    <div className='m-5 border border-gray-300'></div>
    <div className='bg-white m-10 p-4 shadow-md rounded-xl'>
      <div className='flex flex-row gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clip-rule="evenodd" />
          <path fill-rule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clip-rule="evenodd" />
        </svg>
        <span>Placement Statistics</span>
      </div>

    </div>
    <div className='m-5 border border-gray-300'></div>

    <div className='bg-white m-10 p-4 shadow-md rounded-xl'>
      <div className='flex flex-row gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
        </svg>
        <span>Synapse</span>
      </div>

    </div>
    <div className='m-5 border border-gray-300'></div>

    <div className='bg-white m-10 p-4 shadow-md rounded-xl'>
      <div className='flex flex-row gap-2'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      </svg>
        <span>Tweets</span>
      </div>
    </div>

    <HomePageMoto/>
    </>
  )
}

export default HomePage
