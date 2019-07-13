import React from 'react'
import { connect } from 'react-redux'
import { hideCompany, editCompany } from '../actions/functions'
import EditCompanyForm from './EditCompanyForm'
import CompanyDetails from './CompanyDetails'

const CompanyDetailsCont = (props) => {

     const showContent = () => {
       return props.edit.length === 0 ? <CompanyDetails /> : <EditCompanyForm />
     }

    return (
        <div>
           {showContent()}
        </div>
    )
}

const mapStateToProps = (state) => {
    const { edit } = state.company
    return {
        edit: edit
    }
}

export default connect(mapStateToProps, {hideCompany, editCompany})(CompanyDetailsCont)
