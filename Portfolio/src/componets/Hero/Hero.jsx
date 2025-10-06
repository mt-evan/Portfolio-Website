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
                <p className={styles.description}>I'm a senior at San Diego State University majoring in Computer Science with a minor in Mathematics. 
                    My internship experience spans full-stack development, backend engineering, and AI research focused on reducing hallucinations in LLMs. 
                    These roles have strengthened my ability to build scalable software systems and collaborate across technical domains. 
                    I'm excited to contribute as an entry-level software engineer in backend, full-stack, or emerging fields like data science and artificial intelligence.
                </p>
                <a href="mailto:10evantardiff@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/evanSI.png")} alt="Image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};
