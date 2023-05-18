import { API_URL } from "../../const";
import { Count } from "../Count/Count";
import classes from './OrderGoods.module.css'

export const OrderGoods = ({ title, price, image, count, id, weight }) => {
  return (
    <li className={classes.item}>
      <img className={classes.image} src={`${API_URL}/${image}`} alt={title}/>

      <div className={classes.goods}>
        <h3 className={classes.title}>{title}</h3>

        <p className={classes.weight}>{weight}г</p>

        <p className={classes.price}>{price}
          <span className="currency">&nbsp;₽</span>
        </p>
      </div>

     <Count count={count} id={id}/>
    </li>
  );
}