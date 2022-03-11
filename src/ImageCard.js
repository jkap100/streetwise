import React from "react";

function ImageCard({ imgObj, handleClick }) {
  return (
    <div>
      <div className="card">
        <img
          // id="main-images"
          id="thumbnail"
          src={imgObj.image}
          alt="graffiti"
        />
      </div>
      <div id="card-bottom">
        <h4>{imgObj.name}</h4>
        <h6>{imgObj.location}</h6>
        <div className="btn-div">
          <button id="fav-btn" onClick={() => handleClick(imgObj)}>
            ⭐️
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
