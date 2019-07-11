import { ADD_COMPANY, REMOVE_COMPANY } from '../actions/types'

const companyState = {
    companies: []
}

const companyReducer = (state = companyState, action) => {
    switch (action.type) {
        case ADD_COMPANY:
            return { ...state, companies: [...state.companies, action.payload] }
        case REMOVE_COMPANY:
            return companyState
        default:
            return state
    }
}
export default companyReducer