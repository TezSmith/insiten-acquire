import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({})
  const [fields, setFields] = useState([{ value: '' }]);


  const handleSubmit = (e) => {
    if (e) e.preventDefault()
    callback()
  }

  const handleChange = (e) => {
    e.persist()
    setValues(values => ({ ...values, [e.target.name]: e.target.value }))
  }

  const handleDynamicChange = (i, e) => {
    e.persist()
 
    const values = [...fields];

    values[i].value = e.target.value;

    setFields(values);

  }

  const handleAdd = (e) => {
    const values = [...fields];
    values.push({ value: '' });
    setFields(values);
  }

  const handleRemove = (i) => {
    const values = [...fields];
    console.log("These are the values: ",values)
    values.splice(i, 1);
    setFields(values);
  }

  return {
    handleAdd,
    handleRemove,
    handleChange,
    handleDynamicChange,
    handleSubmit,
    values,
    fields,
    setFields
  }
}

export default useForm
