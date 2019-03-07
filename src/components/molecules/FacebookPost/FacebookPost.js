// @flow

import React from 'react';

import {
  FacebookIcon,
  LikeIcon,
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

type Props = PostFromFacebook;

export const FacebookPost = (props: Props) => {
  const {
    postLink,
    displayName,
    authorUserName,
    profilePhoto,
    authorProfileUrl,
    content,
    likes,
    createdAt
  } = props;

  return (
    <PostBody>
      <PostHeader>
        <PostBar>
          <a href={postLink}>
            <FacebookIcon />
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
        <Text type="facebook-text" postText={content} />
      </PostContent>

      <PostFooter>
        <Grow>
          <Text type="secondary">{formateDateToDDMMYYYYHHmm(createdAt)}</Text>
        </Grow>

        <LikeIcon count={likes} />
      </PostFooter>
    </PostBody>
  );
};
