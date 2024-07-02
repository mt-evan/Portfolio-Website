/* eslint-disable no-unused-vars */
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}><h2>Contact</h2><p>Feel free to reach out!</p></div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"></img>
                    <a href="mailto:myemail@email.com" target="_blank">10evantardiff@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon"></img>
                    <a href="https://www.linkedin.com/in/evan-tardiff-2503a6249/" target="_blank">linkedin.com/evan</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon"></img>
                    <a href="https://github.com/mt-evan" target="_blank">github.com/evan</a>
                </li>
            </ul>
        </footer>
    );
};