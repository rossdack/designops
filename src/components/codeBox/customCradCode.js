const customCardCode = `import React from 'react';
...
import {CustomCard} from 'designops';

...
const CustomCardDemo = () => {

  const [subHeader, setSubHeader] = useState('This is a media card. You can use this section to describe the content.');
  ...
  
  // Function for view button click
  const viewAction = (header, subHeader) => {
    // Display the modal
    ...
  };
  
  // Function for edit button click
  const editAction = () => {
    // Display the modal to edit
    ...
  }
  
  return (
    <div>
      {/* Displaying custom card */}
      <div className='container'>    
        <CustomCard 
        viewAction={viewAction} 
        editAction={editAction}
        cardHeading={...}
        cardSubHeading={...}
        img={...}
        cardClasses='cardClass'/>);
      </div>

      {/* Modal for view and edit button click of the card */}
       <CustomModal> 
          ...

      </CustomModal>
    </div>
  );
}

export default CustomCardDemo;

// Style of the card

.cardClass {
  ...
}

.container {
  ...
}

`;
export default customCardCode;
