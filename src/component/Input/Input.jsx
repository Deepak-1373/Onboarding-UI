import React from "react";
import styles from "./Input.module.css";

export const Input = ({ type, placeholder }) => {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} />
  );
};
