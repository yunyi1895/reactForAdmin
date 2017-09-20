import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {createLogger} from 'redux-logger'
import rootSaga from '@/saga'
import reducer from '@/reducers'
import routers from '@/routers'
import thunk from 'redux-thunk';
//import 'element-theme-default';
import 'antd/dist/antd.css';
import './assets/less/main.less'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(thunk,sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    {routers}
  </Provider>,
  document.getElementById('app')
)
