import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Button, Input } from "../../component";
import styles from "./Home.module.css";

export const Home = () => {
  const { handleFormSubmitClick } = useOutletContext();
  const [firstName, setFirstName] = useState("");
  const [displayName, setDisplayName] = useState("");

  return (
    <div>
      <div className="flex-col justify-center items-center">
        <p className={styles.title}>Welcome! First things first...</p>
        <p className={styles.subTitle}>You can always change them later</p>
      </div>
      <form
        className={styles.form}
        onSubmit={(e) =>
          handleFormSubmitClick(e, firstName, displayName, "/workspace")
        }
      >
        <Input
          id="first-name"
          type="text"
          placeholder="Steve Jobs"
          labelText="First Name"
          setInputNameChange={setFirstName}
        />
        <Input
          id="display-name"
          type="text"
          placeholder="Steve"
          labelText="Display Name"
          setInputNameChange={setDisplayName}
        />
        <Button text="Create Workspace" />
      </form>
    </div>
  );
};
