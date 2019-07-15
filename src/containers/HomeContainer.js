import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import CompanyContainer from './CompanyContainer'
import Portfolio from './PortfolioContainer'
import CompanyCard from '../components/CompanyCard'
import CompanyDetails from '../components/CompanyDetails'


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
      <Switch>
        <Route exact path="/companies/" component={CompanyContainer} />
        <Route path="/companies/:id" component={CompanyDetails} /> // component={CompanyCard}
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
      </div>
    )
  }
}

export default withRouter(connect()(Home))
