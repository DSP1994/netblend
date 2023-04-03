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
import UploadEditForm from './pages/uploads/UploadEditForm';
import ProfilePage from './pages/profiles/ProfilePage';
import UsernameForm from './pages/profiles/UsernameForm';
import UserPasswordForm from './pages/profiles/UserPasswordForm';
import ProfileEditForm from './pages/profiles/ProfileEditForm';
import CreateArticleForm from './pages/articles/CreateArticleForm';
import ArticlePage from './pages/articles/ArticlePage';
import ArticlesPage from './pages/articles/ArticlesPage'
import EditArticleForm from './pages/articles/EditArticleForm';
import EventCreateForm from './pages/events/EventCreateForm';

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
              <Route exact path='/posts/:id/edit' render={() => <UploadEditForm />} />
              <Route exact path='/profiles/:id' render={() => <ProfilePage />} />
              <Route exact path='/profiles/:id/edit/username' render={() => <UsernameForm />}
              />
              <Route exact path='/profiles/:id/edit/password' render={() => <UserPasswordForm />}
              />
              <Route exact path='/profiles/:id/edit' render={() => <ProfileEditForm />}
              />
              <Route exact path='/article/create' render={() => <CreateArticleForm />} />
              <Route exact path='/article/:id' render={() => <ArticlePage />}/> 
              <Route exact path='/article' render={() => <ArticlesPage message="No Results Found" />}/>
              <Route exact path='/article/:id/edit' render={() => <EditArticleForm /> }/>
              <Route exact path='/events/create' render={() => <EventCreateForm />} />
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