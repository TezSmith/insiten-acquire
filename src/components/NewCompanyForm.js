import React from 'react'
import useForm from "./useForm";
import { connect } from 'react-redux'
import { createCompany } from '../actions/functions'

const Form = (props) => {
  const { values, handleChange, handleFinanceChange, handleSubmit, handleAdd, handleRemove, fields, obj } = useForm(handleCreate);
  const { createCompany, back } = props

  function handleCreate() {
    createCompany(values)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field form-group">
          <label className="label">Company Name</label>
            <input className="form-control" type="text" name="coname" defaultValue={obj.coname} onChange={handleChange} required />
        </div>
        <div className="field form-group">
          <label className="label">Industry</label>
            <input className="form-control" type="type" name="industry" defaultValue={obj.industry} onChange={handleChange}  required />
        </div>
        <div className="field form-group">
          <label className="label">Company Image Url</label>
          <div className="control">
            <input className="form-control" type="type" name="photo" defaultValue={obj.photo} onChange={handleChange}  required />
          </div>
        </div>
        <div className="field form-group">
          <label className="label"> Street Address</label>
            <input className="form-control" type="type" name="street" defaultValue={obj.hq.street} onChange={handleChange} required />
        </div>

         <div className="form-row">
          <div className="field form-group col-md-6">
            <label className="label"> City </label>
              <input className="form-control" type="type" name="city" defaultValue={obj.hq.city} onChange={handleChange} required />
          </div>
          <div className="field form-group col-md-4">
            <label className="label"> State </label>
              <input className="form-control" type="type" name="state" defaultValue={obj.hq.state} onChange={handleChange} required />
          </div>
          <div className="field form-group col-md-2">
            <label className="label">Zipcode</label>
              <input className="form-control" type="type" name="zipcode" defaultValue={obj.hq.zipcode} onChange={handleChange} required />
          </div>
        </div>
        <div className="field form-group">
          <label className="label">Country</label>
            <input className="form-control" type="type" name="country" defaultValue={obj.hq.country} onChange={handleChange} required />
        </div>

        <h3>Add Company CEO</h3>

        <div className="form-row">
          <div className="field form-group col-md-4">
            <label className="label">First Name</label>
              <input className="form-control" type="text" name="firstname" defaultValue={obj.ceo.firstname} onChange={handleChange} required />
          </div>
          <div className="field form-group col-md-4">
            <label className="label">Last Name</label>
              <input className="form-control" type="text" name="lastname" defaultValue={obj.ceo.lastname} onChange={handleChange} required />
          </div>
          <div className="field form-group col-md-4">
            <label className="label">Contact Email</label>
              <input className="form-control" type="email" name="email" defaultValue={obj.ceo.email} onChange={handleChange} required />
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
                defaultValue={field.value}
                placeholder="Financial Year"
                onChange={(e) => handleFinanceChange(i, e)}
              />
              </div>
              <div className="field form-group col-md-2">
              <input
                className="form-control"
                type="text"
                name="rev"
                defaultValue={field.value}
                placeholder="Revenue"
                onChange={(e) => handleFinanceChange(i, e)}
              />
              </div>
              <div className="field form-group col-md-2">
              <input
                className="form-control"
                type="text"
                name="exp"
                defaultValue={field.value}
                placeholder="Expenses"
                onChange={(e) => handleFinanceChange(i, e)}
              />
              </div>
              <div className="field form-group col-md-2">
              <input
                className="form-control"
                type="text"
                name="assets"
                defaultValue={field.value}
                placeholder="Assets Valuation"
                onChange={(e) => handleFinanceChange(i, e)}
              />
              </div>
              <div className="field form-group col-md-2">
              <input
                className="form-control"
                type="text"
                name="lib"
                defaultValue={field.value}
                placeholder="Liabilities Amount"
                onChange={(e) => handleFinanceChange(i, e)}
              />
              </div>
              <div className="field form-group col-md-2">
              <input
                className="form-control"
                type="text"
                name="eq"
                defaultValue={field.value}
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
          <button type="submit" className="btn btn-primary">Create Company</button>
        </div>
      </form>

    </div>
  )
}

export default connect(null,{ createCompany })(Form);
