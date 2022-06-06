import styled from "styled-components";

const StyledPagination = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: center;
  margin: 1rem;
  list-style: none;
  flex: 1;

  button {
    color: #000;
    margin-left: 1.5rem;
    border: none;
    text-align: center;
    position: relative;
    font-size: 20px;
    font-weight: bold;
    transition: 0.3s ease;
    cursor: pointer;
    user-select: none;
    &:hover {
      background-color: rgba(white, 0.25);
      color: #ff4f5d;
    }
  }
`;

export default StyledPagination;
