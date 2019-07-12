import React, { Component } from 'react'
import { connect } from 'react-redux'
import CompanyContainer from './CompanyContainer'
import Portfolio from './PortfolioContainer'
import CompanyDetails from './CompanyDetails'
import NewCompanyForm from './NewCompanyForm'

class Home extends Component {

    // Will use when all views are properly set up
    //  showContent = () => {
    //   switch (this.props.page) {
    //     case 'portfolio':
    //       return <Portfolio />
    //     case 'form':
    //       return <NewCompanyForm />
    //     default:
    //       return <CompanyContainer />
    //   }
    // }

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