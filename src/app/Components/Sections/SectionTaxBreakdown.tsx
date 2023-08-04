import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const SectionTaxBreakdown = (props: Props) => {
  return (
    <div
      id="tax-breakdown"
      className="flex flex-col md:flex-row gap-20 w-full items-center justify-center"
    >
      <div className="flex flex-col gap-2">
        <div className="text-4xl">Taxes Breakdown</div>
        <div className="flex flex-row gap-2 justify-between px-5 border py-3">
          <div className="">
            <div>5% Buy</div>
            <div>5% Sell</div>
          </div>
          <div>
            <div>2% auto LP</div>
            <div>2% Tx fee gas</div>
            <div>1% Rev share</div>
          </div>
        </div>
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
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-4xl">Prize Pool Breakdown</div>
        <div className="flex flex-row gap-2 justify-between px-5 border py-3 text-center">
          <div className="">
            <div>1% burned</div>
            <div>9% rev share</div>
            <div>90% split appropriately amongst winners</div>
          </div>
        </div>
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
          <div>DexTools</div>
        </Link>
      </div>
    </div>
  );
};

export default SectionTaxBreakdown;
