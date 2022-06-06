import styled, { css } from "styled-components";

const ModalWindow = styled.div`
  ${(props) =>
    props.isActive &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      background-color: #000000db;

      form {
        background-color: #fff;
        max-width: 80rem;
        border-radius: 0.3rem;

        fieldset {
          display: grid;
          gap: 20px;
          padding: 2rem;
          border: none;
        }
      }
    `}

  ${(props) =>
    props.isHidden &&
    css`
      position: fixed;
      bottom: 5rem;
      right: 5rem;

      i:hover {
        cursor: pointer;
      }
    `}
`;
export default ModalWindow;
