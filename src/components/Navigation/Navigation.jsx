import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Container/Container";
import classes from './Navigation.module.css'
import classNames from "classnames";
import { categoryRequestAsync, changeCategory } from "../../store/category/categorySlice";
import { useEffect } from "react";
import { API_URL } from "../../const";


export const Navigation = () => {

  const { category, activeCategory } = useSelector((state) => state.category)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryRequestAsync())
  }, [])

  return (
    <nav className={classes.navigation}>
      <Container className={classes.container}>
        <ul className={classes.list}>
          {category.map((item, index) =>
            <li className={classes.item} key={item.title}>
              <button
                className={classNames(
                  classes.button,
                  activeCategory === index ? classes.button_active : '')}
                style={{ backgroundImage: `url(${API_URL}/${item.image})` }}
                onClick={() => {
                  dispatch(changeCategory({indexCategory: index}))
                }}
              >
                {item.rus}
              </button>
            </li>
          )}
        </ul>
      </Container>
    </nav>
  );
};