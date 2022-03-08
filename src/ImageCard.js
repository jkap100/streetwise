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
    </div>
  );
}

export default ImageCard;
