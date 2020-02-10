import React, { Component } from "react";
import { PostWrapper, Navigator, Post } from "../../components";
import * as service from "../../services/post";

class PostContainer extends Component {
  constructor(props) {
    super();
    // initializes component state
    this.state = {
      postId: 1,
      fetching: false, // tells whether the request is waiting for response or not
      post: {
        title: null,
        body: null
      },
      comments: []
    };
    // postId tells id of current post, fetching tells status of request
  }

  componentDidMount() {
    this.fetchPostInfo(1);
  }

  // better way of using mutiple async
  fetchPostInfo = async postId => {
    this.setState({
      fetching: true // requesting...
    });

    const info = await Promise.all([
      service.getPost(postId),
      service.getComments(postId)
    ]);
    // fetchPostInfo = async postId => {
    //   const post = await service.getPost(postId);
    //   console.log(post);
    //   const comments = await service.getComments(postId);
    //   console.log(comments);
    // };

    // Object destructing Syntax,
    // takes out required values and create references to them
    const { title, body } = info[0].data;

    const comments = info[1].data;

    this.setState({
      postId,
      post: {
        title,
        body
      },
      comments,
      fetching: false // done!
    });
  };

  handleNavigateClick = type => {
    const postId = this.state.postId;

    if (type === "NEXT") {
      this.fetchPostInfo(postId + 1);
    } else {
      this.fetchPostInfo(postId - 1);
    }
  };

  render() {
    // by using destructing syntax this.state.post.title => post.title
    const { postId, fetching, post, comments } = this.state;
    return (
      <PostWrapper>
        <Navigator
          postId={postId}
          // while loading disable button
          disabled={fetching}
          onClick={this.handleNavigateClick}
        />
        <Post title={post.title} body={post.body} comments={comments} />
      </PostWrapper>
    );
  }
}

export default PostContainer;

/*
Since PostContainer is smart component
according to convention it does not have any style
*/
