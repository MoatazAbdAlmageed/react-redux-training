import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { Route, Redirect } from 'react-router-dom';
import Create from './article/Create.component';
import SignIn from './auth/SignIn.component';
import SignUp from './auth/SignUp.component';
import Home from './Home.component';

const isLoggedIn = localStorage.getItem('isLoggedIn');
console.log('isLoggedIn', isLoggedIn);
function App() {
  return (
    <div>
      <Container>
        <Row>
          <Nav
            activeKey="/"
          />
          <Container>
            <Row className="justify-content-md-center">

              <Col xs lg="10">
                <Nav.Item>
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
              </Col>

              <Col xs lg="2">
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
                      <Nav.Link className="pull-right" href="sign-in">Sign In</Nav.Link>
                    </Nav.Item>
                  )
                }
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="justify-content-md-center">
          <Col md={6}>
            <Route path="/create-article" component={Create} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            {isLoggedIn
              ? <Route path="/" exact component={Home} /> : <Redirect to="/sign-in" />
              }
          </Col>
        </Row>


      </Container>


    </div>
  );
}

export default App;
