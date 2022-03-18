import {INCREASE, DECREASE} from '../redux/todo';
import { takeEvery} from 'redux-saga/effects';

function* increase() {
  console.log('This is increase saga');
}
export function* watchIncrease() {
  yield takeEvery(INCREASE, increase);
}

function* decrease() {
  console.log('This is decrease saga');
}
export function* watchDecrease() {
  yield takeEvery(DECREASE, decrease);
}
