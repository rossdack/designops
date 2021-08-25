import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../lib/AppHeader';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

const title = 'Demo Page';
const createRender = () => {
  return render(<AppHeader title={title} />);
};

/*  This is the testing for AppHeader component which is inside lib folder.
 * Takes in title as a prop and that prop should be a string.
 */

describe('AppHeader Component', () => {
  // Checking render
  it('renders without crashing', () => {
    try {
      const div = document.createElement('div');
      ReactDOM.render(<AppHeader />, div);
      ReactDOM.unmountComponentAtNode(div);
    } catch (e) {
      expect(e).toMatch('Error while rendering');
    }
  });

  // Checking alt property should be accessible
  it('Testing with the Capgemini logo', () => {
    const title = 'Capgemini';
    const { getByTestId } = createRender();
    expect(getByTestId('image')).toHaveAccessibleName(title);
  });

  //Check title prop getting correctly rendered
  it('Should check for title as a props', () => {
    const { getByTestId } = createRender();
    const element_title = getByTestId('title');
    expect(element_title).toHaveTextContent(title);
  });

  // Testing title prop DataType
  it('should check string', () => {
    const { getByTestId } = createRender();
    const element_title = getByTestId('title');
    if (typeof title === 'string') {
      expect(element_title).toHaveTextContent(title);
    } else {
      throw new TypeError('Require a String to be passed as a prop');
    }
  });
});
