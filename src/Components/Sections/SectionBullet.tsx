import React from "react";
import Image from "next/image";

const SectionBullet: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-10 md:p-24 bg-[#100d0a] text-slate-200">
      <div>
        <h1 className="text-5xl font-bold mb-8">$BULLET</h1>
        <p>
          $BULLET is a deflationary ERC20 token required to required to place
          bets within the Telegram bot.
        </p>
        <p>All players must hold some amount of $BULLET in order to play.</p>
        <p>
          Players must approve spending of BULLET for the tokens to be withdrawn
          by the bot into the escrow contract (this is done automatically when
          calling connectAndApprove as part of connecting).
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src="/path-to-your-image.png" // Replace with your image path
          height={300}
          width={300}
          alt="$BULLET"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default SectionBullet;
