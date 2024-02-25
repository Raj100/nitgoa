import React from 'react'
import Logo from '../assets/nitlogo.png';
const LogoNavbar = () => {
  return (
    <>
    <header className='flex flex-row justify-between items-center w-screen p-4 sticky top-0'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class='w-8 h-8'>
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <img src={Logo} className='w-45 h-10 md:w-45 md:h-20 lg:w-300 lg:h-30'/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

    </header>
    </>
  )
}

export default LogoNavbar
