/* eslint-disable radix */
import React, { useState } from 'react'

export default () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')
  const updateResult = () => {
    if (parseInt(num1) && parseInt(num2)) {
      setError('')
      // eslint-disable-next-line default-case
      switch (operator) {
        case '+':
          setResult(parseInt(num1) + parseInt(num2))
          break
        case '-':
          setResult(parseInt(num1) - parseInt(num2))
          break
        case '*':
          setResult(parseInt(num1) * parseInt(num2))
          break
        case '/':
          setResult(parseInt(num1) / parseInt(num2))
          break
      }
    } else {
      setError('Please provide a valid number for both operands')
      setResult('')
    }
  }

  return (
    <div className="page">
      <div className="title">React Calculator</div>
      <input type="text" name="num1" onChange={event => setNum1(event.target.value)} />
      <select className="operator" onChange={event => setOperator(event.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="text" name="num2" onChange={event => setNum2(event.target.value)} />
      <input type="submit" value="=" onClick={updateResult} />
      <output className="result">{result}</output>
      <div className="error">{error}</div>
    </div>
  )
}
