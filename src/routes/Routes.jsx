import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import NavBar from '../components/NavBar';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NavRouter from './NavRouter';
import ShowUser from '../pages/showUser';
import RefreshToken from '../pages/RefreshToken';

const Routes = () => (
  <Switch>
    <NavRouter path="/about">
      <About />
    </NavRouter>
    <NavRouter path="/login">
      <Login />
    </NavRouter>
    <NavRouter path="/register">
      <Register />
    </NavRouter>
    <NavRouter path="/user">
      <ShowUser />
    </NavRouter>
    <NavRouter path="/refresh">
      <RefreshToken />
    </NavRouter>
    <Route path="/">
      <NavBar />
      <App />
    </Route>
  </Switch>
);

export default Routes;
