// import { Navigation } from '../Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';

import css from './Header.module.css';

import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'utils/routes';
import { useDispatch } from 'react-redux';
import { Button } from 'components/Contact/Contact.styled';
import { logOut } from 'redux/auth/operations';

export const Header = () => {
  const { user, isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  return (
    <header className={css.header}>
      <nav>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
      </nav>
      {/* <Navigation /> */}
      {isLoggedIn ? (
        <>
          <NavLink to={ROUTES.CONTACTS}>Contacts</NavLink>
          <div>
            <p>Welcome, {user.name}</p>
            <Button type="button" onClick={() => dispatch(logOut())}>
              Logout
            </Button>
          </div>
        </>
      ) : (
        <div className={css.auth}>
          <NavLink to={ROUTES.REGISTER}>Register</NavLink>
          <NavLink to={ROUTES.LOGIN}>Login</NavLink>
        </div>
      )}
    </header>
  );
};
