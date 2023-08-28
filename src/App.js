import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Components/Table";
import AddForm from "./Components/AddForm";

function App() {
  const [datas, setData] = useState([]);
  const [value, setValue] = useState(5);
  const getData = () =>
    axios
      .get("https://northwind.vercel.app/api/customers", {
        params: {
          _limit: value,
        },
      })
      .then((res) => {
        setData(res.data);
      });
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    getData();
  }, [value]);

  return (
    <div className="App">
      <div className="columns ">
        <div className="column ">
          <div className="scrollit">
            <table className="table is-bordered">
              <thead>
                <tr>
                  <th>
                    <abbr title="Position">Id</abbr>
                  </th>
                  <th>CompanyName</th>
                  <th>
                    <abbr title="Played">Street</abbr>
                  </th>
                  <th>
                    <abbr title="Won">City</abbr>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {datas.map((data, index) => {
                  return <Table key={index} data={data}></Table>;
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="column ">
          <form className="selectform">
            <label>How much Do you want to show ?</label>
            <select value={value} onChange={handleChange}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="300">300</option>
            </select>
          </form>
        </div>
        <div className="column">
          <h2 style={{ fontWeight: "bolder", margin: "3rem" }}>Add Customer</h2>
          <AddForm data={datas}></AddForm>
        </div>
      </div>
    </div>
  );
}

export default App;
