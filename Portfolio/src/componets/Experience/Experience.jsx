/* eslint-disable no-unused-vars */
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";
import history from "../../data/history.json";

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return (<li key={id} className={styles.historyItem}>
                                <img className={styles.historyItemImage} src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`}></img>
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experiences.map((experience, id) => {
                                        const isLast = id === historyItem.experiences.length - 1;
                                        return <li key={id} className={`${styles.bulletpoint} ${isLast ? styles.lastPoint : ''}`}>{experience}</li>;
                                    })}</ul>
                                </div>
                            </li>)
                        })
                    }
                </ul>
            </div>
        </section>
    );
};