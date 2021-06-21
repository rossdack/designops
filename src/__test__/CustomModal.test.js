import React from 'react';
import CustomModal from '../lib/CustomModal';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

const isOpen = true;

const createRender = () => {
  return render(<CustomModal isOpen={isOpen} />);
};

/*  This is the testing for CustomCard component which is inside lib folder.
 * Takes in isOpen as a prop and that prop should be not be null.
 */

describe('CustomCard Component', () => {
  // Checking render
  it('renders without crashing', () => {
    try {
      createRender();
    } catch (e) {
      expect(e).toMatch('Error while rendering');
    }
  });

  // null check for isOpen prop
  it('check for isOpen prop require field validation', () => {
    const { getByTestId } = createRender();

    if (isOpen != null) {
      expect(getByTestId('dialog')).toBeValid();
    } else {
      throw new TypeError('Set isOpen value from null to boolean');
    }
  });
});
