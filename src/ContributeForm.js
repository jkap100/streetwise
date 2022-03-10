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
              <h3 id="contribute-header">Add New Piece</h3>
            </div>

            <label className="labels" htmlFor="name">
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
      <div>
        <img
          src="https://as1.ftcdn.net/v2/jpg/01/74/81/36/1000_F_174813667_h4msLi2TkYzbxGfbiJUvlxWvYGCDVlb2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default ContributeForm;
