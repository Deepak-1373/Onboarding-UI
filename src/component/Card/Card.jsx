import React from "react";
import styles from "./Card.module.css";

export const Card = ({ iconName, title, subtitle }) => {
  return (
    <div className={`${styles.card} flex-col items-start justify-center`}>
      <span className="material-symbols-outlined">{iconName}</span>
      <p className={`${styles.cardTitle} pt-4`}>{title}</p>
      <p className={`${styles.cardSubTitle} pt-4`}>{subtitle}</p>
    </div>
  );
};
