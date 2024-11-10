import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import CounterArray from "./components/CounterArray";

function App() {
  const [count, setCount] = useState(0)
  const changeCount = (value) => {setCount(count + value) }
  return (

    <div>
     <h1>
       <button onClick = {() => changeCount(+1)}>increment</button>
       {count}
         <button onClick={() => changeCount(-1)}>decrement</button>
     </h1>
        <hr/>
        <CounterArray/>
    </div>
  );
}

export default App;
