import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Components/HomePage/HomePage'
import LogoNavbar from './Components/LogoNavbar'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <LogoNavbar/>
    <HomePage/>
    <Footer></Footer>
    {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    </>
  )
}

export default App
