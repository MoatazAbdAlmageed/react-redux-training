import React from 'react';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import { Route, Switch } from 'react-router-dom';
import signOutAction from '../actions/signOut.action';
import Create from './article/Create.component';
import SignIn from './auth/SignIn.component';
import SignUp from './auth/SignUp.component';
import Home from './Home.component';
import NoMatch from './NoMatch.component';

class Feed extends React.Component {
  render() {
    const isAuthenticated = localStorage.getItem('token');
    return (
      <div>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Switch>

              <Route path="/create-article" component={Create} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/sign-up" component={SignUp} />
              {isAuthenticated
                ? <Route path="/" component={Home} />
                : (
                  null
                )
              }
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
  isLogOut: state.isLogOut,
});
const mapDispatchToProps = dispatch => ({
  signOutAction: () => dispatch(signOutAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Feed);
