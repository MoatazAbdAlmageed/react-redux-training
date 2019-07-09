import React from 'react';
import { connect } from 'react-redux';
import signOutAction from '../actions/signOut.action';
import Feed from './Feed.component';


class Main extends React.Component {
  componentDidUpdate() {
    console.log('Main:: componentDidUpdate');
  }


  render() {
    const token = localStorage.getItem('token');

    return (
      <div>
        {token
          ? <Feed />
          : 'login Please'
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  isLogOut: state.isLogOut,
});
const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
