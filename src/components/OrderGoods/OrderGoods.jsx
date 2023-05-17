import { Count } from "../Count/Count";
import classes from './OrderGoods.module.css'

export const OrderGoods = ({ item, i }) => {
  return (
    <li className={classes.item}>
      <img className={classes.image} src="img/burger_1.jpg" alt={item}/>

      <div className={classes.goods}>
        <h3 className={classes.title}>{item}</h3>

        <p className={classes.weight}>512г</p>

        <p className={classes.price}>1279
          <span className="currency">₽</span>
        </p>
      </div>

     <Count count={1}/>
    </li>
  );
}