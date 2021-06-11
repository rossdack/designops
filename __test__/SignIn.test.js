import React from 'react';
import ReactDOM from 'react-dom';
import SignInSide from '../lib/SignIn';
import { configure, mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

configure({ adapter: new Adapter() });

describe('AppHeader Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignInSide />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('validates model on button click', () => {
  //   const onLoginSubmit = jest.fn();
  //   const validation=true;
  //   const wrapper = shallow(
  //     <SignInSide onLoginSubmit={onLoginSubmit} validation={validation}/>);
  //     const submitBtn = wrapper.find('#button_click')
  //     submitBtn.simulate('click')
  //     expect(onLoginSubmit).toHaveBeenCalled();
  // })

  // it('should check if message is displayed when button is clicked', () => {
  //   const validation=true;
  //   const onLoginSubmit = jest.fn();
  //   const { getByTestId } = render(<SignInSide validation={validation} />);
  //   const submit = getByTestId('button_click');
  //   fireEvent.click(submit);
  //  // expect(output).not.toBeEmpty('');
  // })
});
