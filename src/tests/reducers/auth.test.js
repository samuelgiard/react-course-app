import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'jMM0IM7l2rSPRy5tnLoHTf4Wsbh1'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: 'jMM0IM7l2rSPRy5tnLoHTf4Wsbh1' }, action);
  expect(state).toEqual({});
});