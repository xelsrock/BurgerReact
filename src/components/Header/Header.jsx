import classes from './Header.module.css';
import logo from '../../assets/img/logo.svg';
import { Container } from '../Container/Container';

export const Header = () => {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.container}>
        <img className={classes.logo} src={logo} alt="Логотип YourMeal"/>
          <div className={classes.wrapper}>
            <h1 className={classes.title}>
              <span>Только самые</span>
              <span className={classes.red}>сочные бургеры!</span>
            </h1>
            <p className={classes.appeal}>Бесплатная доставка от 599₽</p>
          </div>
        </div> 
      </Container>
    </header>
  );
};