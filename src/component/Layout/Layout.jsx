import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Progress } from "../Progress/Progress";

export const Layout = () => {
  const [userProgress, setUserProgress] = useState(1);
  const handleFormSubmitClick = (e, path) => {
    e.preventDefault();
    setUserProgress((prevUserProgress) => prevUserProgress + 1);
    navigate(path);
  };

  return (
    <div>
      <Progress userProgress={userProgress} />
      <Outlet context={[userProgress, handleFormSubmitClick]} />
    </div>
  );
};
