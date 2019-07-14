import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route } from 'react-router-dom'
import CompanyCard from '../components/CompanyCard'
import CompanyDetailsContainer from './CompanyDetailsContainer'
import NewCompanyForm from '../components/NewCompanyForm'
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
            { form ? <button onClick={showForm}> Go Back </button> : <button onClick={showForm}>Create New Company</button>}
            <div className="py-5 bg-light">
              <div className="container">
                <div className="row">
                  { form ? <NewCompanyForm/> : showContent()}
                </div>
              </div>
            </div>
          </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const { companies, details, form } = state.company
    return {
      companies: companies,
      details: details,
      form: form
    }
}

export default withRouter(connect(mapStateToProps, { showForm })(CompanyContainer))
