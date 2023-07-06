import Select from "react-select";
import "./FormPage.css";
import React, { useState } from "react";
import axios from "axios"

//Set options list for the user selection
const options = [
  { value: "yes", label: "yes" },
  { value: "no", label: "no" },
];

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    favorite_animal: "",
    favorite_movies: "",
    favorite_ice_cream_flavor: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      await axios.post("http://localhost:8000/form/", formData);
      console.log("Form submitted successfully!");
      // Reset the form
      setFormData({
        name: "",
        email: "",
        favorite_animal: "",
        favorite_movies: "",
        favorite_ice_cream_flavor: null,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  //Handle and validate changes of input
  function handleChange(evt) {
    if(evt!=null){
      const value = evt.target.value;
      setFormData({
        ...formData,
        [evt.target.name]: value
      });
    }
  }

  //Handle and validate changes of selection
  const handleSelectChange = (selectedOption) => {
    if(selectedOption!=null){
      setFormData({ ...formData, favorite_ice_cream_flavor: selectedOption.value });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="formInput">
        <label className="label">Name</label>
        <br></br>
        <input
          type="text"
          placeholder="Name"
          name="name"
          defaultValue={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="formInput">
        <label className="label">Email</label>
        <br></br>
        <input
          type="email"
          placeholder="email@email.com"
          name="email"
          defaultValue={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="formInput">
        <label className="label">Favorite Animal</label>
        <br></br>
        <input type="text"
          placeholder="Lion"
          name="favorite_animal"
          defaultValue={formData.favorite_animal}
          onChange={handleChange}
        />
      </div>

      <div className="formInput">
        <label className="label">Top 3 Favorite Movies</label>
        <br></br>
        <input
          type="textarea"
          placeholder="Toy Story"
          className="moviesInput"
          name="favorite_movies"
          defaultValue={formData.favorite_movies}
          onChange={handleChange}  
        />
      </div>

      <div className="formInputSelect">
        <label className="label">Do you have a favorite ice cream flavor?</label>
        <br></br>
        <Select
          options={options} 
          defaultValue={formData.favorite_ice_cream_flavor}
          onChange={handleSelectChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
