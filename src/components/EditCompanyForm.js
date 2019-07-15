import React from 'react'
import useEditForm from "./useEditForm";
import { connect } from 'react-redux'
import { updateCompany } from '../actions/functions'

const Form = (props) => {
  const { values, handleChange, handleFinanceChange, handleSubmit, handleAdd, handleRemove, fields, ed } = useEditForm(props, handleCreate);
  const { updateCompany } = props

  function handleCreate() {
    updateCompany(values)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div className="field form-group">
          <label className="label">Company Name</label>
            <input className="form-control" type="text" name="coname" defaultValue={ed.coname} onChange={handleChange} required />
        </div>
        <div className="field form-group">
          <label className="label">Industry</label>
            <input className="form-control" type="type" name="industry" defaultValue={ed.industry} onChange={handleChange}  required />
        </div>
        <div className="field form-group">
          <label className="label">Company Image Url</label>
            <input className="form-control" type="type" name="photo" defaultValue={ed.photo} onChange={handleChange}  required />
        </div>

        <select className="field custom-select" name="status" onChange={handleChange} defaultValue={ed.status}>
          <option>Select Acquistion Status</option>
          <option value="researching">Researching</option>
          <option value="pending">Pending Approval</option>
          <option value="approved">Approval</option>
          <option value="declined">Declined</option>
        </select>


        <div className="field form-group">
          <label className="label"> Street Address</label>
            <input className="form-control" type="type" name="street" defaultValue={ed.hq.street} onChange={handleChange} required />
        </div>

        <div className="form-row">
         <div className="field form-group col-md-6">
           <label className="label"> City </label>
             <input className="form-control" type="type" name="city" defaultValue={ed.hq.city} onChange={handleChange} required />
         </div>
         <div className="field form-group col-md-4">
           <label className="label"> State </label>
             <input className="form-control" type="type" name="state" defaultValue={ed.hq.state} onChange={handleChange} required />
         </div>
         <div className="field form-group col-md-2">
           <label className="label">Zipcode</label>
             <input className="form-control" type="type" name="zipcode" defaultValue={ed.hq.zipcode} onChange={handleChange} required />
         </div>
       </div>

       <div className="field form-group">
         <label className="label">Country</label>
           <input className="form-control" type="type" name="country" defaultValue={ed.hq.country} onChange={handleChange} required />
       </div>

        <h3>Add Company CEO</h3>

        <div className="form-row">
          <div className="field form-group col-md-4">
            <label className="label">First Name</label>
              <input className="form-control" type="text" name="firstname" defaultValue={ed.ceo.firstname} onChange={handleChange} required />
          </div>
          <div className="field form-group col-md-4">
            <label className="label">Last Name</label>
              <input className="form-control" type="text" name="lastname" defaultValue={ed.ceo.lastname} onChange={handleChange} required />
          </div>
          <div className="field form-group col-md-4">
            <label className="label">Contact Email</label>
              <input className="form-control" type="email" name="email" defaultValue={ed.ceo.email} onChange={handleChange} required />
          </div>
        </div>
        {/* FINANCIALS SECTION */}
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
              <button className="btn btn-primary" type="button" onClick={(e) => handleRemove(i,e)}>
                Remove Financial Year
            </button>
            </div>
          </div>
          )
        })}
        <div className="mt-4">
          <button type="submit" className="btn btn-primary">Edit Company</button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { edit } = state.company
  return {
    edit: edit
  }
}

export default connect(mapStateToProps, { updateCompany })(Form);
