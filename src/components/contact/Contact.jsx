import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

import style from "../contact/Contact.module.css"


function Contact() {
  return (
    <>
      <footer className={style.container} id='contact'>
        <div className={style.text}>
            <h2>Contact</h2>
            </div>
        <ul>
            <div className={style.socials}>
          <a href="https://twitter.com/__Jummieie" target="_blank">
            <FaSquareXTwitter className={style.sol} />
          </a>

          <a href="https://github.com/OlajumokeOdunsi" target="_blank">
            <IoLogoGithub className={style.sol} />
          </a>

          <a href="/https://www.linkedin.com/in/olajumoke-odunsi-3b7b111a0/">
            <FaLinkedinIn className={style.sol} />
          </a>

         <a href=' mailto:jumaiodunsi@gmail.com'>
            <MdOutlineMailOutline className={style.sol} />
            </a>   
               </div>
        </ul>
      </footer>
    </>
  )
}

export default Contact
