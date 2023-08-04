"use client";

import React from "react";

type Props = {};

const Header = (props: Props) => {
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed w-screen px-5 bg-[#100d0a] p-2 z-[100] font-bold flex justify-between items-center">
      <div className="flex flex-row gap-2 font-normal h-[100%] items-center">
        <div className="font-bold text-2xl">BULLET GAME</div>
        <div className=" flex-row h-[100%] items-center text-base justify-center gap-3 ml-10 hidden md:flex">
          <button
            className="hover:opacity-75"
            onClick={() => {
              handleClick("russian-roulette");
            }}
          >
            The Game
          </button>
          <button
            className="hover:opacity-75"
            onClick={() => {
              handleClick("bullet");
            }}
          >
            Bullet
          </button>
          <button
            className="hover:opacity-75"
            onClick={() => {
              handleClick("how-to-connect");
            }}
          >
            Connect
          </button>
          <button
            className="hover:opacity-75"
            onClick={() => {
              handleClick("how-to-play");
            }}
          >
            Play
          </button>
          <button
            className="hover:opacity-75"
            onClick={() => {
              handleClick("features");
            }}
          >
            Features
          </button>
        </div>
      </div>
      <button
        className="bg-red-800 py-1 px-2 rounded-md hover:bg-red-700"
        onClick={() => {
          handleClick("russian-roulette");
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default Header;
