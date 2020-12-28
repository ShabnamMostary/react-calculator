/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable radix */
import React, { useState } from 'react'

export default () => {
  const [num1, setNum1] = useState('')
  const updateNum1 = (event) => {
    setNum1(event.target.value)
  }

  const [num2, setNum2] = useState('')
  const updateNum2 = (event) => {
    setNum2(event.target.value)
  }
  const [operator, setOperaor] = useState('+')
  const updateOperator = (event) => {
    setOperaor(event.target.value)
  }
  const [result, setResult] = useState('')
  const [error, setError] = useState('')
  const updateResult = () => {
    let answer
    // eslint-disable-next-line default-case
    switch (operator) {
      case '+':
        answer = parseInt(num1) + parseInt(num2)
        break
      case '-':
        answer = parseInt(num1 - num2)
        break
      case '*':
        answer = parseInt(num1 * num2)
        break
      case '/':
        answer = parseInt(num1 / num2)
        break
    }
    if (Number.isNaN(answer)) {
      setError('Please provide a valid number for both operands')
      setResult('')
    } else {
      setError('')
      setResult(answer)
    }
  }

  return (
    <div className="page">
      <div className="title">React Calculator</div>
      <input type="text" name="num1" onChange={updateNum1} />
      <select className="operator" onChange={updateOperator}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="text" name="num2" onChange={updateNum2} />
      <input type="submit" value="=" onClick={updateResult} />
      <output className="result">{result}</output>
      <div className="error">{error}</div>
    </div>
  )
}
