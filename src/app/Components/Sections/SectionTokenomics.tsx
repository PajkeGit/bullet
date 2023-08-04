import React from "react";
import { PieChart } from "../PieChart";

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
    <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen gap-10 p-10 md:p-24 bg-[#100d0a] text-slate-200 ">
      <div className="flex justify-center">
        <PieChart />
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-8">Tokenomics</h1>
        <div>Stealth Launch</div>
        <p>90% - Initial Liquidity Pool</p>
        <p>10% - Marketing Wallet</p>
      </div>
    </div>
  );
};

export default SectionTokenomics;
