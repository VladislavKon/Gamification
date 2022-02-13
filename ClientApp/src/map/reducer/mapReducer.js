import { createAction, handleActions } from "redux-actions";

export const SAVE_MAP = 'map/SAVE_MAP'

export const saveMap = createAction(SAVE_MAP)

const initialState = {
    saveData: []
}

export default handleActions ({
    [SAVE_MAP]: (state) => ({
        ...state
    })
}, initialState)
