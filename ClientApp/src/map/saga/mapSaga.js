import { call, put } from 'redux-saga/effects'
import * as apiFunctions from '../api'

export function * mapSaga ({ payload }) {
    try {
        const { data } = yield call(apiFunctions.saveMap, { mapData: payload })        
    } catch {
        
    }
}