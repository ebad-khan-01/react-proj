import React, { useState } from "react";
import "./RandomColor.css"
function RandomColor() {
  const [color, setColor] = useState("#ffffff"); // Initial color is white

  // Function to generate a random hex color
  const generateColor = () => {
    const randomColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div
      className="color-container"
      style={{ backgroundColor: color, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
    >
      <h1 style={{ color: "#fff", textShadow: "1px 1px 2px black" }}>
        {color}
      </h1>
      <button className="color-btn" onClick={generateColor}>
        Generate Random Color
      </button>
    </div>
  );
}

export default RandomColor;
