import React, { Component } from "react";
import { PostWrapper, Navigator, Post } from "../../components";
import * as service from "../../services/post";

class PostContainer extends Component {
  componentDidMount() {
    this.fetchPostInfo(1);
  }

  // better way of using mutiple async
  fetchPostInfo = async postId => {
    const info = await Promise.all([
      service.getPost(postId),
      service.getComments(postId)
    ]);
    console.log(info);
  };

  // fetchPostInfo = async postId => {
  //   const post = await service.getPost(postId);
  //   console.log(post);
  //   const comments = await service.getComments(postId);
  //   console.log(comments);
  // };

  render() {
    return (
      <PostWrapper>
        <Navigator />
        <Post />
      </PostWrapper>
    );
  }
}

export default PostContainer;

/*
Since PostContainer is smart component
according to convention it does not have any style
*/
