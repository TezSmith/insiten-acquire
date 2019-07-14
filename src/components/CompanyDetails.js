import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Doughnut, Bar } from 'react-chartjs-2'
import { hideDetails, addCompany, editCompany, deleteCompany, removeCompany } from '../actions/functions'

const CompanyDetails = (props) => {

 const { hideDetails, editCompany, deleteCompany, removeCompany, addCompany, portfolio } = props
 const c = props.details[0]
 const obj = props.details

 // Gives snapshot overview
 const snapshot = (obj) => {

   let fin = obj[0].finances.pop()

   let keys = Object.keys(fin)
   let values = Object.values(fin)

   keys = keys.splice(1)
   values = values.splice(1)
   let v = values.map(x => parseInt(x))

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

 const threeYearSnap = (obj) => {
   let fin = obj[0].finances
   let sorted = fin.sort((a,b) => a.year - b.year)
   let three = []
   
   for (let i = sorted.length-1; i > 0; i--) {
     if (three.length <= 3 ){
       three.push(sorted[i])
     } 
   }

   three = three.sort((a, b) => a.year - b.year)
   let years = three.map(x => x.year)
   let revs = three.map(x => x.rev)
   let exps = three.map(x => x.exp)

   let data = {
     labels: years,
     datasets: [{
       label: "Revenue",
       backgroundColor: "#3e95cd",
       data: revs
     }, {
        label: "Expenses",
        backgroundColor: "#3e95cd",
        data: exps
     }]
   }

   return data

 }

 const balanceSnap = (obj) => {
   let fin = obj[0].finances
   let sorted = fin.sort((a, b) => a.year - b.year)
   let three = []

   for (let i = sorted.length - 1; i > 0; i--) {
     if (three.length <= 3) {
       three.push(sorted[i])
     }
   }

   three = three.sort((a, b) => a.year - b.year)
   let years = three.map(x => x.year)
   let revs = three.map(x => x.rev)
   let ast = three.map(x => x.assets)
   let libs = three.map(x => x.lib)
   let eqs = three.map(x => x.eq)

   let data = {
     labels: years,
     datasets: [{
        label: "Revenue",
        type: "line",
        borderColor: "#8e5ea2",
        data: revs,
        fill: true
     }, {
       label: "Assets",
       type: "bar",
       backgroundColor: "#3e95cd",
       data: ast
     }, {
       label: "Liabilities",
       type: "bar",
       backgroundColor: "#3e95cd",
       data: libs
    }, {
         label: "Equity",
         type: "bar",
         backgroundColor: "#3e95cd",
         data: eqs
    }]
   }

   return data

 }

  const showButton = () => {
    return portfolio.includes(c) === true ? <button className="btn btn-primary mx-1" onClick={() => removeCompany(c)} >Remove From Portfolio</button>
      : <button className="btn btn-primary mx-1" onClick={() => addCompany(c)} >Add To Portfolio</button>
  }

  return (
    <div className="row">

    <div className="details">
        <h1 className="text-center">{c.coname}</h1>
        <p className="lead my-3">{c.hq.city}, {c.hq.state}</p>
        <button className="btn btn-primary mx-1" onClick={hideDetails}> View More Companies </button>
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
            <p className="card-text">{c.hq.street} <br/> {c.hq.city}, {c.hq.state} {c.hq.zipcode} <br/> {c.hq.country} </p>
            <p className="card-text"> <strong>CEO:</strong> {c.ceo.firstname} {c.ceo.lastname}</p>
            {showButton()}
            <button className="btn btn-primary mx-1" onClick={() => editCompany(c)}> Edit </button>
            <button className="btn btn-primary mx-1" onClick={() => deleteCompany(c)}> Delete </button>

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
    details: details,
    portfolio: portfolio
  }
}

const mapDispatchToProps = {
  hideDetails,
  addCompany,
  editCompany,
  removeCompany,
  deleteCompany
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompanyDetails))
