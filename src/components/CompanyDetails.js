import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link, Redirect } from 'react-router-dom'
import { Doughnut, Bar } from 'react-chartjs-2'
import { addCompany, deleteCompany, removeCompany } from '../actions/functions'
import { snapshot, threeYearSnap, balanceSnap } from '../chartFunctions'
import { getCompanyDetails } from '../reducers/company';


const CompanyDetails = (props) => {

 const { deleteCompany, removeCompany, addCompany, portfolio, history } = props
 const c = props.details[0]
 const obj = props.details


 const addCard = () => {
   return portfolio.includes(c) === true ? <button className="btn btn-primary mx-1 mt-2" onClick={() => removeCompany(c)} >Remove From Portfolio</button>
     : <button className="btn btn-primary mx-1 mt-2" onClick={() => addCompany(c)} >Add To Portfolio</button>
 }

 const showButton = () => {
   if (portfolio.includes(c) === false) {
     return (
       <div>
         <Link to={`/companies/${c.id}/edit`} className="btn btn-secondary mx-1 mt-2"> Edit </Link>
         <button className="btn btn-danger mx-1 mt-2" onClick={() => deleteCompany(c, history)}> Delete </button>
       </div>
     )
   }
 }


  return (
    <div className="row bg-light">
      <div className="details mt-5">
        <h1 className="text-center">{c.coname}</h1>
        <p className="lead my-3">{c.hq.city}, {c.hq.state}</p>
        <Link to="/companies"className="btn btn-primary mx-1"> View More Companies </Link>
      </div>

      <div className="container mt-5 ">
        <div className="row">
         <div className="col-md-6">
           <div className="card">
            <h5 className="card-header">Profile</h5>
            <img src={c.photo} className="card-img-top" alt="business-profile"/>
            <div className="card-body text-left">
             <h5 className="card-title">{c.coname}</h5>
             <p className="card-text"> <strong>Industry:</strong> {c.industry}</p>
             <p className="card-text"> <strong>Status:</strong> {c.status}</p>
             <p className="card-text">{c.hq.street} <br/> {c.hq.city}, {c.hq.state} {c.hq.zipcode} <br/> {c.hq.country} </p>
             <p className="card-text"> <strong>CEO:</strong> {c.ceo.firstname} {c.ceo.lastname}</p>
             {addCard()}
             {showButton()}
           </div>
         </div>
       </div>

        <div className="col-md-6">

          <div className="card">
            <div className="card-header">
             2019 Financial Snapshot
            </div>
            <div className="card-body text-center">
            <Doughnut
              width={300}
              height={300}
              data={snapshot(obj)}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                cutoutPercentage: 60
              }}
             />
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              3 Year Profit & Loss Statement
            </div>
            <div className="card-body text-center">
              <Bar
                data={threeYearSnap(obj)}
                width={300}
                height={300}
                options={{
                  maintainAspectRatio: false
                }}
              />
            </div>
         </div>
        </div>
      </div>
    </div>

       <div className="container mt-5">
          <div className="card">
            <div className="card-header">
              3 Year Balance Sheet Statement
            </div>
          <div className="card-body text-center">
            <Bar
              data={balanceSnap(obj)}
              width={500}
              height={300}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>
     </div>
  </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { details, portfolio } = state.company
  return {
    details: getCompanyDetails(state, ownProps),
    portfolio: portfolio,
    history: ownProps.history
  }
}

const mapDispatchToProps = {
  addCompany,
  removeCompany,
  deleteCompany
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompanyDetails))
