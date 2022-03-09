import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Favorites from "./Favorites";
import ContributeForm from "./ContributeForm";
import Detail from "./Detail";

function Home() {
  const [page, setPage] = useState("/");

  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const baseUrl = "http://localhost:8000";
    fetch(baseUrl + "/images")
      .then((res) => res.json())
      .then(setImages);
  }, []);

  const removeFavorites = (images) => {
    // console.log("image: ", images);
    setFavorites(favorites.filter((favObj) => favObj !== images));
  };

  function onCreateProject(newImage) {
    setImages((images) => [...images, newImage]);
  }

  const addToFavorites = (image) => {
    console.log("image: ", image);
    if (!favorites.includes(image)) {
      setFavorites([...favorites, image]);
    }
    // fetch("http://localhost:8000/images/favorites", {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(setFavorites),
    // })
    //   .then((res) => res.json())
    //   .then(console.log);
  };

  return (
    <div>
      <NavBar onChangePage={setPage} />
      <Switch>
        <Route path="/favorites">
          <Favorites favorites={favorites} removeFavorites={removeFavorites} />
        </Route>
        <Route path="/contribute">
          <ContributeForm images={images} onCreateProject={onCreateProject} />
        </Route>
        <Route exact path="/">
          <Detail images={images} addToFavorites={addToFavorites} />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
