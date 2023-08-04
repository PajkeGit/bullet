import Image from "next/image";
import React from "react";
import ScrollButton from "../ScrollButton";

type Props = {};

const SectionRussianRoulette: React.FC = () => {
  return (
    <div
      id="russian-roulette"
      className="flex flex-col w-screen justify-center md:flex-row mx-auto items-center gap-10 p-10 md:p-24 bg-[#100d0a] text-slate-200"
    >
      <div className="flex justify-center mr-20">
        <Image
          src="/telegram.png" // Placeholder image
          height={300}
          width={300}
          alt=""
          className="rounded-lg"
        />
      </div>
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
        <ScrollButton id="telegram-twist" label="Next Section" />
      </div>
    </div>
  );
};

export default SectionRussianRoulette;
