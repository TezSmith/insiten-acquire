
import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { showDetails, addCompany, removeCompany } from '../actions/functions'

const CompanyCard = (props) => {
    const {c, showDetails, addCompany, removeCompany, portfolio, match } = props

    const showButton = () => {
      return portfolio.includes(c) === true ? <button onClick={() => removeCompany(c)} className="btn btn-sm btn-danger">Remove From Portfolio</button>
       : <button onClick={() => addCompany(c)} className="btn btn-sm btn-success mx-1 my-1">Add To Portfolio</button>
    }

    return (
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-body shadow-sm ">
            <img src={c.photo} className="card-img"/>
            <h4 className="mt-3
            ">{c.coname}</h4>
            <p className="card-text"> Status: {c.status} </p>
            <div className=" align-items-center">
              <div className="">
              <Link to={`/companies/${c.id}`} className="btn btn-sm btn-primary mx-1"> See Details </Link>
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CompanyCard))
