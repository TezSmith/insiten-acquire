import { ADD_COMPANY, REMOVE_COMPANY } from '../actions/types'
import COMPANIES from '../companies'


const companyState = {
    companies: COMPANIES
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