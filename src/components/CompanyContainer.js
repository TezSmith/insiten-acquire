import React, { Component } from 'react'
import { connect } from 'react-redux'
import CompanyCard from './CompanyCard'
import CompanyDetails from './CompanyDetails'
import NewCompanyForm from './NewCompanyForm'
import {showPage} from '../actions/functions'

class CompanyContainer extends Component {

    state = {
       form: false
    }

    showForm = () => {
			this.setState({
				form: !this.state.form
			})
    }

    render() {
        const { companies, details } = this.props
        return (
            <div>
              <button onClick={this.showForm}>Create New Company</button>
						  {this.state.form ? <NewCompanyForm /> : companies.map((c, i) => <CompanyCard c={c} key={i} />)}

                { /*details ? <CompanyDetails back={this.hideDetails} />
                    : companies.map((c,i) => <CompanyCard c={c} key={i} />)
        */}
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

const mapDispatchToProps = {
    showPage
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer)