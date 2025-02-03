import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import SortBar from "./components/SortBar";
import FilterBar from "./components/FilterBar";
import "./App.css";
import BotSpecs from "./components/BotSpecs";

const App = () => {
  const [bots, setBots] = useState([]);
  const [myArmy, setMyArmy] = useState([]);
  const [sortOrder, setSortOrder] = useState("health");
  const [filterClass, setFilterClass] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  // Fetching bots data from my db.json
  useEffect(() => {
    const fetchBots = async () => {
      const response = await fetch("http://localhost:8001/bots");
      const data = await response.json();
      setBots(data);
    };
    fetchBots();
  }, []);

  // Sort bots based on selected stat
  const sortedBots = [...bots].sort((a, b) => b[sortOrder] - a[sortOrder]);

  // Filter bots by selected class
  const filteredBots = sortedBots.filter(
    (bot) => filterClass.length === 0 || filterClass.includes(bot.bot_class)
  );

  // Handle enlistment of a bot (only one per class)
  const enlistBot = (bot) => {
    if (myArmy.some((armyBot) => armyBot.bot_class === bot.bot_class)) {
      alert("You can only enlist one bot from each class.");
      return;
    }
    setMyArmy([...myArmy, bot]);
  };

  // Handle removal of bot from army
  const releaseBot = (bot) => {
    setMyArmy(myArmy.filter((armyBot) => armyBot.id !== bot.id));
  };

  // Handle bot deletion from backend
  const dischargeBot = async (bot) => {
    await fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    });
    setMyArmy(myArmy.filter((armyBot) => armyBot.id !== bot.id));
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <SortBar setSortOrder={setSortOrder} />
      <FilterBar filterClass={filterClass} setFilterClass={setFilterClass} />

      <div className="main">
        {selectedBot ? (
          <BotSpecs
            bot={selectedBot}
            onEnlist={(bot) => enlistBot()}
            onBack={() => setSelectedBot(null)}
            enlistedBots={myArmy}
            onDischarge={releaseBot}
            onDelete={dischargeBot}
          />
        ) : (
          <>
            <BotCollection bots={filteredBots} enlistBot={enlistBot} />

            <YourBotArmy
              army={myArmy}
              releaseBot={releaseBot}
              dischargeBot={dischargeBot}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
