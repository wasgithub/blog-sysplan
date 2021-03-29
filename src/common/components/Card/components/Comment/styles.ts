import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0 16px 16px 16px;

  .comment-thumb {
    margin-top: 16px;
  }

  form {
    width: 100%;
    margin-left: 12px;

    border-radius: 10px;
    border: none;
    box-shadow: none;
    border-top-left-radius: 0px;
    background-color: #f2f2f2;

    .comment-time {
      font-size: 11px;
      margin-bottom: 8px;
    }
  }

  .comment-liked {
    color: #0a66c2;
    font-weight: bold;
  }

  .comment-actions {
    margin-left: 4px;
    height: 40px;
    margin-top: 2px;

    span {
      cursor: pointer;
      padding: 1px;
      border-radius: 4px;
      &:hover {
        background-color: #f2f2f2;
      }
    }
  }
  .comment-header {
    display: flex;
    justify-content: space-between;
    align-items: start;

    button {
      padding: 0;
    }
  }

  .comment-area {
    width: 100%;
    margin-right: 16px;
  }
`;
