"use client";

import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAccount, useConnect } from "wagmi";
import Section from "./Section";
import { InjectedConnector } from "wagmi/connectors/injected";

type Props = {
  setShowPopup: Dispatch<SetStateAction<boolean>>;
};

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  enter: { x: "100%" },
  center: { x: 0 },
  exit: { x: "100%" },
};

const StartPlayingPopup: React.FC<Props> = ({ setShowPopup }) => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const [section, setSection] = useState(1);

  useEffect(() => {
    console.log("ADDY:", address);
    console.log("Connection:", isConnected);
  });

  const handleNextSection = () => {
    setSection((prevSection) => (prevSection % 3) + 1);
  };

  const handlePrevSection = () => {
    setSection((prevSection) => (prevSection > 1 ? prevSection - 1 : 3));
  };

  const handleConnect = () => {};

  return ReactDOM.createPortal(
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={backdropVariants}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black bg-opacity-50 z-[200]"
      onClick={() => setShowPopup(false)}
      style={{ backdropFilter: "blur(4px)" }}
    >
      <motion.div
        initial="enter"
        animate="center"
        exit="exit"
        variants={modalVariants}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="bg-[#100d0a] opacity-75 border border-red-800 text-white rounded-lg p-4 max-w-xl m-auto relative h-[50vh] w-[50vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-2xl">Start Playing</div>

        <div className="flex items-center w-[100%] h-[100%] items-center justify-center">
          <AnimatePresence mode="wait">
            {section === 1 && (
              <Section key="section1">
                <div>
                  <div>First connect your wallet</div>
                  <button
                    className="red-button"
                    onClick={() => {
                      setSection(2);
                    }}
                  >
                    {isConnected ? "Connected" : "Connect"}
                  </button>
                </div>
              </Section>
            )}
            {section === 2 && (
              <Section key="section2">
                {" "}
                <div>
                  <div>Now sign this message</div>
                  <button
                    className="red-button"
                    onClick={() => {
                      setSection(3);
                    }}
                  >
                    {isConnected ? "Connected" : "Connect"}
                  </button>
                </div>
              </Section>
            )}
            {section === 3 && (
              <Section key="section3">
                {" "}
                <div>
                  <div className="animate-pulse">Processing transaction...</div>
                </div>
              </Section>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default StartPlayingPopup;
