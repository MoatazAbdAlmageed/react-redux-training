import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Create from './article/Create';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Home from './Home';

const isLoggedIn = false;
function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Nav
              activeKey="/"
            >
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>

              {isLoggedIn

                ? (
                  <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink}>Moataz</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Settings</Dropdown.Item>
                      <Dropdown.Item href="sign-out">Sign Out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )
                : (
                  <Nav.Item>
                    <Nav.Link href="sign-in">Sign In</Nav.Link>
                  </Nav.Item>
                )
              }
            </Nav>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md={6}>
            <Route path="/create-article" component={Create} />
            <Route path="/Sign-in" component={SignIn} />
            <Route path="/Sign-up" component={SignUp} />
            <Route path="/" exact component={Home} />
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
