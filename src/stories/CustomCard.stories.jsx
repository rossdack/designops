import React from 'react';
import { TextField } from '@material-ui/core';
import CustomModal from '../lib/CustomModal';

import CustomCard from '../lib/CustomCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DesignOps/CustomCard',
  component: CustomCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [modalHeader, setModalHeader] = React.useState('Heading');
  const [subHeader, setSubHeader] = React.useState(
    'This is a media card. You can use this section to describe the content.',
  );
  const [hideCancel, sethideCancel] = React.useState(true);
  const [isEdit, setIsEdit] = React.useState(false);

  const handleSuccess = () => setOpenModal(false);
  const handleClose = () => setOpenModal(false);
  const viewAction = (header, subHeader) => {
    setModalHeader(header);
    setSubHeader(subHeader);
    sethideCancel(true);
    setOpenModal(true);
    setIsEdit(false);
  };

  const editAction = () => {
    setOpenModal(true);
    setIsEdit(true);
    sethideCancel(false);
  };
  const headingHandler = (e) => {
    const { value } = e.target;
    setModalHeader(value);
  };

  return (
    <div>
      <div>
        <CustomCard {...args} viewAction={viewAction} editAction={editAction} />
      </div>
      <CustomModal
        isOpen={openModal}
        size="sm"
        handleSuccess={handleSuccess}
        handleClose={handleClose}
        hideLetfBtn={hideCancel}
        title={modalHeader}>
        <p>{subHeader}</p>
        {isEdit && (
          <form>
            <TextField
              id="outlined-basic"
              label="Heading"
              variant="outlined"
              type="text"
              fullWidth
              onChange={headingHandler}
            />
            <TextField
              id="outlined-basic"
              label="SubHeading"
              variant="outlined"
              type="text"
              fullWidth
            />
          </form>
        )}
      </CustomModal>
    </div>
  );
};

export const Card = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Card.args = {
  cardHeading: 'Heading',
  cardSubHeading:
    'This is a media card. You can use this section to describe the content.',
};

Card.decorators = [
  (Story) => (
    <div
      style={{
        height: '350px',
        width: '300px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
      <Story />
    </div>
  ),
];
