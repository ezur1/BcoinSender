const INITIAL_STATE={
    name:'Elior',
    coins:700,
    moves:[]
}

export default function userReducer(state = INITIAL_STATE,action){
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        default:
            return state
    }
}