import React from "react";
import { Card } from "../../component";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <div>
      <div className="flex-col items-center justify-center">
        <p className={styles.title}>How are you planning to use Eden?</p>
        <p className={styles.subTitle}>
          We'll streamline your setup experience accordingly.
        </p>
      </div>
      <div className="flex items-center justify-center pt-4">
        <Card
          iconName="person"
          title="For myself"
          subtitle="Write better. Think more clearly. Stay orgainzed"
        />
        <Card
          iconName="groups"
          title="With my team"
          subtitle="Wikis, docs, tasks & projects, all in one place."
        />
      </div>
    </div>
  );
};
