export const SIGNOUT = 'SIGNOUT';
const signOutAction = () => {
  return ({ type: SIGNOUT, payload: true });
};
export default signOutAction;
