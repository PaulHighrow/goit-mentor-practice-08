// import { Navigation } from '../Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks';
// import css from './AppBar.module.css';

import { NavLink } from 'react-router-dom';
import { ROUTES } from 'utils/routes';

export const Header = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <header>
      <nav>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
        <NavLink to={ROUTES.REGISTER}>Register</NavLink>
        <NavLink to={ROUTES.LOGIN}>Login</NavLink>
        <NavLink to={ROUTES.CONTACTS}>Contacts</NavLink>
      </nav>
      {/* <Navigation /> */}
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};
