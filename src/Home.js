import React, { useState, useEffect } from "react";
import "./styles.css";
import {
  AutoForm,
  AutoFields,
  ErrorsField,
  SubmitField,
} from "uniforms-bootstrap4";
import { useNavigate } from "react-router-dom";
import LeadSchema from "./schema";
const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const submitClick = (e) => {
    console.log(e);
    //api call for post data
    fetch("api url", {
      method: "POST",
      body: JSON.stringify({
        // param here
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  const showClick = () => {
    navigate("/show");
  };
  return (
    <div className="App">
      <button
        type="button"
        className="btn btn-secondary mr-5"
        onClick={() => showClick}
        style={{ float: "right" }}
      >
        Show
      </button>
      <div className="uniforms">
        <AutoForm schema={LeadSchema} onSubmit={(e) => submitClick(e)}>
          <h1 style={{ textAlign: "center" }}>Dynamic Form</h1>
          <AutoFields />
          <ErrorsField />
          <SubmitField />
        </AutoForm>
      </div>
    </div>
  );
};

export default Home;
