import classes from './Order.module.css'
import { OrderGoods } from '../OrderGoods/OrderGoods';

const orderList = ['Супер сырный', 'Картошка фри', 'Жгучий хот-дог'];

export const Order = () => {
  return (
    <div className={classes.order}>
        <section className={classes.wrapper}>
          <div className={classes.header} tabIndex="0" role="button">
            <h2 className={classes.title}>Корзина</h2>

            <span className={classes.count}>4</span>
          </div>

          <div className={classes.wrap_list}>
            <ul className={classes.list}>
              {orderList.map((item, i) => <OrderGoods key={i} item={item}/>)}
            </ul>

            <div className={classes.total}>
              <p>Итого</p>
              <p>
                <span className={classes.amount}>1279</span>
                <span className="currency">₽</span>
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