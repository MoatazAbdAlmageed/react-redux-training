import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import currentUserAction from '../../actions/currentUser.action';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'admin@admin.com',
      password: 'admin',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const { updateCurrentUser } = this.props;
    updateCurrentUser(this.state);
  }

  render() {
    const validated = false;
    const token = localStorage.getItem('token');
    const { email, password } = this.state;
    return (
      <div>
        { token && token === '123' ? <Redirect to="/home" />
          : (
            <div className="SignIn">
              <Link to="/sign-up">Need an account?</Link>
              <Form
                name="SignIn"
                novalidates={validated.toString()}
                validated={validated}
                onSubmit={e => this.handleSubmit(e)}
              >
                <InputGroup className="mb-3">
                  <FormControl
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    value={email}
                    onChange={this.handleChange}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    name="password"
                    type="text"
                    placeholder="Password"
                    aria-label="Password"
                    value={password}
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
  currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
  updateCurrentUser: userInfo => dispatch(currentUserAction(userInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
