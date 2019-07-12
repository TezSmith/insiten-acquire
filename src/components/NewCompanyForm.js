import React from 'react'
import useForm from "./useForm";
import { connect } from 'react-redux'
import { createCompany } from '../actions/functions'


const Form = () => {
  const { values, handleChange, handleDynamicChange, handleSubmit, handleAdd, handleRemove, fields } = useForm(handleCreate);

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
        {/* OWNER SECTION */}
        <h3>Add Your Company's Owners</h3>
        {fields.map((field, idx) => {
          return (
            <div key={`${field}-${idx}`}>
              <input
                type="text"
                name="owner.name"
                value={field.value}
                placeholder="Enter text"
                onChange={(e) => handleDynamicChange(idx,e)}
              />
              <button type="button" onClick={handleAdd}>
                Add Owner
            </button>
              <button type="button" onClick={(e) => handleRemove(idx, e)}>
                Remove Owner
            </button>
            </div>
          )
        })}
        {/* FINANCIALS SECTION */}
        <h3>Add Your Company Finances</h3>
        {fields.map((field, idx) => {
          return (
            <div key={`${field}-${idx}`}>
              <input
                type="text"
                name="finance.year"
                value={field.value}
                placeholder="Enter text"
                onChange={(e) => handleDynamicChange(idx, e)}
              />
              <button type="button" onClick={handleAdd}>
                Add Financial Year
            </button>
              <button type="button" onClick={(e) => handleRemove(idx,e)}>
                Remove Financial Year
            </button>
            </div>
          )
        })}
          <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  createCompany
}


export default connect(null, mapDispatchToProps)(Form);