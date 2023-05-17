import { useDispatch, useSelector } from 'react-redux';
import { CatalogProduct } from '../CatalogProduct/CatalogProduct';
import { Container } from '../Container/Container';
import { Order } from '../Order/Order';
import classes from './Catalog.module.css';
import { useEffect } from 'react';
import { productRequestAsync } from '../../store/product/productSlice';


export const Catalog = () => {
  const { products } = useSelector(state => state.product);
  const dispatch = useDispatch();
  const { category, activeCategory } = useSelector(state => state.category)

  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }
  }, [category, activeCategory])

  return (
    <section className={classes.catalog}>
      <Container className={classes.container}>
        <Order/>

        <div className={classes.wrapper}>
          <h2 className={classes.title}>{category[activeCategory]?.rus}</h2>
      
          {!products.length ? <h2>Товара нет в наличии</h2> : '' }

          <div className={classes.wrap_list}>
            <ul className={classes.list}>
              {products.map(item => (
                <li key={item.id} className={classes.item}>              
                  <CatalogProduct item={item}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};