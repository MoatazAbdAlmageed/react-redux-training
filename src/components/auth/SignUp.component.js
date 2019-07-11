import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import Simplert from 'react-simplert';
import API from '../../utils/API';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      showAlert: false,
      messageAlert: '',
      titleAlert: 'Error',
      typeAlert: 'warning',
    };
  }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
        showAlert: false,
      });
    }

    async handleSubmit(event) {
      event.preventDefault();
      const { username, email, password } = this.state;

      try {
        const response = await API.post('/users', { user: { username, email, password } });
        if (response.status === 200) {
          this.setState({ redirectToSignIn: true });
        }
      } catch (e) {
        this.setState({ showAlert: true, messageAlert: 'Sign Up failed' });
      }
    }

    render() {
      const { validated } = false;
      const {
        username, email, password, redirectToSignIn, showAlert, messageAlert, titleAlert, typeAlert,
      } = this.state;
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));

      return (
        <div>
          {redirectToSignIn && <Redirect to="/sign-in" /> }
          {currentUser && currentUser.toekn ? <Redirect to="/home" />
            : (
              <div className="SignUp">
                <h1>Sign Up</h1>
                <Link to="/sign-in">Have an account?</Link>
                <Form
                  name="SignUp"
                  novalidates={validated}
                  validated={validated}
                  onSubmit={e => this.handleSubmit(e)}
                >
                  <InputGroup className="mb-3">
                    <FormControl
                      required
                      type="text"
                      name="username"
                      value={username}
                      placeholder="User Name"
                      aria-label="User Name"
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <FormControl
                      required
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Email Address"
                      aria-label="Email Address"
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <FormControl
                      required
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Password"
                      aria-label="Password"
                      onChange={this.handleChange}
                    />
                  </InputGroup>

                  <ButtonToolbar>
                    <Button type="submit" size="lg" variant="info">Sign up</Button>
                  </ButtonToolbar>
                </Form>

                <Simplert
                  showSimplert={showAlert}
                  type={typeAlert}
                  title={titleAlert}
                  message={messageAlert}
                />

              </div>
            )}
        </div>
      );
    }
}

export default SignUp;
