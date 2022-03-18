import {all} from 'redux-saga/effects';
import {watchIncrease, watchDecrease} from './counterSagas';

export default function* rootSaga() {
  yield all([watchIncrease(), watchDecrease()]);
}
