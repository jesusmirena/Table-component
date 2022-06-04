import React from "react";

const Table = ({ tableHead, tableBody }) => {
  return (
    <table>
      <thead>
        <tr key={"header"}>
          {tableHead && tableHead?.map((key) => <th>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {tableBody.map((user) => (
          <tr>
            {Object.values(user).map((val) => (
              <td>{val}</td>
            ))}
            <td>
              <button>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
