import { useDispatch } from 'react-redux';
import { API_URL } from '../../const';
import classes from './CatalogProduct.module.css'
import { addProduct } from '../../store/order/orderSlice';

export const CatalogProduct = ({ item }) => {

  const dispatch = useDispatch();

  return (
    <article className={classes.product}>
      <img src={`${API_URL}/${item.image}`} alt={item.title} className={classes.image}/>

      <p className={classes.price}>
        {item.price}<span className="currency">&nbsp;₽</span>
      </p>

      <h3 className={classes.title}>
        <button className={classes.detail}>{item.title}</button>
      </h3>

      <p className={classes.weight}>{item.weight}г</p>

      <button 
        className={classes.add}
        type="button"
        onClick={() => {
          dispatch(addProduct({id: item.id}))
        }}
      >Добавить</button>
    </article>
  );
}