import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../lib/AppHeader';
import '@testing-library/jest-dom/extend-expect';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

configure({ adapter: new Adapter() });

describe('AppHeader Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppHeader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Testing with the RXP logo', () => {
    const title = 'RXP Group';
    const { getByTestId } = render(<AppHeader />);
    expect(getByTestId('image')).toHaveAccessibleName(title);
  });

  it('Should check for title as a props', () => {
    const title = 'Demo Page';
    const { getByTestId } = render(<AppHeader title={title} />);
    const element_title = getByTestId('title');
    expect(element_title).toHaveTextContent(title);
  });
});
