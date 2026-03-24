import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import One from './Components/one'
import Nine from './Components/nine'
import Six from './Components/Six'
import Navbar from './Components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <One />
      <Nine />
      <Six /> 
      
    </>
  )
}

export default App
