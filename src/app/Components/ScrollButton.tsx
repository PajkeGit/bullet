"use client";

import React from "react";
import "./ScrollButton.css"; // Import the CSS file

type Props = {
  id: string;
  label: string;
};

const ScrollButton = (props: Props) => {
  const handleClick = () => {
    document.getElementById(props.id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex gap-5">
      <button onClick={handleClick} className="scroll-button">
        {props.label}
      </button>
    </div>
  );
};

export default ScrollButton;
