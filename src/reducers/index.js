import combineReducers from "redux/src/combineReducers";
import currentUserReducer from "./currentUser.reducer";

export default combineReducers({
  currentUser: currentUserReducer
});
