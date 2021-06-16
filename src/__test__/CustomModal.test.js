import React from 'react';
import CustomModal from '../lib/CustomModal';
import { render, shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';

const createRender = () => {
  return shallow(<CustomModal />);
};

describe('CustomModal Component', () => {
  it('renders without crashing', () => {
    createRender();
  });
});
