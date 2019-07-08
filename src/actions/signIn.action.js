export const SIGNIN = 'SIGNIN';

const loginUser = userObj => ({
  type: SIGNIN,
  payload: userObj,
});
const signInAction = credentials => (dispatch) => {
  if (credentials && credentials.email === 'admin@admin.com' && credentials.password === 'admin') {
    localStorage.setItem('token', '1231231');
    dispatch(loginUser(credentials));
  }
};
export default signInAction;
