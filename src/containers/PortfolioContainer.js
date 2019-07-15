import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import CompanyCard from '../components/CompanyCard'
import CompanyDetailsContainer from './CompanyDetailsContainer'


class Portfolio extends Component {

  render() {

    const { portfolio, details } = this.props.company

    const showContent = () => {
      if (portfolio.length === 0) {
        return (
               <div className="container full">
                  <h3> Start tracking companies! </h3>
                  <Link to='/companies'> Track New Companies </Link>
               </div>
        )
      }
       return portfolio.map((c,i) => <CompanyCard c={c} key={i} />)
    }

    return (
      <div>
        <div className="jumbotron text-center portfolio">
          <div className="container">
            <h1 className="jumbotron-heading">Portfolio</h1>
            <p className="lead text-muted"> Your collection of prospective investments </p>
          </div>
        </div>
          <div className="py-5 bg-light full">
            <div className="container">
              <div className="row">
                {showContent()}
              </div>
            </div>
          </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const { company, details } = state
  return {
    company: company,
    details: details
  }
}


export default withRouter(connect(mapStateToProps)(Portfolio))
