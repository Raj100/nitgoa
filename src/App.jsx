import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Footer></Footer>
    {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    </>
  )
}

export default App
