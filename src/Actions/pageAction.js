import {SEARCH_DATA, CLEAR_SEARCH, LOAD_DATA} from '../ActionConst/ActionConst.js'

export function clearSearch() {
    return {type: CLEAR_SEARCH}
}

export function searchData(value) {
    return {type: SEARCH_DATA, payload: value}
}

export function loadData() {
    return {type: LOAD_DATA}
}

