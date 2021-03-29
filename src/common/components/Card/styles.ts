import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

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

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
