/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";


export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
    return (
      <div className={styles.container}>
        <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}></img>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return <li key={id} className={styles.skill}>{skill}</li>;
          })}
        </ul>
        <div className={styles.links}>
          {demo && (
            <a href={demo} target="_blank" className={styles.link}>Demo</a>
          )}
          <a href={source} target="_blank" className={styles.link}>Source</a>
        </div>
      </div>
    );
  };