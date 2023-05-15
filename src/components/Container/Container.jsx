import classes from './Container.module.css';
import classNames from 'classnames';

export const Container = ({children, className}) => {
  return (
    <div className={classNames(classes.container, className)}>
      {children}
    </div>
  );
}
 
