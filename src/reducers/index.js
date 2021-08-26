import {store} from "../store/configureStore";
import {CLEAR_SEARCH, LOAD_DATA, SEARCH_DATA, SAVE_SEARCH_DATA, SET_ERROR, SAVE_DATA } from '../ActionConst/ActionConst.js'
import { initialState } from '../InitialState.js'
// import { Fetch } from '../fetch'

function loadData(state) {
    fetch("https://api.openbrewerydb.org/breweries/")
      .then(res => res.json())
      .then(
        (result) => {
          store.dispatch({type: SAVE_DATA, payload: result});
        },
        
        (error) => {
            store.dispatch({type: SET_ERROR, payload: error})
        });
    return state;
}

function saveData(state, value) {
    return {...state, items: value}
}

function clearSearch(state) {
    fetch("https://api.openbrewerydb.org/breweries/")
    .then(res => res.json())
      .then(
        (result) => {
          store.dispatch({type: SAVE_DATA, payload: result});
        },

        (error) => {
            store.dispatch({type: SET_ERROR, payload: error})
        });
    return {...state, useSearch: false}
}

function setError(state, error) {
    return {...state, error: error}
}

function searchDataFn(state, inputValue) {
    fetch("https://api.openbrewerydb.org/breweries/search?query="+ inputValue)
    .then(res => res.json())
    .then(
        (result) => {
        store.dispatch({type: SAVE_SEARCH_DATA, payload: result});
        },
        
        (error) => {
            store.dispatch({type: SET_ERROR, payload: error})
        });
    return {...state}
}

function saveSearchData(state, items) {
    return {...state,  useSearch: true, searchItems: items}
}

export function reducer(state=initialState, action) {
    // console.log(state, action)
    switch(action.type) {
        case LOAD_DATA: return loadData(state)
        case SEARCH_DATA: return searchDataFn(state, action.payload)
        case CLEAR_SEARCH: return clearSearch(state)
        case SAVE_DATA: return saveData(state, action.payload)
        case SAVE_SEARCH_DATA: return saveSearchData(state, action.payload)
        case SET_ERROR: return setError(state, action.payload)
        default: return state;
    }
}


