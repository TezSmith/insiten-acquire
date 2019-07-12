import React, { Component } from 'react'
import { connect } from 'react-redux'
import CompanyContainer from './CompanyContainer'
import Portfolio from './PortfolioContainer'
import CompanyDetails from './CompanyDetails'

class Home extends Component {

    showContent = () => {
        return this.props.page === 'portfolio' ? <Portfolio /> : <CompanyContainer /> 
    }

    render() {
        const { details } = this.props
        return (
           <div>
            <CompanyContainer/>
            <Portfolio/>
            { /*details === '' ? this.showContent() : <CompanyDetails/>*/ }
           </div>
        )
    }

}

const mapStateToProps = (state) => {
    const { details,page } = state.company
    return {
        details: details,
        page: page
    }
}

export default connect(mapStateToProps)(Home)