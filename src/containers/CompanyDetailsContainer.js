import React from 'react'
import { connect } from 'react-redux'
import { withRouter  } from 'react-router-dom'
import EditCompanyForm from '../components/EditCompanyForm'
import CompanyDetails from '../components/CompanyDetails'
import { cancelEdit } from '../actions/functions'
import { getEditDetails } from '../reducers/company';


const CompanyDetailsCont = (props) => {

     const { edit } = props

    return (
      <div className="bg-light">
        <CompanyDetails />
      </div>
    )
}

// Edit is passed via hooks to edit form
const mapStateToProps = (state, ownProps) => {
    const { edit } = state.company
    return {
        edit: getEditDetails(state, ownProps)
    }
}

export default withRouter(connect(mapStateToProps, {cancelEdit})(CompanyDetailsCont))
