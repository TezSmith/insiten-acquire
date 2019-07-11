import { combineReducers } from 'redux'
import companyReducer from './company'
import userReducer from './user'

const rootReducer = combineReducers({
    company: companyReducer,
    user: userReducer
})

export default rootReducer