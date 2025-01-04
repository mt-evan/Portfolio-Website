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
                <img src={getImageUrl("about/sdsu.png")} alt="Me sitting with a laptop" className={styles.aboutImage}></img>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/education.png")} alt="Cursor icon"></img>
                        <div className={styles.aboutItemText}>
                            <h3>Education</h3>
                            <p>I'm currently enrolled in my third year at SDSU, and I am set to graduate in December 2025. I currently have a 3.88 GPA.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/extra.png")} alt="Server icon"></img>
                        <div className={styles.aboutItemText}>
                            <h3>Extracurriculars</h3>
                            <p>I have been involved in the MESA program since August 2022 and participated in the AI club from August 2023 to May 2024 here at SDSU. 
                            I have also joined the AI4Business research lab in December 2024 where we use machine learning to solve real-world problems and for research projects.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/location.png")} alt="UI icon"></img>
                        <div className={styles.aboutItemText}>
                            <h3>Location</h3>
                            <p>I live in Rowland Heights in LA County, California, and attend school in San Diego, California, but I am open to relocating or working remote.</p>
                        </div>
                    </li>
                </ul>
            </div> 
        </section>
    );
};