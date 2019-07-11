import { LOGIN_ACTION, LOGOUT_ACTION } from '../actions/types'

const userState = {
    loggedIn: false,
    user: { id: 0, username: "" }
}
const userReducer = (state = userState, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            return { ...state, user: action.payload, loggedIn: true }
        case LOGOUT_ACTION:
            return state
        default:
            return state
    }
}
export default userReducer