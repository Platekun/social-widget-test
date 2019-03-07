// @flow

import React from 'react';

import { Posts } from './components';

export function App() {
  return (
    <Posts
      url={'http://api.massrelevance.com/MassRelDemo/kindle.json'}
      limit={50}
      interval={15000}
    />
  );
}
