import React from "react";
import {Tile} from '../tile/Tile'

export const TileList = (
 {
  tiles,
  rmHandleSubmit,
  setRemoveId,
  removeId
}
) => {

  return (
    <div>
     {tiles.map((tile, index) => (
      <Tile 
      key={index} tile={tile} id={tile.name || tile.title}
      rmHandleSubmit={rmHandleSubmit}
      tiles={tiles}
      setRemoveId={setRemoveId}
      removeId={removeId}
      />
      ))}
    </div>
  );
};



