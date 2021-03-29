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
  }

  svg {
    margin-left: 25px;
  }

  span {
    margin: 0;
  }
`;
