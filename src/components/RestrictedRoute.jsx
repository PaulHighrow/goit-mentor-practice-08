// import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import { ROUTES } from 'utils/routes';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({
  component: Component,
  redirectTo = ROUTES.HOME,
}) => {
  //   const { isLoggedIn } = useAuth();
  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};