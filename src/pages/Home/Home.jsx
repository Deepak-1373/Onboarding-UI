import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Button, Input } from "../../component";
import styles from "./Home.module.css";

export const Home = () => {
  const navigate = useNavigate();
  const [userProgress, handleFormSubmitClick] = useOutletContext();

  return (
    <div>
      <div className="flex-col justify-center items-center">
        <p className={styles.title}>Welcome! First things first...</p>
        <p className={styles.subTitle}>You can always change them later</p>
      </div>
      <form
        className={styles.form}
        onSubmit={(e) => handleFormSubmitClick(e, "/workspace")}
      >
        <div className="pb-4">
          <label className="text-base" htmlFor="first-name">
            First Name
          </label>
          <Input id="first-name" type="text" placeholder="Steve Jobs" />
        </div>
        <div className="pb-4">
          <label className="text-base" htmlFor="display-name">
            Display Name
          </label>
          <Input id="display-name" type="text" placeholder="Steve" />
        </div>
        <Button text="Create Workspace" />
      </form>
    </div>
  );
};
