import React from 'react';
import { Dropdown } from 'react-bootstrap';

import styles from '../design/OwnerDropdown.module.css'
// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const EditDelete = React.forwardRef(({ onClick }, ref) => (
  <i
    className='fas fa-ellipsis-v'
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const OwnerDropdown = () => {
    return (
        <Dropdown className='ml-auto' drop='left'>
            <Dropdown.Toggle as={EditDelete}/>
            <Dropdown.Menu 
              className='text-center'
              popperConfig={{ strategy: "fixed" }}
            >
                <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}