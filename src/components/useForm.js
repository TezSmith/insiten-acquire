import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({})
  const [fields, setFields] = useState([{}]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault()
    callback()
  }

  const handleChange = (e) => {
    e.persist()
    setValues(values => ({ ...values, [e.target.name]: e.target.value }))
  }

  const handleFinanceChange = (i, e) => {
    e.persist()
    const finances = [...fields];
    finances[i][e.target.name] = e.target.value;
    setValues(values => ({...values, finances}))
  }

  const handleAdd = (e) => {
    setFields(prevFields => [...prevFields, {}])
  }

  const handleRemove = (i) => {
    const finances = [...fields];
    finances.splice(i, 1);
    setFields(finances);
  }

  return {
    handleAdd,
    handleRemove,
    handleChange,
    handleFinanceChange,
    handleSubmit,
    values,
    fields
  }
}

export default useForm
