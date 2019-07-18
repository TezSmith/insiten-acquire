import { useState } from 'react';

const useForm = (props, callback) => {

  let ed = props.edit[0]

  const [values, setValues] = useState(ed)
  const [fields, setFields] = useState(ed.finances);

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
    if (i > 0) {
      finances.splice(i, 1)
      console.log("This is finances: ", finances)
     setFields(finances);
    }
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
