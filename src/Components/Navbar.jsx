import React from 'react'
import Translate from '../assets/Translation.png'

const Navbar = () => {
  return (
    <>
    <header className='bg-blue-500 px-4 py-5 flex flex-row justify-between'>
        <div className='flex flex-row gap-1'>
          <img src={Translate} />
          <h1 className='text-white font-bold'>Translate</h1>
        </div>

        <div className='flex flex-row gap-2'>
          <h1 className='text-white'>G.I.A.N</h1>
          <h1 className='text-white'>Login</h1>
        </div>
    </header>
    </>
  )
}

export default Navbar
