import React from "react";

type Props = {};

const SectionHowToConnect: React.FC<Props> = () => {
  return (
    <section className="flex flex-col md:flex-row p-8 min-h-screen">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="video-container">
          <div className="video-wrapper w-full rounded-[30px] overflow-hidden">
            <video controls className="video-player max-h-[75vh]">
              <source src={"/connectvideo.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col justify-center p-4 md:p-8">
        <h3 className="text-2xl font-semibold mb-4">How To Connect</h3>
        <p>
          Note: we intend to make the Connecting process a lot more
          user-friendly
        </p>
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
      </div>
    </section>
  );
};

export default SectionHowToConnect;