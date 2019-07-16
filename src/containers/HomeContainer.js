import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import CompanyContainer from './CompanyContainer'
import Portfolio from './PortfolioContainer'
import CompanyDetails from '../components/CompanyDetails'
import EditForm from '../components/EditCompanyForm'


class Home extends Component {

  render() {
    return (
      <div>
      <Switch>
        <Route exact path="/companies" component={CompanyContainer} />
        <Route exact path="/companies/:id" component={CompanyDetails} />
        <Route path="/companies/:id/edit" component={EditForm} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
      </div>
    )
  }
}

export default withRouter(connect()(Home))
