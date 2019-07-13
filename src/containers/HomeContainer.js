import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route } from 'react-router-dom'
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
       <Route exact path="/" component={CompanyContainer} />
       <Route path="/portfolio" component={Portfolio} />
      </div>
    )
  }
}

export default withRouter(connect()(Home))
