import { ADD_COMPANY, REMOVE_COMPANY, SHOW_DETAILS } from '../actions/types'
import COMPANIES from '../companies'


const companyState = {
    companies: COMPANIES,
    portfolio: [],
    page: '',
    details: ''
}

const companyReducer = (state = companyState, action) => {
    switch (action.type) {
        case ADD_COMPANY:
            return { 
                ...state, 
                companies: [...state.companies.filter(co => co !== action.add)],
                portfolio: [...state.portfolio, action.add]
            }
        case REMOVE_COMPANY:
            return {
                ...state,
                companies: [...state.companies, action.remove],
                portfolio: [...state.portfolio.filter(p => p !== action.remove)]
            }
        case SHOW_DETAILS:
            return { ...state, details: action.show }
        default:
            return state
    }
}
export default companyReducer