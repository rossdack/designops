import React from 'react';
import ReactDOM from 'react-dom';
import SignInSide from '../lib/SignIn';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

configure({ adapter: new Adapter() });

describe('AppHeader Component', () => {
  // var { getByTestId } = render(<SignInSide />);
  // beforeEach(() => {
  //   const validation=true;
  //   getByTestId = render(<SignInSide validation={validation} />);
  // });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignInSide />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should check User LogIn when LoginButton is clicked', () => {
    const validation = true;
    const { getByTestId } = render(<SignInSide validation={validation} />);
    const submit = getByTestId('button_click');
    const output = fireEvent.click(submit);
    expect(output).toBe(true);
  });

  it('should check Validation for Material UI components', () => {
    const { getByTestId } = render(<SignInSide />);
    expect(getByTestId('button_click')).toBeValid();
    expect(getByTestId('text-password')).toBeValid();
    expect(getByTestId('text-email')).toBeValid();
  });

  it('should check form element for all required fields', () => {
    const { getByTestId } = render(<SignInSide />);
    expect(getByTestId('text-password')).not.toBeRequired();
    expect(getByTestId('text-email')).not.toBeRequired();
  });
});
