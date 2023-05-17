import { useState } from 'react';
import classes from './Count.module.css'

export const Count = (props) => {
  
  const [count, setCount] = useState(props.count);
  
  const addCount = () => {
    setCount(count + 1);
  }

  const removeCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className={classes.count}>
      <button className={classes.minus} onClick={removeCount} disabled={count === 1}>-</button>
      <p className={classes.amount}>{count}</p>
      <button className={classes.plus} onClick={addCount}>+</button>
    </div>
  )
}
