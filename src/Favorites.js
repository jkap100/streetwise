import React from "react";
import ImageCard from "./ImageCard";

function Favorites({ favorites, removeFavorites }) {
  const favoritesCard = favorites.map((favObj) => (
    <ImageCard key={favObj.id} imgObj={favObj} handleClick={removeFavorites} />
  ));

  return (
    <div>
      <h1>Favorite Images</h1>
      <div id="favImages">{favoritesCard}</div>
    </div>
  );
}

export default Favorites;
