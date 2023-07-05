import Select from "react-select";
import "./FormPage.css";
import React, { useState } from "react";
import axios from "axios"

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    favoriteAnimal: "",
    favoriteMovies: "",
    favoriteIceCreamFlavor: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    try {
      await axios.post("/form/", formData);
      console.log("Form submitted successfully!");
      // Reset the form
      setFormData({
        name: "",
        email: "",
        favoriteAnimal: "",
        favoriteMovies: "",
        favoriteIceCreamFlavor: null,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({ ...formData, favoriteIceCreamFlavor: selectedOption });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="formInput">
        <label className="label">Name</label>
        <br></br>
        <input
          type="text"
          placeholder="Name"
          id="test"
          name="name"
          defaultValue={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="formInput">
        <label className="label">Email</label>
        <br></br>
        <input
          type="email"
          placeholder="email@email.com"
          id="test"
          name="name"
          defaultValue={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="formInput">
        <label className="label">Favorite Animal</label>
        <br></br>
        <input type="text"
          placeholder="Lion"
          name="name"
          defaultValue={formData.favoriteAnimal}
          onChange={handleInputChange}
        />
      </div>

      <div className="formInput">
        <label className="label">Top 3 Favorite Movies</label>
        <br></br>
        <input
          type="textarea"
          placeholder="Toy Story"
          className="moviesInput"
          defaultValue={formData.favoriteMovies}
          onChange={handleInputChange}  
        />
      </div>

      <div className="formInputSelect">
        <label className="label">Favorite Ice Cream Flavor</label>
        <br></br>
        <Select
          options={options} 
          defaultValue={formData.favoriteIceCreamFlavor}
          onChange={handleSelectChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    
  );
};
