import React from "react";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import { Route, Switch } from "react-router-dom";
import Create from "./article/Create.component";
import SignIn from "./auth/SignIn.component";
import SignUp from "./auth/SignUp.component";
import Home from "./Home.component";
import NoMatch from "./NoMatch.component";
import PrivateRoute from "./PrivateRoute.component";

class Main extends React.Component {
  componentDidUpdate() {
    /**
     * if deleted the following error will appear
     * 13:1  error  Component should be written as a pure function  react/prefer-stateless-function
     * any recommendation I want to keep it statefull component to make sure it will render in signin/signup actions !!
     */
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
  currentUser: state.currentUser
});
export default connect(
  mapStateToProps,
  null
)(Main);
