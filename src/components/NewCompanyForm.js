import React from 'react'
import useForm from "./useForm";
import { connect } from 'react-redux'
import { createCompany } from '../actions/functions'


const Form = () => {
  const { values, handleChange, handleFinanceChange, handleSubmit, handleAdd, handleRemove, fields } = useForm(handleCreate);

  function handleCreate() {
    createCompany(values)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Company Name</label>
          <div className="control">
            <input className="input" type="text" name="name" onChange={handleChange} required />
          </div>
        </div>
        <div className="field">
          <label className="label">Industry</label>
          <div className="control">
            <input className="input" type="type" name="industry" onChange={handleChange} required />
          </div>
        </div>
        <div className="field">
          <label className="label"> Street Address</label>
          <div className="control">
            <input className="input" type="type" name="street" onChange={handleChange} required />
          </div>
        </div>
        <div className="field">
          <label className="label"> City </label>
          <div className="control">
            <input className="input" type="type" name="city" onChange={handleChange} required />
          </div>
        </div>
        <div className="field">
          <label className="label"> State </label>
          <div className="control">
            <input className="input" type="type" name="state" onChange={handleChange} required />
          </div>
        </div>
        <div className="field">
          <label className="label">Country</label>
          <div className="control">
            <input className="input" type="type" name="country" onChange={handleChange} required />
          </div>
        </div>
        <div className="field">
          <label className="label">Zipcode</label>
          <div className="control">
            <input className="input" type="type" name="zipcode" onChange={handleChange} required />
          </div>
        </div>

        <h3>Add Company CEO</h3>
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input className="input" type="text" name="firstname" onChange={handleChange} required />
          </div>
        </div>
        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input className="input" type="text" name="lastname" onChange={handleChange} required />
          </div>
        </div>
        <div className="field">
          <label className="label">Contact Email</label>
          <div className="control">
            <input className="input" type="email" name="email" onChange={handleChange} required />
          </div>
        </div>
        {/* FINANCIALS SECTION */}
        <h3>Add Your Company Finances</h3>
        {fields.map((field, i) => {
          return (
            <div key={`${field}-${i}`}>
              <input
                type="text"
                name="year"
                defaultValue={field.value}
                placeholder="Enter text"
                onChange={(e) => handleFinanceChange(i, e)}
              />
              <button type="button" onClick={handleAdd}>
                Add Financial Year
            </button>
              <button type="button" onClick={(e) => handleRemove(i,e)}>
                Remove Financial Year
            </button>
            </div>
          )
        })}
          <button type="submit" className="button is-block is-info is-fullwidth">Create Company</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  createCompany
}


export default connect(null, mapDispatchToProps)(Form);
