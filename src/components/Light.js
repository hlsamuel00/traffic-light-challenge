import React from "react";

const Light = ({ color, lit }) => {
  // className conditional logic
  let className = `light ${color === lit ? color : "inactive"}`;

  // Light Export
  return (
    <div>
      <div className={className}></div>
    </div>
  );
};

export default Light;
