import React from "react";

function ImageCard({ imgObj, handleClick }) {
  return (
    <div className="card">
      <img
        onClick={() => handleClick(imgObj)}
        id="thumbnail"
        text="Added to Favorites!"
        src={imgObj.image}
        alt="graffiti"
      />
      <h4>{imgObj.name}</h4>
      <h6>{imgObj.location}</h6>
    </div>
  );
}

export default ImageCard;
