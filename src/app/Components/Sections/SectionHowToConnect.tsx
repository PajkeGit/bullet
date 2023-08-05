import React from "react";
import ScrollButton from "../ScrollButton";
import StartPlayingPopupWrap from "../StartPlayingPopup/StartPlayingPopupWrap";

type Props = {};

const SectionHowToConnect: React.FC<Props> = () => {
  return (
    <section
      id="how-to-connect"
      className="flex flex-col-reverse md:flex-row p-8 min-h-screen"
    >
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="video-container">
          <div className="video-wrapper w-full rounded-[30px] overflow-hidden flex flex-col items-center">
            <video controls className="video-player max-h-[75vh]">
              <source src={"/connectvideo.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="flex md:hidden">
              <ScrollButton id="how-to-play" label="How to play" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col justify-center p-4 md:p-8">
        <h3 className="text-5xl font-semibold mb-4">How To Connect</h3>

        <ol className="list-decimal list-inside mt-4">
          <li>
            {`Message @bullet_game_bot on Telegram with the message "/connect" -
            you'll be given a secret number`}
          </li>
          <li>
            Send a transaction to the connectAndApprove function on the $BULLET
            contract. Use the number given by the bot to fill out the secret
            field of the function. <a href="URL_HERE">ETHERSCAN LINK</a>
          </li>
          <li>
            {`Copy the transaction hash and reply to the bot. If the bot verifies
            that the transaction was sent with the right secret, it will link
            the sender's address to your Telegram account.`}
          </li>
          <li>You are now connected and can use your $BULLET to bet!</li>
        </ol>
        <div className="hidden md:flex">
          <ScrollButton id="how-to-play" label="How to play" />
        </div>
        {/* <StartPlayingPopupWrap /> */}
      </div>
    </section>
  );
};

export default SectionHowToConnect;
