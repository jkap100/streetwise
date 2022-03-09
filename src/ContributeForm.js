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
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Piece</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formState.name}
        />

        <label htmlFor="Location">Location</label>
        <textarea
          id="location"
          name="location"
          onChange={handleChange}
          value={formState.location}
        />

        <label htmlFor="image">Photo</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={handleChange}
          value={formState.image}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default ContributeForm;
