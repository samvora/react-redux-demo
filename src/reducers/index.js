import { combineReducers } from 'redux';
import todosReducer from './todoReducer';
export default combineReducers({
    app: todosReducer
});