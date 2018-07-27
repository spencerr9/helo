const initialState = {
    username: '',
    password: ''
}

const UPDATE_USERNAME = 'UPDATE_USERNAME'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_USERNAME:
            return Object.assign( {}, state, { username: action.payload })
        
        case UPDATE_PASSWORD:
            return Object.assign( {}, state, { password: action.payload })

        default: return state;
    }
}

export function updateUsername(input){
    return {
        type: UPDATE_USERNAME,
        payload: input
    }
}

export function updatePassword(input){
    return {
        type: UPDATE_PASSWORD,
        payload: input
    }
}



export default reducer