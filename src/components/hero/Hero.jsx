import React from 'react'
import myImage from "../../assets/profile-pic (2).png"
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Olajumoke</h1>
            <p className={styles.description}>I am a software developer with a year of experience working with React and Node.js.</p>
            <a href="mailto:jumaiodunsi@gmail.com" className={styles.contact}>Contact Me</a>
        </div>
        <img src={myImage} alt='my-image-hero' className={styles.heroImage}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

      </section>
    </>
  )
}

export default Hero
