import React  from "react";


export const Tile = ({
  tile,
  id,
  rmHandleSubmit,
  setRemoveId,
  removeId
}) => {

  const onSubmit = (e) => {
    setRemoveId(id);
    
    rmHandleSubmit(removeId);
  }

  

  return (
    <div className="tile-container">
      {
        Object.values(tile).map((data, index) => 
        <p id={id} key={index} className={ `${index === 0 ? "tile-title": "" } tile`}>
        {data}
        </p>
        )}
        <button type='button' id={id}
        onClick={onSubmit}>X</button>
    </div>
  );
};