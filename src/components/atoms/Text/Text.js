// @flow

import React from 'react';
import classnames from 'classnames';

import './text.scss';
import {
  withFacebookHashtags,
  withEmbebbedUrls,
  withTwitterUsername,
  withTwitterHashtags
} from '../../../shared';

type Props = {
  type: 'primary' | 'secondary' | 'facebook-text' | 'twitter-text',
  postText?: string
};

export const Text = ({ type, postText, ...rest }: Props) => {
  if (type === 'primary' || type === 'secondary') {
    return (
      <p
        className={classnames(
          'post__text',
          type === 'primary' && 'post__text-primary',
          type === 'secondary' && 'post__text--secondary'
        )}
        {...rest}
      />
    );
  }

  if (!!postText) {
    return (
      <p
        className="post__text"
        dangerouslySetInnerHTML={{
          __html:
            type === 'facebook-text'
              ? withFacebookHashtags(withEmbebbedUrls(postText))
              : withTwitterUsername(
                  withTwitterHashtags(withEmbebbedUrls(postText))
                )
        }}
        {...rest}
      />
    );
  }

  return null;
};
