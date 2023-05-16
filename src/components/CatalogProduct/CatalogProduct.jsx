import classes from './CatalogProduct.module.css'

export const CatalogProduct = (props) => {
  return (
    <article className={classes.product}>
      <img src="../../assets/img/photo-5.jpg" alt={props.title} className={classes.image}/>

      <p className={classes.price}>689<span className="currency">₽</span></p>

      <h3 className={classes.title}>
        <button className={classes.detail}>{props.title}</button>
      </h3>

      <p className={classes.weight}>520г</p>

      <button className={classes.add} type="button">Добавить</button>
    </article>
  );
}