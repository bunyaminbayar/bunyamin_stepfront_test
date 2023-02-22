import './login.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { UserLoginGlobal } from '../../App';
import React, { useContext, useState } from 'react';

// React js set cookie function
import SetCookie from '../../components/cookie/setCookie';

export default function Login() {

  const history = useHistory();
  const { setGgUserStatu, setGToken } = useContext(UserLoginGlobal);
  const [username, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  const [errrorMessage, setErrrorMessage] = useState('');

  // Login function
  const handleSubmit = e => {
    const url = '/api/Login';
    const data = {
      username: username,
      password: userPass,
    };
    const headers = {
      'Content-Type': 'application/json',
    };

    axios
      .post(url, data, { headers })
      .then(response => {
        setGToken(response.data);
        SetCookie('UserToken', response.data);
        setGgUserStatu('true');
        history.push('/');
        // Handle successful login
      })
      .catch(error => {
        console.error(error);
        setErrrorMessage('Username or password is wrong!');
        // Handle login error
      });
  };

  return (
    <div className='login'>
      <span className='loginTitle mb-3'>Login</span>
      <div className='loginForm'>
        <p className='erroMessage'>{errrorMessage}</p>
        <div className='form-group'>
          <label htmlFor='inputUserName'>User Name</label>
          <input
            type='text'
            className='form-control'
            id='inputUserName'
            placeholder='&nbsp;'
            maxLength='20'
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='inputPassword'>Password</label>
          <input
            type='password'
            className='form-control'
            id='inputPassword'
            placeholder='&nbsp;'
            onChange={e => setUserPass(e.target.value)}
          />
        </div>

        {/** Used link because after login go game page */}
          <button
            onClick={handleSubmit}
            type='submit'
            className='btn btn-primary btnFormSubmit'
          >
            Sign in
          </button>
      </div>
    </div>
  );
}
