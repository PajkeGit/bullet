import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaHandshake } from "react-icons/fa";
import { BiMath } from "react-icons/bi";

type Props = {};

const SectionFeatures = (props: Props) => {
  return (
    <div>
      <div
        id="features"
        className="flex flex-col w-screen justify-center md:flex-col mx-auto items-center gap-20 text-center p-10 md:p-24 bg-[#100d0a] text-slate-200"
      >
        <div className="md:ml-10 flex items-center flex-col">
          <h1 className="text-5xl font-bold mb-4">Features</h1>
          <div className="px-10 w-[380px] md:w-[50vw] ">
            {`We are proud to boast that we have a fully functioning escrow
            contract as part of the bot, and that the games are provably fair.
            We won't bore you with the details right here, but click either of
            the links below to be sent to our GitBook where all the technical
            stuff is broken down for you :)`}
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between items-center mt-20 gap-20">
            <div className="flex flex-col gap-4">
              <div className="text-3xl">Escrow Contract</div>
              <FaHandshake className="w-[200px] h-[200px]" />
              <Link
                className="pink-700 rounded-md bg-slate-700 hover:bg-slate-600 px-3 py-1 mt-2 flex flex-row gap-1 items-center justify-center font-bold text-sm"
                href="https://bullet-game.gitbook.io/bullet-game/architecture/escrow"
                target="_blank"
              >
                <Image
                  src="/logos/gitbook.svg"
                  height={25}
                  width={25}
                  alt=""
                  className="-translate-y-0"
                />
                <div>Gitbook</div>
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-3xl">Provably Fair</div>
              <BiMath className="w-[200px] h-[200px]" />
              <Link
                className="pink-700 rounded-md bg-slate-700 hover:bg-slate-600 px-3 py-1 mt-2 flex flex-row gap-1 items-center justify-center font-bold text-sm"
                href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x8ef32a03784c8fd63bbf027251b9620865bd54b6"
                target="_blank"
              >
                <Image
                  src="/logos/gitbook.svg"
                  height={25}
                  width={25}
                  alt=""
                  className="-translate-y-0"
                />
                <div>Gitbook</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFeatures;
