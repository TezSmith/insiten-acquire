import { ADD_COMPANY, SHOW_DETAILS, REMOVE_COMPANY, CREATE_COMPANY, CANCEL_EDIT,
         EDIT_COMPANY, HIDE_DETAILS, UPDATE_COMPANY, DELETE, SHOW_FORM, SEARCH } from './types'
import companies from '../companies'

export function search(q) {
  return dispatch => {
    dispatch({ type: SEARCH, search: q })
  }
}

// Show New Company Form
export function showForm() {
  return dispatch => {
    dispatch({type: SHOW_FORM})
  }
}

export function cancelEdit() {
  return dispatch => {
    dispatch({type: CANCEL_EDIT})
  }
}

// Creates New Company
export function createCompany(values) {
  return dispatch => {
    console.log("New Form Values: ", values)
    let id = companies.length + 1

    let obj = {
      id: id,
      coname: values.coname,
      photo: values.photo,
      industry: values.industry,
      status: values.status,
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
}


// Show Company Details
export function showDetails(c) {
   return dispatch => {
     dispatch({type: SHOW_DETAILS, show: c })
   }
}


// Hide Company Details
export function hideDetails(c) {
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

// Update Company Details
export function updateCompany(values, history) {
   return dispatch => {
     dispatch({type: UPDATE_COMPANY, update: values})
     history.push(`/companies/${values.id}`)
  }
}

// Add Company to Portfolio
export function addCompany(c) {
  return dispatch => {
    dispatch({ type: ADD_COMPANY, add: c })
  }
}


// Remove Company from Portfolio
export function removeCompany(c) {
  return dispatch => {
    dispatch({ type: REMOVE_COMPANY, remove: c })
  }
}

// Delete Company from site
export function deleteCompany(c, history ){
  return dispatch => {
    dispatch({ type: DELETE, delete: c })
    history.push('/companies')
  }
}
