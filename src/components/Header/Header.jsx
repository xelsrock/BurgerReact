import classes from './Header.module.css';
import logo from '../../assets/img/logo.svg';
import { Container } from '../Container/Container';

export const Header = () => {
  return (
    <header className={classes.header}>
      <Container className={classes.header__container}>
        <img className={classes.header__logo} src={logo} alt="Логотип YourMeal"/>

        <div className={classes.header__wrapper}>
          <h1 className={classes.header__title}>
            <span>Только самые</span>
            <span className={classes.header__red}>сочные бургеры!</span>
          </h1>

          <p className={classes.header__appeal}>Бесплатная доставка от 599₽</p>
        </div>
      </Container>
    </header>
  );
};