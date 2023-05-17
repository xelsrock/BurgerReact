import { API_URL } from '../../const';
import classes from './CatalogProduct.module.css'

export const CatalogProduct = ({ item }) => {
  return (
    <article className={classes.product}>
      <img src={`${API_URL}/${item.image}`} alt={item.title} className={classes.image}/>

      <p className={classes.price}>
        {item.price}<span className="currency">₽</span>
      </p>

      <h3 className={classes.title}>
        <button className={classes.detail}>{item.title}</button>
      </h3>

      <p className={classes.weight}>{item.weight}г</p>

      <button className={classes.add} type="button">Добавить</button>
    </article>
  );
}