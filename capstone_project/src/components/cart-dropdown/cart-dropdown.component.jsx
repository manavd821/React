import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import { useContext } from 'react'
import { UserCartContext } from '../../contexts/userCart.context'
import { useNavigate } from 'react-router'

export default function CartDropDown({...otherProps}) {
  const { userSelectedProducts } = useContext(UserCartContext);
  const { setIsCartOpen } = useContext(UserCartContext);
  const navigate = useNavigate()
  const goToCheckOutHandler = () => {
    navigate('/checkout');
    setIsCartOpen(false);
  }
  
  return (
    <div 
      className='cart-dropdown-container'
      {...otherProps}
    >
    {
      userSelectedProducts.length ? (
        <>
          {userSelectedProducts.map(product => (
            <div 
              key={product.id}
              className='cart-item-container'
            >
              <img
                    src={product.imageUrl}
                    alt={product.name}
                />
              <div className='item-details'>
              <span className='name'>{product.name}</span>
                <span className='price'>{product.quantity} X {product.price}</span>
              </div>

            </div>
          ))}
        </>
        
      ) : (
        <div className='empty-message'>
          No Product Selected
        </div>
      )
    }
        <Button
          onClick = {goToCheckOutHandler}
        >
          GO TO CHECKOUT
        </Button> 
      
    </div>
  )
}
