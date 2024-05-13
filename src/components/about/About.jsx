import React from 'react'
import styles from "./About.module.css"
import Cvbutton from './CvButton'
function About() {
  return (
    <>
      <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
        <p className={styles.aboutText}>I'm a frontend developer adept in React, 
          crafting dynamic, responsive interfaces tailored for diverse devices,
           enriched with interactive features for optimal user engagement. Coupled with my backend
            prowess in Node.js and MongoDB, I specialize in architecting high-performance APIs,
             optimizing backend infrastructure, and proficiently managing databases, culminating in holistic solutions for seamless user experiences.
        </p>
        <Cvbutton/>
</div>



      </section>
    </>
  )
}

export default About



