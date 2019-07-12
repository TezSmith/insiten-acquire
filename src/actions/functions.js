import { LOGIN_ACTION, LOGOUT_ACTION, ADD_COMPANY, SHOW_COMPANY, REMOVE_COMPANY } from './types'

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

// Show Company Details
export function showCompany(c) {
   return dispatch => {
     dispatch({type: SHOW_COMPANY, show: c })
   }
}

// Removes Company from Portfolio
export function removeCompany(c) {
  return dispatch => {
    dispatch({ type: REMOVE_COMPANY, remove: c })
  }

}