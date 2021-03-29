import styled from "styled-components";

export const Container = styled.div`
  padding: 8px;
  display: flex;
  align-itens: center !important;

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
    color: #0a66c2;
  }

  .image-preview {
    margin-left: 24px;
    width: auto;
    height: 29px;
  }
  .image-name {
    max-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .close-icon {
    margin-top: 2px;
  }

  .mini-logo {
    width: 42px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-itens: center;
    background-color: #0a66c2;
    color: #fff;
    border-radius: 3px;
    transform: scale(0.8);

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      letter-spacing: -3px;
      font-weight: 800;
      font-size: 26px;
      margin-right: 2px;
    }
  }

  .search-input {
    display: flex;
    align-itens: center;
    background-color: #eef3f8;
    border-radius: 3px;
    transition: 1s;
    padding-left: 0px;
    width: 15vw;
    overflow: overlay;

    &:hover {
      width: 20vw;
    }

    svg {
      margin-top: 6px;
      margin-left: 16px;
      z-index: 2;
    }

    input {
      transition: 1s;
      border: none;
      background-color: #eef3f8;
      outline: none;
      font-size: 14px;
      padding-left: 6px;
      padding-top: 4px;
      width: 100%;
      :focus {
        outline: none;
        outline-width: 0;
      }
    }
  }
`;
