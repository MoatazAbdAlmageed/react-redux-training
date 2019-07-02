import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

            <header className="App-header">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sign-in">Sign In</Link></li>
              </ul>
            </header>
          </Col>
        </Row>

        <Row>
          <Col>
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
