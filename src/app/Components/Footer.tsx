import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-screen text-slate-400 p-4 text-sm items-center flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-row gap-3">
          <a href="https://t.me/BulletGameDarkPortal" target="_blank">
            <Image src="/logos/telegram.png" height={20} width={20} alt="" />
          </a>
          <a href="https://twitter.com/BulletGameERC" target="_blank">
            <Image src="/logos/x.png" height={20} width={20} alt="" />
          </a>
        </div>
        <div>© 2023 BULLET. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
