import React from "react";
import styles from "./Card.module.css";

export const Card = ({ iconName, title, subtitle }) => {
  return (
    <div className={`flex-col items-start justify-center`}>
      <span className="material-symbols-outlined">{iconName}</span>
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
  );
};
