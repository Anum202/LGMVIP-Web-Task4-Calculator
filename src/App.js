import React, { useState } from 'react';
import './App.css';
import * as math from 'mathjs';

function App() {
  const [inputValue, setInputValue] = useState('');

  const onClickHandler = (value) => {
    if (value === 'C') {
      setInputValue('');
    } else if (value === '=') {
      try {
        const result = math.evaluate(inputValue);
        setInputValue(result.toString());
      } catch (e) {
        setInputValue('Error');
      }
    } else {
      setInputValue((prevValue) => prevValue + value);
    }
  };
  
  return (
    <div className="container">
      <div className="wrapper">
        <div className="input-field">
          <input type='text' value={inputValue} readOnly/>
        </div>

        <div className="row-1">
          <button id="clear-btn" onClick={() => onClickHandler('C')}>C</button>
          <button onClick={() => onClickHandler('%')}>%</button>
          <button onClick={() => onClickHandler('/')}>/</button>
        </div>

        <div className="row-2">
          <button onClick={() => onClickHandler('7')}>7</button>
          <button onClick={() => onClickHandler('8')}>8</button>
          <button onClick={() => onClickHandler('9')}>9</button>
          <button onClick={() => onClickHandler('*')}>*</button>
        </div>

        <div className="row-3">
          <button onClick={() => onClickHandler('4')}>4</button>
          <button onClick={() => onClickHandler('5')}>5</button>
          <button onClick={() => onClickHandler('6')}>6</button>
          <button onClick={() => onClickHandler('-')}>-</button>
        </div>

        <div className="row-4">
          <button onClick={() => onClickHandler('1')}>1</button>
          <button onClick={() => onClickHandler('2')}>2</button>
          <button onClick={() => onClickHandler('3')}>3</button>
          <button onClick={() => onClickHandler('+')}>+</button>
        </div>

        <div className="row-5">
          <button onClick={() => onClickHandler('0')}>0</button>
          <button onClick={() => onClickHandler('.')}>.</button>
          <button id="equal-btn" onClick={() => onClickHandler('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;



