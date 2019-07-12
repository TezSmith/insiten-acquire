import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showCompany, addCompany, removeCompany } from '../actions/functions'
// import * as companyActions from '../actions/functions'


const CompanyCard = (props) => {
    const {c, showCompany, addCompany, removeCompany, portfolio } = props
    return (
      <div>
        <h2>{c.name}</h2>
        <h4>{c.industry}</h4>
        <p>{c.location.city}, {c.location.state}</p>
        <button onClick={() => showCompany(c)}>See Details</button>
        {portfolio.includes(c) !== true ? <button onClick={() => addCompany(c)}>Add To Portfolio</button>
         : <button onClick={() => removeCompany(c)}>Remove From Portfolio</button>
        }
      </div>
    )
}


const mapStateToProps = (state) => {
  const { portfolio } = state.company
  return {
    portfolio: portfolio
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     showCompany: (c) => dispatch(showCompany(c)),
//     addCompany: (c) => dispatch(addCompany(c)),
//     removeCompany: (c) => dispatch(removeCompany(c))
//   }
// }

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    showCompany,
    addCompany,
    removeCompany
  },
  dispatch,
)


// const mapDispatchToProps = {
//   showCompany,
//   addCompany,
//   removeCompany
// }

// const mapDispatchToProps = {
//   ...companyActions
// }

export default connect(mapStateToProps,mapDispatchToProps)(CompanyCard)