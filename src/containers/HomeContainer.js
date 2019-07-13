import React, { Component } from 'react'
import { connect } from 'react-redux'
import CompanyContainer from './CompanyContainer'
import Portfolio from './PortfolioContainer'

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
    return (
      <div>
       <CompanyContainer/>
       <Portfolio/>
      </div>
    )
  }
}

export default connect()(Home)
