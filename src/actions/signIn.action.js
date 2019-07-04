export const SIGNIN = 'SIGNIN';
const signInAction = credentials => ({ type: SIGNIN, payload: credentials });
export default signInAction;
