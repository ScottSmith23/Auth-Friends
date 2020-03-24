import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
  const [state,setState] = useState({
    credentials: {
      username: '',
      password: ''
    }
  })

  const handleChange = e => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();
    // make a POST request with { username, password } to get the token back
    // endpoint will be "http://localhost:5000/api/login"
    // we will store the token in localstorage
    // if this call is successful we will navigate the user to the /protected route
    // TODO handle errors to show error state on the login form
    axiosWithAuth()
      .post('/api/login', state.credentials)
      .then(res => {
        // res.data.payload
        console.log(res);
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        props.history.push('/protected');
      })
      .catch(err => console.log(err));
  };

    return (
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={state.credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={state.credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
}

export default Login;
