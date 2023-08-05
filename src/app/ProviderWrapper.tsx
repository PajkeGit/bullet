"use client";

import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";
import React, { ReactNode } from "react";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
});

type Props = {
  children: ReactNode;
};

const ProviderWrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <WagmiConfig config={config}>{children}</WagmiConfig>
    </>
  );
};

export default ProviderWrapper;
