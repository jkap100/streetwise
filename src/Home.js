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

  // const removeFavorites = (images) => {
  //   // console.log('bot: ', bot);

  //   setFavorites(favorites.filter((favObj) => favObj !== images));
  // };

  const addToFavorites = (image) => {
    console.log("image: ", image);
    if (!favorites.includes(image)) {
      setFavorites([...favorites, image]);
    }
  };

  return (
    <div>
      <NavBar onChangePage={setPage} />
      <Switch>
        <Route path="/favorites">
          <Favorites favorites={favorites} />
        </Route>
        <Route path="/contribute">
          <ContributeForm />
        </Route>
        <Route exact path="/">
          <Detail images={images} addToFavorites={addToFavorites} />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>

      {/* <Detail images={images} addToFavorites={addToFavorites} /> */}
      {/* <Favorites favorites={favorites} /> */}
      {/* <ContributeForm /> */}
    </div>
  );
}

export default Home;
