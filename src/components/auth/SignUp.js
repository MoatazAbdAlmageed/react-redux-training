import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="App">
      <h1>Sign up</h1>
      <Link to="/signIn">Have an account?</Link>
    </div>
  );
}

export default SignUp;
