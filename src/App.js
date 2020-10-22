import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import InstaActions from "./services/feed"
import './App.css';


function App() {
  const [loading, setLoading] = useState(false)
  const [counter, setCounter] = useState(false)
  const dispatch = useDispatch()
  const mystate = useSelector((state) => state.insta.counter)
  useEffect(() => {
    async function initWorkout() {
      setLoading(true)
      const res = await dispatch(InstaActions.getInstaFeed())

      setLoading(false)
    }

    initWorkout()
  }, [])
  const handleClick = () => {
    dispatch(InstaActions.getCounter())
    console.log(mystate)
    setCounter(mystate)
    console.log(counter)
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Click Me {counter}</button>

    </div>
  );
}

export default App;
