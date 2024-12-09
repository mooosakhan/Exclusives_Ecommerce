import { useState } from 'react'
// import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import FlashSales from './components/FlashSales'


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Header/>
      <Navbar/>
      <Hero/>
      <FlashSales/>

      </>
  )
}

export default App
