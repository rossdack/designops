import React from 'react';
import { Button, Typography, TextField, Box } from '@material-ui/core';

import CustomModal from '../lib/CustomModal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DesignOps/CustomModal',
  component: CustomModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CustomModal {...args} />;

export const ExtraSmallModal = () => {
  const [openModal, setOpenModal] = React.useState(true);
  const openModalHandler = () => setOpenModal(true);
  const handleSuccess = () => setOpenModal(false);
  const handleClose = () => setOpenModal(false);
  return (
    <Box textAlign="center">
      <Button variant="outlined" color="primary" onClick={openModalHandler}>
        Extra Small Modal
      </Button>
      <CustomModal
        size="xs"
        isOpen={openModal}
        handleSuccess={handleSuccess}
        handleClose={handleClose}
        title="Are you sure you want to exit?"
        buttonClasses="buttonCss"></CustomModal>
    </Box>
  );
};

export const SmallModal = () => {
  const [openModal, setOpenModal] = React.useState(true);
  const openModalHandler = () => setOpenModal(true);
  const handleSuccess = () => setOpenModal(false);
  const handleClose = () => setOpenModal(false);
  return (
    <Box textAlign="center">
      <Button variant="outlined" color="primary" onClick={openModalHandler}>
        Small Modal
      </Button>
      <CustomModal
        isOpen={openModal}
        size="sm"
        handleSuccess={handleSuccess}
        handleClose={handleClose}
        title="Success!!">
        User has been created successfully!!
      </CustomModal>
    </Box>
  );
};

export const MediumModal = () => {
  const [openModal, setOpenModal] = React.useState(true);
  const openModalHandler = () => setOpenModal(true);
  const handleSuccess = () => setOpenModal(false);
  const handleClose = () => setOpenModal(false);
  return (
    <Box textAlign="center">
      <Button variant="outlined" color="primary" onClick={openModalHandler}>
        Medium Modal
      </Button>
      <CustomModal
        isOpen={openModal}
        size="md"
        handleSuccess={handleSuccess}
        handleClose={handleClose}
        title="Subscribe!!">
        <p>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </p>
        <form>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
          />
        </form>
      </CustomModal>
    </Box>
  );
};

export const LargeModal = () => {
  const [openModal, setOpenModal] = React.useState(true);
  const openModalHandler = () => setOpenModal(true);
  const handleSuccess = () => setOpenModal(false);
  const handleClose = () => setOpenModal(false);
  return (
    <Box textAlign="center">
      <Button variant="outlined" color="primary" onClick={openModalHandler}>
        Large Modal
      </Button>
      <CustomModal
        isOpen={openModal}
        size="lg"
        handleSuccess={handleSuccess}
        handleClose={handleClose}
        title="Success!!">
        <Typography gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </Typography>
        <Typography gutterBottom>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        </Typography>
        <Typography gutterBottom>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
          ullamcorper nulla non metus auctor fringilla.
        </Typography>
      </CustomModal>
    </Box>
  );
};

export const Overriden = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Overriden.args = {
  size: 'xs',
  isOpen: true,
  title: 'Are you sure you want to exit?',
  buttonClasses: 'buttonCss',
  children: 'Write content here',
};
