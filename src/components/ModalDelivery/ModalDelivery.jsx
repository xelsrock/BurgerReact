import classNames from 'classnames';
import classes from './ModalDelivery.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/modalDelivery/modalDeliverySlice';
import { submitForm, updateFormValue } from '../../store/form/formSlice';

export const ModalDelivery = () => {

  const { isOpen } = useSelector(state => state.modal);
  const form = useSelector(state => state.form);
  const { orderList } = useSelector(state => state.order);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(updateFormValue({
      field: e.target.name,
      value: e.target.value,
    }))
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(submitForm({...form, orderList}));
  };

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
  
          <form className={classes.form} id='delivery' onSubmit={handleSubmit}>
            <fieldset className={classes.fieldset}>
              <input
                className={classes.input}
                type='text'
                name='name'
                value={form.name}
                placeholder='Ваше имя'
                onChange={handleInputChange}
              />
              <input
                className={classes.input}
                type='tel'
                name='phone'
                value={form.phone}
                placeholder='Телефон'
                onChange={handleInputChange}
              />
            </fieldset>
  
            <fieldset className={classes.fieldset_radio}>
              <label className={classes.label}>
                <input
                  className={classes.radio}
                  type='radio'
                  name='format'
                  value='pickup'
                  checked={form.format === 'pickup'}
                  onChange={handleInputChange}
                />
                <span>Самовывоз</span>
              </label>
  
              <label className={classes.label}>
                <input
                  className={classes.radio}
                  type='radio'
                  name='format'
                  value='delivery'
                  checked={form.format === 'delivery'}
                  onChange={handleInputChange}
                />
                <span>Доставка</span>
              </label>
            </fieldset>
  
            {form.format === 'delivery' && (
              <fieldset className={classes.fieldset}>
                <input
                  className={classes.input}
                  type='text'
                  name='address'
                  value={form.address}
                  placeholder='Улица, дом, квартира'
                  onChange={handleInputChange}
                />
                <input
                  className={classNames(classes.input, classes.input_half)}
                  type='number'
                  name='floor'
                  value={form.floor}
                  placeholder='Этаж'
                  onChange={handleInputChange}
                />
                <input
                  className={classNames(classes.input, classes.input_half)}
                  type='number'
                  name='intercom'
                  value={form.intercom}
                  placeholder='Домофон'
                  onChange={handleInputChange}
                />
              </fieldset>
            )}
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
