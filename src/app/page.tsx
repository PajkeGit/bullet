import React from "react";
import Header from "@/app/Components/Header";
import Image from "next/image";
import { motion } from "framer-motion";
import ChatArea from "@/app/Components/ChatArea";
import Link from "next/link";
import Footer from "@/app/Components/Footer";
import SectionBullet from "@/app/Components/Sections/SectionBullet";
import SectionTokenomics from "@/app/Components/Sections/SectionTokenomics";
import SectionTaxBreakdown from "@/app/Components/Sections/SectionTaxBreakdown";
import SectionHowToConnect from "@/app/Components/Sections/SectionHowToConnect";
import SectionHowToPlay from "@/app/Components/Sections/SectionHowToPlay";
import ScrollButton from "@/app/Components/ScrollButton";
import SectionFeatures from "./Components/Sections/SectionFeatures";
import SectionLinks from "./Components/Sections/SectionLinks";
import SectionRussianRoulette from "./Components/Sections/SectionRussianRoulette";
import SectionTelegramTwist from "./Components/Sections/SectionTelegramTwist";
import SectionContractAddress from "./Components/Sections/SectionContractAddress";
import SectionLanding from "./Components/Sections/SectionLanding";
import StartPlayingPopup from "./Components/StartPlayingPopup/StartPlayingPopup";
import StartPlayingPopupWrap from "./Components/StartPlayingPopup/StartPlayingPopupWrap";

export default function Home() {
  const data = {
    labels: ["Initial Liquidity Pool", "Marketing Wallet"],
    datasets: [
      {
        data: [90, 10],
        backgroundColor: ["#FFCE56", "#36A2EB"],
        hoverBackgroundColor: ["#FFCE56", "#36A2EB"],
      },
    ],
  };

  return (
    <main className="flex flex-col w-screen bg-[#100d0a] text-slate-200">
      <Header />

      <SectionLanding />

      <SectionRussianRoulette />

      <SectionTelegramTwist />

      <SectionBullet />

      <SectionContractAddress />

      <SectionTokenomics />

      <SectionTaxBreakdown />

      <SectionHowToConnect />

      <SectionHowToPlay />

      <SectionFeatures />

      <SectionLinks />

      <Footer />
    </main>
  );
}
