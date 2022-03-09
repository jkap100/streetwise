import React from "react";

function ImageCard({ imgObj, handleClick }) {
  return (
    <div className="card">
      <img
        onClick={() => handleClick(imgObj)}
        onMouseEnter={() => {
          console.log("Event:MouseEnter");
        }}
        onMouseLeave={() => {
          console.log("Event:MouseLeave");
        }}
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
