import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import signInAction from '../../actions/signIn.action';
import signInReducer from '../../reducers/signIn.reducer';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'admin@admin.com',
      password: 'admin',
    };
  }

  componentDidUpdate() {
    console.log('SignIn:: componentDidUpdate');
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const { signInHandler } = this.props;
    signInHandler(this.state);
  }

  render() {
    const validated = this.state.email && this.state.password;
    const { currentUser } = this.props;
    console.log('currentUser', currentUser);
    return (
      <div>
        { currentUser && currentUser.email ? <Redirect to="/home" />
          : (
            <div className="SignIn">
              <Link to="/sign-up">Need an account?</Link>
              <Form
                novalidates={validated.toString()}
                validated={validated}
                value={this.state.email}
                onSubmit={e => this.handleSubmit(e)}
              >
                <InputGroup className="mb-3">
                  <FormControl
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    name="password"
                    type="text"
                    placeholder="Password"
                    aria-label="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </InputGroup>

                <ButtonToolbar>
                  <Button type="submit" size="lg" variant="info">Sign in</Button>
                </ButtonToolbar>
              </Form>

            </div>
          )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.signIn,
});

const mapDispatchToProps = dispatch => ({
  signInHandler: userInfo => dispatch(signInAction(userInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
