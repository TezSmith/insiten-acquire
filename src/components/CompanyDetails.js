import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Doughnut } from 'react-chartjs-2';
import { hideDetails, editCompany, deleteCompany } from '../actions/functions'
import EditCompanyForm from './EditCompanyForm'

const CompanyDetails = (props) => {

 const { hide, hideDetails, editCompany, deleteCompany } = props
 const c = props.details[0]
 const obj = props.details

 // Gives snapshot overview
 const snapshot = (obj) => {

   let fin = obj[0].finances.pop()
   // let snap = [["type", "amount"]]

   let keys = Object.keys(fin)
   let values = Object.values(fin)

   keys = keys.splice(1)
   values = values.splice(1)
   let v = values.map(x => parseInt(x))

    // let i = 0
    // while ( i <= 4 ) {
    //    snap.push( [keys[i], parseInt(values[i])] )
    //    i++
    // }

    let data = {
        labels: keys,
        datasets: [{
          data: v,
          backgroundColor: [
      		'#FF6384',
      		'#36A2EB',
      		'#FFCE56',
          '#FF6384',
          '#36A2EB'
      		],
      		hoverBackgroundColor: [
      		'#FF6384',
      		'#36A2EB',
      		'#FFCE56',
          '#FF6384',
          '#36A2EB'
      		]
       }]
    }

   return data

 }



  return (
    <div className="row">

    <div className="details">
        <h1 className="text-center">{c.coname}</h1>
        <p className="lead my-3">{c.hq.city}, {c.hq.state}</p>
    </div>

    <div className="container mt-5 ">
      <div className="row">
        <div className="col-md-6">
        <div className="card">
          <h5 className="card-header">Profile</h5>
          <img src={c.photo} className="card-img-top" alt="business-profile-photo"/>
          <div className="card-body text-left">
            <h5 className="card-title">{c.coname}</h5>
            <p className="card-text"> <strong>Industry:</strong> {c.industry}</p>
            <p className="card-text">{c.hq.street} <br/> {c.hq.city}, {c.hq.state} {c.hq.zipcode} <br/> {c.hq.country} </p>
            <p className="card-text"> <strong>CEO:</strong> {c.ceo.firstname} {c.ceo.lastname}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
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
            width={400}
            height={400}
            data={snapshot(obj)}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              cutoutPercentage: 60
            }}
          />
          </div>
        </div>

        </div>
      </div>
    </div>


    <div className="container mt-5">
      <div className="row">
        <button className="btn btn-primary mx-2" onClick={hideDetails}> Back </button>
        <button className="btn btn-primary mx-2" onClick={() => editCompany(c)}> Edit </button>
        <button className="btn btn-primary mx-2" onClick={() => deleteCompany(c)}> Delete </button>
      </div>
   </div>



    </div>
  )
}

const mapStateToProps = (state, ownProps) => {

  const { details } = state.company
  return {
    details: details
  }
}

const mapDispatchToProps = {
  hideDetails,
  editCompany,
  deleteCompany
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompanyDetails))
