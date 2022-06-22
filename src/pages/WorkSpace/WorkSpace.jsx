import React from "react";
import { Button, Card, Input } from "../../component";
import styles from "./WorkSpace.module.css";

export const WorkSpace = () => {
  return (
    <div>
      <div className="flex-col justify-center items-center">
        <p className={styles.title}>Let's set up a home for all your work</p>
        <p className={styles.subTitle}>
          You can always create another workspace later.
        </p>
      </div>
      <form className={`${styles.form}`}>
        <Input
          id="workspace-name"
          type="text"
          placeholder="Eden"
          labelText="WorkSpace Name"
        />
        <div className="pb-4 flex-col">
          <label className="text-base" htmlFor="workspace-url">
            Workspace URL <span>(optional)</span>
            <span
              className={`${styles.inputContainer} flex items-center justify-center`}
            >
              <span className={`${styles.inputURL}`}>www.eden.com/</span>
              <input
                type="text"
                className={`${styles.input}`}
                id="workspace-url"
              />
            </span>
          </label>
        </div>

        {/* 
        <Input
          id="workspace-url"
          type="text"
          placeholder="www.eden.com"
          labelText="WorkSpace URL"
          labelData="(optional)"
        /> */}
        <Button text="Create Workspace" />
      </form>
    </div>
  );
};
