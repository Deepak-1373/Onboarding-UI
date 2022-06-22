import React from "react";
import Logo from "../../assets/logo.png";
import styles from "./Progress.module.css";

export const Progress = ({ userProgress = 1 }) => {
  return (
    <div className="flex-col justify-center items-center">
      <img src={Logo} alt="Logo" />
      <div className={`${styles.container}`}>
        {[...Array(4)].map((_, index) => (
          <React.Fragment key={index}>
            <div
              className={`${styles.item} ${
                index + 1 <= userProgress ? styles.itemBackground : ``
              }`}
            >
              {index + 1}
            </div>
            {index !== 3 && (
              <div className={`${styles.separator}`}>
                <div
                  className={
                    index + 1 <= userProgress ? `${styles.active}` : ``
                  }
                ></div>
                <div
                  className={index + 1 < userProgress ? `${styles.active}` : ``}
                ></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
