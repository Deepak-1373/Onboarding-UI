import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Button, Card } from "../../component";
import styles from "./Experience.module.css";

const cardData = [
  {
    id: 1,
    iconName: "person",
    title: "For myself",
    subtitle: "Write better. Think more clearly. Stay orgainzed",
  },
  {
    id: 2,
    iconName: "groups",
    title: "With my team",
    subtitle: "Wikis, docs, tasks & projects, all in one place.",
  },
];

export const Experience = () => {
  const { handleFormSubmitClick } = useOutletContext();
  const [key, setKey] = useState(0);
  return (
    <div>
      <div className="flex-col items-center justify-center">
        <p className={styles.title}>How are you planning to use Eden?</p>
        <p className={styles.subTitle}>
          We'll streamline your setup experience accordingly.
        </p>
      </div>
      <form
        className={styles.form}
        onSubmit={(e) => handleFormSubmitClick(e, "", "", "/onboarding")}
      >
        <div className="flex items-center justify-between pb-4">
          {cardData.map(({ id, iconName, title, subtitle }, index) => (
            <React.Fragment key={id}>
              <Card
                index={index}
                iconName={iconName}
                title={title}
                subtitle={subtitle}
                selectedId={key}
                setSelectedId={setKey}
              />
            </React.Fragment>
          ))}
        </div>
        <Button text="Create Workspace" />
      </form>
    </div>
  );
};
