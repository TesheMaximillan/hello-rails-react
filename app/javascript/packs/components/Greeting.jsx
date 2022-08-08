import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRandomMessage } from '../redux/reducer'

const Greeting = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRandomMessage());
  }, []);

  const message = useSelector(state => state.reducer);
  return (
    <div>
      <h1>Random Greeting</h1>
      <div>
        <h3>{message.name}</h3>
        <p>{message.greeting}</p>
      </div>
    </div>
  )
}

export default Greeting