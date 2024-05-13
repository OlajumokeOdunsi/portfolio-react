import React from 'react'
import styles from "../project/Projectcard.module.css"

function Projectcard({project: {description, imageSrc, skills, demo}}) {
  return (
    <>
      <div className={styles.container} >
                    <img src ={imageSrc} alt="image"className={styles.image}/>
                    <p className={styles.description}>{description}</p>
                    <ul className={styles.skills}>
                      {skills.map((skill, id)=>{
                       return <li key={id} className={styles.skillList}>{skill}</li>;
                      })}
                    </ul>
                    <div className={styles.linksContainer}>
                      <a href={demo}className={styles.link}>DEMO</a>
                    </div>

                </div>
    </>
  )
}

export default Projectcard
