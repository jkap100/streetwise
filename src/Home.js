import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Favorites from "./Favorites";
import ContributeForm from "./ContributeForm";
import Detail from "./Detail";
// import PopUp from "./PopUp";

function Home() {
  const [page, setPage] = useState("/");

  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [isOpen, setIsOpen] = useState(false);

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
  };
  const filteredPhotos = images.filter((image) => {
    return (
      image.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const filteredFaves = favorites.filter((favorite) => {
    return (
      favorite.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      favorite.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  // };

  //   return (
  //     <div>
  //       <input type="button" value="Click to Open Popup" onClick={togglePopup} />
  //       <p>Added to Favorites!</p>
  //       {isOpen && (
  //         <Popup
  //           content={
  //             <>
  //               <b>Design your Popup</b>
  //               <p>
  //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
  //                 in reprehenderit in voluptate velit esse cillum dolore eu fugiat
  //                 nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  //                 sunt in culpa qui officia deserunt mollit anim id est laborum.
  //               </p>
  //               <button>Test button</button>
  //             </>
  //           }
  //           handleClose={togglePopup}
  //         />
  //       )}
  //     </div>
  //   );
  // }

  return (
    <div>
      <NavBar
        onChangePage={setPage}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Switch>
        <Route path="/favorites">
          <Favorites
            favorites={filteredFaves}
            removeFavorites={removeFavorites}
          />
        </Route>
        <Route path="/contribute">
          <ContributeForm images={images} onCreateProject={onCreateProject} />
        </Route>
        <Route exact path="/">
          <Detail images={filteredPhotos} addToFavorites={addToFavorites} />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}
export default Home;
