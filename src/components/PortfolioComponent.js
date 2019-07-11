import React, { Component } from 'react'
import { connect } from 'react-redux'
import CompanyCard from './CompanyCard'

class Portfolio extends Component {

  render() {
    const { companies } = this.props.companies
    return (
      <div>
        {companies.map(c => <CompanyCard c={c} idx={c.id} key={c.id} />)}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    companies: { ...state.company }
  }
}

export default connect(mapStateToProps)(Portfolio)