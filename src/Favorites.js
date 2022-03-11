import React from "react";
import ImageCard from "./ImageCard";

function Favorites({ favorites, removeFavorites }) {
  const favoritesCard = favorites.map((favObj) => (
    <ImageCard key={favObj.id} imgObj={favObj} handleClick={removeFavorites} />
  ));

  return (
    <div id="favorites-container">
      <div id="imageCard">
        <div>
          <h3 className="contribute-header">Your Favorite Pieces</h3>
        </div>
        <div id="favImages">{favoritesCard}</div>
      </div>
    </div>
  );
}

export default Favorites;
