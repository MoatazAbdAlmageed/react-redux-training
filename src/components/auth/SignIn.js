import React from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="App">
      <h1>Sign In</h1>
      <Link to="/signup">Need an account?</Link>
    </div>
  );
}

export default SignIn;
