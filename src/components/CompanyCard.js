import React from 'react'
import { connect } from 'react-redux'
import { showDetails, addCompany, removeCompany } from '../actions/functions'

const CompanyCard = (props) => {
    const {c, showDetails, addCompany, removeCompany, portfolio } = props

    const showButton = () => {
      return portfolio.includes(c) === true ? <button onClick={() => removeCompany(c)}>Remove From Portfolio</button>
       : <button onClick={() => addCompany(c)}>Add To Portfolio</button>
    }

    return (
      <div>
        <h2>{c.coname}</h2>
        <h4>{c.industry}</h4>
        <p> {c.hq.city}, {c.hq.state}</p>
        <button onClick={() => showDetails(c)}>See Details</button>
        {showButton()}
      </div>
    )
}


const mapStateToProps = (state) => {
  const { portfolio } = state.company
  return {
    portfolio: portfolio
  }
}

const mapDispatchToProps = {
  showDetails,
  addCompany,
  removeCompany
}

export default connect(mapStateToProps,mapDispatchToProps)(CompanyCard)
