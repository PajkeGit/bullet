"use client";

import React, { useState, ReactNode } from "react";
import StartPlayingPopup from "./StartPlayingPopup";
import { AnimatePresence } from "framer-motion";

type Props = {};

const StartPlayingPopupWrap = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <button onClick={handleButtonClick} className="red-button">
        Toggle Popup
      </button>
      <AnimatePresence>
        {showPopup && <StartPlayingPopup setShowPopup={setShowPopup} />}
      </AnimatePresence>
    </>
  );
};

export default StartPlayingPopupWrap;
