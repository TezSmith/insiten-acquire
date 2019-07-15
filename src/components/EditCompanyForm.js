import React from 'react'
import useEditForm from "./useEditForm";
import { connect } from 'react-redux'
import { withRouter  } from 'react-router-dom'
import { updateCompany } from '../actions/functions'
import { getEditDetails } from '../reducers/company';


const EditForm = (props) => {
  const { values, handleChange, handleFinanceChange, handleSubmit, handleAdd, handleRemove, fields, ed } = useEditForm(props, handleCreate);
  const { updateCompany } = props

  function handleCreate() {
    updateCompany(values)
    props.history.push(`/companies/${values.id}`)
  }

  return (
    <div className="container mb-4">
     <div className="row">
      <h2 className="m-4"> Edit {ed.coname}'s Information </h2>
      <form onSubmit={handleSubmit}>

      <div className="field form-group">
          <input className="form-control" type="text" name="coname" defaultValue={ed.coname} onChange={handleChange} placeholder="Company Name" required />
      </div>
      <div className="field form-group">
          <input className="form-control" type="type" name="industry" defaultValue={ed.industry} onChange={handleChange} placeholder="Industry"  required />
      </div>
      <div className="field form-group">
        <div className="control">
          <input className="form-control" type="type" name="photo" defaultValue={ed.photo} onChange={handleChange} placeholder="Company Image" required />
        </div>
      </div>

        <select className="field custom-select mb-3" name="status" onChange={handleChange} defaultValue={ed.status}>
          <option>Select Acquistion Status</option>
          <option value="researching">Researching</option>
          <option value="pending">Pending Approval</option>
          <option value="approved">Approval</option>
          <option value="declined">Declined</option>
        </select>

        <div className="field form-group">
            <input className="form-control" type="type" name="street" defaultValue={ed.hq.street} onChange={handleChange} placeholder="Street Address" required />
        </div>

         <div className="form-row">
          <div className="field form-group col-md-6">
              <input className="form-control" type="type" name="city" defaultValue={ed.hq.city} onChange={handleChange} placeholder="City" required />
          </div>

          <div className="field form-group col-md-4">
              <input className="form-control" type="type" name="state" defaultValue={ed.hq.state} onChange={handleChange} placeholder="State" required />
          </div>

          <div className="field form-group col-md-2">
              <input className="form-control" type="type" name="zipcode" defaultValue={ed.hq.zipcode} onChange={handleChange} placeholder="Zipcode" required />
          </div>
        </div>
        <div className="field form-group">
            <input className="form-control" type="type" name="country" defaultValue={ed.hq.country} onChange={handleChange} placeholder="Country" required />
        </div>

        <h3>Add Company CEO</h3>

        <div className="form-row">
          <div className="field form-group col-md-4">
              <input className="form-control" type="text" name="firstname" defaultValue={ed.ceo.firstname} onChange={handleChange} placeholder="First Name" required />
          </div>
          <div className="field form-group col-md-4">
              <input className="form-control" type="text" name="lastname" defaultValue={ed.ceo.lastname} onChange={handleChange} placeholder="Last Name" required />
          </div>
          <div className="field form-group col-md-4">
              <input className="form-control" type="email" name="email" defaultValue={ed.ceo.email} onChange={handleChange} placeholder="Email" required />
          </div>
        </div>

        <h3> Finances</h3>
        {fields.map((field, i) => {
          return (
            <div key={`${field}-${i}`}>
            <div className="form-row mt-4">
              <div className="field form-group col-md-2">
              <input
                className="form-control"
                type="text"
                name="year"
                defaultValue={field.year}
                placeholder="Financial Year"
                onChange={(e) => handleFinanceChange(i, e)}
              />
              </div>
              <div className="field form-group col-md-2">
              <input
                className="form-control"
                type="text"
                name="rev"
                defaultValue={field.rev}
                placeholder="Revenue"
                onChange={(e) => handleFinanceChange(i, e)}
              />
              </div>
              <div className="field form-group col-md-2">
              <input
                className="form-control"
                type="text"
                name="exp"
                defaultValue={field.exp}
                placeholder="Expenses"
                onChange={(e) => handleFinanceChange(i, e)}
              />
              </div>
              <div className="field form-group col-md-2">
              <input
                className="form-control"
                type="text"
                name="assets"
                defaultValue={field.assets}
                placeholder="Assets Valuation"
                onChange={(e) => handleFinanceChange(i, e)}
              />
              </div>
              <div className="field form-group col-md-2">
              <input
                className="form-control"
                type="text"
                name="lib"
                defaultValue={field.lib}
                placeholder="Liabilities Amount"
                onChange={(e) => handleFinanceChange(i, e)}
              />
              </div>
              <div className="field form-group col-md-2">
              <input
                className="form-control"
                type="text"
                name="eq"
                defaultValue={field.eq}
                placeholder="Equity Valuation"
                onChange={(e) => handleFinanceChange(i, e)}
              />
              </div>
              <button className="btn btn-primary mx-2" type="button" onClick={handleAdd}>
                Add Financial Year
            </button>
              <button className="btn btn-danger" type="button" onClick={(e) => handleRemove(i,e)}>
                Remove Financial Year
            </button>
            </div>
          </div>
          )
        })}
        <div className="mt-5">
          <button type="submit" className="btn btn-success btn-block">Edit Company</button>
        </div>
      </form>
    </div>
   </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { edit } = state.company
  return {
    edit: getEditDetails(state, ownProps)
  }
}

export default withRouter(connect(mapStateToProps, { updateCompany })(EditForm));
