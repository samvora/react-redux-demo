import { takeEvery, put, delay } from 'redux-saga/effects';
import { AppTypes, AppActions } from '../actions/app';


// Create a saga
function* appSaga() {
    yield takeEvery(AppTypes.ASYNC_INCREMENT, asyncIncrementHandler);
    yield takeEvery(AppTypes.ASYNC_DECREMENT, asyncDecrementHandler);
};

// Handlers
function* asyncIncrementHandler({ payload }) {
    const { seconds = 3, number } = payload;
    yield delay(seconds * 1000);
    yield put(AppActions.increment(number));
};

function* asyncDecrementHandler({ payload }) {
    const { seconds = 3, number } = payload;
    yield delay(seconds * 1000);
    yield put(AppActions.decrement(number));
};

export default appSaga;