import store from "../store.js";
import {CLEAR_SEARCH, LOAD_DATA, SEARCH_DATA, SAVE_SEARCH_DATA, SET_ERROR, SAVE_DATA } from '../actions/allActions'
import {initialState } from '../initialState'

function loadData(state) {
    fetch("https://api.openbrewerydb.org/breweries")
      .then(res => res.json())
      .then(
        (result) => {
          store.dispatch({type: SAVE_DATA, value: result});
        },
        
        (error) => {
            store.dispatch({type: SET_ERROR, value: error})
        });
    return state;
}

function saveData(state, value) {
    console.log(value)
    return {...state, items: value}
}

function clearSearch(state) {
    return {...state, useSearch: false}
}

function setError(state, error) {
    return {...state, error: error}
}

function searchData(state, searchStr) {
    console.log('searching')
    fetch("https://api.openbrewerydb.org/breweries")
      .then(res => res.json())
      .then(
        (result) => {
          store.dispatch({type: SAVE_SEARCH_DATA, value: result});
        },
        
        (error) => {
            store.dispatch({type: SET_ERROR, value: error})
        });
    return {...state, useSearch: true}
}

function saveSearchData(state, items) {
    return {...state, searchItems: items}
}

export function reducer(state=initialState, action) {
    switch(action.type) {
        case LOAD_DATA: return loadData(state)
        case SEARCH_DATA: return searchData(state, action.value)
        case CLEAR_SEARCH: return clearSearch(state)
        case SAVE_DATA: return saveData(state, action.value)
        case SAVE_SEARCH_DATA: return saveSearchData(state, action.value)
        case SET_ERROR: return setError(state, action.value)
        default: return state;
    }
}