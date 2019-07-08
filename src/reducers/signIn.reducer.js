import { SIGNIN } from '../actions/signIn.action';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGNIN:
      return action.payload;
    default:
      return state;
  }
};
