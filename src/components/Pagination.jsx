import React from "react";

const Pagination = ({ usersPerPage, allUsers, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => setCurrentPage(number)}>{number}</button>
          </li>
        ))}
    </ul>
  );
};

export default Pagination;
