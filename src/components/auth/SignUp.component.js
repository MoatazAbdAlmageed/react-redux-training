import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import currentUserAction from '../../actions/currentUser.action';
import API from '../../utils/API';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { username, email, password } = this.state;
    const { updateCurrentUser } = this.props;

    try {
      const response = await API.post('/users', { user: { username, email, password } });
      if (response.status === 200) {
        localStorage.setItem('token', '123');
        updateCurrentUser(this.state);
      }
    } catch (e) {
      this.setState({ error: e });
    }
  }

  render() {
    const { validated } = false;
    const {
      username, email, password, error,
    } = this.state;
    const token = localStorage.getItem('token');

    return (
      <div>

        { token && token === '123' ? <Redirect to="/home" />
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

              {error && (
              <Alert variant="danger">
                    Error
              </Alert>
              )}

            </div>
          )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
  updateCurrentUser: userInfo => dispatch(currentUserAction(userInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
