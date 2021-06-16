import React from 'react';
import CustomCard from '../lib/CustomCard';
import { render, shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';

const createRender = () => {
  return shallow(<CustomCard />);
};

describe('CustomCard Component', () => {
  it('renders without crashing', () => {
    createRender();
  });
});
