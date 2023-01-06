import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from './Layout';
import { lazy } from 'react';
// import { NoPageFound } from './NoPageFound';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/authOperations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivatRoute } from './PrivatRoute';
import { useAuth } from 'hooks/hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const AppWrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 20px;
  background: black;
  color: white;
  list-style: none;
  font-family: sans-serif;
`;

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Loadind...</h1>
  ) : (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivatRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </AppWrapper>
  );
};
