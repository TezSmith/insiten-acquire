import React, { Component } from 'react'
import { connect } from 'react-redux'
import CompanyCard from './CompanyCard'
import CompanyDetails from './CompanyDetails'
import EditCompanyForm from './NewCompanyForm'

class CompanyContainer extends Component {

    state = {
       form: false,
       details: []
    }

    showForm = () => {
			this.setState({
				form: !this.state.form
			})
    }

    render() {

        const { companies, details } = this.props

        const showContent = () => {
           return details.length === 0 ? companies.map((c,i) =>
              <CompanyCard c={c} key={i} />) : <CompanyDetails />
        }

        return (

            <div>
              <h1> All Companies </h1>
              <button onClick={this.showForm}>Create New Company</button>
              {showContent()}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const { companies, details } = state.company
    return {
      companies: companies,
      details: details
    }
}

export default connect(mapStateToProps)(CompanyContainer)
