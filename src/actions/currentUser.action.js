export const CURRENT_USER = "CURRENT_USER";
const currentUserAction = credentials => ({
  type: CURRENT_USER,
  payload: credentials
});
export default currentUserAction;
