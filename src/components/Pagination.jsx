import React from "react";
import StyledPagination from "./styledComponents/Pagination.styled";

const Pagination = ({ usersPerPage, usersAmount, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(usersAmount / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledPagination>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => setCurrentPage(number)}>{number}</button>
          </li>
        ))}
    </StyledPagination>
  );
};

export default Pagination;
