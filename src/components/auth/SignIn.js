import React from 'react';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

function SignIn() {
  return (
    <div className="SignIn">
      <h1>Sign In</h1>
      <Link to="/sign-up">Need an account?</Link>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Email Address"
          aria-label="Email Address"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Password"
          aria-label="Password"
        />
      </InputGroup>

      <ButtonToolbar>
        <Button size="lg" variant="info">Sign in</Button>
      </ButtonToolbar>
    </div>
  );
}

export default SignIn;
