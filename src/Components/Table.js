import React from "react";

const Table = ({ data }) => {
  return (
    <tr>
      <th>{data.id}</th>
      <td>{data.companyName}</td>
      <td>{data.street}</td>
      <td>{data.city}</td>
      <td>
        <button class="button is-danger">DELETE</button>
      </td>
    </tr>
  );
};

export default Table;
