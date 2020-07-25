import React from 'react';
import renderer from 'react-test-renderer';

import Loader from './loader.jsx';

it(`Header renders correctly`, () => {
  const tree = renderer
    .create(
        <Loader />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
