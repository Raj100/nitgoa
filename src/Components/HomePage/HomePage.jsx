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
    </>
  )
}

export default HomePage
