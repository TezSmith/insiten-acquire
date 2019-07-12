import React from 'react'
import useForm from "./useForm";
import { connect } from 'react-redux'
import { createCompany } from '../actions/functions'


const Form = () => {
  const { values, handleChange, handleSubmit } = useForm(handleCreate);

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
          <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  createCompany
}


export default connect(null, mapDispatchToProps)(Form);