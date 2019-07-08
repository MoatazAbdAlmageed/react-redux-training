import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import signOutAction from '../actions/signOut.action';


class Header extends React.Component {
  handleLogOut = (event) => {
    event.preventDefault();
    const { signOutAction } = this.props;
    localStorage.removeItem('token');
    signOutAction(this.state);
    this.setState({ currentUser: {} });
  }

  render() {
    const token = localStorage.getItem('token');

    return (
      <div>
        <Row>


          <Col xs lg="10">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
          </Col>

          <Col xs lg="2">
            {token

              ? (
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle as={NavLink}>Moataz</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <button className="dropdown-item" onClick={e => this.handleLogOut(e)}>Log Out</button>
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
  currentUser: state.currentUser,
  isLogOut: state.isLogOut,
});
const mapDispatchToProps = dispatch => ({
  signOutAction: () => dispatch(signOutAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
