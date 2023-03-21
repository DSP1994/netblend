import styles from './App.module.css';
import NavBar from './app_components/NavBar';
import Container from 'react-bootstrap/Container'
import {Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.TitlePages}>
        <Switch>
          <Route exact path='/' render={() => <h1>Home Page Tester</h1>} />
          <Route exact path='/' render={() => <h1>Sign In Tester</h1>} />
          <Route exact path='/' render={() => <h1>Sign Up Tester</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;