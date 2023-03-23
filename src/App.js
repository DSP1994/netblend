import styles from './App.module.css';
import NavBar from './app_components/NavBar';
import Container from 'react-bootstrap/Container'
import {Route, Switch} from 'react-router-dom'
import './netblend_api/axiosDefaults'
import SignUpForm from './pages/authentication/SignUpForm';
import SignInForm from './pages/authentication/SignInForm';
import UploadForm from './pages/uploads/UploadForm';
import UploadPage from './pages/uploads/UploadPage';
import UploadsPage from './pages/uploads/UploadsPage';
import { useCurrentUser } from './contexts/CurrentUserContext';

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || '';

  return (
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.TitlePages}>
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <UploadsPage message="No Results Found." />
                )}
              />
              <Route
                exact
                path='/followed'
                render={() => (
                  <UploadsPage
                    message="No Results Found. Follow a user."
                    filter={`owner__followed__owner__profile=${profile_id}&`}
                  />
                )}
              />
              <Route
                exact
                path='/liked'
                render={() => (
                  <UploadsPage
                    message="No Results Found. Like a post."
                    filter={`likes__owner__profile=${profile_id}&ordering=-likes_created_at&`}
                  />
                )}
              />              
              <Route exact path='/' render={() => <UploadsPage message="No Results Found." />} />
              
              <Route exact path='/signin' render={() => <SignInForm />} />
              <Route exact path='/signup' render={() => <SignUpForm />} />
              <Route exact path='/posts/upload' render={() => <UploadForm />} />
              <Route exact path='/posts/:id' render={()=> <UploadPage />} />
              <Route render={
                  ()=>
                  <p>
                    Coffee Beans reach doesn't extend to this page! Our apologies. Please click on one of the links in the Navigation Bar to bring you back to our delicious coffee pages!
                  </p>}
                  />
            </Switch>
          </Container>
        </div>
  );
}

export default App;