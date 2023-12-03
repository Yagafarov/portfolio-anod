import React from 'react'
import './App.css'

// components
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import Resume from './components/Resume/Resume'
import Services from './components/Services/Services'
import Sidebar from './components/Sidebar/Sidebar'


const App = () => {
  return (
    <>
      <Sidebar/>
      <main className='main'>
        <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        <Blog/>
        <Contact/>
      </main>
    </>
  )
}

export default App