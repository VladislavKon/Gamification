import { all, takeEvery } from 'react-saga/effects'

import {
    SAVE_MAP
} from '../reducer/mapReducer'
import { mapSaga } from './mapSaga'

export default function * () {
    yield all([
        takeEvery(SAVE_MAP, mapSaga)
    ])
}