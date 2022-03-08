import React from "react";
import ImageCard from "./ImageCard";

function Detail({ images, addToFavorites }) {
  const imageCards = images.map((image) => (
    <ImageCard key={image.id} imgObj={image} handleClick={addToFavorites} />
  ));
  return <div id="mainDisplay">{imageCards}</div>;
}

export default Detail;
