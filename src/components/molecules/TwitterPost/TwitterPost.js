// @flow

import React from 'react';

import {
  TwitterIcon,
  LikeIcon,
  ReplyIcon,
  RetweetIcon,
  Text,
  PostBar,
  PostHeader,
  ProfilePhoto,
  PostBody,
  PostContent,
  PostFooter,
  AuthorName,
  PostAuthor,
  Grow
} from '../../atoms';
import { formateDateToDDMMYYYYHHmm } from '../../../shared';

type Props = PostFromTwitter;

export const TwitterPost = (props: Props) => {
  const {
    postLink,
    displayName,
    authorUserName,
    profilePhoto,
    authorProfileUrl,
    content,
    likesLink,
    repliesLink,
    retweetsLink,
    likes,
    createdAt
  } = props;

  return (
    <PostBody>
      <PostHeader>
        <PostBar>
          <a href={postLink}>
            <TwitterIcon />
          </a>

          <ProfilePhoto src={profilePhoto} alt={props.displayName} />
        </PostBar>

        <PostAuthor>
          <AuthorName>{displayName}</AuthorName>

          <Text type="primary">
            <a href={authorProfileUrl}>@{authorUserName}</a>
          </Text>
        </PostAuthor>
      </PostHeader>

      <PostContent>
        <Text type="twitter-text" postText={content} />
      </PostContent>

      <PostFooter>
        <Grow>
          <Text type="secondary">{formateDateToDDMMYYYYHHmm(createdAt)}</Text>
        </Grow>

        <a href={repliesLink}>
          <ReplyIcon />
        </a>

        <a href={retweetsLink}>
          <RetweetIcon />
        </a>

        <a href={likesLink}>
          <LikeIcon count={likes} />
        </a>
      </PostFooter>
    </PostBody>
  );
};
