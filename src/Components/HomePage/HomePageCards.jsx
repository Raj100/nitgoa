import React from 'react';

const HomePageCards = ({ title, contentItems, svgPath }) => {
  return (
    <>
      <div className='bg-white m-10 p-4 shadow-md rounded-xl'>
        <div className='flex flex-row gap-2' id="heading">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d={svgPath} />
          </svg>
          <h2 className='text-xl'>{title}</h2>
        </div>
        <div className='overflow-auto h-60 m-2' id="content">
        {contentItems.map((item, index) => (
          <div className='py-2' key={index}>
            <div className='font-bold' id={`sub-title-${index}`}>{item.title}</div>
            <p id={`sub-content-${index}`}>{item.content}</p>
          </div>
        ))}
      </div>
        <div className='flex flex-row-reverse gap-2 mt-6'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
          <span className='font-bold'>Read More</span>
        </div>
      </div>
    </>
  );
};

export default HomePageCards;