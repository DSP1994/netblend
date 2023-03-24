import React from 'react';
import { Dropdown } from 'react-bootstrap';

import styles from '../design/Dropdown.module.css'
// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const EditDelete = React.forwardRef(({ onClick }) => (
  <i
    className='fas fa-ellipsis-v'
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const Dropdown = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle as={EditDelete} id="dropdown-custom-components">
                Custom toggle
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                    Orange
                </Dropdown.Item>
                <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

popperConfig={{ strategy: "fixed" }}