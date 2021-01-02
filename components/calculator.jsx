import React, { useState } from 'react'

export default () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')
  const updateResult = () => {
    if ((Number(num1) || Number(num1) === 0) && (Number(num2) || Number(num2) === 0)) {
      setError('')
      switch (operator) {
        case '+':
          setResult(Number(num1) + Number(num2))
          break
        case '-':
          setResult(Number(num1) - Number(num2))
          break
        case '*':
          setResult(Number(num1) * Number(num2))
          break
        case '/':
          setResult(Number(num1) / Number(num2))
          break
        default:
      }
    } else {
      setError('Please provide a valid number for both operands')
      setResult('')
    }
  }

  return (
    <div className="page">
      <div className="title">React Calculator</div>
      <input type="text" onChange={event => setNum1(event.target.value)} />
      <select className="operator" onChange={event => setOperator(event.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="text" onChange={event => setNum2(event.target.value)} />
      <input type="submit" value="=" onClick={updateResult} />
      <input className="result" defaultValue={result} />
      <div className="error">{error}</div>
    </div>
  )
}
