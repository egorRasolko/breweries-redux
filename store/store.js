import { createStore } from 'redux';
import { reducer } from './reducers/reduceLoadData'

const store = createStore(reducer);

export default store;