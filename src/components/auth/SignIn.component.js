import React from 'react';
import { Link, Redirect } from 'react-router-dom';
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

  componentDidMount() {
    console.log('componentDidMount');
    document.title = 'React Login';
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
    console.log('render');
    console.log(localStorage.getItem('isLoggedIn'));
    const validated = this.state;
    const { auth } = this.props;

    if (auth) {
      localStorage.setItem('isLoggedIn', true);
    }


    return localStorage.getItem('isLoggedIn') ? (
      <Redirect to="/" />
    )
      : (
        <div className="SignIn">
          <Link to="/sign-up">Need an account?</Link>
          <Form
            novalidates={validated.toString()}
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
const mapStateToProps = state => ({
  auth: state.signInReducer.auth,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      SignIn: actions.signInAction,
    },
    dispatch,
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
