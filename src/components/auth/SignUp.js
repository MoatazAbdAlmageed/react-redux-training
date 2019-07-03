import React from 'react';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function SignUp() {
  return (
    <div className="SignUp">
      <h1>Sign Up</h1>
      <Link to="/sign-in">Have an account?</Link>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Username"
          aria-label="Username"
        />
      </InputGroup>
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
        <Button size="lg" variant="info">Sign up</Button>
      </ButtonToolbar>
    </div>
  );
}

export default SignUp;
