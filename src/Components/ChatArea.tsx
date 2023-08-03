import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const ChatArea = (props: Props) => {
  return (
    <div className="z-20">
      <motion.div className="flex flex-col gap-1 items-center justify-center my-20">
        <motion.div
          initial={{ y: "25%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ delay: 0 }}
        >
          <Image
            src="/chat/pass.png"
            width={230}
            height={30}
            alt=""
            className="flex"
          />
        </motion.div>
        <motion.div
          initial={{ y: "25%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Image
            src="/chat/triggerpull.png"
            width={230}
            height={30}
            alt=""
            className="flex"
          />
        </motion.div>
        <motion.div
          initial={{ y: "25%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Image
            src="/chat/shotself.jpg"
            width={230}
            height={30}
            alt=""
            className="flex"
          />
        </motion.div>
        <motion.div
          initial={{ y: "25%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <Image
            src="/chat/lostgame.png"
            width={230}
            height={30}
            alt=""
            className="flex"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ChatArea;
