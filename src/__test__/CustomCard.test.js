import React from 'react';
import CustomCard from '../lib/CustomCard';
import { render, shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';

const createRender = () => {
  return shallow(<CustomCard />);
};

/*  This is the testing for CustomCard component which is inside lib folder.
 *
 */

describe('CustomCard Component', () => {
  // Checking render
  it('renders without crashing', () => {
    createRender();
  });
});
