import React from "react";
import { Button, Input } from "../../component";
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
      <form className={styles.form}>
        <div className="pb-4">
          <label className="text-base" htmlFor="workspace-name">
            Workspace Name
          </label>
          <Input id="workspace-name" type="text" placeholder="Eden" />
        </div>
        <div className="pb-4">
          <label className="text-base" htmlFor="workspace-url">
            Workspace URL <span>(optional)</span>
          </label>
          <Input id="workspace-url" type="url" placeholder="www.eden.com/" />
        </div>
      </form>
      <Button text="Create Workspace" />
    </div>
  );
};
