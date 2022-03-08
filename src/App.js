// import React, { useState } from "react";
// import { Redirect, Switch, Route } from "react-router-dom";
// import NavBar from "./NavBar";
import Home from "./Home";
// import Favorites from "./Favorites";
// import ContributeForm from "./ContributeForm";

function App() {
  // const [page, setPage] = useState("/");

  return (
    <div>
      <Home />
      {/* <NavBar onChangePage={setPage} />
        <Switch>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/contribute">
            <ContributeForm />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch> */}

      {/* <NavBar onChangePage={setPage} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/favorites">
            <Favorites />
          </Route>
          <Redirect from="/" to="/favorites" />

          <Route path="/contribute">
            <ContributeForm />
          </Route>
          <Redirect from="/" to="/contribute" />

          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch> */}
    </div>
  );
}

export default App;
