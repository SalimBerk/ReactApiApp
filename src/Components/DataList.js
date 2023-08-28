import React from "react";
import Table from "./Table";

const DataList = ({ datalist }) => {
  return (
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
          {datalist.map((data, index) => {
            return <Table key={index} data={data}></Table>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataList;
