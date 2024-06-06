import { takeLatest, put } from 'redux-saga/effects';

const userCredentials = {
  user1: 'user1',
  user2: 'user2',
  user3: 'user3',
  user4: 'user4',
  admin: 'admin',
};

function* loginSaga(action) {
  const { username, password } = action.payload;
  if (userCredentials[username] && userCredentials[username] === password) {
    yield put({ type: 'LOGIN_SUCCESS' });
  } else {
    yield put({ type: 'LOGIN_FAILURE' });
  }
}

function* watchLoginRequest() {
  yield takeLatest('LOGIN_REQUEST', loginSaga);
}

export default watchLoginRequest;
