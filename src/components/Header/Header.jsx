import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'utils/routes';
import { useDispatch } from 'react-redux';
import { Button } from 'components/Contact/Contact.styled';
import { logOut } from 'redux/auth/operations';
import { Auth, StyledHeader } from './Header.styled';

export const Header = () => {
  const { user, isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  return (
    <StyledHeader>
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
        <Auth>
          <NavLink to={ROUTES.REGISTER}>Register</NavLink>
          <NavLink to={ROUTES.LOGIN}>Login</NavLink>
        </Auth>
      )}
    </StyledHeader>
  );
};
