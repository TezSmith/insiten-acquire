import React, { Component } from 'react'
import { connect } from 'react-redux'
import CompanyCard from './CompanyCard'
import CompanyDetailsContainer from './CompanyDetailsContainer'
import NewCompanyForm from './NewCompanyForm'
import { showForm } from '../actions/functions'

class CompanyContainer extends Component {

    render() {

        const { companies, details, showForm, form } = this.props

        const showContent = () => {
           return details.length === 0 ? companies.map((c,i) =>
              <CompanyCard c={c} key={i} />) : <CompanyDetailsContainer />
        }

        return (

            <div>
              <h1> All Companies </h1>
              { form ? <button onClick={showForm}> Go Back</button>  : <button onClick={showForm}>Create New Company</button>}
              { form ? <NewCompanyForm/> : showContent()}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const { companies, details, form } = state.company
    return {
      companies: companies,
      details: details,
      form: form
    }
}

export default connect(mapStateToProps, { showForm })(CompanyContainer)
