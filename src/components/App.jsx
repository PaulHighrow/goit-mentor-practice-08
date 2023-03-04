import { Contacts } from 'pages/Contacts';
import { HomePage } from 'pages/HomePage';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { ROUTES } from 'utils/routes';
import { Box } from './Box/Box.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Header } from './Header/Header';
import { Loader } from './Loader/Loader';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { SharedLayout } from './SharedLayout';
import { Title } from './Title/Title';

const TITLES = {
  form: 'Phonebook',
  contacts: 'Contacts',
};

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
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
    </Routes>

    // <Box>
    //   <Header />
    //   <Title title={TITLES.form} />
    //   <ContactForm />
    //   <Title title={TITLES.contacts} />
    //   <Filter />
    //   {isLoading && !error && <Loader />}
    //   <ContactsList />
    //   <Toaster />
    // </Box>
  );
};
