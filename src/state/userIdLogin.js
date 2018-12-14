import { database } from '../firebase'

const SET_DATA = 'usersIdLogin/SET_DATA'

const INITIAL_STATE = {
    test: []
}

export const startSyncingUsersTestFromDbAsyncAction = () => (dispatch, getState) => {
    const uuid = getState().auth.user.uid

    database.ref(`/users/${uuid}/test`).on(
        'value',
        snapshot => {
            dispatch(setDataAction(snapshot.val()))
        }
    )
}

export const stopSyncingUsersTestFromDbAsyncAction = () => (dispatch, getState) => {
    const uuid = getState().auth.user.uid

    database.ref(`/users/${uuid}/test`).off()
}

export const addTestToDb = (key, test) => (dispatch, getState) => {
    const uuid = getState().auth.user.uid

    database.ref(`/users/${uuid}/test/${test}/${key}`).set(true)
}


export const deleteTestFromDb = (key, test) => (dispatch, getState) => {
    const uuid = getState().auth.user.uid

    database.ref(`/users/${uuid}/test/${test}/${key}`).set(null)
}



const setDataAction = data => ({
    type: SET_DATA,
    data
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                test: action.data
            }
        default:
            return state
    }
}