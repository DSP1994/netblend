import styles from './App.module.css';
import NavBar from './app_components/NavBar';
import Container from 'react-bootstrap/Container'
import {Route, Switch} from 'react-router-dom'
import './netblend_api/axiosDefaults'


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.TitlePages}>
        <Switch>
          <Route exact path='/' render={() => <h1>Home Page Tester</h1>} />
          <Route exact path='/signin' render={() => <h1>Sign In Tester</h1>} />
          <Route exact path='/signup' render={() => <h1>Sign Up Tester</h1>} />
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