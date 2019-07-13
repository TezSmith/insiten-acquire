import { LOGIN_ACTION, LOGOUT_ACTION, ADD_COMPANY, SHOW_DETAILS, REMOVE_COMPANY, CREATE_COMPANY} from './types'
import companies from '../companies'

//Logs User In
export function login(data) {

}

// Logs User Out
export function logout() {

}

// Adds Company to Portfolio
export function addCompany(c) {
  return dispatch => {
    dispatch({ type: ADD_COMPANY, add: c })
  }
}

export function showPage() {

}

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

// Removes Company from Portfolio
export function removeCompany(c) {
  return dispatch => {
    dispatch({ type: REMOVE_COMPANY, remove: c })
  }

}
