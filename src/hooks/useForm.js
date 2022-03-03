/* **************** Imports **************** */
import { useState } from 'react'
import { helpHttp } from '../helpers/functions/helpHttp'
import calculateBMI from '../utilities/functions/calculateBMI'

/* **************** Variables **************** */

/* **************** Functions **************** */
const useForm = (initialState, callback) => {
  const [form, setForm] = useState(initialState)
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [errors, setErrors] = useState({})
  const { bmi, bmiClass } = calculateBMI(height, weight)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }
  const handleBlur = (event) => {
    handleChange(event)
    setErrors(callback(form))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    calculateBMI(height, weight)
  }

  return {
    form,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    bmi,
    bmiClass
  }
}

/* **************** Code Execution **************** */
export default useForm
