import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import { useContext } from 'react'
import { UserCartContext } from '../../contexts/userCart.context'

export default function CartDropDown() {
  const { userSelectedProducts } = useContext(UserCartContext);

  return (
    <div className='cart-dropdown-container'>
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
      <Button>GO TO CHECKOUT</Button> 
    </div>
  )
}
