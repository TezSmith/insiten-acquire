import React, { Component } from 'react'
import { connect } from 'react-redux'
import CompanyCard from './CompanyCard'
import CompanyDetails from './CompanyDetails'

class CompanyContainer extends Component {

    render() {
        const { companies, details } = this.props
        return (
            <div>
                { details ? <CompanyDetails back={this.hideDetails} />
                    : companies.map((c,i) => <CompanyCard c={c} key={i} />)
               }
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