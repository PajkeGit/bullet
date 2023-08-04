import Image from "next/image";
import React from "react";
import ScrollButton from "../ScrollButton";
import ChatArea from "../ChatArea";

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
        {/* <Header /> */}
        <div className="flex flex-col md:flex-row mt-10 md:mt-0 gap-[2rem] md:gap-[10rem] items-center z-50">
          <div className="text-6xl md:text-8xl flex flex-col items-start font-bold">
            <div className="">FACE THE</div>
            <div className="text-red-500 -translate-x-[5px]">ODDS</div>

            <ScrollButton id="russian-roulette" label="Get Started" />
          </div>
          <ChatArea />
        </div>
        <div className="my-0 flex items-center flex-col">
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
