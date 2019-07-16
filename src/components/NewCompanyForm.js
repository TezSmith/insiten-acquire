import React from 'react'
import useForm from "./useForm";
import { connect } from 'react-redux'
import { createCompany } from '../actions/functions'

const Form = (props) => {
  const { values, handleChange, handleFinanceChange, handleSubmit, handleAdd, handleRemove, fields, obj } = useForm(handleCreate);
  const { createCompany } = props

  function handleCreate() {
    createCompany(values)
  }

  return (
    <div>
     <h2 className="mb-4"> Add A New Company </h2>
      <form onSubmit={handleSubmit}>

        <div className="field form-group">
            <input className="form-control" type="text" name="coname" defaultValue={obj.coname} onChange={handleChange} placeholder="Company Name" required />
        </div>
        <div className="field form-group">
            <input className="form-control" type="type" name="industry" defaultValue={obj.industry} onChange={handleChange} placeholder="Industry"  required />
        </div>
        <div className="field form-group">
          <div className="control">
            <input className="form-control" type="type" name="photo" defaultValue={obj.photo} onChange={handleChange} placeholder="Company Image Url" required />
          </div>
        </div>

        <select className="field custom-select mb-3" name="status" onChange={handleChange}>
          <option >Select Acquistion Status</option>
          <option value="researching">Researching</option>
          <option value="pending">Pending Approval</option>
          <option value="approved">Approval</option>
          <option value="declined">Declined</option>
        </select>

        <div className="field form-group">
            <input className="form-control" type="type" name="street" defaultValue={obj.hq.street} onChange={handleChange} placeholder="Street Address" required />
        </div>

         <div className="form-row">
          <div className="field form-group col-md-6">
              <input className="form-control" type="type" name="city" defaultValue={obj.hq.city} onChange={handleChange} placeholder="City" required />
          </div>

          <div className="field form-group col-md-4">
              <input className="form-control" type="type" name="state" defaultValue={obj.hq.state} onChange={handleChange} placeholder="State" required />
          </div>

          <div className="field form-group col-md-2">
              <input className="form-control" type="type" name="zipcode" defaultValue={obj.hq.zipcode} onChange={handleChange} placeholder="Zipcode" required />
          </div>
        </div>
        <div className="field form-group">
            <input className="form-control" type="type" name="country" defaultValue={obj.hq.country} onChange={handleChange} placeholder="Country" required />
        </div>

        <h3 className="pb-2">Add Company CEO</h3>

        <div className="form-row">
          <div className="field form-group col-md-4">
              <input className="form-control" type="text" name="firstname" defaultValue={obj.ceo.firstname} onChange={handleChange} placeholder="First Name" required />
          </div>
          <div className="field form-group col-md-4">
              <input className="form-control" type="text" name="lastname" defaultValue={obj.ceo.lastname} onChange={handleChange} placeholder="Last Name" required />
          </div>
          <div className="field form-group col-md-4">
              <input className="form-control" type="email" name="email" defaultValue={obj.ceo.email} onChange={handleChange} placeholder="Email" required />
          </div>
        </div>

        <h3> Add Financial Summary </h3>
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
              required/>
              </div>
              <div className="field form-group col-md-2">
              <input
                className="form-control"
                type="text"
                name="rev"
                defaultValue={field.value}
                placeholder="Revenue"
                onChange={(e) => handleFinanceChange(i, e)}
              required/>
              </div>
              <div className="field form-group col-md-2">
              <input
                className="form-control"
                type="text"
                name="exp"
                defaultValue={field.value}
                placeholder="Expenses"
                onChange={(e) => handleFinanceChange(i, e)}
              required/>
              </div>
              <div className="field form-group col-md-2">
              <input
                className="form-control"
                type="text"
                name="assets"
                defaultValue={field.value}
                placeholder="Assets Valuation"
                onChange={(e) => handleFinanceChange(i, e)}
              required/>
              </div>
              <div className="field form-group col-md-2">
              <input
                className="form-control"
                type="text"
                name="lib"
                defaultValue={field.value}
                placeholder="Liabilities Amount"
                onChange={(e) => handleFinanceChange(i, e)}
              required/>
              </div>
              <div className="field form-group col-md-2">
              <input
                className="form-control"
                type="text"
                name="eq"
                defaultValue={field.value}
                placeholder="Equity Valuation"
                onChange={(e) => handleFinanceChange(i, e)}
              required/>
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
        <div className="mt-4">
          <button type="submit" className="btn btn-success">Create Company</button>
        </div>
      </form>

    </div>
  )
}

export default connect(null,{ createCompany })(Form);
