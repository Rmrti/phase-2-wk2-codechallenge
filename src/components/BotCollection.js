import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots, enlistBot }) => {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} enlistBot={enlistBot} />
      ))}
    </div>
  );
};

export default BotCollection;
