/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";


export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Evan</h1>
                <p className={styles.description}>I'm a current 3rd year at San Diego State University majoring in Computer Science with a minor in Mathematics. 
                I will be with Lutron Electronics in the upcoming summer of 2025 as a Software Engineering Intern in their Philadelphia office. Feel free to reach out.</p>
                <a href="mailto:10evantardiff@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/evanSI.png")} alt="Image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};
// heroImage.png
// evanPfp.png
// Hi, I'm Evan
// I'm a current 3rd year at San Diego State University majoring in Computer Science with a minor in Mathematics. I am interested in Software Engineering, Web Development, and Data Analysis. Feel free to reach out.