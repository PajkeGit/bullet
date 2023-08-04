import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const SectionContractAddress = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center text-sm">
      <div className="w-full text-center">
        Only CA: 0x8ef32a03784c8fd63bbf027251b9620865bd54b6
      </div>
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
  );
};

export default SectionContractAddress;
