import React from "react";
import ImageCard from "./ImageCard";

function Favorites({ favorites }) {
  const favoritesCard = favorites.map((favObj) => (
    <ImageCard key={favObj.id} imgObj={favObj} />
  ));

  return (
    <div>
      <h1>Favorite Images</h1>
      <div id="favImages">{favoritesCard}</div>
    </div>
  );
}

export default Favorites;
