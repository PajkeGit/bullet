"use client";

import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAccount, useConnect, useContractWrite } from "wagmi";
import Section from "./Section";
import { InjectedConnector } from "wagmi/connectors/injected";
import { FaTelegram } from "react-icons/fa";

type Props = {
  setShowPopup: Dispatch<SetStateAction<boolean>>;
};

const APPROVE_ABI = [
  {
    constant: false,
    inputs: [
      {
        name: "secret",
        type: "uint32",
      },
    ],
    name: "connectAndApprove",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

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
  const [secretValue, setSecretValue] = useState("");

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: "0x8ef32a03784c8fd63bbf027251b9620865bd54b6",
    abi: APPROVE_ABI,
    functionName: "connectAndApprove",
  });

  const [section, setSection] = useState(1);

  useEffect(() => {
    if (isConnected) {
      setSection(2);
    } else {
      setSection(1);
    }
  }, [isConnected]);

  const handleNextSection = () => {
    setSection((prevSection) => (prevSection % 3) + 1);
  };

  const handlePrevSection = () => {
    setSection((prevSection) => (prevSection > 1 ? prevSection - 1 : 3));
  };

  const handleApprove = () => {};

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
        className="bg-[#100d0a] bg-opacity-50 border border-red-800 text-white rounded-lg p-4 max-w-xl m-auto relative items-center px-[5rem] py-[5rem] h-[450px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-rows-2 items-center justify-center h-full">
          <div className="text-3xl self-center">Bullet Game Wallet Connect</div>
          <AnimatePresence mode="wait">
            {section === 1 && (
              <Section key="section1">
                <div>First connect your wallet</div>
                <button
                  className="red-button"
                  onClick={() => {
                    console.log("hi");
                    connect();
                  }}
                >
                  {isConnected ? "Connected" : "Connect"}
                </button>
              </Section>
            )}
            {section === 2 && (
              <Section key="section2">
                <div>Input your code</div>
                <p className="text-sm mt-1 flex flex-col items-center gap-2">
                  <div>
                    To get your code, DM the Telegram bot with /connect.
                  </div>
                  <a>
                    <a href="https://t.me/bullet_game_bot" target="_blank">
                      <FaTelegram className="w-5 h-5" />
                    </a>
                  </a>
                </p>
                <input
                  value={secretValue || ""} // Bind the value to secretValue
                  onChange={(e) => setSecretValue(e.target.value)} // Update the state with the input's value
                  className="border my-4 border-[#991b1b] bg-[#100d0a] outline-none text-slate-200 px-4 py-2 mr-4"
                  placeholder="Input your secret"
                />
                <button
                  className="red-button"
                  onClick={() => {
                    // Call your mock API here
                    console.log("Calling mock API");
                    // For demonstration purposes
                    setTimeout(() => {
                      console.log("API responded with some values");
                    }, 2000);

                    setSection(3);
                  }}
                >
                  Submit
                </button>
              </Section>
            )}
            {section === 3 && (
              <Section key="section3">
                <div>Approve the contract</div>
                <button
                  className="red-button"
                  onClick={() => {
                    write({ args: [secretValue] });
                    setSection(4);
                  }}
                >
                  {isConnected ? "Connected" : "Connect"}
                </button>
              </Section>
            )}
            {section === 4 && (
              <Section key="section4">
                <div className="animate-pulse">Connecting...</div>
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
