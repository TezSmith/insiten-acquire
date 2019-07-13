import { ADD_COMPANY, REMOVE_COMPANY, SHOW_DETAILS, CREATE_COMPANY, UPDATE_COMPANY, HIDE } from '../actions/types'
import companies, {obj} from '../companies'


const companyState = {
    companies: companies,
    portfolio: [],
    page: '',
    details: []
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
            return {
              ...state,
              details: [action.show]
            }
        case HIDE:
            return {
              ...state,
              details: []
            }
        case CREATE_COMPANY:
            return {
              ...state,
              companies: [...state.companies, action.create]
            }
        case UPDATE_COMPANY:
          return {
            ...state,
            companies: [...state.companies.map(c => c.id === action.update.id ? action.update : c )]
          }
        default:
            return state
    }
}
export default companyReducer
