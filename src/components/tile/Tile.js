import React from "react";

export const Tile = ({
  value
}) => {
  return (
    <div className="tile-container">
      {
        Object.values(value).map((data, index) => 
        <p key={index} className={ `${index === 0 ? "tile-title": "" } tile`}>
        {data} 
        </p>
        )}
    </div>
  );
};