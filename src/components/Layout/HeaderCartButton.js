import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const { items } = cartCtx;

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => { 
    return currentNumber + item.amount; 
  }, 0);
  const buttonClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;