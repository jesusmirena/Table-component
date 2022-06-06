import styled, { css } from "styled-components";

const StyledButton = styled.button`
  color: #fff;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  display: block;
  border-radius: 0.2rem;
  border: none;
  min-width: 3rem;

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
  ${(props) =>
    props.red &&
    css`
      background-color: red;
    `}
  ${(props) =>
    props.blue &&
    css`
      background-color: #3f50b0;
    `}
`;

export default StyledButton;
