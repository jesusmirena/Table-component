import styled, { css } from "styled-components";

const Container = styled.div`
  ${(props) =>
    props.general &&
    css`
      width: 90%;
      max-width: 80rem;
      margin: 0 auto;
    `}

  ${(props) =>
    props.table &&
    css`
      overflow-x: auto;
    `}

  ${(props) =>
    props.buttons &&
    css`
      display: flex;
      justify-content: space-between;
    `}

  ${(props) =>
    props.buttonsTable &&
    css`
      display: flex;
      flex-direction: column;
    `}
`;
export default Container;
