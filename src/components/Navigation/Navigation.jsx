import { Container } from "../Container/Container";
import classes from './Navigation.module.css'
import classNames from "classnames";


export const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <Container className={classes.container}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <button className={classNames(classes.button, classes.button_burger, classes.button_active)}>Бургеры</button>
          </li>
          <li className={classes.item}>
            <button className={classNames(classes.button, classes.button_snack)}>Закуски</button>
          </li>
          <li className={classes.item}>
            <button className={classNames(classes.button, classes.button_hotdog)}>Хот-доги</button>
          </li>
          <li className={classes.item}>
            <button className={classNames(classes.button, classes.button_combo)}>Комбо</button>
          </li>
          <li className={classes.item}>
            <button className={classNames(classes.button, classes.button_shawarma)}>Шаурма</button>
          </li>
          <li className={classes.item}>
            <button className={classNames(classes.button, classes.button_pizza)}>Пицца</button>
          </li>
          <li className={classes.item}>
            <button className={classNames(classes.button, classes.button_wok)}>Вок</button>
          </li>
          <li className={classes.item}>
            <button className={classNames(classes.button, classes.button_dessert)}>Десерты</button>
          </li>
          <li className={classes.item}>
            <button className={classNames(classes.button, classes.button_sauce)}>Соусы</button>
          </li>
        </ul>
      </Container>
    </nav>
  );
};