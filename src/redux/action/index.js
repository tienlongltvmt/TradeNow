export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function login(userCredentials) {
  if (
    userCredentials.username === 'admin' &&
    userCredentials.password === '123456'
  ) {
    return {
      type: LOGIN_SUCCESS,
    };
  } else {
    return {
      type: LOGIN_ERROR,
    };
  }
}
