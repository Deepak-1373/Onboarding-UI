import React from "react";

export const Card = ({ iconName, title, subtitle }) => {
  return (
    <div>
      <span class="material-symbols-outlined">{iconName}</span>
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
  );
};
