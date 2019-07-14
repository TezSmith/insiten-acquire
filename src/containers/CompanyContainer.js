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
          <section className="jumbotron text-center">
             <div className="container">
               <h1 className="jumbotron-heading">Browse Companies</h1>
               <p className="lead text-muted"> Check out our collecton of companies and see which venture makes sense for you. Click the details
               to learn more, and if you're interested in tracking click add to Portfolio. Or if you'd like to add to our listings, click the button below! </p>
               { form ? <button onClick={showForm} className="btn btn-primary my-2"> Go Back </button> : <button onClick={showForm} className="btn btn-primary my-2">Create New Company</button>}
             </div>
          </section>
            <div className="py-5 bg-light">
              <div className="container">
                <div className="row align-center">
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
