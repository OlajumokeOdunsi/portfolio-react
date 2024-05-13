import { useState } from 'react'
import styles from "./App.module.css"
import Navbar from './components/navBar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/project/Projects'
import Contact from './components/contact/Contact'

function App() {

  return (
    
    <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  
  )
}

export default App
