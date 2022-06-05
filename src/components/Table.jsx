import React, { useState } from "react";

const Table = ({ tableHead, tableBody, openModal }) => {
  const [filters, setFilters] = useState({
    ["id"]: "",
    ["first_name"]: "",
    ["last_name"]: "",
    ["username"]: "",
    ["email"]: "",
    ["gender"]: "",
    ["phone_number"]: "",
    ["date_of_birth"]: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filterCriteria = (obj) => {
    return (
      obj.first_name.toLowerCase().includes(filters.first_name.toLowerCase()) &&
      obj.last_name.toLowerCase().includes(filters.last_name.toLowerCase()) &&
      obj.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      obj.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      obj.gender.toLowerCase().includes(filters.gender.toLowerCase()) &&
      obj.phone_number
        .toLowerCase()
        .includes(filters.phone_number.toLowerCase()) &&
      obj.date_of_birth
        .toLowerCase()
        .includes(filters.date_of_birth.toLowerCase())
    );
  };

  return (
    <table>
      <thead>
        <tr key={"header"}>
          {tableHead &&
            tableHead?.map((key) => (
              <th>
                {key}
                {key !== "id" && (
                  <input
                    onChange={(e) => handleChange(e)}
                    name={key}
                    type="text"
                  />
                )}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {tableBody
          .filter((user) => filterCriteria(user))
          .map((user) => (
            <tr key={user.id}>
              {Object.values(user).map((val) => (
                <td key={val}>{val}</td>
              ))}
              <td>
                <button onClick={() => openModal(user)}>Edit</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
