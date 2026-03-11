
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './Component/Header'
import { Navbar } from './Component/Navbar'
import { Footer } from './Component/Footer'
import './App.css'

function App() {


  return (
    <>
     <Header/>  
     <Navbar />
      <Footer/>
    </>
  )
}

export default App
