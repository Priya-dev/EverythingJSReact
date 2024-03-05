import React, { useEffect, useState } from 'react';
import './style.css';

export default function Form() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password1: '',
    password2: '',
    errors: {
      fn: '',
      ln: '',
      em: '',
      pswd1: '',
      pswd2: '',
    },
  });
  const [success, setSuccess] = useState(false);

  const handleValidate = () => {
    let error = false;
    let modState = { ...state.errors };
    if (state.firstName !== '' && state.firstName.length < 3) {
      modState.fn = 'Should be at least 3 characters long';
      error = true;
    } else {
      modState.fn = '';
    }
    if (state.lastName !== '' && state.lastName.length < 3) {
      modState.ln = 'Should be at least 3 characters long';
      error = true;
    } else {
      modState.ln = '';
    }
    setState({ ...state, errors: modState });
    return error;
  };

  const handleChange = (e, key) => {
    e.preventDefault();
    setState({ ...state, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    let hasErrors = handleValidate(); // Validate fields
    if (hasErrors) {
      // If there are errors, don't proceed with submission
      return;
    }
    setSuccess(true);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="items">
          <label>First Name</label>
          <input
            name="firstName"
            type="text"
            value={state.firstName}
            onChange={(e) => handleChange(e, 'firstName')}
            placeholder="First Name"
          />
          {state.errors.fn && <p className="error">{state.errors.fn}</p>}
        </div>
        <div className="items">
          <label>Last Name</label>
          <input
            name="lastName"
            type="text"
            value={state.lastName}
            onChange={(e) => handleChange(e, 'lastName')}
            placeholder="Last Name"
          />
          {state.errors.ln && <p className="error">{state.errors.ln}</p>}
        </div>
        <div className="items">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={state.email}
            onChange={(e) => handleChange(e, 'email')}
            placeholder="Email"
          />
          {state.errors.em && <p className="error">{state.errors.em}</p>}
        </div>
        <div className="items">
          <label>Password</label>
          <input
            name="password1"
            type="password"
            value={state.password1}
            onChange={(e) => handleChange(e, 'password1')}
            placeholder="Password"
          />
          {state.errors.pswd1 && <p className="error">{state.errors.pswd1}</p>}
        </div>
        <div className="items">
          <label>Confirm Password</label>
          <input
            name="password2"
            type="password"
            value={state.password2}
            onChange={(e) => handleChange(e, 'password2')}
            placeholder="Confirm Password"
          />
          {state.errors.pswd2 && <p className="error">{state.errors.pswd2}</p>}
        </div>
        <div className="items">
          <button className="submit" type="submit">
            Register
          </button>
        </div>
        {success && (
          <div className="items">
            <p className="success">You have registered successfully!</p>
          </div>
        )}
      </form>
    </div>
  );
}
