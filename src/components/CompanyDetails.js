import React from 'react'
import { connect } from 'react-redux'
import { hideCompany } from '../actions/functions'

const CompanyDetails = (props) => {

   const { hide, hideCompany } = props
   const c = props.details[0]

    return (
        <div>
            <h3>{c.id}</h3>
            <button onClick={hideCompany}> Back </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { details } = state.company
    return {
        details: details
    }
}

export default connect(mapStateToProps, {hideCompany})(CompanyDetails)
