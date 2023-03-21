import styles from './App.module.css';
import NavBar from './app_components/NavBar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.TitlePages}>
        <h1>Home Page Tester</h1>
        <h1>Sign In Tester</h1>
        <h1>Sign Up Tester</h1>
      </Container>
    </div>
  );
}

export default App;