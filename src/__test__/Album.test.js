import React from 'react';
import Album from '../lib/Album';
import { render, shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';

const createRender = () => {
  return shallow(<Album />);
};

/*  This is the testing for Album component which is inside lib folder.
 *
 */

describe('Album Component', () => {
  // Checking render
  it('renders without crashing', () => {
    createRender();
  });
});
