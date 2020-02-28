import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import icecreamReducer from './icecream/icecreamReducer'
import asyncReducer from './async/asyncReducers'

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    async: asyncReducer
})

export default rootReducer