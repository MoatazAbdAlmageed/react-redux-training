import React from 'react';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import actions from '../../actions';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassWordChange = this.handlePassWordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePassWordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.SignIn(this.state);
  }

  render() {
    const validated = this.state;
    return (
      <div className="SignIn">
        <h1>Sign In</h1>
        <Link to="/sign-up">Need an account?</Link>
        <Form
          noValidate
          validated={validated}
          onSubmit={e => this.handleSubmit(e)}
        >
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
            <Button type="submit" size="lg" variant="info">Sign in</Button>
          </ButtonToolbar>
        </Form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      SignIn: actions.signInAction,
    },
    dispatch,
  ),
});
export default connect(null, mapDispatchToProps)(SignIn);
