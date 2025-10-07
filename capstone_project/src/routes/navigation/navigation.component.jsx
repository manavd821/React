import { Fragment } from "react"
import { Link, Outlet } from "react-router"
import CrownLogo from '../../assets/crown.svg'
import './navigation.styles.scss'
import SignIn from "../sign-in/sign-in.component"

const Navigation = () => (
  <Fragment>
    <nav className="navigation">
        <Link className="logo-container" to='/'>
            <img className="logo" src={CrownLogo} alt="Crown Logo" />
        </Link>
        <div className="nav-links-container">
            {/* <Link className="nav-link" to="/">Home</Link> | */}
            <Link className="nav-link" to="/shop">SHOP</Link> 
            <Link to="/signin">SignIn</Link>
        </div>
    </nav>
    <Outlet/>
  </Fragment>
)
export default Navigation