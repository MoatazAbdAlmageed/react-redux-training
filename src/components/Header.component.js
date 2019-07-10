import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import { Link, Redirect } from 'react-router-dom';
import currentUserAction from '../actions/currentUser.action';


class Header extends React.Component {
  componentDidUpdate() {

  }

  handleLogOut = (event) => {
    event.preventDefault();
    const { updateCurrentUser } = this.props;
    localStorage.removeItem('token');
    updateCurrentUser({});
  }

  render() {
    const token = localStorage.getItem('token');

    return (

      <div>
        <Redirect to="sign-in" />
        <Row>


          <Col xs lg="10">
            <Nav.Item>
              <Link to="/home">Homet</Link>
            </Nav.Item>
          </Col>

          <Col xs lg="2">
            { token === '123'

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
  currentUser: state.currentUser,
});
const mapDispatchToProps = dispatch => ({
  updateCurrentUser: userInfo => dispatch(currentUserAction(userInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
