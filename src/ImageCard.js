import React from "react";

function ImageCard({ imgObj, handleClick }) {
  return (
    <div className="card">
      <img
        onClick={() => handleClick(imgObj)}
        id="thumbnail"
        src={imgObj.image}
        alt="graffiti"
      />
      <h4>{imgObj.name}</h4>
      <h6>{imgObj.location}</h6>
    </div>
  );
}

export default ImageCard;
