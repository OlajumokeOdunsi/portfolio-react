import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../Utility";
import { IoMenuSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>
          Olajumoke
        </a>
        <div className={styles.menu}>
          <div className="menuBtnHolder" onClick={()=>setMenuOpen(!menuOpen)} >
            {menuOpen ? (
              <MdCancel className={styles.menuBtn} />
            ) : (
              <IoMenuSharp
              className={styles.menuBtn} />
            )}
          </div>

          <ul className={`${styles.menuItems} ${menuOpen &&styles.menuOpen}`} onClick={()=> setMenuOpen(false)}>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#skills">Skills</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
