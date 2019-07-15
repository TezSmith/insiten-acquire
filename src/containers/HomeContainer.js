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
       <Route exact path="/companies/" component={CompanyContainer} />
         <Route exact path="companies/:id" render={(props) => <CompanyCard {...props} /> } />
       <Route path="/portfolio" component={Portfolio} />
      </div>
    )
  }
}

export default withRouter(connect()(Home))
