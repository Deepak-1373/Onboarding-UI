import React from "react";
import styles from "./Input.module.css";

export const Input = ({ id, type, placeholder }) => {
  return (
    <input
      required
      id={id}
      className={styles.input}
      type={type}
      placeholder={placeholder}
    />
  );
};
