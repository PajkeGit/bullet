import React from "react";
import Image from "next/image";
import ScrollButton from "../ScrollButton";

const SectionBullet: React.FC = () => {
  return (
    <div
      id="bullet"
      className="flex flex-col lg:flex-row items-center mx-auto gap-10 p-10 md:p-24 bg-[#100d0a] text-slate-200"
    >
      <div className="w-[300px] md:w-[600px]">
        <h1 className="text-5xl font-bold mb-8">$BULLET</h1>
        <p>
          $BULLET is a deflationary ERC20 token required to place bets within
          the Telegram bot.
        </p>
        <p>All players must hold some amount of $BULLET in order to play.</p>
        <p>
          Players must approve spending of BULLET for the tokens to be withdrawn
          by the bot into the escrow contract (this is done automatically when
          calling connectAndApprove as part of connecting).
        </p>
        <ScrollButton id="tokenomics" label="Tokenomics" />
      </div>
      <div className="flex justify-center w-[300px] md:w-[400px]">
        <Image
          src="/roulettespin.gif" // Replace with your image path
          height={300}
          width={300}
          layout="responsive"
          alt="$BULLET"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default SectionBullet;
