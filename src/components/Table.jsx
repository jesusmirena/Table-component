import React, { useState } from "react";
import { useModal } from "../hooks/useModal";
import StyledButton from "./styledComponents/Button.styled";
import Container from "./styledComponents/Container.styled";
import StyledTable from "./styledComponents/Table.styled";

const Table = ({
  tableHead,
  tableBody,
  openModal,
  usersData,
  setUsersData,
}) => {
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

  const handleFiltersChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (id) => {
    if (usersData.length < 6) {
      alert("You can't delete more users, there's only five left");
    } else {
      const response = confirm("Do you want to delete this user?");
      if (response) {
        const updatedUsers = usersData.filter((user) => user.id !== id);
        setUsersData(updatedUsers);
      }
    }
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
    <Container table>
      <StyledTable>
        <thead>
          <tr key={"header"}>
            <th>Actions</th>
            {tableHead &&
              tableHead?.map((key) => (
                <th>
                  {key}
                  {key !== "id" && (
                    <input
                      onChange={(e) => handleFiltersChange(e)}
                      placeholder={"filter by " + key}
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
                <td>
                  <Container buttonsTable>
                    <StyledButton red onClick={() => handleDelete(user.id)}>
                      Delete
                    </StyledButton>

                    <StyledButton blue onClick={() => openModal(user)}>
                      Edit
                    </StyledButton>
                  </Container>
                </td>
                {Object.values(user).map((val) => (
                  <td key={val}>{val}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </StyledTable>
    </Container>
  );
};

export default Table;
