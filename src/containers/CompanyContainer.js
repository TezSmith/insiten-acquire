import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CompanyCard from '../components/CompanyCard'
import NewCompanyForm from '../components/NewCompanyForm'
import { showForm, search } from '../actions/functions'
import { getSearchResults } from '../reducers/company';

class CompanyContainer extends Component {

    render() {

        const { companies, showForm, form, search } = this.props

        const showCards = () => {
           return companies.map((c,i) => <CompanyCard c={c} key={i} /> )
        }

        const showSearch = () => {
          if (!form) {
            return (
              <form className="form-inline ">
                <input className="form-control search" type="text" placeholder="Search by Acquistion Status, Industry or Name" aria-label="Search" onChange={(e) => search(e.target.value)}/>
              </form>
            )
          }
        }

        return (
          <div>
            <div className="jumbotron text-center general">
              <div className="container">
                <h1 className="jumbotron-heading">Browse Companies</h1>
                <p className="lead text-muted"> Check out our collecton of companies and see which venture makes sense for you. Click the details
                to learn more about the company or click add to portfolio to track them. And if you'd like to add to our listings, click the button below! </p>
                { form ? <button onClick={showForm} className="btn btn-secondary my-2"> Go Back </button> : <button onClick={showForm} className="btn btn-primary my-2">Create New Company</button>}
              </div>
            </div>
              <div className="py-5 bg-light">
                <div className="container">
                 {showSearch()}
                 <div className="row align-center mt-4">
                  { form ? <NewCompanyForm/> : showCards()}
                </div>
              </div>
            </div>
          </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { companies, form, q } = state.company
    return {
      companies: getSearchResults(companies, q),
      form: form
    }
}

export default withRouter(connect(mapStateToProps, { showForm, search })(CompanyContainer))
