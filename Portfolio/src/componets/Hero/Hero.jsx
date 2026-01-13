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
                <p className={styles.description}>
                    I'm a Computer Science graduate from San Diego State University with hands-on experience across full-stack development, backend engineering, 
                    and applied AI research. I currently work as a Full Stack Engineer at Pares (YC S25), where I build and ship production features in a fast-paced startup 
                    environment using modern web technologies. Previously, I designed scalable backend systems and event-driven architectures during my internship at Lutron 
                    Electronics, and conducted AI research focused on reducing hallucinations in large language models. I'm passionate about building reliable, scalable
                     software and am excited to contribute as a software engineer in backend, full-stack, or AI-driven roles.
                </p>
                <a href="mailto:10evantardiff@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/evanSI.png")} alt="Image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};
