import classes from './Order.module.css'
import { OrderGoods } from '../OrderGoods/OrderGoods';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderRequestAsync } from '../../store/order/orderSlice';


export const Order = () => {
  const { totalPrice, totalCount, orderList, orderGoods } = useSelector(state => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderRequestAsync());
  }, [orderList.length]);

  return (
    <div className={classes.order}>
        <section className={classes.wrapper}>
          <div className={classes.header} tabIndex="0" role="button">
            <h2 className={classes.title}>Корзина</h2>

            <span className={classes.count}>{totalCount}</span>
          </div>

          <div className={classes.wrap_list}>
            <ul className={classes.list}>
              {orderGoods.map((item) => <OrderGoods key={item.id} {...item}/>)}
            </ul>

            <div className={classes.total}>
              <p>Итого</p>
              <p>
                <span className={classes.amount}>{totalPrice}</span>
                <span className="currency">&nbsp;₽</span>
              </p>
            </div>

            <button className={classes.submit}>Оформить заказ</button>

            <div className={classes.apeal}>
              <p className={classes.text}>Бесплатная доставка</p>
              <button className={classes.close}>Свернуть</button>
            </div>
          </div>
        </section>
    </div>
  )
}