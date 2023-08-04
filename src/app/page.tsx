"use client";

import React from "react";
import Header from "@/Components/Header";
import Image from "next/image";
import { motion } from "framer-motion";
import ChatArea from "@/Components/ChatArea";
import Link from "next/link";
import Footer from "@/Components/Footer";
import {
  SectionRussianRoulette,
  SectionTelegramTwist,
} from "@/Components/TheGameSections";
import SectionBullet from "@/Components/SectionBullet";
import SectionTokenomics from "@/Components/SectionTokenomics";
import SectionTaxBreakdown from "@/Components/SectionTaxBreakdown";

export default function Home() {
  const handleGetStartedClick = () => {
    document
      .getElementById("russian-roulette")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col bg-[#100d0a] text-slate-200">
      <div className="">
        <Image className="opacity-10" src="/herobg.png" layout="fill" alt="" />
        <div className="absolute bottom-0 w-full">
          <GradientDiv />
        </div>
        <div className="z-50 w-full min-h-screen flex flex-col items-center py-5 justify-between">
          <Header />
          <div className="flex flex-col md:flex-row mt-10 md:mt-0 gap-[2rem] md:gap-[10rem] items-center z-50">
            <div className="text-6xl md:text-8xl flex flex-col items-start font-bold">
              <div className="">FACE THE</div>
              <div className="text-red-500 -translate-x-[5px]">ODDS</div>

              <div className="flex gap-5">
                <button
                  onClick={handleGetStartedClick}
                  className="text-xl bg-red-800 hover:bg-red-700 rounded-lg px-5 py-2 mt-5 z-50"
                >
                  Get Started
                </button>
              </div>
            </div>
            <ChatArea />
          </div>
          <div className="my-0 flex items-center flex-col">
            <div className="z-50 text-slate-300">
              0x8ef32a03784c8fd63bbf027251b9620865bd54b6
            </div>
            <div className="">
              Brought to you by{" "}
              <a
                href="https://twitter.com/jimmyash95"
                target="_blank"
                className="text-red-500 hover:text-red-400"
              >
                Mr Ash
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[100vh/2]"></div>
      <SectionRussianRoulette />
      <SectionTelegramTwist />
      <SectionBullet />
      <div className="w-full flex flex-col items-center">
        <div>Only CA: 0x8ef32a03784c8fd63bbf027251b9620865bd54b6</div>
        <div className="flex flex-row">
          <div className="flex gap-5">
            <Link
              className="pink-700 rounded-md bg-pink-700 hover:bg-pink-500 px-3 py-2 mt-2 flex flex-row gap-1 items-center justify-center font-bold"
              href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x8ef32a03784c8fd63bbf027251b9620865bd54b6"
              target="_blank"
            >
              <Image
                src="/logos/uniswapw.png"
                height={25}
                width={25}
                alt=""
                className="-translate-y-1"
              />
              <div>Uniswap</div>
            </Link>
            <Link
              className="pink-700 rounded-md bg-blue-700 hover:bg-blue-600 px-3 py-2 mt-2 flex flex-row gap-1 items-center justify-center font-bold"
              href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x8ef32a03784c8fd63bbf027251b9620865bd54b6"
              target="_blank"
            >
              <Image
                src="/logos/dextools.png"
                height={25}
                width={25}
                alt=""
                className="-translate-y-0"
              />
              <div>Dextools</div>
            </Link>
          </div>
        </div>
      </div>
      <SectionTokenomics />
      <SectionTaxBreakdown />
      <SectionHowToPlay />
      <Footer />
    </main>
  );
}

const GradientDiv: React.FC = () => {
  return (
    <div className="h-[100px] w-full bg-gradient-to-t from-[#100d0a] via-transparent to-transparent pointer-events-none" />
  );
};

const SectionHowToPlay: React.FC = () => {
  return (
    <div
      id="how-to-play"
      className="flex flex-col md:flex-row justify-between h-full p-10 md:p-24 bg-[#100d0a] text-slate-200"
    >
      <div className="">
        <h1 className="text-5xl font-bold mb-8">Bullet Game</h1>
        <p>Spectate games from the main channel</p>

        <section className="mb-12 flex flex-col gap">
          <h2 className="text-3xl font-semibold mt-5">Buying BULLET</h2>
          <p>
            Welcome! Bullet game is a telegram bot that lets you play russian
            roulette with your friends on Telegram.
          </p>
          <p>BULLET is required to play.</p>{" "}
          <div className="flex">
            <Link
              className="pink-700 rounded-md bg-pink-700 hover:bg-pink-500 px-3 py-2 mt-2 flex flex-row gap-1 items-center justify-center font-bold"
              href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x8ef32a03784c8fd63bbf027251b9620865bd54b6"
              target="_blank"
            >
              <Image
                src="/logos/telegramwhite.png"
                height={25}
                width={25}
                alt=""
                className="-translate-y-1"
              />
              <div>Uniswap</div>
            </Link>
          </div>
        </section>

        <div className="mb-12">
          <div className="text-3xl font-semibold">Get Started Playing</div>
          <div>
            <div></div>Dm the bullet telegram bot /connect{" "}
            <a href="https://t.me/bullet_game_bot" target="_blank"></a>
          </div>
          <div>Follow the instructions</div>
          <div>Congrats, you are ready to start playing!</div>
          <div className="flex">
            <Link
              className="pink-700 rounded-md bg-[#0088CC] hover:bg-[#05a0ed] px-3 py-2 mt-2 flex flex-row gap-1 items-center justify-center font-bold"
              href="https://t.me/bullet_game_bot"
              target="_blank"
            >
              <Image
                src="/logos/telegram.png"
                height={25}
                width={25}
                alt=""
                className="-translate-y-[0.5]"
              />
              Bullet Game Bot
            </Link>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold">Commands</h2>
          <ul>
            <li className="flex flex-col gap-2">
              <div>
                <code>/connect</code> {`- Connect your wallet`}
              </div>
              <div>
                <code>/roulette</code>{" "}
                {`<barrel-size> <minimum-bet> - Starts a game with barrel size and minimum bet.`}
              </div>
              <div>
                <code>/join</code> -{" "}
                {`When someone starts a game, use this command to join`}
              </div>
            </li>
            {/* List all commands with descriptions */}
          </ul>
        </section>
      </div>
      <motion.div>
        <Image
          src="/telegram.png"
          height={300}
          width={300}
          alt=""
          className="rounded-lg"
        />
      </motion.div>
    </div>
  );
};
