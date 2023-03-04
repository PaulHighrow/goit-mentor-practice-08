import { Contacts } from 'pages/Contacts';
import { HomePage } from 'pages/HomePage';
import { Login } from 'pages/Login';
import { NotFound } from 'pages/NotFound';
import { Register } from 'pages/Register';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { ROUTES } from 'utils/routes';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { SharedLayout } from './SharedLayout';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path={ROUTES.REGISTER}
          element={
            <RestrictedRoute
              redirectTo={ROUTES.CONTACTS}
              component={<Register />}
            />
          }
        />
        <Route
          path={ROUTES.LOGIN}
          element={
            <RestrictedRoute
              redirectTo={ROUTES.CONTACTS}
              component={<Login />}
            />
          }
        />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <PrivateRoute redirectTo={ROUTES.LOGIN} component={<Contacts />} />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
