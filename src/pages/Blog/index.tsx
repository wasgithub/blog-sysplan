import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ContainerDefault } from "./styles";

import Copyright from "../../common/components/Copyright";
import CardItem from "../../common/components/Card";
import FeedIdentity from "../../common/components/FeedIdentity";
import NewPost from "../../common/components/NewPost";
import TopBar from "./components/TopBar";

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
      <header>
        <TopBar />
      </header>
      <nav>
        <FeedIdentity />
      </nav>
      <main>
        <NewPost />
        <CardItem />
      </main>
      <aside>Related links</aside>
      <footer>
        <Copyright />
      </footer>
    </ContainerDefault>
  );
};

export default Blog;
