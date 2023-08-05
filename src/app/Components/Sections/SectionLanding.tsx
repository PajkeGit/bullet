import Image from "next/image";
import React from "react";
import ScrollButton from "../ScrollButton";
import ChatArea from "../ChatArea";
import "./SomeCss.css";

type Props = {};

const SectionLanding = (props: Props) => {
  return (
    <div className="">
      <Image className="opacity-10" src="/herobg.png" layout="fill" alt="" />
      <div className="absolute bottom-0 w-full">
        <GradientDiv />
      </div>
      <div className="z-50 w-full min-h-screen flex flex-col items-center py-5 justify-between">
        <div></div>

        <div className="flex flex-col md:flex-row mt-10 md:mt-0 gap-[2rem] md:gap-[10rem] items-center z-50">
          <div className="text-6xl md:text-8xl flex flex-col items-start ">
            <div className="font-bold">FACE THE</div>
            <div className="text-red-500 -translate-x-[5px] font-bold text-shine">
              ODDS
            </div>

            <ScrollButton id="russian-roulette" label="Get Started" />
          </div>
          <ChatArea />
        </div>
        <div className="my-0 flex items-center flex-col">
          <div className="flex flex-row gap-1 py-2 z-50">
            <a
              href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x8ef32a03784c8fd63bbf027251b9620865bd54b6"
              target="_blank"
            >
              <Image src="/logos/uniswap.png" width={24} height={24} alt="" />
            </a>
            <a
              href="https://www.dextools.io/app/en/ether/pair-explorer/0x0d0a1767da735f725f41c4315e072c63dbc6ab3d"
              target="_blank"
            >
              <Image
                src="/logos/dextools.png"
                width={22}
                height={22}
                alt=""
                className="translate-y-[3px] brightness-125 saturate-150"
              />
            </a>
          </div>
          <div className="z-50 text-slate-300 text-sm">
            0x8ef32a03784c8fd63bbf027251b9620865bd54b6
          </div>
        </div>
      </div>
    </div>
  );
};

const GradientDiv: React.FC = () => {
  return (
    <div className="h-[100px] w-full bg-gradient-to-t from-[#100d0a] via-transparent to-transparent pointer-events-none" />
  );
};

export default SectionLanding;
