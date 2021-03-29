import styled from "styled-components";

export const Container = styled.div`
  width: 92px;
  padding: 8px;
  padding-bottom: 2px;
  padding-top: 2px;
  display: flex;
  flex-direction: column;
  align-itens: center !important;
  justify-content: center;
  border-bottom: 4px solid #fff0;

  &.active {
    border-bottom: 4px solid black;

    & svg > * {
      fill: #000;
    }
  }

  &:hover {
    cusor: pointer;
    background-color: #f2f2f2;
  }

  & > * {
    color: #565151;
  }

  & svg > * {
    color: #70b5f9;
    fill: #565151;
  }

  svg {
    margin-left: 27px;
    color: #565151;
  }

  span {
    margin: 0;
  }
`;
