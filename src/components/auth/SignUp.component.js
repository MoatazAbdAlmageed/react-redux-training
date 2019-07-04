import React from 'react';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassWordChange = this.handlePassWordChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePassWordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleUserNameChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { validated } = this.state;

    return (
      <div className="SignUp">
        <h1>Sign Up</h1>
        <Link to="/sign-in">Have an account?</Link>
        <Form
          noValidate
          validated={validated}
          onSubmit={e => this.handleSubmit(e)}
        >
          <InputGroup className="mb-3">
            <FormControl
              required
              type="text"
              placeholder="User Name"
              aria-label="User Name"
              onChange={this.handleUserNameChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              required
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              onChange={this.handleEmailChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              required
              type="text"
              placeholder="Password"
              aria-label="Password"
              onChange={this.handlePassWordChange}
            />
          </InputGroup>

          <ButtonToolbar>
            <Button type="submit" size="lg" variant="info">Sign up</Button>
          </ButtonToolbar>
        </Form>
      </div>
    );
  }
}
export default SignUp;
