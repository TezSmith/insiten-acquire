import { LOGIN_ACTION, LOGOUT_ACTION, ADD_COMPANY, SHOW_DETAILS, REMOVE_COMPANY, CREATE_COMPANY, EDIT_COMPANY, HIDE_DETAILS, UPDATE_COMPANY, DELETE, SHOW_FORM} from './types'
import companies from '../companies'

// Show New Company Form
export function showForm() {
  return dispatch => {
    dispatch({type: SHOW_FORM})
  }
}

// Creates New Company
export function createCompany(values) {

  return dispatch => {

    let id = companies.length + 1

    let obj = {
      id: id,
      coname: values.coname,
      industry: values.industry,
      ceo: {
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email
      },
      hq: {
        street: values.street,
          city: values.city,
        state: values.state,
      country: values.country,
      zipcode: values.zipcode
      },
      finances: []
    }

    const { finances } = values

    if (finances === undefined) {
      obj.finances = []
    } else {
      finances.map((f) => obj.finances.push(f))
    }

    dispatch({type: CREATE_COMPANY, create: obj})
  }

} // end function

// Show Company Details
export function showCompany(c) {
   return dispatch => {
     dispatch({type: SHOW_DETAILS, show: c })
   }
}


// Hide Company Details
export function hideCompany(c) {
   return dispatch => {
     dispatch({type: HIDE_DETAILS })
   }
}

// Edit Company Details
export function editCompany(c) {
  return dispatch => {
    dispatch({type: EDIT_COMPANY, edit: c})
  }
}

// Updates Company Details
export function updateCompany(values) {
   return dispatch => {
     dispatch({type: UPDATE_COMPANY, update: values})
   }
}

// Adds Company to Portfolio
export function addCompany(c) {
  return dispatch => {
    dispatch({ type: ADD_COMPANY, add: c })
  }
}


// Removes Company from Portfolio
export function removeCompany(c) {
  return dispatch => {
    dispatch({ type: REMOVE_COMPANY, remove: c })
  }
}

// Deletes Company from site
export function deleteCompany(c){
  return dispatch => {
    dispatch({ type: DELETE, delete: c })
  }
}
