import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopHeader from './components/TopHeader'
import Navbar from './components/Navbar'
import ImageSlider from './components/ImageSlider'
import Content from './components/Content'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopHeader/>
    <Navbar/>
    <ImageSlider/>
    <Content/>


    </>
  )
}

export default App


