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
        <div className="field">
          <label className="label">Company Name</label>
          <div className="control">
            <input className="input" type="text" name="coname" defaultValue={ed.coname} onChange={handleChange} required />
          </div>
        </div>
        <div className="field">
          <label className="label">Industry</label>
          <div className="control">
            <input className="input" type="type" name="industry" defaultValue={ed.industry} onChange={handleChange}  required />
          </div>
        </div>
        <div className="field">
          <label className="label"> Street Address</label>
          <div className="control">
            <input className="input" type="type" name="street" defaultValue={ed.hq.street} onChange={handleChange} required />
          </div>
        </div>
        <div className="field">
          <label className="label"> City </label>
          <div className="control">
            <input className="input" type="type" name="city" defaultValue={ed.hq.city} onChange={handleChange} required />
          </div>
        </div>
        <div className="field">
          <label className="label"> State </label>
          <div className="control">
            <input className="input" type="type" name="state" defaultValue={ed.hq.state} onChange={handleChange} required />
          </div>
        </div>
        <div className="field">
          <label className="label">Country</label>
          <div className="control">
            <input className="input" type="type" name="country" defaultValue={ed.hq.country} onChange={handleChange} required />
          </div>
        </div>
        <div className="field">
          <label className="label">Zipcode</label>
          <div className="control">
            <input className="input" type="type" name="zipcode" defaultValue={ed.hq.zipcode} onChange={handleChange} required />
          </div>
        </div>

        <h3>Add Company CEO</h3>
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input className="input" type="text" name="firstname" defaultValue={ed.ceo.firstname} onChange={handleChange} required />
          </div>
        </div>
        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input className="input" type="text" name="lastname" defaultValue={ed.ceo.lastname} onChange={handleChange} required />
          </div>
        </div>
        <div className="field">
          <label className="label">Contact Email</label>
          <div className="control">
            <input className="input" type="email" name="email" defaultValue={ed.ceo.email} onChange={handleChange} required />
          </div>
        </div>
        {/* FINANCIALS SECTION */}
        <h3> Finances</h3>
        {fields.map((field, i) => {
          return (
            <div key={`${field}-${i}`}>
              <input
                type="text"
                name="year"
                defaultValue={field.year}
                placeholder="Financial Year"
                onChange={(e) => handleFinanceChange(i, e)}
              />
              <input
                type="text"
                name="rev"
                defaultValue={field.rev}
                placeholder="Revenue"
                onChange={(e) => handleFinanceChange(i, e)}
              />
              <input
                type="text"
                name="exp"
                defaultValue={field.exp}
                placeholder="Expenses"
                onChange={(e) => handleFinanceChange(i, e)}
              />
              <input
                type="text"
                name="assets"
                defaultValue={field.assets}
                placeholder="Assets Valuation"
                onChange={(e) => handleFinanceChange(i, e)}
              />
              <input
                type="text"
                name="lib"
                defaultValue={field.lib}
                placeholder="Liabilities Amount"
                onChange={(e) => handleFinanceChange(i, e)}
              />
              <input
                type="text"
                name="eq"
                defaultValue={field.eq}
                placeholder="Equity Valuation"
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
          <button type="submit" className="button is-block is-info is-fullwidth">Edit Company</button>
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
