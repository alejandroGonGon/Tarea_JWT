import React, { useState } from 'react';
import SessionController from '../networking/controllers/SessionController';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    SessionController.register(username, email, password);
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input type="text" id="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="text" id="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
