import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router"

import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component"

import { UserContext } from "../../contexts/user.context"
import CrownLogo from '../../assets/crown.svg'
import './navigation.styles.scss'
import { signOutAuthUser } from "../../utils/firebase/firebase.utils"
import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { UserCartContext } from "../../contexts/userCart.context"

const Navigation = () => {
  const {currentUser} = useContext(UserContext);

  const {isCartOpen, setIsCartOpen} = useContext(UserCartContext);
  const cartRef = useRef(null);

  useEffect(()=>{
    const handleClickOutsideDropDownBox = (e) =>{
      if(cartRef.current && !cartRef.current.contains(e.target)) setIsCartOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutsideDropDownBox);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDropDownBox);
    }
  },[])

  return (
  <Fragment>
    <nav className="navigation">
        <Link className="logo-container" to='/'>
            <img className="logo" src={CrownLogo} alt="Crown Logo" />
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">SHOP</Link> 
            {
              currentUser ? (
                <span className="nav-link" onClick={signOutAuthUser}>SIGN OUT</span>
              ) : (
              <Link to="/auth">SIGN IN</Link>
              )
            }
            <CartIcon onClick = {() => setIsCartOpen(prev => !prev)}/>
        </div>
        {isCartOpen && <CartDropDown ref = {cartRef}/>}
    </nav>
    <Outlet/>
  </Fragment>
)}
export default Navigation