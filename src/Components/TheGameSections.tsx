import React from "react";
import Link from "next/link"; // Or whatever link component you're using
import Image from "next/image"; // Or the appropriate image component
import { motion } from "framer-motion"; // Or the appropriate import for motion components

const SectionRussianRoulette: React.FC = () => {
  const handleNextSectionClick = () => {
    document
      .getElementById("telegram-twist")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="russian-roulette"
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-10 md:p-24 bg-[#100d0a] text-slate-200"
    >
      <motion.div className="flex justify-center">
        <Image
          src="/telegram.png" // Placeholder image
          height={300}
          width={300}
          alt=""
          className="rounded-lg"
        />
      </motion.div>
      <div>
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
        <button
          onClick={handleNextSectionClick}
          className="text-xl bg-red-800 hover:bg-red-700 rounded-lg px-5 py-2 mt-5"
        >
          Next Section
        </button>
      </div>
    </div>
  );
};

const SectionTelegramTwist: React.FC = () => {
  const handleNextSectionClick = () => {
    document
      .getElementById("how-to-play")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="telegram-twist"
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-10 md:p-24 bg-[#100d0a] text-slate-200"
    >
      <div>
        <h1 className="text-5xl font-bold mb-8">The Telegram Twist</h1>
        <ul className="list-inside list-decimal">
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
        <button
          onClick={handleNextSectionClick}
          className="text-xl bg-red-800 hover:bg-red-700 rounded-lg px-5 py-2 mt-5"
        >
          Next Section
        </button>
      </div>
      <motion.div className="flex justify-center">
        <Image
          src="/telegram.png" // Placeholder image
          height={300}
          width={300}
          alt=""
          className="rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export { SectionRussianRoulette, SectionTelegramTwist };