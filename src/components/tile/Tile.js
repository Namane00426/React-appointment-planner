import React from "react";

export const Tile = ({
  value,
  rmHandleSubmit
}) => {

  const rmSubmit = (e) => {
    rmHandleSubmit(e.target.key);
  }

  return (
    <div className="tile-container">
      {
        Object.values(value).map((data, index) => 
        <p key={index} className={ `${index === 0 ? "tile-title": "" } tile`}>
        {data}
        </p>
        )}
        <button type='button' key={value.index}
        onClick={rmSubmit}>X</button>
    </div>
  );
};