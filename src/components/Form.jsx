/* **************** Imports **************** */
// todo: We are creating a bmi calculator.
import { useState } from 'react'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Form = () => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    calculateBMI()
    setHeight('')
    setWeight('')
  }

  const calculateBMI = () => {
    const bmi = weight / (height / 100) ** 2
    const bmiText = bmi.toFixed(2)

    setBmi(bmiText)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-group'>
          <label htmlFor='height'>Height (cm)</label>
          <input
            type='number'
            name='height'
            id='height'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            pattern='[0-9]*'
            required
            title='Please enter a number'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='weight'>Weight (kg)</label>
          <input
            type='number'
            name='weight'
            id='weight'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            pattern='[0-9]*'
            required
            title='Please enter a number'
          />
        </div>
        <button type='submit'>Calculate BMI</button>
      </form>
      <div className='bmi-result'>
        {bmi && <p>Your BMI is {bmi}</p>}
        {bmi && (
          <p>
            You are{' '}
            {bmi < 18.5
              ? 'underweight'
              : bmi < 25
              ? 'normal'
              : bmi < 30
              ? 'overweight'
              : 'obese'}
          </p>
        )}
      </div>
    </>
  )
}

/* **************** Code Execution **************** */
export default Form
