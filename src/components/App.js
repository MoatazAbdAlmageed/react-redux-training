import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Create from './article/Create';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Home from './Home';

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
              <Nav.Item>
                <Nav.Link href="sign-in">Sign In</Nav.Link>
              </Nav.Item>
            </Nav>


          </Col>
        </Row>

        <Row>
          <Col>
            <Route path="/create-article" component={Create} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/" exact component={Home} />
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
