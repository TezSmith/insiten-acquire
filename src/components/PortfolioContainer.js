import React, { Component } from 'react'
import { connect } from 'react-redux'
import CompanyCard from './CompanyCard'

class Portfolio extends Component {

  render() {
    const { portfolio } = this.props.company
    return (
      <div>
        <h1> Portfolio </h1>
        {portfolio.map((c,i) => <CompanyCard c={c} key={i} />)}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const { company } = state
  return {
    company: company
  }
}


export default connect(mapStateToProps)(Portfolio)