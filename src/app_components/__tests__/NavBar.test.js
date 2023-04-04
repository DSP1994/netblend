import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter as Router} from "react-router-dom"
import NavBar from "../NavBar"
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

test('NavBar renders', () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

//   screen.debug();
  const signInLink = screen.getByRole("Link", { name: "Sign in" });
  expect(signInLink).toBeInTheDocument();
});

test('renders Sign in and Sign up buttons again on log out', async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>,
  );

  const signOutLink = await screen.findByRole('link', { name: 'Sign Out' });
  fireEvent.click(signOutLink);

  const signInLink = await screen.findByRole('link', { name: 'Sign In' });
  const signUpLink = await screen.findByRole('link', { name: 'Sign up' });

  expect(signInLink).toBeInTheDocument();
  expect(signUpLink).toBeInTheDocument();
});