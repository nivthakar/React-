import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'  
import Data from './components/Data' 
import Button from './components/Button'
import {Info,Info2 } from './components/Info'
import Welcome from './components/Welcome'
import API from './components/API'

import './App.css'
import Nav from './components/Nav'
import Props from './components/Props'
import MountingDemo from './components/MountingDemo'
import UpdatingDemo from './components/UpdatingDemo'
import PureComponentDemo from './components/PureComponentDemo'

function App() {
  

  return (
    <div>
     <Header />
      <Nav />
     <Data /> 
     <Button />
     <Info />
    <Props />
     <Info2 />
     <Welcome name="Nirav" />
      <MountingDemo />
      <UpdatingDemo />
      
      <PureComponentDemo value="Hello, Pure Component!" /> 
      <API /> 
     <Footer /> 
    </div>
  )
}

export default App
