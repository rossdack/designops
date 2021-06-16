import React from 'react';
import Album from '../lib/Album';
import { render, shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';

const createRender = () => {
  return shallow(<Album />);
};

describe('Album Component', () => {
  it('renders without crashing', () => {
    createRender();
  });
});
