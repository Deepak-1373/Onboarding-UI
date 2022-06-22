import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Progress } from "../Progress/Progress";

export const Layout = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [userProgress, setUserProgress] = useState(1);

  const handleFormSubmitClick = (e, inputDataOne, inputDataTwo, path) => {
    e.preventDefault();
    setUserData((prev) => [
      ...prev,
      { inputDataOne: inputDataOne, inputDataTwo: inputDataTwo },
    ]);
    setUserProgress((prevUserProgress) => prevUserProgress + 1);
    navigate(path);
  };

  return (
    <div>
      <Progress userProgress={userProgress} />
      <Outlet context={{ userProgress, userData, handleFormSubmitClick }} />
    </div>
  );
};
