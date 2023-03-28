import React from 'react';
import { Dropdown } from 'react-bootstrap';
import styles from '../design/OwnerDropdown.module.css'
import { useHistory } from 'react-router';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const EditDelete = React.forwardRef(({ onClick }, ref) => (
  <i
    className='fa-solid fa-ellipsis-vertical'
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const OwnerDropdown = ({handleEdit, handleDelete}) => {
    return (
        <Dropdown className='ml-auto' drop='left'>
            <Dropdown.Toggle as={EditDelete}/>
            <Dropdown.Menu 
              className='text-center'
              popperConfig={{ strategy: "fixed" }}
            >
                <Dropdown.Item
                  className={styles.OwnerDropdown}
                  onClick={handleEdit}
                  aria-label='edit'
                >
                  <i className='fas fa-edit'/>
                </Dropdown.Item>
                <Dropdown.Item
                  className={styles.OwnerDropdown}
                  onClick={handleDelete}
                  aria-label='delete'
                >
                  <i className='fas fa-trash-alt'/>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export function ProfileEdit({id}){
  const history = useHistory();
  return ()
}