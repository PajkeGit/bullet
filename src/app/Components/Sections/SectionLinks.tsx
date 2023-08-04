import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChartLine, FaRobot, FaTelegram, FaTwitter } from "react-icons/fa";

type Props = {};

const SectionLinks = (props: Props) => {
  return (
    <div
      id="links"
      className="flex flex-col lg:flex-row w-screen justify-center mx-auto items-center gap-20 text-center p-10 md:p-24 bg-[#100d0a] text-slate-200"
    >
      <div className="flex flex-col gap-10 h-[30vh] items-center">
        <div className="text-5xl">Links</div>
        <div className="flex flex-row lg:flex-col gap-2">
          <a
            href="https://twitter.com"
            target="_blank"
            className="pink-700 rounded-md bg-[#00acee] hover:brightness-110 px-3 py-2 flex flex-row gap-1 items-center justify-center font-bold"
          >
            <FaTwitter />
            <div>Twitter</div>
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            className="pink-700 rounded-md bg-[#0088cc] hover:brightness-110 px-3 py-2 flex flex-row gap-1 items-center justify-center font-bold"
          >
            <FaTelegram />
            <div>Telegram</div>
          </a>
          <a
            href="https://your-telegram-bot-url.com"
            target="_blank"
            className="pink-700 rounded-md bg-[#0088cc] hover:brightness-110 px-3 py-2 flex flex-row gap-1 items-center justify-center font-bold"
          >
            <FaRobot />
            <div>Telegram bot</div>
          </a>
          <a
            className="pink-700 rounded-md bg-blue-700 hover:bg-blue-600 px-3 py-2 flex flex-row gap-1 items-center justify-center font-bold"
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
          </a>
          <a
            className="pink-700 rounded-md bg-pink-700 hover:bg-pink-500 px-3 py-2 flex flex-row gap-1 items-center justify-center font-bold"
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
          </a>
        </div>
      </div>
      <section className="flex flex-col gap-10 h-[30vh]">
        <h2 className="text-5xl">Contracts</h2>
        <div className="">
          <table className="border border-gray-200 text-sm">
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
