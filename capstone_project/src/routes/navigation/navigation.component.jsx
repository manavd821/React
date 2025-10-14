import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router"
import { UserContext } from "../../contexts/user.context"
import CrownLogo from '../../assets/crown.svg'
import './navigation.styles.scss'
import { signOutAuthUser } from "../../utils/firebase/firebase.utils"

const Navigation = () => {
  const {currentUser} = useContext(UserContext);

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
        </div>
    </nav>
    <Outlet/>
  </Fragment>
)}
export default Navigation