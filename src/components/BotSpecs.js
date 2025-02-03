import React, { useState } from "react";

const BotSpecs = ({
  bot,
  onEnlist,
  onBack,
  enlistedBots,
  onDischarge,
  onDelete,
}) => {
  const [isEnlisted, setIsEnlisted] = useState(false);

  const handleEnlist = () => {
    if (
      !isEnlisted &&
      !enlistedBots.some(
        (enlistedBot) => enlistedBot.bot_class === bot.bot_class
      )
    ) {
      setIsEnlisted(true);
      onEnlist(bot); // Add bot to army
    }
  };

  const handleDischarge = () => {
    setIsEnlisted(false);
    onDischarge(bot); // Remove bot from army
  };

  const handleDelete = () => {
    onDelete(bot.id); // Delete bot
  };

  return (
    <div className="bot-specs">
      <div className="bot-specs-header">
        <button className="back-button" onClick={onBack}>
          Back to Collection
        </button>
      </div>
      <div className="bot-details">
        <img src={bot.avatar_url} alt={bot.name} />
        <h2>{bot.name}</h2>
        <p>
          <strong>Health:</strong> {bot.health}
        </p>
        <p>
          <strong>Damage:</strong> {bot.damage}
        </p>
        <p>
          <strong>Armor:</strong> {bot.armor}
        </p>
        <p>
          <strong>Bot Class:</strong> {bot.bot_class}
        </p>
        <p>
          <strong>Catchphrase:</strong> {bot.catchphrase}
        </p>
      </div>
      <div className="bot-actions">
        {isEnlisted ? (
          <div>
            <button onClick={handleDischarge} className="discharge-btn">
              Discharge
            </button>
            <button onClick={handleDelete} className="delete-btn">
              Delete
            </button>
          </div>
        ) : (
          <button onClick={handleEnlist} className="enlist-btn">
            Enlist
          </button>
        )}
      </div>
    </div>
  );
};

export default BotSpecs;
