import { database } from '../firebase'

const SET_DATA = 'test/SET_DATA'

const INITIAL_STATE = {
    tests: null
}

export const loadData = (data) => ({
    type: SET_DATA,
    data
})

export const loadDataAsyncAction = () => (dispatch, getState) => {
    database.ref(`/tests`).on(
        'value',
        snapshot => {
            if (!snapshot.val()) {
                dispatch(loadData([]))
            }
            const testsArray = Object.entries(snapshot.val())
            const testList = testsArray.map(([id, values]) => {
                values.id = id
                return values
            })
            dispatch(loadData(testList))
        }
    )
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                tests: action.data
            }
        default:
            return state
    }
}