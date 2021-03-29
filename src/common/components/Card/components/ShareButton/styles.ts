import styled from "styled-components";

export const Container = styled.div`
  padding: 8px;
  border-radius: 4px;
  display: flex;
  align-itens: center !important;

  &:hover {
    cusor: pointer;
    background-color: #f2f2f2;
  }

  & > span {
    margin-left: 6px;
    margin-top: 3px;
    font-weight: bolder;

    .liked {
      color: #0a66c2;
    }
  }

  & > * {
    color: #565151;
  }
`;
