import React from 'react';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import { Route, Switch } from 'react-router-dom';
import Create from './article/Create.component';
import SignIn from './auth/SignIn.component';
import SignUp from './auth/SignUp.component';
import Home from './Home.component';
import NoMatch from './NoMatch.component';
import PrivateRoute from './PrivateRoute.component';

class Feed extends React.Component {
  componentDidUpdate() {

  }

  render() {
    return (
      <div>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Switch>
              <Route path="/create-article" component={Create} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/sign-up" component={SignUp} />
              <PrivateRoute path="/home" component={Home} />
              <Route exact path="/" component={SignIn} />
              <Route component={NoMatch} />
            </Switch>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});
export default connect(mapStateToProps, null)(Feed);
