import React, { Component } from 'react'
import { connect } from 'react-redux'
import CompanyCard from '../components/CompanyCard'
import CompanyDetailsContainer from './CompanyDetailsContainer'


class Portfolio extends Component {

  render() {
    const { portfolio, details } = this.props.company

    const showContent = () => {
       return details.length === 0 ? portfolio.map((c,i) =>
          <CompanyCard c={c} key={i} />) : <CompanyDetailsContainer />
    }

    return (
      <div>
        <h1> Portfolio </h1>
        {showContent()}
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


export default connect(mapStateToProps)(Portfolio)
