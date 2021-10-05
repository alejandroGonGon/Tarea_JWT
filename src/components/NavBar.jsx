import React from 'react';
import {
  Link,
} from 'react-router-dom';

const NavBar = () => (
  <header>
    <Link to="/">Home</Link>
    <br />
    <Link to="/Login">Login</Link>
    <br />
    <Link to="/register">Register</Link>
    <br />
    <Link to="/refresh">Refresh</Link>
    <br />
    <Link to="/user">Users</Link>
  </header>
);

export default NavBar;
