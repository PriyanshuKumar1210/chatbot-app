import React, { useState, useEffect } from "react";
import "./Options.css";

const Options = (props) => {
  const [showOptions, setShowOptions] = useState(false);
  const [optionsData, setOptionsData] = useState([]);

  const handleMenuClick = () => setShowOptions(true);
  const handleBackClick = () => setShowOptions(false);

  // Fetch data from your API
  useEffect(() => {
    async function fetchOptions() {
      try {
        const response = await fetch("https://your-api.com/options"); // Change this to your API URL
        const data = await response.json();
        setOptionsData(data);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    }

    fetchOptions();
  }, []);

  // Handle clicking a link dynamically
  const handleOptionClick = (actionName) => {
    if (props.actions[actionName]) {
      props.actions[actionName]();
    } else {
      console.warn(`No action found for ${actionName}`);
    }
  };

  return (
    <div className="options-container">
      {!showOptions ? (
        <button className="option-button" onClick={handleMenuClick}>
          Menu
        </button>
      ) : (
        <div className="options-links">
          {optionsData.map((option) => (
            <p
              key={option.id}
              onClick={() => handleOptionClick(option.action)}
              className="option-link"
            >
              {option.id}. {option.label}
            </p>
          ))}
          <p onClick={handleBackClick} className="option-link back-link">
            🔙 Back
          </p>
        </div>
      )}
    </div>
  );
};

export default Options;
