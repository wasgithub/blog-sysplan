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

  & svg > * {
    color: #70b5f9;
  }

  .image-preview {
    margin-left: 24px
    width: auto;
    height: 29px;
  }
  .image-name{
    max-width: 100px;
      white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  }

  .close-icon{
    margin-top: 2px
  }
`;
