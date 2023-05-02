import React, { useState } from 'react'
import './App.css';
import ReactMemo from './ReactMemo';

function App() {

  //1. state
  const [data, setData] = useState(0)
  const [data1, setData1] = useState(10)
  const calculate = calculateValue(data)



  //2. function defination
  let updateData = (e) => {
    console.warn("data update")
    setData(data + 1);
  }

  let updateValue = (e) => {
    setData1(data1 + 2);
  }

  let calValue = (e) => {
    setData((data) => data + 10);
  }

  //3. return
  return (
    <>
      <h1>React react memo</h1>
      <h1> {data}</h1>
      <button onClick={(e) => { updateData(e) }}>data update</button>
      <button onClick={(e) => { updateValue(e) }}>value update</button>
      <ReactMemo value={data1} calValue={calValue} calculate={calculate} />

    </>
  );
}

const calculateValue = (num) => {
  for (let index = 0; index < 10; index++) {
    num += 10
  }
  return num
}

export default App;
