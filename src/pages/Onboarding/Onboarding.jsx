import React from "react";
import { useOutletContext } from "react-router-dom";
import { Button } from "../../component";
import styles from "./Onboarding.module.css";

export const Onboarding = () => {
  const [userData] = useOutletContext();
  return (
    <div className={`${styles.container} flex-col justify-center items-center`}>
      <span className={`${styles.checkIcon} material-symbols-outlined`}>
        done
      </span>
      <p className={styles.title}>Congratulation, Eren!</p>
      <p className={styles.subTitle}>
        You have completed onboarding, you can start using the Eden!
      </p>
      <div className={styles.buttonContainer}>
        <Button text="Launch Eden" />
      </div>
    </div>
  );
};
