import classes from './Count.module.css'

export const Count = (props) => {
  return (
    <div className={classes.count}>
      <button className={classes.minus}>-</button>
      <p className={classes.amount}>{props.count}</p>
      <button className={classes.plus}>+</button>
    </div>
  )
}
