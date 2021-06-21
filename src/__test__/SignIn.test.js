import React from 'react';
import ReactDOM from 'react-dom';
import SignInSide from '../lib/SignIn';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const loginValidation = true;
const firstLabel = 'SignIn Place Holder';

const createRender = () => {
  return render(
    <SignInSide validation={loginValidation} firstLabel={firstLabel} />,
  );
};

/*  This is the testing for SignInSide component which is inside lib folder.
 * Takes in validation, firstLabel as a prop.
 * validation should be boolean value
 * firstLabel should be a string.
 */

describe('SignInSide Component', () => {
  // Checking render
  it('renders without crashing', () => {
    try {
      const div = document.createElement('div');
      ReactDOM.render(<SignInSide />, div);
      ReactDOM.unmountComponentAtNode(div);
    } catch (e) {
      expect(e).toMatch('Error while rendering');
    }
  });

  // Check for Login Button is called
  it('should check User LogIn when LoginButton is clicked', () => {
    const { getByTestId } = createRender();
    const submit = getByTestId('button_click');
    if (loginValidation) {
      const output = fireEvent.click(submit);
      expect(output).toBe(true);
    } else {
      throw new TypeError(
        'Require True for validation of Login handleClick prop ',
      );
    }
  });

  it('should check Validation for Material UI components', () => {
    const { getByTestId } = createRender();
    expect(getByTestId('button_click')).toBeValid();
    expect(getByTestId('text-password')).toBeValid();
    expect(getByTestId('text-email')).toBeValid();
  });

  it('should check form element for all required fields', () => {
    const { getByTestId } = createRender();
    expect(getByTestId('text-password')).not.toBeRequired();
    expect(getByTestId('text-email')).not.toBeRequired();
  });

  // Testing firstLabel prop DataType
  it('should check for String passed as a prop for firstLable ', () => {
    const { getByTestId } = createRender();
    if (typeof firstLabel === 'string') {
      expect(getByTestId('text-email')).toHaveTextContent(firstLabel);
    } else {
      throw new TypeError('Require a String to be passed as a prop-firstLabel');
    }
  });
});
