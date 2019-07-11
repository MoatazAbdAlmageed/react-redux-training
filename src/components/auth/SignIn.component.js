import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import Simplert from 'react-simplert';
import API from '../../utils/API';
import currentUserAction from '../../actions/currentUser.action';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

      const { email, password } = this.state;
      const { updateCurrentUser } = this.props;
      try {
        const response = await API.post('/users/login', { user: { email, password } });
        if (response.status === 200) {
          localStorage.setItem('currentUser', JSON.stringify(response.data.user));
          updateCurrentUser(response.data.user);
        }
      } catch (e) {
        this.setState({ showAlert: true, messageAlert: 'Login failed wrong user credentials' });
      }
    }


    render() {
      const validated = false;
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));

      const {
        email, password, showAlert, messageAlert, titleAlert, typeAlert,
      } = this.state;


      return (
        <div>
          {currentUser && currentUser.token ? <Redirect to="/home" />
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
                      required
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
                      required
                      type="password"
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

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
  updateCurrentUser: userInfo => dispatch(currentUserAction(userInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
