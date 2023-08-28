import React, { useState } from "react";
import axios from "axios";

const AddForm = () => {
  const [company, setCompany] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const handleAddCustomer = (e) => {
    e.preventDefault();
    axios
      .post("https://northwind.vercel.app/api/customers", {
        companyName: company,
        address: {
          street: street,
          city: city,
        },
      })

      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
    debugger;
  };

  return (
    <div>
      <form onSubmit={handleAddCustomer} className="addcustomer">
        <div className="field">
          <label style={{ marginLeft: "2rem" }} className="label">
            Company Name
          </label>
          <div className="control">
            <input
              style={{ width: "40%", marginLeft: "2rem", marginTop: "1rem" }}
              className="input is-normal"
              value={company}
              type="text"
              onChange={(e) => {
                setCompany(e.target.value);
                console.log(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="field">
          <label style={{ marginLeft: "2rem" }} className="label">
            Street
          </label>
          <div className="control">
            <input
              style={{ width: "40%", marginLeft: "2rem", marginTop: "1rem" }}
              className="input is-normal"
              type="text"
              value={street}
              onChange={(e) => {
                setStreet(e.target.value);
                console.log(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="field  ">
          <label style={{ marginLeft: "2rem" }} className="label">
            City
          </label>
          <div className="control">
            <input
              style={{ width: "40%", marginLeft: "2rem", marginTop: "1rem" }}
              className="input is-normal"
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                console.log(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <button
          style={{ marginLeft: "2rem", marginTop: "1rem" }}
          className="button is-success"
        >
          Success
        </button>
      </form>
    </div>
  );
};

export default AddForm;
