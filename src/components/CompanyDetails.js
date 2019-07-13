import React from 'react'
import { connect } from 'react-redux'
import { hideCompany, editCompany, deleteCompany } from '../actions/functions'
import EditCompanyForm from './EditCompanyForm'

const CompanyDetails = (props) => {

   const { hide, hideCompany, editCompany, deleteCompany } = props
   const c = props.details[0]

    return (
        <div>
            <h3>{c.coname}</h3>
            <button onClick={hideCompany}> Back </button>
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

export default connect(mapStateToProps, {hideCompany, editCompany, deleteCompany})(CompanyDetails)
