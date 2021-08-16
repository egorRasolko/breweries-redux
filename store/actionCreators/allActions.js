import {SEARCH_DATA, CLEAR_SEARCH, LOAD_DATA} from '../actions/allActions.js'

export function clearSearch() {
    return {type: CLEAR_SEARCH}
}

export function searchData(value) {
    return {type: SEARCH_DATA, value: value}
}

export function loadData() {
    console.log('loading,..')
    return {type: LOAD_DATA}
}