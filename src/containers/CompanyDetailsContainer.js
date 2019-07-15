import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import EditCompanyForm from '../components/EditCompanyForm'
import CompanyDetails from '../components/CompanyDetails'
import { cancelEdit } from '../actions/functions'
import { getEditDetails } from '../reducers/company';


const CompanyDetailsCont = (props) => {

     const { edit, cancelEdit } = props

    return (
      <div className="bg-light">
        <CompanyDetails />
      </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const { edit } = state.company
    return {
        edit: getEditDetails(state,ownProps)
    }
}

export default withRouter(connect(mapStateToProps, {cancelEdit})(CompanyDetailsCont))
