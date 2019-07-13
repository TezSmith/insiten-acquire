import React from 'react'
import { connect } from 'react-redux'
import { hideDetails, editCompany, deleteCompany } from '../actions/functions'
import EditCompanyForm from './EditCompanyForm'

const CompanyDetails = (props) => {

 const { hide, hideDetails, editCompany, deleteCompany } = props
 const c = props.details[0]

  return (
    <div>
      <h3>{c.coname}</h3>
      <h3>{c.industry}</h3>
      <button onClick={hideDetails}> Back </button>
      <button onClick={() => editCompany(c)}> Edit </button>
      <button onClick={() => deleteCompany(c)}> Delete </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { details } = state.company
  return {
    details: details
  }
}

const mapDispatchToProps = {
  hideDetails,
  editCompany,
  deleteCompany
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails)
