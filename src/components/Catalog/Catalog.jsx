import { CatalogProduct } from '../CatalogProduct/CatalogProduct';
import { Container } from '../Container/Container';
import { Order } from '../Order/Order';
import classes from './Catalog.module.css';

const goodsList = [
  { title: 'Мясная бомба' },
  { title: 'Супер сырный' },
  { title: 'Сытный' },
  { title: 'Итальянский' },
  { title: 'Вечная классика' },
  { title: 'Тяжелый удар' },
];

export const Catalog = () => {
  return (
    <section className={classes.catalog}>
      <Container className={classes.container}>
        <Order/>

        <div className={classes.wrapper}>
          <h2 className={classes.title}>Бургеры</h2>

          <div className={classes.wrap_list}>
            <ul className={classes.list}>
              {goodsList.map((item, i) => (
                <li key={i} className={classes.item}>              
                  <CatalogProduct title={item.title}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};