import { useState } from "react";
import './App.css';
import Timer from './components/Timer.jsx';

function App(){
  const [showTimer, setShowTimer] = useState(false);
  return(
    <>
      <button onClick={() => setShowTimer(!showTimer)}> 타이머 
        {showTimer ? "끄기" : "켜기"}
      </button>
      {showTimer && <Timer />}
    </>
  )
}

export default App;
