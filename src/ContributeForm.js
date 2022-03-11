import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ContributeForm({ onCreateProject }) {
  const initialFormState = {
    image: "",
    name: "",
    location: "",
  };

  const [formState, setFormState] = useState(initialFormState);
  const history = useHistory("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((formState) => ({ ...formState, [name]: value }));
  };

  function handleSubmit(event) {
    const baseUrl = "http://localhost:8000";
    event.preventDefault();
    fetch(baseUrl + "/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then((savedProject) => {
        onCreateProject(savedProject);
        setFormState(initialFormState);
      })
      .then((data) => {
        history.push("/");
      });
  }

  return (
    <div id="contribute-image">
      <div id="form-div">
        <section id="form-section">
          <form
            id="form"
            className="form"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div>
              <h3 className="contribute-header">Add New Piece</h3>
            </div>

            <label id="form-name" className="labels" htmlFor="name">
              Name
            </label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formState.name}
              placeholder="Name of piece"
            />

            <label className="labels" id="location-label" htmlFor="Location">
              Location
            </label>
            <input
              className="input"
              id="location"
              name="location"
              onChange={handleChange}
              value={formState.location}
              placeholder="Location of piece"
            />

            <label className="labels" id="photo-label" htmlFor="image">
              Photo
            </label>
            <input
              className="input"
              type="text"
              id="image"
              name="image"
              onChange={handleChange}
              value={formState.image}
              placeholder="Image URL"
            />

            <button id="submit-button" type="submit">
              Add Photo
            </button>
          </form>
        </section>
      </div>
      <div id={"contribute-img-div"}>
        <img
          id="contribute-img"
          src="https://images.unsplash.com/photo-1601913463731-cfba9fd31ed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default ContributeForm;
