import React from 'react'
import { connect } from 'react-redux'
import EditCompanyForm from '../components/EditCompanyForm'
import CompanyDetails from '../components/CompanyDetails'
import { cancelEdit } from '../actions/functions'

const CompanyDetailsCont = (props) => {

     const { edit, cancelEdit } = props

     const showContent = () => {
       return edit.length === 0 ? <CompanyDetails /> : <EditCompanyForm/>
     }

    return (
        <div>
           {edit.length > 0 ? <button onClick={cancelEdit}> Go Back to Detail </button> : null}
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

export default connect(mapStateToProps, {cancelEdit})(CompanyDetailsCont)
