import {useState} from 'react'
import './App.css';

function App() {
  let [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>counting</h1>
      <h2>Count: { count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
