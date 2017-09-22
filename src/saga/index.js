import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import * as API from '@/server'




// function* watchIncrementAsyncSaga(n) {

//     yield takeEvery(INCREMENT_ASYNC, incrementAsync)
// }


function helloSaga() {
    console.log('hello saga')
}




export default function* rootSaga() {
    yield all([
        helloSaga(),
      
    ])
}