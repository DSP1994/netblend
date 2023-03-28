import React, {useEffect, useState} from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import ImageSpinner from '../../app_components/ImageSpinner';
import styles from '../../design/ProfilePage.module.css';
import appStyles from '../../App.module.css'
import btnStyles from '../..styles/Button.module.css'
import PopularProfiles from './PopularProfiles';
import { useCurrentUser } from '../../contexts/CurrentUserContext';


function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();

    useEffect(() => {
        setHasLoaded(true);
    }, [])

    const mainProfile =(
        <>
            <Row noGutters className='px-3 text-center'>
                <Col lg={3} className='text-lg-left'>
                    <p>image goes here</p>
                </Col>
                <Col lg={6}>
                    <h3 className='m-2'>Prof User</h3>
                    <p>stats</p>
                </Col>
                <Col lg={3} className='text-lg-right'>
                    <p>follow b</p>
                </Col>
                <Col className='p-3'>Prof Cont</Col>
            </Row>
        </>
    );

    const mainProfilePosts =(
        <>
        < hr/>
            <p>posts main by owner</p>
        </>
    )
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage