import React from 'react'
import HomePageCarousel from './HomePageCarousel/HomePageCarousel'
import HomePageCards from './HomePageCards'

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
    <div className='m-5 border-2 border-gray-300'></div>
    <div className='bg-white m-10 p-4 shadow-md rounded-xl'>
      <div className='flex flex-row gap-2'>
        <h2 className='text-xl'>🚨  Announcement</h2>
      </div>
      <p className='p-5'>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </p>
    </div>
    <div className='m-5 border-2 border-gray-300'></div>
    <div className='bg-white m-10 p-4 shadow-md rounded-xl'>
      
    </div>
    </>
  )
}

export default HomePage
