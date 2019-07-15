import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route } from 'react-router-dom'
import CompanyCard from '../components/CompanyCard'
import CompanyDetailsContainer from './CompanyDetailsContainer'
import NewCompanyForm from '../components/NewCompanyForm'
import { showForm, search } from '../actions/functions'
import { getSearchResults } from '../reducers/company';


class CompanyContainer extends Component {



    render() {

        const { companies, details, showForm, form, search, term } = this.props

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
              <nav className="navbar navbar-light bg-light">
              <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => search(e.target.value)}/>
              </form>
              </nav>
                <div className="row align-center mt-4">
                  { form ? <NewCompanyForm/> : showContent()}
                </div>
              </div>
            </div>
          </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const { companies, details, form, q } = state.company
    return {
      companies: getSearchResults(companies, q),
      details: details,
      form: form
    }
}

export default withRouter(connect(mapStateToProps, { showForm, search })(CompanyContainer))
