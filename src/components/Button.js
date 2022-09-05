import React from "react";

const Button = ({ handleClick, text }) => {
  //Button Export
  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
