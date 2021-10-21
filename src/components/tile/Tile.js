import React from "react";

export const Tile = ({
  value,
  rmIndex,
  rmHandleSubmit
}) => {
  return (
    <div className="tile-container">
      {
        Object.values(value).map((data, index) => 
        <p key={index} className={ `${index === 0 ? "tile-title": "" } tile`}>
        {data}
        </p>
        )}
        <button type='button'
        onClick={rmHandleSubmit(rmIndex)}>X</button>
    </div>
  );
};