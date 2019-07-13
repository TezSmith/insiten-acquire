import { ADD_COMPANY, REMOVE_COMPANY, SHOW_DETAILS, CREATE_COMPANY, EDIT_COMPANY, UPDATE_COMPANY, HIDE_DETAILS, DELETE, SHOW_FORM} from '../actions/types'
import companies, {obj} from '../companies'


const companyState = {
    companies: companies,
    portfolio: [],
    details: [],
    edit: [],
    form: false
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
        case HIDE_DETAILS:
            return {
              ...state,
              details: []
            }
        case SHOW_FORM:
          return {
            ...state,
            form: !state.form
          }
        case CREATE_COMPANY:
            return {
              ...state,
              companies: [...state.companies, action.create],
              form: false
            }
        case EDIT_COMPANY:
            return {
              ...state,
              edit: [action.edit]
            }
        case UPDATE_COMPANY:
          return {
            ...state,
            companies: [...state.companies.map(c => c.id === action.update.id ? action.update : c )],
            edit: []
          }
        case DELETE:
          return {
            ...state,
            companies: state.companies.filter((c) => c.id !== action.delete.id),
            details: []
          }
        default:
            return state
    }
}
export default companyReducer
