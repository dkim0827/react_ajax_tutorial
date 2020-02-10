import React, { Component } from "react";
import { PostWrapper, Navigator } from "../../components";

class PostContainer extends Component {
  render() {
    return (
      <PostWrapper>
        <Navigator />
      </PostWrapper>
    );
  }
}

export default PostContainer;

/*
Since PostContainer is smart component
according to convention it does not have any style
*/
