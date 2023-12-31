"use client";

import React from "react";
import ScrollButton from "../ScrollButton";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const SectionTelegramTwist: React.FC = () => {
  return (
    <div
      id="telegram-twist"
      className="flex flex-col min-w-screen justify-center lg:flex-row mx-auto items-center gap-10 p-10 md:p-24 bg-[#100d0a] text-slate-200"
    >
      <div className="mr-[2.5rem]">
        <h1 className="text-5xl font-bold mb-4">The Telegram Twist</h1>
        <ul className="list-inside list-decimal lg:max-w-[35vw]">
          <li>
            The Bullet Game Bot is a Telegram bot that organizes Russian
            Roulette games between two or more players.
          </li>
          <li>After joining a game, players place bets using $BULLET.</li>
          <li>
            {`When the game starts, the bot transfers each player's stake into
            escrow, and distributes the tokens appropriately at the end of the
            game.`}
          </li>
          <li>
            In order to play, each player must connect their wallet to the bot,
            purchase the desired amount of $BULLET, and then join a channel
            where the bot is hosting games.
          </li>
        </ul>
        <ScrollButton id="bullet" label="About $BULLET" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: "20%", x: "20%" }}
        whileInView={{ opacity: 1, y: "0%", x: "0%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeIn" }}
        className="flex justify-center md:ml-20 w-[320px] md:w-[450px]"
      >
        <Image
          src="/game.png" // Placeholder image
          height={300}
          width={300}
          layout="responsive"
          alt=""
          className="rounded-lg"
        />
      </motion.div>
    </div>
  );
};
export default SectionTelegramTwist;
