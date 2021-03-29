import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ContainerDefault } from "./styles";

import Copyright from "../../common/components/Copyright";

import { getPosts } from "../../core/actionCreators/postsActionCreators";
import {
  getUsers,
  getUserById,
} from "../../core/actionCreators/usersActionCreators";
import { getComments } from "../../core/actionCreators/commentsActionCreators";

const Blog: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
    dispatch(getComments());
    dispatch(getUserById(1));
  }, [dispatch]);

  return (
    <ContainerDefault>
      <header>Header</header>
      <nav>
        <div />
      </nav>
      <main>
        <div />
        <div />
      </main>
      <aside>links</aside>
      <footer>
        <Copyright />
      </footer>
    </ContainerDefault>
  );
};

export default Blog;
