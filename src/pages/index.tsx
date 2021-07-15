import React from 'react';

import { NextPage } from 'next';
import { GitHubCorner } from 'src/components/GitHubConer';

import { Main } from '../components/Main';

const PageComponent: React.FC<NextPage> = () => {
  return (
    <>
      <GitHubCorner projectUrl="" />
      <Main />
    </>
  );
};

export default PageComponent;