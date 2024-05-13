import React from 'react'
import projects from "../../data/project.json"
import Projectcard from './Projectcard'
import styles from "../project/Project.module.css"

const Projects = () => {
  return (
    <>
      <section className={styles.container} id='projects'>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.project}>
            {
              projects.map((project, id)=>{
                return <Projectcard key={id} project={project}/>

              })
            }
        </div>

      </section>
    </>
  )
}

export default Projects

