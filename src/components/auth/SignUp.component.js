import React from 'react';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import currentUserAction from '../../actions/currentUser.action';

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

  handleSubmit(event) {
    event.preventDefault();
    const { updateCurrentUser } = this.props;
    updateCurrentUser(this.state);
  }

  render() {
    const { validated } = false;
    const { username, email, password } = this.state;

    return (
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
