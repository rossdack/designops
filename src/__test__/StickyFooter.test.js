import React from 'react';
import StickyFooter from '../lib/StickyFooter';
import { render, shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const createRender = () => {
  return shallow(<StickyFooter />);
};

describe('StickyFooter Component', () => {
  it('renders without crashing', () => {
    createRender();
  });

  it('should check for PropType Footer Text', () => {
    const footerText = 'RXP DesignOps Demo Projects';
    const getByTestId = shallow(<StickyFooter footerText={footerText} />);
    //console.log(getByTestId.debug());
    expect(
      getByTestId.find('[data-testid="footer"]').text().includes(footerText),
    ).toBe(true);
  });

  //   it('should check for Copyrights of RXP', () => {

  //     const Copyright =`@${new Date().getFullYear()} RXP Services. All rights reserved`;
  //     const {getByTestId} = render(<StickyFooter copyright={Copyright} />);
  //     console.log(getByTestId.debug());
  //     expect(getByTestId.find('[data-testid="copyright"]').text().includes(Copyright)).toBe(true);
  //   })
});
