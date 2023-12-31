"use client";

import Image from "next/image";
import React from "react";
import ScrollButton from "../ScrollButton";
import "./SomeCss.css";
import { motion } from "framer-motion";

type Props = {};

const SectionRussianRoulette: React.FC = () => {
  return (
    <div
      id="russian-roulette"
      className="flex flex-col w-screen justify-center md:flex-row mx-auto items-center gap-10 p-10 md:p-24 bg-[#100d0a] text-slate-200"
    >
      <motion.div
        initial={{ opacity: 0, y: "20%", x: "-20%" }}
        whileInView={{ opacity: 1, y: "0%", x: "0%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeIn" }}
        className="flex justify-center w-full lg:w-[30vw] md:mr-20 gradient-overlay"
      >
        <Image
          src="/redgun.png" // Placeholder image
          layout="responsive"
          width={300}
          height={300}
          alt=""
          className="rounded-lg"
        />
      </motion.div>
      <div className="">
        <h1 className="text-5xl font-bold mb-4">Russian Roulette</h1>
        <h2 className="text-3xl font-semibold mb-4">But on Telegram</h2>
        <ul className="list-inside list-decimal">
          <li>
            There is a revolver containing a single bullet in one of the
            chambers.
          </li>
          <li>Each player places a bet prior to the game starting.</li>
          <li>
            If a player pulls the trigger while the chamber is loaded with the
            bullet, the player dies and the game ends.
          </li>
          <li>The stake of the dying player is paid out to survivors.</li>
        </ul>
        <ScrollButton id="telegram-twist" label="The Twist..." />
      </div>
    </div>
  );
};

export default SectionRussianRoulette;
