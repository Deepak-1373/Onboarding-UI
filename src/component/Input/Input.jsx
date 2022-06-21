import React from "react";
import styles from "./Input.module.css";

export const Input = ({
  id = "",
  type = "",
  placeholder = "",
  labelText = "",
  labelData = "",
}) => {
  return (
    <div className="pb-4">
      <label className="text-base" htmlFor={id}>
        {labelText} <span>{labelData}</span>
        <input
          required
          id={id}
          className={styles.input}
          type={type}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};
