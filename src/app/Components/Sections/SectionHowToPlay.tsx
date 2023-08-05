import Image from "next/image";
import React from "react";

type Props = {};

const SectionHowToPlay: React.FC<Props> = () => {
  return (
    <section
      id="how-to-play"
      className="flex flex-col p-5 md:p-24 md:px-[200px]"
    >
      <h2 className="text-5xl font-semibold mb-8">How to Play</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm leading-snug mb-4 s">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4 text-left">Command</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4">
                /roulette &lt;barrel-size&gt; &lt;minimum-bet&gt;
              </td>
              <td className="py-2 px-4">
                Eg. /roulette 5 10000 starts a game with 5 shots and a minimum
                bet of 10,000 $BULLET tokens
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4">/join</td>
              <td className="py-2 px-4">
                Use to join when someone else starts a game
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4">/pull</td>
              <td className="py-2 px-4">
                Pull the trigger - must be used at least once per turn
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4">/pass</td>
              <td className="py-2 px-4">
                Pass the revolver to the next player
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-5 md:px-[10px]">
        <div>
          <Image
            src="/howtoplay1.jpg"
            width={320}
            height={350}
            alt=""
            layout="responsive"
          />
        </div>
        <div>
          <Image
            src="/howtoplay2.jpg"
            width={320}
            height={350}
            alt=""
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionHowToPlay;
