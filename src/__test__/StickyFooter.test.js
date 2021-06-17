import React from 'react';
import StickyFooter from '../lib/StickyFooter';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';

const footerText = 'RXP DesignOps Demo Projects';
const Copyright = `@${new Date().getFullYear()} RXP Services. All rights reserved`;

const createRender = () => {
  return shallow(
    <StickyFooter copyright={Copyright} footerText={footerText} />,
  );
};

/*  This is the testing for StickyFooter component which is inside lib folder.
 * Takes in validation, firstLabel as a prop.
 * validation should be boolean value
 * firstLabel should be a string.
 */

describe('StickyFooter Component', () => {
  // Checking render
  it('renders without crashing', () => {
    try {
      createRender();
    } catch (e) {
      expect(e).toMatch('Error while rendering');
    }
  });

  it('should check for PropType Footer Text', () => {
    const getByTestId = createRender();
    expect(
      getByTestId.find('[data-testid="footer"]').text().includes(footerText),
    ).toBe(true);
  });

  // it('should check for Copyrights of RXP', () => {
  //     const wrapper = shallow(<StickyFooter />).find('[data-testid="copyright"]');
  //     expect(wrapper.find('[data-testid="copyright"]').render());
  //    const getByTestId = render(<StickyFooter copyright={Copyright} footerText={footerText}/>);
  //    console.log(wrapper.debug());
  //   })

  // Testing footerText prop DataType
  it('should check for String passed as a prop ', () => {
    const getByTestId = createRender();
    if (typeof footerText === 'string') {
      expect(
        getByTestId.find('[data-testid="footer"]').text().includes(footerText),
      ).toBe(true);
    } else {
      throw new TypeError('Require a String to be passed as a prop');
    }
  });
});
