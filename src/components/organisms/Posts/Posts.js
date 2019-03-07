// @flow

import React from 'react';

import { getPosts } from '../../../shared';
import { Text, PostsList } from '../../atoms';
import { FacebookPost, TwitterPost } from '../../molecules';

const renderPost = (post: PostFromFacebook | PostFromTwitter) => {
  if (post.network === 'facebook') {
    return <FacebookPost key={post.id} {...post} />;
  }

  if (post.network === 'twitter') {
    return <TwitterPost key={post.id} {...post} />;
  }
};

const renderPosts = (posts: Array<PostFromFacebook | PostFromTwitter>) =>
  posts.map(renderPost);

type Props = {
  url: string,
  limit: number,
  interval: number
};

type State = {
  uiState: WidgetState,
  posts: Array<PostFromFacebook | PostFromTwitter>
};

export class Posts extends React.Component<Props, State> {
  state = {
    uiState: 'loading',
    posts: []
  };

  unsubscribe = void 0;

  componentDidMount() {
    this.fetchAndSubscribe();
  }

  setStatus = (uiState: WidgetState) =>
    this.setState(prevState => ({ ...prevState, uiState }));

  setPosts = (posts: Array<PostFromFacebook | PostFromTwitter | void>) =>
    this.setState(prevState => ({
      ...prevState,
      posts: posts.filter(Boolean)
    }));

  fetchAndSubscribe = async () => {
    const {
      listenForPosts,
      setStatus,
      setPosts,
      props: { url, limit }
    } = this;

    const posts = (await getPosts(url, limit): Array<
      PostFromFacebook | PostFromTwitter | void
    >);

    setPosts(posts);

    setStatus('listening');

    listenForPosts();
  };

  listenForPosts = () => {
    const {
      getMostRecentPosts,
      props: { interval }
    } = this;

    this.unsubscribe = setInterval(getMostRecentPosts, interval);
  };

  getMostRecentPosts = async () => {
    const {
      setPosts,
      props: { url, limit }
    } = this;

    const sinceId = this.state.posts[0].id;

    const newPosts = (await getPosts(url, limit, sinceId): Array<
      PostFromFacebook | PostFromTwitter | void
    >);

    const idsOfCurrentPosts = this.state.posts.map(post => post.id);

    const postThatAreNotRepeated = newPosts
      .filter(Boolean)
      .filter(newPost => !idsOfCurrentPosts.includes(newPost.id));

    setPosts([...this.state.posts, ...postThatAreNotRepeated]);
  };

  componentWillUnmount() {
    clearInterval(this.unsubscribe);
  }

  render() {
    const {
      state: { uiState }
    } = this;

    return (
      <>
        <h2 hidden>Social Widget</h2>

        <PostsList>
          {uiState === 'loading' && <Text type="primary">Loading...</Text>}
          {renderPosts(this.state.posts)}
        </PostsList>
      </>
    );
  }
}
