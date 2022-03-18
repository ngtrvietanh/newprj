import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reducer from './src/redux/store';
import {View, AppRegistry} from 'react-native';
import CounterComponent from './src/component/CounterComponent';
import {name as appName} from './app.json';
import createSagaMiddleware from '@redux-saga/core';
// import { SagaMiddleware } from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
import rootSaga from './src/saga/rootSagas';
let store = createStore(reducer, applyMiddleware(sagaMiddleware));
export default function App() {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <CounterComponent />
      </View>
    </Provider>
  );
}
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => App);
