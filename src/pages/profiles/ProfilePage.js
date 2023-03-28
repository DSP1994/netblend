import React, {useEffect, useState} from 'react';
import { Row, Container, Col, Image, Button } from 'react-bootstrap';
import ImageSpinner from '../../app_components/ImageSpinner';
import styles from '../../design/ProfilePage.module.css';
import appStyles from '../../App.module.css'
import btnStyles from '../../design/Button.module.css'
import PopularProfiles from './PopularProfiles';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useParams } from 'react-router';
import { axiosReq } from '../../netblend_api/axiosDefaults';
import { useProfileData, useSetProfileData } from '../../contexts/ProfileDataContext';


function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const {id} = useParams();
    const setProfileData = useSetProfileData();
    const {pageProfile} = useProfileData();
    const [profile] = pageProfile.results;
    const is_owner = currentUser?.username === profile?.owner;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{data: pageProfile}] = await Promise.all([
                axiosReq.get(`/profiles/${id}/`),
                ])
                setProfileData(prevState => ({
                    ...prevState,
                    pageProfile: {results: [pageProfile]},
                }))
                setHasLoaded(true);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [id, setProfileData]);

    const mainProfile =(
        <>
            <Row noGutters className='px-3 text-center'>
                <Col lg={3} className='text-lg-left'>
                    <Image
                        className={styles.ProfileImage}
                        roundedCircle
                        src={profile?.image}
                    />
                </Col>
                <Col lg={6}>
                    <h3 className='m-2'>{profile?.owner}</h3>
                    <Row className='justify-content-center no-gutters'>
                        <Col xs={3} className='my-2'>
                            <div>{profile?.posts_count}</div>
                            <div>posts</div>
                        </Col>
                        <Col xs={3} className='my-2'>
                            <div>{profile?.followers_count}</div>
                            <div>followers</div>
                        </Col>
                        <Col xs={3} className='my-2'>
                            <div>{profile?.following_count}</div>
                            <div>following</div>
                        </Col>                                                
                    </Row>
                </Col>
                <Col lg={3} className='text-lg-right'>
                    {currentUser && !is_owner && 
                    (profile?.following_id ? (
                        <Button>Unfollow</Button>
                    ) : (
                        <Button>Follow</Button>
                    ))}
                </Col>
                <Col className='p-3'>Prof Cont</Col>
            </Row>
        </>
    );

    const mainProfilePosts =(
        <>
        < hr/>
            <p className='text-center'>posts main by owner</p>
        </>
    )
  return (
    <Row>
        <Col className='py-2 p-0 p-lg-2' lg={8}>
            <PopularProfiles mobile />
            <Container className={appStyles.Content}>
                {hasLoaded ? (
                    <>
                        {mainProfile}
                        {mainProfilePosts}
                    </>
                ) : (
                    <ImageSpinner spinner />
                )}
            </Container>
        </Col>
        <Col className='d-none d-lg-block p-0 p-lg-2' lg={4}>
            <PopularProfiles />
        </Col>
    </Row>
  )
}

export default ProfilePage;