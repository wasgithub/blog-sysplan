import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  .comment-container {
    display: flex;
    align-items: center !important;

    form {
      border-radius: 25px;
      width: 100%;
      margin-left: 16px;
      outline: none;
      padding-left: 12px;
      font-size: 16px;
      display: flex;
      input {
        width: 100%;
        padding-left: 8px;
      }
    }
  }
  .comment-actions {
    margin-left: 4px;
    margin-top: -8px;
    height: 40px;
    span {
      cursor: pointer;
      padding: 2px;
      border-radius: 4px;
      &:hover {
        background-color: #f2f2f2;
      }
    }
  }
`;
