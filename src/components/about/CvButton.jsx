import React from 'react'
import { useState } from 'react'
import style from "./About.module.css"
const Cvbutton = ({onClick,className}) => {
    const [showCV,setShowCv ] = useState(false)
    const CvLink = "https://drive.google.com/file/d/1yj8b99lUr7S5BNyvYKNpHIA46zuIrK4u/view"
    const toogleCv =()=>{
        setShowCv(!showCV)
    }
  return (
    <>
         <button onClick={toogleCv} className={ style.downloadCv}> {showCV ? showCV : " DOWNLOAD CV"}
         {showCV && <a href={CvLink} target="_blank" rel="noopener noreferrer"> DOWNLOAD CV</a>}
        </button>


    </>
  )
}

export default Cvbutton