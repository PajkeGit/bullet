import React from "react";
import { PieChart } from "../PieChart";
import ScrollButton from "../ScrollButton";

const SectionTokenomics: React.FC = () => {
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
    <div
      id="tokenomics"
      className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen gap-10 p-10 md:p-24 bg-[#100d0a] text-slate-200 "
    >
      <div className="flex justify-center h-[70%] items-center">
        <PieChart />
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-8">Tokenomics</h1>
        <div>Stealth Launch</div>
        <p>90% - Initial Liquidity Pool</p>
        <p>10% - Marketing Wallet</p>
        <ScrollButton id="how-to-connect" label="Start Playing" />
      </div>
    </div>
  );
};

export default SectionTokenomics;
