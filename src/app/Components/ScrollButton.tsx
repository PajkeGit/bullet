"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  id: string;
  label: string;
};

const ScrollButton = (props: Props) => {
  const handleClick = () => {
    document.getElementById(props.id)?.scrollIntoView({ behavior: "smooth" });
  };

  const gradientAnimation = {
    initial: {
      backgroundImage:
        "linear-gradient(90deg, rgba(255, 99, 132, 0.2) 0%, rgba(255, 99, 132, 0.2) 50%, rgba(255, 99, 132, 0.2) 100%)",
      backgroundSize: "200% 100%",
    },
    hover: {
      backgroundImage:
        "linear-gradient(90deg, rgba(255, 99, 132, 0.2) 0%, rgba(54, 162, 235, 0.2) 50%, rgba(255, 99, 132, 0.2) 100%)",
      backgroundSize: "200% 100%",
      transition: { duration: 2, ease: "easeInOut", repeat: Infinity },
    },
  };

  return (
    <div className="flex gap-5">
      <motion.button
        onClick={handleClick}
        className="text-xl rounded-lg px-5 py-2 mt-5 z-50 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 border-2 border-red-800"
        variants={gradientAnimation}
        initial="initial"
        whileHover="hover"
      >
        {props.label}
      </motion.button>
    </div>
  );
};

export default ScrollButton;
