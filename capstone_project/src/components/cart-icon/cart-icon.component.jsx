import './cart-icon.styles.scss'
import ShoppingIcon from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { UserCartContext } from '../../contexts/userCart.context'

export default function CartIcon({...otherProps}) {
  const {totalItems} = useContext(UserCartContext);
  return (
    <div 
      {...otherProps}
      className='cart-icon-container'
    >
        <img src={ShoppingIcon} className = 'shopping-icon'/>
        <span className='item-count'>{totalItems}</span>
    </div>
  )
}
