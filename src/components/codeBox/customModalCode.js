const customModalCode = `
import React from "react";
...
import { CustomModal } from 'designops';

const CustomModalDemo = () => {
    
    const [openModal1, setOpenModalOne] = React.useState(false);
    ...
    
     /***Button  handler for opening the modal ****/
    const openModalHandlerOne = () => setOpenModalOne(true)
    ...

    /***Success handler for Modal to close and perfom some action  ****/
    const handleSuccessOne = () => setOpenModalOne(false);
    ...

    /***Close handler for Modal to close ****/
    const handleCloseOne = () => setOpenModalOne(false);
    ...


  return (
    <Container maxWidth="md">
      <Box component="span" m={3}>
       <Grid container direction="row" ... >
    
    {/* Extra small size modal with button to open the modal */}
      <Button ... onClick={openModalHandlerOne}>
          ...
      </Button>

      <CustomModal
      isOpen={openModal1}
      size="xs" 
      handleSuccess={handleSuccessOne} 
      handleClose={handleCloseOne}
      title="Are you sure your want to exit?"
      buttonClasses= "buttonCss">
      </CustomModal>

    {/* Small size modal */}
      ...
      <CustomModal
      size="sm" ... >
          // Message to display
          ...
      </CustomModal>

    {/* Medium size modal */}
      ...
      <CustomModal
      size="md" ... >
          // Contents to display
          ...
          <form>
          // Form elements to display in the modal
          ...
          </form>
      </CustomModal>

    {/* Large size modal */}
      ...
    <CustomModal
     size="lg" ... >
       // Contents to display
       ...
        <Typography gutterBottom>
          ...
        </Typography>
    </CustomModal>
    </Grid>
    </Box>
    </Container>    
  )
}

export default CustomModalDemo;

// Style of the button in the modal

.buttonCss{
  ...
}
`;

export default customModalCode;
