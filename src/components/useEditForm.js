import { useState } from 'react';

const useForm = (props, callback) => {

  let ed = props.edit[0]
  let initFin = ed.finances

  const [values, setValues] = useState(ed)
  const [fields, setFields] = useState(initFin);

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
    if (finances.length === 1) return null
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
    fields,
    ed
  }
}


export default useForm
