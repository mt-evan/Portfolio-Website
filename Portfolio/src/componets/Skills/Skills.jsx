/* eslint-disable no-unused-vars */
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";

export const Skills = () => {
    return (
        <section className={styles.container} id="skills">
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.skills}>{
                skills.map((skill, id) => {
                    return (
                        <div key={id}  className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title}></img>
                            </div>
                            <p>{skill.title}</p> 
                        </div>  
                    )
                })
            }</div>
        </section>
    );
};