import React from 'react'
import { Col, Container, Media } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useCurrentUser } from '../../contexts/CurrentUserContext';

import Avatar from '../../app_components/Avatar';
import {OwnerDropdown} from '../../app_components/OwnerDropdown';
import { axiosRes } from '../../netblend_api/axiosDefaults';
import styles from '../../design/Event.module.css'
import appStyles from '../../App.module.css'

function Event(props) {
const {id, owner, profile_id, profile_image, created_on,
    modified_on, title, content, date, time, city,
    country, price, event_link, eventPage, } = props;

const currentUser = useCurrentUser();
const is_owner = currentUser?.username === owner;
const history = useHistory();

const handleEdit = () => {
    history.push(`/events/${id}/edit`);
};

const handleDelete = async () => {
    try {
        await axiosRes.delete(`/events/${id}/`);
        history.goBack();
    } catch (error) {
        // console.log(error)
        
    }
};

  return (
    <Container className={`${styles.Event} ${appStyles.Content}`}>
        <br />
        <Media className='align-items-center justify-content-between'>
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={45}/>
                {owner}   
            </Link>
            <div className='d-flex align-items-center'>
                {is_owner && eventPage && (
                    <OwnerDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
                )} 
            </div>
        </Media>
        <Col>
            <Link to={`/events/${id}`}>
                <h2>
                    <strong>{title}</strong>
                </h2>
            </Link>
            <p className={styles.TextContent}>Last Updated: {modified_on}</p>
            <div className={`${styles.TextContent}`}>
                <p>{content}</p>
                <p>Location: {city}, {country}</p>
                <p>Data: {date} | Time: {time} | Cost: £{price}</p>
                <p>More Info Page 
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href={event_link}
                    ><strong> Click Me</strong></a></p>        
                <p>Uploaded: {created_on}</p>
            </div>
        </Col>
    </Container>
  )
}

export default Event;