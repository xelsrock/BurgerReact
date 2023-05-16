import classes from './Count.module.css'

export const Count = () => {
  return (
    <div className="count">
      <button className="count__minus">-</button>
      <p className="count__amount">1</p>
      <button className="count__plus">+</button>
    </div>
  )
}
