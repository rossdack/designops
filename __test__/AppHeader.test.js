import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../lib/AppHeader';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('AppHeader Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppHeader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('Testing with the RXP logo', () => {
  //  // const title='Demo Page';
  //   const logoSource='https://assets-global.website-files.com/5eb0a0358a376a75f540e0ea/605bc8ff5dd0b052c46e6d37_RXP%20group-Endorsed_svg_White.svg';
  //   const props = { title: 'Demo Page', logoSource:'https://assets-global.website-files.com/5eb0a0358a376a75f540e0ea/605bc8ff5dd0b052c46e6d37_RXP%20group-Endorsed_svg_White.svg' };
  //   const wrapper =shallow(<AppHeader {...props}/ >);
  //   expect(wrapper.find("img")).toEqual(logoSource);
  //   });
  it('Should check for title as a props', () => {
    const title = 'Demo Page';
    const { getByTestId } = render(<AppHeader title={title} />);
    const element_title = getByTestId('title');
    expect(element_title).toHaveTextContent(title);
  });
});
