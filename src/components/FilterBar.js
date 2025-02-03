import React from "react";

const FilterBar = ({ setFilterClass }) => {
  const classes = [
    "Support",
    "Medic",
    "Assault",
    "Defender",
    "Captain",
    "Witch",
  ];

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterClass(value ? [value] : []);
  };

  return (
    <div className="filter-bar">
      <select onChange={handleFilterChange}>
        <option value="">Filter by Class</option>
        {classes.map((botClass) => (
          <option key={botClass} value={botClass}>
            {botClass}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
