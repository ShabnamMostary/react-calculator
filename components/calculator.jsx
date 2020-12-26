/* eslint-disable radix */
import React, { useState } from 'react'

export default () => {
  const [num1, setNum1] = useState('')
  const updateNum1 = (event) => {
    setNum1(parseInt(event.target.value))
  }

  const [num2, setNum2] = useState('')
  const updateNum2 = (event) => {
    setNum2(parseInt(event.target.value))
  }
  const [operator, setOperaor] = useState('+')
  const updateOperator = (event) => {
    setOperaor(event.target.value)
  }
  const [result, setResult] = useState('')
  const updateResult = (event) => {
    event.preventDefault()
    // eslint-disable-next-line default-case
    switch (operator) {
      case '+':
        setResult(num1 + num2)
        break
      case '-':
        setResult(num1 - num2)
        break
      case '*':
        setResult(num1 * num2)
        break
      case '/':
        setResult(num1 / num2)
        break
    }
  }

  return (
    <div className="page">
      <div className="title">React Calculator</div>
      <form className="myForm">
        <input type="text" name="num1" onChange={updateNum1} />
        <select className="operator" onChange={updateOperator}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="text" name="num2" onChange={updateNum2} />
        <input type="submit" value="=" onClick={updateResult} />
      </form>
      <div className="result">{result}</div>
    </div>
  )
}
