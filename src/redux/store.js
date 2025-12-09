import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import userReducer from './UserReducer'

const store = createStore(userReducer);

export default store;