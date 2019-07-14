import React from 'react'
import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import { showDetails, addCompany, removeCompany } from '../actions/functions'

const CompanyCard = (props) => {
    const {c, showDetails, addCompany, removeCompany, portfolio, match } = props
    
    const showButton = () => {
      return portfolio.includes(c) === true ? <button onClick={() => removeCompany(c)} className="btn btn-sm btn-outline-secondary">Remove From Portfolio</button>
       : <button onClick={() => addCompany(c)} className="btn btn-sm btn-outline-secondary">Add To Portfolio</button>
    }

    return (
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-body shadow-sm ">
            <img src={c.photo} className="card-img"/>
            <h4 className="mt-2">{c.coname}</h4>
            <p className="card-text"> {c.hq.city}, {c.hq.state}</p>
              <div className=" align-items-center">
                <div className="btn-group">
                <button onClick={() => showDetails(c)} className="btn btn-sm btn-outline-secondary">See Details</button>
                {showButton()}
                </div>
              </div>
            </div>
        </div>
      </div>
    )
}


const mapStateToProps = (state, ownProps) => {
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
