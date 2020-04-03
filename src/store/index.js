import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { createStore, applyMiddleware } from 'redux';


const configStore = () => {
    // Create a saga middleware
    const sagaMiddleware = createSagaMiddleware();
    // Create a redux store
    // Apply the saga middleware to the store by calling applyMiddleware from redux
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware))
    // Run the saga
    sagaMiddleware.run(rootSaga);
    return store;
}



export default configStore;