/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>ABOUT</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className={styles.aboutImage}></img>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"></img>
                        <div className={styles.aboutItemText}>
                            <h3>Education</h3>
                            <p>I'm currently enrolled in my third year at SDSU, and I am set to graduate either in December 2025 or May 2026. I currently have a 3.86 GPA.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"></img>
                        <div className={styles.aboutItemText}>
                            <h3>Extracurriculars</h3>
                            <p>I am involved in the MESA program since August 2022 as well as the AI club since August 2023 here at SDSU.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="UI icon"></img>
                        <div className={styles.aboutItemText}>
                            <h3>Location</h3>
                            <p>I live in Rowland Heights in LA County, California, but I am open to relocating or working remote.</p>
                        </div>
                    </li>
                </ul>
            </div>
            
        </section>
    );
};