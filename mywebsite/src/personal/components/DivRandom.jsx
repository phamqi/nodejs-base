import React from "react";

DivRandom.propTypes = {};

function DivRandom({ width, color, margin, opacity }) {
  const arrayColor = [
    "rgb(208, 69, 62)",
    "rgb(255, 184, 108)",
    "rgb(139, 197, 133)",
    "rgb(202, 89, 62 )",
    "rgb(139, 195, 74)",
    "rgb(246, 246, 244)",
    "rgb(220, 237, 200)",
  ];
  const colorHex = arrayColor[color];
  const divStyles = {
    backgroundColor: `${colorHex}`,
    width: `${width}vw`,
    marginLeft: `${margin ? 20 : 0}px`,
    opacity: `${opacity}`,
  };
  return (
    <li>
      <div style={divStyles}></div>
    </li>
  );
}

export default DivRandom;
