import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import Coffee_Bean_Logo from '../images/Coffee_Bean_Logo.png';
import styles from '../design/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { useCurrentUser } from '../contexts/CurrentUserContext';

const NavBar = () => {
    const currentUser = useCurrentUser();
    const addPostIcon = (
                    <NavLink
                        to='/posts/create'
                        className={styles.NavLink}
                        activeClassName={styles.Active}
                        >
                            <i className="fas fa-plus-square"></i>
                            Add Photo
                    </NavLink>        
    )
    const loggedInIcons = 
                <>
                    <NavLink
                        to='/followed'
                        className={styles.NavLink}
                        activeClassName={styles.Active}
                        >
                            <i className="fas fa-stream"></i>
                            Followed Profiles
                    </NavLink>
                    <NavLink
                        to='/liked'
                        className={styles.NavLink}
                        activeClassName={styles.Active}
                        >
                            <i className="fas fa-heart"></i>
                            Liked Photos
                    </NavLink>    
                    <NavLink
                        to='/'
                        className={styles.NavLink}
                        onClick={()=>{}}
                        >
                            <i className="fas fa-sign-out-alt"></i>
                            Sign Out
                    </NavLink>
                    <NavLink
                        to={`/profiles/${currentUser?.profile_id}`}
                        className={styles.NavLink}
                        >
                            <img src={currentUser?.profile_image}/>
                    </NavLink>                                                 
                </>
    const loggedOutIcons = ( 
                <>
                    <NavLink
                        to='signin'
                        className={styles.NavLink}
                        activeClassName={styles.Active}
                        >
                            <i className="fas fa-sign-in-alt"></i>
                            Sign In
                    </NavLink>
                    <NavLink
                        to='signup'
                        className={styles.NavLink}
                        activeClassName={styles.Active}
                        >
                            <i className="fas fa-user-plus"></i>
                            Sign Up
                    </NavLink>
                </>
    )
  return (
    <Navbar className={styles.NavBar} expand="sm" fixed="top">
        <Container>
            <NavLink to='/'>
                <Navbar.Brand>
                    <img src={Coffee_Bean_Logo} alt="logo" height="45"/>
                </Navbar.Brand>
            </NavLink>
            {currentUser && addPostIcon }
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-right">
                    <NavLink
                    exact
                    to='/'
                    className={styles.NavLink}
                    activeClassName={styles.Active}
                    >
                        <i className="fas fa-home"></i>
                        Home
                    </NavLink>
                    {currentUser ? loggedInIcons : loggedOutIcons}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
};

export default NavBar