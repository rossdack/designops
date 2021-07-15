const stickyFooterCode = `
import React from 'react';
import {StickyFooter} from 'designops';

const StickyFooterDemo = () => {
    return(
        <>
        <StickyFooter copyright={\`@${new Date().getFullYear()} .. ' position={'left'}>
        ...
        </StickyFooter>
        </>
    )
}

export default StickyFooterDemo;
`;
export default stickyFooterCode;
