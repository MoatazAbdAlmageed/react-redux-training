import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import { Redirect } from 'react-router-dom';
import signOutAction from '../actions/signOut.action';
import signInAction from '../actions/signIn.action';


class Header extends React.Component {
  componentDidUpdate() {
    console.log('Header:: componentDidUpdate');
  }

  handleLogOut = (event) => {
    console.log('handleLogOut');
    event.preventDefault();
    const { signIn, signOut } = this.props;
    localStorage.removeItem('token');
    signOut(this.state);
    signIn({});
  }

  render() {
    console.log('Header Render ');
    const token = localStorage.getItem('token');

    return (

      <div>
        <Redirect to="sign-in" />
        <Row>


          <Col xs lg="10">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
          </Col>

          <Col xs lg="2">
            { token === '1231231'

              ? (
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle as={NavLink}>Moataz</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <button type="button" className="dropdown-item" onClick={e => this.handleLogOut(e)}>Log Out</button>
                  </Dropdown.Menu>
                </Dropdown>
              )
              : (
                <Nav.Item>
                  <Nav.Link className="pull-right" href="sign-in">Sign In</Nav.Link>
                </Nav.Item>
              )
        }
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.signIn,
  signOut: state.signOut,
});
const mapDispatchToProps = dispatch => ({
  signIn: () => dispatch(signInAction()),
  signOut: () => dispatch(signOutAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
