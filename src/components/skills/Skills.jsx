import React from "react";
import style from "./Skills.module.css"
import { PiCirclesThreeFill } from "react-icons/pi";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";







const Skills = () => {
  return (
    <>
      <section className={style.Skills} id="skills">
        {/* <div className={style.skills} id="about"> */}
          <h3 className={style.title}>Skills</h3>
        {/* </div> */}
        <div className={style.aboutTexts}>
          <p>
          My skills span through HTML, CSS, and JavaScript, crafting visually stunning web interfaces.
           Proficient in TypeScript for scalable and organized code, I specialize in React to create dynamic and reusable UI components. With strong Git skills, I ensure efficient version control and collaboration. 
          I also leverage Node.js and MongoDB for flexible data storage.   </p>
        </div>
        <div className={ style.mySkills} id="my-skills"> 
          <ul className ={style.skillSet} id="skillset">
            <ul className={style.skl}> <IoLogoHtml5  className={style.lg}/></ul>
            <ul className={style.skl}><FaCss3 className={style.lg}/></ul>       
            <ul className={style.skl}><IoLogoJavascript className={style.lg}/></ul>
            <ul className={style.skl}><SiTypescript className={style.lg}/></ul>
            <ul className={style.skl}><SiReact className={style.lg}/></ul>
            <ul className={style.skl}><FaGithub className={style.lg}/></ul>
            <ul className={style.skl}> <FaNodeJs className={style.lg}/></ul>
            <ul className={style.skl}><DiMongodb className={style.lg}/></ul>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Skills;
