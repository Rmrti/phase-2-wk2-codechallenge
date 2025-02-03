import React from "react";

const SortBar = ({ setSortOrder }) => {
  return (
    <div className="sort-bar">
      <button onClick={() => setSortOrder("health")}>Sort by Health</button>
      <button onClick={() => setSortOrder("damage")}>Sort by Damage</button>
      <button onClick={() => setSortOrder("armor")}>Sort by Armor</button>
    </div>
  );
};

export default SortBar;
