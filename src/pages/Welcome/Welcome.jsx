import React from "react";
import { Button, Input } from "../../component";

export const Welcome = () => {
  return (
    <div>
      <div>
        <p>Welcome! First things first...</p>
        <p>You can always change them later</p>
      </div>
      <form>
        <label htmlFor="first-name">First Name</label>
        <Input id="first-name" type="text" placeholder="Steve Jobs" />
        <label htmlFor="display-name">Display Name</label>
        <Input id="display-name" type="text" placeholder="Steve" />
        <Button text="Create Workspace" />
      </form>
    </div>
  );
};
