import React, { useState } from 'react';
import axios from 'axios';
import './loginPage.css';

const api = axios.create({ baseURL: 'http://localhost:5000' });

function Login() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', {
        cpf,
        password,
      });

      if (response.status === 200) {
        window.location.href = '/main';
        localStorage.setItem('cpf', cpf);
      } 
    } catch (error) {
      if(error.response.status === 401) {
        alert('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
      }
      console.error(error.response.data.message);
    }
  };

  return (
    <div className='login-container'>
      <div className='login-box'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='cpf'>CPF:</label>
            <input
              type='text'
              id='cpf'
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit'>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;