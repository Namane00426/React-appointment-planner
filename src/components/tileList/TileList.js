import React from "react";
import {Tile} from '../tile/Tile'

export const TileList = (
 {tiles,
  rmHandleSubmit,
  rmIndex
}
) => {

  return (
    <div>
     {tiles.map((value, index) => (
      <Tile 
      key={index} value={value} 
      rmHandleSubmit={rmHandleSubmit}
      rmindex={rmIndex}/>
      ))}
    </div>
  );
};



