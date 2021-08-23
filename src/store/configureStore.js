import { createStore } from 'redux'
import {reducer} from '../reducers/index.js'
import { initialState } from '../InitialState.js';

export const store = createStore( reducer, initialState );