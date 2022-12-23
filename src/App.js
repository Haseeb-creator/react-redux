
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(10)

  useEffect(() => {
    console.log("you called me")
  }, [count])

  useEffect(() => {
    console.log(data);
    console.log("you called for data")
  }, [data])
  console.log('rendered');
  return (
    <div className="App">
      <h1>hello</h1>
      <h1>your Count is : {count}</h1>
      <h1>your data is : {data}</h1>
      <button onClick={() => { setCount(count + 1) }} >increase Count</button>
      <button onClick={() => { setData(data + 1) }} >increase data</button>
    </div>
  );
}

export default App;
