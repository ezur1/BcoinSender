import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import bitcoinReducer from './modules/common/reducers'
import contactReducer from './modules/contact/reducers'
import userReducer from './modules/user/reducers'

const rootReducer = combineReducers({
    contact: contactReducer,
    user: userReducer,
    bitcoin:bitcoinReducer
})


const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)
export default store