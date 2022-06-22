import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Button, Input } from "../../component";
import styles from "./WorkSpace.module.css";

export const WorkSpace = () => {
  const { handleFormSubmitClick } = useOutletContext();
  const [workspaceName, setWorkSpaceName] = useState("");
  const [workSpaceURL, setWorkSpaceURL] = useState("");

  return (
    <div>
      <div className="flex-col justify-center items-center">
        <p className={styles.title}>Let's set up a home for all your work</p>
        <p className={styles.subTitle}>
          You can always create another workspace later.
        </p>
      </div>
      <form
        className={`${styles.form}`}
        onSubmit={(e) =>
          handleFormSubmitClick(e, workspaceName, workSpaceURL, "/experience")
        }
      >
        <Input
          id="workspace-name"
          type="text"
          placeholder="Eden"
          labelText="WorkSpace Name"
          setInputNameChange={setWorkSpaceName}
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
                onChange={(e) => setWorkSpaceURL(e.target.value)}
              />
            </span>
          </label>
        </div>
        <Button text="Create Workspace" />
      </form>
    </div>
  );
};
