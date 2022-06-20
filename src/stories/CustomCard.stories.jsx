import React from 'react';
import { Button, Typography, TextField, Box } from '@material-ui/core';
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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CustomCard {...args} />;

export const Default = () => {
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

  const cardRows = (init, total) => {
    let rows = [];
    for (let i = init; i < total; i++) {
      rows.push(
        <CustomCard
          viewAction={viewAction}
          editAction={editAction}
          cardHeading={`Heading ${i}`}
          cardSubHeading={`I am a Card ${i}`}
        />,
      );
    }
    return rows;
  };

  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
      {/* component 1 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {cardRows(1, 6)}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {cardRows(6, 11)}
      </div>
      {/* component 2*/}
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

export const Overriden = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Overriden.args = {
  cardHeading: 'Heading',
  cardSubHeading:
    'This is a media card. You can use this section to describe the content.',
};

Overriden.decorators = [
  (Story) => (
    <div
      style={{
        height: '350px',
        width: '300px',
        margin: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
      <Story />
    </div>
  ),
];
