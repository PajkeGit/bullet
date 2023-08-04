import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChartLine, FaRobot, FaTelegram, FaTwitter } from "react-icons/fa";

type Props = {};

const SectionLinks = (props: Props) => {
  return (
    <div
      id="features"
      className="grid grid-cols-1 md:grid-cols-2 w-screen justify-center md:flex-col mx-auto items-center gap-20 text-center p-10 md:p-24 bg-[#100d0a] text-slate-200"
    >
      <div className="flex flex-col gap-10 h-[30vh] items-center">
        <div className="text-5xl">Links</div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 items-center">
            <FaTwitter />
            Twitter
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FaTelegram />
            Telegram
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FaRobot />
            Telegram bot
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FaChartLine />
            Dextools
          </div>
        </div>
      </div>
      <section className="flex flex-col gap-10 h-[30vh]">
        <h2 className="text-5xl">Contracts</h2>
        <div className="">
          <table className="border border-gray-200 text-sm leading-snug">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-2 px-4 text-left">Contract</th>
                <th className="py-2 px-4 text-left">Address</th>
                <th className="py-2 px-4 text-left">Etherscan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 px-4 text-left">$BULLET contract</td>
                <td className="py-2 px-4 text-left">
                  0x8ef32a03784c8Fd63bBf027251b9620865bD54B6
                </td>
                <td className="py-2 px-4 text-left">
                  <a
                    target="_blank"
                    href="https://etherscan.io/address/0x8ef32a03784c8Fd63bBf027251b9620865bD54B6"
                  >
                    <Image
                      src="/logos/etherscan.png"
                      width={24}
                      height={24}
                      alt="Etherscan"
                    />
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 px-4 text-left">Escrow contract</td>
                <td className="py-2 px-4 text-left">
                  0x4d2E8a0ebC4BB3BE7F3d65426F6a0C5836635DBE
                </td>
                <td className="py-2 px-4 text-left">
                  <a
                    target="_blank"
                    href="https://etherscan.io/address/0x4d2E8a0ebC4BB3BE7F3d65426F6a0C5836635DBE"
                  >
                    <Image
                      src="/logos/etherscan.png"
                      width={24}
                      height={24}
                      alt="Etherscan"
                    />
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 px-4 text-left">Bot/Deployer</td>
                <td className="py-2 px-4 text-left">
                  0x691309814f4F74942db62E9FD927F543aBd84D16
                </td>
                <td className="py-2 px-4">
                  <a
                    target="_blank"
                    href="https://etherscan.io/address/0x691309814f4F74942db62E9FD927F543aBd84D16"
                  >
                    <Image
                      src="/logos/etherscan.png"
                      width={24}
                      height={24}
                      alt="Etherscan"
                    />
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 px-4 text-left">Revenue Share Wallet</td>
                <td className="py-2 px-4 text-left">
                  0x171d311eAcd2206d21Cb462d661C33F0eddadC03
                </td>
                <td className="py-2 px-4">
                  <a
                    target="_blank"
                    href="https://etherscan.io/address/0x171d311eAcd2206d21Cb462d661C33F0eddadC03"
                  >
                    <Image
                      src="/logos/etherscan.png"
                      width={24}
                      height={24}
                      alt="Etherscan"
                    />
                  </a>
                </td>
              </tr>
              {/* Repeat for other contracts */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default SectionLinks;
