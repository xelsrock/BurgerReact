import classNames from 'classnames';
import classes from './ModalDelivery.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/modalDelivery/modalDeliverySlice';

export const ModalDelivery = () => {

  const { isOpen } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  return isOpen && (
    <div className={classes.modal}
      onClick={({target, currentTarget}) => {
        if (target === currentTarget) {
          dispatch(closeModal());
        }
      }}
    >
      <div className={classes.mdelivery}>
        <div className={classes.container}>
          <h2 className={classes.title}>Доставка</h2>
  
          <form className={classes.form} id='delivery'>
            <fieldset className={classes.fieldset}>
              <input
                className={classes.input}
                type='text'
                name='name'
                placeholder='Ваше имя'
              />
              <input
                className={classes.input}
                type='tel'
                name='phone'
                placeholder='Телефон'
              />
            </fieldset>
  
            <fieldset className={classes.fieldset_radio}>
              <label className={classes.label}>
                <input
                  className={classes.radio}
                  type='radio'
                  name='format'
                  value='pickup'
                />
                <span>Самовывоз</span>
              </label>
  
              <label className={classes.label}>
                <input
                  className={classes.radio}
                  type='radio'
                  name='format'
                  value='delivery'
                  checked
                />
                <span>Доставка</span>
              </label>
            </fieldset>
  
            <fieldset className={classes.fieldset}>
              <input
                className={classes.input}
                type='text'
                name='address'
                placeholder='Улица, дом, квартира'
              />
              <input
                className={classNames(classes.input, classes.input_half)}
                type='number'
                name='floor'
                placeholder='Этаж'
              />
              <input
                className={classNames(classes.input, classes.input_half)}
                type='number'
                name='intercom'
                placeholder='Домофон'
              />
            </fieldset>
          </form>
  
          <button className={classes.submit} type='submit' form='delivery'>
            Оформить
          </button>
        </div>
  
        <button 
          className={classes.modal__close}
          type='button'
          onClick={() => {
            dispatch(closeModal());
          }}  
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='5.07422'
              y='5.28247'
              width='1'
              height='20'
              transform='rotate(-45 5.07422 5.28247)'
            />
            <rect
              x='5.78125'
              y='19.4246'
              width='1'
              height='20'
              transform='rotate(-135 5.78125 19.4246)'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
