import { useDispatch } from 'react-redux'
import classes from './Count.module.css'
import { addProduct, removeProduct } from '../../store/order/orderSlice';

export const Count = ({ count, id }) => {
  const dispatch = useDispatch();

  const addCount = () => {
    dispatch(addProduct({ id }))
  }

  const removeCount = () => {
    dispatch(removeProduct({ id }))
  }

  return (
    <div className={classes.count}>
      <button className={classes.minus} onClick={removeCount}>-</button>
      <p className={classes.amount}>{count}</p>
      <button className={classes.plus} onClick={addCount}>+</button>
    </div>
  )
}
