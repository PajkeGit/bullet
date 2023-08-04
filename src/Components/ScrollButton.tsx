"use client";

import React from "react";

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
      <button
        onClick={handleClick}
        className="text-xl bg-red-800 hover:bg-red-700 rounded-lg px-5 py-2 mt-5 z-50"
      >
        {props.label}
      </button>
    </div>
  );
};

export default ScrollButton;
